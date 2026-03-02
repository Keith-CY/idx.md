---
name: Clawdbot
description: Use when building, configuring, or troubleshooting a self-hosted AI agent gateway that connects messaging platforms (WhatsApp, Telegram, Discord, iMessage, etc.) to coding agents. Reach for this skill when agents need to understand agent configuration, workspace setup, tool management, channel integration, multi-agent routing, automation workflows, or gateway operations.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw (clawdbot) Skill

## Product summary

OpenClaw is a self-hosted gateway that bridges messaging platforms (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, and more) to AI coding agents. A single Gateway process runs on your hardware and routes inbound messages to agents with tool access, session memory, and multi-agent routing. The agent runtime is embedded (derived from pi-mono) and executes within the Gateway process. Key files: `~/.openclaw/` (config, credentials, sessions), `~/.openclaw/workspace/` (agent instructions and memory), `gateway/configuration-reference.md` for all config options. Primary CLI: `openclaw` with subcommands for agents, channels, models, cron, and gateway operations. See https://docs.openclaw.ai for full documentation.

## When to use

Reach for this skill when:
- **Setting up or configuring** a Gateway (first-time onboarding, model provider auth, channel pairing)
- **Managing agents** (workspace files, system prompts, session memory, multi-agent routing)
- **Adding tools and skills** (browser automation, web search, cron jobs, custom skills)
- **Integrating messaging channels** (WhatsApp, Telegram, Discord, etc.)
- **Automating workflows** (cron jobs, webhooks, hooks, heartbeats)
- **Troubleshooting** agent behavior, channel delivery, or Gateway health
- **Securing the setup** (sandboxing, tool restrictions, pairing, authentication)
- **Scaling to multiple agents** (isolated workspaces, routing bindings, per-agent config)

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Start onboarding wizard | `openclaw onboard` |
| Check Gateway health | `openclaw health` or `openclaw status --deep` |
| List/add channels | `openclaw channels list` / `openclaw channels add --channel <name>` |
| Manage agents | `openclaw agents list` / `openclaw agents create <id>` |
| Configure models | `openclaw models status` / `openclaw models auth login --provider <id>` |
| View/edit config | `openclaw config show` / `openclaw config edit` |
| Run cron jobs | `openclaw cron list` / `openclaw cron add --message "..." --schedule "..."` |
| View logs | `openclaw logs` / `openclaw logs --lines 100` |
| Restart Gateway | `openclaw gateway restart` |
| Run diagnostics | `openclaw doctor` / `openclaw doctor --fix` |

### Workspace file structure

| File | Purpose | Loaded |
|------|---------|--------|
| `AGENTS.md` | Operating instructions, rules, priorities | Every session |
| `SOUL.md` | Persona, tone, boundaries | Every session |
| `USER.md` | User identity and preferences | Every session |
| `IDENTITY.md` | Agent name, emoji, vibe | Bootstrap only |
| `TOOLS.md` | Local tool notes (guidance only) | Every session |
| `HEARTBEAT.md` | Tiny checklist for heartbeat runs | Heartbeat sessions |
| `BOOTSTRAP.md` | One-time first-run ritual | First run only |
| `MEMORY.md` | Curated long-term memory | Main session only |
| `memory/YYYY-MM-DD.md` | Daily memory logs | On-demand |

**Location:** `~/.openclaw/workspace/` (or per-agent: `~/.openclaw/agents/<agentId>/workspace/`)

### Configuration structure

```javascript
{
  // Gateway auth
  gateway: {
    auth: { token: "...", password: "..." },
    port: 8080,
    bind: "loopback" // or "lan", "tailnet", "auto"
  },
  
  // Model providers
  models: {
    mode: "merge", // or "replace"
    providers: {
      anthropic: { apiKey: "...", models: [...] },
      openai: { apiKey: "...", baseUrl: "..." }
    }
  },
  
  // Agents
  agents: {
    list: [
      { id: "main", default: true, workspace: "~/.openclaw/workspace" },
      { id: "work", workspace: "~/.openclaw/workspace-work" }
    ],
    defaults: {
      model: { primary: "claude-opus" },
      sandbox: { enabled: false }, // or { mode: "session", docker: {...} }
      workspace: "~/.openclaw/workspace"
    }
  },
  
  // Channels
  channels: {
    whatsapp: { enabled: true, accounts: { default: {...} } },
    telegram: { enabled: true, accounts: { default: {...} } },
    discord: { enabled: true, accounts: { default: {...} } }
  },
  
  // Routing
  bindings: [
    { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
    { agentId: "work", match: { channel: "whatsapp", accountId: "business" } }
  ],
  
  // Automation
  cron: { enabled: true, maxConcurrentRuns: 1 },
  hooks: { enabled: true }
}
```

### Tool groups

| Group | Tools | Use case |
|-------|-------|----------|
| `group:runtime` | `exec`, `process` | Shell commands, scripts |
| `group:fs` | `read`, `write`, `edit`, `apply_patch` | File operations |
| `group:web` | `web_search`, `web_fetch` | Web lookup, HTTP fetch |
| `group:ui` | `browser`, `canvas` | Browser automation, UI rendering |
| `group:sessions` | `sessions_list`, `sessions_spawn`, `session_status` | Session management |
| `group:memory` | `memory_search`, `memory_get` | Memory lookup |
| `group:automation` | `cron`, `gateway` | Scheduled jobs, Gateway control |
| `group:messaging` | `message` | Send to channels |
| `group:nodes` | `nodes` | Mobile/device control |

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| **Single agent, one workspace** | Default agent config | Simpler, no routing needed |
| **Multiple agents, isolated workspaces** | Multi-agent routing + bindings | Separate memory, tools, permissions per agent |
| **Untrusted inputs or risky tools** | Sandboxing (`agents.defaults.sandbox`) | Docker isolation limits blast radius |
| **Frequent background tasks** | Cron jobs (isolated mode) | Doesn't spam main chat, runs on schedule |
| **One-time or manual trigger** | Heartbeat or `/subagents spawn` | No persistence needed |
| **Web lookup without JS** | `web_fetch` + `web_search` | Fast, no browser overhead |
| **JS-heavy sites or logins** | `browser` tool | Full automation, handles dynamic content |
| **Persistent background agent** | Sub-agent with `mode: "session"` | Keeps state across runs |
| **Temporary background work** | Sub-agent with `mode: "run"` | One-shot, auto-cleanup |
| **Durable behavior/preferences** | Write to `AGENTS.md` or `MEMORY.md` | Survives restarts, not lost on session reset |
| **Session-specific context** | Chat history (in-memory) | Fast, bounded by context window |

## Workflow

### 1. Initial setup and onboarding
1. Run `openclaw onboarding` to start the wizard
2. Choose auth method (API key, OAuth, setup-token)
3. Configure Gateway port and bind mode (loopback, LAN, Tailscale)
4. Add at least one messaging channel (WhatsApp, Telegram, Discord, etc.)
5. Verify Gateway health: `openclaw health`
6. Open Control UI (usually http://localhost:8080) to confirm

### 2. Configure agent workspace
1. Navigate to `~/.openclaw/workspace/`
2. Edit `AGENTS.md` with operating instructions and rules
3. Edit `SOUL.md` with persona and tone
4. Edit `USER.md` with user identity
5. Create `MEMORY.md` if you want persistent long-term memory
6. Commit workspace to git (recommended for backup)
7. Test with `/context` command to see what's injected

### 3. Add a messaging channel
1. Run `openclaw channels add --channel <name>` (e.g., `telegram`, `discord`)
2. Follow prompts for auth (token, OAuth, etc.)
3. Verify with `openclaw channels status --probe`
4. Test by sending a message to the bot

### 4. Set up model provider
1. Run `openclaw models auth login --provider <id>` (e.g., `anthropic`, `openai`)
2. Paste API key or complete OAuth flow
3. Verify with `openclaw models status`
4. Set default model: `openclaw models set-default <model-id>`

### 5. Create a cron job
1. Run `openclaw cron add --message "Your prompt" --schedule "0 9 * * *"` (9 AM daily)
2. Optionally set delivery: `--delivery-mode announce` (post to chat) or `webhook` (POST to URL)
3. List jobs: `openclaw cron list`
4. Edit: `openclaw cron edit <jobId> --message "Updated prompt"`

### 6. Add a custom skill
1. Create skill directory: `mkdir -p ~/.openclaw/skills/my-skill`
2. Write `SKILL.md` with description and usage
3. Add supporting files (scripts, configs, docs)
4. Install: `openclaw skills install ~/.openclaw/skills/my-skill`
5. Reference in `AGENTS.md` or `TOOLS.md` for agent guidance

### 7. Set up multi-agent routing
1. Create second workspace: `mkdir -p ~/.openclaw/workspace-work`
2. Add agent: `openclaw agents create work --workspace ~/.openclaw/workspace-work`
3. Configure bindings in config:
   ```javascript
   bindings: [
     { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
     { agentId: "work", match: { channel: "whatsapp", accountId: "business" } }
   ]
   ```
4. Restart Gateway: `openclaw gateway restart`

### 8. Enable sandboxing for security
1. Edit config to enable Docker sandbox:
   ```javascript
   agents: {
     defaults: {
       sandbox: {
         enabled: true,
         mode: "session", // per-session containers
         docker: { image: "node:22-alpine" }
       }
     }
   }
   ```
2. Restart Gateway
3. Verify: `openclaw doctor`

## Common gotchas

- **Workspace files not loading**: Confirm Gateway is using the same workspace path on every restart. Check `~/.openclaw/workspace/` exists and files are readable. Use `openclaw setup` to recreate missing defaults.

- **Agent "forgets" after restart**: Session memory is ephemeral; write durable behavior to `AGENTS.md` or `MEMORY.md` instead of relying on chat history.

- **Channel not receiving messages**: Run `openclaw channels status --probe` to check auth and connectivity. Confirm bot is in the group/channel and mention gating is not blocking it. Check `openclaw logs` for delivery errors.

- **Model provider auth fails**: Verify API key is set correctly (check `~/.openclaw/.env` or env vars). Run `openclaw models status` to see provider health. For OAuth, ensure callback URL matches your Gateway URL.

- **Cron job not running**: Confirm `cron.enabled: true` in config. Check job schedule with `openclaw cron list`. Verify Gateway is running (not just CLI). Look at logs: `openclaw logs | grep cron`.

- **Sandbox container fails to start**: Ensure Docker is running and accessible. Check `openclaw doctor` for Docker errors. Verify `sandbox.docker.image` exists locally or is pullable.

- **Tool calls fail silently**: Check tool is in `tools.allow` list (or not in `tools.deny`). Verify tool is exposed in system prompt: use `/context` to inspect. For browser, ensure Chrome/Brave is installed and `browser.enabled: true`.

- **Multi-agent routing not working**: Confirm bindings match your channel/account IDs exactly. Use `openclaw channels list` to see actual account IDs. Restart Gateway after config changes.

- **Session context truncated**: Large files are truncated per-file at `agents.defaults.bootstrapMaxChars` (default 20000). Reduce file size or increase limit. Use `/context` to see raw vs injected sizes.

- **Deprecated patterns**: Don't use `notify: true` in cron jobs (use `delivery.mode: "webhook"` instead). Don't store secrets in prompts or `AGENTS.md` (use `SecretRef` or env vars). Don't rely on chat history for persistence (write to memory files).

## Verification checklist

Before submitting work or deploying changes:

- [ ] Gateway is running: `openclaw health` returns `ok`
- [ ] Config is valid: `openclaw doctor` shows no errors
- [ ] At least one channel is configured and paired: `openclaw channels status`
- [ ] Model provider is authenticated: `openclaw models status`
- [ ] Workspace files exist and are readable: `ls -la ~/.openclaw/workspace/`
- [ ] Agent can see workspace context: `/context` shows injected files
- [ ] Test message delivery: Send a message to the bot and confirm reply
- [ ] Cron jobs (if used) are listed: `openclaw cron list`
- [ ] Multi-agent bindings (if used) match actual channel/account IDs
- [ ] Sandbox (if enabled) is working: `openclaw doctor` confirms Docker health
- [ ] Logs show no auth/connection errors: `openclaw logs | tail -50`
- [ ] Gateway can restart cleanly: `openclaw gateway restart` succeeds

## Resources

**Comprehensive navigation:** See https://docs.openclaw.ai/llms.txt for a complete page-by-page listing of all documentation.

**Critical pages:**
- [Getting Started](https://docs.openclaw.ai/start/getting-started) — Installation and first-run setup
- [Gateway Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference) — All config options with defaults
- [Agent Workspace](https://docs.openclaw.ai/concepts/agent-workspace) — Workspace files, memory, and context injection

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt