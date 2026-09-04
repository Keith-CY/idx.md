---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

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

  - Changed `error_max_structured_output_retries` results to append the last
  StructuredOutput tool error; validation errors now name the offending key,
  allowed values, and actual length or count

  - Changed `rate_limit_event` to also re-emit during an exceeded window on
  repeat 429s (about once per 30 seconds per limit window), so stream consumers
  can refresh stale rate-limit state

  - Updated to parity with Claude Code v2.1.260

  ## 0.3.259
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-04T11:55:06.155Z
content_sha256: 84f137eb5780586f9aff1b44385df05fe9f509161ad0277a58ca1992c8b6a70c
---
