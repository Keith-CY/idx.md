---
name: openclaw-ingest
status: draft
owner: ChenYu
created: 2026-01-31
---

# OpenClaw skills ingest design

## Summary
Add a dedicated ingest pipeline for OpenClaw skills sourced from the VoltAgent awesome list. Keep the list in a separate registry file and merge it at build time. Provide a repeatable update path (manual and scheduled).

## Goals
- Ingest SKILL.md links from the OpenClaw awesome README and categorize them deterministically.
- Keep OpenClaw sources in a separate file from the core registry.
- Preserve category metadata and provenance for indexing.
- Support periodic updates with safe failure modes.

## Non-goals
- No crawling beyond the README source list.
- No alias domain or additional UI.

## Data model
File: `data/sources-openclaw.yml`
- `type: skills`
- `slug`: `openclaw-<owner>-<skill-folder>` (safe, kebab-case)
- `source_url`: raw GitHub URL to `SKILL.md`
- `title`: link text from README
- `summary`: bullet description
- `tags`:
  - `openclaw`
  - `source-awesome-openclaw-skills`
  - `category-<category-slug>`
- `upstream_ref`: `github:openclaw/skills@main`

Category tag format uses hyphens to avoid `/` (e.g., `category-web-frontend-development`).

## Ingest flow
Script: `scripts/ingest-openclaw.ts`
1) Fetch raw README URL:
   `https://raw.githubusercontent.com/VoltAgent/awesome-openclaw-skills/refs/heads/main/README.md`
2) Parse categories from `<summary><h3>` blocks.
3) Extract `SKILL.md` links + descriptions under each category.
4) Convert GitHub `tree` URLs to raw URLs (`raw.githubusercontent.com/.../SKILL.md`).
5) Normalize to entries with tags and safe slugs.
6) Deduplicate by raw URL; resolve slug collisions with short hash suffixes.
7) Write `data/sources-openclaw.yml` deterministically (overwrite).

## Build integration
- Load `data/sources.yml` and `data/sources-openclaw.yml` in `scripts/build.ts`.
- Merge lists in memory for build/validate; keep files separate on disk.

## Error handling
- README fetch failure: exit non-zero, leave existing `data/sources-openclaw.yml` untouched.
- Zero extracted skills: warn and exit non-zero (prevent accidental wipe).
- Invalid raw URL conversion: skip and log.
- Empty category slug: fallback `category-uncategorized` and warn.

## Observability
- Console summary: total links, entries written, skips, collisions.
- Optional `reports/ingest-openclaw.md` with timestamped summary.

## Updates
- Manual: `bun scripts/ingest-openclaw.ts` then `bun scripts/build.ts`.
- Scheduled: weekly GitHub Action that runs ingest + build and opens a PR.

## Open questions
- Should scheduled updates create PRs or push directly to main?
- Do we want to pin the README source to a commit SHA for reproducibility?
