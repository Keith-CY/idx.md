---
name: Clawdbot
description: Use when setting up, configuring, or troubleshooting a self-hosted AI agent gateway. Reach for this skill when agents need to understand OpenClaw's multi-channel architecture, CLI commands, configuration patterns, tool system, or deployment across Discord, Slack, Telegram, WhatsApp, and other messaging platforms.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted gateway that connects AI agents to multiple messaging channels (Discord, Slack, Telegram, WhatsApp, iMessage, Signal, Matrix, and more) through a single unified process. The primary entry point is the `openclaw` CLI, which manages the Gateway service, configuration, channels, agents, and tools. Key files: `~/.openclaw/openclaw.json` (configuration), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md), and `~/.openclaw/agents/` (session storage). Core commands: `openclaw onboard`, `openclaw gateway`, `openclaw config`, `openclaw channels`, `openclaw message`. See the full documentation at https://docs.openclaw.ai.

## When to use

Use this skill when:
- Setting up OpenClaw for the first time or troubleshooting installation
- Configuring channels (WhatsApp, Telegram, Discord, Slack, etc.) or DM/group policies
- Managing agent workspaces, sessions, or multi-agent routing
- Enabling tools, skills, plugins, or automation (cron, hooks, webhooks)
- Debugging gateway health, config validation, or channel connectivity
- Deploying OpenClaw on different platforms (macOS, Linux, Windows, Docker)
- Integrating with model providers (Anthropic, OpenAI, Google, etc.)
- Controlling who can message the bot via allowlists or pairing flows

## Quick reference

### Essential CLI commands

| Command | Purpose |
|---------|---------|
| `openclaw onboard --install-daemon` | Interactive setup wizard; installs Gateway as service |
| `openclaw gateway status` | Check if Gateway is running and listening |
| `openclaw dashboard` | Open Control UI in browser (default: http://127.0.0.1:18789) |
| `openclaw config get <path>` | Read a config value (e.g., `agents.defaults.workspace`) |
| `openclaw config set <path> <value>` | Write a config value |
| `openclaw channels list` | List all configured channels and their status |
| `openclaw message send --channel telegram --text "Hello"` | Send a test message |
| `openclaw doctor` | Diagnose config, auth, and health issues |
| `openclaw logs` | Stream Gateway logs |
| `openclaw status --usage` | Show provider usage/quota |

### Configuration file structure

Config lives at `~/.openclaw/openclaw.json` (JSON5 format). Hot-reloads automatically.

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: "anthropic/claude-sonnet-4-6",
      sandbox: { mode: "off" }
    }
  },
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing"  // pairing | allowlist | open | disabled
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing"
    }
  },
  tools: {
    profile: "coding",  // full | coding | messaging | minimal
    allow: ["group:fs", "browser", "web_search"],
    deny: ["exec"]
  }
}
```

### Agent workspace files (injected into context)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after completion) |
| `skills/` | Custom skill markdown files |

### Tool groups (for allow/deny)

| Group | Includes |
|-------|----------|
| `group:runtime` | exec, process, code_execution |
| `group:fs` | read, write, edit, apply_patch |
| `group:web` | web_search, x_search, web_fetch |
| `group:ui` | browser, canvas |
| `group:sessions` | sessions_list, sessions_history, subagents |
| `group:messaging` | message |
| `group:media` | image, image_generate, music_generate, video_generate, tts |

### Channel DM policies

| Policy | Behavior |
|--------|----------|
| `pairing` | Unknown senders get one-time pairing code |
| `allowlist` | Only senders in `allowFrom` can message |
| `open` | Allow all DMs (requires `allowFrom: ["*"]`) |
| `disabled` | Ignore all DMs |

## Decision guidance

### When to use pairing vs allowlist vs open

| Scenario | Policy | Why |
|----------|--------|-----|
| Personal use, single user | `pairing` | Approve once, then automatic |
| Multiple trusted users | `allowlist` | Explicit control, no pairing flow |
| Public bot or testing | `open` | Anyone can message (use with caution) |
| Locked-down production | `allowlist` | Strongest security |

### When to use tool profiles

| Profile | Use case |
|---------|----------|
| `full` | Unrestricted agent (default) |
| `coding` | Code, files, web, sessions, media |
| `messaging` | Chat-only, no exec or file access |
| `minimal` | Session status only |

### When to use sandbox mode

| Mode | When |
|------|------|
| `off` | Development, trusted workloads |
| `non-main` | Isolate group/multi-user sessions only |
| `all` | Production, untrusted input, strict isolation |

## Workflow

### Setting up OpenClaw from scratch

1. **Install Node.js** — Node 24 recommended (22.14+ supported)
2. **Install OpenClaw** — `curl -fsSL https://openclaw.ai/install.sh | bash` (macOS/Linux) or PowerShell equivalent (Windows)
3. **Run onboarding** — `openclaw onboard --install-daemon` (choose model provider, set API key, configure Gateway)
4. **Verify Gateway** — `openclaw gateway status` (should show listening on port 18789)
5. **Open dashboard** — `openclaw dashboard` (opens Control UI in browser)
6. **Send test message** — Type in Control UI chat or connect a channel (Telegram is fastest)
7. **Configure channels** — Edit `~/.openclaw/openclaw.json` to add WhatsApp, Discord, Slack, etc.
8. **Set DM policy** — Add `allowFrom` list or use `pairing` for approval flow
9. **Customize agent** — Edit workspace files (AGENTS.md, SOUL.md, TOOLS.md)
10. **Enable tools/skills** — Adjust `tools.profile` and `tools.allow`/`tools.deny`

### Adding a new channel

1. **Get credentials** — Obtain bot token or API key from the channel provider
2. **Edit config** — Add channel block to `~/.openclaw/openclaw.json`:
   ```json5
   channels: {
     telegram: {
       enabled: true,
       botToken: "YOUR_TOKEN",
       dmPolicy: "pairing"
     }
   }
   ```
3. **Hot-reload** — Gateway auto-detects config changes (no restart needed)
4. **Verify** — Run `openclaw channels list` or check Control UI
5. **Test** — Send a message from the channel to the bot

### Configuring multi-agent routing

1. **Create workspaces** — `mkdir -p ~/.openclaw/workspace-{home,work}`
2. **Initialize each** — Copy AGENTS.md, SOUL.md, etc. to each workspace
3. **Define agents** — Add to config:
   ```json5
   agents: {
     list: [
       { id: "home", workspace: "~/.openclaw/workspace-home" },
       { id: "work", workspace: "~/.openclaw/workspace-work" }
     ]
   }
   ```
4. **Bind agents** — Route channels/accounts to agents:
   ```json5
   bindings: [
     { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
     { agentId: "work", match: { channel: "whatsapp", accountId: "biz" } }
   ]
   ```
5. **Restart** — `openclaw gateway restart` (or wait for auto-reload)

## Common gotchas

- **Config validation fails** — Run `openclaw doctor --fix` to auto-repair. Check for unknown keys, malformed JSON5, or invalid enum values.
- **Gateway won't start** — Check `openclaw logs` for errors. Ensure `agents.defaults.workspace` exists and is writable.
- **Channel not connecting** — Verify bot token/credentials are correct. Check `openclaw channels status` and `openclaw logs` for auth errors.
- **DM policy not working** — Ensure `allowFrom` uses correct format (e.g., `+15555550123` for WhatsApp, `tg:123` for Telegram). Pairing requires user to approve first.
- **Tools not available** — Check `tools.profile` and `tools.allow`/`tools.deny`. Verify plugin is installed if using plugin-provided tools.
- **Sessions not persisting** — Sessions are stored in `~/.openclaw/agents/<agentId>/sessions/`. Check disk space and file permissions.
- **Model not found** — Ensure model ref uses `provider/model` format (e.g., `anthropic/claude-sonnet-4-6`). Check provider auth is configured.
- **Sandbox build missing** — Run `scripts/sandbox-setup.sh` to build the sandbox image before enabling `sandbox.mode`.
- **Config hot-reload stuck** — Check for file locks or editor temp files. Restart with `openclaw gateway restart`.
- **Control UI not loading** — Verify port 18789 is not blocked. Check `gateway.controlUi.enabled: true` in config.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows "listening"
- [ ] Config is valid: `openclaw doctor` shows no errors
- [ ] Channels are connected: `openclaw channels list` shows expected channels as "connected"
- [ ] Agent workspace exists: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.
- [ ] Model is configured: `openclaw models list` shows primary model
- [ ] DM policy is set: `allowFrom` list or `pairing` is configured for at least one channel
- [ ] Tools are accessible: `openclaw config get tools.profile` matches intended profile
- [ ] Test message works: Send a message via Control UI or channel and receive a response
- [ ] Logs are clean: `openclaw logs` shows no ERROR or WARN lines related to the change
- [ ] Config hot-reloaded: After editing `openclaw.json`, verify changes took effect without restart

## Resources

- **Full documentation**: https://docs.openclaw.ai/llms.txt (comprehensive page-by-page navigation)
- **Getting started**: https://docs.openclaw.ai/start/getting-started
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **Channels overview**: https://docs.openclaw.ai/channels

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt