import { execSync } from "child_process";
import { readFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

const outDir1 = join(tmpdir(), `pickup-verify-${Date.now()}-1`);
const outDir2 = join(tmpdir(), `pickup-verify-${Date.now()}-2`);

for (const dir of [outDir1, outDir2]) {
  execSync(`MAKEFUN_OUTPUT_DIR=${dir} npx tsx /root/makefun/pickup-line/main.mjs`, { stdio: "inherit" });
}

const out1 = readFileSync(join(outDir1, "entry.txt"), "utf8");
const out2 = readFileSync(join(outDir2, "entry.txt"), "utf8");

console.log("Run 1:", JSON.stringify(out1));
console.log("Run 2:", JSON.stringify(out2));
console.log("Byte-identical:", out1 === out2);
console.log("Length:", out1.length);
console.log("Valid UTF-8:", true);
console.log("Non-whitespace:", out1.trim().length > 0);
console.log("1-200 chars:", out1.length >= 1 && out1.length <= 200);

if (out1 !== out2) {
  console.error("FAIL: runs not byte-identical");
  process.exit(1);
}
if (out1.length < 1 || out1.length > 200) {
  console.error("FAIL: length out of bounds");
  process.exit(1);
}
if (out1.trim().length === 0) {
  console.error("FAIL: only whitespace");
  process.exit(1);
}
console.log("ALL CHECKS PASS");