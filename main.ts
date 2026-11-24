import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const USERNAME = "quintana33";

// Competition rule: one word, at most 30 characters, no spaces or newlines.
if (!/^[^\s]{1,30}$/.test(USERNAME)) {
  throw new Error("entry must be a single word of at most 30 characters");
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputPath = process.env.ENTRY_OUTPUT_PATH
  ? resolve(process.env.ENTRY_OUTPUT_PATH)
  : join(scriptDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, USERNAME, "utf8");
