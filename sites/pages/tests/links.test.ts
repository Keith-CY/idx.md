import { describe, expect, test } from "bun:test";
import { toRootRelative } from "../lib/links";

describe("toRootRelative", () => {
  test("adds leading slash", () => {
    expect(toRootRelative("types/example.md")).toBe("/types/example.md");
  });

  test("preserves leading slash", () => {
    expect(toRootRelative("/types/example.md")).toBe("/types/example.md");
  });

  test("normalizes empty input", () => {
    expect(toRootRelative("")).toBe("/");
  });
});
