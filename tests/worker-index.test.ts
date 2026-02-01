import { describe, expect, test } from "bun:test";
import worker from "../worker/index";

describe("worker fetch", () => {
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
});
