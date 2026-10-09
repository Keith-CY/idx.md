---
stable_id: skills/skills-sh-waynesutton-convexskills-convex-functions
type: skills
title: skills-sh-waynesutton-convexskills-convex-functions
summary: >-
  ---

  name: convex-best-practices

  description: Production patterns for Convex apps and the rules the
  @convex-dev/eslint-plugin enforces: validators, indexes, idempotent mutations,
  avoiding OCC conflicts, thin function wrappers, error handling. Use when
  reviewing Convex code, asking whether a pattern is right, setting up ESLint,
  or fixing write conflicts and slow queries.

  ---

  # Convex best practices

  The patterns that keep a Convex app fast and correct in production. The rule
  that matters most: read as little as possible before you write, and read
  through an index.

  ## Rules that matter most

  1. Validators on every function. `args` and `returns`, with `returns:
  v.null()` when nothing comes back.

  2. Indexes, not filters. Every table read goes through `withIndex` against an
  index in `convex/schema.ts`.

  3. Idempotent mutations. Return early when the document is already in the
  target state so retries are safe.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/waynesutton/convexskills/HEAD/skills/convex-best-practices/SKILL.md
license: ""
upstream_ref: https://skills.sh/waynesutton/convexskills/convex-functions
github_stars: 335
github_forks: 27
github_is_organization: false
retrieved_at: 2026-10-09T14:03:55.748Z
content_sha256: 90160ccaa0a95a08527ef1b67a240731ce411cd3266c1f9f6ba3c1bcc5ba390d
---
