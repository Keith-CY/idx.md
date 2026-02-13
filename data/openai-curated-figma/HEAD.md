---
stable_id: skills/openai-curated-figma
type: skills
title: openai-curated-figma
summary: >-
  ---

  name: figma

  description: Use the Figma MCP server to fetch design context, screenshots,
  variables, and assets from Figma, and to translate Figma nodes into production
  code. Trigger when a task involves Figma URLs, node IDs, design-to-code
  implementation, or Figma MCP setup and troubleshooting.

  ---

  # Figma MCP

  Use the Figma MCP server for Figma-driven implementation. For setup and
  debugging details (env vars, config, verification), see
  `references/figma-mcp-config.md`.

  ## Figma MCP Integration Rules

  These rules define how to translate Figma inputs into code for this project
  and must be followed for every Figma-driven change.

  ### Required flow (do not skip)

  1. Run get_design_context first to fetch the structured representation for the
  exact node(s).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/figma/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/figma/SKILL.md
retrieved_at: 2026-02-13T07:21:09.745Z
content_sha256: 5b11f7c8d0ce4c047b401323e7b8fe6559bd3162a3397bf5248634a5444609d5
---
