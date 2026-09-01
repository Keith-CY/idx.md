---
stable_id: skills/openai-system-openai-docs
type: skills
title: openai-system-openai-docs
summary: >-
  ---

  name: "openai-docs"

  description: "Use when the user asks how to build with OpenAI products or
  APIs, asks about Codex itself or choosing Codex surfaces, needs up-to-date
  official documentation with citations, help choosing the latest model for a
  use case, or model upgrade and prompt-upgrade guidance; use OpenAI docs MCP
  tools for non-Codex docs questions, use the Codex manual helper first for
  broad Codex self-knowledge, and restrict fallback browsing to official OpenAI
  domains."

  ---

  # OpenAI Docs

  Provide authoritative, current guidance from OpenAI developer docs using the
  developers.openai.com MCP server. "Docs MCP" means
  `mcp__openaiDeveloperDocs__search_openai_docs` and
  `mcp__openaiDeveloperDocs__fetch_openai_doc`; for API reference, schema,
  parameter, or required-field questions, also use
  `mcp__openaiDeveloperDocs__get_openapi_spec` when available. Official-domain
  web search is fallback after those tools are unavailable or unhelpful. Broad
  Codex questions use the manual helper before Docs MCP. This skill also owns
  model selection, API model migration, and prompt-upgrade guidance.

  ## API Key Setup

  For requests to build, run, configure, debug, or implement an API-backed app,
  script, CLI, generator, or tool, use `openai-platform-api-key` first when
  available. After that credential gate is resolved, return here for current
  docs as needed.

  Use this skill directly for docs-only questions, citations, model/API
  guidance, conceptual explanations, and examples that do not require building
  or running an API-backed artifact.

  ## Workflow Configuration
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/openai-docs/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-09-01T12:20:21.469Z
content_sha256: 669a42ccf3323fe0ceda6e466730bcb05dddf1e0c220d6523ea504909fc49165
---
