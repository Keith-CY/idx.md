---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.259

  - Added `user_message_uuids` beside `user_message_uuid` on a turn's first
  reply frame and result: every user message the turn answered, so a reply to
  several merged messages can be matched to each

  - Added `permissionPrompts: 'none'` option to auto-deny permission prompts in
  sessions with nobody to answer them, without disabling auto mode's classifier

  - Updated to parity with Claude Code v2.1.259

  ## 0.3.258

  - Updated to parity with Claude Code v2.1.258

  ## 0.3.257

  - Added `thinkingTokens` to `ModelUsage` (a subset of `outputTokens`), and
  fixed result-message `usage.output_tokens_details.thinking_tokens` reporting 0
  instead of the session's real count

  - Added `tool_use_result.resourceLinks` on user messages carrying MCP tool
  results: the `resource_link` blocks the tool returned, so hosts can render
  returned files without parsing the result text
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-03T11:51:02.537Z
content_sha256: 76f918de0d75cb553f43290ee98b27fad93881a83705e66bddaec0fd199c18d6
---
