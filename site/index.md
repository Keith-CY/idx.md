---
name: idx-md-indexer
description: Agent skill to index markdown-only sources into entries, indexes, and reports for idx.md.
---

# idx.md Indexer Skill

## Audience
- Primary: OpenClaw
- Secondary: Codex, OpenCode, Claude Code

## Purpose
Teach agents how to ingest markdown-only sources and regenerate idx.md outputs (entries, catalogs, tags, reports) used by GitHub Pages.

## When to Use
- You need to add or refresh markdown sources in this repo.
- You are asked to ingest OpenClaw skills or other markdown-only sources.
- You need to regenerate catalog, tags, recent, and entries for GitHub Pages.

## Inputs
- Registry files:
  - `data/sources.yml` (core sources)
  - `data/sources-openclaw.yml` (OpenClaw sources, auto-generated)
- Build tooling under `site/`:
  - `site/build.ts`
  - `site/validate.ts`
  - `site/ingest-openclaw.ts`
- Output locations:
  - `entries/<type>/<slug>/HEAD.md` + `entries/<type>/<slug>/BODY.md`
  - `types/*.md`, `tags/*.md`, `recent.md`, `catalog.md`
  - `reports/rejected.md`

## Quick Start
```bash
bun site/ingest-openclaw.ts
bun site/validate.ts
bun site/build.ts
```
Then review `reports/rejected.md` and commit changes.

## Workflow
1) **Add or update sources**
   - Add new entries to `data/sources.yml` (manual).
   - For OpenClaw: run `bun site/ingest-openclaw.ts` to regenerate `data/sources-openclaw.yml`.

2) **Validate registry**
   - Run `bun site/validate.ts` to check registry and entries (if any).

3) **Build entries + indexes**
   - Run `bun site/build.ts`.
   - This fetches each `source_url`, writes `entries/`, and updates `catalog.md`, `types/`, `tags/`, `recent.md`, and `reports/rejected.md`.

4) **Review outputs**
   - Check `reports/rejected.md` for fetch failures or invalid sources.
   - Confirm new entries exist under `entries/`.

5) **Commit changes**
   - Commit updated registries, generated entries, and reports.

## Outputs
- Updated registry files in `data/`.
- Generated entries under `entries/`.
- Updated indexes: `catalog.md`, `types/`, `tags/`, `recent.md`.
- Updated `reports/rejected.md`.

## Constraints
- **Markdown-only URLs:** `source_url` must end with `.md`.
- **No github.com HTML URLs:** use `raw.githubusercontent.com` for GitHub content.
- **MDX is rejected by filename:** `.mdx` is not allowed.
- **Content is not scanned for MDX:** enforce via filename only.
- **Site output:** GitHub Pages uses `site/out/` and is built by workflow; do not commit `site/out/`.

## Examples

### Example 1: Add a new markdown source
1) Add to `data/sources.yml`:
   - `type`, `slug`, `source_url` (must end in `.md`).
2) Run:
   - `bun site/validate.ts`
   - `bun site/build.ts`
3) Commit updated `entries/`, `catalog.md`, and `reports/rejected.md`.

### Example 2: Refresh OpenClaw skills
1) Run:
   - `bun site/ingest-openclaw.ts`
   - `bun site/build.ts`
2) Review `reports/ingest-openclaw.md` and `reports/rejected.md`.
3) Commit `data/sources-openclaw.yml` and generated outputs.

### Example 3: Fix a rejected source
1) Open `reports/rejected.md` to identify the failing URL.
2) Replace with a `.md` raw URL (e.g., `raw.githubusercontent.com/.../FILE.md`).
3) Re-run `bun site/build.ts` and confirm the rejection is cleared.
