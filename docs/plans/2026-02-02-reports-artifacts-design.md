# Reports Artifact Handling Design

**Goal:** Keep `data/reports/*` generated locally for diagnostics but exclude them from git, and publish them as GitHub Actions artifacts instead of committing to the repo.

## Architecture
- Build/ingest scripts continue to write reports under `data/reports/`.
- `.gitignore` ignores `data/reports/` only (not the rest of `data/`).
- CI workflows upload `data/reports/*.md` as artifacts for visibility without repo churn.

## Components & Data Flow
- **Local runs**
  - `bun sites/pages/ingest-openclaw.ts` writes `sources/openclaw.yml` + `data/reports/ingest-openclaw.md`.
  - `bun sites/pages/build.ts` writes `data/index.md`, `data/<topic>/HEAD.md|BODY.md`, and `data/reports/rejected.md`.
  - `data/reports/` is untracked via `.gitignore`.
- **CI (openclaw ingest)**
  - Upload `data/reports/ingest-openclaw.md` as an artifact (keep `sources/openclaw.yml` committed).
- **CI (pages build)**
  - Upload `data/reports/rejected.md` as an artifact.

## Error Handling & Testing
- Keep current report content/format.
- Artifact upload should run even when builds fail (`if: always()` or guard for missing files).
- Tests:
  - Assert `.gitignore` contains `data/reports/`.
  - Assert workflows include artifact upload of `data/reports/*`.

## Implementation Steps
1) Add `.gitignore` rule for `data/reports/`.
2) Update `.github/workflows/openclaw-ingest.yml` to upload `data/reports/ingest-openclaw.md`.
3) Update `.github/workflows/pages.yml` (or build workflow) to upload `data/reports/rejected.md`.
4) Add/adjust tests for `.gitignore` and workflow artifact steps.
5) Run `bun test` and sanity-check `git status` after a local build.
