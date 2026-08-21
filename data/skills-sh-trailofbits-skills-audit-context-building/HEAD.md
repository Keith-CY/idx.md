---
stable_id: skills/skills-sh-trailofbits-skills-audit-context-building
type: skills
title: skills-sh-trailofbits-skills-audit-context-building
summary: >-
  # Worked Example

  A complete per-function analysis. The subject is C; the format is
  language-neutral, and the notes at the end

  cover what changes for contract code.

  The point of this example is the callee. `session_acquire` looks safe read on
  its own, and the analysis only

  becomes accurate once `session_lookup` has been read.

  ---

  ## `session_acquire` in src/session.c (L112-L138)

  ```c

  // L112

  int session_acquire(uint32_t id, struct session **out) {
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/audit-context-building/skills/audit-context-building/resources/FUNCTION_MICRO_ANALYSIS_EXAMPLE.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/audit-context-building
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-21T07:36:03.139Z
content_sha256: 3351010d83b61bfb34a0359498f153817fdfa6528cead54536b06e035ff2399c
---
