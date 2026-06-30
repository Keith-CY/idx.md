---
stable_id: skills/skills-sh-tursodatabase-turso-testing
type: skills
title: skills-sh-tursodatabase-turso-testing
summary: >-
  # Testing in Turso

  Turso supports a comprehensive testing system to ensure correctness,
  performance, and compatibility with SQLite.

  ## 1. Compatibility Tests

  The `make test` target is the main entry point.

  Most compatibility tests live in the testing/ directory and are written in
  SQLite’s TCL test format. These tests ensure that Turso matches SQLite’s
  behavior exactly. The database used during these tests is located at
  testing/testing.db, which includes the following schema:

  ```sql

  CREATE TABLE users (
      id INTEGER PRIMARY KEY,
      first_name TEXT,
      last_name TEXT,
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/tursodatabase/turso/HEAD/docs/testing.md
license: ""
upstream_ref: https://skills.sh/tursodatabase/turso/testing
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-30T08:11:07.290Z
content_sha256: 738ff36d7a6685ae9ae31cb8f30346ba58eefc6a634ce67a2a185fc9f233d345
---
