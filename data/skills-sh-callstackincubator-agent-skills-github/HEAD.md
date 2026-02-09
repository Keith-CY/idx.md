---
stable_id: skills/skills-sh-callstackincubator-agent-skills-github
type: skills
title: skills-sh-callstackincubator-agent-skills-github
summary: >-
  ---

  title: Merge PR Chain

  tags: pull-request, stacked-pr, merge, squash, cherry-pick, github

  ---

  # Skill: Merge PR Chain

  Merge a chain of stacked GitHub PRs into main as individual squash commits.
  Use when user has multiple PRs where each targets the previous one's branch
  (e.g., PR #2 → PR #1's branch → main) and wants to squash merge them all to
  main while preserving separate commits per PR.

  ## Workflow

  ### 1. Identify the chain

  Fetch PR details to map the chain structure:

  ```
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/callstackincubator/agent-skills/HEAD/skills/github/references/stacked-pr-workflow.md
license: ""
upstream_ref: https://skills.sh/callstackincubator/agent-skills/github
retrieved_at: 2026-02-09T07:01:32.715Z
content_sha256: 9957f4dbe0703ce704f0e695ede5384bc1a9865fdc4f7ca08e0979a0db444604
---
