---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.268

  - Added `result_index` to result messages: the result's position in delivery
  order within the run, from 0

  - Added `local_command` to the result message of a turn that ran a slash
  command without entering the model loop, carrying the command's name

  - Added `hold_on_cache_impact` to the `reload_plugins` control request
  (`Query.reloadPlugins({ holdOnCacheImpact: true })`): holds a reload that
  would invalidate the session's prompt cache

  - Added `resume_reason` to assistant, stream-event and result messages, set
  only on the automatic re-run of a turn a host restart interrupted

  - Added `kind` (used, free, buffer, deferred) to each category in the
  `get_context_usage` control response, matching the `/context` result's
  `context_usage` rows

  - Added optional `defaultToNo` and `suppressAlwaysAllowRule` hints to
  `canUseTool` options: the prompt should open on its decline option, or offer
  no persistent "always allow" choice

  - Changed `setModel()` to confirm a model id the CLI doesn't know locally with
  the API the first time a session uses it, instead of refusing it as
  unrecognized

  - Changed `user_message_uuid` on the automatic re-run of an interrupted turn
  to name that turn's last user prompt
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-11T11:58:25.181Z
content_sha256: 4bdf74535416c6a7040f193cf0a119ad7ca0fae6edecbde462470b3b813ee51b
---
