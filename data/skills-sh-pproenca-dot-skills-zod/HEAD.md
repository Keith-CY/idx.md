---
stable_id: skills/skills-sh-pproenca-dot-skills-zod
type: skills
title: skills-sh-pproenca-dot-skills-zod
summary: >-
  # Sections

  This file defines all sections, their ordering, impact levels, and
  descriptions.

  The section ID (in parentheses) is the filename prefix used to group rules.

  ---

  ## 1. Schema Definition (schema)

  **Impact:** CRITICAL

  **Description:** Schema definition is the foundation of all Zod validation;
  incorrect or overly permissive schemas cascade errors through your entire
  application, allowing invalid data to corrupt downstream logic.

  ## 2. Parsing & Validation (parse)

  **Impact:** CRITICAL

  **Description:** Parsing is the core Zod operation; using `parse()` vs
  `safeParse()` incorrectly causes either unhandled exceptions crashing your app
  or silent failures that let invalid data through.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/pproenca/dot-skills/HEAD/skills/.curated/zod/references/_sections.md
license: ""
upstream_ref: https://skills.sh/pproenca/dot-skills/zod
retrieved_at: 2026-02-09T07:01:37.940Z
content_sha256: f9518bb5e0e5dff531041fd82962a307495f034ec0259217ab4a47a1090236c2
---
