import { describe, expect, test } from "bun:test";
import { resolve } from "path";
import {
  DATA_ROOT,
  bodyPath,
  formatIndexEntry,
  headPath,
} from "../lib/data-layout";
import { repoRoot } from "../lib/paths";

describe("data layout", () => {
  test("writes head/body under data/{topic}", () => {
    expect(DATA_ROOT).toBe(resolve(repoRoot, "data"));
    expect(headPath("mintlify")).toBe(
      resolve(repoRoot, "data", "mintlify", "HEAD.md"),
    );
    expect(bodyPath("mintlify")).toBe(
      resolve(repoRoot, "data", "mintlify", "BODY.md"),
    );
  });

  test("formats index entry with frontmatter and directory path", () => {
    const head = ["---", "title: Mintlify", "---", ""].join("\n");
    const output = formatIndexEntry("mintlify", head);
    expect(output).toContain("---\ntitle: Mintlify\n---");
    expect(output).toContain("|/data/mintlify|");
  });
});
