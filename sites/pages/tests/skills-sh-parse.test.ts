import { describe, expect, test } from "bun:test";
import {
  extractSkillLinksFromSitemap,
  extractSkillLinksFromHtml,
  parseSkillPath,
} from "../lib/skills-sh-parse";

const XML = `<?xml version="1.0"?><urlset>
  <url><loc>https://skills.sh/acme/skillbox/landing-page-guide</loc></url>
  <url><loc>https://skills.sh/about</loc></url>
</urlset>`;

const HTML = `
  <a href="https://skills.sh/acme/skillbox/landing-page-guide">Skill</a>
  <a href="https://skills.sh/about">About</a>
  <a href="/acme/skillbox/landing-page-guide">Relative</a>
`;

describe("skills.sh parsing", () => {
  test("extracts skill links from sitemap", () => {
    expect(extractSkillLinksFromSitemap(XML)).toEqual([
      "https://skills.sh/acme/skillbox/landing-page-guide",
    ]);
  });

  test("extracts skill links from html", () => {
    expect(extractSkillLinksFromHtml(HTML)).toEqual([
      "https://skills.sh/acme/skillbox/landing-page-guide",
    ]);
  });

  test("parses skill path", () => {
    expect(parseSkillPath("https://skills.sh/acme/skillbox/landing-page-guide"))
      .toEqual({ owner: "acme", repo: "skillbox", skill: "landing-page-guide" });
  });
});
