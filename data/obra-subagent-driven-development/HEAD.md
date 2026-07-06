---
stable_id: skills/obra-subagent-driven-development
type: skills
title: obra-subagent-driven-development
summary: >-
  ---

  name: subagent-driven-development

  description: Use when executing implementation plans with independent tasks in
  the current session

  ---

  # Subagent-Driven Development

  Execute plan by dispatching a fresh implementer subagent per task, a task
  review (spec compliance + code quality) after each, and a broad whole-branch
  review at the end.

  **Why subagents:** You delegate tasks to specialized agents with isolated
  context. By precisely crafting their instructions and context, you ensure they
  stay focused and succeed at their task. They should never inherit your
  session's context or history — you construct exactly what they need. This also
  preserves your own context for coordination work.

  **Core principle:** Fresh subagent per task + task review (spec + quality) +
  broad final review = high quality, fast iteration

  **Narration:** between tool calls, narrate at most one short line — the

  ledger and the tool results carry the record.
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/subagent-driven-development/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-07-06T11:23:59.845Z
content_sha256: 41ab239a6ad1c487cd839fdac972a8c9cf0f5e90efa59a63f963767864f0df4c
---
