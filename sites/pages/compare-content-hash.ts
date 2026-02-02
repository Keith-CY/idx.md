import { existsSync } from "fs";
import { compareContentHashes, loadContentHashes } from "./lib/content-hash";

const [prevDir, nextDir] = process.argv.slice(2);
if (!prevDir || !nextDir) {
  console.error("Usage: bun sites/pages/compare-content-hash.ts <prevDir> <nextDir>");
  process.exit(1);
}

if (!existsSync(prevDir)) {
  console.log("changed=true");
  console.log("added=0");
  console.log("removed=0");
  console.log("modified=0");
  process.exit(0);
}

const prev = await loadContentHashes(prevDir);
const next = await loadContentHashes(nextDir);
const diff = compareContentHashes(prev, next);

console.log(`changed=${diff.changed}`);
console.log(`added=${diff.added.length}`);
console.log(`removed=${diff.removed.length}`);
console.log(`modified=${diff.modified.length}`);
