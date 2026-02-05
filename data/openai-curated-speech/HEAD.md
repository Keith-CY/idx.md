---
stable_id: skills/openai-curated-speech
type: skills
title: openai-curated-speech
summary: >-
  ---

  name: "speech"

  description: "Use when the user asks for text-to-speech narration or
  voiceover, accessibility reads, audio prompts, or batch speech generation via
  the OpenAI Audio API; run the bundled CLI (`scripts/text_to_speech.py`) with
  built-in voices and require `OPENAI_API_KEY` for live calls. Custom voice
  creation is out of scope."

  ---

  # Speech Generation Skill

  Generate spoken audio for the current project (narration, product demo
  voiceover, IVR prompts, accessibility reads). Defaults to
  `gpt-4o-mini-tts-2025-12-15` and built-in voices, and prefers the bundled CLI
  for deterministic, reproducible runs.

  ## When to use

  - Generate a single spoken clip from text

  - Generate a batch of prompts (many lines, many files)

  ## Decision tree (single vs batch)
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/speech/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/speech/SKILL.md
retrieved_at: 2026-02-05T19:13:51.786Z
content_sha256: d6120efc03ea0e80204f687801cfaec8efc4519a3430b68e13e4ebd8e1c69b52
---
