---
name: Clawdbot
description: Use when setting up or managing a self-hosted AI agent gateway, configuring channels (Discord, Telegram, WhatsApp, etc.), managing agent workspaces and sessions, deploying the gateway service, or troubleshooting channel/agent issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted multi-channel gateway for AI agents that runs on any OS (macOS, Linux, Windows). It connects messaging platforms (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Matrix, Microsoft Teams, Google Chat, Feishu, and more) to an embedded agent runtime. The gateway is a single Node.js process that routes messages, manages sessions, handles authentication, and exposes a WebSocket API plus OpenAI-compatible HTTP endpoints.

**Key files and commands:**
- Config: `~/.openclaw/openclaw.json` (JSON5 format)
- Workspace: `~/.openclaw/workspace/` (agent files: `AGENTS.md`, `SOUL.md`, `TOOLS.md`, `IDENTITY.md`, `USER.md`, `BOOTSTRAP.md`)
- CLI: `openclaw` (primary command; see `openclaw --help`)
- Gateway: `openclaw gateway` (start/stop/status/install service)
- Setup: `openclaw onboard` (interactive wizard) or `openclaw setup` (init workspace)
- Dashboard: `openclaw dashboard` (opens Control UI at http://127.0.0.1:18789)

**Primary docs:** https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, onboarding, configuring the gateway, or initializing workspaces
- **Managing channels**: adding/removing/configuring Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Matrix, Teams, Google Chat, Feishu, or other messaging platforms
- **Agent configuration**: defining agent workspaces, system prompts (SOUL.md), tools (TOOLS.md), identity, or user profiles
- **Session and routing**: configuring DM/group policies, multi-agent routing, session scoping, or pairing/allowlists
- **Gateway operations**: starting/stopping the service, checking health, managing logs, or troubleshooting connectivity
- **Tools and skills**: enabling/disabling tools, configuring tool policies, installing skills, or managing plugins
- **Automation**: setting up cron jobs, webhooks, heartbeats, or background tasks
- **Troubleshooting**: diagnosing channel failures, auth issues, session problems, or config validation errors

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Interactive setup | `openclaw onboard --install-daemon` |
| Initialize workspace | `openclaw setup` |
| Open dashboard | `openclaw dashboard` |
| Check gateway status | `openclaw gateway status` |
| Start gateway | `openclaw gateway start` |
| Stop gateway | `openclaw gateway stop` |
| View logs | `openclaw logs --follow` |
| Validate config | `openclaw config validate` |
| Get config value | `openclaw config get agents.defaults.workspace` |
| Set config value | `openclaw config set agents.defaults.model.primary anthropic/claude-sonnet-4-6` |
| Add channel | `openclaw channels add --channel telegram --token $BOT_TOKEN` |
| List channels | `openclaw channels list` |
| Check channel health | `openclaw channels status --probe` |
| Send message | `openclaw message send --target +15555550123 --message "Hi"` |
| Run agent turn | `openclaw agent --to +15555550123 --message "What time is it?"` |
| List agents | `openclaw agents list` |
| Add agent | `openclaw agents add --workspace ~/.openclaw/workspace-work` |
| List skills | `openclaw skills list` |
| Install skill | `openclaw skills install github` |
| Run doctor | `openclaw doctor` |
| Repair config | `openclaw doctor --fix` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      heartbeat: { every: "30m", target: "last" },
      sandbox: { mode: "off" },
      skills: ["github", "weather"],
    },
    list: [
      { id: "main", default: true },
      { id: "work", workspace: "~/.openclaw/workspace-work" },
    ],
  },

  // Channel configuration
  channels: {
    whatsapp: {
      enabled: true,
      dmPolicy: "pairing",
      allowFrom: ["+15555550123"],
      groups: { "*": { requireMention: true } },
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "allowlist",
      allowFrom: ["tg:123"],
    },
    discord: {
      enabled: true,
      botToken: "token",
      dmPolicy: "pairing",
    },
  },

  // Gateway service
  gateway: {
    port: 18789,
    bind: "loopback",
    auth: { token: "secret" },
    reload: { mode: "hybrid" },
  },

  // Session management
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 },
  },

  // Tools and security
  tools: {
    profile: "coding",
    allow: ["group:fs", "browser", "web_search"],
    deny: ["exec"],
  },

  // Automation
  cron: { enabled: true, maxConcurrentRuns: 2 },
  hooks: { enabled: true, token: "webhook-secret" },
}
```

### Workspace files

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory for the agent |
| `SOUL.md` | Persona, boundaries, tone, and character |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `IDENTITY.md` | Agent name, emoji, theme, avatar |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted after completion) |
| `MEMORY.md` | Long-term memory and recall |
| `skills/` | Workspace-local skill definitions |

## Decision guidance

### When to use X vs Y

| Decision | Option A | Option B | Use A when | Use B when |
|----------|----------|----------|-----------|-----------|
| **DM access** | `dmPolicy: "pairing"` | `dmPolicy: "allowlist"` | You want one-time approval codes for new senders | You have a fixed list of allowed numbers/IDs |
| **Group mentions** | `requireMention: true` | `requireMention: false` | You want the agent to respond only when mentioned | You want the agent to respond to all group messages |
| **Session scope** | `dmScope: "per-channel-peer"` | `dmScope: "main"` | Each user gets isolated sessions per channel | All users share one conversation |
| **Tool policy** | `tools.profile: "coding"` | `tools.profile: "minimal"` | Agent needs file I/O, exec, web, and media | Agent should only answer questions (no tools) |
| **Sandbox mode** | `sandbox.mode: "non-main"` | `sandbox.mode: "off"` | Run non-default agents in Docker isolation | Run everything in the host process |
| **Config reload** | `gateway.reload.mode: "hybrid"` | `gateway.reload.mode: "hot"` | Auto-restart on critical changes | Manually restart when needed |
| **Channel health** | `healthMonitor.enabled: true` | `healthMonitor.enabled: false` | Auto-restart stale channels | Manually manage channel restarts |

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
   - Enter API key
   - Configure gateway port and auth
   - Optionally add channels

3. **Verify the gateway is running**
   ```bash
   openclaw gateway status
   openclaw health
   ```

4. **Open the dashboard**
   ```bash
   openclaw dashboard
   ```
   - Test chat in the Control UI

5. **Add a channel** (if not done during onboarding)
   ```bash
   openclaw channels add --channel telegram --token $BOT_TOKEN
   openclaw channels status --probe
   ```

6. **Customize the workspace**
   - Edit `~/.openclaw/workspace/SOUL.md` for agent personality
   - Edit `~/.openclaw/workspace/AGENTS.md` for instructions
   - Edit `~/.openclaw/workspace/USER.md` for user profile

7. **Configure DM/group policies** in `~/.openclaw/openclaw.json`
   ```json5
   {
     channels: {
       whatsapp: {
         allowFrom: ["+15555550123"],
         groups: { "*": { requireMention: true } },
       },
     },
   }
   ```

8. **Reload config** (automatic in hybrid mode)
   ```bash
   openclaw config validate
   ```

9. **Test from a channel**
   - Send a message to the bot on Telegram, WhatsApp, Discord, etc.
   - Verify the agent responds

### Troubleshooting workflow

1. **Check gateway health**
   ```bash
   openclaw gateway status --deep
   openclaw health --verbose
   ```

2. **Review logs**
   ```bash
   openclaw logs --follow
   openclaw logs --limit 500 --json
   ```

3. **Validate config**
   ```bash
   openclaw config validate
   openclaw doctor
   ```

4. **Check channel status**
   ```bash
   openclaw channels status --probe
   openclaw channels logs --channel telegram
   ```

5. **Restart the gateway**
   ```bash
   openclaw gateway restart
   ```

6. **Run deep diagnostics**
   ```bash
   openclaw doctor --deep --repair
   openclaw security audit --deep
   ```

## Common gotchas

- **Config validation is strict**: Unknown keys, malformed types, or invalid values cause the gateway to refuse to start. Run `openclaw doctor --fix` to repair.
- **Workspace must exist**: `agents.defaults.workspace` must point to a valid directory. Use `openclaw setup` to initialize it.
- **Channel tokens are required**: Each channel needs its auth token/credentials in config. Missing tokens cause the channel to fail silently.
- **DM policy defaults to pairing**: New senders get a one-time pairing code. Use `dmPolicy: "allowlist"` with `allowFrom` to restrict to specific numbers.
- **Group messages require mention by default**: Set `requireMention: false` in group config if you want the agent to respond to all messages.
- **Session reset clears history**: Daily resets at `atHour: 4` delete old sessions. Adjust `reset.mode` or `reset.idleMinutes` if you need longer retention.
- **Hot reload doesn't restart for all changes**: Gateway port, bind mode, auth, and plugin changes require a manual restart. Use `gateway.reload.mode: "restart"` to auto-restart on any change.
- **Sandbox requires Docker**: `sandbox.mode: "non-main"` requires Docker to be installed and running. Use `sandbox.mode: "off"` if Docker is unavailable.
- **Skills must be installed**: Skills are not auto-loaded. Use `openclaw skills install <name>` or add them to `agents.defaults.skills` in config.
- **Multi-agent routing requires bindings**: Adding agents with `openclaw agents add` doesn't automatically route channels to them. Use `openclaw agents bind --agent <id> --bind <channel>` to connect them.
- **Secrets in config are not encrypted**: Store sensitive values in env vars or use SecretRef objects (`source: "env"`, `source: "file"`, `source: "exec"`).
- **Pairing codes expire**: One-time pairing codes are short-lived. If a user misses the window, they must request a new code.
- **Channel health monitor can restart channels aggressively**: If a channel looks stale, the gateway auto-restarts it. Disable with `healthMonitor.enabled: false` if this causes issues.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config is valid: `openclaw config validate` returns no errors
- [ ] Gateway is running: `openclaw gateway status` shows `Runtime: running`
- [ ] Channels are healthy: `openclaw channels status --probe` shows all channels as `works` or `ok`
- [ ] Workspace exists: `ls -la ~/.openclaw/workspace/` shows `AGENTS.md`, `SOUL.md`, etc.
- [ ] Agent can respond: Send a test message via the dashboard or a connected channel
- [ ] Logs are clean: `openclaw logs --limit 50` shows no `ERROR` or `FATAL` entries
- [ ] DM/group policies are correct: Test with a new sender (pairing code) and a group mention
- [ ] Tools are enabled: `openclaw config get tools.allow` matches your intended policy
- [ ] Skills are installed: `openclaw skills list` shows expected skills as `ready`
- [ ] Multi-agent routing works (if applicable): `openclaw agents list` and `openclaw agents bindings` show correct mappings
- [ ] Cron jobs are running (if applicable): `openclaw cron list` shows expected jobs as `enabled`

## Resources

**Comprehensive navigation:** https://docs.openclaw.ai/llms.txt

**Critical documentation pages:**
- [Getting Started](https://docs.openclaw.ai/start/getting-started) — installation and first chat
- [Gateway Configuration](https://docs.openclaw.ai/gateway/configuration) — config overview and common tasks
- [Channels](https://docs.openclaw.ai/channels) — setup for Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Teams, Google Chat, Feishu, and more

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt