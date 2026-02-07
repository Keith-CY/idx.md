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
source_url: https://raw.githubusercontent.com/apollographql/skills/main/skills/rust-best-practices/references/chapter_01.md
license: ""
upstream_ref: https://skills.sh/apollographql/skills/rust-best-practices
retrieved_at: 2026-02-07T03:39:40.223Z
content_sha256: 936f84f2e4606e7ae35afdb99606005a3c08e803308721a1578276760a29fcfa
---
