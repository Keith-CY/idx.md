---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating, optimizing, or evaluating Agent Skills —
  reusable instruction packages that extend AI agent capabilities. Reach for
  this skill when building new skills, improving skill descriptions for better
  triggering, testing skill quality with evals, bundling scripts, or integrating
  skills into agent products.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills Playbook

  ## Product summary

  Agent Skills is an open format for packaging specialized knowledge and
  workflows into reusable instruction sets that agents load on demand. A skill
  is a folder containing a `SKILL.md` file (required metadata + instructions)
  plus optional `scripts/`, `references/`, and `assets/` directories. Skills use
  progressive disclosure: agents load only the name and description at startup,
  read the full instructions when a task matches, and load supporting files as
  needed. This keeps agents fast while giving them access to specialized
  knowledge on demand.
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-04T09:34:16.654Z
content_sha256: f9872225ebd3425645ff53e3eed9dc92dc3611ce1f060d00345e4cab2a7a1e8e
---
