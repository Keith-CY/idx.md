---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.296

  - Added `claude_code_version` to the `initialize` control response so clients
  know the CLI version before the first turn

  - Added `autoCompactWindow` to `AgentDefinition`, so a subagent can
  auto-compact earlier than the main conversation's window

  - Fixed the `sandbox` option discarding an inline `settings.sandbox` block:
  the two now merge, the option's values win, and deny and credential lists from
  both sides are combined

  - Changed the default limit on MCP tool descriptions sent up front and on MCP
  server instructions, in-process SDK servers included, from 2,048 to 4,096
  characters

  - Changed permission answers that arrive after a restart to be parsed like
  live ones: over 4,096 `updatedPermissions` entries count as a denial, and a
  malformed list is ignored as a whole

  - Updated to parity with Claude Code v2.1.296

  ## 0.3.295

  - Added `overageEnabled` to `SDKRateLimitInfo`: on usage-limit warnings,
  whether the account has extra usage turned on
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-10T13:10:13.900Z
content_sha256: cad5148ab21d3152e716d7436ce01c6529ac4afc40af5af5951f6eeb74292e49
---
