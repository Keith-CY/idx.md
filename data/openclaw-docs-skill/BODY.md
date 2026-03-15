---
name: Clawdbot
description: Use when setting up, configuring, or managing a self-hosted AI agent gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, etc.) to AI agents. Use for agent workspace setup, channel configuration, session management, tool/skill creation, multi-agent routing, and automation workflows.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product Summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, Signal, Slack, and more) to AI agents. It runs a single Gateway process on your machine or server, bridging chat apps to an always-available agent with tool use, sessions, memory, and multi-agent routing. Install via `npm install -g openclaw@latest`. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace), `~/.openclaw/agents/<agentId>/sessions/` (session store). Primary CLI: `openclaw` with subcommands for setup, config, channels, agents, models, and automation. See [https://docs.openclaw.ai](https://docs.openclaw.ai) for full documentation.

## When to Use

Reach for this skill when:

- **Setting up OpenClaw**: initial install, onboarding, workspace initialization
- **Configuring channels**: connecting WhatsApp, Telegram, Discord, or other messaging platforms
- **Managing agents**: creating multi-agent setups, routing messages to specific agents, isolating workspaces
- **Configuring models**: setting primary/fallback models, managing auth profiles, switching between providers
- **Creating skills**: building custom agent capabilities via `SKILL.md` files
- **Managing sessions**: controlling DM scope, session resets, identity links, session pruning
- **Setting up automation**: cron jobs, webhooks, heartbeats, hooks
- **Troubleshooting**: diagnosing config issues, checking channel health, verifying agent connectivity
- **Deploying**: installing the Gateway service, remote access, Tailscale setup

## Quick Reference

### Essential Commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw setup` or `openclaw onboard --install-daemon` |
| Interactive config | `openclaw configure` or `openclaw config` |
| Get config value | `openclaw config get agents.defaults.workspace` |
| Set config value | `openclaw config set agents.defaults.model.primary "anthropic/claude-opus-4-6"` |
| Start Gateway | `openclaw gateway --port 18789` |
| Check health | `openclaw health` or `openclaw status` |
| List channels | `openclaw channels list` |
| Add channel | `openclaw channels add --channel telegram --token $TOKEN` |
| List agents | `openclaw agents list` |
| Add agent | `openclaw agents add --workspace ~/.openclaw/workspace-work` |
| List skills | `openclaw skills list` |
| Send message | `openclaw message send --target +15555550123 --message "Hi"` |
| View logs | `openclaw logs --follow` |
| Validate config | `openclaw config validate` |
| Run diagnostics | `openclaw doctor` |

### Config File Structure

Config lives at `~/.openclaw/openclaw.json` (JSON5 format). Key sections:

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-opus-4-6" },
      models: { /* model catalog */ },
      sandbox: { mode: "off" },
      heartbeat: { every: "30m" },
    },
    list: [ /* multi-agent configs */ ],
  },
  channels: {
    whatsapp: { allowFrom: ["+15555550123"] },
    telegram: { botToken: "...", dmPolicy: "pairing" },
    discord: { botToken: "...", dmPolicy: "pairing" },
  },
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 },
  },
  tools: { profile: "coding", allow: [], deny: [] },
  cron: { enabled: true },
  hooks: { enabled: true, token: "..." },
  gateway: { port: 18789, auth: { mode: "token" } },
}
```

### Workspace Files

Inside `agents.defaults.workspace`, create these files:

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions + memory |
| `SOUL.md` | Persona, boundaries, tone |
| `IDENTITY.md` | Agent name/vibe/emoji |
| `USER.md` | User profile + preferred address |
| `TOOLS.md` | User-maintained tool notes |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted) |
| `MEMORY.md` | Long-term memory (optional) |
| `skills/` | Custom skill directories |

### CLI Flags

| Flag | Use |
|------|-----|
| `--dev` | Isolate state under `~/.openclaw-dev` |
| `--profile <name>` | Isolate state under `~/.openclaw-<name>` |
| `--json` | Output JSON (no styling) |
| `--no-color` | Disable ANSI colors |
| `-V, --version` | Print version |

## Decision Guidance

### When to Use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| Single user, one device | `dmScope: "main"` | Continuity across channels |
| Multiple users, shared inbox | `dmScope: "per-channel-peer"` | Isolate context per user |
| Multi-account same channel | `dmScope: "per-account-channel-peer"` | Isolate by account + user |
| Same person on multiple channels | `identityLinks` | Collapse to one session |
| One agent, one workspace | `agents.defaults.workspace` | Simple setup |
| Multiple isolated agents | `agents.list` + `bindings` | Separate workspaces/auth |
| Restrict tool access globally | `tools.profile: "messaging"` | Base allowlist |
| Restrict per agent | `agents.list[].tools.profile` | Agent-specific override |
| Restrict per model | `tools.byProvider` | Provider-specific limits |
| Hot-reload config changes | `gateway.reload.mode: "hybrid"` | Auto-restart when needed |
| Manual restart only | `gateway.reload.mode: "off"` | Full control |
| Sandbox all sessions | `agents.defaults.sandbox.mode: "all"` | Maximum isolation |
| Sandbox non-main only | `agents.defaults.sandbox.mode: "non-main"` | Balance safety + speed |
| Daily session reset | `session.reset.mode: "daily"` | Fresh context each day |
| Idle-based reset | `session.reset.idleMinutes: 120` | Reset after inactivity |
| Cron job isolation | `cron.sessionRetention: "24h"` | Auto-prune old runs |

## Workflow

### 1. Initial Setup

1. Install: `npm install -g openclaw@latest`
2. Run onboarding: `openclaw onboard --install-daemon`
3. Choose gateway mode (local or remote)
4. Select model provider and add API key
5. Configure first channel (WhatsApp, Telegram, etc.)
6. Install as daemon service
7. Start Gateway: `openclaw gateway --port 18789`
8. Open Control UI: `http://127.0.0.1:18789`

### 2. Configure a Channel

1. Check existing channels: `openclaw channels list`
2. Add new channel: `openclaw channels add --channel telegram --token $BOT_TOKEN`
3. Set DM policy: `openclaw config set channels.telegram.dmPolicy pairing`
4. Set allowlist (optional): `openclaw config set channels.telegram.allowFrom '["tg:123"]'`
5. Verify: `openclaw channels status`

### 3. Create a Custom Skill

1. Create skill directory: `mkdir -p ~/.openclaw/workspace/skills/my-skill`
2. Create `SKILL.md`:
   ```markdown
   ---
   name: my_skill
   description: What this skill does
   ---
   
   # My Skill
   
   Instructions for the agent on how to use this skill.
   ```
3. Refresh: `openclaw skills list` (auto-discovers)
4. Test: `openclaw agent --message "use my skill"`

### 4. Set Up Multi-Agent Routing

1. Create second workspace: `mkdir -p ~/.openclaw/workspace-work`
2. Initialize: `openclaw agents add work --workspace ~/.openclaw/workspace-work`
3. Add binding: `openclaw agents bind --agent work --bind "telegram:work-account"`
4. Verify: `openclaw agents list --bindings`

### 5. Enable Automation (Cron)

1. Enable cron: `openclaw config set cron.enabled true`
2. Add job: `openclaw cron add --name "daily-check" --every "24h" --message "Check status"`
3. List jobs: `openclaw cron list`
4. Run manually: `openclaw cron run <jobId>`

### 6. Troubleshoot Issues

1. Check config: `openclaw doctor`
2. View logs: `openclaw logs --follow`
3. Probe channels: `openclaw channels status --probe`
4. Check health: `openclaw health --deep`
5. Validate config: `openclaw config validate`

## Common Gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse startup. Run `openclaw doctor --fix` to auto-repair.
- **Session isolation matters**: Default `dmScope: "main"` shares context across all DMs. Use `per-channel-peer` for multi-user setups to prevent information leaks.
- **Model refs require provider prefix**: Use `anthropic/claude-opus-4-6`, not just `claude-opus-4-6`. Omitting the provider only works for aliases.
- **Workspace is not a hard sandbox**: Relative paths resolve inside the workspace, but absolute paths can reach elsewhere unless sandboxing is enabled. Set `agents.defaults.sandbox.mode: "non-main"` for isolation.
- **Skills are loaded from three locations**: bundled (shipped), managed (`~/.openclaw/skills`), and workspace (`<workspace>/skills`). Workspace wins on name conflict.
- **Channel allowlists are per-channel**: `channels.whatsapp.allowFrom` doesn't affect Telegram. Configure each channel separately.
- **Hot reload doesn't restart for gateway changes**: Changes to `gateway.port`, `gateway.auth`, or `gateway.bind` require manual restart.
- **Cron jobs are isolated**: Each run gets a fresh session id; they don't reuse idle sessions.
- **DM pairing codes expire**: Default pairing mode requires users to approve once; codes are one-time. Use `dmPolicy: "allowlist"` for known senders.
- **Session reset is per-agent**: Resetting one agent's session doesn't affect others. Use `openclaw sessions cleanup` to prune old entries.
- **Tool policies are applied in order**: `tools.profile` (base) → `tools.byProvider` (narrow) → `tools.allow`/`tools.deny` (final). Deny wins.
- **Secrets are not persisted as plaintext**: Use SecretRef objects (`{ source: "env", id: "VAR_NAME" }`) for sensitive values; `openclaw secrets reload` refreshes them.
- **Plugins require restart**: Installing or enabling plugins requires a Gateway restart.
- **Browser profiles are port-bound**: Each profile gets a unique port (18800-18899). Max ~100 profiles.
- **Sandboxing requires Docker**: `agents.defaults.sandbox.mode: "all"` needs Docker installed and `scripts/sandbox-setup.sh` run first.

## Verification Checklist

Before submitting work:

- [ ] Config validates: `openclaw config validate` (no errors)
- [ ] Gateway starts: `openclaw gateway --port 18789` (no startup errors)
- [ ] Health check passes: `openclaw health` (returns `ok`)
- [ ] Channels are reachable: `openclaw channels status --probe` (all green)
- [ ] Agent responds: `openclaw agent --message "hello"` (gets a reply)
- [ ] Sessions are isolated: `openclaw sessions --json` (correct `dmScope` applied)
- [ ] Skills are discoverable: `openclaw skills list` (custom skills appear)
- [ ] Models are configured: `openclaw models status` (primary + fallbacks set)
- [ ] Logs are clean: `openclaw logs --limit 50` (no repeated errors)
- [ ] Security audit passes: `openclaw security audit` (no warnings)
- [ ] Workspace files exist: `ls ~/.openclaw/workspace/` (AGENTS.md, SOUL.md, etc.)
- [ ] Multi-agent bindings work: `openclaw agents list --bindings` (correct routing)
- [ ] Cron jobs are enabled: `openclaw cron list` (if using automation)

## Resources

- **Full page navigation**: [https://docs.openclaw.ai/llms.txt](https://docs.openclaw.ai/llms.txt) — comprehensive page-by-page listing for agent navigation
- **Configuration reference**: [https://docs.openclaw.ai/gateway/configuration-reference](https://docs.openclaw.ai/gateway/configuration-reference) — every config field with defaults and examples
- **CLI reference**: [https://docs.openclaw.ai/cli/index](https://docs.openclaw.ai/cli/index) — all commands, subcommands, and flags
- **Agent concepts**: [https://docs.openclaw.ai/concepts/agent](https://docs.openclaw.ai/concepts/agent) — workspace, bootstrap files, runtime behavior

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt