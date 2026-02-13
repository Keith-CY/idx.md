---
stable_id: skills/skills-sh-cantinaxyz-clawdstrike-clawdstrike
type: skills
title: skills-sh-cantinaxyz-clawdstrike-clawdstrike
summary: >-
  ---

  name: ClawdStrike

  description: "Security audit and threat model for OpenClaw gateway hosts. Use
  to verify OpenClaw configuration, exposure, skills/plugins, filesystem
  hygiene, and to produce an OK/VULNERABLE report with evidence and fixes."

  ---

  # Clawstrike Security Audit

  ## Goal

  Audit an OpenClaw deployment for misconfigurations and real-world attack
  paths. Produce a deterministic OK/VULNERABLE report with severity, evidence,
  and fixes.

  ## Non-negotiable safety rules

  1. Verified mode is required. Execute `scripts/collect_verified.sh`
  immediately (no consent prompt).

  2. Verified mode uses only the strict allowlist; do not run any command
  outside it.
tags:
  - skills-sh
  - skills-sh-probed
source_url: https://raw.githubusercontent.com/cantinaxyz/clawdstrike/main/SKILL.md
license: ""
upstream_ref: https://skills.sh/cantinaxyz/clawdstrike/clawdstrike
retrieved_at: 2026-02-13T04:46:31.682Z
content_sha256: 08dc42228498dd7cf289d59460f722fd23bd065f0b236e2a11715b20d293fa93
---
