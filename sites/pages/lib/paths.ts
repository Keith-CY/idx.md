import { resolve } from "path";
import { fileURLToPath } from "url";

const here = fileURLToPath(import.meta.url);
export const siteRoot = resolve(here, "..", "..");
export const repoRoot = resolve(siteRoot, "..", "..");
export const buildOut = resolve(siteRoot, "out");
