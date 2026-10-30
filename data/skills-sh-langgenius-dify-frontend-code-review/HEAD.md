---
stable_id: skills/skills-sh-langgenius-dify-frontend-code-review
type: skills
title: skills-sh-langgenius-dify-frontend-code-review
summary: >-
  # Code Quality Review

  Use this pack for changed type, styling, or copy contracts. Scope and
  reporting thresholds come

  from the skill entrypoint; do not turn general style preferences into
  findings.

  ## Types And Boundaries

  [Ownership] defines module boundaries, extraction, props, and domain types;
  [Data] owns generated

  API types. For Dify UI public exports and upstream-derived props, use [Public
  API authoring].

  - Identify the actual type information lost by a widened field, DTO mirror, or
  assertion. Trace
    consumers before proposing a new abstraction or adapter.
  - Check that moved imports still use the intended public boundary. Distinguish
  an application
    bypassing that boundary from the implementation that owns a library integration.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/langgenius/dify/HEAD/.agents/skills/frontend-code-review/references/code-quality.md
license: ""
upstream_ref: https://skills.sh/langgenius/dify/frontend-code-review
github_stars: 133762
github_forks: 20840
github_is_organization: true
retrieved_at: 2026-10-30T13:43:32.268Z
content_sha256: 00e4b4aaf216ad03da876f3a8ba0a1aaf6340e1515e9d9c5933b584f37a08a7c
---
