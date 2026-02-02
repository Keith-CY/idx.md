# Reports Artifact Handling Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Ignore `data/reports/*` in git while still generating them locally, and publish them as GitHub Actions artifacts in ingest/build workflows.

**Architecture:** Add a narrow `.gitignore` rule for `data/reports/` and update workflows to upload report files as artifacts (using `if: always()` or a safe guard). Add tests that assert `.gitignore` and workflows include the new behavior.

**Tech Stack:** Bun, TypeScript, GitHub Actions.

### Task 1: Ignore data/reports in git (TDD)

**Files:**
- Modify: `.gitignore`
- Test: `sites/pages/tests/tooling-paths.test.ts` (or new test file)

**Step 1: Write the failing test**
Add a test that reads `.gitignore` and asserts it contains `data/reports/`.

```ts
import { describe, expect, test } from "bun:test";

async function readText(path: string): Promise<string> {
  return Bun.file(path).text();
}

describe("reports ignore", () => {
  test("gitignore ignores data reports", async () => {
    const text = await readText(".gitignore");
    expect(text.includes("data/reports/")).toBe(true);
  });
});
```

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/tooling-paths.test.ts`
Expected: FAIL (missing `data/reports/`).

**Step 3: Write minimal implementation**
Add `data/reports/` to `.gitignore`.

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/tooling-paths.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add .gitignore sites/pages/tests/tooling-paths.test.ts
 git commit -m "chore: ignore data reports"
```

### Task 2: Upload ingest report as artifact (TDD)

**Files:**
- Modify: `.github/workflows/openclaw-ingest.yml`
- Test: `sites/pages/tests/pages-workflow.test.ts` (or new workflow test)

**Step 1: Write the failing test**
Add a test that asserts `openclaw-ingest.yml` includes an artifact upload step referencing `data/reports/ingest-openclaw.md`.

```ts
test("ingest workflow uploads report", async () => {
  const text = await readText(".github/workflows/openclaw-ingest.yml");
  expect(text.includes("data/reports/ingest-openclaw.md")).toBe(true);
});
```

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/pages-workflow.test.ts`
Expected: FAIL.

**Step 3: Write minimal implementation**
Add an `actions/upload-artifact` step to `.github/workflows/openclaw-ingest.yml`:
- name: `openclaw-ingest-report`
- path: `data/reports/ingest-openclaw.md`
- use `if: always()` or guard with `if: ${{ always() }}`

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/pages-workflow.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add .github/workflows/openclaw-ingest.yml sites/pages/tests/pages-workflow.test.ts
 git commit -m "ci: upload openclaw ingest report"
```

### Task 3: Upload build reject report as artifact (TDD)

**Files:**
- Modify: `.github/workflows/pages.yml`
- Test: `sites/pages/tests/pages-workflow.test.ts`

**Step 1: Write the failing test**
Add a test that asserts `pages.yml` includes an artifact upload step referencing `data/reports/rejected.md`.

```ts
test("pages workflow uploads rejected report", async () => {
  const text = await readText(".github/workflows/pages.yml");
  expect(text.includes("data/reports/rejected.md")).toBe(true);
});
```

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/pages-workflow.test.ts`
Expected: FAIL.

**Step 3: Write minimal implementation**
Add an `actions/upload-artifact` step to `.github/workflows/pages.yml`:
- name: `build-reports`
- path: `data/reports/rejected.md`
- use `if: always()` or guard with `if: ${{ always() }}`

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/pages-workflow.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add .github/workflows/pages.yml sites/pages/tests/pages-workflow.test.ts
 git commit -m "ci: upload build reports artifact"
```

### Task 4: Full test run

**Step 1: Run all tests**
Run: `bun test`
Expected: PASS.

**Step 2: Commit (if any fixes)**
```bash
git add -A
 git commit -m "chore: finalize reports artifacts"
```

---

Plan complete and saved to `docs/plans/2026-02-02-reports-artifacts-implementation.md`. Two execution options:

1. Subagent-Driven (this session)
2. Parallel Session (separate)

Which approach?
