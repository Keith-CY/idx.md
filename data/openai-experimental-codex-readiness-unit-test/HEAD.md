---
stable_id: skills/openai-experimental-codex-readiness-unit-test
type: skills
title: openai-experimental-codex-readiness-unit-test
summary: >-
  ---

  name: codex-readiness-unit-test

  description: Run the Codex Readiness unit test report. Use when you need
  deterministic checks plus in-session LLM evals for AGENTS.md/PLANS.md.

  metadata:
    short-description: Run Codex Readiness unit test report
  ---

  # LLM Codex Readiness Unit Test

  Instruction-first, in-session "readiness" for evaluating AGENTS/PLANS
  documentation quality without any external APIs or SDKs. All checks run
  against the current working directory (cwd), with no monorepo discovery. Each
  run writes to `.codex-readiness-unit-test/<timestamp>/` and updates
  `.codex-readiness-unit-test/latest.json`. Keep execution deterministic
  (filesystem scanning + local command execution only). All LLM evaluation
  happens in-session and must output strict JSON via the provided references.

  ## Quick Start

  1) Collect evidence:
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.experimental/codex-readiness-unit-test/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.experimental/codex-readiness-unit-test/SKILL.md
retrieved_at: 2026-02-07T05:23:45.729Z
content_sha256: 691877b98465cb2244cdc584a429925b95c4a027d375f787ec5411f0599376dc
---
