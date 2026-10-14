---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.299

  - Added an optional `nextFireAt` (epoch ms of the next run) to the CronCreate
  and CronList tool outputs

  - Added `property_order` to the `elicitation` control request: a form's field
  names in the order the MCP server listed them, for hosts whose transport keeps
  no JSON object key order

  - Fixed `rewind_conversation` answering "target not found" for a message
  stopped during its prompt hooks or plugins: until a reply or input follows, it
  answers `rewound: true` with a null `prefillText`

  - Fixed in-process SDK MCP servers named `constructor` or `toString` being
  silently dropped when a `prewarm()` process is claimed with
  `SpareProcess.claim()`

  - Fixed queued user messages with content-block arrays running together
  without a line break when merged into one turn

  - Fixed `origin.body` on a user message that merges several queued peer
  messages (from other sessions or agents) carrying only the first message's
  text; it is now omitted

  - Changed `initialize`, `mcp_set_servers` and `claim_session` to refuse the
  reserved MCP server names `__proto__`, `__defineGetter__`, `__defineSetter__`,
  `__lookupGetter__`, `__lookupSetter__`

  - Updated to parity with Claude Code v2.1.299
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-10-14T12:35:00.119Z
content_sha256: a953ff195866abe1d9a0e419e9c6a7a9c94090f1e2798db6d1010356845d74de
---
