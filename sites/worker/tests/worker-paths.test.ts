import { describe, expect, test } from "bun:test";
import { toR2Key } from "../lib/paths";

describe("toR2Key", () => {
  test("root maps to index.md", () => {
    expect(toR2Key("/")).toBe("index.md");
  });

  test("trailing slash maps to index.md", () => {
    expect(toR2Key("/types/")).toBe("types/index.md");
  });

  test("non-md path appends .md", () => {
    expect(toR2Key("/types/example")).toBe("types/example.md");
  });

  test("md path preserved", () => {
    expect(toR2Key("/types/example.md")).toBe("types/example.md");
  });
});
