---
stable_id: skills/openai-curated-gh-fix-ci
type: skills
title: openai-curated-gh-fix-ci
summary: >-
  ---

  name: "gh-fix-ci"

  description: "Use when a user asks to debug or fix failing GitHub PR checks
  that run in GitHub Actions; use `gh` to inspect checks and logs, summarize
  failure context, draft a fix plan, and implement only after explicit approval.
  Treat external providers (for example Buildkite) as out of scope and report
  only the details URL."

  ---

  # Gh Pr Checks Plan Fix

  ## Overview

  Use gh to locate failing PR checks, fetch GitHub Actions logs for actionable
  failures, summarize the failure snippet, then propose a fix plan and implement
  after explicit approval.

  - If a plan-oriented skill (for example `create-plan`) is available, use it;
  otherwise draft a concise plan inline and request approval before
  implementing.

  Prereq: authenticate with the standard GitHub CLI once (for example, run `gh
  auth login`), then confirm with `gh auth status` (repo + workflow scopes are
  typically required).

  ## Inputs
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/gh-fix-ci/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/gh-fix-ci/SKILL.md
retrieved_at: 2026-02-09T05:30:51.186Z
content_sha256: 7b326b4a2f0f5f85122144628ec02077e48841e0e0e82efce88b3415bcfb7c26
---
