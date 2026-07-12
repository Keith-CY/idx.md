---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.207

  - Fixed `canUseTool` returning `{behavior: 'allow'}` without `updatedInput`
  being rejected as a deny with a raw ZodError message; the tool now runs with
  the original input per the documented contract

  - The Agent tool's structured result now has a published SDK type
  (`AgentToolCompletedOutput`) that matches the emitted object exactly

  ## 0.3.206

  - Added `command_lifecycle` frames to stream-json and SDK sessions, reporting
  each uuid-stamped message's terminal state
  (`queued`/`started`/`completed`/`cancelled`/`discarded`); zero-API results no
  longer report stale `duration_api_ms`

  ## 0.3.205

  - Interrupt control responses now include `still_queued` (UUIDs of queued
  async messages that will still run), `Query.interrupt()` returns the typed
  receipt, and `system/init` advertises an `interrupt_receipt_v1` capability for
  feature detection

  - Added structured `name` and `body` fields to peer-message session events,
  exposing the sender display name and decoded message body

  ## 0.3.204
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-12T08:58:03.112Z
content_sha256: 78f72e2284ab2b9aa6976998f7f7d653d532fc1512a02dbacf5705baf6bc212b
---
