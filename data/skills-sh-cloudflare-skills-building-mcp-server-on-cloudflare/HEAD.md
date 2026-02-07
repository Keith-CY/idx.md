---
stable_id: skills/skills-sh-cloudflare-skills-building-mcp-server-on-cloudflare
type: skills
title: skills-sh-cloudflare-skills-building-mcp-server-on-cloudflare
summary: >-
  # Securing MCP Servers

  MCP servers require authentication to ensure only trusted users can access
  them. The MCP specification uses OAuth 2.1 for authentication between clients
  and servers.

  Cloudflare's `workers-oauth-provider` handles token management, client
  registration, and access token validation automatically.

  ## Basic Setup

  ```typescript

  import { OAuthProvider } from "@cloudflare/workers-oauth-provider";

  import { createMcpHandler } from "agents/mcp";

  const apiHandler = {
    async fetch(request: Request, env: unknown, ctx: ExecutionContext) {
      return createMcpHandler(server)(request, env, ctx);
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/cloudflare/skills/main/skills/building-mcp-server-on-cloudflare/references/oauth-setup.md
license: ""
upstream_ref: https://skills.sh/cloudflare/skills/building-mcp-server-on-cloudflare
retrieved_at: 2026-02-07T05:24:00.013Z
content_sha256: 9e57f929797d2827b71c87a6e9e4f5d1ce036b14a8c19fe52ae4eee6c1b493ab
---
