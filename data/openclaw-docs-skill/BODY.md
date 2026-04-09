---
name: Clawdbot
description: Use when setting up, configuring, or managing OpenClaw — a self-hosted multi-channel AI agent gateway. Reach for this skill when working with the Gateway, connecting messaging channels (Discord, Telegram, WhatsApp, Slack, etc.), configuring agents and models, managing sessions and routing, or deploying OpenClaw on any OS.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted multi-channel gateway that connects messaging apps (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Matrix, Teams, and 15+ others) to AI agents. The Gateway runs on any OS (macOS, Linux, Windows, Raspberry Pi) and routes conversations to embedded or remote agents with tool use, memory, and multi-agent isolation. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, BOOTSTRAP.md). Primary CLI: `openclaw` (setup, onboard, configure, gateway, channels, agents, skills, etc.). See [OpenClaw docs](https://docs.openclaw.ai).

## When to use

Use this skill when:
- **Setting up OpenClaw** — installing, running `openclaw onboard`, or configuring the Gateway for the first time
- **Connecting channels** — adding Discord, Telegram, WhatsApp, Slack, or other messaging platforms
- **Configuring agents** — setting workspace paths, models, tools, skills, or multi-agent routing
- **Managing sessions** — controlling DM/group access, allowlists, pairing, or session scope
- **Deploying** — running the Gateway as a service, on Docker, Kubernetes, or remote servers
- **Troubleshooting** — diagnosing channel health, auth issues, or config validation errors
- **Customizing** — enabling sandboxing, cron jobs, skills, plugins, or automation hooks

## Quick reference

### Essential commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Open dashboard | `openclaw dashboard` |
| Check status | `openclaw gateway status` |
| View config | `openclaw config get <path>` |
| Set config value | `openclaw config set <path> <value>` |
| Add a channel | `openclaw channels add --channel telegram` |
| List agents | `openclaw agents list` |
| Run one agent turn | `openclaw agent -m "message" --to <dest>` |
| Restart gateway | `openclaw gateway restart` |
| View logs | `openclaw logs --follow` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      skills: ["github", "weather"],
      sandbox: { mode: "off" },
    },
    list: [
      { id: "main", default: true },
      { id: "work", workspace: "~/.openclaw/workspace-work" },
    ],
  },

  // Channels (Discord, Telegram, WhatsApp, etc.)
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing",
      groups: { "*": { requireMention: true } },
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "allowlist",
      allowFrom: ["tg:123"],
    },
  },

  // Gateway server config
  gateway: {
    port: 18789,
    auth: { token: "your-token" },
    reload: { mode: "hybrid" },
  },

  // Sessions and routing
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 },
  },

  // Skills and tools
  skills: {
    entries: {
      "image-lab": { enabled: true, apiKey: "GEMINI_API_KEY" },
    },
  },

  // Cron jobs and automation
  cron: { enabled: true },
  hooks: { enabled: true, token: "hook-secret" },
}
```

### Workspace bootstrap files

Create these in `~/.openclaw/workspace/`:

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes |
| `IDENTITY.md` | Agent name, emoji, theme |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted) |

### Channel quick setup

| Channel | Minimal config |
|---------|----------------|
| **WhatsApp** | `allowFrom: ["+15555550123"]` |
| **Telegram** | `botToken: "123:abc"` |
| **Discord** | `botToken: "token"` |
| **Slack** | `botToken: "xoxb-..."` |
| **Signal** | `phoneNumber: "+1234567890"` |

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| **Single user, one workspace** | `dmScope: "main"` | Shared session, simpler |
| **Multiple users, isolation needed** | `dmScope: "per-channel-peer"` | Each sender gets own session |
| **Untrusted inputs, risky tools** | `sandbox: { mode: "all" }` | Docker isolation, safer |
| **Trusted environment, speed** | `sandbox: { mode: "off" }` | No container overhead |
| **New user, unknown sender** | `dmPolicy: "pairing"` | One-time approval code |
| **Known users only** | `dmPolicy: "allowlist"` | Faster, no pairing step |
| **Public bot** | `dmPolicy: "open"` with `allowFrom: ["*"]` | Anyone can message |
| **Hot-reload config** | `reload: { mode: "hybrid" }` | Auto-restart on critical changes |
| **Manual control** | `reload: { mode: "off" }` | You restart the Gateway |

## Workflow

### Typical setup task

1. **Install OpenClaw**
   ```bash
   curl -fsSL https://openclaw.ai/install.sh | bash
   ```

2. **Run onboarding**
   ```bash
   openclaw onboard --install-daemon
   ```
   - Choose a model provider (Anthropic, OpenAI, etc.)
   - Set API key
   - Configure Gateway auth (token or password)
   - Optionally add channels

3. **Verify the Gateway is running**
   ```bash
   openclaw gateway status
   ```

4. **Open the Control UI**
   ```bash
   openclaw dashboard
   ```
   - Send a test message in the WebChat tab
   - Verify the agent responds

5. **Connect a channel** (e.g., Telegram)
   ```bash
   openclaw channels add --channel telegram --token $TELEGRAM_BOT_TOKEN
   ```

6. **Test from the channel**
   - Send a message to the bot
   - Confirm the agent replies

7. **Customize workspace files** (optional)
   - Edit `~/.openclaw/workspace/AGENTS.md` for instructions
   - Edit `~/.openclaw/workspace/SOUL.md` for persona
   - Edit `~/.openclaw/workspace/IDENTITY.md` for name/emoji

8. **Verify config is valid**
   ```bash
   openclaw config validate
   ```

### Adding a new agent

1. Create a new workspace directory
   ```bash
   mkdir -p ~/.openclaw/workspace-work
   ```

2. Add the agent to config
   ```bash
   openclaw config set agents.list '[
     { id: "main", default: true },
     { id: "work", workspace: "~/.openclaw/workspace-work" }
   ]'
   ```

3. Bind the agent to a channel
   ```bash
   openclaw agents bind --agent work --bind "telegram:work-bot"
   ```

4. Restart the Gateway
   ```bash
   openclaw gateway restart
   ```

## Common gotchas

- **Config validation fails on startup** — Run `openclaw doctor --fix` to auto-repair common issues (permissions, missing fields, invalid types).
- **Channel not receiving messages** — Check `dmPolicy` and `allowFrom` allowlist. Use `openclaw channels status --probe` to test channel health.
- **Agent doesn't respond in groups** — Verify `requireMention: true` is set and the mention pattern matches. Check `mentionPatterns` in config.
- **Skills not loading** — Run `openclaw skills check` to see missing requirements (bins, env vars, config). Install missing tools or set `enabled: false` for unavailable skills.
- **Config changes not taking effect** — If `reload: { mode: "off" }`, manually restart: `openclaw gateway restart`. In `hybrid` mode, critical changes auto-restart; safe changes hot-apply.
- **Workspace files not injected** — Blank files are skipped. Large files are truncated. Run `openclaw setup` to create default templates.
- **Multi-agent routing not working** — Verify bindings with `openclaw agents bindings`. Check that `dmScope` is not `main` (which collapses all DMs to one session).
- **Pairing code not working** — Codes expire after one use. Generate a new one with `openclaw qr` or approve pending requests with `openclaw devices approve`.
- **Gateway won't start** — Check logs: `openclaw logs --limit 50`. Validate config: `openclaw config validate`. Run `openclaw doctor` for diagnostics.
- **Sandbox image missing** — Run `scripts/sandbox-setup.sh` to build the Docker image. Requires Docker to be running.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config is valid: `openclaw config validate` returns no errors
- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Dashboard loads: `openclaw dashboard` opens in browser
- [ ] Test message works: Send a message in WebChat and get a response
- [ ] Channels are healthy: `openclaw channels status --probe` shows "ok" or "works"
- [ ] Agents are listed: `openclaw agents list` shows expected agents
- [ ] Skills are ready: `openclaw skills check` shows no critical missing requirements
- [ ] Workspace files exist: `ls ~/.openclaw/workspace/` includes AGENTS.md, SOUL.md, IDENTITY.md
- [ ] No errors in logs: `openclaw logs --limit 20` shows no ERROR or FATAL lines
- [ ] Config hot-reload works (if enabled): Edit `openclaw.json` and verify changes apply without manual restart

## Resources

- **Full docs navigation**: [https://docs.openclaw.ai/llms.txt](https://docs.openclaw.ai/llms.txt) — comprehensive page-by-page index for all agents
- **Getting Started**: [https://docs.openclaw.ai/start/getting-started](https://docs.openclaw.ai/start/getting-started) — installation and first-run walkthrough
- **Configuration Reference**: [https://docs.openclaw.ai/gateway/configuration-reference](https://docs.openclaw.ai/gateway/configuration-reference) — complete field-by-field config schema
- **CLI Reference**: [https://docs.openclaw.ai/cli/index](https://docs.openclaw.ai/cli/index) — all `openclaw` commands and options

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt