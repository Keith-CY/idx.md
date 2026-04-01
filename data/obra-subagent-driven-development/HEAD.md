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

  Execute plan by dispatching fresh subagent per task, with two-stage review
  after each: spec compliance review first, then code quality review.

  **Why subagents:** You delegate tasks to specialized agents with isolated
  context. By precisely crafting their instructions and context, you ensure they
  stay focused and succeed at their task. They should never inherit your
  session's context or history — you construct exactly what they need. This also
  preserves your own context for coordination work.

  **Core principle:** Fresh subagent per task + two-stage review (spec then
  quality) = high quality, fast iteration

  ## When to Use

  ```dot
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/subagent-driven-development/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-04-01T07:30:54.068Z
content_sha256: 081ad3869e55c80bf8f890b4768a90c0e8057daf94b1b6fadebfc85ea5b8304a
---
