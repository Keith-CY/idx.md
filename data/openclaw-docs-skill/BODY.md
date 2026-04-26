---
name: Clawdbot
description: Use when setting up, configuring, or operating a self-hosted AI agent gateway. Reach for this skill when deploying OpenClaw across messaging channels (Discord, Slack, Telegram, WhatsApp, etc.), configuring agent workspaces and tools, managing multi-agent routing, or troubleshooting gateway operations.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted gateway that connects AI agents to messaging apps and channels. It runs a single embedded agent runtime with workspace-based configuration, session management, and multi-channel delivery. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent files), `~/.openclaw/agents/` (sessions). Primary CLI: `openclaw` with subcommands for setup, config, messaging, and operations. Primary docs: https://docs.openclaw.ai

## When to use

Use this skill when:
- **First-time setup**: installing OpenClaw, running onboarding, verifying the Gateway
- **Configuration**: editing `openclaw.json`, setting models, configuring channels, controlling access
- **Channel integration**: connecting Discord, Slack, Telegram, WhatsApp, or other messaging platforms
- **Agent workspace**: creating or editing bootstrap files (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md)
- **Multi-agent routing**: setting up multiple agents with separate workspaces and session isolation
- **Tool and skill management**: allowing/denying tools, creating skills, configuring plugins
- **Operations**: checking Gateway status, viewing logs, managing sessions, troubleshooting
- **Security**: setting up pairing, allowlists, group mention gating, sandboxing

## Quick reference

### Essential commands

| Task | Command |
|------|---------|
| Install | `curl -fsSL https://openclaw.ai/install.sh \| bash` |
| Onboard (interactive setup) | `openclaw onboard --install-daemon` |
| Check Gateway status | `openclaw gateway status` |
| Open Control UI (browser) | `openclaw dashboard` |
| View config | `openclaw config get <path>` |
| Set config value | `openclaw config set <path> <value>` |
| Validate config | `openclaw config validate` |
| View logs | `openclaw logs` |
| Send test message | `openclaw message send --channel telegram --to <id> "test"` |
| List sessions | `openclaw sessions` |
| List agents | `openclaw agents list` |
| Restart Gateway | `openclaw gateway restart` |

### Config file locations

- **Main config**: `~/.openclaw/openclaw.json` (JSON5 format)
- **Agent workspace**: `~/.openclaw/workspace/` (default)
- **Sessions**: `~/.openclaw/agents/<agentId>/sessions/`
- **Skills**: `~/.openclaw/skills/` (personal), `<workspace>/skills/` (workspace-specific)
- **State directory**: `~/.openclaw/` (override with `OPENCLAW_STATE_DIR`)

### Bootstrap files (injected into agent context)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted after completion) |

### Common config patterns

```json5
// Minimal config
{
  agents: { defaults: { workspace: "~/.openclaw/workspace" } },
  channels: { whatsapp: { allowFrom: ["+15555550123"] } }
}

// Set primary model
{
  agents: {
    defaults: {
      model: { primary: "anthropic/claude-sonnet-4-6" }
    }
  }
}

// Enable Telegram channel
{
  channels: {
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing"
    }
  }
}

// Restrict tools
{
  tools: {
    profile: "coding",
    deny: ["exec"]
  }
}
```

## Decision guidance

| Scenario | Use | Avoid |
|----------|-----|-------|
| **First setup** | `openclaw onboard` (interactive) | Manual JSON editing without validation |
| **Config changes** | `openclaw config set` or Control UI | Direct file edits without `config validate` |
| **Channel setup** | Channel-specific docs (e.g., `/channels/telegram`) | Guessing token/auth format |
| **Multi-agent** | `agents.list[]` with separate workspaces | Single workspace with multiple agents |
| **Tool control** | `tools.profile` + `tools.allow/deny` | Hardcoding tool restrictions in prompts |
| **Access control** | `dmPolicy: "pairing"` + `allowFrom` | Leaving `dmPolicy: "open"` in production |
| **Debugging** | `openclaw logs`, `openclaw doctor`, Control UI | Restarting Gateway without checking logs |
| **Config hot-reload** | Edit `openclaw.json` directly (auto-applies) | Restarting Gateway for every change |

## Workflow

1. **Install and verify**
   - Run `curl -fsSL https://openclaw.ai/install.sh | bash` (macOS/Linux) or PowerShell equivalent (Windows)
   - Confirm Node 24 (or 22.14+) is installed: `node --version`
   - Verify installation: `openclaw --version`

2. **Run onboarding**
   - Execute `openclaw onboard --install-daemon`
   - Choose a model provider (Anthropic, OpenAI, Google, etc.)
   - Provide API key when prompted
   - Accept default workspace location or specify custom path
   - Confirm Gateway is running: `openclaw gateway status`

3. **Open Control UI and test**
   - Run `openclaw dashboard` to open browser interface
   - Send a test message in the chat tab
   - Verify agent responds (indicates Gateway + model are working)

4. **Configure channels (optional)**
   - Read the channel-specific page (e.g., `/channels/telegram`)
   - Obtain required credentials (bot token, API key, etc.)
   - Edit `~/.openclaw/openclaw.json` or use `openclaw config set`
   - Validate: `openclaw config validate`
   - Restart if needed: `openclaw gateway restart`

5. **Customize agent workspace**
   - Edit `~/.openclaw/workspace/AGENTS.md` (instructions)
   - Edit `~/.openclaw/workspace/SOUL.md` (persona)
   - Edit `~/.openclaw/workspace/TOOLS.md` (tool guidance)
   - Changes take effect on next message (no restart needed)

6. **Set up access control**
   - For WhatsApp/Telegram: set `channels.<provider>.allowFrom` with phone numbers or IDs
   - For groups: set `channels.<provider>.groups."*".requireMention: true`
   - For pairing: use `dmPolicy: "pairing"` (default) to require one-time approval codes

7. **Monitor and troubleshoot**
   - Check status: `openclaw gateway status`
   - View logs: `openclaw logs` or `openclaw logs --follow`
   - Run diagnostics: `openclaw doctor`
   - Check sessions: `openclaw sessions`
   - Inspect config: `openclaw config get agents.defaults.workspace`

## Common gotchas

- **Config validation fails on startup**: Run `openclaw doctor --fix` to auto-repair, or check `.clobbered.*` file next to `openclaw.json` for the rejected payload
- **Gateway won't start**: Ensure `agents.defaults.workspace` is set and the directory exists; run `openclaw setup` to initialize
- **Channel not receiving messages**: Verify `channels.<provider>.enabled: true` and credentials are correct; check `openclaw logs` for auth errors
- **Agent not responding**: Confirm model provider API key is set; check `openclaw status --usage` for quota issues
- **Sessions not persisting**: Sessions are stored at `~/.openclaw/agents/<agentId>/sessions/`; ensure the directory is writable
- **Tools not available**: Check `tools.allow/deny` config; use `tools.profile: "coding"` for a safe baseline
- **Group mentions not working**: Set `channels.<provider>.groups."*".requireMention: true` and configure `mentionPatterns` in agent config
- **Config hot-reload not applying**: Ensure file is valid JSON5; run `openclaw config validate` to check for syntax errors
- **Pairing codes not working**: Verify `dmPolicy: "pairing"` is set; check logs for pairing approval messages
- **Multi-agent routing not working**: Ensure each agent has a unique `id` and separate `workspace`; use `bindings[]` to route channels to agents

## Verification checklist

Before considering work complete:

- [ ] `openclaw gateway status` shows Gateway is running
- [ ] `openclaw dashboard` opens in browser without errors
- [ ] Test message in Control UI receives agent response
- [ ] `openclaw config validate` passes (no errors)
- [ ] `~/.openclaw/openclaw.json` contains required fields: `agents.defaults.workspace`, channel config (if used)
- [ ] `~/.openclaw/workspace/` directory exists with at least one bootstrap file (AGENTS.md, SOUL.md, etc.)
- [ ] For channels: credentials are set and `enabled: true`
- [ ] For access control: `allowFrom` or `dmPolicy` is configured as intended
- [ ] `openclaw logs` shows no ERROR or WARN lines related to the change
- [ ] Sessions are being created: `openclaw sessions` lists at least one session
- [ ] Multi-agent setup (if used): `openclaw agents list` shows all agents; `openclaw agents bindings` shows correct routing

## Resources

- **Full page-by-page navigation**: https://docs.openclaw.ai/llms.txt
- **Getting started**: https://docs.openclaw.ai/start/getting-started
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration
- **Channels overview**: https://docs.openclaw.ai/channels
- **CLI reference**: https://docs.openclaw.ai/cli

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt