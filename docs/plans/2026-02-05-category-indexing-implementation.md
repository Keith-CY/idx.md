# Category Indexing Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add controlled, multi-category index pages under `/category/*` while preserving the existing global index and routing unknown categories to `uncategorized` with report visibility.

**Architecture:** Extend the build pipeline to derive canonical categories from `tags` using a controlled vocabulary and alias map. Generate category hub and per-category index markdown files under `data/category/`. Keep unknown category tags from breaking the build by routing affected entries to `uncategorized` and appending warnings to the existing rejected report. Ensure the rejected report is workflow artifact only (not published output, not committed).

**Tech Stack:** Bun, TypeScript, YAML frontmatter generation, existing `sites/pages` build + workflow tests.

### Task 1: Add category path helpers and normalization tests (RED)

**Files:**
- Create: `sites/pages/tests/categories.test.ts`
- Modify: `sites/pages/tests/data-layout.test.ts`
- Modify: `sites/pages/lib/data-layout.ts`

**Step 1: Write failing tests for category normalization and paths**
- Add tests for:
  - alias mapping (`category-coding` -> canonical slug)
  - multi-category dedupe
  - unknown category collection
  - uncategorized fallback when no valid category tags
  - category hub path and per-category path helpers.

**Step 2: Run tests to verify failure**
- Run: `bun test sites/pages/tests/categories.test.ts sites/pages/tests/data-layout.test.ts`
- Expected: FAIL due missing category helpers/logic.

**Step 3: Implement minimal helpers**
- Add controlled vocabulary + alias map logic and path helpers required for tests.

**Step 4: Run tests to verify pass**
- Run: `bun test sites/pages/tests/categories.test.ts sites/pages/tests/data-layout.test.ts`
- Expected: PASS.

### Task 2: Add failing build output tests for category indexes and unknown-category reporting (RED)

**Files:**
- Create: `sites/pages/tests/category-build.test.ts`

**Step 1: Write failing integration-style build test**
- Use temporary registry file and invoke build script.
- Assert generated files:
  - `data/category/index.md`
  - `data/category/<slug>/index.md`
- Assert multi-category docs appear in multiple category pages.
- Assert unknown category tags route entry into `uncategorized` page.
- Assert rejected report includes unknown-category warning row.

**Step 2: Run tests to verify failure**
- Run: `bun test sites/pages/tests/category-build.test.ts`
- Expected: FAIL before build implementation changes.

### Task 3: Implement category index generation and unknown fallback handling (GREEN)

**Files:**
- Modify: `sites/pages/build.ts`
- Create: `sites/pages/lib/categories.ts`

**Step 1: Build category assignment during source processing**
- Extract category tags from source `tags`.
- Normalize via controlled vocabulary/alias map.
- Capture unknown category tags for report warnings.
- Route no-valid-category entries to canonical `uncategorized`.

**Step 2: Generate category markdown outputs**
- Write `data/category/index.md` summary with category links and counts.
- Write `data/category/<slug>/index.md` with entry listings using existing index-entry format.

**Step 3: Append unknown-category warnings to rejected report**
- Keep warning rows as non-fatal “rejections” for diagnostics.

**Step 4: Run tests to verify pass**
- Run: `bun test sites/pages/tests/category-build.test.ts`
- Expected: PASS.

### Task 4: Keep rejected report workflow-artifact only

**Files:**
- Modify: `.github/workflows/pages.yml`
- Modify: `sites/pages/tests/pages-workflow.test.ts`

**Step 1: Prevent publishing report in pages output**
- Exclude `data/reports/` from copied `sites/pages/out/data/` payload.
- Retain explicit artifact upload for `data/reports/rejected.md`.

**Step 2: Add failing/updated workflow assertions**
- Assert pages workflow still uploads artifact.
- Assert pages workflow excludes report path from published output step.

**Step 3: Run tests**
- Run: `bun test sites/pages/tests/pages-workflow.test.ts`
- Expected: PASS.

### Task 5: Verification pass

**Files:**
- Modify if needed from test feedback only.

**Step 1: Run targeted verification suite**
- Run:
  - `bun test sites/pages/tests/categories.test.ts sites/pages/tests/data-layout.test.ts sites/pages/tests/category-build.test.ts sites/pages/tests/pages-workflow.test.ts`

**Step 2: Optional broader sanity run**
- Run: `bun test sites/pages/tests`

**Step 3: Summarize outcomes and residual risks**
- Report generated paths, behavior, and any skipped checks.
