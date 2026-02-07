---
stable_id: skills/openai-curated-screenshot
type: skills
title: openai-curated-screenshot
summary: >-
  ---

  name: "screenshot"

  description: "Use when the user explicitly asks for a desktop or system
  screenshot (full screen, specific app or window, or a pixel region), or when
  tool-specific capture capabilities are unavailable and an OS-level capture is
  needed."

  ---

  # Screenshot Capture

  Follow these save-location rules every time:

  1) If the user specifies a path, save there.

  2) If the user asks for a screenshot without a path, save to the OS default
  screenshot location.

  3) If Codex needs a screenshot for its own inspection, save to the temp
  directory.

  ## Tool priority
tags:
  - openai
  - source-openai-skills
source_url: https://raw.githubusercontent.com/openai/skills/main/skills/.curated/screenshot/SKILL.md
license: ""
upstream_ref: https://github.com/openai/skills/blob/main/skills/.curated/screenshot/SKILL.md
retrieved_at: 2026-02-07T05:23:44.674Z
content_sha256: 081935a6a163277537d46365f49d6b4a3cb40b4748347e7e88759c5927fa8cf5
---
