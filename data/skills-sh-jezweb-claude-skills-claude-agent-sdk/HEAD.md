---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.177

  - Updated to parity with Claude Code v2.1.177

  ## 0.3.176

  - Fixed turn `result` messages being dropped when multiple turns complete
  while a background agent or workflow is running

  - Fixed background agent, remote agent, and MCP task state not being restored
  when resuming a session via the SDK

  ## 0.3.175

  - Updated to parity with Claude Code v2.1.175

  ## 0.3.174

  - SDK consumers now receive the `system/model_fallback` message for all
  fallback triggers — `overloaded`, `server_error`, and `last_resort` in
  addition to `model_not_found` and `permission_denied` — and the message's
  `trigger` field gained the `server_error` and `last_resort` values
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-13T08:06:52.497Z
content_sha256: 0ebe227d2ef22540b70b441775fbd434d03874663d0c7116f2a7bf4c435981d4
---
