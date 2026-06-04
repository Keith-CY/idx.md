---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.162

  - Refusal error messages now carry `stop_reason: "refusal"` and `stop_details`
  on the assistant message and in session transcripts, so SDK consumers can
  detect refusals without text-matching the error content

  - Agent SDK sessions on native builds now default to fast embedded
  `find`/`grep` search in Bash, matching the interactive CLI, instead of always
  registering the dedicated Grep/Glob tools. To keep the dedicated tools (e.g.
  to intercept searches via `canUseTool` or hooks), name them in the `tools`
  option or reference them in `allowedTools`

  ## 0.3.161

  - The `initialize` control request is now idempotent: a second `initialize`
  returns the same success payload instead of an `Already initialized` error.
  `ControlResponse` gains an optional `pending_permission_requests` field,
  mirroring `ControlErrorResponse`

  - `applyFlagSettings` now live-applies `agent` changes: switching the active
  agent (or passing `null` to reset) takes effect on the next turn in a running
  session

  ## 0.3.160

  - Fixed SDK hook callbacks swallowing abort signals: aborting during a
  PostToolUse hook now ends the turn with a final `result` message instead of
  hanging the calling process

  ## 0.3.159
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-04T08:27:36.965Z
content_sha256: 2825b19ecf8bd5fa9cecc25bfcff241d5c2221d08555bda3d5a47e63494e4abc
---
