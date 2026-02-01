# Root-Relative Link Output Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Generate root-relative links (e.g., `/types/example.md`) instead of absolute URLs in all build outputs.

**Architecture:** Replace the absolute URL builder in `site/build.ts` with a root-relative link helper in `site/lib/links.ts`. All link-producing functions (`typeIndexUrl`, `entryHeadUrl`, tags, recent, catalog) will use this helper. This keeps internal links domain-agnostic for Cloudflare routing.

**Tech Stack:** TypeScript, Bun.

### Task 1: Add root-relative link helper with tests (TDD)

**Files:**
- Create: `site/lib/links.ts`
- Create: `tests/links.test.ts`

**Step 1: Write the failing test**

Create `tests/links.test.ts`:
```typescript
import { describe, expect, test } from "bun:test";
import { toRootRelative } from "../site/lib/links";

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
```

**Step 2: Run test to verify it fails**
Run: `bun test tests/links.test.ts`
Expected: FAIL (module not found).

**Step 3: Write minimal implementation**
Create `site/lib/links.ts`:
```typescript
export function toRootRelative(pathname: string): string {
  const trimmed = pathname.trim();
  if (!trimmed) {
    return "/";
  }
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}
```

**Step 4: Run test to verify it passes**
Run: `bun test tests/links.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add site/lib/links.ts tests/links.test.ts
git commit -m "test: add root-relative link helper"
```

### Task 2: Switch build outputs to root-relative links

**Files:**
- Modify: `site/build.ts`
- Modify: `tests` if any assert absolute URLs

**Step 1: Update link builder**
- Remove the absolute `BASE_URL` and `buildUrl()` from `site/build.ts`.
- Import `toRootRelative` from `site/lib/links.ts`.
- Update `typeIndexUrl`, `entryHeadUrl`, tag links, recent links, and catalog links to use `toRootRelative` with pathnames like `types/${type}.md`.

**Step 2: Run tests**
Run: `bun test`
Expected: PASS.

**Step 3: Commit**
```bash
git add site/build.ts tests
 git commit -m "feat: output root-relative links"
```

---

Plan complete and saved to `docs/plans/2026-02-01-relative-links.md`. Two execution options:

1. Subagent-Driven (this session)
2. Parallel Session (separate)

Which approach?
