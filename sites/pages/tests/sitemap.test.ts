import { describe, expect, test } from "bun:test";
import { buildSitemapXml } from "../lib/sitemap";

describe("sitemap", () => {
  test("buildSitemapXml returns deterministic, de-duplicated absolute URLs", () => {
    const xml = buildSitemapXml({
      origin: "https://idx.md/",
      paths: ["/data/index.md", "category/index.md", "/data/index.md"],
    });

    expect(xml).toBe(
      [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        "  <url><loc>https://idx.md/category/index.md</loc></url>",
        "  <url><loc>https://idx.md/data/index.md</loc></url>",
        "</urlset>",
        "",
      ].join("\n"),
    );
  });
});
