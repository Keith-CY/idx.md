---
name: Clawdbot
description: Use when deploying and managing a self-hosted AI agent gateway, configuring multi-channel messaging (Discord, Slack, Telegram, WhatsApp, etc.), setting up agent workspaces and sessions, controlling tool access, or troubleshooting gateway operations
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted gateway that connects AI agents to multiple messaging channels (Discord, Slack, Telegram, WhatsApp, iMessage, Signal, Matrix, and more) with a single Gateway process. Agents run in isolated workspaces with session management, tool access control, and multi-agent routing. The primary config file is `~/.openclaw/openclaw.json` (JSON5 format). Key CLI commands: `openclaw onboard` (setup), `openclaw gateway` (service control), `openclaw config` (configuration), `openclaw dashboard` (web UI). Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Deploying OpenClaw**: installing, onboarding, or configuring the Gateway for the first time
- **Managing channels**: connecting Discord, Slack, Telegram, WhatsApp, or other messaging platforms
- **Configuring agents**: setting up workspaces, bootstrap files, session behavior, or multi-agent routing
- **Controlling tool access**: allowing/denying tools, setting tool profiles, or restricting capabilities per agent
- **Troubleshooting**: diagnosing Gateway health, config validation errors, channel failures, or session issues
- **Automation**: setting up cron jobs, webhooks, heartbeats, or standing orders
- **Security**: configuring pairing, allowlists, group mention gating, or sandbox isolation

## Quick reference

### Essential commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Check Gateway status | `openclaw gateway status` |
| Open web dashboard | `openclaw dashboard` |
| View config | `openclaw config get agents.defaults.workspace` |
| Edit config | `openclaw config set agents.defaults.model "anthropic/claude-sonnet-4-6"` |
| Validate config | `openclaw config validate` |
| Restart Gateway | `openclaw gateway restart` |
| View logs | `openclaw logs` |
| Run diagnostics | `openclaw doctor` |

### Config file locations

- **Main config**: `~/.openclaw/openclaw.json` (JSON5 format)
- **Workspace**: `~/.openclaw/workspace` (default agent workspace)
- **Sessions**: `~/.openclaw/agents/<agentId>/sessions/<SessionId>.jsonl`
- **State directory**: `~/.openclaw/` (override with `OPENCLAW_STATE_DIR`)

### Bootstrap files (in workspace)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted after completion) |

### Common config sections

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: "anthropic/claude-sonnet-4-6",
      sandbox: { mode: "non-main" }
    }
  },
  channels: {
    whatsapp: { allowFrom: ["+15555550123"] },
    telegram: { botToken: "123:abc", dmPolicy: "pairing" }
  },
  tools: {
    profile: "coding",
    allow: ["group:fs", "browser"],
    deny: ["exec"]
  },
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 }
  }
}
```

## Decision guidance

| Scenario | Choose | Why |
|----------|--------|-----|
| First-time setup | `openclaw onboard` | Interactive wizard handles all choices |
| Editing config | Direct file edit or `openclaw config set` | Hot-reload applies changes automatically |
| Restricting tools | `tools.profile: "messaging"` | Pre-built profiles cover common cases |
| Custom tool restrictions | `tools.allow` / `tools.deny` | Fine-grained control per agent |
| Multi-agent setup | `agents.list[]` + `bindings[]` | Isolate workspaces and sessions |
| Session isolation | `dmScope: "per-channel-peer"` | Separate conversations per user/channel |
| Sandbox mode | `sandbox.mode: "non-main"` | Isolate non-main sessions from host |
| Channel access | `dmPolicy: "pairing"` | Require approval for new senders |

## Workflow

1. **Install and onboard**
   - Run `npm install -g openclaw@latest` or use install script
   - Run `openclaw onboard --install-daemon` to configure provider, API key, and workspace
   - Verify with `openclaw gateway status`

2. **Understand the workspace**
   - Read `~/.openclaw/openclaw.json` to see current config
   - Check `~/.openclaw/workspace/` for bootstrap files (AGENTS.md, SOUL.md, etc.)
   - These files are injected into the agent context on first turn of new sessions

3. **Connect channels**
   - For each channel (Telegram, Discord, WhatsApp, etc.), add config under `channels.<provider>`
   - Set `dmPolicy` (pairing, allowlist, open, disabled) and `allowFrom` for access control
   - Restart Gateway: `openclaw gateway restart`

4. **Configure agent behavior**
   - Set `agents.defaults.model` to choose the LLM
   - Set `agents.defaults.workspace` to point to agent workspace
   - Set `tools.profile` or `tools.allow`/`tools.deny` to control tool access
   - Use `openclaw config set` or edit `openclaw.json` directly

5. **Test and verify**
   - Open `openclaw dashboard` and send a test message
   - Check logs: `openclaw logs` (or tail `~/.openclaw/logs/`)
   - Run `openclaw doctor` if anything fails

6. **Troubleshoot**
   - Validate config: `openclaw config validate`
   - Check Gateway health: `openclaw health`
   - Inspect channel status: `openclaw channels status`
   - Review session state: `openclaw sessions cleanup`

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause Gateway to refuse startup. Run `openclaw doctor --fix` to repair.
- **Hot-reload doesn't restart Gateway**: Most config changes apply instantly, but `gateway.*` (port, TLS, auth) require manual restart.
- **Bootstrap files are one-time**: `BOOTSTRAP.md` is deleted after first completion. Don't rely on it for persistent instructions.
- **Session scope affects isolation**: `dmScope: "main"` shares one session across all users; `per-channel-peer` isolates per user+channel.
- **Tool groups are case-sensitive**: Use `group:fs`, `group:runtime`, not `group:FS`.
- **Pairing codes expire**: Default pairing requires user approval; set `dmPolicy: "allowlist"` for permanent allow-lists.
- **Workspace must exist**: If `agents.defaults.workspace` points to a missing directory, Gateway fails. Use `openclaw setup` to initialize.
- **Symlinked config not supported**: OpenClaw may replace symlinks with regular files on write. Use real file paths.
- **Model refs use provider/model format**: `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`.
- **Sandbox requires setup**: `sandbox.mode: "non-main"` requires running `scripts/sandbox-setup.sh` first.

## Verification checklist

Before submitting work:

- [ ] Config validates: `openclaw config validate` returns no errors
- [ ] Gateway starts: `openclaw gateway status` shows "running"
- [ ] Dashboard loads: `openclaw dashboard` opens in browser
- [ ] Test message works: Send a message in Control UI and receive a reply
- [ ] Channels connected: `openclaw channels status` shows expected channels
- [ ] Tools accessible: Agent can call expected tools (check logs if denied)
- [ ] Sessions isolated: Multi-user setup has separate sessions per user
- [ ] Logs clean: `openclaw logs` shows no ERROR or WARN lines (except expected ones)
- [ ] Workspace files present: Bootstrap files exist in `agents.defaults.workspace`
- [ ] No stale processes: `openclaw gateway status` shows single running process

## Resources

- **Comprehensive navigation**: https://docs.openclaw.ai/llms.txt
- **Getting started**: https://docs.openclaw.ai/start/getting-started
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration
- **CLI reference**: https://docs.openclaw.ai/cli/index
- **Channels setup**: https://docs.openclaw.ai/channels
- **Tools and skills**: https://docs.openclaw.ai/tools/index

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt