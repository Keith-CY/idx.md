---
name: Clawdbot
description: Use when setting up or configuring a self-hosted AI agent gateway, connecting messaging channels (Discord, Slack, Telegram, WhatsApp, etc.), managing agent workspaces and sessions, configuring tools and skills, or deploying multi-agent systems with isolated routing and memory.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted, multi-channel gateway for AI agents that runs on any OS (macOS, Linux, Windows). It connects your favorite chat apps—Discord, Slack, Telegram, WhatsApp, iMessage, Signal, Matrix, Microsoft Teams, and 15+ others—to a single embedded agent runtime. The agent can read/write files, execute commands, browse the web, send messages, and interact with paired mobile devices. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent files), `~/.openclaw/agents/` (sessions). Primary CLI: `openclaw`. Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw** — installing, onboarding, configuring the gateway, or troubleshooting startup
- **Connecting channels** — adding WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Configuring agents** — setting workspace, models, tools, skills, or multi-agent routing
- **Managing sessions** — controlling conversation scope, memory, or session reset behavior
- **Deploying tools** — enabling/disabling exec, browser, web search, or custom skills
- **Securing access** — setting up pairing, allowlists, group mention rules, or sandboxing
- **Automating tasks** — configuring cron jobs, heartbeat, or webhook ingestion
- **Troubleshooting** — diagnosing gateway health, channel issues, or config validation errors

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| **First-time setup** | `openclaw onboard --install-daemon` |
| **Open dashboard** | `openclaw dashboard` |
| **Check gateway status** | `openclaw gateway status` |
| **View/edit config** | `openclaw config get <path>` / `openclaw config set <path> <value>` |
| **Validate config** | `openclaw config validate` |
| **Diagnose issues** | `openclaw doctor` |
| **Restart gateway** | `openclaw gateway restart` |
| **List channels** | `openclaw channels list` |
| **Add a channel** | `openclaw channels add --channel telegram --token <TOKEN>` |
| **Send a test message** | `openclaw message send --target +15555550123 --message "Hi"` |
| **Run agent turn** | `openclaw agent --message "test" --to <dest>` |
| **List agents** | `openclaw agents list` |
| **View sessions** | `openclaw sessions` |
| **Tail logs** | `openclaw logs --follow` |

### Key config paths

| Setting | Path | Example |
|---------|------|---------|
| **Agent workspace** | `agents.defaults.workspace` | `~/.openclaw/workspace` |
| **Primary model** | `agents.defaults.model.primary` | `anthropic/claude-sonnet-4-6` |
| **Gateway port** | `gateway.port` | `18789` |
| **Gateway auth** | `gateway.auth.token` | `sk-...` |
| **WhatsApp allowlist** | `channels.whatsapp.allowFrom` | `["+15555550123"]` |
| **Telegram bot token** | `channels.telegram.botToken` | `123:abc...` |
| **Discord bot token** | `channels.discord.botToken` | `MTk4...` |
| **Group mention pattern** | `agents.list[].groupChat.mentionPatterns` | `["@openclaw"]` |
| **Sandbox mode** | `agents.defaults.sandbox.mode` | `non-main` |
| **Cron enabled** | `cron.enabled` | `true` |

### File structure

```
~/.openclaw/
├── openclaw.json           # Main config (JSON5)
├── workspace/              # Agent workspace (default)
│   ├── AGENTS.md          # Operating instructions
│   ├── SOUL.md            # Persona and boundaries
│   ├── TOOLS.md           # Tool usage notes
│   ├── IDENTITY.md        # Agent name/emoji
│   ├── USER.md            # User profile
│   ├── BOOTSTRAP.md       # One-time setup (deleted after)
│   └── skills/            # Workspace-scoped skills
├── agents/                # Session storage
│   └── main/
│       └── sessions/
│           └── <sessionId>.jsonl
├── skills/                # Personal skill library
└── control-ui-custom/     # Custom dashboard (optional)
```

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **DM access control** | `dmPolicy: "pairing"` — unknown senders need approval | `dmPolicy: "allowlist"` — only pre-approved senders |
| **Group activation** | `requireMention: true` — bot only responds to @mentions | `requireMention: false` — bot responds to all group messages |
| **Session scope** | `dmScope: "per-channel-peer"` — separate chat per user per channel | `dmScope: "main"` — all DMs share one session |
| **Sandbox mode** | `sandbox.mode: "non-main"` — isolate non-main agents only | `sandbox.mode: "all"` — isolate all agents |
| **Config reload** | `reload.mode: "hybrid"` — auto-restart on critical changes | `reload.mode: "hot"` — manual restart when needed |
| **Tool allowlist** | `tools.profile: "coding"` — full file/exec/web access | `tools.profile: "messaging"` — message-only |
| **Model failover** | `agents.defaults.model.fallbacks` — automatic retry chain | `agents.defaults.models` — manual per-session override |

## Workflow

### Typical setup task

1. **Install and onboard**
   - Run `openclaw onboard --install-daemon`
   - Choose a model provider (Anthropic, OpenAI, etc.)
   - Paste API key when prompted
   - Confirm gateway port (default 18789)

2. **Verify gateway is running**
   - `openclaw gateway status` should show "running"
   - `openclaw dashboard` opens the browser UI

3. **Connect a channel**
   - `openclaw channels add --channel telegram --token <BOT_TOKEN>`
   - Or edit `~/.openclaw/openclaw.json` and add channel config
   - Restart: `openclaw gateway restart`

4. **Set access control**
   - For WhatsApp: add `channels.whatsapp.allowFrom: ["+15555550123"]`
   - For groups: set `channels.whatsapp.groups."*".requireMention: true`
   - Reload config (auto-applies in hybrid mode)

5. **Test the agent**
   - Send a message from an allowed number/user
   - Check `openclaw logs --follow` for errors
   - Verify response in the channel

6. **Configure tools and skills** (optional)
   - Add skills to `~/.openclaw/workspace/skills/`
   - Set `tools.allow` / `tools.deny` in config
   - Restart gateway if needed

7. **Verify and monitor**
   - `openclaw status --deep` for full health check
   - `openclaw health` for quick gateway probe
   - `openclaw doctor` to detect common issues

### Typical troubleshooting task

1. **Check if gateway is running**
   - `openclaw gateway status`
   - If not running: `openclaw gateway start`

2. **Validate config**
   - `openclaw config validate`
   - If invalid: `openclaw doctor --fix` to auto-repair

3. **Review recent logs**
   - `openclaw logs --limit 100`
   - Look for auth errors, channel connection failures, or tool errors

4. **Test channel connectivity**
   - `openclaw channels status --probe`
   - Check for "works", "auth failed", or "probe failed" status

5. **Inspect active sessions**
   - `openclaw sessions --verbose`
   - Look for stale or orphaned sessions

6. **Reset if needed**
   - `openclaw reset --scope config+creds+sessions` (keeps workspace)
   - Then re-run `openclaw onboard`

## Common gotchas

- **Config not reloading** — In `hybrid` mode (default), most changes auto-apply. Gateway-level changes (port, TLS, auth) require restart. Check `gateway.reload.mode` in config.
- **Channel auth fails silently** — Always run `openclaw channels status --probe` after adding a channel. Missing tokens or expired OAuth show up here.
- **Workspace files missing** — If `AGENTS.md`, `SOUL.md`, etc. are deleted, `openclaw setup` recreates safe defaults. Set `agent.skipBootstrap: true` to prevent auto-creation.
- **Sessions not persisting** — Sessions are stored in `~/.openclaw/agents/<agentId>/sessions/`. If the path is wrong, sessions are lost on restart. Check `agents.defaults.workspace`.
- **Group messages ignored** — By default, groups require mention. Set `requireMention: false` per channel if you want all messages processed.
- **Pairing codes not working** — Pairing is per-channel. If using multiple channels, approve pairing on each one separately. Check `openclaw pairing list`.
- **Tools not available** — Check `tools.allow` / `tools.deny` and `tools.profile`. Deny always wins. Use `openclaw agent --message "test" --local` to test without the gateway.
- **Model not found** — Ensure the model is in `agents.defaults.models` and the provider auth is set. Run `openclaw models status --probe` to check provider connectivity.
- **Sandbox fails to start** — Build the sandbox image first: `scripts/sandbox-setup.sh`. Requires Docker or Podman.
- **Config clobbered on restart** — If config is invalid, OpenClaw restores the last-known-good copy and saves the broken version as `.clobbered.*`. Fix the broken file and run `openclaw config validate`.

## Verification checklist

Before submitting work or declaring a setup complete:

- [ ] `openclaw gateway status` shows "running"
- [ ] `openclaw config validate` passes with no errors
- [ ] `openclaw dashboard` opens in browser without auth errors
- [ ] At least one channel is configured and `openclaw channels status --probe` shows "works"
- [ ] `openclaw agent --message "test" --to <dest>` returns a response
- [ ] `openclaw logs --limit 20` shows no ERROR or WARN lines (or only expected ones)
- [ ] `openclaw doctor` reports no critical issues
- [ ] `openclaw status --deep` shows all agents and channels as healthy
- [ ] If using multi-agent: `openclaw agents list` shows all agents and `openclaw agents bindings` shows correct routing
- [ ] If using tools: `openclaw agent --message "list tools" --local` shows expected tools available
- [ ] If using skills: workspace `skills/` folder exists and `openclaw skills list` shows them loaded

## Resources

- **Full page-by-page navigation**: https://docs.openclaw.ai/llms.txt
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **CLI reference**: https://docs.openclaw.ai/cli/index
- **Channels setup**: https://docs.openclaw.ai/channels (pick your platform)

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt