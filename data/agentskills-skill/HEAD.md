---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating, authoring, or evaluating Agent Skills —
  reusable instruction packages that extend AI agent capabilities. Reach for
  this skill when building new skills, optimizing skill descriptions for
  reliable triggering, testing skill outputs, or integrating skills into agent
  clients.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills

  ## Product summary

  Agent Skills is an open format for packaging specialized instructions,
  scripts, and resources that agents can discover and use on demand. A skill is
  a folder containing a `SKILL.md` file (with YAML frontmatter and Markdown
  instructions), plus optional `scripts/`, `references/`, and `assets/`
  directories. Skills use **progressive disclosure**: agents load only the name
  and description at startup, then read full instructions when a task matches
  the skill's scope, then load supporting files as needed. This keeps context
  efficient while giving agents access to domain expertise, repeatable
  workflows, and company-specific knowledge.
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-02T07:29:17.702Z
content_sha256: 2416f0403e6a816aadb5897edff2129cf71427568f60372b50142f400f93d527
---
