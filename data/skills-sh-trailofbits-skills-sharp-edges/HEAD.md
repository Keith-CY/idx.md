---
stable_id: skills/skills-sh-trailofbits-skills-sharp-edges
type: skills
title: skills-sh-trailofbits-skills-sharp-edges
summary: |-
  # Configuration Security Patterns
  Dangerous configuration patterns that enable security failures.
  ## Zero/Empty/Null Semantics
  ### The Lifetime Zero Problem
  ```yaml
  # What does 0 mean?
  session_timeout: 0    # Infinite timeout? Immediate expiry? Disabled?
  token_lifetime: 0     # Never expires? Already expired? Use default?
  max_attempts: 0       # No attempts allowed? Unlimited attempts?
  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/main/plugins/sharp-edges/skills/sharp-edges/references/config-patterns.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/sharp-edges
retrieved_at: 2026-02-06T10:23:22.555Z
content_sha256: 1d99f2716f7bef18efe71015ce0c56e0f4961c042faa503d796d6d4d1626fdc6
---
