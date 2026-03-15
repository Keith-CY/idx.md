---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating, optimizing, or integrating skills for AI
  agents. Reach for this skill when you need to author a SKILL.md file, test
  whether a skill triggers correctly, optimize a skill's description, bundle
  scripts with a skill, or add skills support to an agent platform.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills

  ## Product summary

  Agent Skills is a standard format for packaging reusable instructions,
  scripts, and resources that AI agents can discover and activate. Every skill
  is a folder containing a `SKILL.md` file with YAML frontmatter (name and
  description) and Markdown instructions, optionally bundled with executable
  scripts in `scripts/`, reference documentation in `references/`, and assets in
  `assets/`. Agents use progressive disclosure: they load only the name and
  description at startup to decide when a skill is relevant, then read the full
  SKILL.md into context when activated. The format is portable (just files),
  self-documenting (readable by humans and agents), and extensible (from text
  instructions to complex workflows with code). Primary documentation:
  https://agentskills.io
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-15T07:18:46.469Z
content_sha256: d3ede087587c0a601a2634ad60b42850dcf028bb4d7489a9b6b34bac1b498df5
---
