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

  - Branch: `codex/{description}` when starting from main/master/default.

  - Commit: `{description}` (terse).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/yeet/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/yeet/SKILL.md
retrieved_at: 2026-02-07T03:39:37.610Z
content_sha256: 2b4583b296a3a043b9002cd74e3ca5407fce832598dcd428272da08a9839f64b
---
