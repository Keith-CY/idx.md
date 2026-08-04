---
stable_id: skills/skills-sh-trailofbits-skills-semgrep
type: skills
title: skills-sh-trailofbits-skills-semgrep
summary: >-
  # Scan Modes Reference

  ## Mode: Run All

  Full scan with all rulesets and severity levels. Current default behavior. No
  filtering applied — all findings are reported and triaged.

  ## Mode: Important Only

  Focused on high-confidence security vulnerabilities. Excludes code quality,
  best practices, and low-confidence audit findings.

  ### Pre-Filter: CLI Severity Flag

  Add these flags to every `semgrep` command:

  ```bash

  --severity MEDIUM --severity HIGH --severity CRITICAL

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/static-analysis/skills/semgrep/references/scan-modes.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/semgrep
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-04T09:37:30.687Z
content_sha256: 76c8d41c8fc2c36daa44171db345373e169da46a69387378a31ef26061102c97
---
