// The GPS Swears It Was a Shortcut — make.fun entry
// A single line: the GPS's own excuse, smug and defensive, blaming the map.
// Node 22 stdlib only. No network, no files read. Writes entry.txt to $MAKEFUN_OUTPUT_DIR.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Beat 1 — the accusation, answered with the map as the fall guy.
const blame = "The map swore this cul-de-sac was a shortcut, and I believed it";
// Beat 2 — the defence: believing the map is the job, done with pride.
const defence = "believing the map is literally my job, and frankly, I do it beautifully";

const entry = `${blame} — ${defence}.`;

// Gate: UTF-8, 1-200 chars, single line, not only whitespace.
// Verified 2026-11-25: entry measures 138 chars, 1 line, exit 0 twice,
// byte-identical output across runs.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, must be 1-200`);
}
if (entry.includes("\n") || entry.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${entry.length} chars)`);
