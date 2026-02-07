---
stable_id: skills/openai-curated-develop-web-game
type: skills
title: openai-curated-develop-web-game
summary: |-
  ---
  name: "develop-web-game"
  description: "Use when Codex is building or iterating on a web game (HTML/JS) and needs a reliable development + testing loop: implement small changes, run a Playwright-based test script with short input bursts and intentional pauses, inspect screenshots/text, and review console errors with render_game_to_text."
  ---
  # Develop Web Game
  Build games in small steps and validate every change. Treat each iteration as: implement → act → pause → observe → adjust.
  ## Skill paths (set once)
  ```bash
  export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
  export WEB_GAME_CLIENT="$CODEX_HOME/skills/develop-web-game/scripts/web_game_playwright_client.js"
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/develop-web-game/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/develop-web-game/SKILL.md
retrieved_at: 2026-02-07T14:59:34.408Z
content_sha256: 4586330e97c99581f37798c179a71c62030fc20befa6de3e3ccb96d1adead9c7
---
