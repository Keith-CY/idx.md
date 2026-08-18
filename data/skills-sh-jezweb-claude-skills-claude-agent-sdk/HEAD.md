---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.234

  - Removed unused `bypass_permissions_disabled` from `ExitReason` type; the
  value was never emitted — TypeScript consumers with an explicit `case` branch
  get a compile error on upgrade (runtime unaffected)

  - Updated the `ApiKeySource` type to include the values `system/init` actually
  reports (`ANTHROPIC_API_KEY`, `apiKeyHelper`, `/login managed key`, `none`)

  - `vcs_state_changed` events report the directory the shell finished in (an
  inner `cd` is reflected)

  - A peer `origin` injected by the host may declare the sending session's
  permission class (`fromMode`) so a same-class message is delivered to a
  recipient that runs without asking

  - `SDKSystemMessage` (`system`/`init`) gains an optional `effort` field: the
  session's applied effort level, or `null` when none is sent. Set on Remote
  Control bridge init frames

  ## 0.3.233

  - Notification hooks now fire for pending permission prompts on the SDK path,
  matching the interactive REPL behavior

  - Todo/task-tracking tools (`TaskCreate`/`TaskGet`/`TaskUpdate`/`TaskList`,
  `TodoWrite`) are no longer in the default tool surface on Opus 4.8, Sonnet 5,
  Fable 5, Mythos 5, and newer models; name them in the `tools` option or
  reference them in `allowedTools` (or set `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`) to
  keep them
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-18T07:30:23.759Z
content_sha256: aa76b0b4e1b23b990f4be07b614a1df10a1a6c850ae59dbba4bf2c01fb02d06c
---
