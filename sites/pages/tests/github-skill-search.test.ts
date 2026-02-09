import { describe, expect, test } from "bun:test";
import {
  buildGithubSkillBaseSlug,
  buildGithubBlobUrl,
  buildGithubRawUrl,
  classifyCategorySlug,
  ensureUniqueSlug,
  matchesSkillMarkdownFilename,
  parseRequiredSkillFrontmatter,
} from "../lib/github-skill-search";

describe("github skill search parsing", () => {
  test("matches SKILL.md and SKILLS.md (case-insensitive)", () => {
    expect(matchesSkillMarkdownFilename("SKILL.md")).toBe(true);
    expect(matchesSkillMarkdownFilename("skill.md")).toBe(true);
    expect(matchesSkillMarkdownFilename("SKILLS.md")).toBe(true);
    expect(matchesSkillMarkdownFilename("skills.md")).toBe(true);
    expect(matchesSkillMarkdownFilename("SkillS.MD")).toBe(true);
    expect(matchesSkillMarkdownFilename("README.md")).toBe(false);
    expect(matchesSkillMarkdownFilename("SKILL.mdx")).toBe(false);
  });

  test("parses required frontmatter fields (name + description)", () => {
    const markdown = [
      "---",
      "name: notion",
      "description: Notion API for creating pages.",
      "---",
      "",
      "# notion",
      "",
      "Body",
      "",
    ].join("\n");

    expect(parseRequiredSkillFrontmatter(markdown)).toEqual({
      ok: true,
      name: "notion",
      description: "Notion API for creating pages.",
    });
  });

  test("rejects missing frontmatter", () => {
    const markdown = "# no frontmatter\n";
    const result = parseRequiredSkillFrontmatter(markdown);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.reason).toContain("frontmatter");
    }
  });

  test("rejects missing required keys", () => {
    const markdown = ["---", "name: only-name", "---", "# x"].join("\n");
    const result = parseRequiredSkillFrontmatter(markdown);
    expect(result.ok).toBe(false);
  });

  test("classifies categories via keywords (best-effort)", () => {
    expect(
      classifyCategorySlug({
        name: "notion",
        description: "Create and manage Notion pages.",
        repoFullName: "openclaw/skills",
        path: "skills/steipete/notion/SKILL.md",
      }),
    ).toBe("notes-pkm");

    expect(
      classifyCategorySlug({
        name: "slack",
        description: "Send messages and react in Slack.",
        repoFullName: "openclaw/skills",
        path: "skills/steipete/slack/SKILL.md",
      }),
    ).toBe("communication");

    expect(
      classifyCategorySlug({
        name: "calendar-management",
        description: "Manage events and scheduling.",
        repoFullName: "acme/calendar-skill",
        path: "SKILL.md",
      }),
    ).toBe("calendar-scheduling");

    expect(
      classifyCategorySlug({
        name: "mystery",
        description: "Does something unclear.",
        repoFullName: "acme/mystery",
        path: "SKILL.md",
      }),
    ).toBe("uncategorized");
  });

  test("builds a stable slug from owner/repo/name", () => {
    expect(
      buildGithubSkillBaseSlug({
        owner: "OpenClaw",
        repo: "Skills",
        name: "Notion API",
      }),
    ).toBe("github-skill-openclaw-skills-notion-api");
  });

  test("builds raw and blob urls from repo metadata", () => {
    expect(
      buildGithubRawUrl({
        owner: "openclaw",
        repo: "skills",
        defaultBranch: "main",
        path: "skills/steipete/notion/SKILL.md",
      }),
    ).toBe(
      "https://raw.githubusercontent.com/openclaw/skills/main/skills/steipete/notion/SKILL.md",
    );

    expect(
      buildGithubBlobUrl({
        owner: "openclaw",
        repo: "skills",
        defaultBranch: "main",
        path: "skills/steipete/notion/SKILL.md",
      }),
    ).toBe(
      "https://github.com/openclaw/skills/blob/main/skills/steipete/notion/SKILL.md",
    );
  });

  test("ensures unique slugs across sources by appending a url hash", () => {
    const seen = new Map<string, string>();
    seen.set("skills/foo", "https://example.com/one.md");

    const unchanged = ensureUniqueSlug({
      type: "skills",
      baseSlug: "bar",
      url: "https://example.com/two.md",
      seenIds: seen,
    });
    expect(unchanged).toBe("bar");

    const updated = ensureUniqueSlug({
      type: "skills",
      baseSlug: "foo",
      url: "https://example.com/two.md",
      seenIds: seen,
    });
    expect(updated).not.toBe("foo");
    expect(updated.startsWith("foo-")).toBe(true);
    expect(seen.get(`skills/${updated}`)).toBe("https://example.com/two.md");
  });
});
