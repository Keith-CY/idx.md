---
stable_id: skills/agentskills-skill
type: skills
title: agentskills-skill
summary: >-
  ---

  name: Agent

  description: Use when creating, optimizing, or implementing Agent Skills — a
  lightweight format for packaging specialized knowledge and workflows into
  reusable instructions for AI agents. Reach for this skill when authoring
  SKILL.md files, evaluating skill quality, designing skill descriptions,
  bundling scripts, or integrating skills into agent products.

  metadata:
      mintlify-proj: agent
      version: "1.0"
  ---

  # Agent Skills Playbook

  ## Product summary

  Agent Skills is an open format for extending AI agent capabilities with
  specialized knowledge and workflows. A skill is a folder containing a
  `SKILL.md` file (required metadata + instructions) plus optional supporting
  files: `scripts/` (executable code), `references/` (documentation), and
  `assets/` (templates, data). Skills use **progressive disclosure** — agents
  load only the name and description at startup, read full instructions when a
  task matches, and load supporting files on demand. This keeps agents fast
  while giving them access to specialized knowledge when needed.
tags: []
source_url: https://agentskills.io/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-05-22T08:07:24.168Z
content_sha256: fa2fd73ceea7f1596a619bdff76526c3bce97cec1f3c40b98b2124a7c4d7059f
---
