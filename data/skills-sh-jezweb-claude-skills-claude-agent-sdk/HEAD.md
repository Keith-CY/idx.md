---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.197

  - Updated to parity with Claude Code v2.1.197

  ## 0.3.196

  - Added `prompt_id` field to hook input payloads for correlating hook events
  with OpenTelemetry prompt-level events

  - Fixed control protocol deduplication dropping tool-use IDs after 1000
  resolutions, which could cause duplicate `tool_result` deliveries in
  long-running sessions

  ## 0.3.195

  - Added `Query.reinitialize()` to re-send the initialize control request and
  redeliver pending permission/dialog prompts after a transport gap

  - Fixed `commands_changed` event not being emitted for synced skills when the
  skill list resolves before the change-detector subscribes

  ## 0.3.194
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-01T08:23:41.231Z
content_sha256: 89cdb7ee435284496acef984b3babc2fadf052bbde019598e7c3505cc5a295ab
---
