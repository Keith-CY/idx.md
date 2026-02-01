# Cloudflare Worker (R2) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Serve markdown-only paths from an R2 bucket via a Cloudflare Worker and provide a `sites/worker/wrangler.toml` for deployment.

**Architecture:** A small path-normalization helper (TDD) maps requests to `.md` keys. The Worker fetches from R2 (`IDX_MD` binding) and returns `text/markdown`. `sites/worker/wrangler.toml` defines the worker name, entrypoint, and R2 binding.

**Tech Stack:** TypeScript, Cloudflare Workers, R2.

### Task 1: Add path normalization helper with tests (TDD)

**Files:**
- Create: `sites/worker/lib/paths.ts`
- Create: `tests/worker-paths.test.ts`

**Step 1: Write the failing test**
Create `tests/worker-paths.test.ts`:
```typescript
import { describe, expect, test } from "bun:test";
import { toR2Key } from "../sites/worker/lib/paths";

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
```

**Step 2: Run test to verify it fails**
Run: `bun test tests/worker-paths.test.ts`
Expected: FAIL (module not found).

**Step 3: Write minimal implementation**
Create `sites/worker/lib/paths.ts`:
```typescript
export function toR2Key(pathname: string): string {
  const trimmed = pathname.trim();
  if (!trimmed || trimmed === "/") {
    return "index.md";
  }

  const withoutLeading = trimmed.startsWith("/")
    ? trimmed.slice(1)
    : trimmed;

  if (withoutLeading.endsWith("/")) {
    return `${withoutLeading}index.md`;
  }

  if (withoutLeading.toLowerCase().endsWith(".md")) {
    return withoutLeading;
  }

  return `${withoutLeading}.md`;
}
```

**Step 4: Run test to verify it passes**
Run: `bun test tests/worker-paths.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/worker/lib/paths.ts tests/worker-paths.test.ts
git commit -m "test: add worker path normalization"
```

### Task 2: Add Worker script and wrangler config

**Files:**
- Create: `sites/worker/index.ts`
- Create: `sites/worker/wrangler.toml`

**Step 1: Implement Worker**
Create `sites/worker/index.ts`:
```typescript
import { toR2Key } from "./lib/paths";

type Env = {
  IDX_MD: R2Bucket;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const key = toR2Key(url.pathname);

    const object = await env.IDX_MD.get(key);
    if (!object) {
      return new Response("# Not Found\n\nThe requested markdown was not found.", {
        status: 404,
        headers: {
          "content-type": "text/markdown; charset=utf-8",
        },
      });
    }

    const headers = new Headers();
    headers.set("content-type", "text/markdown; charset=utf-8");
    return new Response(object.body, { status: 200, headers });
  },
};
```

**Step 2: Add wrangler config**
Create `sites/worker/wrangler.toml`:
```toml
name = "idx-md-markdown"
main = "sites/worker/index.ts"
compatibility_date = "2026-02-01"

[[r2_buckets]]
binding = "IDX_MD"
bucket_name = "idx-md"
```

**Step 3: Run tests**
Run: `bun test`
Expected: PASS.

**Step 4: Commit**
```bash
git add sites/worker/index.ts sites/worker/wrangler.toml
 git commit -m "feat: add cloudflare worker for markdown"
```

---

Plan complete and saved to `docs/plans/2026-02-01-cloudflare-worker.md`. Two execution options:

1. Subagent-Driven (this session)
2. Parallel Session (separate)

Which approach?
