// zwift-match.js — confronto sedute del piano ↔ libreria workout Zwift (.zwo) e generazione .zwo
// Modulo ES puro: funziona nel browser e in Node (>=18). Nessuna dipendenza.
//
// Formato interno di una seduta/workout: array di segmenti
//   { d: secondi, p0: %FTP inizio (0.75 = 75%), p1: %FTP fine (= p0 se costante), kind?: "warmup"|"cooldown"|"free" }
// Le sedute del piano vanno convertite in questo formato con un adattatore (vedi planToSegments).

// ---------- Zone (Coggan, % FTP) ----------
export const ZONES = [0.55, 0.75, 0.90, 1.05, 1.20];          // limiti Z1|Z2|Z3|Z4|Z5|Z6+
const zoneOf = p => { let z = 0; while (z < ZONES.length && p >= ZONES[z]) z++; return z; };
const THR = Array.from({ length: 19 }, (_, i) => 0.60 + i * 0.05); // soglie 60%..150% per la curva "tempo sopra soglia"

// ---------- Parsing .zwo ----------
const attr = (s, n) => { const m = s.match(new RegExp(`\\b${n}\\s*=\\s*"([^"]*)"`, "i")); return m ? m[1] : null; };
const num = (s, n, def = null) => { const v = attr(s, n); return v == null || v === "" ? def : parseFloat(v); };
const tag = (xml, n) => { const m = xml.match(new RegExp(`<${n}>([\\s\\S]*?)</${n}>`, "i")); return m ? m[1].trim() : ""; };
const unesc = s => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");

export function parseZwo(xml) {
  const body = tag(xml, "workout");
  const segs = [];
  // elementi con o senza chiusura, ignorando textevent annidati
  for (const m of body.matchAll(/<(Warmup|Cooldown|SteadyState|Ramp|IntervalsT|FreeRide|MaxEffort|SolidState)\b([^>]*?)\/?>/gi)) {
    const t = m[1].toLowerCase(), a = m[2];
    const d = num(a, "Duration", 0);
    if (t === "intervalst") {
      const r = num(a, "Repeat", 1), on = num(a, "OnDuration", 0), off = num(a, "OffDuration", 0);
      const pon = num(a, "OnPower", num(a, "PowerOnHigh", 1)), poff = num(a, "OffPower", num(a, "PowerOffLow", 0.5));
      for (let i = 0; i < r; i++) { segs.push({ d: on, p0: pon, p1: pon }); if (off) segs.push({ d: off, p0: poff, p1: poff }); }
    } else if (t === "steadystate" || t === "solidstate") {
      const p = num(a, "Power", null) ?? (((num(a, "PowerLow", 0.6) + num(a, "PowerHigh", 0.6)) / 2));
      segs.push({ d, p0: p, p1: p });
    } else if (t === "freeride") {
      segs.push({ d, p0: 0.6, p1: 0.6, kind: "free" });           // ipotesi: libero ≈ Z2 bassa
    } else if (t === "maxeffort") {
      segs.push({ d, p0: 1.5, p1: 1.5 });
    } else {                                                        // warmup / cooldown / ramp
      const lo = num(a, "PowerLow", 0.5), hi = num(a, "PowerHigh", lo);
      segs.push({ d, p0: lo, p1: hi, kind: t === "ramp" ? undefined : t });
    }
  }
  return {
    name: unesc(tag(xml, "name")), author: unesc(tag(xml, "author")),
    description: unesc(tag(xml, "description")),
    sport: tag(xml, "sportType") || "bike",
    tags: [...xml.matchAll(/<tag\s+name="([^"]+)"/gi)].map(x => x[1]),
    segments: segs.filter(s => s.d > 0),
  };
}

// ---------- Metriche ----------
function samples(segs) {                       // potenza secondo per secondo (%FTP)
  const out = [];
  for (const s of segs) for (let t = 0; t < s.d; t++) out.push(s.p0 + (s.p1 - s.p0) * (t + 0.5) / s.d);
  return out;
}

export function metrics(segs) {
  const w = samples(segs), n = w.length;
  if (!n) return null;
  // NP: media mobile 30 s, quarta potenza
  let acc = 0, s4 = 0, cnt = 0; const q = [];
  for (const p of w) { q.push(p); acc += p; if (q.length > 30) acc -= q.shift(); if (q.length === 30) { s4 += (acc / 30) ** 4; cnt++; } }
  const IF = cnt ? (s4 / cnt) ** 0.25 : w.reduce((a, b) => a + b, 0) / n;
  const zones = [0, 0, 0, 0, 0, 0]; for (const p of w) zones[zoneOf(p)]++;
  const above = THR.map(t => w.filter(p => p >= t).length / n);
  // "sforzi": tratti continui ≥ 88% FTP (sweet spot/soglia e oltre)
  const bouts = []; let run = 0;
  for (const p of w) { if (p >= 0.88) run++; else if (run) { bouts.push(run); run = 0; } }
  if (run) bouts.push(run);
  const work = bouts.filter(b => b >= 15);
  return {
    dur: n, IF: +IF.toFixed(3), TSS: Math.round(n / 3600 * IF * IF * 100),
    zones: zones.map(z => z / n), above,
    nEff: work.length, effMean: work.length ? Math.round(work.reduce((a, b) => a + b, 0) / work.length) : 0,
    effMax: work.length ? Math.max(...work) : 0, pMax: Math.max(...w),
  };
}

// ---------- Somiglianza ----------
// Pesi tarabili. Punteggio finale 0–100.
export const WEIGHTS = { zones: 0.30, above: 0.25, effort: 0.20, dur: 0.15, tss: 0.10 };
const relErr = (a, b) => Math.abs(a - b) / Math.max(a, b, 1e-9);

export function similarity(a, b, w = WEIGHTS) {
  // distribuzione per zone (L1/2 ∈ [0,1]), con le zone alte pesate di più
  const zw = [0.5, 0.7, 1, 1.3, 1.5, 1.5];
  let zd = 0, zn = 0; for (let i = 0; i < 6; i++) { zd += zw[i] * Math.abs(a.zones[i] - b.zones[i]); zn += zw[i] * (a.zones[i] + b.zones[i]); }
  const sZones = 1 - zd / Math.max(zn, 1e-9);
  // curva "tempo sopra soglia"
  let ad = 0; for (let i = 0; i < THR.length; i++) ad += Math.abs(a.above[i] - b.above[i]);
  const sAbove = 1 - Math.min(1, ad / THR.length * 4);
  // struttura degli sforzi: numero, durata media, durata massima
  const sEff = (a.nEff === 0 && b.nEff === 0) ? 1
    : 1 - (0.3 * relErr(a.nEff, b.nEff) + 0.4 * relErr(a.effMean, b.effMean) + 0.3 * relErr(a.effMax, b.effMax));
  const sDur = Math.max(0, 1 - relErr(a.dur, b.dur) * 2);       // -50% durata → 0
  const sTss = Math.max(0, 1 - relErr(a.TSS, b.TSS) * 2);
  const score = w.zones * sZones + w.above * sAbove + w.effort * sEff + w.dur * sDur + w.tss * sTss;
  return { score: Math.round(100 * score), parts: { zones: sZones, above: sAbove, effort: sEff, dur: sDur, tss: sTss } };
}

// library: [{ id, name, url?, metrics }] (precalcolata con build-library.mjs)
export function bestMatches(sessionSegs, library, { top = 3, minScore = 0, durTolerance = 0.35 } = {}) {
  const m = metrics(sessionSegs);
  return library
    .filter(x => relErr(x.metrics.dur, m.dur) <= durTolerance)   // pre-filtro durata
    .map(x => ({ ...x, ...similarity(m, x.metrics) }))
    .filter(x => x.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, top);
}

// ---------- Generazione .zwo (opzione D) ----------
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const f2 = x => (+x).toFixed(2);

export function toZwo(segs, { name = "Seduta", description = "", author = "Verso le Dolomiti", tags = [] } = {}) {
  const lines = [];
  // ricompatta coppie on/off ripetute in IntervalsT
  for (let i = 0; i < segs.length;) {
    const a = segs[i], b = segs[i + 1];
    const flat = s => s && Math.abs(s.p0 - s.p1) < 1e-6;
    if (flat(a) && flat(b) && a.p0 !== b.p0) {
      let r = 1;
      while (segs[i + 2 * r] && segs[i + 2 * r + 1] && flat(segs[i + 2 * r]) && flat(segs[i + 2 * r + 1]) &&
             segs[i + 2 * r].d === a.d && segs[i + 2 * r].p0 === a.p0 && segs[i + 2 * r + 1].d === b.d && segs[i + 2 * r + 1].p0 === b.p0) r++;
      if (r >= 2) {
        lines.push(`<IntervalsT Repeat="${r}" OnDuration="${a.d}" OffDuration="${b.d}" OnPower="${f2(a.p0)}" OffPower="${f2(b.p0)}"/>`);
        i += 2 * r; continue;
      }
    }
    if (a.kind === "free") lines.push(`<FreeRide Duration="${a.d}" FlatRoad="1"/>`);
    else if (flat(a)) lines.push(`<SteadyState Duration="${a.d}" Power="${f2(a.p0)}"/>`);
    else {
      const t = a.kind === "warmup" || (i === 0 && a.p1 > a.p0) ? "Warmup"
              : a.kind === "cooldown" || (i === segs.length - 1 && a.p1 < a.p0) ? "Cooldown" : "Ramp";
      lines.push(`<${t} Duration="${a.d}" PowerLow="${f2(a.p0)}" PowerHigh="${f2(a.p1)}"/>`);
    }
    i++;
  }
  return `<workout_file>
    <author>${esc(author)}</author>
    <name>${esc(name)}</name>
    <description>${esc(description)}</description>
    <sportType>bike</sportType>
    <tags>${tags.map(t => `<tag name="${esc(t)}"/>`).join("")}</tags>
    <workout>
        ${lines.join("\n        ")}
    </workout>
</workout_file>
`;
}

// ---------- Adattatore piano → segmenti ----------
// DA COMPLETARE quando è noto lo schema delle sedute della dashboard.
// Esempio di schema supportato: [{ dur: "10:00"|600, pct: 65 | [50,75], reps?: 5, on?: {...}, off?: {...} }]
const sec = v => typeof v === "number" ? v : v.split(":").reduce((a, b) => a * 60 + +b, 0);
const frac = v => (v > 3 ? v / 100 : v);
export function planToSegments(steps) {
  const out = [];
  for (const s of steps) {
    if (s.reps) { for (let i = 0; i < s.reps; i++) { out.push(...planToSegments([s.on])); if (s.off) out.push(...planToSegments([s.off])); } continue; }
    const [lo, hi] = Array.isArray(s.pct) ? s.pct : [s.pct, s.pct];
    out.push({ d: sec(s.dur), p0: frac(lo), p1: frac(hi), kind: s.kind });
  }
  return out;
}
