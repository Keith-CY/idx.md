---
stable_id: skills/openai-curated-openai-docs
type: skills
title: openai-curated-openai-docs
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

  ## Workflow Configuration

  ### Source Priority

  - For Codex self-knowledge, use the Codex source route below; it owns when to
  use the manual helper, Docs MCP, or bounded uncertainty.

  - For non-Codex OpenAI docs questions, use
  `mcp__openaiDeveloperDocs__search_openai_docs` to find the most relevant doc
  pages.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/openai-docs/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/openai-docs/SKILL.md
github_stars: 14772
github_forks: 861
github_is_organization: true
retrieved_at: 2026-07-22T09:21:48.593Z
content_sha256: 057d24b4f36dab38299857777e4c0ca5bcce65d8cf89d917c174c1a0ae23d9f8
---
