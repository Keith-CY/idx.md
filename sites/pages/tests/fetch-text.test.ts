import { describe, expect, test } from "bun:test";
import { fetchTextWithCurlFallback } from "../lib/fetch-text";

describe("fetch text with curl fallback", () => {
  test("returns primary fetch result when available", async () => {
    const result = await fetchTextWithCurlFallback("https://example.com/a.md", {
      fetchText: async () => "primary",
      curlText: async () => "fallback",
    });

    expect(result).toBe("primary");
  });

  test("falls back to curl when primary fetch fails", async () => {
    const calls: string[] = [];
    const result = await fetchTextWithCurlFallback("https://example.com/a.md", {
      fetchText: async () => {
        calls.push("fetch");
        return null;
      },
      curlText: async () => {
        calls.push("curl");
        return "fallback";
      },
    });

    expect(result).toBe("fallback");
    expect(calls).toEqual(["fetch", "curl"]);
  });

  test("returns null when both fetch and curl fail", async () => {
    const result = await fetchTextWithCurlFallback("https://example.com/a.md", {
      fetchText: async () => null,
      curlText: async () => null,
    });

    expect(result).toBeNull();
  });
});

