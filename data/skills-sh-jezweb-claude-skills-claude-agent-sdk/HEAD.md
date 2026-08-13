---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.229

  - Added `terminal_slash_commands` to the system init message so Remote Control
  clients can hide terminal-oriented commands

  - Changed conversations whose messages alone exceed the API's 32 MB limit to
  end the turn with `terminal_reason` `"api_error"` instead of `"image_error"`;
  `StopFailure` `error_details` is `"request_body_over_limit: …"`

  ## 0.3.228

  - Agent tool results (`AgentOutput`): `usage.output_tokens_details` is now
  carried through

  ## 0.3.227

  - Updated to parity with Claude Code v2.1.227

  ## 0.3.226

  - Updated to parity with Claude Code v2.1.226
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-13T08:12:27.752Z
content_sha256: bb40761de8ade3967f87664fbc4a878616b6674925405ddc8c7631a3b5539503
---
