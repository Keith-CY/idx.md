---
stable_id: skills/openai-curated-imagegen
type: skills
title: openai-curated-imagegen
summary: >-
  ---

  name: "imagegen"

  description: "Generate or edit raster images when the task benefits from
  AI-created bitmap visuals such as photos, illustrations, textures, sprites,
  mockups, or transparent-background cutouts. Use when Codex should create a
  brand-new image, transform an existing image, or derive visual variants from
  references, and the output should be a bitmap asset rather than repo-native
  code or vector. Do not use when the task is better handled by editing existing
  SVG/vector/code-native assets, extending an established icon or logo system,
  or building the visual directly in HTML/CSS/canvas."

  ---

  # Image Generation Skill

  Generates or edits images for the current project (for example website assets,
  game assets, UI mockups, product mockups, wireframes, logo design,
  photorealistic images, or infographics).

  ## Top-level modes and rules

  This skill has exactly two top-level modes:

  - **Default built-in tool mode (preferred):** built-in `image_gen` tool for
  normal image generation and editing. Does not require `OPENAI_API_KEY`.

  - **Fallback CLI mode (explicit-only):** `scripts/image_gen.py` CLI. Use only
  when the user explicitly asks for the CLI path. Requires `OPENAI_API_KEY`.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/imagegen/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/imagegen/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-27T07:25:22.503Z
content_sha256: 826d05b806d51fa81cd650f1c0854b0a1f7fbccd1b152c588ded1797a2e7218f
---
