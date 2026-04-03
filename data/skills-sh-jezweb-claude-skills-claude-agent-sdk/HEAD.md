---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.91

  - Added optional `terminal_reason` field to result messages, exposing why the
  query loop terminated (`completed`, `aborted_tools`, `max_turns`,
  `blocking_limit`, etc.)

  - Added `'auto'` to the public `PermissionMode` type

  - Changed `sandbox` option to default `failIfUnavailable` to `true` when
  `enabled: true` is passed — `query()` will emit an error result and exit if
  sandbox dependencies are missing, instead of silently running unsandboxed. Set
  `failIfUnavailable: false` to allow graceful degradation.

  - Updated to parity with Claude Code v2.1.91

  ## 0.2.90

  - Updated to parity with Claude Code v2.1.90

  ## 0.2.89

  - Added `startup()` to pre-warm the CLI subprocess before `query()`, making
  the first query ~20x faster when startup cost can be paid upfront
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-03T07:27:47.268Z
content_sha256: 67ac78c1181f178fe0bb7ceb37c55b354149ea0610fa7ebc0e2cc7cb59b321dd
---
