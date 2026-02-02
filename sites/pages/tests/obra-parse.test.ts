import { describe, expect, test } from "bun:test";
import {
  filterSkillPaths,
  buildRawUrl,
  buildSlugParts,
  buildSlug,
} from "../lib/obra-parse";

const TREE = [
  { path: "skills/brainstorming/SKILL.md", type: "blob" },
  { path: "skills/collaboration/skill.md", type: "blob" },
  { path: "skills/tools/README.md", type: "blob" },
  { path: "docs/skills/brainstorming.md", type: "blob" },
];

describe("obra parse", () => {
  test("filters SKILL.md and skill.md under skills/", () => {
    expect(filterSkillPaths(TREE)).toEqual([
      "skills/brainstorming/SKILL.md",
      "skills/collaboration/skill.md",
    ]);
  });

  test("builds raw url", () => {
    expect(buildRawUrl("main", "skills/brainstorming/SKILL.md")).toBe(
      "https://raw.githubusercontent.com/obra/superpowers/main/skills/brainstorming/SKILL.md",
    );
  });

  test("builds slug parts for single segment skill path", () => {
    expect(buildSlugParts("skills/brainstorming/SKILL.md")).toEqual([
      "brainstorming",
    ]);
  });

  test("builds slug parts for nested skill path", () => {
    expect(buildSlugParts("skills/tools/brainstorming/SKILL.md")).toEqual([
      "tools",
      "brainstorming",
    ]);
  });

  test("builds slug string", () => {
    expect(buildSlug(["tools", "brainstorming"])).toBe(
      "obra-tools-brainstorming",
    );
  });
});
