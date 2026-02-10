---
stable_id: skills/skills-sh-tursodatabase-turso-code-quality
type: skills
title: skills-sh-tursodatabase-turso-code-quality
summary: >-
  ---

  name: async-io-model

  description: Explanations of common asynchronous patterns used in tursodb.
  Involves IOResult, state machines, re-entrancy pitfalls, CompletionGroup.
  Always use these patterns in `core` when doing anything IO

  ---

  # Async I/O Model Guide

  Turso uses cooperative yielding with explicit state machines instead of Rust
  async/await.

  ## Core Types

  ```rust

  pub enum IOCompletions {
      Single(Completion),
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/tursodatabase/turso/HEAD/.claude/skills/async-io-model/SKILL.md
license: ""
upstream_ref: https://skills.sh/tursodatabase/turso/code-quality
retrieved_at: 2026-02-10T10:44:29.074Z
content_sha256: 13b6204799f68fe315b6d49d1dead9d48cbc433f25f638cc6100e9f95b511387
---
