import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";

const PICKUP_LINE = "You're the only token I'd never truncate.";

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const outFile = `${outDir}/entry.txt`;
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, PICKUP_LINE, "utf8");
}

main();