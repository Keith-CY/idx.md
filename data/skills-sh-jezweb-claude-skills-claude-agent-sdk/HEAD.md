---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.215

  - Updated to parity with Claude Code v2.1.215

  ## 0.3.214

  - `set_permission_mode` now rejects unrecognized permission modes with an
  error instead of silently adopting them; the `'manual'` alias is accepted at
  every ingress

  - Added optional `subkind: 'scheduled-trigger'` to the `task-notification`
  member of `SDKMessageOrigin`, marking deliveries that are the fired prompt of
  a user-configured scheduled task

  - `applyFlagSettings({effortLevel})` now accepts `'max'` in its TypeScript
  type (runtime already supported it)

  - Assistant messages truncated by `interrupt()` now carry `aborted: true`, so
  consumers can distinguish a mid-stream partial from a completed message

  - Added optional `subagent_type` and `subagent_retry` fields to
  `tool_progress` messages so clients can show a subagent waiting out an API
  rate-limit retry

  - The `system/init` message's `plugins` entries and the `reload_plugins`
  response now include each plugin's manifest `version`
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-19T09:02:11.448Z
content_sha256: 43ed53519e9db09654d9cab1828b57650e3624fb2fef3baf9caa6f553ab9cca5
---
