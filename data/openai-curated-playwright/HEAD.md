---
stable_id: skills/openai-curated-playwright
type: skills
title: openai-curated-playwright
summary: >-
  ---

  name: "playwright"

  description: "Use when the task requires automating a real browser from the
  terminal (navigation, form filling, snapshots, screenshots, data extraction,
  UI-flow debugging) via `playwright-cli` or the bundled wrapper script."

  ---

  # Playwright CLI Skill

  Drive a real browser from the terminal using `playwright-cli`. Prefer the
  bundled wrapper script so the CLI works even when it is not globally
  installed.

  Treat this skill as CLI-first automation. Do not pivot to `@playwright/test`
  unless the user explicitly asks for test files.

  ## Prerequisite check (required)

  Before proposing commands, check whether `npx` is available (the wrapper
  depends on it):

  ```bash
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/playwright/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/playwright/SKILL.md
retrieved_at: 2026-02-13T04:46:24.514Z
content_sha256: 0ffaabcc8e0990627c4725f18bf1c7955534a796c1c199e872909de2013ce6a8
---
