---
name: Clawdbot
description: Use when deploying or managing a self-hosted AI agent gateway, configuring messaging channels (WhatsApp, Telegram, Discord, etc.), setting up multi-agent routing, managing skills and tools, or troubleshooting gateway operations and channel connectivity.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted WebSocket gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, Signal, Slack, and more) to AI agents. A single Gateway process runs on your machine or server and routes inbound messages to an embedded agent runtime with tool support, sessions, memory, and multi-agent isolation. Configuration lives in `~/.openclaw/openclaw.json` (JSON5 format). Key CLI commands: `openclaw onboard` (setup), `openclaw gateway` (run/manage), `openclaw config` (edit), `openclaw channels` (manage accounts), `openclaw agent` (run a turn), `openclaw skills` (install/list). Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Deploying OpenClaw**: installing, configuring the Gateway, setting up auth, managing the daemon service
- **Connecting channels**: adding WhatsApp, Telegram, Discord, or other messaging platforms; managing multiple accounts per channel
- **Configuring agents**: setting models, tools, sandboxing, session scope, heartbeat, cron jobs, or multi-agent routing
- **Managing skills**: installing from ClawHub, creating custom skills, gating by environment/config, or troubleshooting skill eligibility
- **Troubleshooting**: diagnosing channel connectivity, config validation errors, pairing issues, or gateway health
- **Operating the Gateway**: monitoring health, viewing logs, managing sessions, or restarting services

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Edit config interactively | `openclaw configure` or `openclaw config set <path> <value>` |
| View config | `openclaw config get <path>` |
| Validate config | `openclaw config validate` |
| Gateway status | `openclaw gateway status` |
| Start/stop Gateway | `openclaw gateway start` / `stop` |
| View logs | `openclaw logs --follow` |
| Open dashboard | `openclaw dashboard` |
| Add a channel | `openclaw channels add --channel <name>` |
| List channels | `openclaw channels list` |
| Run one agent turn | `openclaw agent --message "text"` |
| List skills | `openclaw skills list` |
| Install skill | `openclaw skills install <slug>` |
| Health check | `openclaw health` |
| Diagnose issues | `openclaw doctor` |

### Config file locations and structure

- **Main config**: `~/.openclaw/openclaw.json` (JSON5; optional; hot-reloads by default)
- **Workspace**: `~/.openclaw/workspace/` (agent files: `AGENTS.md`, `SOUL.md`, `TOOLS.md`, `IDENTITY.md`, `USER.md`, `BOOTSTRAP.md`)
- **Sessions**: `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl`
- **Skills**: `~/.openclaw/skills/` (managed), `<workspace>/skills/` (per-agent), `~/.agents/skills/` (personal)
- **State**: `~/.openclaw/state/` (pairing, device tokens, etc.)

### Config schema essentials

```json5
{
  // Gateway server
  gateway: {
    port: 18789,                    // default loopback
    bind: "loopback",               // loopback | lan | tailnet | auto | custom
    auth: { token: "..." },         // optional auth token
    reload: { mode: "hybrid" },     // hot-reload config changes
  },
  
  // Agent defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      models: { "anthropic/claude-sonnet-4-6": { alias: "Sonnet" } },
    },
    list: [
      { id: "main", default: true, workspace: "~/.openclaw/workspace" },
    ],
  },
  
  // Channels (WhatsApp, Telegram, Discord, etc.)
  channels: {
    whatsapp: {
      enabled: true,
      dmPolicy: "pairing",          // pairing | allowlist | open | disabled
      allowFrom: ["+15555550123"],
      groups: { "*": { requireMention: true } },
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing",
    },
  },
  
  // Sessions
  session: {
    dmScope: "per-channel-peer",    // main | per-peer | per-channel-peer
    reset: { mode: "daily", atHour: 4 },
  },
  
  // Skills
  skills: {
    entries: {
      "image-lab": { enabled: true, apiKey: "..." },
    },
  },
  
  // Automation
  cron: { enabled: true },
  hooks: { enabled: true, token: "..." },
}
```

### Channel setup patterns

All channels follow this pattern:

```json5
{
  channels: {
    <provider>: {
      enabled: true,
      botToken: "...",              // or other auth (WhatsApp uses QR)
      dmPolicy: "pairing",          // pairing | allowlist | open | disabled
      allowFrom: ["id:123"],        // for allowlist/open
      groups: { "*": { requireMention: true } },
    },
  },
}
```

Supported channels: `whatsapp`, `telegram`, `discord`, `slack`, `signal`, `imessage`, `googlechat`, `mattermost`, `msteams`, `matrix`, `irc`, `line`, `tlon`, `nostr`, `twitch`, `zalo`, `zalouser`, `feishu`, `qqbot`, `bluebubbles`, `nextcloud-talk`, `synology-chat`

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **DM policy** | `pairing` (default) | Unknown senders get one-time approval code | `allowlist` | Only pre-approved senders can DM |
| | `open` | Allow all DMs (requires `allowFrom: ["*"]`) | `disabled` | Ignore all DMs |
| **Session scope** | `main` | All users share one session | `per-peer` | Each user gets their own session |
| | `per-channel-peer` | Isolation per channel + user (recommended) | `per-account-channel-peer` | Isolation per account + channel + user |
| **Reload mode** | `hybrid` (default) | Auto-restart for critical changes | `hot` | Only hot-apply safe changes; warn on restarts needed |
| | `restart` | Restart on any config change | `off` | Manual restart only |
| **Sandbox mode** | `off` | No sandboxing (default) | `non-main` | Sandbox non-main sessions only |
| | `all` | Sandbox all sessions | — | — |
| **Multi-agent** | Single agent | One workspace, one session scope | Multiple agents | Separate workspaces + bindings per channel/account |

## Workflow

### 1. Initial setup and deployment

1. **Install OpenClaw**: `npm install -g openclaw@latest` or use platform-specific installer
2. **Run onboarding**: `openclaw onboard --install-daemon` — choose model provider, set API key, configure Gateway auth
3. **Verify Gateway**: `openclaw gateway status` — should show listening on port 18789
4. **Open dashboard**: `openclaw dashboard` — test chat in the Control UI
5. **Check config**: `openclaw config get agents.defaults.workspace` — confirm workspace path

### 2. Connect a messaging channel

1. **Choose channel**: Telegram is fastest (just a bot token); WhatsApp requires QR scan
2. **Add channel**: `openclaw channels add --channel telegram --token <BOT_TOKEN>`
3. **Verify**: `openclaw channels status` — should show connected
4. **Test**: Send a message to the bot; check logs with `openclaw logs --follow`
5. **Configure access**: Edit `~/.openclaw/openclaw.json` to set `dmPolicy` and `allowFrom` if needed

### 3. Configure multi-agent routing

1. **Create second workspace**: `mkdir -p ~/.openclaw/workspace-work`
2. **Edit config**: Add to `agents.list` and `bindings`:
   ```json5
   {
     agents: {
       list: [
         { id: "home", default: true, workspace: "~/.openclaw/workspace-home" },
         { id: "work", workspace: "~/.openclaw/workspace-work" },
       ],
     },
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "biz" } },
     ],
   }
   ```
3. **Restart Gateway**: `openclaw gateway restart` (or auto-restart in hybrid mode)
4. **Verify**: `openclaw agents list` — should show both agents

### 4. Install and manage skills

1. **Search ClawHub**: `openclaw skills search "image"`
2. **Install skill**: `openclaw skills install <slug>` — installs to `<workspace>/skills/`
3. **List eligible skills**: `openclaw skills list --eligible` — shows ready skills
4. **Check requirements**: `openclaw skills check` — shows missing bins/env vars
5. **Configure skill**: Edit `~/.openclaw/openclaw.json` under `skills.entries.<name>` to set API keys or env vars

### 5. Troubleshoot and diagnose

1. **Run doctor**: `openclaw doctor` — scans config, gateway, channels for issues
2. **View logs**: `openclaw logs --follow` — tail real-time logs
3. **Check channel health**: `openclaw channels status --probe` — test connectivity
4. **Validate config**: `openclaw config validate` — check schema compliance
5. **Inspect session**: `openclaw sessions list` — show active sessions
6. **Test agent**: `openclaw agent --message "test"` — run one turn locally

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor --fix` to auto-repair common issues.
- **Hot reload doesn't restart for all changes**: Gateway server settings (`gateway.port`, `gateway.bind`, `gateway.auth`) require manual restart. Use `hybrid` mode (default) for auto-restart on critical changes.
- **Skills snapshot is per-session**: Skill changes take effect on the next new session, not mid-conversation. Restart the session or wait for a new one.
- **DM pairing codes expire**: Pairing requests are one-time use and expire after a short window. If a user doesn't approve in time, they must request again.
- **Group mention gating is required by default**: Groups require the agent to be mentioned unless `requireMention: false` is set per channel. Text patterns in `mentionPatterns` are regex-safe but must be simple.
- **Workspace files are injected once per session**: `AGENTS.md`, `SOUL.md`, etc. are read at session start. Changes mid-session don't take effect until the next session.
- **Model refs must include provider**: Use `provider/model` format (e.g., `anthropic/claude-sonnet-4-6`). Omitting the provider only works for aliases.
- **Secrets in config are plaintext by default**: Use SecretRef objects (`{ source: "env", provider: "default", id: "VAR_NAME" }`) to avoid storing API keys in the config file.
- **Sandboxing requires Docker**: If `sandbox.mode` is not `off`, Docker must be installed and the sandbox image must be built with `scripts/sandbox-setup.sh`.
- **Channel auth tokens are not validated at config load time**: Invalid tokens are discovered when the channel tries to connect. Check logs for auth errors.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config validates: `openclaw config validate` returns no errors
- [ ] Gateway is running: `openclaw gateway status` shows "listening"
- [ ] At least one channel is connected: `openclaw channels status` shows green
- [ ] Agent can run a turn: `openclaw agent --message "test"` completes without error
- [ ] Workspace files exist: `ls ~/.openclaw/workspace/` shows `AGENTS.md`, `SOUL.md`, etc.
- [ ] Skills are eligible: `openclaw skills list --eligible` shows expected skills
- [ ] No unresolved secrets: `openclaw secrets audit` shows no missing refs (if using SecretRef)
- [ ] Logs are clean: `openclaw logs --limit 50` shows no repeated errors
- [ ] Multi-agent bindings are correct (if applicable): `openclaw agents bindings` matches intended routing
- [ ] Session scope matches use case: `openclaw config get session.dmScope` is appropriate for your setup

## Resources

- **Comprehensive page listing**: https://docs.openclaw.ai/llms.txt
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **Channel setup guides**: https://docs.openclaw.ai/channels (WhatsApp, Telegram, Discord, etc.)
- **Multi-agent routing**: https://docs.openclaw.ai/concepts/multi-agent
- **Skills and ClawHub**: https://docs.openclaw.ai/tools/clawhub
- **Troubleshooting**: https://docs.openclaw.ai/help/troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt