---
stable_id: skills/skills-sh-trailofbits-skills-ossfuzz
type: skills
title: skills-sh-trailofbits-skills-ossfuzz
summary: |-
  # [xpdf](https://storage.googleapis.com/oss-fuzz-introspector/xpdf/inspector-report/20220321/fuzz_report.html)
  Introspector report: [link](https://storage.googleapis.com/oss-fuzz-introspector/xpdf/inspector-report/20220321/fuzz_report.html)
  A [previous blog post by Project Zero](https://googleprojectzero.blogspot.com/2021/12/a-deep-dive-into-nso-zero-click.html)
  details a vulnerability exploited by NSO to hack iOS users in xpdf. This vulnerability is in the `JBIG2Stream::readTextRegionSeg`
  function in xpdf.
  xpdf is integrated into OSS-Fuzz, but the existing fuzzing did not cover [`JBIG2Stream::readTextRegionSeg`](https://storage.googleapis.com/oss-fuzz-coverage/xpdf/reports/20220331/linux/src/xpdf-4.03/xpdf/JBIG2Stream.cc.html#L1953).
  As shown in Figure 1, in the "Optimal target analysis" section of Fuzz Introspector report for xpdf, the
  second function suggested is `JBIG2Stream::reset()`.
  The main function called by `JBIG2Stream::reset()` is `JBIG2Stream::readSegments`.
  `readSegments` actually calls the vulnerable function `readTextRegionSeg`.
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/ossf/fuzz-introspector/main/doc/CaseStudies.md
license: ""
upstream_ref: https://skills.sh/trailofbits/skills/ossfuzz
retrieved_at: 2026-02-13T07:21:48.474Z
content_sha256: d56091780455026c0e196ef220a339b081bada399e43384d3d85578210591297
---
