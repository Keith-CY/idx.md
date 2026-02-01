# Sites Directory Restructure Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move all GitHub Pages build tooling and Cloudflare Worker assets under `sites/` with clean root.

**Architecture:** Relocate `site/` to `sites/pages/` and worker artifacts to `sites/worker/`. Move worker tests and config into `sites/worker/`. Update scripts, workflows, tests, and docs to reference new paths. Keep build output under `sites/pages/out/`.

**Tech Stack:** TypeScript, Bun, GitHub Actions, Cloudflare Workers (R2).

### Task 1: Update worker tests and config paths (TDD)

**Files:**
- Modify: `tests/worker-paths.test.ts` (temporary, will move later)
- Modify: `tests/worker-index.test.ts` (temporary, will move later)

**Step 1: Write the failing test (path update)**
Edit `tests/worker-paths.test.ts` to import from `../sites/worker/lib/paths`.

**Step 2: Run test to verify it fails**
Run: `bun test tests/worker-paths.test.ts`
Expected: FAIL (module not found).

**Step 3: Write minimal implementation**
Create `sites/worker/` and move worker code:
- `worker/index.ts` → `sites/worker/index.ts`
- `worker/lib/paths.ts` → `sites/worker/lib/paths.ts`
Update `tests/worker-index.test.ts` to import from `../sites/worker/index`.

**Step 4: Run test to verify it passes**
Run: `bun test tests/worker-paths.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/worker worker tests/worker-*.test.ts
git commit -m "refactor: move worker code under sites"
```

### Task 2: Move worker config + tests into `sites/worker/` (TDD)

**Files:**
- Move: `wrangler.toml` → `sites/worker/wrangler.toml`
- Move: `tests/worker-paths.test.ts` → `sites/worker/tests/worker-paths.test.ts`
- Move: `tests/worker-index.test.ts` → `sites/worker/tests/worker-index.test.ts`

**Step 1: Write the failing test**
Update new test file paths to import from `../lib/paths` and `../index`.

**Step 2: Run test to verify it fails**
Run: `bun test sites/worker/tests/worker-paths.test.ts`
Expected: FAIL (file not found).

**Step 3: Write minimal implementation**
Move files to new locations and update imports.

**Step 4: Run test to verify it passes**
Run: `bun test sites/worker/tests/worker-paths.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/worker/wrangler.toml sites/worker/tests
 git commit -m "refactor: move worker config and tests into sites"
```

### Task 3: Move GitHub Pages build tooling under `sites/pages/` (TDD)

**Files:**
- Move: `site/*` → `sites/pages/*`
- Modify: `package.json`
- Modify: `tsconfig.json`
- Modify: `.github/workflows/pages.yml`
- Modify: `.github/workflows/openclaw-ingest.yml`
- Modify: `.github/workflows/ci.yml`
- Modify: `.gitignore`
- Modify tests under `tests/` that import `site/*`
- Modify docs referencing `site/`

**Step 1: Write the failing test (path updates)**
Update one representative test import to `../sites/pages/lib/...` (e.g., `tests/links.test.ts`).

**Step 2: Run test to verify it fails**
Run: `bun test tests/links.test.ts`
Expected: FAIL (module not found).

**Step 3: Write minimal implementation**
Move `site/` to `sites/pages/` (use `git mv`).
Update:
- `package.json` scripts to `bun sites/pages/...`
- `tsconfig.json` include to `sites/**/*.ts`
- `.gitignore` to ignore `sites/pages/out/`
- Workflows to reference `sites/pages/...` and output `sites/pages/out`
- All tests to import from `../sites/pages/...`
- Docs to refer to `sites/pages/...`

**Step 4: Run test to verify it passes**
Run: `bun test tests/links.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/pages site package.json tsconfig.json .github/workflows .gitignore tests docs
 git commit -m "refactor: move pages tooling under sites"
```

### Task 4: Relocate site tests under `sites/pages/tests/` (TDD)

**Files:**
- Move: `tests/links.test.ts` → `sites/pages/tests/links.test.ts`
- Move: `tests/registry.test.ts` → `sites/pages/tests/registry.test.ts`
- Move: `tests/site-paths.test.ts` → `sites/pages/tests/site-paths.test.ts`
- Move: `tests/source-url.test.ts` → `sites/pages/tests/source-url.test.ts`
- Move: `tests/pages-workflow.test.ts` → `sites/pages/tests/pages-workflow.test.ts`
- Move: `tests/no-mdx-scan.test.ts` → `sites/pages/tests/no-mdx-scan.test.ts`

**Step 1: Write the failing test**
Update imports in moved tests to use relative paths from `sites/pages/tests`.

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/links.test.ts`
Expected: FAIL (module not found).

**Step 3: Write minimal implementation**
Move the tests and update imports.

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/links.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/pages/tests tests
 git commit -m "refactor: move pages tests under sites"
```

### Task 5: Full test run

**Step 1: Run all tests**
Run: `bun test`
Expected: PASS.

**Step 2: Commit (if any fixes)**
```bash
git add -A
 git commit -m "chore: finalize sites restructure"
```

---

Plan complete and saved to `docs/plans/2026-02-01-sites-restructure.md`. Two execution options:

1. Subagent-Driven (this session) - I dispatch fresh subagent per task, review between tasks, fast iteration
2. Parallel Session (separate) - Open new session with executing-plans, batch execution with checkpoints

Which approach?
