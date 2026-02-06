import { describe, expect, test } from "bun:test";
import {
  categoryTagForKnowledgeWorkPath,
  categoryTagsForKnowledgeWorkPath,
} from "../lib/knowledge-work-categories";

describe("knowledge-work category mapping", () => {
  test("maps plugin paths to known category tags", () => {
    expect(
      categoryTagForKnowledgeWorkPath("data/skills/sql-queries/SKILL.md"),
    ).toBe("category-data-analytics");
    expect(
      categoryTagForKnowledgeWorkPath("marketing/commands/seo-audit.md"),
    ).toBe("category-marketing-sales");
    expect(
      categoryTagForKnowledgeWorkPath("productivity/commands/start.md"),
    ).toBe("category-productivity-tasks");
    expect(
      categoryTagForKnowledgeWorkPath("enterprise-search/commands/search.md"),
    ).toBe("category-search-research");
  });

  test("returns no category tags for unknown plugin roots", () => {
    expect(categoryTagForKnowledgeWorkPath("unknown/skills/a.md")).toBeNull();
    expect(categoryTagsForKnowledgeWorkPath("unknown/skills/a.md")).toEqual([]);
  });
});
