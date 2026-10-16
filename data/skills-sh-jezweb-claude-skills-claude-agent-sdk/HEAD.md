---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.301

  - Added per-tool permission policies to sdk-type MCP server configs: `tools`
  entries with `permission_policy` `always_ask` or `always_deny`, applied on
  `initialize` and `setMcpServers()`

  - Added `BUILTIN_TOOL_NAMES` and `LEGACY_TOOL_NAME_ALIASES` exports: the
  public built-in tool names and their earlier names, for checking permission
  rules and tool settings

  - Added `addPlugins` to `Query.reloadPlugins()` so a host can load more plugin
  folders into a running session

  - Fixed `setModel()` with a model ID failing while the account is at its
  five-hour or weekly usage limit; the model now applies and the next message
  reports the limit

  - Changed the error when a full disk keeps the login from being refreshed:
  `error` is now `invalid_request`, not `authentication_failed`, and
  `api_error_status` is `null`, not 401

  - Changed `mcpServerStatus()` to still report a tool's `_meta.ui.visibility`
  when the rest of its `_meta.ui` fails validation

  - Updated to parity with Claude Code v2.1.301

  ## 0.3.300
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-16T12:02:23.568Z
content_sha256: 5fbbcb5cd0dd8e5a78c33c8116dca59f08d4b577ff2bed4778709d47de1387fa
---
