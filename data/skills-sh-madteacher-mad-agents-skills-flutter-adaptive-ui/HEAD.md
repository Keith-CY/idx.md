---
stable_id: skills/skills-sh-madteacher-mad-agents-skills-flutter-adaptive-ui
type: skills
title: skills-sh-madteacher-mad-agents-skills-flutter-adaptive-ui
summary: >-
  # Layout Constraints in Flutter

  ## Core Rule

  **Constraints go down. Sizes go up. Parent sets position.**

  Flutter layout can't be understood without knowing this rule.

  In more detail:

  * A widget gets its **constraints** from its **parent**. A constraint is just
  a set of 4 doubles: a minimum and maximum width, and a minimum and maximum
  height.

  * Then the widget goes through its own list of **children**. One by one, the
  widget tells its children what their **constraints** are, and then asks each
  child what size it wants to be.

  * Then, widget positions its **children** (horizontally in the x axis, and
  vertically in the y axis), one by one.

  * And, finally, widget tells its parent about its own **size** (within the
  original constraints, of course).

  ## Limitations
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/madteacher/mad-agents-skills/HEAD/flutter-adaptive-ui/references/layout-constraints.md
license: ""
upstream_ref: https://skills.sh/madteacher/mad-agents-skills/flutter-adaptive-ui
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-06-16T08:56:23.447Z
content_sha256: afe9bfb38b076a97af0e96e5f7dd1427e0ac2ddd72c52812ae74448397f05174
---
