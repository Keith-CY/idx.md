import { describe, expect, test } from "bun:test";
import {
  filterSkillPaths,
  buildRawUrl,
  buildSlugParts,
  buildSlug,
} from "../lib/ibelick-parse";

const TREE = [
  { path: "skills/baseline-ui/SKILL.md", type: "blob" },
  { path: "skills/fixing-accessibility/SKILL.md", type: "blob" },
  { path: "skills/README.md", type: "blob" },
  { path: "docs/skill.md", type: "blob" },
];

describe("ibelick parse", () => {
  test("filters SKILL.md and skill.md under skills/", () => {
    expect(filterSkillPaths(TREE)).toEqual([
      "skills/baseline-ui/SKILL.md",
      "skills/fixing-accessibility/SKILL.md",
    ]);
  });

  test("builds raw url", () => {
    expect(buildRawUrl("main", "skills/baseline-ui/SKILL.md")).toBe(
      "https://raw.githubusercontent.com/ibelick/ui-skills/main/skills/baseline-ui/SKILL.md",
    );
  });

  test("builds slug parts", () => {
    expect(buildSlugParts("skills/baseline-ui/SKILL.md")).toEqual([
      "baseline-ui",
    ]);
  });

  test("builds slug string", () => {
    expect(buildSlug(["baseline-ui"])).toBe("ibelick-baseline-ui");
  });
});
