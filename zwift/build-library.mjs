// Uso: node build-library.mjs <out.json> <cartella_zwo>[=sorgente] [<cartella_zwo>[=sorgente] ...]
// Es.: node build-library.mjs zwift-library.json ~/zwo/ufficiali=zwift seblambla=seblambla
// Crea la libreria compatta (nome, collezione, sorgente, metriche) usata da bestMatches().
// sorgente "zwift" = già presente in Zwift; altre sorgenti = file da importare in Documents/Zwift/Workouts/<ID>/.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, basename } from "node:path";
import { parseZwo, metrics } from "./zwift-match.js";

const [, , out, ...dirs] = process.argv;
if (!out || !dirs.length) { console.error("Uso: node build-library.mjs <out.json> <cartella>[=sorgente] ..."); process.exit(1); }
async function* walk(d) { for (const e of await readdir(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) yield* walk(p); else if (/\.zwo$/i.test(e.name)) yield p; } }

const lib = [], seen = new Set();
for (const arg of dirs) {
  const [dir, source = basename(arg)] = arg.split("=");
  let n = 0;
  for await (const f of walk(dir)) {
    try {
      const w = parseZwo(await readFile(f, "utf8"));
      if (w.sport !== "bike" || !w.segments.length) continue;
      const m = metrics(w.segments);
      const key = `${w.name}|${m.dur}|${m.TSS}`; if (seen.has(key)) continue; seen.add(key);
      const rel = relative(dir, f);
      lib.push({ id: `${source}/${rel}`, source, name: w.name || basename(f, ".zwo"), collection: rel.split(/[\\/]/)[0], author: w.author, tags: w.tags, metrics: m });
      n++;
    } catch (e) { console.warn("Saltato", f, e.message); }
  }
  console.log(`${source}: ${n} workout`);
}
await writeFile(out, JSON.stringify(lib));
console.log(`${lib.length} workout → ${out}`);
