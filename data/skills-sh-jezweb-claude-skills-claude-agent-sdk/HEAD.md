---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.181

  - Added `errorCode`, `canUserPurchaseCredits`, and
  `hasChargeableSavedPaymentMethod` fields to `SDKRateLimitInfo` for detecting
  credits-required rate limits

  - Added `tool_use_meta.icon_url` to assistant messages, populated from MCP
  server directory metadata

  - Fixed SDK-hosted Remote Control sessions dropping `file_attachments` from
  inbound user messages

  ## 0.3.180

  - Updated to parity with Claude Code v2.1.180

  ## 0.3.179

  - Added optional `tool_use_meta` sidecar to assistant messages with
  display-friendly names for tool calls, so SDK consumers can render
  human-readable labels instead of raw wire names

  - Fixed `-p` mode exiting before a completed background agent's notification
  was delivered, causing interim text to ship as the final result
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-18T08:32:25.553Z
content_sha256: caa5b1b19a7da7b7f6717a08fed15e33e3f751a82f6e54c3db0f34af0fc6a7f8
---
