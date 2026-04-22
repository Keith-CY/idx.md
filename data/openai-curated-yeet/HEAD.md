---
stable_id: skills/openai-curated-yeet
type: skills
title: openai-curated-yeet
summary: >-
  ---

  name: "yeet"

  description: "Use only when the user explicitly asks to stage, commit, push,
  and open a GitHub pull request in one flow using the GitHub CLI (`gh`)."

  ---

  ## Prerequisites

  - Require GitHub CLI `gh`. Check `gh --version`. If missing, ask the user to
  install `gh` and stop.

  - Require authenticated `gh` session. Run `gh auth status`. If not
  authenticated, ask the user to run `gh auth login` (and re-run `gh auth
  status`) before continuing.

  ## Naming conventions

  - Branch: `{description}` when starting from main/master/default.

  - Commit: `{description}` (terse).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/yeet/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/yeet/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-04-22T07:35:25.320Z
content_sha256: 4fcb31435d2ab8ebecba78decd4c3489c876209010ab0b5ef5c960cfd299c52a
---
