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
retrieved_at: 2026-08-07T08:07:32.317Z
content_sha256: a4e33b6a4543aff84a4cee75fb6b3b26bf96340c7026266a5fc4df3aa699f08c
---
