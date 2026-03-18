---
stable_id: skills/openai-curated-sora
type: skills
title: openai-curated-sora
summary: >-
  ---

  name: "sora"

  description: "Use when the user asks to generate, edit, extend, poll, list,
  download, or delete Sora videos, create reusable non-human Sora character
  references, or run local multi-video queues via the bundled CLI
  (`scripts/sora.py`); includes requests like: (i) generate AI video, (ii) edit
  this Sora clip, (iii) extend this video, (iv) create a character reference,
  (v) download video/thumbnail/spritesheet, and (vi) Sora batch planning;
  requires `OPENAI_API_KEY` and Sora API access."

  ---

  # Sora Video Generation Skill

  Creates or manages Sora video jobs for the current project (product demos,
  marketing spots, cinematic shots, social clips, UI mocks). Defaults to
  `sora-2` with structured prompt augmentation and prefers the bundled CLI for
  deterministic runs. Note: `$sora` is a skill tag in prompts, not a shell
  command.

  ## When to use

  - Generate a new video clip from a prompt

  - Create a reusable character reference from a short non-human source clip

  - Edit an existing generated video with a targeted prompt change
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/sora/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/sora/SKILL.md
github_stars: 14288
github_forks: 821
github_is_organization: true
retrieved_at: 2026-03-18T07:22:17.204Z
content_sha256: 4e83510be2203188e02e6c8eca9e53d714a1e689e8aeef2eb37be42bbeab7eee
---
