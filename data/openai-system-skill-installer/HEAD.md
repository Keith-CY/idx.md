---
stable_id: skills/openai-system-skill-installer
type: skills
title: openai-system-skill-installer
summary: >-
  ---

  name: skill-installer

  description: Install Codex skills into $CODEX_HOME/skills from a curated list
  or a GitHub repo path. Use when a user asks to list installable skills,
  install a curated skill, or install a skill from another repo (including
  private repos).

  metadata:
    short-description: Install curated skills from openai/skills or other repos
  ---

  # Skill Installer

  Helps install skills. By default these are from
  https://github.com/openai/skills/tree/main/skills/.curated, but users can also
  provide other locations. Experimental skills live in
  https://github.com/openai/skills/tree/main/skills/.experimental and can be
  installed the same way.

  Use the helper scripts based on the task:

  - List skills when the user asks what is available, or if the user uses this
  skill without specifying what to do. Default listing is `.curated`, but you
  can pass `--path skills/.experimental` when they ask about experimental
  skills.
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.system/skill-installer/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.system/skill-installer/SKILL.md
retrieved_at: 2026-02-13T04:46:24.929Z
content_sha256: 09df0ea7921f63d51befae9fc8f71daece5ef49d7b96e35fff8b18d15d6afda7
---
