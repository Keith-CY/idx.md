---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.317

  - Added `onFailure` to hook matchers: with `"block"`, a hook that throws or
  returns invalid output blocks the action

  - Added a warning message in the stream when a hook callback fails

  - Added a `session_writes_lost` system message, sent after the last result
  when a full disk or disk quota kept the CLI from saving the session transcript
  or ~/.claude.json

  - Added `initialize_not_first` to `startup_failure_reason`, for a
  `--await-initialize` launch whose first stdin line is not the initialize
  request

  - Added `task.description` to the TaskCreate tool's `tool_use_result`: the
  description the task was created with

  - Added `lossy` to `readFile()` utf-8 answers: `true` when decoding replaced
  bytes that are not valid UTF-8

  - Removed the `file_unchanged` variant of `FileReadOutput` in
  `sdk-tools.d.ts`; a repeated Read now returns the file content

  - Fixed `setMcpServers` closing a folder's `.mcp.json` and local-scope MCP
  servers in sessions started with `prewarm()` and bound with
  `SpareProcess.claim()`
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-03T14:46:27.861Z
content_sha256: e9a0ab545a4d47910f5f137c9bfc64f10bf8ab1c92ad609854fb3d5d08158409
---
