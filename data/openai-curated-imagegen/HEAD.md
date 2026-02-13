---
stable_id: skills/openai-curated-imagegen
type: skills
title: openai-curated-imagegen
summary: >-
  ---

  name: "imagegen"

  description: "Use when the user asks to generate or edit images via the OpenAI
  Image API (for example: generate image, edit/inpaint/mask, background removal
  or replacement, transparent background, product shots, concept art, covers, or
  batch variants); run the bundled CLI (`scripts/image_gen.py`) and require
  `OPENAI_API_KEY` for live calls."

  ---

  # Image Generation Skill

  Generates or edits images for the current project (e.g., website assets, game
  assets, UI mockups, product mockups, wireframes, logo design, photorealistic
  images, infographics). Defaults to `gpt-image-1.5` and the OpenAI Image API,
  and prefers the bundled CLI for deterministic, reproducible runs.

  ## When to use

  - Generate a new image (concept art, product shot, cover, website hero)

  - Edit an existing image (inpainting, masked edits, lighting or weather
  transformations, background replacement, object removal, compositing,
  transparent background)

  - Batch runs (many prompts, or many variants across prompts)
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/imagegen/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/imagegen/SKILL.md
retrieved_at: 2026-02-13T04:46:24.232Z
content_sha256: 4da06e7a1fbfaa94154dda2699e449a1f6d79e6e4299fcfeb785aad7c87f59dc
---
