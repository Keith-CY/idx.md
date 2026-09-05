---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.261

  - Added `pluginDelivery: 'initialize'` to send `plugins` over stdin so the
  launch command line no longer grows with the plugin count (fixes Windows start
  failures with many plugins)

  - Fixed `query()` throwing "Object not disposable" in runtimes without a
  native `Symbol.dispose`, such as Node ≤22 `vm` contexts (Jest's `node`
  environment, vitest `vmThreads`/`vmForks`) and Node <18.18

  - Updated to parity with Claude Code v2.1.261

  ## 0.3.260

  - Added optional `user_message_uuid` to `thinking_tokens` system messages,
  linking thinking progress to the user message that triggered the turn

  - Added optional `first_content_frame_ms`, `first_stream_post_ms`,
  `first_stream_post_ack_ms` and `first_stream_post_wall_ms` fields to the
  success result message for remote-session latency breakdowns

  - Fixed `managedSettings` `disableAutoMode: "disable"` (either spelling) being
  dropped by the restrictive-only filter instead of turning auto mode off for
  the spawned session

  - Fixed `rewindFiles()` reporting success when no files could be restored (for
  example when checkpoint backups are missing); it now fails
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-05T11:04:40.799Z
content_sha256: 75a75e4939942f48d977fbd9f595ddea124c6c06ac62e2d57b3cd9006126bba3
---
