---
stable_id: skills/openclaw-openclaw-agent-registry
type: skills
title: agent-registry
summary: >-
  ---

  name: agent-registry

  description: |
    MANDATORY agent discovery system for token-efficient agent loading. Claude MUST use this skill
    instead of loading agents directly from ~/.claude/agents/ or .claude/agents/. Provides lazy
    loading via search_agents and get_agent tools. Use when: (1) user task may benefit from
    specialized agent expertise, (2) user asks about available agents, (3) starting complex
    workflows that historically used agents. This skill reduces context window usage by ~95%
    compared to loading all agents upfront.
  ---
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-ai-llms
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/matrixy/agent-registry/SKILL.md
license: ""
upstream_ref: ""
retrieved_at: 2026-02-04T07:00:24.805Z
content_sha256: 6d5df8e30fb34065eccc0f2df42ab8b82d239d94460a173e761405c8df80f400
---
