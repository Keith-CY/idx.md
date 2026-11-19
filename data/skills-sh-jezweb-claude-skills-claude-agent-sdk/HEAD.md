---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.328

  - Added `onFailure` to `mcp_tool` hooks in the `Settings` type: with
  `"block"`, a hook whose call fails blocks the action it guards

  - Added `CLAUDE_CODE_DISABLE_DEFERRED_TOOL_RESUME`: set it in the `env` option
  to stop `resume` and `continue` from running a tool call that a hook deferred;
  settings can't set it

  - Added support for the policy plugin's `allowManagedModsOnly` option in
  host-supplied `managedSettings`; an admin's managed settings still win

  - Fixed the `agent` option: an inline definition in `agents` now wins over a
  user, project, plugin or built-in agent of the same name for model, prompt and
  hooks

  - Fixed the `agent` option: an agent from an agents directory now keeps its
  system prompt when `systemPrompt` is not set

  - Fixed the model saying background agents were still running after an SDK
  interrupt had stopped them

  - Changed subagents to wait for their own subagents by default when
  `CLAUDE_CODE_FORK_SUBAGENT=0` is set

  - Changed a shell command rewritten by a `PermissionRequest` hook: the
  rewrite's own permission check now decides the sandbox, so a sandbox-excluded
  rewrite runs outside it; `canUseTool` is unchanged
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-19T16:11:15.728Z
content_sha256: 3b5bad78601a74829160be009dbd89afa39ed32b1e12342a9beb24b279a658d4
---
