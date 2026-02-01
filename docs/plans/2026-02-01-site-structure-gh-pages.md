# Site Structure + GitHub Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move build tooling under `sites/pages/` and deploy the generated site to GitHub Pages via a `gh-pages` branch.

**Architecture:** Build scripts and supporting code live in `sites/pages/` while content/data remain at repo root. A GitHub Actions workflow runs `bun sites/pages/build.ts` and deploys the `sites/pages/out` directory to `gh-pages` on each push to `main`.

**Tech Stack:** TypeScript, Bun, GitHub Actions, GitHub Pages.

### Task 1: Add path helpers and tests for new site layout (TDD)

**Files:**
- Create: `sites/pages/lib/paths.ts`
- Create: `sites/pages/tests/site-paths.test.ts`

**Step 1: Write the failing test**

Create `sites/pages/tests/site-paths.test.ts`:
```typescript
import { describe, expect, test } from "bun:test";
import { resolve } from "path";
import { repoRoot, siteRoot, buildOut } from "../lib/paths";

describe("site path helpers", () => {
  test("repoRoot is parent of sites", () => {
    expect(resolve(siteRoot, "..", "..")).toBe(repoRoot);
  });

  test("siteRoot lives under repoRoot/sites/pages", () => {
    expect(siteRoot).toBe(`${repoRoot}/sites/pages`);
  });

  test("buildOut points to sites/pages/out", () => {
    expect(buildOut).toBe(`${siteRoot}/out`);
  });
});
```

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/site-paths.test.ts`
Expected: FAIL (module not found).

**Step 3: Write minimal implementation**
Create `sites/pages/lib/paths.ts`:
```typescript
import { fileURLToPath } from "url";
import { resolve } from "path";

const here = fileURLToPath(import.meta.url);
export const siteRoot = resolve(here, "..", "..");
export const repoRoot = resolve(siteRoot, "..", "..");
export const buildOut = resolve(siteRoot, "out");
```

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/site-paths.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/pages/lib/paths.ts sites/pages/tests/site-paths.test.ts
git commit -m "test: add site path helpers"
```

### Task 2: Move build scripts under `sites/pages/` and update imports

**Files:**
- Move: `scripts/build.ts` → `sites/pages/build.ts`
- Move: `scripts/validate.ts` → `sites/pages/validate.ts`
- Move: `scripts/ingest-openclaw.ts` → `sites/pages/ingest-openclaw.ts`
- Move: `scripts/lib/*` → `sites/pages/lib/*`
- Modify: `package.json`
- Modify: `.github/workflows/ci.yml`
- Modify: `.github/workflows/openclaw-ingest.yml`
- Modify: tests import paths to new locations

**Step 1: Move files**
Use `git mv` to relocate scripts into `sites/pages/` and `sites/pages/lib/`.

**Step 2: Update imports**
- Update internal imports to `../lib/...` and `./lib/...` under `sites/pages/`.
- Update tests to import from `sites/pages/` paths.

**Step 3: Update package.json scripts**
Change to:
```json
"build": "bun sites/pages/build.ts",
"validate": "bun sites/pages/validate.ts"
```

**Step 4: Update workflows**
Use `bun sites/pages/ingest-openclaw.ts` and `bun sites/pages/build.ts` / `bun sites/pages/validate.ts`.

**Step 5: Run tests**
Run: `bun test`
Expected: PASS.

**Step 6: Commit**
```bash
git add sites/pages scripts package.json tests .github/workflows
git commit -m "refactor: move build tooling under site"
```

### Task 3: Configure GitHub Pages deployment

**Files:**
- Create: `.github/workflows/pages.yml`
- Modify: `.gitignore` (ignore `sites/pages/out/`)

**Step 1: Add Pages workflow**
Create `.github/workflows/pages.yml` (uses official Pages deploy action, builds `sites/pages/out`).

**Step 2: Ignore build output**
Add `sites/pages/out/` to `.gitignore`.

**Step 3: Run build locally**
Run: `bun sites/pages/build.ts`
Expected: sites/pages/out generated without errors.

**Step 4: Commit**
```bash
git add .github/workflows/pages.yml .gitignore
 git commit -m "ci: deploy site to github pages"
```

---

Plan complete and saved to `docs/plans/2026-02-01-site-structure-gh-pages.md`. Two execution options:

1. Subagent-Driven (this session)
2. Parallel Session (separate)

Which approach?
