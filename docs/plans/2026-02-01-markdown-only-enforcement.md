# Markdown-Only Enforcement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Enforce `.md`-only source URLs (drop `.txt`/`.mdx`), allow `{}` in content by removing MDX content scanning, and normalize GitHub `/raw/` links to `raw.githubusercontent.com` during OpenClaw ingest.

**Architecture:** Add a small URL validation/normalization helper module that is covered by tests. Use it in registry validation to block non-`.md` URLs (and non-raw GitHub links), update OpenClaw ingest to map GitHub `/raw/` URLs to raw, and remove content-based MDX detection in build/validate.

**Tech Stack:** TypeScript, Bun, Zod, YAML.

### Task 1: Add URL validation + normalization helpers with tests (TDD)

**Files:**
- Create: `scripts/lib/source-url.ts`
- Create: `tests/source-url.test.ts`

**Step 1: Write the failing tests**

Create `tests/source-url.test.ts`:
```typescript
import { describe, expect, test } from "bun:test";
import { normalizeGithubRawUrl, validateSourceUrl } from "../scripts/lib/source-url";

describe("validateSourceUrl", () => {
  test("accepts .md URLs", () => {
    const result = validateSourceUrl("https://example.com/docs/guide.md");
    expect(result.ok).toBe(true);
  });

  test("rejects .mdx URLs", () => {
    const result = validateSourceUrl("https://example.com/docs/guide.mdx");
    expect(result.ok).toBe(false);
  });

  test("rejects .txt URLs", () => {
    const result = validateSourceUrl("https://example.com/docs/llms.txt");
    expect(result.ok).toBe(false);
  });

  test("rejects github.com HTML URLs", () => {
    const result = validateSourceUrl("https://github.com/org/repo/blob/main/README.md");
    expect(result.ok).toBe(false);
  });
});

describe("normalizeGithubRawUrl", () => {
  test("maps github.com/raw to raw.githubusercontent.com", () => {
    const result = normalizeGithubRawUrl(
      "https://github.com/org/repo/raw/main/path/SKILL.md",
    );
    expect(result).toBe(
      "https://raw.githubusercontent.com/org/repo/main/path/SKILL.md",
    );
  });

  test("returns null for non-raw github.com URLs", () => {
    const result = normalizeGithubRawUrl(
      "https://github.com/org/repo/blob/main/path/SKILL.md",
    );
    expect(result).toBe(null);
  });
});
```

**Step 2: Run tests (expect FAIL)**
Run: `bun test tests/source-url.test.ts`
Expected: FAIL (module not found / functions missing).

**Step 3: Implement minimal helper module**
Create `scripts/lib/source-url.ts`:
```typescript
export type UrlValidationResult =
  | { ok: true; url: URL }
  | { ok: false; reason: string };

export function validateSourceUrl(value: string): UrlValidationResult {
  let url: URL;
  try {
    url = new URL(value);
  } catch (error) {
    return {
      ok: false,
      reason: `Invalid URL (${error instanceof Error ? error.message : String(error)})`,
    };
  }

  const pathname = url.pathname.toLowerCase();
  if (!pathname.endsWith(".md")) {
    return { ok: false, reason: "URL must end with .md" };
  }

  if (url.hostname === "github.com" || url.hostname === "www.github.com") {
    return { ok: false, reason: "GitHub URLs must use raw.githubusercontent.com" };
  }

  return { ok: true, url };
}

export function normalizeGithubRawUrl(value: string): string | null {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.hostname !== "github.com" && url.hostname !== "www.github.com") {
    return null;
  }

  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length < 5) {
    return null;
  }

  const [owner, repo, mode, branch, ...pathParts] = parts;
  if (!owner || !repo || !branch || mode !== "raw") {
    return null;
  }

  if (pathParts.length === 0) {
    return null;
  }

  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${pathParts.join("/")}`;
}
```

**Step 4: Run tests (expect PASS)**
Run: `bun test tests/source-url.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add scripts/lib/source-url.ts tests/source-url.test.ts
git commit -m "test: add source url validation helpers"
```

### Task 2: Enforce `.md` URLs in registry + normalize OpenClaw `/raw/` URLs

**Files:**
- Modify: `scripts/lib/registry.ts`
- Modify: `scripts/ingest-openclaw.ts`

**Step 1: Update registry validation**
In `scripts/lib/registry.ts`, replace the `source_url` schema with a refine that uses `validateSourceUrl` (import from `scripts/lib/source-url.ts`). The refine should return the `reason` message on failure.

**Step 2: Update OpenClaw ingest**
In `scripts/ingest-openclaw.ts`, import `normalizeGithubRawUrl` and, when a GitHub URL with `/raw/` is detected, map it to `raw.githubusercontent.com` before continuing the existing `blob`/`tree` logic.

**Step 3: Run tests**
Run: `bun test tests/source-url.test.ts`
Expected: PASS.

**Step 4: Commit**
```bash
git add scripts/lib/registry.ts scripts/ingest-openclaw.ts
git commit -m "feat: enforce .md urls and map github raw links"
```

### Task 3: Remove MDX content scanning from build and validate

**Files:**
- Modify: `scripts/build.ts`
- Modify: `scripts/validate.ts`

**Step 1: Remove MDX content checks**
- Remove `detectMdx` imports.
- In `scripts/build.ts`, remove the `urlIsMdx` helper and the `detectMdx` check inside `fetchMarkdown`.
- In `scripts/validate.ts`, remove the `detectMdx` check against `BODY.md`.

**Step 2: Run validation**
Run: `bun run validate`
Expected: `Sources: ...` and no errors.

**Step 3: Commit**
```bash
git add scripts/build.ts scripts/validate.ts
git commit -m "feat: drop mdx content checks"
```

### Task 4: Drop llms.txt sources

**Files:**
- Modify: `data/sources.yml`
- Delete: `types/llms-txt.md`

**Step 1: Remove `.txt` sources**
Delete the `llms-txt` entries from `data/sources.yml`.

**Step 2: Remove stale type output**
Delete `types/llms-txt.md` (no longer supported).

**Step 3: Run validation**
Run: `bun run validate`
Expected: `Sources: ...` and no errors.

**Step 4: Commit**
```bash
git add data/sources.yml types/llms-txt.md
git commit -m "data: drop llms.txt sources"
```

---

Plan complete and saved to `docs/plans/2026-02-01-markdown-only-enforcement.md`. Two execution options:

1. Subagent-Driven (this session)
2. Parallel Session (separate)

Which approach?
