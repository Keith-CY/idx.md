---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.295

  - Added `overageEnabled` to `SDKRateLimitInfo`: on usage-limit warnings,
  whether the account has extra usage turned on

  - Fixed an MCP server added with `mcp_set_servers` sometimes keeping an
  outdated tool list when another server in the same request connected later

  - Fixed assistant text blocks losing their `citations` in streamed responses

  - Fixed Claude being told "disabled by the user" about an in-process MCP
  server that was switched off with `toggleMcpServer()`

  - Fixed `rate_limit_event` with status `allowed_warning` omitting
  `overageStatus`, `overageResetsAt` and `overageDisabledReason`, which
  `allowed` and `rejected` events already carry

  - Changed MCP tool descriptions the model loads through tool search, including
  those from in-process SDK servers, to be cut at 16,384 characters instead of
  2,048

  - Changed a permission answer whose `updatedPermissions` holds over 4,096
  updates, rules and directories to count as a denial

  - Changed `tool_result_meta[].non_execution_kind` to be absent when a mod
  withheld the result of a tool that ran without error; it was `permission-rule`
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-09T14:01:27.636Z
content_sha256: d3a320623963961c2fbbdb6565b12f066ea409d9c37d6a88ac7781c91f323582
---
