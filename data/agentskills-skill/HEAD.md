---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating, optimizing, or evaluating Agent Skills —
  reusable instruction packages that extend AI agent capabilities. Reach for
  this skill when building SKILL.md files, testing skill triggering, bundling
  scripts, or implementing skills support in an agent client.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills

  ## Product summary

  Agent Skills is an open format for packaging specialized instructions,
  scripts, and resources that agents can discover and use on demand. A skill is
  a directory containing a `SKILL.md` file (metadata + instructions), optional
  `scripts/` for executable code, and optional `references/` and `assets/`
  directories for supporting materials. Skills use progressive disclosure:
  agents load only the name and description at startup, read full instructions
  when a task matches, and load supporting files on demand. This keeps context
  efficient while giving agents access to domain expertise, repeatable
  workflows, and organizational knowledge. See the [Agent Skills
  specification](https://agentskills.io/specification) for the complete format
  reference.
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-05T07:24:36.141Z
content_sha256: 8896ab4c00f08b29bb5cfbbab4404d0914981cc63dc0062d69beba125ddca9d1
---
