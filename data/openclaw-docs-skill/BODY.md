---
name: Clawdbot
description: Use when deploying and managing a self-hosted AI agent gateway, configuring messaging channels (WhatsApp, Telegram, Discord, etc.), setting up multi-agent routing, creating automation workflows, or troubleshooting agent behavior and channel connectivity.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product Summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, Signal, Slack, and 15+ others) to AI agents. It runs as a single process on your machine or server, manages sessions and routing, and provides tools for browser automation, code execution, web search, and device control. The core config file is `~/.openclaw/openclaw.json` (JSON5 format). Key CLI commands: `openclaw setup`, `openclaw onboard`, `openclaw gateway`, `openclaw channels`, `openclaw agents`, `openclaw config`. Primary docs: https://docs.openclaw.ai

## When to Use

Reach for this skill when:
- **Setting up OpenClaw** — first-time install, onboarding, or workspace initialization
- **Configuring channels** — connecting WhatsApp, Telegram, Discord, or other messaging platforms
- **Managing agents** — creating isolated agents with separate workspaces, auth, and sessions
- **Routing messages** — binding channels/accounts to specific agents or peers
- **Automating workflows** — setting up cron jobs, heartbeat, hooks, webhooks, or standing orders
- **Troubleshooting** — diagnosing channel health, session issues, config validation, or auth problems
- **Controlling tools** — allowing/denying tools, configuring skills, managing permissions
- **Scaling** — multi-agent setups, multi-account channels, or sandboxing

## Quick Reference

### Essential Commands

| Task | Command |
|------|---------|
| First-time setup | `openclaw setup` or `openclaw onboard --install-daemon` |
| Interactive config | `openclaw configure` or `openclaw config set <path> <value>` |
| Check config validity | `openclaw doctor` or `openclaw config validate` |
| View/edit config | `openclaw config get <path>` or edit `~/.openclaw/openclaw.json` directly |
| Start/stop gateway | `openclaw gateway start` / `stop` / `restart` |
| Check status | `openclaw status` or `openclaw health` |
| List channels | `openclaw channels list` |
| Add channel | `openclaw channels add --channel <name>` |
| List agents | `openclaw agents list --bindings` |
| Add agent | `openclaw agents add <name>` |
| Send message | `openclaw message send --target <dest> --message "text"` |
| Run agent turn | `openclaw agent --message "text" --to <dest>` |
| View logs | `openclaw logs --follow` |
| Open dashboard | `openclaw dashboard` (opens http://127.0.0.1:18789) |

### Config File Locations

| Item | Path |
|------|------|
| Main config | `~/.openclaw/openclaw.json` |
| Workspace (default) | `~/.openclaw/workspace` |
| Agent state | `~/.openclaw/agents/<agentId>/agent` |
| Sessions | `~/.openclaw/agents/<agentId>/sessions` |
| Credentials | `~/.openclaw/credentials` |
| Skills (local) | `~/.openclaw/skills` |
| Workspace skills | `<workspace>/skills` |

### Config Structure (Top-Level Keys)

```json5
{
  agents: { defaults: {...}, list: [...] },
  channels: { whatsapp: {...}, telegram: {...}, discord: {...}, ... },
  bindings: [...],
  session: { dmScope: "...", reset: {...}, ... },
  tools: { allow: [...], deny: [...], profile: "..." },
  skills: { entries: {...}, load: {...} },
  automation: { cron: {...}, hooks: {...}, ... },
  gateway: { port: 18789, auth: {...}, ... },
  models: { providers: {...}, ... },
  web: { ... },
  logging: { ... },
}
```

### Common Config Patterns

**Minimal setup:**
```json5
{
  agents: { defaults: { workspace: "~/.openclaw/workspace" } },
  channels: { whatsapp: { allowFrom: ["+15555550123"] } },
}
```

**Multi-agent with routing:**
```json5
{
  agents: {
    list: [
      { id: "home", workspace: "~/.openclaw/workspace-home" },
      { id: "work", workspace: "~/.openclaw/workspace-work" },
    ],
  },
  bindings: [
    { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
    { agentId: "work", match: { channel: "whatsapp", accountId: "biz" } },
  ],
}
```

**DM isolation (multi-user):**
```json5
{
  session: { dmScope: "per-channel-peer" },
}
```

**Tool restrictions:**
```json5
{
  tools: {
    profile: "messaging",
    allow: ["message", "sessions_list"],
    deny: ["exec", "write"],
  },
}
```

## Decision Guidance

### When to Use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| **Single user, one phone** | `dmScope: "main"` (default) | Shared session = continuity |
| **Multiple people on same gateway** | `dmScope: "per-channel-peer"` | Isolate conversations by sender |
| **One WhatsApp, multiple agents** | Multi-agent + bindings | Route by accountId or peer |
| **Periodic checks (every 30m)** | Heartbeat | Batches multiple checks in one turn |
| **Precise schedule (daily at 9am)** | Cron | Exact timing, isolated session |
| **React to agent events** | Hooks | Trigger on tool calls, resets, etc. |
| **Receive HTTP events** | Webhooks | Inbound HTTP → agent message |
| **Persistent instructions** | Standing Orders | Injected into every turn |
| **Untrusted inputs** | Sandboxing + tool deny | Isolate execution, restrict tools |
| **Fast everyday chat** | Sonnet model | Lower cost, good quality |
| **Deep work / coding** | Opus model | Highest capability |
| **Fallback when primary fails** | Model failover | Automatic retry on different provider |

### Channel Selection

| Channel | Setup Time | Features | Best For |
|---------|-----------|----------|----------|
| **Telegram** | 5 min | Bot token only, groups, media | Fastest setup |
| **WhatsApp** | 10 min | QR pairing, groups, media, reactions | Most popular |
| **Discord** | 10 min | Servers, channels, roles, threads | Communities |
| **Slack** | 10 min | Workspace app, threads, reactions | Teams |
| **Signal** | 15 min | Privacy-focused, DMs only | Secure comms |
| **iMessage** | 15 min | BlueBubbles API, full feature set | Apple ecosystem |
| **Google Chat** | 10 min | Webhook-based, spaces | Google Workspace |
| **Matrix** | 15 min | Self-hosted, decentralized | Privacy-first |

## Workflow

### 1. Initial Setup
1. Install: `npm install -g openclaw@latest` or use install script
2. Run onboarding: `openclaw onboard --install-daemon`
3. Choose model provider (Anthropic, OpenAI, etc.) and enter API key
4. Verify: `openclaw gateway status` and `openclaw dashboard`
5. Send test message in Control UI

### 2. Connect a Channel
1. Choose channel (Telegram is fastest)
2. Get credentials (bot token, QR code, etc.)
3. Run: `openclaw channels add --channel <name>`
4. Verify: `openclaw channels status --probe`
5. Test by sending a message from the app

### 3. Configure Multi-Agent (if needed)
1. Create agents: `openclaw agents add work` and `openclaw agents add home`
2. Create channel accounts: `openclaw channels login --channel whatsapp --account work`
3. Add bindings in config under `bindings: [...]`
4. Restart: `openclaw gateway restart`
5. Verify: `openclaw agents list --bindings`

### 4. Set Up Automation
1. For periodic checks: configure `agents.defaults.heartbeat`
2. For scheduled jobs: use `openclaw cron add --name "daily report" --every "24h" --message "..."`
3. For event-driven: add hooks under `hooks.mappings` in config
4. For webhooks: enable `hooks.enabled: true` and set `token`
5. Test: `openclaw cron run <id>` or trigger manually

### 5. Troubleshoot Issues
1. Check config: `openclaw doctor` (auto-fixes safe issues with `--fix`)
2. Validate syntax: `openclaw config validate`
3. View logs: `openclaw logs --follow`
4. Probe channels: `openclaw channels status --probe`
5. Check session health: `openclaw status --deep`

## Common Gotchas

- **Config won't load**: Run `openclaw doctor --fix` to auto-repair. Check for unknown keys, malformed JSON5, or invalid types.
- **Channel not connecting**: Verify token/credentials are correct. Run `openclaw channels status --probe`. Check logs with `openclaw logs`.
- **Multi-user setup leaking messages**: Set `session.dmScope: "per-channel-peer"` to isolate DMs by sender. Default `"main"` shares one session.
- **Agent not responding**: Check `openclaw status` for model/auth issues. Verify tool policy isn't blocking needed tools. Check `agents.defaults.model` is set.
- **Cron jobs not running**: Verify `cron.enabled: true` in config. Check `openclaw cron list` to see jobs. Run `openclaw cron run <id>` to test manually.
- **Skills not loading**: Run `openclaw skills check` to see missing requirements (bins, env vars, config). Check `metadata.openclaw.requires` in SKILL.md.
- **Sandboxing fails**: Ensure Docker is running. Run `scripts/sandbox-setup.sh` to build the image. Check `agents.defaults.sandbox.mode` is not `"off"`.
- **Hot reload not working**: Config changes apply automatically in `hybrid` mode (default). If a restart is needed, the gateway handles it. Check `gateway.reload.mode` in config.
- **Auth token drift**: If using SecretRef for gateway auth, run `openclaw secrets reload` to refresh. Check `openclaw gateway status` for auth warnings.
- **Session bloat**: Run `openclaw sessions cleanup --dry-run` to preview pruning. Set `session.maintenance.mode: "enforce"` for automatic cleanup.

## Verification Checklist

Before submitting work or declaring a setup complete:

- [ ] Config is valid: `openclaw config validate` returns no errors
- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] At least one channel is connected: `openclaw channels status` shows green
- [ ] Agent can respond: send a test message and get a reply
- [ ] Multi-user isolation (if applicable): `session.dmScope` is set to `"per-channel-peer"` or higher
- [ ] Tool policy is intentional: `tools.allow` and `tools.deny` match your security model
- [ ] Automation is tested: cron jobs run, hooks trigger, webhooks receive events
- [ ] Logs are clean: `openclaw logs --limit 50` shows no repeated errors
- [ ] Backups exist: `openclaw backup create` for state/config
- [ ] Security audit passes: `openclaw security audit` shows no critical issues

## Resources

**Comprehensive navigation:** https://docs.openclaw.ai/llms.txt

**Critical docs:**
1. [Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference) — all config keys and defaults
2. [Channels Overview](https://docs.openclaw.ai/channels) — setup guides for WhatsApp, Telegram, Discord, etc.
3. [Multi-Agent Routing](https://docs.openclaw.ai/concepts/multi-agent) — isolating agents and binding channels
4. [Tools & Plugins](https://docs.openclaw.ai/tools) — what agents can do and how to extend
5. [Automation Overview](https://docs.openclaw.ai/automation) — heartbeat, cron, hooks, webhooks
6. [Troubleshooting](https://docs.openclaw.ai/gateway/troubleshooting) — common errors and fixes

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt