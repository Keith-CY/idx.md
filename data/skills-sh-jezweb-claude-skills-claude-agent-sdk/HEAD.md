---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.112

  - Updated to parity with Claude Code v2.1.112

  ## 0.2.111

  - Opus 4.7 is now available! This version of the SDK is required to use it.

  - `mcp_set_servers` control request: remote (http/sse) server entries can now
  carry per-tool `permission_policy` values, which are applied to the session's
  allow/deny rules

  - `startup()` and `WarmQuery` are now part of the public TypeScript API

  - Changed `options.env` to overlay the inherited `process.env` instead of
  replacing it

  ## 0.2.110

  - Fixed `unstable_v2_createSession` not respecting `cwd`, `settingSources`,
  and `allowDangerouslySkipPermissions` options
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-17T07:32:01.302Z
content_sha256: 9d8faf6d8ad0bf3d81315475e3302360c2d5f416bf7ea581c617cb3734ce8487
---
