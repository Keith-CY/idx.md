---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.283

  - Added `plugin_errors` to the `SDKSystemMessage` type (`system/init`),
  including `path` for a `--plugin-dir` entry that did not load

  - Fixed `getSessionMessages()` returning, and `forkSession()` copying, a
  rewound-away branch when the newest branch ends at a meta row or a local
  command's rows

  - Changed stream-json output to include warnings and notices raised during a
  turn as `system/informational` messages; it previously dropped them

  - Changed the `set_max_thinking_tokens` control request: omitting
  `max_thinking_tokens` now leaves the session's thinking budget unchanged; send
  `null` to reset it to the session default

  - Updated to parity with Claude Code v2.1.283

  ## 0.3.282

  - Added support for `strictKnownMarketplaces` and `blockedMarketplaces` in
  host-supplied `managedSettings`: the allowlist applies only where admin policy
  sets none; the blocklist adds to the admin's

  - Added `@anthropic-ai/claude-agent-sdk/core`, a smaller entry point for apps
  that bundle the SDK (query, MCP tool helpers, session mutations,
  `resolveSettings`); it uses your installed zod and MCP SDK
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-26T11:58:37.977Z
content_sha256: 14a77a256902a525bfd8493319905b030cdbf1724aa21e516afefc8000126ce2
---
