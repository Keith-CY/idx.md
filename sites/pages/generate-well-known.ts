import { mkdir } from "fs/promises";
import { resolve } from "path";
import { buildLlmsTxt, buildRobotsTxt } from "./lib/well-known";
import { DATA_ROOT } from "./lib/data-layout";
import { SITE_ORIGIN } from "./lib/site-config";

const LLMS_TXT_PATH = resolve(DATA_ROOT, "llms.txt");
const ROBOTS_TXT_PATH = resolve(DATA_ROOT, "robots.txt");

await mkdir(DATA_ROOT, { recursive: true });
await Bun.write(LLMS_TXT_PATH, buildLlmsTxt(SITE_ORIGIN));
await Bun.write(ROBOTS_TXT_PATH, buildRobotsTxt(SITE_ORIGIN));
