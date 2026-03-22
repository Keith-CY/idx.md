---
stable_id: skills/openai-curated-slides
type: skills
title: openai-curated-slides
summary: >-
  ---

  name: slides

  description: Create and edit presentation slide decks (`.pptx`) with
  PptxGenJS, bundled layout helpers, and render/validation utilities. Use when
  tasks involve building a new PowerPoint deck, recreating slides from
  screenshots/PDFs/reference decks, modifying slide content while preserving
  editable output, adding charts/diagrams/visuals, or diagnosing layout issues
  such as overflow, overlaps, and font substitution.

  ---

  # Slides

  ## Overview

  Use PptxGenJS for slide authoring. Do not use `python-pptx` for deck
  generation unless the task is inspection-only; keep editable output in
  JavaScript and deliver both the `.pptx` and the source `.js`.

  Keep work in a task-local directory. Only copy final artifacts to the
  requested destination after rendering and validation pass.

  ## Bundled Resources

  - `assets/pptxgenjs_helpers/`: Copy this folder into the deck workspace and
  import it locally instead of reimplementing helper logic.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/slides/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/slides/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-03-22T07:15:46.147Z
content_sha256: 57ee0941f872546029bc45b5b0bd58d4a02d88b84d4e8e4275c466da5451efa6
---
