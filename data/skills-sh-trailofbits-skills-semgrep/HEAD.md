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

  --severity WARNING --severity ERROR

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
retrieved_at: 2026-10-08T14:17:52.339Z
content_sha256: 99ed0ffb9e9ee68bcb175da469f1310f28f96e356c69c65918a0afc430027d3d
---
