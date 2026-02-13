---
stable_id: skills/openclaw-openclaw-telegram-compose
type: skills
title: telegram-compose
summary: >-
  ---

  name: telegram-compose

  description: |
    Format and deliver rich Telegram messages with HTML formatting via direct Telegram API.
    Auto-invoked by the main session for substantive Telegram output — no other skills need to call it.
    Decision rule: If your Telegram reply is >3 lines or contains structured data (lists, stats, sections, reports),
    spawn this as a Haiku sub-agent to format and send. Short replies (<3 lines) go directly via OpenClaw message tool.
    Handles: research summaries, alerts, status updates, reports, briefings, notifications — anything with visual hierarchy.
  metadata: |
    {"openclaw":{
tags:
  - openclaw
  - source-awesome-openclaw-skills
  - category-communication
source_url: https://raw.githubusercontent.com/openclaw/skills/main/skills/tmchow/telegram-compose/SKILL.md
license: ""
upstream_ref: ""
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-02-13T08:00:10.006Z
content_sha256: 6f134a0d0e3028a58180b06bb6d7aa33d4d25380a409e4931cbc1efb66de3a17
---
