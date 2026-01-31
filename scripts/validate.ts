import { loadSources } from "./lib/registry";

const result = await loadSources();

if (!result.ok) {
  console.error("Source registry validation errors:");
  for (const error of result.errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Sources: ${result.sources.length}`);
