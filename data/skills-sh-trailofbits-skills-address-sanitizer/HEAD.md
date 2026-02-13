---
stable_id: skills/skills-sh-trailofbits-skills-address-sanitizer
type: skills
title: skills-sh-trailofbits-skills-address-sanitizer
summary: >-
  # What makes a good fuzz target

  This document explains the concept of a *fuzz target* and

  gives advice on how to make your fuzz targets really good.

  # Basics

  A *fuzz target* is a function that accepts an array of bytes and does
  something interesting with these bytes using the API under test.

  We define a specific signature for fuzz targets:

  ```cpp

  // fuzz_target.cc

  extern "C" int LLVMFuzzerTestOneInput(const uint8_t *Data, size_t Size) {
    DoSomethingInterestingWithMyAPI(Data, Size);
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/google/fuzzing/master/docs/good-fuzz-target.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/address-sanitizer
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-02-13T07:58:52.900Z
content_sha256: 27557aaef97cc5f580f247e803eea591e7f8006f55b1beb5acb2d7ebcf6c64fa
---
