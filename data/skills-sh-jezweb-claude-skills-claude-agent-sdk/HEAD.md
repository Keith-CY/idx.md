---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.216

  - Added optional `skippedLinks` count to `rewindFiles` responses for paths the
  rewind safety guards refused to restore or delete

  - Added `tool_result_meta` sidecar to user messages (`non_execution_kind`,
  `user_feedback`) so consumers can classify denied, interrupted, or cancelled
  tool calls without string-matching result prose

  - Added optional `user_message_uuid` and `request_sent_wall_ms` fields to the
  success result message for cross-host request-latency correlation

  ## 0.3.215

  - Updated to parity with Claude Code v2.1.215

  ## 0.3.214

  - `set_permission_mode` now rejects unrecognized permission modes with an
  error instead of silently adopting them; the `'manual'` alias is accepted at
  every ingress

  - Added optional `subkind: 'scheduled-trigger'` to the `task-notification`
  member of `SDKMessageOrigin`, marking deliveries that are the fired prompt of
  a user-configured scheduled task
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-21T09:23:13.622Z
content_sha256: c2c3aa903529cb2b957bbfddad7a7339bf7c858026a17055c324c2c2e6440b96
---
