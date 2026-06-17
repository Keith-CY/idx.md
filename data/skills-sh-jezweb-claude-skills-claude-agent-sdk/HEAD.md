---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.179

  - Added optional `tool_use_meta` sidecar to assistant messages with
  display-friendly names for tool calls, so SDK consumers can render
  human-readable labels instead of raw wire names

  - Fixed `-p` mode exiting before a completed background agent's notification
  was delivered, causing interim text to ship as the final result

  - Fixed remote (stream-json) sessions appearing busy for the entire duration
  of a background workflow — the turn result is now emitted at the turn boundary
  and the session reports idle while background tasks continue

  ## 0.3.178

  - Spawn failures on an existing native binary now explain the likely libc
  mismatch (musl binary on a glibc host) and suggest
  `options.pathToClaudeCodeExecutable`

  - Permission-denied advisory messages now carry typed denial reasons
  (`safetyCheck`, `asyncAgent`), enabling SDK consumers to programmatically
  match denial causes

  - Fixed `UserPromptSubmit` hook block feedback not being emitted to the SDK
  event stream — consumers can now see why a prompt was blocked by a hook
  instead of a silent hang

  - Remote Control workers now send a `worker_shutting_down` system message on
  graceful exit so remote clients can show why the session ended
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-17T08:43:37.043Z
content_sha256: 4fbc08c8f77c885b258d3b5a8cf189473e7cda897eb482ed613ef33cf434c201
---
