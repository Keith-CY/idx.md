---
stable_id: skills/openclaw-openclaw-agent-registry
type: skills
title: agent-registry
summary: >-
  ---

  name: agent-registry

  version: 2.0.1

  description: |
    MANDATORY agent discovery system for token-efficient agent loading. Claude MUST use this skill
    instead of loading agents directly from ~/.claude/agents/ or .claude/agents/. Provides lazy
    loading via search and get tools. Use when: (1) user task may benefit from
    specialized agent expertise, (2) user asks about available agents, (3) starting complex
    workflows that historically used agents. This skill reduces context window usage by ~95%
    compared to loading all agents upfront.
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-ai-llms
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/matrixy/agent-registry/SKILL.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-05T07:17:37.847Z
content_sha256: 54dcea9b30ad2d53ebc0b2c7061f374cfc9c9e93cb1445bd1852d34a2414be58
---
