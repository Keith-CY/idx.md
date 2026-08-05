---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.222

  - Fixed `query({ sessionStore, resume })` not carrying user `settings.json`
  (`apiKeyHelper`, `env`, `hooks`, `permissions`) into the resumed subprocess

  ## 0.3.221

  - Improved `skills` option validation: malformed names (delimiters or control
  characters) and wildcard-form names are rejected with a clear error; use
  `skills: 'all'` to enable every skill

  - Fixed external MCP servers passed via the `mcpServers` option not being
  connected before the first turn, which caused the model to emit tool calls as
  literal text

  ## 0.3.220

  - Updated to parity with Claude Code v2.1.220

  ## 0.3.219

  - Added opt-in `cancel_queued` to the interrupt control request (capability
  `interrupt_cancel_queued_v1`): cancels queued and pending-dispatch messages
  alongside the abort
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-05T09:31:10.029Z
content_sha256: 8ee6729ead083479aeed5e909f7d6bce45faf5b29d3042c8ef0265b055d1415d
---
