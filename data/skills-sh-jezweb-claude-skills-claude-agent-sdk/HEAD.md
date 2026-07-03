---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.199

  - Added `requestId` to `canUseTool` callback options for correlating
  out-of-band permission responses, and support for returning `null` to suppress
  the SDK's automatic control response

  - Added `blocked` field to `workflow_agent` progress events indicating when an
  agent was blocked by the auto-mode safety classifier

  - Added `mode:"mask"` and per-credential `injectHosts` to
  `sandbox.credentials` settings types for injecting masked credentials into
  sandboxed commands

  ## 0.3.198

  - Added a runtime warning when `canUseTool` is configured alongside
  `allowedTools` or `bypassPermissions`, which shadow the callback

  - Added per-server `request_timeout_ms` option to `mcp_set_servers` control
  request

  - Fixed `SDKUserMessage.isSynthetic` not being mapped to `isMeta` on
  ingestion, which could cause synthetic messages to be treated as real user
  messages

  - Fixed workflow progress events silently dropping earliest agents from the
  list while the phase counter remained correct
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-03T09:49:56.820Z
content_sha256: 2d242586be6eda1601bf1fd1791c6805bbf150326cf188ac65cbd7b4ae10b33f
---
