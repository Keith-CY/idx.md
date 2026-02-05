---
stable_id: skills/openai-experimental-codex-readiness-integration-test
type: skills
title: openai-experimental-codex-readiness-integration-test
summary: >-
  ---

  name: codex-readiness-integration-test

  description: Run the Codex Readiness integration test. Use when you need an
  end-to-end agentic loop with build/test scoring.

  metadata:
    short-description: Run Codex Readiness integration test
  ---

  # LLM Codex Readiness Integration Test

  This skill runs a multi-stage integration test to validate agentic execution
  quality. It always runs in execute mode (no read-only mode).

  ## Outputs

  Each run writes to `.codex-readiness-integration-test/<timestamp>/` and
  updates `.codex-readiness-integration-test/latest.json`.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.experimental/codex-readiness-integration-test/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.experimental/codex-readiness-integration-test/SKILL.md
retrieved_at: 2026-02-05T19:13:51.802Z
content_sha256: 9197a24bda6ec00cb226ee52ab14a335e2960c7d9d4184e5219d44671f4bab19
---
