import { describe, expect, test } from "bun:test";
import {
  filterSkillPaths,
  buildRawUrl,
  buildSlugParts,
  buildSlug,
} from "../lib/openai-parse";

const TREE = [
  { path: "skills/alpha/skill-one/SKILL.md", type: "blob" },
  { path: "skills/beta/skill-two/skill.md", type: "blob" },
  { path: "skills/gamma/README.md", type: "blob" },
  { path: "docs/skill.md", type: "blob" },
];

describe("openai parse", () => {
  test("filters SKILL.md and skill.md under skills/", () => {
    expect(filterSkillPaths(TREE)).toEqual([
      "skills/alpha/skill-one/SKILL.md",
      "skills/beta/skill-two/skill.md",
    ]);
  });

  test("builds raw url", () => {
    expect(buildRawUrl("main", "skills/a/b/SKILL.md")).toBe(
      "https://raw.githubusercontent.com/openai/skills/main/skills/a/b/SKILL.md",
    );
  });

  test("builds slug parts for two segment skill path", () => {
    expect(buildSlugParts("skills/alpha/skill-one/SKILL.md")).toEqual({
      owner: "alpha",
      skill: "skill-one",
    });
  });

  test("builds slug parts for single segment skill path", () => {
    expect(buildSlugParts("skills/skill-only/SKILL.md")).toEqual({
      owner: "openai",
      skill: "skill-only",
    });
  });

  test("builds slug string", () => {
    expect(buildSlug({ owner: "alpha", skill: "skill-one" })).toBe(
      "openai-alpha-skill-one",
    );
  });
});
