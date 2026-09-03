---
stable_id: skills/skills-sh-trailofbits-skills-codeql
type: skills
title: skills-sh-trailofbits-skills-codeql
summary: >-
  # Build Database Workflow

  Create high-quality CodeQL databases by trying build methods in sequence until
  one produces good results.

  ## Overview

  What matters is which build modes a language accepts, not whether it is
  interpreted.

  Go is compiled but has no `none` mode; C# and Java are compiled and do.
  Confirm against

  your own CLI with `codeql database create --help`, and note its `none` list is

  incomplete — it omits C/C++ and Rust, both of which do support `none`
  (2.25.6).

  ### No build needed (Python, JavaScript/TypeScript, Ruby)

  - CodeQL extracts source directly

  - **Exclusion config supported** — use `--codescanning-config` to skip
  irrelevant files
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/static-analysis/skills/codeql/workflows/build-database.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/codeql
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-09-03T11:51:14.256Z
content_sha256: 06794bb67182303b0c81d30b3772531537d9f986b7b2cbe2a9ffa4b4f3e230ba
---
