# Agent Collaboration Guide (Ingest + Category + PR Hygiene)

This guide defines how coding agents should contribute source and ingest changes in this repository.

Goal: keep ingest automation maintainable, category indexes complete, and auto-generated PRs traceable (including workflow hygiene introduced in PR #34).

## Non-Negotiable Rules

1. Any new source or source update must handle category tags deliberately.
2. Any ingest workflow that opens PRs must validate generated data before creating a PR.
3. Do not merge if `validate` fails or if category handling is incomplete.

## Required When Adding or Updating Sources

### 1) Category Handling Is Mandatory

- Every source entry must have at least one `tags` item in `category-<slug>` format.
- Use a known category slug from `CATEGORY_DEFINITIONS` in `sites/pages/lib/categories.ts`.
- If no existing category fits:
  - Add a new category in `CATEGORY_DEFINITIONS`.
  - Add aliases in `CATEGORY_ALIASES` if needed.
  - Update tests accordingly.

Why: unknown category tags are mapped to `category-uncategorized` and reported, which is a quality regression.

### 2) Source Change Validation Flow

Run these commands locally:

```bash
bun sites/pages/build.ts
bun run validate
```

Then verify:

- `data/category/index.md` is updated as expected.
- Topic appears in the expected `data/category/<slug>/index.md`.
- `data/reports/rejected.md` does not include unknown-category errors for your change.

## Required When Editing Ingest Workflows

For workflows under `.github/workflows/*-ingest.yml` that auto-open PRs:

### 1) Validate Immediately After Ingest

Workflow must include:

```yaml
- name: Validate data
  run: bun run validate
```

This step should be right after the ingest script step.

### 2) Keep PR Body Traceability Metadata

Workflow `create-pull-request` body must include a `Generator` section with:

- Script path
- Repo SHA: `${{ github.sha }}`
- Workflow run URL: `https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}`

Example:

```yaml
body: |
  Automated update of <source> registry.

  Generator:
  - Script: `sites/pages/ingest-<source>.ts`
  - Repo SHA: `${{ github.sha }}`
  - Workflow run: https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}
```

## Minimum Test Matrix Before PR

Always run:

```bash
bun run validate
bun test sites/pages/tests/pages-workflow.test.ts
```

If category logic changed, also run:

```bash
bun test sites/pages/tests/categories.test.ts
bun test sites/pages/tests/category-build.test.ts
bun test sites/pages/tests/data-layout.test.ts
```

## File Checklist by Change Type

### A) Add source into manual registry

- Modify: `sources/general.yml`
- Verify categories: `sites/pages/lib/categories.ts` (only if new category/alias needed)
- Regenerated outputs (if part of your change): `data/**`

### B) Add new ingest source

- Create or modify: `sites/pages/ingest-<source>.ts`
- Create or modify: `.github/workflows/<source>-ingest.yml`
- Add workflow assertions: `sites/pages/tests/pages-workflow.test.ts`
- Add/update source registry file in `sources/`

### C) Introduce new category taxonomy

- Modify: `sites/pages/lib/categories.ts`
- Modify: `sites/pages/tests/categories.test.ts`
- Modify: `sites/pages/tests/category-build.test.ts` (if output behavior changes)

## PR Description Template (Recommended)

```md
## Summary
- <what changed>

## Category Handling
- [ ] Existing category tags used
- [ ] New category/alias added (if needed)
- [ ] No unknown category warnings introduced

## Validation
- [ ] `bun run validate`
- [ ] `bun test sites/pages/tests/pages-workflow.test.ts`
- [ ] Category tests (if category logic changed)

## Workflow Hygiene (if ingest workflow changed)
- [ ] `Validate data` step exists right after ingest
- [ ] PR body includes Generator metadata (script, SHA, run URL)
```

## Definition of Done

- Category handling is explicit and tested.
- Validation and workflow tests pass.
- Ingest workflow keeps fail-fast validation and traceable PR metadata.
- PR description includes evidence of checks run.
