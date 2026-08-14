---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.232

  - Subagent MCP `tool_result` frames whose result carries `_meta` now emit
  `tool_use_result` as `{ content, _meta }` (matching main-loop frames) instead
  of a bare value

  - `/context` result messages now carry a structured `context_usage` payload
  (new `SDKContextUsage` type), so consumers can render the context-usage card
  without parsing the markdown table

  - `vcs_state_changed` events now populate the `branch` field for push
  operations, sourced from the pushed ref

  ## 0.3.231

  - Updated to parity with Claude Code v2.1.231

  ## 0.3.230

  - Updated to parity with Claude Code v2.1.230

  ## 0.3.229
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-14T08:07:51.266Z
content_sha256: 05fc04048a87c7725f80fb0925d764604283bff2b7f89c5a4d238395c5769f7c
---
