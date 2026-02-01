# Data-First Output Layout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Emit markdown outputs under `data/{topic}/HEAD.md` + `BODY.md`, generate `data/index.md` with YAML frontmatter blocks + directory paths, and move source registries to `sources/*.yml`.

**Architecture:** Build pipeline writes all outputs under `data/` with per-topic folders and a single `data/index.md`. Registry loading aggregates multiple `sources/*.yml` files (default `sources/general.yml` + optional extras). Cloudflare Worker maps root `/` to `data/index.md` and `/{topic}/...` to `data/{topic}/...`.

**Tech Stack:** TypeScript, Bun, Cloudflare Workers, GitHub Actions.

### Task 1: Registry location migration (TDD)

**Files:**
- Modify: `sites/pages/lib/registry.ts`
- Modify: `sites/pages/tests/registry.test.ts`
- Modify: `data/sources.yml` (move)
- Create: `sources/general.yml`

**Step 1: Write the failing test**
Add a test in `sites/pages/tests/registry.test.ts` that asserts registry paths resolve to `sources/general.yml` and `sources/*.yml` (not `data/`).

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/registry.test.ts`
Expected: FAIL (paths still point to data).

**Step 3: Write minimal implementation**
Update `sites/pages/lib/registry.ts`:
- Change default registry path to `sources/general.yml`.
- Support multiple registries under `sources/` (include `sources/general.yml` + any optional entries).
Move `data/sources.yml` → `sources/general.yml`.

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/registry.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/pages/lib/registry.ts sites/pages/tests/registry.test.ts sources/general.yml data/sources.yml
 git commit -m "refactor: move registries to sources/"
```

### Task 2: Emit outputs under data/{topic}/ and create data/index.md (TDD)

**Files:**
- Modify: `sites/pages/build.ts`
- Modify: `sites/pages/tests/tooling-paths.test.ts`
- Create: `sites/pages/tests/data-layout.test.ts`

**Step 1: Write the failing test**
Create `sites/pages/tests/data-layout.test.ts` asserting:
- Outputs go to `data/{slug}/HEAD.md` and `data/{slug}/BODY.md`.
- `data/index.md` exists and contains frontmatter blocks + `|/data/{slug}|` rows.

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/data-layout.test.ts`
Expected: FAIL.

**Step 3: Write minimal implementation**
Update `sites/pages/build.ts`:
- Replace `entries/`, `types/`, `tags/`, `recent.md`, `catalog.md` outputs with `data/{topic}/HEAD.md`, `data/{topic}/BODY.md`.
- Generate `data/index.md` with one section per topic:
  - raw frontmatter block (from HEAD.md)
  - table row containing directory path (e.g., `|/data/mintlify|`)
- Update rejected report to live under `data/reports/rejected.md` (or keep `reports/` if required; confirm with user).

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/data-layout.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/pages/build.ts sites/pages/tests/data-layout.test.ts sites/pages/tests/tooling-paths.test.ts
 git commit -m "feat: emit data/{topic} and data/index"
```

### Task 3: Update ingest + validation to use new data layout (TDD)

**Files:**
- Modify: `sites/pages/ingest-openclaw.ts`
- Modify: `sites/pages/validate.ts`
- Modify: tests under `sites/pages/tests/`

**Step 1: Write the failing test**
Extend tests to check ingest writes to `sources/` and reports to `data/reports/` (or root `reports/` if kept).

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/tooling-paths.test.ts`
Expected: FAIL.

**Step 3: Write minimal implementation**
Update file paths in ingest/validate to match new layout.

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/tooling-paths.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/pages/ingest-openclaw.ts sites/pages/validate.ts sites/pages/tests/tooling-paths.test.ts
 git commit -m "refactor: align ingest/validate with data layout"
```

### Task 4: Update Cloudflare Worker routing (TDD)

**Files:**
- Modify: `sites/worker/lib/paths.ts`
- Modify: `sites/worker/tests/worker-paths.test.ts`
- Modify: `sites/worker/index.ts`

**Step 1: Write the failing test**
Update `worker-paths.test.ts` to assert:
- `/` → `data/index.md`
- `/mintlify` → `data/mintlify/HEAD.md` (directory default)
- `/mintlify/HEAD.md` → `data/mintlify/HEAD.md`

**Step 2: Run test to verify it fails**
Run: `bun test sites/worker/tests/worker-paths.test.ts`
Expected: FAIL.

**Step 3: Write minimal implementation**
Adjust `toR2Key` to map to the `data/` prefix and directory defaults.

**Step 4: Run test to verify it passes**
Run: `bun test sites/worker/tests/worker-paths.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add sites/worker/lib/paths.ts sites/worker/tests/worker-paths.test.ts sites/worker/index.ts
 git commit -m "feat: map worker paths to data layout"
```

### Task 5: Update docs + workflows (TDD)

**Files:**
- Modify: `.github/workflows/pages.yml`
- Modify: `sites/pages/index.md`
- Modify: `docs/openclaw-ingest.md`
- Modify: any plan docs referencing old outputs

**Step 1: Write failing test (if needed)**
Update `sites/pages/tests/pages-workflow.test.ts` to assert it copies `data/index.md` to the Pages output.

**Step 2: Run test to verify it fails**
Run: `bun test sites/pages/tests/pages-workflow.test.ts`
Expected: FAIL.

**Step 3: Write minimal implementation**
Update workflow to copy `data/index.md` to `sites/pages/out/index.md`, and copy `data/**`.
Update docs to reflect new layout and commands.

**Step 4: Run test to verify it passes**
Run: `bun test sites/pages/tests/pages-workflow.test.ts`
Expected: PASS.

**Step 5: Commit**
```bash
git add .github/workflows/pages.yml sites/pages/index.md docs/openclaw-ingest.md docs/plans
 git commit -m "docs: update data layout outputs"
```

### Task 6: Full test run

**Step 1: Run all tests**
Run: `bun test`
Expected: PASS.

**Step 2: Commit (if any fixes)**
```bash
git add -A
 git commit -m "chore: finalize data layout"
```

---

Plan complete and saved to `docs/plans/2026-02-01-data-layout-design.md`. Two execution options:

1. Subagent-Driven (this session)
2. Parallel Session (separate)

Which approach?
