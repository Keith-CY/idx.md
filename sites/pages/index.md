---
name: idx-md-indexer
description: Agent skill to index markdown-only sources into entries, indexes, and reports for idx.md.
---

# idx.md Indexer Skill

## Audience
- Primary: OpenClaw, Codex, OpenCode, Claude Code
- Secondary: AI Agents

## Purpose
Teach agents how to ingest markdown-only sources.

## When to Use
- You need to add or refresh markdown sources in this repo.
- You are asked to ingest OpenClaw skills or other markdown-only sources.
- You need to regenerate catalog, tags, recent, and entries for GitHub Pages.

## Inputs
- Registry files:
  - `sources/general.yml` (core sources)
  - `sources/openclaw.yml` (OpenClaw sources, auto-generated)
  - `sources/skills-sh.yml` (skills.sh sources, auto-generated)
  - `sources/openai.yml` (OpenAI sources, auto-generated)
  - Additional registries in `sources/*.yml` for special cases
- Build tooling under `sites/pages/`:
  - `sites/pages/build.ts`
  - `sites/pages/validate.ts`
  - `sites/pages/ingest-openclaw.ts`
  - `sites/pages/ingest-skills-sh.ts`
  - `sites/pages/ingest-openai.ts`
- Output locations:
  - `data/<topic>/HEAD.md` + `data/<topic>/BODY.md`
  - `data/index.md`
  - `data/reports/rejected.md`

## Workflow
1) **Add or update sources**
   - Add new entries to `sources/general.yml` (manual).
   - For OpenClaw: run `bun sites/pages/ingest-openclaw.ts` to regenerate `sources/openclaw.yml`.
   - For skills.sh: run `bun sites/pages/ingest-skills-sh.ts` to regenerate `sources/skills-sh.yml`.
   - For OpenAI: run `bun sites/pages/ingest-openai.ts` to regenerate `sources/openai.yml`.
   - Probed skills.sh entries are appended to `sources/general.yml`.

2) **Validate registry**
   - Run `bun sites/pages/validate.ts` to check registry and entries (if any).

3) **Build entries + indexes**
   - Run `bun sites/pages/build.ts`.
   - This fetches each `source_url`, writes `data/`, updates `data/index.md`, and updates `data/reports/rejected.md`.

4) **Review outputs**
   - Check `data/reports/rejected.md` for fetch failures or invalid sources.
   - Confirm new entries exist under `data/`.

5) **Commit changes**
   - Commit updated registries, generated entries, and reports.

## Outputs
- Updated registry files in `sources/`.
- Generated entries under `data/`.
- Updated index: `data/index.md`.
- Updated `data/reports/rejected.md`.

## Constraints
- **Markdown-only URLs:** `source_url` must end with `.md`.
- **No github.com HTML URLs:** use `raw.githubusercontent.com` for GitHub content.
- **MDX is rejected by filename:** `.mdx` is not allowed.
- **Content is not scanned for MDX:** enforce via filename only.
- **Site output:** GitHub Pages uses `sites/pages/out/` and is built by workflow; do not commit `sites/pages/out/`.

## Examples

### Example 1: Add a new markdown source
1) Add to `sources/general.yml`:
   - `type`, `slug`, `source_url` (must end in `.md`).
2) Run:
   - `bun sites/pages/validate.ts`
   - `bun sites/pages/build.ts`
3) Commit updated `data/` and `data/reports/rejected.md`.

### Example 2: Refresh OpenClaw skills
1) Run:
   - `bun sites/pages/ingest-openclaw.ts`
   - `bun sites/pages/build.ts`
2) Review `data/reports/ingest-openclaw.md` and `data/reports/rejected.md`.
3) Commit `sources/openclaw.yml` and generated outputs.

### Example 3: Refresh skills.sh Top 1000
1) Run:
   - `bun sites/pages/ingest-skills-sh.ts`
   - `bun sites/pages/build.ts`
2) Review `data/reports/ingest-skills-sh.md` and `data/reports/rejected.md`.
3) Commit `sources/skills-sh.yml` and generated outputs.

### Example 4: Refresh OpenAI skills
1) Run:
   - `bun sites/pages/ingest-openai.ts`
   - `bun sites/pages/build.ts`
2) Review `data/reports/ingest-openai.md` and `data/reports/rejected.md`.
3) Commit `sources/openai.yml` and generated outputs.

### Example 5: Fix a rejected source
1) Open `data/reports/rejected.md` to identify the failing URL.
2) Replace with a `.md` raw URL (e.g., `raw.githubusercontent.com/.../FILE.md`).
3) Re-run `bun sites/pages/build.ts` and confirm the rejection is cleared.
