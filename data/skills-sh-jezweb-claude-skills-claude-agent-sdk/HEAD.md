---
stable_id: skills/skills-sh-jezweb-claude-skills-claude-agent-sdk
type: skills
title: skills-sh-jezweb-claude-skills-claude-agent-sdk
summary: >-
  # Changelog

  ## 0.3.224

  - Added `crossSessionInbound` and `dialogExpiry` settings: cross-session
  messages sent to a session running with bypassed permissions are held for your
  approval, and messages to other sessions auto-deliver

  - Added `subkind: 'peer-send-message'` to the `task-notification` member of
  `SDKMessageOrigin`, marking a notification raised by a cross-session
  `SendMessage`

  - Added `source: 'archive'` plugin config variant to `Settings`, with `url`
  and optional `sha256`, for installing plugins from a zip over HTTPS

  - Added sandbox credential-masking fields to `Settings`: `decode: 'jwt'` with
  `maskClaims`, `extract`/`onExtractNoMatch` on `envVars`, and
  `awsPairs`/`sigv4` for AWS SigV4 re-signing

  - Fixed long (>200 char) project paths resolving to another project's session
  directory under a shared sanitized prefix; session
  list/get/rename/tag/fork/delete and `/resume` no longer cross projects

  ## 0.3.223

  - Added `resumeDropsTurn` option: with `resumeSessionAt`, declares the turn a
  truncating resume intends to drop; the CLI refuses the resume if anything else
  would be discarded

  - Result messages for repeated 529 overload failures now include
  `api_error_status: 529`, so SDK consumers can detect overload terminations
  structurally instead of matching message text
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/anthropics/claude-agent-sdk-typescript/main/CHANGELOG.md
license: ""
upstream_ref: https://skills.sh/jezweb/claude-skills/claude-agent-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-08-07T08:07:33.946Z
content_sha256: 0ebd880555e385f734fbecad14f0ae2c1bb82451e7db24d6df0e9e2eabc166f4
---
