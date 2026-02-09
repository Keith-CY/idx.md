import { normalizeOrigin } from "./url";

export function buildRobotsTxt(origin: string): string {
  const base = normalizeOrigin(origin);
  return [
    "User-agent: *",
    "Allow: /",
    "Disallow: /data/reports/",
    `Sitemap: ${base}/sitemap.xml`,
    "",
  ].join("\n");
}

export function buildLlmsTxt(origin: string): string {
  const base = normalizeOrigin(origin);
  return [
    "idx.md",
    "",
    "Agent-first markdown library. Browse the index, then fetch HEAD/BODY per topic.",
    "",
    `Start: ${base}/SKILL.md`,
    `Index: ${base}/data/index.md`,
    `By capability: ${base}/category/index.md`,
    `By scenario: ${base}/scenario/index.md`,
    `By industry: ${base}/industry/index.md`,
    "",
    `HEAD: ${base}/{topic} (alias of /data/{topic}/HEAD.md)`,
    `BODY: ${base}/{topic}/BODY.md`,
    "",
    `Sitemap: ${base}/sitemap.xml`,
    "",
  ].join("\n");
}

