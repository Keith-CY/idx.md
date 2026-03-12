---
stable_id: skills/obra-dispatching-parallel-agents
type: skills
title: obra-dispatching-parallel-agents
summary: >-
  ---

  name: dispatching-parallel-agents

  description: Use when facing 2+ independent tasks that can be worked on
  without shared state or sequential dependencies

  ---

  # Dispatching Parallel Agents

  ## Overview

  You delegate tasks to specialized agents with isolated context. By precisely
  crafting their instructions and context, you ensure they stay focused and
  succeed at their task. They should never inherit your session's context or
  history — you construct exactly what they need. This also preserves your own
  context for coordination work.

  When you have multiple unrelated failures (different test files, different
  subsystems, different bugs), investigating them sequentially wastes time. Each
  investigation is independent and can happen in parallel.

  **Core principle:** Dispatch one agent per independent problem domain. Let
  them work concurrently.

  ## When to Use
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/dispatching-parallel-agents/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md
github_stars: 74053
github_forks: 5701
github_is_organization: false
retrieved_at: 2026-03-12T07:18:09.999Z
content_sha256: 76806091c7f923ba2596546b19cccd98a08e57a68745df77c3a7b998fe838e2b
---
