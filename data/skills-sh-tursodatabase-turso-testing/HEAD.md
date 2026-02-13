---
stable_id: skills/skills-sh-tursodatabase-turso-testing
type: skills
title: skills-sh-tursodatabase-turso-testing
summary: >-
  # Testing in Limbo

  Limbo supports a comprehensive testing system to ensure correctness,
  performance, and compatibility with SQLite.

  ## 1. Compatibility Tests

  The `make test` target is the main entry point.

  Most compatibility tests live in the testing/ directory and are written in
  SQLite’s TCL test format. These tests ensure that Limbo matches SQLite’s
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
retrieved_at: 2026-02-13T07:21:55.190Z
content_sha256: 553e1e5ed219556549e87ecf892930a74fff4f8fe8a74aafd6c3122cf80e4505
---
