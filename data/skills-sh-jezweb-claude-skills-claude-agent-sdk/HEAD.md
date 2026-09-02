---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.258

  - Updated to parity with Claude Code v2.1.258

  ## 0.3.257

  - Added `thinkingTokens` to `ModelUsage` (a subset of `outputTokens`), and
  fixed result-message `usage.output_tokens_details.thinking_tokens` reporting 0
  instead of the session's real count

  - Added `tool_use_result.resourceLinks` on user messages carrying MCP tool
  results: the `resource_link` blocks the tool returned, so hosts can render
  returned files without parsing the result text

  - Added optional `resource_links` to `task_notification` for an
  auto-backgrounded MCP tool call that completed, listing the files it returned
  by reference; join to the call via `tool_use_id`

  - Fixed `mcp_reconnect` and `mcp_toggle` acting on a same-named `.mcp.json` /
  `~/.claude.json` server instead of the `--mcp-config` or `mcp_set_servers` one

  - Fixed `mcp_toggle` disable also removing the tools of a sibling MCP server
  whose name extends the disabled one's (disabling `foo` dropped `foo__bar`'s
  tools)

  - Changed `mcp_set_servers` to also list a server whose connection attempt
  throws under `added` (with a `failed` row in `mcp_status`), not only under
  `errors`
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-02T11:52:56.814Z
content_sha256: 344d109aa4861944c19199258fe8a528f38882afa9f8d12b4695d05cb44ab66a
---
