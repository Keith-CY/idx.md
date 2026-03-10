---
stable_id: skills/openai-system-openai-docs
type: skills
title: openai-system-openai-docs
summary: >-
  ---

  name: "openai-docs"

  description: "Use when the user asks how to build with OpenAI products or APIs
  and needs up-to-date official documentation with citations, help choosing the
  latest model for a use case, or explicit GPT-5.4 upgrade and prompt-upgrade
  guidance; prioritize OpenAI docs MCP tools, use bundled references only as
  helper context, and restrict any fallback browsing to official OpenAI
  domains."

  ---

  # OpenAI Docs

  Provide authoritative, current guidance from OpenAI developer docs using the
  developers.openai.com MCP server. Always prioritize the developer docs MCP
  tools over web.run for OpenAI-related questions. This skill may also load
  targeted files from `references/` for model-selection and GPT-5.4-specific
  requests, but current OpenAI docs remain authoritative. Only if the MCP server
  is installed and returns no meaningful results should you fall back to web
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
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/openai-docs/SKILL.md
github_stars: 13365
github_forks: 747
github_is_organization: true
retrieved_at: 2026-03-10T07:16:31.451Z
content_sha256: 8d8ed6246315074b8fe51e1251dd3e2ef42e54d8e9dff892c70acf88ab0e4235
---
