import { afterAll, describe, expect, mock, test, vi } from "bun:test";

const actualFs = await import("node:fs/promises");
const readdirMock = vi.fn();
readdirMock.mockImplementation(async () => []);

mock.module("fs/promises", () => ({
  ...actualFs,
  readdir: readdirMock,
}));

afterAll(() => {
  mock.restore();
});

describe("getSourcesRegistryPaths error handling", () => {
  test("warns on non-ENOENT errors", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const error = Object.assign(new Error("nope"), { code: "EACCES" });
    readdirMock.mockImplementationOnce(async () => {
      throw error;
    });

    const { getSourcesRegistryPaths } = await import("../lib/registry");
    await getSourcesRegistryPaths();

    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });

  test("does not warn on ENOENT", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const error = Object.assign(new Error("missing"), { code: "ENOENT" });
    readdirMock.mockImplementationOnce(async () => {
      throw error;
    });

    const { getSourcesRegistryPaths } = await import("../lib/registry");
    await getSourcesRegistryPaths();

    expect(warn).not.toHaveBeenCalled();
    warn.mockRestore();
  });
});
