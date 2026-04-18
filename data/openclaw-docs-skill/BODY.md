---
name: Clawdbot
description: Use when deploying a self-hosted AI agent gateway, configuring multi-channel messaging (Discord, Telegram, WhatsApp, Slack, etc.), managing agent sessions and memory, setting up automation (cron jobs, webhooks), or troubleshooting gateway operations and channel connectivity.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product Summary

OpenClaw is a self-hosted, multi-channel gateway for AI agents that runs on any OS (macOS, Linux, Windows). It connects messaging platforms (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Matrix, Microsoft Teams, and more) to an embedded agent runtime. Agents use tools (exec, browser, web search, file I/O, message sending) to respond to messages across all channels from a single Gateway process.

**Key files and commands:**
- Config: `~/.openclaw/openclaw.json` (JSON5 format)
- Workspace: `~/.openclaw/workspace/` (agent files: AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, BOOTSTRAP.md)
- CLI: `openclaw` (primary command; `openclaw --help` for subcommands)
- Gateway: `openclaw gateway` (start/stop/status/install/restart)
- Primary docs: https://docs.openclaw.ai

## When to Use

Reach for this skill when:
- **Deploying agents**: Setting up a new OpenClaw instance, configuring the Gateway service, or managing agent workspaces
- **Channel setup**: Connecting WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Configuration**: Editing `openclaw.json` for models, tools, channels, sessions, automation, or security
- **Troubleshooting**: Diagnosing Gateway health, channel connectivity, auth failures, or session issues
- **Operations**: Managing cron jobs, webhooks, multi-agent routing, or sandbox isolation
- **CLI tasks**: Running agent turns, managing sessions, checking health, or controlling the Gateway service

## Quick Reference

### Essential Commands

| Task | Command |
|------|---------|
| Start Gateway | `openclaw gateway --port 18789` |
| Check status | `openclaw gateway status` or `openclaw status` |
| View logs | `openclaw logs --follow` |
| Open dashboard | `openclaw dashboard` |
| Run onboarding | `openclaw onboard --install-daemon` |
| Get config value | `openclaw config get agents.defaults.workspace` |
| Set config value | `openclaw config set agents.defaults.model.primary anthropic/claude-sonnet-4-6` |
| Validate config | `openclaw config validate` |
| Run agent turn | `openclaw agent --to +15555550123 --message "Hello"` |
| List sessions | `openclaw sessions` |
| Manage channels | `openclaw channels list` / `openclaw channels add --channel telegram` |
| Check health | `openclaw health` or `openclaw health --verbose` |
| Diagnose issues | `openclaw doctor` or `openclaw doctor --fix` |

### Config File Structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      heartbeat: { every: "30m", target: "last" },
      sandbox: { mode: "off" }
    },
    list: [
      { id: "main", default: true }
    ]
  },

  // Channel configuration (WhatsApp, Telegram, Discord, etc.)
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing"
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing"
    }
  },

  // Gateway server settings
  gateway: {
    port: 18789,
    bind: "loopback",
    auth: { token: "..." },
    reload: { mode: "hybrid" }
  },

  // Session management
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 }
  },

  // Tools and skills
  tools: {
    profile: "coding",
    allow: ["group:fs", "browser", "web_search"],
    deny: []
  },

  // Automation
  cron: { enabled: true },
  hooks: { enabled: true, token: "..." }
}
```

### Channel Configuration Patterns

| Channel | Key Config | Example |
|---------|-----------|---------|
| **WhatsApp** | `channels.whatsapp.allowFrom` | `["+15555550123"]` |
| **Telegram** | `channels.telegram.botToken` | `"123:abc"` |
| **Discord** | `channels.discord.token` | Bot token from Discord Developer Portal |
| **Slack** | `channels.slack.botToken` | Slack app token |
| **Signal** | `channels.signal.phoneNumber` | `"+15555550123"` |
| **iMessage** | `channels.imessage.enabled` | Requires macOS + BlueBubbles |
| **Matrix** | `channels.matrix.homeserver` | `"https://matrix.org"` |

### Tool Groups

Use `group:*` in `tools.allow` / `tools.deny`:

| Group | Tools |
|-------|-------|
| `group:fs` | read, write, edit, apply_patch |
| `group:runtime` | exec, process, code_execution |
| `group:web` | web_search, x_search, web_fetch |
| `group:ui` | browser, canvas |
| `group:sessions` | sessions_list, sessions_history, subagents |
| `group:media` | image, image_generate, music_generate, video_generate, tts |
| `group:messaging` | message |
| `group:automation` | cron, gateway |

## Decision Guidance

### When to Use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| **New install** | `openclaw onboard` | Interactive setup; handles config, models, channels, daemon |
| **Existing config** | `openclaw config set` or edit `openclaw.json` directly | Faster for known changes; file watching auto-reloads |
| **Troubleshooting** | `openclaw doctor` | Detects config errors, service issues, and suggests fixes |
| **Single agent** | `agents.defaults` only | Simpler; all channels route to one workspace |
| **Multi-agent** | `agents.list[]` + `bindings[]` | Isolate workspaces per team/project; separate sessions |
| **DM access control** | `dmPolicy: "pairing"` | Safe default; users approve once, then allowed |
| **Group mention gating** | `mentionPatterns: ["@bot"]` | Prevent spam; agent only responds to mentions |
| **Sandbox isolation** | `sandbox.mode: "non-main"` | Run untrusted code safely; main session stays fast |
| **Hot reload** | `gateway.reload.mode: "hybrid"` | Auto-restart on critical changes; instant for safe ones |
| **Remote access** | Tailscale + `gateway.bind: "tailnet"` | Secure; no port forwarding; works across networks |

## Workflow

### Typical Task: Deploy OpenClaw with WhatsApp

1. **Install and onboard**
   ```bash
   npm install -g openclaw@latest
   openclaw onboard --install-daemon
   ```
   This creates `~/.openclaw/openclaw.json` and starts the Gateway service.

2. **Verify Gateway is running**
   ```bash
   openclaw gateway status
   openclaw health
   ```
   Expect `Runtime: running` and `RPC probe: ok`.

3. **Add WhatsApp channel**
   ```bash
   openclaw channels add --channel whatsapp
   ```
   Follow the QR code login flow. Then configure access:
   ```bash
   openclaw config set channels.whatsapp.allowFrom '["<your-phone>"]'
   ```

4. **Test the agent**
   Open the Control UI:
   ```bash
   openclaw dashboard
   ```
   Send a message via WhatsApp or the dashboard chat.

5. **Check logs if needed**
   ```bash
   openclaw logs --follow
   ```

6. **Verify channel health**
   ```bash
   openclaw channels status --probe
   ```

### Typical Task: Configure Multi-Agent Routing

1. **Create second workspace**
   ```bash
   mkdir -p ~/.openclaw/workspace-work
   openclaw setup --workspace ~/.openclaw/workspace-work
   ```

2. **Add agent to config**
   ```bash
   openclaw config set agents.list '[
     { "id": "main", "default": true, "workspace": "~/.openclaw/workspace" },
     { "id": "work", "workspace": "~/.openclaw/workspace-work" }
   ]'
   ```

3. **Add routing bindings**
   ```bash
   openclaw config set bindings '[
     { "agentId": "main", "match": { "channel": "whatsapp", "accountId": "personal" } },
     { "agentId": "work", "match": { "channel": "whatsapp", "accountId": "business" } }
   ]'
   ```

4. **Verify routing**
   ```bash
   openclaw agents bindings
   ```

## Common Gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor` to see exact errors.
- **Workspace must exist**: `agents.defaults.workspace` must point to a valid directory. Use `openclaw setup` to initialize it.
- **Channel auth is required**: Each channel needs its own token/credentials. Missing auth causes the channel to fail silently; check `openclaw channels status --probe`.
- **DM policy defaults to "pairing"**: Unknown senders get a one-time code. Set `dmPolicy: "allowlist"` and `allowFrom: ["+15555550123"]` to restrict access.
- **Group mentions are required by default**: Groups require `@bot` or configured `mentionPatterns`. Set `requireMention: false` to allow all group messages.
- **Hot reload doesn't restart on all changes**: Gateway server changes (port, bind, auth) require a restart. Use `gateway.reload.mode: "hybrid"` (default) for automatic restarts when needed.
- **Sessions are per-scope**: `dmScope: "per-channel-peer"` isolates conversations per channel and sender. Changing scope doesn't migrate old sessions.
- **Sandbox requires Docker**: `sandbox.mode: "non-main"` needs Docker running. Run `scripts/sandbox-setup.sh` to build the image.
- **Secrets in config are exposed**: Use SecretRef (`source: "env"`, `source: "file"`, `source: "exec"`) for sensitive values instead of plaintext.
- **Config file watching can miss rapid changes**: If you edit `openclaw.json` very quickly, the watcher may miss intermediate states. Use `openclaw config set` for programmatic changes.

## Verification Checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows `Runtime: running`
- [ ] Config is valid: `openclaw config validate` passes (or `openclaw doctor` shows no errors)
- [ ] Channels are healthy: `openclaw channels status --probe` shows all configured channels as `works` or `ok`
- [ ] Agent can respond: Send a test message via the Control UI or a channel; expect a reply within 30 seconds
- [ ] Logs are clean: `openclaw logs --limit 50` shows no `ERROR` or `FATAL` entries
- [ ] Sessions exist: `openclaw sessions` lists at least one session after a test message
- [ ] Multi-agent routing works (if configured): `openclaw agents bindings` shows expected bindings; test messages route to correct agents
- [ ] Workspace files are present: `ls ~/.openclaw/workspace/` includes AGENTS.md, SOUL.md, IDENTITY.md, USER.md
- [ ] Cron jobs are healthy (if enabled): `openclaw cron status` shows no stale or failed runs
- [ ] Sandbox is ready (if enabled): `openclaw sandbox list` shows available runtimes

## Resources

- **Full navigation**: https://docs.openclaw.ai/llms.txt — comprehensive page-by-page listing for agent navigation
- **Getting Started**: https://docs.openclaw.ai/start/getting-started — installation and first-run setup
- **Configuration Reference**: https://docs.openclaw.ai/gateway/configuration-reference — complete field-by-field config guide
- **Gateway Troubleshooting**: https://docs.openclaw.ai/gateway/troubleshooting — symptom-first diagnostics and fix ladders

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt