import { describe, expect, test } from "bun:test";
import { normalizeGithubRawUrl, validateSourceUrl } from "../scripts/lib/source-url";

describe("validateSourceUrl", () => {
  test("accepts .md URLs", () => {
    const result = validateSourceUrl("https://example.com/docs/guide.md");
    expect(result.ok).toBe(true);
  });

  test("rejects .mdx URLs", () => {
    const result = validateSourceUrl("https://example.com/docs/guide.mdx");
    expect(result.ok).toBe(false);
  });

  test("rejects .txt URLs", () => {
    const result = validateSourceUrl("https://example.com/docs/llms.txt");
    expect(result.ok).toBe(false);
  });

  test("rejects github.com HTML URLs", () => {
    const result = validateSourceUrl(
      "https://github.com/org/repo/blob/main/README.md",
    );
    expect(result.ok).toBe(false);
  });
});

describe("normalizeGithubRawUrl", () => {
  test("maps github.com/raw to raw.githubusercontent.com", () => {
    const result = normalizeGithubRawUrl(
      "https://github.com/org/repo/raw/main/path/SKILL.md",
    );
    expect(result).toBe(
      "https://raw.githubusercontent.com/org/repo/main/path/SKILL.md",
    );
  });

  test("returns null for non-raw github.com URLs", () => {
    const result = normalizeGithubRawUrl(
      "https://github.com/org/repo/blob/main/path/SKILL.md",
    );
    expect(result).toBe(null);
  });
});
