---
stable_id: skills/skills-sh-letz-ai-letzai-skill-letzai-api
type: skills
title: skills-sh-letz-ai-letzai-skill-letzai-api
summary: >-
  # LetzAI Polling Pattern Guide

  Every LetzAI generation endpoint is asynchronous. The POST returns a job id
  immediately;

  you then poll the matching GET until the job reaches a terminal state.

  1. **Submit** → receive `id`

  2. **Poll** → check `status` periodically

  3. **Collect** → read the result URLs

  ## Status Flow

  ```

  ┌─────┐     ┌────────────┐     ┌───────┐

  │ new │ ──> │ generating │ ──> │ ready │
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/letz-ai/letzai-skill/HEAD/examples/polling_pattern.md
license: ""
upstream_ref: https://skills.sh/letz-ai/letzai-skill/letzai-api
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-07-29T09:32:51.698Z
content_sha256: 8ed7322ab7c13a593574c69d0410aacbdb0f5e8b53e84a19f01eb50101dfc585
---
