---
name: Clawdbot
description: Use when setting up a self-hosted AI agent gateway, configuring multi-channel messaging (Discord, Telegram, WhatsApp, Slack, etc.), managing agent workspaces and sessions, controlling tool access, or deploying agents across multiple platforms. Reach for this skill when building personal AI assistants, routing messages to agents, configuring security policies, or troubleshooting gateway and channel issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted gateway that connects chat apps (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Microsoft Teams, Matrix, and more) to AI agents. You run a single Gateway process on your machine or server; it bridges messaging channels to an agent runtime with tool use, sessions, memory, and multi-agent routing. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with `AGENTS.md`, `SOUL.md`, `TOOLS.md`, `IDENTITY.md`, `USER.md`). Primary CLI: `openclaw` (setup, config, channels, agents, gateway, models, nodes). Docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, onboarding, configuring the Gateway, or initializing workspaces
- **Managing channels**: connecting WhatsApp, Telegram, Discord, Slack, or other messaging platforms; controlling who can message the bot
- **Configuring agents**: setting workspace paths, system prompts, models, tools, skills, or multi-agent routing
- **Controlling tool access**: allowing/denying exec, browser, web search, file I/O, or plugin tools
- **Managing sessions**: scoping conversations per user, channel, or agent; resetting or pruning sessions
- **Troubleshooting**: diagnosing channel health, gateway connectivity, config validation, or auth issues
- **Deploying**: installing the Gateway as a service, setting up remote access, or pairing mobile nodes

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| First-time setup | `openclaw onboard --install-daemon` |
| Open dashboard | `openclaw dashboard` |
| Check Gateway status | `openclaw gateway status` |
| View config | `openclaw config get <path>` |
| Set config value | `openclaw config set <path> <value>` |
| List channels | `openclaw channels list` |
| Add a channel | `openclaw channels add --channel telegram --token <token>` |
| List agents | `openclaw agents list` |
| Add an agent | `openclaw agents add <name> --workspace <path>` |
| List models | `openclaw models list` |
| Set primary model | `openclaw models set <provider>/<model>` |
| Validate config | `openclaw config validate` |
| Run diagnostics | `openclaw doctor` |
| View logs | `openclaw logs --follow` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      skills: ["github", "web"],
      sandbox: { mode: "off" }
    },
    list: [
      { id: "main", default: true }
    ]
  },
  
  // Channel setup (WhatsApp, Telegram, Discord, etc.)
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
  
  // Gateway server
  gateway: {
    port: 18789,
    auth: { token: "..." }
  },
  
  // Tool access control
  tools: {
    profile: "coding",
    allow: ["group:fs", "browser"],
    deny: ["exec"]
  },
  
  // Session management
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 }
  }
}
```

### Workspace files

Create these in `~/.openclaw/workspace/`:

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory for the agent |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `IDENTITY.md` | Agent name, emoji, theme |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted after completion) |

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **DM policy** | `pairing` (default) | Unknown senders get a one-time code to approve | `allowlist` | Only specific senders can message |
| **Tool access** | `profile: "coding"` | Agent needs file I/O, exec, web, media | `profile: "messaging"` | Agent only sends messages |
| **Session scope** | `per-channel-peer` | Multi-user, separate conversations per person | `main` | Shared conversation across all users |
| **Sandbox mode** | `non-main` | Isolate non-primary sessions in Docker | `off` | Run all sessions in the host environment |
| **Config reload** | `hybrid` (default) | Auto-restart for critical changes | `hot` | Manual restart when needed |
| **Group mention** | `requireMention: true` | Require @-mention in groups | `requireMention: false` | Respond to all group messages |

## Workflow

### Setting up OpenClaw from scratch

1. **Install**: `curl -fsSL https://openclaw.ai/install.sh | bash` (macOS/Linux) or PowerShell equivalent (Windows)
2. **Run onboarding**: `openclaw onboard --install-daemon` — choose a model provider, set API key, configure Gateway
3. **Verify Gateway**: `openclaw gateway status` — confirm it's listening on port 18789
4. **Open dashboard**: `openclaw dashboard` — test chat in the Control UI
5. **Add a channel** (optional): `openclaw channels add --channel telegram --token <bot-token>`
6. **Configure workspace**: Edit `~/.openclaw/workspace/AGENTS.md`, `SOUL.md`, `IDENTITY.md` with agent instructions
7. **Test**: Send a message via the dashboard or channel and verify the agent responds

### Configuring a new channel

1. **Get credentials**: Obtain bot token, API key, or OAuth credentials from the platform (Telegram, Discord, WhatsApp, etc.)
2. **Add channel**: `openclaw channels add --channel <name> --token <token>` or edit `openclaw.json` directly
3. **Set access policy**: Configure `dmPolicy` (pairing/allowlist/open) and `allowFrom` list
4. **For groups**: Set `requireMention: true` and define `mentionPatterns` (e.g., `["@openclaw", "openclaw"]`)
5. **Verify**: `openclaw channels status --probe` to test connectivity
6. **Check logs**: `openclaw logs --follow` to watch for errors

### Restricting tool access

1. **Choose a profile**: Set `tools.profile` to `coding`, `messaging`, or `minimal`
2. **Add exceptions**: Use `tools.allow` and `tools.deny` to refine
3. **Per-agent override**: Set `agents.list[].tools.profile` for specific agents
4. **Validate**: `openclaw config validate` to check syntax
5. **Reload**: Gateway auto-applies tool changes (no restart needed)

### Troubleshooting a broken config

1. **Validate**: `openclaw config validate` — shows exact errors
2. **Run doctor**: `openclaw doctor` — detects common issues and suggests fixes
3. **Auto-repair**: `openclaw doctor --fix` — applies safe repairs
4. **Check logs**: `openclaw logs --limit 100` — see recent errors
5. **Reset if needed**: `openclaw reset --scope config` — start fresh (keeps workspace)

## Common gotchas

- **Config validation is strict**: Unknown keys, malformed types, or invalid values cause the Gateway to refuse to start. Always run `openclaw config validate` before restarting.
- **Workspace path must exist**: Set `agents.defaults.workspace` to a valid directory. Use `openclaw setup` to create it with templates.
- **Model refs use `provider/model` format**: `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. Omitting the provider falls back to aliases or the default provider.
- **DM pairing codes are one-time**: Once a user approves pairing, they're in the allowlist. Pairing codes don't regenerate for the same sender.
- **Group mention patterns are regex**: Use safe patterns like `["@openclaw", "openclaw"]`. Complex regex can cause performance issues.
- **Tool deny always wins**: If a tool is in both `allow` and `deny`, it's denied. Check `tools.deny` first.
- **Session reset is destructive**: `session.reset.mode: "daily"` deletes conversation history at the specified hour. Set `idleMinutes` to reset only after inactivity.
- **Hot reload doesn't restart the Gateway**: Most config changes apply instantly, but `gateway.*` (port, bind, auth) require a manual restart or `hybrid` mode auto-restart.
- **Secrets in config are not encrypted**: Store API keys in env vars or use SecretRef (`source: "env"`) instead of plaintext in `openclaw.json`.
- **Channel health checks can restart channels**: If a channel looks stale, the Gateway may auto-restart it. Tune `gateway.channelHealthCheckMinutes` to control aggressiveness.

## Verification checklist

Before deploying or sharing your OpenClaw setup:

- [ ] Config validates: `openclaw config validate` returns no errors
- [ ] Gateway starts: `openclaw gateway status` shows "running"
- [ ] Dashboard loads: `openclaw dashboard` opens in the browser
- [ ] Workspace exists: `ls ~/.openclaw/workspace/` shows `AGENTS.md`, `SOUL.md`, `IDENTITY.md`
- [ ] Model is set: `openclaw models status` shows a primary model with valid auth
- [ ] Channels are healthy: `openclaw channels status --probe` shows "works" or "ok"
- [ ] DM policy is configured: `channels.<provider>.allowFrom` or `dmPolicy` is set
- [ ] Tools are restricted (if needed): `openclaw config get tools.profile` matches your intent
- [ ] No secrets in config: `grep -i "api.key\|token\|password" ~/.openclaw/openclaw.json` returns nothing (use env vars instead)
- [ ] Logs are clean: `openclaw logs --limit 50` shows no ERROR or WARN lines related to your setup

## Resources

**Comprehensive navigation**: https://docs.openclaw.ai/llms.txt — complete page-by-page listing for agent reference

**Critical docs**:
- [Getting Started](https://docs.openclaw.ai/start/getting-started) — installation and first chat
- [Configuration](https://docs.openclaw.ai/gateway/configuration) — config overview and common tasks
- [Channels](https://docs.openclaw.ai/channels) — setup for Discord, Telegram, WhatsApp, Slack, and more

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt