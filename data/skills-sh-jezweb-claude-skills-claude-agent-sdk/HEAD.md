---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.282

  - Added support for `strictKnownMarketplaces` and `blockedMarketplaces` in
  host-supplied `managedSettings`: the allowlist applies only where admin policy
  sets none; the blocklist adds to the admin's

  - Added `@anthropic-ai/claude-agent-sdk/core`, a smaller entry point for apps
  that bundle the SDK (query, MCP tool helpers, session mutations,
  `resolveSettings`); it uses your installed zod and MCP SDK

  - Added `prewarm()` and `SpareProcess.claim()` (alpha): start a Claude Code
  process before its session is known and bind it to a folder and its
  per-session options later

  - Fixed `readMcpResource()` relaying content `_meta` keys under the
  CLI-reserved `com.anthropic/` prefix; they are now dropped, as for tool
  results

  - Updated to parity with Claude Code v2.1.282

  ## 0.3.281

  - Added optional `trigger`, `user_message_uuid` and `timestamp` fields to the
  `conversation_reset` message so clients can tell what reset the conversation,
  match a /clear to its message, and show when the reset happened

  - Fixed permission and dialog callbacks still being invoked for requests that
  arrived after `close()`
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-25T12:27:25.814Z
content_sha256: 3c2c9a349a9facc1959468d5c0bf28f40b2aeb1930a3dbe831f261c7d1152692
---
