---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.77

  - Added `api_retry` system messages when retrying transient API errors,
  exposing attempt count, max retries, delay, and error status

  - Updated to parity with Claude Code v2.1.77

  ## 0.2.76

  - Added `forkSession(sessionId, opts?)` for branching conversations from a
  point

  - Added `cancel_async_message` control subtype to drop a queued user message
  by UUID before execution

  - Added `planFilePath` field to `ExitPlanMode` tool input for hooks and SDK
  consumers

  - Added MCP elicitation hook types and `SDKElicitationCompleteMessage` system
  message for handling MCP server input requests programmatically

  - Updated to parity with Claude Code v2.1.76
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-17T17:25:07.443Z
content_sha256: fdbe504f349449b9b18a76b4135bf6be156d8245b3da6ecc5064b10632a449ce
---
