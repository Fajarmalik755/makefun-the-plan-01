// Turn $100 into $1,000 in 30 days — the plan make.fun will carry out in public.
// Node 22, standard library only. Writes the plan text to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const plan =
  "Day 1: scrape 500 US roofers (owner, email, phone) into a CSV. " +
  "Day 2: verify emails, add revenue signals. " +
  "Day 3: sell it for $49 on Gumroad and cold-email 50 firms/day offering it, " +
  "plus custom lists at $199. Reinvest in more niches. " +
  "Expect 10–20 sales: $500–$1,000 in 30 days.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, plan, "utf8");

// The entry must be 1–280 characters; guard against accidental edits.
const codePoints = [...plan].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`plan must be 1–280 characters, got ${codePoints}`);
}
console.log(`Wrote ${codePoints} characters to ${outPath}`);
