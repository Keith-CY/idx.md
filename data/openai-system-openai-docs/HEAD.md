---
stable_id: skills/openai-system-openai-docs
type: skills
title: openai-system-openai-docs
summary: >-
  ---

  name: "openai-docs"

  description: "Use when the user asks how to build with OpenAI products or APIs
  and needs up-to-date official documentation with citations, help choosing the
  latest model for a use case, or model upgrade and prompt-upgrade guidance;
  prioritize OpenAI docs MCP tools, use bundled references only as helper
  context, and restrict any fallback browsing to official OpenAI domains."

  ---

  # OpenAI Docs

  Provide authoritative, current guidance from OpenAI developer docs using the
  developers.openai.com MCP server. Always prioritize the developer docs MCP
  tools over web.run for OpenAI-related questions. This skill also owns model
  selection, API model migration, and prompt-upgrade guidance. Only if the MCP
  server is installed and returns no meaningful results should you fall back to
  web search.

  ## API Key Setup

  For requests to build, run, configure, debug, or implement an API-backed app,
  script, CLI, generator, or tool, use `openai-platform-api-key` first when
  available. After that credential gate is resolved, return here for current
  docs as needed.

  Use this skill directly for docs-only questions, citations, model/API
  guidance, conceptual explanations, and examples that do not require building
  or running an API-backed artifact.

  ## Quick start
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/openai-docs/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-05-26T08:11:40.685Z
content_sha256: 1ee3c911a5c615c4f508e5611cb6e38548aba5ea12efb0c3e8838614cc6347b9
---
