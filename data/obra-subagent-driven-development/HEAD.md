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

  **Continuous execution:** Do not pause to check in with your human partner
  between tasks. Execute all tasks from the plan without stopping. The only
  reasons to stop are: BLOCKED status you cannot resolve, ambiguity that
  genuinely prevents progress, or all tasks complete. "Should I continue?"
  prompts and progress summaries waste their time — they asked you to execute
  the plan, so execute it.

  ## When to Use
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/subagent-driven-development/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md
github_stars: 101712
github_forks: 8129
github_is_organization: false
retrieved_at: 2026-05-31T08:03:49.744Z
content_sha256: 905a2b9be59b734dbe166525ad31dcaaf712a75926135adee1f554557aba5744
---
