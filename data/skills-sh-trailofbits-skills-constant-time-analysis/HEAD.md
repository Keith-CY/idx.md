---
stable_id: skills/skills-sh-trailofbits-skills-constant-time-analysis
type: skills
title: skills-sh-trailofbits-skills-constant-time-analysis
summary: >-
  # Constant-Time Analysis: Compiled Languages

  Analysis guidance for C, C++, Go, and Rust. These languages compile to native
  assembly, where timing side-channels are detected by scanning for
  variable-time CPU instructions.

  ## Running the Analyzer

  ```bash

  # C/C++ (default: clang, native architecture)

  uv run {baseDir}/ct_analyzer/analyzer.py crypto.c

  # Go

  uv run {baseDir}/ct_analyzer/analyzer.py crypto.go

  # Rust

  uv run {baseDir}/ct_analyzer/analyzer.py crypto.rs
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/trailofbits/skills/HEAD/plugins/constant-time-analysis/skills/constant-time-analysis/references/compiled.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/constant-time-analysis
retrieved_at: 2026-02-09T05:37:22.384Z
content_sha256: 7c6f69897fc9629c4f26011507685e6cb4b79f1e1881f6f3a23d8e136f1d42fb
---
