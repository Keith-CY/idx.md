---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.286

  - Added the initialize response field `sdk_mcp_manifests_parked` and the
  `system/init` capabilities `sdk_mcp_manifests` and
  `sdk_mcp_tools_list_changed`

  - Fixed foreground subagents sometimes not receiving the task-tracking tools
  listed in `tools` or `allowedTools`

  - Fixed an SDK MCP server listing no tools when one tool's schema cannot be
  converted to JSON Schema; that tool is now left out with a warning naming it

  - Fixed `toggleMcpServer()` not disconnecting, and failing to re-enable, an
  in-process MCP server created with `createSdkMcpServer()`, except one named
  `claude-in-chrome`

  - Changed a person's priority `now` message to move running shell commands,
  agents and MCP calls to the background and join the running turn instead of
  stopping it

  - Changed the TypeScript Agent SDK to leave an omitted `permissionMode` to
  Claude Code, so a settings `defaultMode` now applies and, on third-party
  providers or with telemetry off, the session starts in auto mode like `claude
  -p`; pass `permissionMode: 'default'` for manual approvals

  - Updated to parity with Claude Code v2.1.286

  ## 0.3.285
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-01T14:03:07.469Z
content_sha256: 8d9195ab55b9d8e327f4bfad20e6ed83761123ff174ba72eb4a5b26aacc10e60
---
