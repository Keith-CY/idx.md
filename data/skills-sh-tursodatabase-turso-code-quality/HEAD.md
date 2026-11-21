---
stable_id: skills/skills-sh-tursodatabase-turso-code-quality
type: skills
title: skills-sh-tursodatabase-turso-code-quality
summary: >-
  ---

  name: async-io-model

  description: Use when writing or changing code that returns IOResult or keeps
  I/O state across yields - state machines, re-entrancy, CompletionGroup

  ---

  # Async I/O model

  Turso uses cooperative yielding with explicit state machines instead of
  async/await.

  ## Types

  ```rust

  pub enum IOResult<T> {
      Done(T),            // finished, here is the result
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/tursodatabase/turso/HEAD/.claude/skills/async-io-model/SKILL.md
license: ""
upstream_ref: https://skills.sh/tursodatabase/turso/code-quality
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-11-21T15:00:39.871Z
content_sha256: 60e11b81603aabccf221ba9462c5f51aebef446977cc54f9ff923ef414de2462
---
