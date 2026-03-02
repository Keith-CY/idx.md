---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.63

  - SDK: Fixed `pathToClaudeCodeExecutable` failing when set to a bare command
  name (e.g., `"claude"`) that should resolve via PATH

  - Added `supportedAgents()` method to the Query interface to view available
  subagents

  - Fixed MCP replacement tools being incorrectly denied in subagents when using
  unprefixed MCP tool names

  ## 0.2.61

  - Updated to parity with Claude Code v2.1.61

  ## 0.2.59

  - Added `getSessionMessages()` function for reading a session's conversation
  history from its transcript file, with support for pagination via `limit` and
  `offset` options

  ## 0.2.58
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-02T07:20:38.963Z
content_sha256: 759621cd5de211580a728a57876d915a3964d85629ace8efe2db1953e062d79d
---
