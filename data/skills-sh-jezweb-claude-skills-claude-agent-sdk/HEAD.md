---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.165

  - Updated to parity with Claude Code v2.1.165

  ## 0.3.164

  - Updated to parity with Claude Code v2.1.164

  ## 0.3.163

  - `stop_task` control requests now return success when the target task is
  already gone (`not_found` or `not_running`), so SDK clients can reliably prune
  stale task chips

  - Fixed SDK hosts being unable to add builtin MCP servers (e.g.
  `claude-in-chrome`) via `setMcpServers` when the CLI was launched without them

  - Stop and SubagentStop hook events now support `additionalContext` in
  `hookSpecificOutput`, enabling non-error feedback that continues the turn

  ## 0.3.162
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-05T08:20:44.791Z
content_sha256: 89b7ca337910e590152a2844bff2922886d96739bd5b7d987d34f89266c282e5
---
