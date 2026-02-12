---
stable_id: skills/skills-sh-trailofbits-skills-atheris
type: skills
title: skills-sh-trailofbits-skills-atheris
summary: >-
  # Using Instrumentation with Atheris and Native Extensions

  In order for native fuzzing to be effective, your native extensions must be
  built with Clang, using the argument `-fsanitize=fuzzer-no-link` (and
  optionally other sanitizers).

  ## Step 1: Compiling your Extension

  While this doesn't work for every extension and build system, if you are using

  setuptools, you can typically compile a sanitized extension like this:

  ```

  CC="/usr/bin/clang" CFLAGS="-fsanitize=address,fuzzer-no-link"
  CXX="/usr/bin/clang++" CXXFLAGS="-fsanitize=address,fuzzer-no-link"
  LDSHARED="/usr/bin/clang -shared" pip3 install .

  ```

  Here, `address` means Address Sanitizer. You can also use `undefined` for the

  Undefined Behavior Sanitizer.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/google/atheris/master/native_extension_fuzzing.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/atheris
retrieved_at: 2026-02-12T05:37:00.102Z
content_sha256: a0e6d407dee1c72505af1c5349a58c29b71dfa3c092f55ecc3b6108278b1b58b
---
