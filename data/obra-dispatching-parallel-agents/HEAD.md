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

  When you have multiple unrelated failures (different test files, different
  subsystems, different bugs), investigating them sequentially wastes time. Each
  investigation is independent and can happen in parallel.

  **Core principle:** Dispatch one agent per independent problem domain. Let
  them work concurrently.

  ## When to Use

  ```dot
tags:
  - obra
  - source-obra-superpowers
source_url: https://raw.githubusercontent.com/obra/superpowers/main/skills/dispatching-parallel-agents/SKILL.md
license: ""
upstream_ref: https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md
retrieved_at: 2026-02-08T05:37:09.177Z
content_sha256: c628917689ccc12ce9991615db6824d44c4fe71f8427cd959560aebe6a1a6476
---
