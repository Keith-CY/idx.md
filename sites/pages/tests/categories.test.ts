import { describe, expect, test } from "bun:test";
import { parseCategoriesFromTags } from "../lib/categories";

describe("category normalization", () => {
  test("maps aliases and deduplicates category tags", () => {
    const parsed = parseCategoriesFromTags([
      "skills-sh",
      "category-coding",
      "category-web-frontend-development",
      "category-coding-agents-ides",
    ]);

    expect(parsed.categories).toEqual([
      "coding-agents-ides",
      "web-frontend-development",
    ]);
    expect(parsed.unknown).toEqual([]);
  });

  test("falls back to uncategorized and reports unknown category tags", () => {
    const parsed = parseCategoriesFromTags([
      "category-non-existent-category",
      "skills-sh",
    ]);

    expect(parsed.categories).toEqual(["uncategorized"]);
    expect(parsed.unknown).toEqual(["non-existent-category"]);
  });

  test("keeps known categories and also routes unknown tags to uncategorized", () => {
    const parsed = parseCategoriesFromTags([
      "category-web-frontend-development",
      "category-typo-categroy",
    ]);

    expect(parsed.categories).toEqual([
      "uncategorized",
      "web-frontend-development",
    ]);
    expect(parsed.unknown).toEqual(["typo-categroy"]);
  });

  test("routes entries with no category tags to uncategorized", () => {
    const parsed = parseCategoriesFromTags(["skills-sh", "openclaw"]);
    expect(parsed.categories).toEqual(["uncategorized"]);
    expect(parsed.unknown).toEqual([]);
  });
});
