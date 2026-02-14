import { describe, expect, test } from "bun:test";
import { toR2Key } from "../lib/paths";

describe("toR2Key", () => {
  test("root maps to SKILL.md", () => {
    expect(toR2Key("/")).toBe("data/SKILL.md");
  });

  test("skill doc maps to SKILL.md (lowercase)", () => {
    expect(toR2Key("/skill.md")).toBe("data/SKILL.md");
  });

  test("skill doc maps to SKILL.md (uppercase)", () => {
    expect(toR2Key("/SKILL.md")).toBe("data/SKILL.md");
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

  test("data vectors path preserves json suffix", () => {
    expect(toR2Key("/data/mintlify/vectors.json")).toBe(
      "data/mintlify/vectors.json",
    );
  });

  test("topic vectors path preserves json suffix", () => {
    expect(toR2Key("/mintlify/vectors.json")).toBe("data/mintlify/vectors.json");
  });
});
