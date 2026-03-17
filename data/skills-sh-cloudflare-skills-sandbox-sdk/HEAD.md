---
stable_id: skills/skills-sh-cloudflare-skills-sandbox-sdk
type: skills
title: skills-sh-cloudflare-skills-sandbox-sdk
summary: >-
  # Sandbox SDK API Reference

  Detailed API for `@cloudflare/sandbox`. For full docs:
  https://developers.cloudflare.com/sandbox/api/

  ## Lifecycle

  ```typescript

  getSandbox(binding: DurableObjectNamespace<Sandbox>, sandboxId: string,
  options?: SandboxOptions): Sandbox

  interface SandboxOptions {
    sleepAfter?: string;     // Duration before auto-sleep (default: "10m")
    keepAlive?: boolean;     // Prevent auto-sleep (default: false)
    normalizeId?: boolean;   // Lowercase IDs for preview URLs (default: false)
  }
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cloudflare/skills/HEAD/skills/sandbox-sdk/references/api-quick-ref.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/sandbox-sdk
github_stars: null
github_forks: null
github_is_organization: null
retrieved_at: 2026-03-17T17:25:04.318Z
content_sha256: c8a2bd3eca1afee7c9182b7dc7a3dceb9fdd13266c2a5e0730fd52b263b1aea3
---
