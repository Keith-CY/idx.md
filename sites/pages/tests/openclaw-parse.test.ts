import { describe, expect, test } from "bun:test";
import { parseOpenClawCategories } from "../lib/openclaw-parse";

const SAMPLE = `
<details open>
<summary><h3 style="display:inline">Web & Frontend Development</h3></summary>
- [discord](https://github.com/openclaw/skills/tree/main/skills/steipete/discord/SKILL.md) - Use when you need to control Discord.
</details>
`;

describe("parseOpenClawCategories", () => {
  test("parses categories with h3 attributes", () => {
    const categories = parseOpenClawCategories(SAMPLE);
    expect(categories.length).toBe(1);
    expect(categories[0]?.title).toBe("Web & Frontend Development");
    expect(categories[0]?.slug).toBe("web-frontend-development");
    expect(categories[0]?.items.length).toBe(1);
    expect(categories[0]?.items[0]?.title).toBe("discord");
    expect(categories[0]?.items[0]?.url).toBe(
      "https://github.com/openclaw/skills/tree/main/skills/steipete/discord/SKILL.md",
    );
  });
});
