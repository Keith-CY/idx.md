---
stable_id: skills/skills-sh-planetscale-database-skills-postgres
type: skills
title: skills-sh-planetscale-database-skills-postgres
summary: >-
  ---

  title: PostgreSQL Schema Design

  description: Schema design guide

  tags: postgres, schema, primary-keys, data-types, foreign-keys, naming

  ---

  # Schema Design

  ## Primary Keys

  Prefer `BIGINT GENERATED ALWAYS AS IDENTITY`. Avoid random UUIDs (UUIDv4) as
  primary keys; use `uuidv7()` when you need UUIDs.

  ```sql

  CREATE TABLE user (
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/planetscale/database-skills/main/skills/postgres/references/schema-design.md
license: ""
upstream_ref: https://skills.sh/planetscale/database-skills/postgres
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-17T07:33:49.605Z
content_sha256: a831161ebd0343cfb506a069e0d6d4b274c671c81d2580c544c4ffed136a04ba
---
