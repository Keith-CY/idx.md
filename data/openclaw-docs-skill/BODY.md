---
name: Clawdbot
description: Use when setting up, configuring, or troubleshooting a multi-channel AI agent gateway. Reach for this skill when users need to install OpenClaw, connect messaging platforms (Discord, Telegram, WhatsApp, Slack, etc.), configure agents and models, manage tools and permissions, or deploy the gateway to production.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted, multi-channel gateway for AI agents that runs on any OS (macOS, Linux, Windows, Docker). It connects messaging platforms (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Matrix, Microsoft Teams, Google Chat, and more) to an embedded agent runtime with tool use, sessions, memory, and multi-agent routing. The primary config file is `~/.openclaw/openclaw.json` (JSON5 format). Key CLI commands: `openclaw onboard`, `openclaw gateway`, `openclaw configure`, `openclaw channels`, `openclaw agent`. Primary docs: https://docs.openclaw.ai

## When to use

Use this skill when:
- **Installing or upgrading**: User needs to install OpenClaw, run onboarding, or update to a new version
- **Configuring channels**: User wants to connect WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Setting up models**: User needs to choose a model provider (Anthropic, OpenAI, Google, etc.) and configure API keys
- **Managing permissions**: User wants to control who can message the bot (allowlists, pairing, group mention rules)
- **Deploying to production**: User needs to set up the gateway as a service, configure remote access, or enable Tailscale
- **Troubleshooting**: User reports gateway errors, channel connection issues, or configuration validation failures
- **Extending functionality**: User wants to add tools, skills, plugins, or automate tasks with cron jobs
- **Multi-agent setup**: User needs to run isolated agents with separate workspaces and routing rules

## Quick reference

### Essential CLI commands

| Command | Purpose |
|---------|---------|
| `openclaw onboard --install-daemon` | Interactive setup wizard + service install |
| `openclaw gateway status` | Check if gateway is running |
| `openclaw dashboard` | Open browser Control UI |
| `openclaw configure` | Interactive config wizard |
| `openclaw config get <path>` | Read a config value (e.g., `agents.defaults.model`) |
| `openclaw config set <path> <value>` | Set a config value |
| `openclaw channels add --channel <name>` | Add a messaging channel |
| `openclaw channels status --probe` | Check channel health |
| `openclaw doctor` | Diagnose config/gateway issues |
| `openclaw logs --follow` | Tail gateway logs |
| `openclaw agent -m "message" --to <dest>` | Send a test message |

### Config file locations

- **Main config**: `~/.openclaw/openclaw.json` (JSON5 format)
- **Workspace**: `~/.openclaw/workspace` (agent files: AGENTS.md, SOUL.md, TOOLS.md, etc.)
- **Sessions**: `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl`
- **Logs**: `~/.openclaw/logs/openclaw.log`
- **State**: `~/.openclaw/` (all local state)

### Minimal config structure

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" }
    }
  },
  channels: {
    whatsapp: { allowFrom: ["+15555550123"] },
    telegram: { botToken: "123:abc" }
  },
  gateway: { port: 18789 }
}
```

### Key config sections

| Section | Purpose | Example |
|---------|---------|---------|
| `agents.defaults.workspace` | Agent working directory | `~/.openclaw/workspace` |
| `agents.defaults.model` | Primary model + fallbacks | `{ primary: "anthropic/claude-sonnet-4-6" }` |
| `channels.<provider>` | Channel config (WhatsApp, Telegram, etc.) | `{ botToken: "...", allowFrom: [...] }` |
| `gateway.port` | Gateway listen port | `18789` |
| `gateway.auth.token` | Gateway auth token | `"secret-token"` |
| `tools.allow` / `tools.deny` | Tool allowlist/blocklist | `["group:fs", "browser"]` |
| `session.dmScope` | Session isolation | `"per-channel-peer"` |
| `cron.enabled` | Enable scheduled jobs | `true` |

## Decision guidance

### When to use X vs Y

| Decision | Option A | Option B | Use A when | Use B when |
|----------|----------|----------|-----------|-----------|
| **Installation** | `npm install -g openclaw@latest` | Docker / Nix / Bun | You want a simple global CLI | You need containerization or reproducibility |
| **Config editing** | `openclaw configure` (wizard) | Direct JSON edit | You prefer interactive prompts | You know the exact config path |
| **Channel setup** | `openclaw channels add` (wizard) | Manual config edit | You're setting up a new channel | You're bulk-configuring multiple channels |
| **Model selection** | `openclaw onboard` (wizard) | `openclaw config set agents.defaults.model` | First-time setup | Switching models in existing config |
| **Session scope** | `per-channel-peer` | `per-peer` or `main` | Multi-user, isolated conversations | Single user or shared sessions |
| **Tool policy** | `tools.profile: "coding"` | Custom `tools.allow` list | You want a preset baseline | You need fine-grained control |
| **Deployment** | `--install-daemon` (systemd/launchd) | `openclaw gateway run` (foreground) | Production / always-on | Development / testing |
| **Remote access** | Tailscale (`--tailscale serve`) | SSH tunnel or VPN | You want zero-config remote access | You have existing VPN infrastructure |

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
   - Paste your API key
   - Set gateway port (default 18789)
   - Optionally add channels (Telegram is fastest)

3. **Verify the gateway is running**
   ```bash
   openclaw gateway status
   ```

4. **Open the Control UI**
   ```bash
   openclaw dashboard
   ```
   - Send a test message in the chat tab
   - Verify the agent responds

5. **Add a channel (optional)**
   ```bash
   openclaw channels add --channel telegram --account default --token $TELEGRAM_BOT_TOKEN
   ```

6. **Check channel health**
   ```bash
   openclaw channels status --probe
   ```

7. **Review and adjust config**
   ```bash
   openclaw config get agents.defaults.model
   openclaw config set channels.whatsapp.allowFrom '["*"]'  # or specific numbers
   ```

8. **Deploy to production (optional)**
   - Ensure `--install-daemon` was run during onboarding
   - Use `openclaw gateway status` to monitor
   - Enable Tailscale for remote access: `openclaw config set gateway.tailscale serve`

### Typical troubleshooting task

1. **Check gateway status**
   ```bash
   openclaw gateway status --deep
   ```

2. **Run diagnostics**
   ```bash
   openclaw doctor
   ```
   - Review suggested fixes
   - Apply auto-repairs: `openclaw doctor --fix`

3. **Check logs**
   ```bash
   openclaw logs --follow --limit 100
   ```

4. **Validate config**
   ```bash
   openclaw config validate
   ```

5. **Probe channels**
   ```bash
   openclaw channels status --probe
   ```

6. **Test the agent**
   ```bash
   openclaw agent -m "test message" --to whatsapp:+15555550123
   ```

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the gateway to refuse startup. Run `openclaw doctor` to see exact issues.
- **JSON5 syntax**: Config uses JSON5 (comments and trailing commas allowed), not strict JSON. Use `openclaw config validate` to catch syntax errors.
- **Model refs require provider prefix**: Use `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. If omitted, OpenClaw tries aliases first, then falls back to the default provider.
- **Workspace must exist**: `agents.defaults.workspace` must point to a valid directory. Run `openclaw setup` to initialize it.
- **Channel tokens are secrets**: Never commit API keys or bot tokens to version control. Use env vars or SecretRef objects instead.
- **Hot reload has limits**: Most config changes apply instantly, but `gateway.port`, `gateway.auth`, and plugin changes require a restart.
- **Sessions are per-scope**: By default, DMs collapse into a shared `main` session. Use `session.dmScope: "per-channel-peer"` for isolated conversations.
- **Tool policy is enforced**: If a tool is in `tools.deny`, the agent cannot call it, even if it's in `tools.allow`. Deny always wins.
- **Pairing codes are one-time**: Once a sender is approved, they don't need to pair again (unless you reset the pairing store).
- **Group mentions are required by default**: Groups require the agent to be mentioned. Set `channels.<provider>.groups."*".requireMention: false` to disable.

## Verification checklist

Before considering a task complete:

- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Config is valid: `openclaw config validate` passes with no errors
- [ ] Channels are healthy: `openclaw channels status --probe` shows all channels as "works" or "ok"
- [ ] Agent responds: Send a test message via Control UI or CLI and verify a response
- [ ] Logs are clean: `openclaw logs --limit 50` shows no ERROR or WARN entries related to the change
- [ ] Model is set: `openclaw config get agents.defaults.model` returns a valid provider/model pair
- [ ] Workspace exists: `ls ~/.openclaw/workspace` shows AGENTS.md, SOUL.md, etc.
- [ ] Permissions are correct: Test with a user in `allowFrom` and verify they can message; test with a user not in the list and verify they get a pairing code
- [ ] For production: `openclaw gateway status` shows the service is installed and running as a daemon

## Resources

- **Full docs navigation**: https://docs.openclaw.ai/llms.txt (comprehensive page-by-page listing for agent navigation)
- **Getting Started**: https://docs.openclaw.ai/start/getting-started
- **Configuration Reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **CLI Reference**: https://docs.openclaw.ai/cli/index
- **Channels Setup**: https://docs.openclaw.ai/channels (links to Discord, Telegram, WhatsApp, Slack, etc.)
- **Troubleshooting**: https://docs.openclaw.ai/gateway/troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt