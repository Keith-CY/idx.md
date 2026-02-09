---
stable_id: skills/openai-curated-gh-address-comments
type: skills
title: openai-curated-gh-address-comments
summary: >-
  ---

  name: gh-address-comments

  description: Help address review/issue comments on the open GitHub PR for the
  current branch using gh CLI; verify gh auth first and prompt the user to
  authenticate if not logged in.

  metadata:
    short-description: Address comments in a GitHub PR review
  ---

  # PR Comment Handler

  Guide to find the open PR for the current branch and address its comments with
  gh CLI. Run all `gh` commands with elevated network access.

  Prereq: ensure `gh` is authenticated (for example, run `gh auth login` once),
  then run `gh auth status` with escalated permissions (include workflow/repo
  scopes) so `gh` commands succeed. If sandboxing blocks `gh auth status`, rerun
  it with `sandbox_permissions=require_escalated`.

  ## 1) Inspect comments needing attention
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/gh-address-comments/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/gh-address-comments/SKILL.md
retrieved_at: 2026-02-09T18:13:49.923Z
content_sha256: 77389eefd3fb6584210668ca8e43f4b8de87e7722ddd953474bc9e24cdfaaedd
---
