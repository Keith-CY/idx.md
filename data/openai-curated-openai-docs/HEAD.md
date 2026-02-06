---
stable_id: skills/openai-curated-openai-docs
type: skills
title: openai-curated-openai-docs
summary: >-
  ---

  name: "openai-docs"

  description: "Use when the user asks how to build with OpenAI products or APIs
  and needs up-to-date official documentation with citations (for example:
  Codex, Responses API, Chat Completions, Apps SDK, Agents SDK, Realtime, model
  capabilities or limits); prioritize OpenAI docs MCP tools and restrict any
  fallback browsing to official OpenAI domains."

  ---

  # OpenAI Docs

  Provide authoritative, current guidance from OpenAI developer docs using the
  developers.openai.com MCP server. Always prioritize the developer docs MCP
  tools over web.run for OpenAI-related questions. Only if the MCP server is
  installed and returns no meaningful results should you fall back to web
  search.

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
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/openai-docs/SKILL.md
retrieved_at: 2026-02-06T04:00:10.217Z
content_sha256: 100099568ce8887ccd961aad2aa824a6d6054d4e5e697625815cc6e1b30d54a7
---
