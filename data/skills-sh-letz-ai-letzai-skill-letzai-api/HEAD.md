---
stable_id: skills/skills-sh-letz-ai-letzai-skill-letzai-api
type: skills
title: skills-sh-letz-ai-letzai-skill-letzai-api
summary: >-
  # LetzAI Polling Pattern Guide

  LetzAI uses asynchronous generation for all image and video operations. This
  guide explains how to properly implement polling to check job status and
  retrieve results.

  ## Why Polling?

  AI image and video generation takes time (seconds to minutes). Instead of
  keeping connections open, LetzAI uses an async pattern:

  1. **Submit Job** → Receive job ID immediately

  2. **Poll Status** → Check periodically until complete

  3. **Get Result** → Fetch URLs when ready

  ## Status Flow

  ```

  ┌─────┐     ┌─────────────┐     ┌───────┐
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/letz-ai/letzai-skill/HEAD/examples/polling_pattern.md
license: ""
upstream_ref: https://skills.sh/letz-ai/letzai-skill/letzai-api
retrieved_at: 2026-02-08T05:35:29.894Z
content_sha256: dca10944dcb129ae0451aa5a116a56e569c628f2988d043c9bbe3ed558cda02c
---
