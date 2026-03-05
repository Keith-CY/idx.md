---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating reusable skill packages for AI agents,
  integrating skills into agent platforms, or authoring SKILL.md files that
  extend agent capabilities with specialized workflows, scripts, and domain
  expertise.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills

  ## Product summary

  Agent Skills is a lightweight, open format for packaging specialized
  knowledge, workflows, and executable code into reusable skill directories that
  AI agents can discover and activate. A skill is a folder containing a required
  `SKILL.md` file (with YAML frontmatter and Markdown instructions) plus
  optional `scripts/`, `references/`, and `assets/` directories. Agents load
  only skill metadata (name and description) at startup, then read full
  instructions when a task matches the skill's purpose. This progressive
  disclosure keeps agents fast while giving them access to detailed context on
  demand. Use skills to package domain expertise, repeatable workflows, and new
  capabilities that agents can reuse across different compatible platforms.
  Primary documentation: https://agentskills.io
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-05T07:17:09.566Z
content_sha256: 6aeb00e3e9eb83b1208f9a50295017d95a8b041e7bb60709bd7f996c1ebb8b23
---
