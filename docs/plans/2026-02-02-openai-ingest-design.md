# OpenAI Skills Ingest Design

## Goals
- Add an automated ingest for `openai/skills`.
- Accept only `SKILL.md` and `skill.md`.
- Generate `sources/openai.yml` from GitHub API tree data.
- Provide daily + manual workflow with an ingest report artifact.

## Source Discovery
- Use GitHub API:
  - Read repo metadata to get default branch.
  - Fetch tree for that branch with `?recursive=1`.
- Filter for paths under `skills/` that end with `SKILL.md` or `skill.md`.
- Convert to raw URLs:  
  `https://raw.githubusercontent.com/openai/skills/<branch>/<path>`

## Registry Output
- **`sources/openai.yml`** (auto-generated):
  - `type: skills`
  - `slug: openai-<owner>-<skill>`
  - `source_url` points to raw `.md`
  - `upstream_ref` points to GitHub path
  - `tags: ["openai","source-openai-skills"]`
- Slug fallback:
  - If path is `skills/<owner>/<skill>/SKILL.md`, use both.
  - If path is `skills/<skill>/SKILL.md`, use `owner=openai` → `openai-openai-<skill>`.
- Handle collisions with short hash suffix.

## Script & Tests
- Script: `sites/pages/ingest-openai.ts`
- Parser: `sites/pages/lib/openai-parse.ts`
- Tests:
  - Tree filtering for `skills/**/(SKILL.md|skill.md)`
  - Slug rules (two-segment and fallback)
  - Raw URL building
  - Collision handling

## Reporting & CI
- Write report to `data/reports/ingest-openai.md` with counts and skips.
- Workflow `.github/workflows/openai-ingest.yml`:
  - Daily cron + `workflow_dispatch`
  - Upload report artifact
  - Create PR updating `sources/openai.yml`

## Constraints
- Markdown-only enforcement via filename (`.md` only).
- No non-skill files.
