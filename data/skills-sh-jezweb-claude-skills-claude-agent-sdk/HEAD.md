---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.2.121

  - Added `updatedToolOutput` to `PostToolUseHookSpecificOutput` for replacing
  tool output on all tools. `updatedMCPToolOutput` is deprecated.

  ## 0.2.120

  - Added `skills` option (`string[] | 'all'`) to control which Skills are
  loaded into the main session, matching the Python SDK

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
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-28T07:46:56.771Z
content_sha256: 9565d3c00e701dee5b22b5ab12292685262b17034ae9329c86cdddffde3d5540
---
