---
stable_id: skills/openclaw-docs-skill
type: skills
title: openclaw-docs-skill
summary: >-
  ---

  name: Clawdbot

  description: Use when deploying and managing a self-hosted AI agent gateway,
  configuring messaging channels (WhatsApp, Telegram, Discord, iMessage, etc.),
  building custom skills, setting up multi-agent routing, or troubleshooting
  agent behavior and channel connectivity.

  metadata:
      mintlify-proj: clawdbot
      version: "1.0"
  ---

  # OpenClaw Skill Reference

  ## Product summary

  OpenClaw is a self-hosted WebSocket gateway that connects messaging apps
  (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, and more) to AI agents.
  A single Gateway process routes inbound messages to agents, manages sessions,
  executes tools, and delivers replies back to channels. Agents run the embedded
  Pi agent core with access to tools (browser, exec, web search, skills),
  memory, and multi-agent routing. Key files: `~/.openclaw/openclaw.json`
  (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md,
  TOOLS.md, IDENTITY.md, USER.md, MEMORY.md, and skills/). Primary CLI:
  `openclaw` with subcommands for setup, config, agents, channels, skills, and
  gateway management. See the full docs at https://docs.openclaw.ai.
tags: []
source_url: https://docs.openclaw.ai/skill.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-04T07:22:09.940Z
content_sha256: 8d180cf65f2a02f63d014e5beb0fe3abe032d4cacec55b1c2a5e3ca146fcaf63
---
