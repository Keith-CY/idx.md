---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.212

  - Fixed dash-leading `resumeSessionAt` and `sessionId` values being passed to
  the CLI as separate argv tokens; both now use equals-form (`--flag=value`)

  - Agent tool output now includes the resolved model when a mid-turn model swap
  changed the subagent's model

  ## 0.3.211

  - Fixed `--replay-user-messages` with `--include-partial-messages` emitting
  the turn-start user replay after the first content block instead of before the
  turn's content events

  - Added `SDKAssistantMessage.timestamp` (ISO-8601) to the live stream,
  matching `SDKUserMessage`; older emitters omit it, consumers should fall back
  to receive time

  - Added rate-limit message prefix buckets (`USAGE_LIMIT_ERROR_PREFIXES` and
  siblings) as `@alpha` exports for classifying rate-limit messages without
  hand-mirrored lists

  - Improved process-exit errors to include the CLI's stderr output, so a failed
  child reports its actual cause instead of only an exit code

  ## 0.3.210
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-17T09:03:37.761Z
content_sha256: 5ebe444291a3d837b85e0a605598e3a4499466fa18f6cabe2c8ef50c002ead4d
---
