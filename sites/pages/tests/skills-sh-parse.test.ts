import { describe, expect, test } from "bun:test";
import {
  buildProbeUrls,
  extractGithubRepo,
  extractMarkdownUrls,
  extractSkillLinksFromHtml,
  extractSkillLinksFromSitemap,
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

const PAGE = `
  <a href="https://raw.githubusercontent.com/acme/skillbox/main/SKILL.md">raw</a>
  <a href="https://github.com/acme/skillbox/blob/main/SKILL.md">blob</a>
  <a href="https://github.com/acme/skillbox">repo</a>
`;

test("extracts markdown urls (normalized)", () => {
  expect(extractMarkdownUrls(PAGE)).toEqual([
    "https://raw.githubusercontent.com/acme/skillbox/main/SKILL.md",
    "https://raw.githubusercontent.com/acme/skillbox/main/SKILL.md",
  ]);
});

test("extracts github repo", () => {
  expect(extractGithubRepo(PAGE)).toEqual({ owner: "acme", repo: "skillbox" });
});

test("builds probe urls", () => {
  expect(buildProbeUrls("acme", "skillbox", ["main"], [
    "SKILL.md",
    "docs/skill.md",
  ])).toEqual([
    "https://raw.githubusercontent.com/acme/skillbox/main/SKILL.md",
    "https://raw.githubusercontent.com/acme/skillbox/main/docs/skill.md",
  ]);
});
