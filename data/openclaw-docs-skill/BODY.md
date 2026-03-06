---
name: Clawdbot
description: Use when setting up, configuring, or managing a self-hosted AI agent gateway that connects messaging platforms (WhatsApp, Telegram, Discord, Slack, iMessage, etc.) to coding agents. Reach for this skill when working with agent configuration, channel setup, tool management, security policies, automation workflows, or troubleshooting agent behavior.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted gateway that connects your favorite chat apps (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, Google Chat, Mattermost, and more) to AI coding agents. You run a single Gateway process on your own machine or server, and it becomes the bridge between your messaging apps and an always-available AI assistant. The agent is embedded using the pi SDK and runs with full tool access (shell, browser, file operations, web search) in isolated sessions per user/group.

**Key files and paths:**
- Config: `~/.openclaw/openclaw.json` (JSON5 format, optional)
- State directory: `~/.openclaw/` (credentials, sessions, config)
- Agent workspace: `~/.openclaw/workspace` (agent memory, AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, HEARTBEAT.md)
- Sessions: `~/.openclaw/agents/<agentId>/sessions/`

**Primary CLI:** `openclaw` (Node 22+)

**Primary docs:** https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw:** Running `openclaw onboard` or `openclaw setup` for initial configuration
- **Connecting channels:** Adding WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Configuring agents:** Setting up multi-agent routing, workspaces, or per-agent tool policies
- **Managing tools and skills:** Installing skills, enabling/disabling tools, configuring tool access
- **Automating workflows:** Setting up cron jobs, hooks, webhooks, or heartbeat automation
- **Securing the bot:** Configuring allowlists, pairing, sandboxing, elevated permissions, or security policies
- **Troubleshooting:** Diagnosing channel issues, session problems, or agent behavior
- **Deploying:** Running OpenClaw in Docker, on VPS, or with remote Gateway access

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard` |
| View/edit config | `openclaw configure` |
| Add a channel | `openclaw channels add --channel <name>` |
| List channels | `openclaw channels list` |
| Check health | `openclaw health` or `openclaw status --deep` |
| View sessions | `openclaw sessions list` |
| Add cron job | `openclaw cron add --name "Job" --cron "0 7 * * *" --message "..."` |
| Manage plugins | `openclaw plugins list`, `openclaw plugins install <spec>` |
| Security audit | `openclaw security audit` |
| Troubleshoot | `openclaw doctor` |
| View logs | `openclaw logs --lines 100` |

### Configuration structure (openclaw.json)

```json5
{
  // Channels: WhatsApp, Telegram, Discord, Slack, Signal, iMessage, etc.
  channels: {
    whatsapp: {
      enabled: true,
      dmPolicy: "pairing",        // pairing | allowlist | open | disabled
      groupPolicy: "allowlist",
      allowFrom: ["..."],         // DM allowlist
      groups: { "...": { ... } }  // Group config
    }
  },
  
  // Agent defaults
  agents: {
    defaults: {
      model: { primary: "claude-opus-4-1" },
      workspace: "~/.openclaw/workspace",
      sandbox: { enabled: false }  // Docker isolation
    },
    list: [
      { id: "main", default: true, workspace: "~/.openclaw/workspace" }
    ]
  },
  
  // Tool access control
  tools: {
    exec: { enabled: true },
    browser: { enabled: true },
    elevated: { enabled: false, allowFrom: { whatsapp: ["..."] } }
  },
  
  // Automation
  cron: { enabled: true, maxConcurrentRuns: 2 },
  hooks: { enabled: true },
  
  // Model providers
  models: {
    providers: {
      anthropic: { apiKey: "$ANTHROPIC_API_KEY" }
    }
  }
}
```

### Workspace files (agent memory)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Agent instructions and behavior |
| `SOUL.md` | Agent personality and values |
| `TOOLS.md` | Environment-specific tool notes |
| `IDENTITY.md` | Agent identity and context |
| `USER.md` | User identity and preferences |
| `HEARTBEAT.md` | Periodic background tasks |
| `BOOTSTRAP.md` | One-time startup instructions (created once) |
| `memory/YYYY-MM-DD.md` | Daily memory notes |
| `MEMORY.md` | Long-term curated memory |

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| **DM access control** | `dmPolicy: "pairing"` | Unknown senders get a code; you approve them once |
| | `dmPolicy: "allowlist"` | Only listed users can DM; stricter but requires manual config |
| | `dmPolicy: "open"` | Public inbound; only use if you fully trust all senders |
| **Group access** | `groupPolicy: "allowlist"` | Only listed groups can trigger the bot; recommended |
| | `groupPolicy: "open"` | Any group can trigger; use only for public bots |
| **Tool isolation** | `sandbox: { enabled: false }` | Tools run on host; faster, full access, less safe |
| | `sandbox: { enabled: true }` | Tools run in Docker; isolated, slower, safer |
| **Elevated exec** | `tools.elevated.enabled: false` | Sandboxed agents cannot run on host; safest |
| | `tools.elevated.enabled: true` | Sandboxed agents can escape to host with approval; use sparingly |
| **Session scope** | `dmScope: "main"` | All DMs share one session; continuity across senders |
| | `dmScope: "per-channel-peer"` | Each sender gets isolated session per channel; recommended for multi-user |
| **Automation** | Cron jobs | Precise timing (e.g., 7am daily); isolated sessions |
| | Heartbeat (HEARTBEAT.md) | Every 30 min check; runs in main session; lightweight |
| | Hooks | Event-driven (e.g., on /new, /reset); custom logic |
| **Multi-agent** | Routing via bindings | Route different channels/accounts to different agents |
| | Sub-agents | One agent spawns another for a subtask; token-heavy |

## Workflow

### Typical task: Set up OpenClaw with WhatsApp and security

1. **Initialize the Gateway**
   - Run `openclaw onboard` (guided setup) or `openclaw setup` (manual)
   - Choose local or remote Gateway mode
   - Select your primary model (e.g., Claude Opus)

2. **Add WhatsApp channel**
   - Run `openclaw channels add --channel whatsapp`
   - Scan QR code to pair WhatsApp Web
   - Verify with `openclaw channels status`

3. **Lock down access**
   - Edit `~/.openclaw/openclaw.json`
   - Set `channels.whatsapp.dmPolicy: "pairing"` (default)
   - Set `channels.whatsapp.groupPolicy: "allowlist"`
   - Add allowed group IDs to `channels.whatsapp.groups`

4. **Configure agent workspace**
   - Review `~/.openclaw/workspace/AGENTS.md` (agent instructions)
   - Edit `IDENTITY.md` to set agent name/role
   - Add `TOOLS.md` notes for your environment

5. **Enable tools selectively**
   - Keep `tools.exec.enabled: true` for shell access
   - Set `tools.elevated.enabled: false` unless you need host escape
   - Configure `tools.exec.safeBins` for allowlisted commands

6. **Test and verify**
   - Run `openclaw health` to check Gateway status
   - Send a test message in WhatsApp
   - Check `openclaw logs --lines 50` for errors
   - Run `openclaw security audit` to find misconfigurations

7. **Deploy (optional)**
   - For Docker: `./docker-setup.sh` (containerized Gateway)
   - For VPS: Follow platform-specific guide (Hetzner, DigitalOcean, Fly, Railway, etc.)
   - For remote access: Set up Tailscale or configure `gateway.bind`

### Typical task: Add a cron job for daily briefing

1. **Create the job**
   ```bash
   openclaw cron add \
     --name "Morning briefing" \
     --cron "0 7 * * *" \
     --session isolated \
     --message "Summarize today's priorities" \
     --announce
   ```

2. **Verify it's scheduled**
   ```bash
   openclaw cron list
   ```

3. **Check logs after first run**
   ```bash
   openclaw logs --lines 100 | grep "cron"
   ```

### Typical task: Set up multi-agent routing

1. **Create agent workspaces**
   ```bash
   mkdir -p ~/.openclaw/workspace-home ~/.openclaw/workspace-work
   ```

2. **Configure in openclaw.json**
   ```json5
   {
     agents: {
       list: [
         { id: "home", default: true, workspace: "~/.openclaw/workspace-home" },
         { id: "work", workspace: "~/.openclaw/workspace-work" }
       ]
     },
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "work" } }
     ]
   }
   ```

3. **Restart Gateway**
   ```bash
   openclaw gateway restart
   ```

4. **Verify routing**
   ```bash
   openclaw agents list
   openclaw status
   ```

## Common gotchas

- **Workspace is not a sandbox by default.** Tools resolve relative paths against `~/.openclaw/workspace`, but absolute paths can still reach elsewhere on the host unless `agents.defaults.sandbox.enabled: true`. Keep the workspace private.

- **Session scope affects continuity.** With `dmScope: "main"` (default), all DMs share one session. With `dmScope: "per-channel-peer"`, each sender gets isolated history. Choose based on whether you want cross-sender context.

- **Pairing codes expire.** When `dmPolicy: "pairing"`, unknown senders get a code. Codes rotate; if a user doesn't approve within the window, they must request a new code.

- **Group allowlists are separate from DM allowlists.** Setting `channels.whatsapp.allowFrom` does not auto-allow groups. You must also configure `channels.whatsapp.groups` or set `groupPolicy: "open"`.

- **Elevated mode requires explicit allowlist.** Even if `tools.elevated.enabled: true`, only senders in `tools.elevated.allowFrom.<channel>` can use `/elevated on`. Leaving it empty blocks everyone.

- **Sandbox workspace is separate from agent workspace.** When sandboxing is enabled, tools operate in `~/.openclaw/sandboxes/<agentId>/`, not your configured workspace. Set `agents.defaults.sandbox.workspaceAccess: "rw"` to mount the agent workspace inside the sandbox.

- **Config changes require Gateway restart.** Most changes to `openclaw.json` (channels, tools, plugins) require `openclaw gateway restart` to take effect. CLI commands like `openclaw channels add` auto-restart.

- **Memory is Markdown files, not a database.** The agent only "remembers" what gets written to disk in `memory/` or `MEMORY.md`. Use memory tools to search and update files; they are the source of truth.

- **Model failover is per-provider.** If your primary model fails, OpenClaw tries `agents.defaults.model.fallbacks` in order. If all fail, the agent cannot run. Set fallbacks to different providers (e.g., OpenAI as fallback for Anthropic).

- **Plugins run in-process.** Treat plugins as trusted code. Only install from sources you trust. Prefer pinned versions (`@scope/pkg@1.2.3`). Review the unpacked code before enabling.

- **Cron jobs in isolated sessions don't carry over history.** Each cron run starts fresh. Use `session: "main"` if you need conversation continuity, but this spams your main chat.

- **Browser tool requires a running browser.** If `tools.browser.enabled: true` but no browser is running, the first `browser` call will start one. This can be slow; pre-start with `openclaw browser start`.

- **Exec approvals are per-sender.** When `tools.exec.approvals.enabled: true`, each sender must approve commands once per session. Approvals are not shared across senders.

## Verification checklist

Before submitting work or deploying:

- [ ] Run `openclaw doctor` and fix any warnings
- [ ] Run `openclaw security audit` and review findings
- [ ] Test channel connectivity: `openclaw channels status --probe`
- [ ] Verify agent workspace exists and contains AGENTS.md, SOUL.md, TOOLS.md
- [ ] Check that config is valid JSON5: `openclaw configure` (no errors)
- [ ] Confirm model is set and reachable: `openclaw models list`
- [ ] Test a message in each configured channel
- [ ] Verify session isolation: `openclaw sessions list` shows expected session keys
- [ ] Check logs for errors: `openclaw logs --lines 50 | grep -i error`
- [ ] If using cron, verify job is listed: `openclaw cron list`
- [ ] If using plugins, verify they load: `openclaw plugins list` (no errors)
- [ ] If using sandbox, test tool execution: `openclaw sandbox explain` shows correct mode
- [ ] If using multi-agent, verify bindings route correctly: send test messages to each agent

## Resources

**Comprehensive navigation:** https://docs.openclaw.ai/llms.txt

**Critical documentation pages:**
- [Configuration Guide](https://docs.openclaw.ai/gateway/configuration) — task-oriented setup for channels, tools, automation
- [Security Hardening](https://docs.openclaw.ai/gateway/security/index) — allowlists, pairing, sandboxing, audit checklist
- [Multi-Agent Routing](https://docs.openclaw.ai/concepts/multi-agent) — isolated agents, workspace routing, per-agent tool policies

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt