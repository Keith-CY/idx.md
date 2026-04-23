---
stable_id: skills/skills-sh-apollographql-skills-rust-best-practices
type: skills
title: skills-sh-apollographql-skills-rust-best-practices
summary: >-
  # Chapter 1 - Coding Styles and Idioms

  ## 1.1 Borrowing Over Cloning

  Rust's ownership system encourages **borrow** (`&T`) instead of **cloning**
  (`T.clone()`).

  > ❗ Performance recommendation

  ### ✅ When to `Clone`:

  * You need to change the object AND preserve the original object (immutable
  snapshots).

  * When you have `Arc` or `Rc` pointers.

  * When data is shared across threads, usually `Arc`.

  * Avoid massive refactoring of non performance critical code.

  * When caching results (dummy example below):
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/apollographql/skills/HEAD/skills/rust-best-practices/references/chapter_01.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/rust-best-practices
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-04-23T07:33:50.614Z
content_sha256: 96130f7b81a525f16824b0fc319d9e7ad3e913e8dcd75cc03e85d3ae83947df4
---
