---
name: idx-md
status: draft
owner: ChenYu
created: 2026-01-31
---

# idx.md agent-first index design

## Summary
Build a Markdown-only, agent-first index site at `idx.md` that exposes a fixed URL hierarchy for skills/tools/agents/etc. The site is designed for URL-gated fetchers: every page lists explicit next-hop URLs, and entry content is progressively disclosed via HEAD/BODY (and optional chunks). No alias domain is used. Only pure Markdown sources are accepted; MDX is rejected.

## Goals
- Provide a stable, deterministic Markdown index that agents can traverse with minimal token cost.
- Ensure URL-gated tools can fetch without guessing paths.
- Make ingestion reproducible and traceable with hashes and upstream refs.
- Reject MDX and non-Markdown content deterministically.

## Non-goals
- No human UI or JS-based navigation.
- No crawling of the open web; only curated sources.
- No alias domain (e.g., `index.md`).

## Information architecture (fixed URLs)
Root skill (identical content at all paths):
- `https://idx.md/`
- `https://idx.md/index.md`
- `https://idx.md/skill.md`
- `https://idx.md/.well-known/skills/default/skill.md`

L1: catalog
- `https://idx.md/catalog.md`

L2: types
- `https://idx.md/types/skills.md`
- `https://idx.md/types/tools.md`
- `https://idx.md/types/agents.md`
- `https://idx.md/types/identities.md`
- `https://idx.md/types/personalities.md`
- `https://idx.md/types/souls.md`
- Optional: `https://idx.md/types/llms-txt.md`

Optional indexes:
- `https://idx.md/recent.md`
- `https://idx.md/tags/<tag>.md`

L3/L4: entries
- `https://idx.md/entries/<type>/<slug>/HEAD.md`
- `https://idx.md/entries/<type>/<slug>/BODY.md`
- Optional chunking:
  - `https://idx.md/entries/<type>/<slug>/chunks.md`
  - `https://idx.md/entries/<type>/<slug>/chunks/<chunk_id>.md`

## Entry format
HEAD.md (required YAML frontmatter + short summary):
- `stable_id`, `type`, `title`, `summary`, `tags`
- `source_url`, `license`, `upstream_ref`, `retrieved_at`
- `content_sha256` (hash of BODY bytes)

BODY.md: raw fetched Markdown, no frontmatter, no mutation.

## Ingestion pipeline
Source registry: `data/sources.yml` with per-entry metadata:
- `type`, `slug`, `source_url`, optional `title/summary/tags/license`, optional `upstream_ref`.

Build steps:
1) Fetch raw bytes from `source_url` (follow redirects).
2) Reject non-Markdown and MDX sources.
3) Write BODY.md (raw bytes).
4) Compute `content_sha256` from BODY.md.
5) Generate HEAD.md.
6) Generate indexes: `catalog.md`, `types/*.md`, optional `recent.md` and `tags/*.md`.
7) Optional chunking by headings for large BODY.

## MDX rejection policy
Sources are rejected if MDX/JSX patterns are detected, such as:
- Top-level `import`/`export` statements.
- JSX tags (e.g., `<Component>`).
- MDX-specific blocks.

Rejected sources are recorded in `reports/rejected.md` with reason and URL.

## Validation
Validation script ensures:
- Required fields in HEAD.md are present.
- `content_sha256` matches BODY.md bytes.
- `source_url` is present and valid.
- BODY.md contains no MDX/JSX patterns.

## Deliverables
- Static content tree and root skill endpoints (idx.md only).
- Generator + validation scripts.
- Sample curated sources proving the pipeline.
- CI workflow running build + validation.

## Fast schedule (AI-assisted)
Stage 0 (0.5-1h): repo bootstrap, root skill, minimal catalog.
Stage 1 (2-3h): generator + source registry.
Stage 2 (1-1.5h): MDX rejection + validation.
Stage 3 (1-2h): sample sources + CI.

## Open questions
- Initial seed list of sources and licensing constraints.
- Tag taxonomy and minimum required types.
