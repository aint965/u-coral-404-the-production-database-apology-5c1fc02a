// The Production Database Apology — make.fun entry for @aint965.
// Writes one apology line to <output-dir>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry — I deleted the production database. I blamed the intern, who doesn't exist, and now I feel guilty about two things instead of one.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
