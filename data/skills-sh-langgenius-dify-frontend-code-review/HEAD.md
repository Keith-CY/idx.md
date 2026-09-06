---
stable_id: skills/skills-sh-langgenius-dify-frontend-code-review
type: skills
title: skills-sh-langgenius-dify-frontend-code-review
summary: >-
  # Code Quality Rules

  ## Scope Control

  Flag changes that expand beyond the requested feature or review scope:

  - Repo-wide cleanup mixed into a targeted fix.

  - Compatibility exports, aliases, shims, or wrapper layers added without an
  explicit migration requirement.

  - Shared abstractions created before there is stable cross-feature reuse.

  - Business components moved into generic shared locations without a clear
  ownership boundary.

  ## TypeScript

  Flag:

  - `any` or broad `Record<string, any>` where generated/API types or local
  domain types exist.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/langgenius/dify/HEAD/.agents/skills/frontend-code-review/references/code-quality.md
license: ""
upstream_ref: https://skills.sh/langgenius/dify/frontend-code-review
github_stars: 133762
github_forks: 20840
github_is_organization: true
retrieved_at: 2026-09-06T11:27:06.000Z
content_sha256: 481d988860a66ebabefe21254877d7b00ad005cdf2bce47e2a880c21e51e6765
---
