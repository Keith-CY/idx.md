---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.85

  - Added `reloadPlugins()` SDK method to reload plugins and receive refreshed
  commands, agents, and MCP server status

  - Fixed PreToolUse hooks with `permissionDecision: "ask"` being ignored in SDK
  mode

  - Updated to parity with Claude Code v2.1.85

  ## 0.2.84

  - Added `taskBudget` option for API-side token budget awareness, allowing the
  model to pace tool use within a token limit

  - Added `enableChannel()` method and `capabilities` field on `McpServerStatus`
  for SDK-driven MCP channel activation

  - Exported `EffortLevel` type (`'low' | 'medium' | 'high' | 'max'`) for
  consumers to reference effort values directly

  - Fixed showing "[Request interrupted by user]" for errors that were not
  caused by user interruption
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-27T07:25:48.420Z
content_sha256: 682e61c1ff5c6e35aa6c65157d1b207d7c7688f4e5c2c0ee3fab358d4710d0e5
---
