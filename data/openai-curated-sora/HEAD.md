---
stable_id: skills/openai-curated-sora
type: skills
title: openai-curated-sora
summary: >-
  ---

  name: "sora"

  description: "Use when the user asks to generate, remix, poll, list, download,
  or delete Sora videos via OpenAI\u2019s video API using the bundled CLI
  (`scripts/sora.py`), including requests like \u201cgenerate AI video,\u201d
  \u201cSora,\u201d \u201cvideo remix,\u201d \u201cdownload
  video/thumbnail/spritesheet,\u201d and batch video generation; requires
  `OPENAI_API_KEY` and Sora API access."

  ---

  # Sora Video Generation Skill

  Creates or manages short video clips for the current project (product demos,
  marketing spots, cinematic shots, UI mocks). Defaults to `sora-2` and a
  structured prompt augmentation workflow, and prefers the bundled CLI for
  deterministic runs. Note: `$sora` is a skill tag in prompts, not a shell
  command.

  ## When to use

  - Generate a new video clip from a prompt

  - Remix an existing video by ID

  - Poll status, list jobs, or download assets (video/thumbnail/spritesheet)
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/sora/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/sora/SKILL.md
retrieved_at: 2026-02-07T05:23:45.076Z
content_sha256: 13ac4711e544afc1d76cc2f7ae34ff19089be5797654afba7932d6c2424acccf
---
