---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.119

  - Added `forwardSubagentText` option to stream subagent text deltas to SDK
  consumers

  - `excludeDynamicSections` now keeps static auto-memory instructions in the
  cacheable system-prompt block; only the per-user memory directory path and
  per-machine environment values are relocated to the first user message

  - Long-running SDK sessions now reconnect claude.ai-proxied MCP servers after
  a transport-stream abort

  - `SessionStore.append()` failures are now retried up to 3 times with short
  backoff before the batch is dropped and `mirror_error` is emitted

  ## 0.2.118

  - Added `Options.managedSettings` for embedders to pass policy-tier settings
  to the spawned CLI in-memory, honored below IT-controlled managed sources

  ## 0.2.117

  - Updated to parity with Claude Code v2.1.117
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-25T07:29:25.027Z
content_sha256: 1f59aa05c98e1aeb152681b037ed38a9cd84e469118922d49bf469628acdead9
---
