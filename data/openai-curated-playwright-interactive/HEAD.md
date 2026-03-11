---
stable_id: skills/openai-curated-playwright-interactive
type: skills
title: openai-curated-playwright-interactive
summary: >-
  ---

  name: "playwright-interactive"

  description: "Persistent browser and Electron interaction through `js_repl`
  for fast iterative UI debugging."

  ---

  # Playwright Interactive Skill

  Use a persistent `js_repl` Playwright session to debug local web or Electron
  apps, keep the same handles alive across iterations, and run functional plus
  visual QA without restarting the whole toolchain unless the process ownership
  changed.

  ## Preconditions

  - `js_repl` must be enabled for this skill.

  - If `js_repl` is missing, enable it in `~/.codex/config.toml`:

  ```toml
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright-interactive/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/playwright-interactive/SKILL.md
github_stars: 13365
github_forks: 747
github_is_organization: true
retrieved_at: 2026-03-11T07:17:30.019Z
content_sha256: 92a0882bc34be10451c7b077f20bb915a2711e68e1baa9ccb10f6915b5568881
---
