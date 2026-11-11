---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.322

  - Updated to parity with Claude Code v2.1.322

  ## 0.3.321

  - Fixed `canUseTool` getting the app's own PreToolUse hook reason in
  `decisionReason` when another hook also asked

  - Fixed a PreToolUse hook's `ask` being lost when another hook's `defer`
  finished first and could not be honored

  - Fixed every hook being dropped when one event in the `hooks` option is set
  to `undefined`

  - Fixed `WarmQuery.query()` with a string prompt hanging after `startup()`
  with `resume` when the resumed session finished a turn of its own before the
  prompt was sent

  - Fixed `setMcpServers` closing a folder's `.mcp.json` or local-scope MCP
  server when passed an in-process server of the same name, in sessions bound
  with `SpareProcess.claim()`

  - Fixed `reloadSkills()`, `reloadPlugins()` and `system/init` dropping project
  skills, commands or agents that a worktree lacks after Claude entered it
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-11T14:50:33.621Z
content_sha256: d93c72c484a1161bea79adcbf512fb4ce54fa46a39dce3d8efea43448ef31629
---
