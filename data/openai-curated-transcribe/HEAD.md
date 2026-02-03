---
stable_id: skills/openai-curated-transcribe
type: skills
title: openai-curated-transcribe
summary: >-
  ---

  name: "transcribe"

  description: "Transcribe audio files to text with optional diarization and
  known-speaker hints. Use when a user asks to transcribe speech from
  audio/video, extract text from recordings, or label speakers in interviews or
  meetings."

  ---

  # Audio Transcribe

  Transcribe audio using OpenAI, with optional speaker diarization when
  requested. Prefer the bundled CLI for deterministic, repeatable runs.

  ## Workflow

  1. Collect inputs: audio file path(s), desired response format
  (text/json/diarized_json), optional language hint, and any known speaker
  references.

  2. Verify `OPENAI_API_KEY` is set. If missing, ask the user to set it locally
  (do not ask them to paste the key).

  3. Run the bundled `transcribe_diarize.py` CLI with sensible defaults (fast
  text transcription).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/transcribe/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/transcribe/SKILL.md
retrieved_at: 2026-02-03T18:12:11.451Z
content_sha256: f530021da9f377362ee4214e0bc689cbb5404640d2eb88ee272d51d61f530a09
---
