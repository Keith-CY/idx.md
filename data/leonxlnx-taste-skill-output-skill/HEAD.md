---
stable_id: skills/leonxlnx-taste-skill-output-skill
type: skills
title: leonxlnx-taste-skill-output-skill
summary: >-
  ---

  name: full-output-enforcement

  description: Overrides default LLM truncation behavior. Enforces complete code
  generation, bans placeholder patterns, and handles token-limit splits cleanly.
  Apply to any task requiring exhaustive, unabridged output.

  ---

  # Full-Output Enforcement

  ## Baseline

  Treat every task as production-critical. A partial output is a broken output.
  Do not optimize for brevity — optimize for completeness. If the user asks for
  a full file, deliver the full file. If the user asks for 5 components, deliver
  5 components. No exceptions.

  ## Banned Output Patterns

  The following patterns are hard failures. Never produce them:

  **In code blocks:** `// ...`, `// rest of code`, `// implement here`, `//
  TODO`, `/* ... */`, `// similar to above`, `// continue pattern`, `// add more
  as needed`, bare `...` standing in for omitted code
tags: []
source_url: https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/output-skill/SKILL.md
license: ""
upstream_ref: https://github.com/Leonxlnx/taste-skill/tree/main/output-skill
github_stars: 3662
github_forks: 283
github_is_organization: false
retrieved_at: 2026-03-18T07:24:44.669Z
content_sha256: e5bf48b1ae561511439cf71672209a10a88cee0968cc925909ff861dfa0a96a7
---
