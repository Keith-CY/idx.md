---
name: Clawdbot
description: Use when setting up or configuring a self-hosted AI agent gateway, connecting messaging channels (Discord, Slack, Telegram, WhatsApp, etc.), managing agent sessions and routing, configuring tools and skills, or deploying multi-agent systems with isolated workspaces.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted, multi-channel gateway for AI agents that runs on any OS. It connects chat apps (Discord, Slack, Telegram, WhatsApp, iMessage, Signal, Matrix, and 15+ others) to a single embedded agent runtime. The Gateway is the core service that manages sessions, routing, channels, and tool execution. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, BOOTSTRAP.md). Primary CLI: `openclaw` (install, onboard, configure, gateway, agent, channels, models, skills, nodes). See [OpenClaw docs](https://docs.openclaw.ai).

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, onboarding, configuring the Gateway, or initializing workspace files
- **Connecting channels**: adding WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Managing agents**: creating multi-agent setups, configuring routing bindings, or isolating workspaces
- **Configuring tools and skills**: allowing/denying tools, installing skills from ClawHub, or restricting capabilities per agent
- **Troubleshooting**: diagnosing config errors, channel health, session issues, or auth failures
- **Deploying**: setting up remote access, Tailscale, TLS, or running as a service
- **Customizing**: editing bootstrap files, system prompts, memory, or agent identity

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Install | `curl -fsSL https://openclaw.ai/install.sh \| bash` |
| Onboard (interactive setup) | `openclaw onboard --install-daemon` |
| Check Gateway status | `openclaw gateway status` |
| Open Control UI | `openclaw dashboard` |
| Configure (wizard) | `openclaw configure` |
| Get/set config values | `openclaw config get <path>` / `openclaw config set <path> <value>` |
| List channels | `openclaw channels list` |
| Add a channel | `openclaw channels add --channel telegram --token <token>` |
| List agents | `openclaw agents list` |
| Add an agent | `openclaw agents add <name> --workspace <dir>` |
| List skills | `openclaw skills list` |
| Search ClawHub skills | `openclaw skills search <query>` |
| Send a test message | `openclaw message send --to +15555550123 --message "Hi"` |
| View logs | `openclaw logs --follow` |
| Health check | `openclaw health` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      skills: ["github", "weather"],
      sandbox: { mode: "off" }
    },
    list: [
      { id: "main", default: true },
      { id: "work", workspace: "~/.openclaw/workspace-work" }
    ]
  },

  // Channel configuration
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
    },
    discord: {
      enabled: true,
      botToken: "token",
      dmPolicy: "pairing"
    }
  },

  // Gateway server
  gateway: {
    port: 18789,
    bind: "loopback",
    auth: { token: "secret" }
  },

  // Session and routing
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 }
  },

  // Tool configuration
  tools: {
    profile: "coding",
    allow: ["group:fs", "browser", "web_search"],
    deny: ["exec"]
  }
}
```

### Key file paths

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config file (JSON5) |
| `~/.openclaw/workspace/` | Agent workspace root |
| `~/.openclaw/workspace/AGENTS.md` | Agent instructions + memory |
| `~/.openclaw/workspace/SOUL.md` | Agent persona and boundaries |
| `~/.openclaw/workspace/TOOLS.md` | User-maintained tool notes |
| `~/.openclaw/workspace/IDENTITY.md` | Agent name, emoji, theme |
| `~/.openclaw/workspace/USER.md` | User profile |
| `~/.openclaw/workspace/BOOTSTRAP.md` | One-time setup ritual (deleted after) |
| `~/.openclaw/agents/<agentId>/sessions/` | Session transcripts (JSONL) |
| `~/.openclaw/.env` | Global environment variables |

## Decision guidance

### When to use which channel

| Channel | Setup time | Best for | Auth |
|---------|-----------|----------|------|
| **Telegram** | 2 min | Quick testing, mobile | Bot token |
| **WhatsApp** | 5 min | Personal use, groups | Phone pairing |
| **Discord** | 5 min | Communities, servers | Bot token |
| **Slack** | 10 min | Teams, workspaces | OAuth |
| **Signal** | 10 min | Privacy-focused | Phone pairing |
| **Matrix** | 10 min | Self-hosted, federated | User/password |
| **iMessage** | 10 min | Apple ecosystem | BlueBubbles plugin |

### When to use tool profiles

| Profile | Use case |
|---------|----------|
| **full** | Development, testing, unrestricted agent |
| **coding** | Code work, file I/O, web search, media |
| **messaging** | Messaging-only, no file/exec access |
| **minimal** | Locked-down, status-only |

### When to use sandbox mode

| Mode | When |
|------|------|
| **off** | Local development, trusted workspaces |
| **non-main** | Production, multi-user, untrusted input |
| **all** | Maximum isolation, all sessions sandboxed |

## Workflow

### Setting up OpenClaw from scratch

1. **Install the CLI**
   ```bash
   curl -fsSL https://openclaw.ai/install.sh | bash
   ```

2. **Run onboarding**
   ```bash
   openclaw onboard --install-daemon
   ```
   This walks you through: model provider selection, API key setup, workspace initialization, and Gateway configuration.

3. **Verify the Gateway is running**
   ```bash
   openclaw gateway status
   ```
   Should show the Gateway listening on port 18789.

4. **Open the Control UI**
   ```bash
   openclaw dashboard
   ```
   Test a message in the browser UI to confirm everything works.

5. **Add a channel** (optional, for mobile access)
   ```bash
   openclaw channels add --channel telegram --token <BOT_TOKEN>
   ```

6. **Customize the workspace** (optional)
   - Edit `~/.openclaw/workspace/AGENTS.md` for agent instructions
   - Edit `~/.openclaw/workspace/SOUL.md` for persona
   - Edit `~/.openclaw/workspace/IDENTITY.md` for name/emoji

### Adding a new channel

1. **Get the channel credentials** (bot token, OAuth, phone pairing, etc.)
2. **Add the channel**
   ```bash
   openclaw channels add --channel <name> --token <token>
   ```
   Or use the interactive wizard: `openclaw channels add`
3. **Verify it's connected**
   ```bash
   openclaw channels status --probe
   ```
4. **Test by sending a message** from the channel to the agent

### Creating a multi-agent setup

1. **Add a new agent**
   ```bash
   openclaw agents add work --workspace ~/.openclaw/workspace-work
   ```

2. **Create the workspace for the new agent**
   ```bash
   mkdir -p ~/.openclaw/workspace-work
   openclaw setup --workspace ~/.openclaw/workspace-work
   ```

3. **Bind the agent to a channel**
   ```bash
   openclaw agents bind --agent work --bind telegram:work
   ```

4. **Verify the binding**
   ```bash
   openclaw agents bindings --agent work
   ```

### Restricting tools for an agent

1. **Edit config** to set per-agent tool profile
   ```bash
   openclaw config set agents.list[1].tools.profile messaging
   ```

2. **Or use allow/deny lists**
   ```bash
   openclaw config set agents.list[1].tools.allow '["group:messaging","session_status"]'
   ```

3. **Verify the change**
   ```bash
   openclaw config get agents.list[1].tools
   ```

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor` to see exact issues.
- **Bootstrap files are one-time only**: `BOOTSTRAP.md` is deleted after the first run. Don't rely on it for permanent setup.
- **Session scope matters**: `dmScope: "per-channel-peer"` is recommended for multi-user setups; `main` shares a single session across all DMs.
- **Tool groups are case-sensitive**: Use `group:fs`, not `group:FS`.
- **Pairing codes expire**: One-time pairing codes are short-lived; approve pending requests quickly with `openclaw pairing approve <code>`.
- **Model refs use provider/model format**: `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`.
- **Workspace must exist**: `agents.defaults.workspace` must point to a valid directory; `openclaw setup` creates it.
- **Hot reload doesn't restart for all changes**: Gateway server changes (port, bind, auth) require a manual restart.
- **Secrets in config are not encrypted**: Use SecretRef objects (`source: "env"`) to reference env vars instead of hardcoding keys.
- **Group chat requires mention**: By default, group messages require the agent to be mentioned; configure `mentionPatterns` to customize.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Config is valid: `openclaw config validate` passes
- [ ] Channels are connected: `openclaw channels status --probe` shows all channels as "works" or "ok"
- [ ] Agent can receive messages: Send a test message and verify a response
- [ ] Workspace files exist: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, IDENTITY.md
- [ ] No unresolved secrets: `openclaw secrets audit` shows no unresolved refs
- [ ] Sessions are clean: `openclaw sessions cleanup` removes orphaned sessions
- [ ] Health check passes: `openclaw health` shows no critical issues
- [ ] Logs are clean: `openclaw logs --limit 50` shows no ERROR or FATAL entries
- [ ] Model is accessible: `openclaw models status` shows the primary model as "ok"

## Resources

- **Full documentation**: [https://docs.openclaw.ai/llms.txt](https://docs.openclaw.ai/llms.txt) — comprehensive page-by-page navigation
- **Configuration reference**: [https://docs.openclaw.ai/gateway/configuration-reference](https://docs.openclaw.ai/gateway/configuration-reference) — all config fields and options
- **CLI reference**: [https://docs.openclaw.ai/cli/index](https://docs.openclaw.ai/cli/index) — complete command reference
- **Getting started**: [https://docs.openclaw.ai/start/getting-started](https://docs.openclaw.ai/start/getting-started) — quick setup guide

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt