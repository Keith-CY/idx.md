---
name: idx-md-verticals
status: draft
owner: ChenYu
created: 2026-02-08
---

# Scenario + Industry Verticals (Agent-First)

## Summary
Extend idx.md beyond capability categories (`category-*`) with two additional vertical axes: scenarios (`scenario-*`) and industries (`industry-*`). Each axis gets deterministic, Markdown-only hub and per-vertical index pages (stable URLs) plus curated “Playbook” entries (HEAD/BODY) that provide an executable, ordered reading path for agents.

This design keeps the core agent-first constraints: URL-gated traversal, low token cost, deterministic generation, and robustness against taxonomy mistakes (unknown vertical tags never break the build and never hide entries).

## Goals
- Add stable, agent-first entrypoints for scenario and industry browsing.
- Use a hybrid model:
  - auto-generated vertical index pages for coverage and discoverability
  - curated Playbook topics for “how to use this vertical” and ordering
- Prevent taxonomy typos from making content undiscoverable.
- Start with 3 pilot verticals and a quality bar before scaling.

## Non-goals
- Human UI, search, or JS navigation.
- Perfect ontology for every possible domain.
- Web crawling; sources remain curated.

## Taxonomy Axes
Existing:
- Capability axis: `category-<slug>` (controlled vocabulary + aliases + `uncategorized` fallback).

New:
- Scenario axis: `scenario-<slug>` (workflow/use-case oriented).
- Industry axis: `industry-<slug>` (domain oriented).

Hard constraints (recommended for quality):
- Each entry has at least 1 `category-*` tag.
- Each entry has at most 1 `industry-*` tag.
- Each entry has at most 2 `scenario-*` tags.

Unknown or invalid vertical tags:
- Route the entry into that axis’s `uncategorized` bucket.
- Record a warning row in the rejected report for visibility.

## Fixed URLs (Stable Entry Points)
New hub pages:
- `https://idx.md/scenario/index.md` -> `data/scenario/index.md`
- `https://idx.md/industry/index.md` -> `data/industry/index.md`

New per-vertical pages:
- `https://idx.md/scenario/<slug>/index.md` -> `data/scenario/<slug>/index.md`
- `https://idx.md/industry/<slug>/index.md` -> `data/industry/<slug>/index.md`

Linking rule:
- Generated pages must link using explicit `.md` paths (avoid relying on directory defaults).

## Page Content Model (Hybrid)
Each per-vertical index page is Markdown with two layers:

Top (curated, 1 screen):
- Fit / no-fit guidance (3-5 lines).
- Gold path (ordered list of 5-10 must-read topics using `|/data/{topic}|` lines).
- Playbook pointer (a dedicated Playbook topic for the vertical, also referenced as `|/data/{topic}|`).
- Next hops: related `/category/*/index.md`, other scenarios/industries.

Bottom (auto-generated, full coverage):
- Full listing of all entries matching the vertical tag, using the standard idx.md index entry format:
  - HEAD frontmatter block
  - `|/data/{topic}|` topic line

Hub pages:
- Table of vertical pages with counts and stable paths (mirrors existing `/category/index.md` style).

## Playbooks (Dedicated Topics)
For each pilot vertical, add a dedicated Playbook entry with its own HEAD/BODY:
- `type: playbooks` (recommended) or reuse an existing type if a new type is not desired.
- `slug: playbook-<axis>-<slug>` (example: `playbook-scenario-customer-support`).

Playbook BODY requirements:
- Step-by-step reading path.
- Each step references concrete topics using `|/data/{topic}|` and includes expected outcome in 1-2 lines.

Each per-vertical index page includes:
- 10-20 lines of Playbook summary at the top.
- A direct pointer to the Playbook topic.

## Pilot Verticals (Initial Scope)
- `scenario-customer-support`
- `industry-finance`
- `scenario-content-marketing`

Each pilot must ship with:
- Hub visibility (listed on `/scenario/index.md` or `/industry/index.md`).
- A per-vertical index page with curated top section.
- A dedicated Playbook topic.
- At least 20 tagged entries before considering the vertical “production-ready”.

## Governance (Quality Gates)
To add a new scenario/industry vertical:
- Minimum 20 entries tagged into the vertical.
- Must include a Playbook topic.
- Per-vertical page must include Gold path + Next hops (not just a raw list).

If the quality bar is not met:
- Keep the vertical slug in a draft/unlisted state (implementation choice), or do not add it yet.

## Implementation Notes (High Level)
- Reuse the existing category implementation pattern:
  - controlled definitions list (slug/title)
  - alias map
  - parse-from-tags helper returning known/unknown + `uncategorized` fallback
  - index builder producing hub content + per-vertical pages
- Output layout under `data/scenario/**` and `data/industry/**`.
- Tests:
  - unit tests for tag parsing and alias mapping
  - unit/integration tests for hub + per-vertical page generation
  - data-layout tests for new roots and path helpers
- Discoverability:
  - add next-hop links from root `SKILL.md` / index entrypoints to scenario/industry hubs.

