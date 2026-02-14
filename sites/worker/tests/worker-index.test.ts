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
    expect(response.headers.get("vary")).toBe("User-Agent");
    const body = await response.text();
    expect(body).toContain("Open the index. Agents learn by browsing.");
    expect(body).toContain("idx.md is an open, agent-first knowledge index");
    expect(body).toContain("https://idx.md/og.jpg");
    expect(body).toContain('property="og:title"');
    expect(body).toContain('property="og:description"');
    expect(body).toContain('property="og:image"');
    expect(body).toContain('name="twitter:title"');
    expect(body).toContain('name="twitter:description"');
    expect(body).toContain('name="twitter:image"');
    expect(body).toContain('name="twitter:url"');
  });

  test("returns markdown for search engine bots", async () => {
    const env = {
      IDX_MD: {
        get: async () => ({ body: "hello" }),
      },
    } as any;

    const response = await worker.fetch(
      new Request("https://idx.md/types", {
        headers: {
          "user-agent":
            "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        },
      }),
      env,
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/markdown; charset=utf-8",
    );
    const body = await response.text();
    expect(body).toBe("hello");
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

  test("proxies /og.jpg from upstream image source", async () => {
    const env = {
      IDX_MD: {
        get: async () => ({ body: "hello" }),
      },
    } as any;

    const originalFetch = globalThis.fetch;
    globalThis.fetch = (async (input: string | URL | Request) => {
      expect(input.toString()).toBe(
        "https://raw.githubusercontent.com/Keith-CY/idx.md/main/assets/og.jpg",
      );
      return new Response("image-bytes", {
        status: 200,
        headers: {
          "content-type": "image/jpeg",
        },
      });
    }) as typeof fetch;

    try {
      const response = await worker.fetch(new Request("https://idx.md/og.jpg"), env);
      expect(response.status).toBe(200);
      expect(response.headers.get("content-type")).toBe("image/jpeg");
      expect(response.headers.get("cache-control")).toBe("public, max-age=86400");
      const body = await response.text();
      expect(body).toBe("image-bytes");
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  test("serves robots.txt without sitemap when sitemap.xml is missing", async () => {
    const env = {
      IDX_MD: {
        get: async () => null,
      },
    } as any;

    const response = await worker.fetch(new Request("https://idx.md/robots.txt"), env);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/plain; charset=utf-8",
    );
    const body = await response.text();
    expect(body).toContain("User-agent: *");
    expect(body).toContain("Allow: /");
    expect(body).not.toContain("Disallow:");
    expect(body).not.toContain("Sitemap:");
  });

  test("bypasses robots.txt in R2 when sitemap.xml is missing", async () => {
    const env = {
      IDX_MD: {
        get: async (key: string) => {
          if (key === "data/robots.txt") {
            return { body: "from-r2" };
          }
          return null;
        },
      },
    } as any;

    const response = await worker.fetch(new Request("https://idx.md/robots.txt"), env);

    expect(response.status).toBe(200);
    const body = await response.text();
    expect(body).not.toBe("from-r2");
    expect(body).toContain("User-agent: *");
    expect(body).not.toContain("Sitemap:");
  });

  test("serves robots.txt from R2 when sitemap.xml exists", async () => {
    const env = {
      IDX_MD: {
        get: async (key: string) => {
          if (key === "data/sitemap.xml") {
            return { body: "<urlset></urlset>" };
          }
          if (key === "data/robots.txt") {
            return { body: "from-r2" };
          }
          return null;
        },
      },
    } as any;

    const response = await worker.fetch(new Request("https://idx.md/robots.txt"), env);

    expect(response.status).toBe(200);
    const body = await response.text();
    expect(body).toBe("from-r2");
  });

  test("serves robots.txt with sitemap when sitemap.xml exists but robots.txt missing", async () => {
    const env = {
      IDX_MD: {
        get: async (key: string) => {
          if (key === "data/sitemap.xml") {
            return { body: "<urlset></urlset>" };
          }
          return null;
        },
      },
    } as any;

    const response = await worker.fetch(new Request("https://idx.md/robots.txt"), env);

    expect(response.status).toBe(200);
    const body = await response.text();
    expect(body).toContain("User-agent: *");
    expect(body).toContain("Sitemap: https://idx.md/sitemap.xml");
  });

  test("serves llms.txt from R2", async () => {
    const env = {
      IDX_MD: {
        get: async (key: string) => {
          if (key === "data/llms.txt") {
            return { body: "llms-content" };
          }
          return null;
        },
      },
    } as any;

    const response = await worker.fetch(new Request("https://idx.md/llms.txt"), env);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/plain; charset=utf-8",
    );
    const body = await response.text();
    expect(body).toBe("llms-content");
  });

  test("serves sitemap.xml from R2", async () => {
    const env = {
      IDX_MD: {
        get: async (key: string) => {
          if (key === "data/sitemap.xml") {
            return { body: "<urlset></urlset>" };
          }
          return null;
        },
      },
    } as any;

    const response = await worker.fetch(new Request("https://idx.md/sitemap.xml"), env);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "application/xml; charset=utf-8",
    );
    const body = await response.text();
    expect(body).toContain("<urlset");
  });

  test("returns 404 for sitemap.xml when not in R2", async () => {
    const env = {
      IDX_MD: {
        get: async () => null,
      },
    } as any;

    const response = await worker.fetch(new Request("https://idx.md/sitemap.xml"), env);

    expect(response.status).toBe(404);
    expect(response.headers.get("content-type")).toBe(
      "text/plain; charset=utf-8",
    );
    expect(response.headers.get("vary")).toBe("User-Agent");
    const body = await response.text();
    expect(body).toBe("Not Found");
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
    expect(response.headers.get("vary")).toBe("User-Agent");
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
    expect(response.headers.get("vary")).toBe("User-Agent");
    const body = await response.text();
    expect(body).toBe("hello");
  });

  test("returns json when vectors shard is found", async () => {
    const env = {
      IDX_MD: {
        get: async (key: string) => {
          expect(key).toBe("data/mintlify/vectors.json");
          return { body: '{"ok":true}' };
        },
      },
    } as any;

    const response = await worker.fetch(
      new Request("https://idx.md/data/mintlify/vectors.json"),
      env,
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "application/json; charset=utf-8",
    );
    expect(response.headers.get("vary")).toBe("User-Agent");
    const body = await response.text();
    expect(body).toBe('{"ok":true}');
  });

  test("adds X-Robots-Tag: noindex for /data/reports/*", async () => {
    const env = {
      IDX_MD: {
        get: async (key: string) => {
          expect(key).toBe("data/reports/rejected.md");
          return { body: "# Rejected sources\n" };
        },
      },
    } as any;

    const response = await worker.fetch(
      new Request("https://idx.md/data/reports/rejected.md"),
      env,
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/markdown; charset=utf-8",
    );
    expect(response.headers.get("x-robots-tag")).toBe("noindex");
    const body = await response.text();
    expect(body).toContain("Rejected");
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
