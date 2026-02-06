---
stable_id: skills/openai-experimental-gitlab-address-comments
type: skills
title: openai-experimental-gitlab-address-comments
summary: >-
  ---

  name: gitlab-address-comments

  description: Help address review/issue comments on the open GitLab MR for the
  current branch using glab CLI. Use when the user wants help addressing
  review/issue comments on an open GitLab MR

  metadata:
    short-description: Address comments in a GitLab MR review
  ---

  # MR Comment Handler

  Find the open MR for the current branch and address its review threads using
  `glab`. Run all `glab` commands with elevated network access.

  ## Prerequisites

  - Ensure `glab auth status` succeeds (via `glab auth login` or
  `GITLAB_TOKEN`).
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.experimental/gitlab-address-comments/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.experimental/gitlab-address-comments/SKILL.md
retrieved_at: 2026-02-06T04:49:48.406Z
content_sha256: f421b8b9efb4bf4832e2c319a8e8af1ba3d66f7b30707af95ca9ca3508a0cadf
---
