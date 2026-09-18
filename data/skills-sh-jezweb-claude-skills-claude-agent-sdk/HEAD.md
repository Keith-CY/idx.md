---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.276

  - Updated to parity with Claude Code v2.1.276

  ## 0.3.275

  - Fixed a deferred tool call's result being emitted with internal keys such as
  `toolUseResult` instead of `tool_use_result` when the tool re-runs at the
  start of a resumed turn

  - Fixed `getSessionMessages()` and `forkSession()` sometimes missing a turn's
  assistant message when called right after the turn's `result` message

  - Fixed `forkSession({ upToMessageId })` rejecting a client-supplied
  `SDKUserMessage.uuid` that is not in UUID format

  - Fixed `forkSession` rejecting the id that `getSessionMessages` returns for a
  message sent while Claude was working, and a fork showing a re-run prompt
  twice

  - Fixed `getSessionMessages()` omitting a task notification or other queued
  message that Claude read while running a tool; it now comes back where Claude
  read it

  - Updated to parity with Claude Code v2.1.275
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-18T12:00:40.924Z
content_sha256: 804fdd7fd84d41dee28f66ce9d6fdaec7c520b3b235b20a2e7fc52452125c828
---
