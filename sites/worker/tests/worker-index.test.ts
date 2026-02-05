import { describe, expect, test } from "bun:test";
import worker from "../index";

describe("worker fetch", () => {
  test("returns og html for crawler user agents", async () => {
    const env = {
      IDX_MD: {
        get: async () => ({ body: "hello" }),
      },
    } as any;

    const response = await worker.fetch(
      new Request("https://idx.md/", {
        headers: {
          "user-agent": "Slackbot-LinkExpanding 1.0",
        },
      }),
      env,
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/html; charset=utf-8",
    );
    const body = await response.text();
    expect(body).toContain("Open the index. Agents learn by browsing.");
    expect(body).toContain("idx.md is an open, agent-first knowledge index");
    expect(body).toContain(
      "https://raw.githubusercontent.com/Keith-CY/idx.md/main/assets/og.jpg",
    );
    expect(body).toContain('property="og:title"');
    expect(body).toContain('property="og:description"');
    expect(body).toContain('property="og:image"');
  });

  test("returns og html when og=1 is present", async () => {
    const env = {
      IDX_MD: {
        get: async () => ({ body: "hello" }),
      },
    } as any;

    const response = await worker.fetch(
      new Request("https://idx.md/?og=1"),
      env,
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/html; charset=utf-8",
    );
    const body = await response.text();
    expect(body).toContain("Open the index. Agents learn by browsing.");
  });

  test("returns markdown 404 when missing", async () => {
    const env = {
      IDX_MD: {
        get: async () => null,
      },
    } as any;

    const response = await worker.fetch(new Request("https://idx.md/"), env);

    expect(response.status).toBe(404);
    expect(response.headers.get("content-type")).toBe(
      "text/markdown; charset=utf-8",
    );
    const body = await response.text();
    expect(body).toContain("Not Found");
  });

  test("returns markdown when found", async () => {
    const env = {
      IDX_MD: {
        get: async () => ({ body: "hello" }),
      },
    } as any;

    const response = await worker.fetch(
      new Request("https://idx.md/types"),
      env,
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/markdown; charset=utf-8",
    );
    const body = await response.text();
    expect(body).toBe("hello");
  });

  test("copies http metadata from R2 object when available", async () => {
    const env = {
      IDX_MD: {
        get: async () => ({
          body: "hello",
          writeHttpMetadata: (headers: Headers) => {
            headers.set("etag", "\"abc\"");
            headers.set("cache-control", "max-age=120");
          },
        }),
      },
    } as any;

    const response = await worker.fetch(
      new Request("https://idx.md/types"),
      env,
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("etag")).toBe("\"abc\"");
    expect(response.headers.get("cache-control")).toBe("max-age=120");
    expect(response.headers.get("content-type")).toBe(
      "text/markdown; charset=utf-8",
    );
  });
});
