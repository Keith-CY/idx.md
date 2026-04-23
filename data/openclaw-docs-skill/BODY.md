---
name: Clawdbot
description: Use when deploying a self-hosted AI agent gateway across messaging channels (Discord, Telegram, WhatsApp, Slack, iMessage, Signal, Matrix, etc.), configuring multi-channel routing, managing agent workspaces and sessions, setting up tools and skills, or troubleshooting gateway operations.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted, multi-channel gateway for AI agents that runs on any OS (macOS, Linux, Windows). It connects messaging apps (Discord, Telegram, WhatsApp, Slack, iMessage, Signal, Matrix, Mattermost, Microsoft Teams, Google Chat, Feishu, and more) to a single embedded agent runtime. The agent has access to tools for file I/O, shell execution, web browsing, image/video generation, and device control. Configuration lives in `~/.openclaw/openclaw.json` (JSON5 format). Key CLI: `openclaw onboard`, `openclaw gateway`, `openclaw config`, `openclaw message`, `openclaw channels`. Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Deploying a gateway**: Setting up OpenClaw for the first time, installing the service, or configuring remote access
- **Connecting channels**: Adding WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Configuring agents**: Creating isolated agents with separate workspaces, routing messages to specific agents, or managing multi-agent setups
- **Managing tools and skills**: Enabling/disabling tools, restricting tool access per agent, installing skills from ClawHub, or building custom skills
- **Troubleshooting**: Diagnosing gateway health, checking channel status, reviewing logs, or fixing configuration errors
- **Automating workflows**: Setting up cron jobs, webhooks, heartbeats, or task automation
- **Securing access**: Implementing pairing codes, allowlists, group mention gating, or token-based authentication

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Check gateway status | `openclaw gateway status` |
| Open dashboard | `openclaw dashboard` |
| View/edit config | `openclaw config get <path>` / `openclaw config set <path> <value>` |
| List channels | `openclaw channels list` |
| Add a channel | `openclaw channels add --channel telegram --token <token>` |
| Send a message | `openclaw message send --target +15555550123 --message "Hi"` |
| List agents | `openclaw agents list` |
| View logs | `openclaw logs --follow` |
| Validate config | `openclaw config validate` |
| Health check | `openclaw health` |

### Config file structure

```json5
{
  // Agent workspace and runtime
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      sandbox: { mode: "off" },
      skills: ["github", "weather"],
    },
    list: [
      { id: "main", default: true },
      { id: "work", workspace: "~/.openclaw/workspace-work" },
    ],
  },

  // Channel configuration
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing",
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "allowlist",
      allowFrom: ["tg:123"],
    },
    discord: {
      enabled: true,
      botToken: "token",
    },
  },

  // Gateway server
  gateway: {
    port: 18789,
    bind: "loopback",
    auth: { token: "..." },
    reload: { mode: "hybrid" },
  },

  // Sessions and routing
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 },
  },

  // Tools and security
  tools: {
    profile: "coding",
    allow: ["group:fs", "browser", "web_search"],
    deny: ["exec"],
  },

  // Automation
  cron: { enabled: true },
  hooks: { enabled: true, token: "..." },
}
```

### Key file paths

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config file (JSON5) |
| `~/.openclaw/workspace` | Default agent workspace |
| `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl` | Session transcripts |
| `~/.openclaw/.env` | Environment variables (optional) |
| `~/.openclaw/skills` | Workspace skills folder |
| `~/.openclaw/logs` | Gateway logs |

## Decision guidance

### When to use pairing vs allowlist vs open DM policy

| Policy | Use when | Setup |
|--------|----------|-------|
| **pairing** | You want one-time approval codes for new senders | Default; senders get a code to approve |
| **allowlist** | You have a fixed set of known phone numbers/IDs | Set `allowFrom: ["+15555550123", "+15555550124"]` |
| **open** | You trust all inbound DMs (not recommended) | Set `allowFrom: ["*"]` and `dmPolicy: "open"` |
| **disabled** | You only want group chats, no DMs | Set `dmPolicy: "disabled"` |

### When to use sandbox mode

| Mode | Use when | Config |
|------|----------|--------|
| **off** | Single trusted user, development | `sandbox: { mode: "off" }` |
| **non-main** | Multi-user; isolate non-main agents | `sandbox: { mode: "non-main" }` |
| **all** | Strict isolation for all agents | `sandbox: { mode: "all" }` |

### When to use tool profiles

| Profile | Use when | Includes |
|---------|----------|----------|
| **full** | Single trusted user | All tools |
| **coding** | Developer workflows | File I/O, exec, web, sessions, media |
| **messaging** | Message-only agents | Messaging, session read-only |
| **minimal** | Locked-down agents | Session status only |

## Workflow

### Typical setup and deployment

1. **Install OpenClaw**
   ```bash
   curl -fsSL https://openclaw.ai/install.sh | bash
   ```

2. **Run onboarding**
   ```bash
   openclaw onboard --install-daemon
   ```
   - Choose a model provider (Anthropic, OpenAI, etc.)
   - Set an API key
   - Configure gateway port and auth
   - Optionally set up channels

3. **Verify the gateway is running**
   ```bash
   openclaw gateway status
   ```

4. **Open the dashboard**
   ```bash
   openclaw dashboard
   ```
   - Test chat in the Control UI

5. **Add a channel** (e.g., Telegram)
   ```bash
   openclaw channels add --channel telegram --token <BOT_TOKEN>
   ```

6. **Configure access control**
   - Edit `~/.openclaw/openclaw.json`
   - Set `channels.whatsapp.allowFrom` or use pairing codes
   - Set group mention patterns if needed

7. **Test end-to-end**
   - Send a message from the channel
   - Verify the agent responds in the Control UI or channel

8. **Deploy to production** (optional)
   - Set `gateway.bind: "lan"` or `"tailnet"` for remote access
   - Configure TLS if needed
   - Use `gateway.auth.token` or password for security

### Adding a new channel

1. Get the channel's credentials (bot token, API key, etc.)
2. Run `openclaw channels add --channel <name> --token <token>`
3. Or manually edit `openclaw.json` under `channels.<provider>`
4. Set `dmPolicy` and `allowFrom` for access control
5. Restart the gateway: `openclaw gateway restart`
6. Verify with `openclaw channels status`

### Creating a multi-agent setup

1. Add agents to config:
   ```json5
   {
     agents: {
       list: [
         { id: "main", default: true, workspace: "~/.openclaw/workspace" },
         { id: "work", workspace: "~/.openclaw/workspace-work" },
       ],
     },
   }
   ```

2. Create routing bindings:
   ```bash
   openclaw agents bind --agent work --bind "whatsapp:work-account"
   ```

3. Or edit config directly:
   ```json5
   {
     bindings: [
       { agentId: "work", match: { channel: "whatsapp", accountId: "work-account" } },
     ],
   }
   ```

4. Restart: `openclaw gateway restart`

## Common gotchas

- **Config validation fails on startup**: Run `openclaw doctor --fix` to auto-repair common issues. Check `~/.openclaw/openclaw.json` for syntax errors (JSON5 allows comments and trailing commas, but watch for typos).
- **Channel not receiving messages**: Verify `dmPolicy` and `allowFrom` match the sender. Use `openclaw channels status --probe` to check channel health.
- **Agent not responding**: Check `openclaw logs --follow` for errors. Verify the model provider API key is set and has quota. Use `openclaw models status --probe` to test auth.
- **Pairing code not working**: Ensure the sender's ID matches the channel format (e.g., `+15555550123` for WhatsApp, `tg:123` for Telegram). Check `openclaw pairing list`.
- **Hot reload not applying changes**: Some changes (gateway port, plugins) require a restart. Use `openclaw gateway restart` or check `gateway.reload.mode` in config.
- **Tool access denied**: Check `tools.allow` and `tools.deny` in config. Use `tools.profile: "coding"` for full access, or explicitly allow tools with `tools.allow: ["group:fs", "browser"]`.
- **Session not persisting**: Verify `session.dmScope` is set correctly. Sessions are stored in `~/.openclaw/agents/<agentId>/sessions/`. Check file permissions.
- **Workspace files not injected**: Ensure `AGENTS.md`, `SOUL.md`, `TOOLS.md`, `IDENTITY.md`, `USER.md` exist in the workspace. Run `openclaw setup` to create templates.
- **Multi-agent routing not working**: Verify bindings match the channel and account ID. Use `openclaw agents bindings --json` to inspect active bindings.
- **Remote access not working**: Check `gateway.remote.url` and `gateway.tailscale` config. Use `openclaw qr --remote` to generate a pairing QR for mobile nodes.

## Verification checklist

Before deploying or making changes:

- [ ] Config validates: `openclaw config validate`
- [ ] Gateway is running: `openclaw gateway status`
- [ ] Channels are healthy: `openclaw channels status --probe`
- [ ] Model auth works: `openclaw models status --probe`
- [ ] Agent can respond: Send a test message via Control UI or channel
- [ ] Logs show no errors: `openclaw logs --limit 50`
- [ ] Access control is set: `allowFrom` or pairing codes configured
- [ ] Tools are allowed: `tools.allow` / `tools.deny` match your needs
- [ ] Workspace files exist: Check `~/.openclaw/workspace/AGENTS.md`, `SOUL.md`, etc.
- [ ] Sessions persist: Check `~/.openclaw/agents/main/sessions/` has `.jsonl` files
- [ ] Multi-agent bindings are correct: `openclaw agents bindings --json` (if using multiple agents)

## Resources

- **Full navigation**: https://docs.openclaw.ai/llms.txt — comprehensive page-by-page listing for agent reference
- **Getting Started**: https://docs.openclaw.ai/start/getting-started — installation and first chat
- **Configuration Reference**: https://docs.openclaw.ai/gateway/configuration-reference — all config fields and options
- **CLI Reference**: https://docs.openclaw.ai/cli/index — complete command tree and examples

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt