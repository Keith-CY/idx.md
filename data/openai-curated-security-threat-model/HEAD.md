---
stable_id: skills/openai-curated-security-threat-model
type: skills
title: openai-curated-security-threat-model
summary: >-
  ---

  name: "security-threat-model"

  description: "Repository-grounded threat modeling that enumerates trust
  boundaries, assets, attacker capabilities, abuse paths, and mitigations, and
  writes a concise Markdown threat model. Trigger only when the user explicitly
  asks to threat model a codebase or path, enumerate threats/abuse paths, or
  perform AppSec threat modeling. Do not trigger for general architecture
  summaries, code review, or non-security design work."

  ---

  # Threat Model Source Code Repo

  Deliver an actionable AppSec-grade threat model that is specific to the
  repository or a project path, not a generic checklist. Anchor every
  architectural claim to evidence in the repo and keep assumptions explicit.
  Prioritizing realistic attacker goals and concrete impacts over generic
  checklists.

  ## Quick start

  1) Collect (or infer) inputs:

  - Repo root path and any in-scope paths.

  - Intended usage, deployment model, internet exposure, and auth expectations
  (if known).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/security-threat-model/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/security-threat-model/SKILL.md
retrieved_at: 2026-02-07T14:59:34.585Z
content_sha256: 1283c0dd62a8104d9edda4583569b5d8510b4ddaa45120687c999250fd96bad2
---
