import { describe, expect, test } from "bun:test";
import { toR2Key } from "../lib/paths";

describe("toR2Key", () => {
  test("root maps to data index", () => {
    expect(toR2Key("/")).toBe("data/index.md");
  });

  test("topic path maps to data/{topic}/HEAD.md", () => {
    expect(toR2Key("/mintlify")).toBe("data/mintlify/HEAD.md");
  });

  test("topic file preserves HEAD.md", () => {
    expect(toR2Key("/mintlify/HEAD.md")).toBe("data/mintlify/HEAD.md");
  });

  test("data path is preserved", () => {
    expect(toR2Key("/data/index.md")).toBe("data/index.md");
  });

  test("data topic path maps to HEAD.md", () => {
    expect(toR2Key("/data/mintlify")).toBe("data/mintlify/HEAD.md");
  });

  test("data topic path with slash maps to HEAD.md", () => {
    expect(toR2Key("/data/mintlify/")).toBe("data/mintlify/HEAD.md");
  });
});
