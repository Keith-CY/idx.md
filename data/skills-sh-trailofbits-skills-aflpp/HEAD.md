---
stable_id: skills/skills-sh-trailofbits-skills-aflpp
type: skills
title: skills-sh-trailofbits-skills-aflpp
summary: >-
  # Fuzzing with AFL++

  The following describes how to fuzz with a target if source code is available.

  If you have a binary-only target, go to

  [fuzzing_binary-only_targets.md](fuzzing_binary-only_targets.md).

  Fuzzing source code is a three-step process:

  1. Compile the target with a special compiler that prepares the target to be
     fuzzed efficiently. This step is called "instrumenting a target".
  2. Prepare the fuzzing by selecting and optimizing the input corpus for the
     target.
  3. Perform the fuzzing of the target by randomly mutating input and assessing
  if
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/AFLplusplus/AFLplusplus/refs/heads/stable/docs/fuzzing_in_depth.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/aflpp
retrieved_at: 2026-02-13T04:46:37.126Z
content_sha256: 91b47ccc7d3c7fea488a0fc21a4f933b7dc2d210cf5f57a10bda4c5e353f98ac
---
