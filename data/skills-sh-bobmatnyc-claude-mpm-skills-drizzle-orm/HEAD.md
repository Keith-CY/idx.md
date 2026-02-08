---
stable_id: skills/skills-sh-bobmatnyc-claude-mpm-skills-drizzle-orm
type: skills
title: skills-sh-bobmatnyc-claude-mpm-skills-drizzle-orm
summary: >-
  # Advanced Schemas

  Deep dive into complex schema patterns, custom types, and database-specific
  features in Drizzle ORM.

  ## Custom Column Types

  ### Enums

  ```typescript

  import { pgEnum, pgTable, serial } from 'drizzle-orm/pg-core';

  // PostgreSQL native enum

  export const roleEnum = pgEnum('role', ['admin', 'user', 'guest']);

  export const users = pgTable('users', {
    id: serial('id').primaryKey(),
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/bobmatnyc/claude-mpm-skills/HEAD/toolchains/typescript/data/drizzle/references/advanced-schemas.md
license: ""
upstream_ref: https://skills.sh/bobmatnyc/claude-mpm-skills/drizzle-orm
retrieved_at: 2026-02-08T09:06:57.415Z
content_sha256: 420e86801c18d535ab531e6621c8a9df5247c11158b9a9f30dc44f11ea35108d
---
