---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.186

  - Added `agent_id` field to `can_use_tool` control requests — background
  agents now forward permission prompts to `canUseTool` instead of auto-denying,
  and stdin stays open while background tasks are running

  - Added `ReadMcpResourceDirTool` tool type to SDK schemas — MCP resource
  directory listing is now a dedicated tool instead of a fallback inside
  `ReadMcpResourceTool`

  - Added `rewind_conversation` control request for rewinding a conversation to
  a previous point with durable resume anchor support

  ## 0.3.185

  - Updated to parity with Claude Code v2.1.185

  ## 0.3.184

  - Updated to parity with Claude Code v2.1.184

  ## 0.3.183
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-23T08:11:00.726Z
content_sha256: c0ac9dbceb31c232c3dd3aa5dee352ac05e4e1723a7e7973c9c570a23bd4da31
---
