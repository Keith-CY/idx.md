---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.187

  - Added `sandbox.credentials` to SDK settings types for configuring credential
  file and environment variable denial in sandboxed commands

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
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-24T08:07:57.377Z
content_sha256: 9c31a24b0231f87ce66791518d80736d5087a83845b336182bfae0542e69b9ff
---
