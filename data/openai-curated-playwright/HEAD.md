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
retrieved_at: 2026-02-06T10:23:18.866Z
content_sha256: 7172692b607a12763b20e4aea03ad49faf244447e5095e44e51ea211082b7e32
---
