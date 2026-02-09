---
stable_id: skills/skills-sh-pproenca-dot-skills-nuqs
type: skills
title: skills-sh-pproenca-dot-skills-nuqs
summary: >-
  ---

  title: Use Typed Parsers for Non-String Values

  impact: CRITICAL

  impactDescription: prevents runtime type errors and hydration mismatches

  tags: parser, type-safety, parseAsInteger, parseAsFloat, parseAsBoolean

  ---

  ## Use Typed Parsers for Non-String Values

  URL query parameters are always strings. Without typed parsers, you'll get
  string values where you expect numbers or booleans, causing type errors and
  incorrect comparisons.

  **Incorrect (string instead of number):**

  ```tsx
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pproenca/dot-skills/HEAD/skills/.curated/nuqs/references/parser-use-typed-parsers.md
license: ""
upstream_ref: https://skills.sh/pproenca/dot-skills/nuqs
retrieved_at: 2026-02-09T05:31:05.164Z
content_sha256: b9e4443768bf511646481557c779ff23c1045b0978750577dc0699c1ce759b82
---
