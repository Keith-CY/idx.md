import { normalizeOrigin } from "../../shared/url";

function normalizePath(path: string): string {
  const trimmed = path.trim();
  if (!trimmed) {
    return "";
  }
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function escapeXml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function buildSitemapXml(params: {
  origin: string;
  paths: readonly string[];
}): string {
  const origin = normalizeOrigin(params.origin);
  const urls = new Set<string>();

  for (const path of params.paths) {
    const normalized = normalizePath(path);
    if (!normalized) {
      continue;
    }
    urls.add(`${origin}${normalized}`);
  }

  const sorted = [...urls].sort((a, b) => a.localeCompare(b));
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sorted.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
    "</urlset>",
    "",
  ];

  return lines.join("\n");
}
