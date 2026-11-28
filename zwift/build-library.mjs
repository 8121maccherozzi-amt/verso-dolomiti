// Uso: node build-library.mjs <cartella con .zwo (ricorsiva)> [out.json]
// Crea la libreria compatta (nome, collezione, metriche) usata da bestMatches().
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, dirname, basename } from "node:path";
import { parseZwo, metrics } from "./zwift-match.js";

const [, , dir, out = "zwift-library.json"] = process.argv;
if (!dir) { console.error("Uso: node build-library.mjs <cartella_zwo> [out.json]"); process.exit(1); }
async function* walk(d) { for (const e of await readdir(d, { withFileTypes: true })) { const p = join(d, e.name); if (e.isDirectory()) yield* walk(p); else if (/\.zwo$/i.test(e.name)) yield p; } }

const lib = [], seen = new Set();
for await (const f of walk(dir)) {
  try {
    const w = parseZwo(await readFile(f, "utf8"));
    if (w.sport !== "bike" || !w.segments.length) continue;
    const m = metrics(w.segments);
    const key = `${w.name}|${m.dur}|${m.TSS}`; if (seen.has(key)) continue; seen.add(key);
    lib.push({ id: relative(dir, f), name: w.name || basename(f, ".zwo"), collection: basename(dirname(f)), author: w.author, tags: w.tags, metrics: m });
  } catch (e) { console.warn("Saltato", f, e.message); }
}
await writeFile(out, JSON.stringify(lib));
console.log(`${lib.length} workout → ${out}`);
