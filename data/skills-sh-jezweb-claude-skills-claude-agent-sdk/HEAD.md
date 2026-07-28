---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.220

  - Updated to parity with Claude Code v2.1.220

  ## 0.3.219

  - Added opt-in `cancel_queued` to the interrupt control request (capability
  `interrupt_cancel_queued_v1`): cancels queued and pending-dispatch messages
  alongside the abort

  - Added `fast_mode_disabled_reason` to result and init messages so SDK hosts
  can explain why fast mode is off

  - Added `DirectoryAdded` lifecycle hook event to the control protocol, fired
  when a new working directory is registered mid-session

  - Fixed the initialize response reporting `fast_mode_state` from the
  spawn-time model after a model switch

  - Added `sandbox.network.strictAllowlist` to SDK settings types for
  deterministically denying non-allowlisted hosts in sandboxed commands

  - Added `workflowSizeGuideline` to SDK settings types for setting the advisory
  dynamic-workflow size guideline
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-28T09:30:51.474Z
content_sha256: d1c387b8e19e09d2402fc09f87f6d0ceef13aac0cc6a75accb5e1746a0bb5a6c
---
