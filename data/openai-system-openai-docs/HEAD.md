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

  ## Quick start

  - Use `mcp__openaiDeveloperDocs__search_openai_docs` to find the most relevant
  doc pages.

  - Use `mcp__openaiDeveloperDocs__fetch_openai_doc` to pull exact sections and
  quote/paraphrase accurately.

  - Use `mcp__openaiDeveloperDocs__list_openai_docs` only when you need to
  browse or discover pages without a clear query.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/openai-docs/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-04-28T07:54:30.029Z
content_sha256: 1941a2fa1d815f9fa46efbe410df4dbb57092e22140e768c085c4bedba859fa3
---
