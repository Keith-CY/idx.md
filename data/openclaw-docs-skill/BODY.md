---
name: Clawdbot
description: Use when deploying, configuring, or troubleshooting OpenClaw — a self-hosted multi-channel AI gateway. Reach for this skill when agents need to set up channels (WhatsApp, Telegram, Discord, etc.), configure models and authentication, manage sessions and memory, create custom skills, or debug gateway/channel issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, and more) to embedded AI agents. It runs on any OS (macOS, Linux, Windows) and uses the pi-mono SDK for agent runtime. The primary config file is `~/.openclaw/openclaw.json` (JSON5 format). Key CLI entry point: `openclaw` (install via `npm install -g openclaw@latest` or the install script). The gateway runs as a service or foreground process and exposes a WebSocket API plus a browser Control UI at `http://127.0.0.1:18789/` by default. Sessions are stored as JSONL transcripts under `~/.openclaw/agents/<agentId>/sessions/`. See the full docs at https://docs.openclaw.ai.

## When to use

Reach for this skill when:

- **Setting up OpenClaw**: installing, running `openclaw onboard`, configuring the gateway, or installing as a service
- **Connecting channels**: pairing WhatsApp, Telegram, Discord, Slack, Signal, iMessage, or other messaging platforms
- **Configuring models**: setting primary/fallback models, managing auth profiles, switching between providers (Anthropic, OpenAI, etc.)
- **Managing sessions**: understanding session scoping, resetting conversations, enabling secure DM mode for multi-user setups
- **Creating custom skills**: writing SKILL.md files, adding tools, or publishing to ClawHub
- **Automation**: setting up cron jobs, webhooks, hooks, or heartbeat check-ins
- **Troubleshooting**: diagnosing channel issues, auth failures, context overflow, or gateway connectivity
- **Multi-agent routing**: running isolated agents with separate workspaces and bindings
- **Sandboxing**: enabling Docker-based execution isolation for agent runs

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Install | `npm install -g openclaw@latest` or `curl -fsSL https://openclaw.ai/install.sh \| bash` |
| First-time setup | `openclaw onboard --install-daemon` |
| Start gateway | `openclaw gateway --port 18789` or `openclaw gateway start` (if service installed) |
| Check status | `openclaw status` or `openclaw health` |
| Open Control UI | `openclaw dashboard` or visit `http://127.0.0.1:18789/` |
| Configure interactively | `openclaw configure` or `openclaw config set <path> <value>` |
| Add a channel | `openclaw channels add --channel <name>` |
| List sessions | `openclaw sessions --json` |
| Send a test message | `openclaw message send --target +15555550123 --message "Hi"` |
| Run an agent turn | `openclaw agent --message "Your prompt"` |
| View logs | `openclaw logs --follow` |
| Diagnose issues | `openclaw doctor` or `openclaw doctor --fix` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-5" },
      models: { /* catalog */ },
      sandbox: { mode: "off" },
      heartbeat: { every: "30m" },
    },
    list: [ /* multi-agent configs */ ],
  },
  
  // Channel connections
  channels: {
    whatsapp: { allowFrom: ["+15555550123"], groups: { "*": { requireMention: true } } },
    telegram: { botToken: "...", dmPolicy: "pairing" },
    discord: { token: "...", dmPolicy: "pairing" },
    // ... other channels
  },
  
  // Session management
  session: {
    dmScope: "per-channel-peer", // or "main", "per-peer", "per-account-channel-peer"
    reset: { mode: "daily", atHour: 4 },
    maintenance: { mode: "enforce", pruneAfter: "30d", maxEntries: 500 },
  },
  
  // Gateway server
  gateway: {
    port: 18789,
    bind: "loopback", // or "lan", "tailnet", "auto", "custom"
    auth: { mode: "token", token: "..." },
    reload: { mode: "hybrid" },
  },
  
  // Automation
  cron: { enabled: true, maxConcurrentRuns: 2 },
  hooks: { enabled: true, token: "..." },
  
  // Tools and skills
  tools: { exec: { applyPatch: true }, web: { search: { apiKey: "..." } } },
  skills: { entries: { /* skill config */ } },
}
```

### Workspace files (injected into agent context)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions, memory, and guidelines |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained notes on tool usage conventions |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `USER.md` | User profile, preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted after completion) |
| `skills/*/SKILL.md` | Custom skill definitions with frontmatter metadata |

### Key paths and directories

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config file |
| `~/.openclaw/workspace/` | Default agent workspace |
| `~/.openclaw/agents/<agentId>/sessions/` | Session store and transcripts |
| `~/.openclaw/agents/<agentId>/agent/auth-profiles.json` | Per-agent auth credentials |
| `~/.openclaw/skills/` | Shared skills (managed via clawhub) |
| `<workspace>/skills/` | Workspace-local skills |
| `~/.openclaw/.env` | Global env var fallback |

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **Session scope** | Single user, all DMs share context | Multiple users, isolate per sender |
| `dmScope: "main"` | Personal assistant, continuity across devices | `dmScope: "per-channel-peer"` | Shared inbox, privacy between users |
| **Reset mode** | Predictable daily reset at 4 AM | Idle-based reset after inactivity |
| `mode: "daily"` | Consistent schedule, long conversations | `mode: "idle"` + `idleMinutes: 120` | Frequent short chats, memory cleanup |
| **Sandbox mode** | Untrusted input, strict isolation needed | Trusted local use, performance priority |
| `sandbox.mode: "all"` | Hook-driven agents, webhook payloads | `sandbox.mode: "off"` | Personal use, full filesystem access |
| **Channel policy** | Known senders, security priority | Open access, convenience priority |
| `dmPolicy: "pairing"` | Approve new senders one-time | `dmPolicy: "open"` + `allowFrom: ["*"]` | Public bot, no approval needed |
| **Skill location** | Shared across agents, version-managed | Agent-specific, local iteration |
| `~/.openclaw/skills/` | Published via clawhub, reusable | `<workspace>/skills/` | Custom, workspace-local |
| **Model failover** | High availability, cost optimization | Single provider, simplicity |
| `fallbacks: [...]` | Rotate on auth/rate-limit failures | `primary` only | Dedicated quota, no rotation |

## Workflow

### 1. Initial setup

1. **Install**: Run `npm install -g openclaw@latest` or the install script.
2. **Onboard**: Run `openclaw onboard --install-daemon` to configure auth, gateway, and channels interactively.
3. **Verify**: Check `openclaw status` and open the Control UI at `http://127.0.0.1:18789/`.
4. **Test**: Send a message via a paired channel or use `openclaw agent --message "test"`.

### 2. Configure a channel

1. **Choose channel**: Decide which messaging platform (WhatsApp, Telegram, Discord, etc.).
2. **Get credentials**: Obtain bot token, API key, or pairing code from the platform.
3. **Add channel**: Run `openclaw channels add --channel <name>` or edit `channels.<name>` in config.
4. **Set policy**: Configure `dmPolicy` (pairing/allowlist/open) and `allowFrom` list.
5. **Verify**: Run `openclaw channels status` to confirm connection.

### 3. Set up models and auth

1. **List available**: Run `openclaw models list` to see configured models.
2. **Add auth**: Run `openclaw models auth add --provider <name>` to paste an API key.
3. **Set primary**: Run `openclaw models set <provider/model>` or edit `agents.defaults.model.primary`.
4. **Add fallbacks**: Run `openclaw models fallbacks add <model>` for failover.
5. **Verify**: Run `openclaw models status --probe` to test live auth.

### 4. Create a custom skill

1. **Create directory**: `mkdir -p ~/.openclaw/workspace/skills/my-skill`
2. **Write SKILL.md**: Add frontmatter (name, description) and Markdown instructions.
3. **Define tools** (optional): List tool calls in frontmatter or instruct the agent to use existing tools.
4. **Refresh**: Restart the gateway or ask the agent to "refresh skills".
5. **Test**: Send a message that triggers the skill and verify behavior.

### 5. Enable automation (cron/hooks)

1. **Enable cron**: Set `cron.enabled: true` in config.
2. **Add job**: Run `openclaw cron add --name "Daily brief" --cron "0 7 * * *" --message "..."`.
3. **Enable hooks**: Set `hooks.enabled: true` and define hook handlers.
4. **Test**: Run `openclaw cron run <jobId>` to trigger manually.

### 6. Troubleshoot issues

1. **Check status**: Run `openclaw status --deep` to probe channels and gateway.
2. **Run doctor**: Run `openclaw doctor` to scan for config/service issues.
3. **View logs**: Run `openclaw logs --follow` to tail real-time logs.
4. **Inspect session**: Send `/status` in chat to see session context and token usage.
5. **Validate config**: Run `openclaw config validate` to catch schema errors.

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the gateway to refuse startup. Run `openclaw doctor --fix` to auto-repair common issues.
- **Session keys are stable**: Deleting a session entry from `sessions.json` is safe; it recreates on the next message. Deleting the JSONL transcript is permanent.
- **DM scope affects privacy**: Default `dmScope: "main"` shares all DMs in one session. For multi-user setups, set `dmScope: "per-channel-peer"` to isolate per sender.
- **Model refs require provider prefix**: Use `provider/model` format (e.g., `anthropic/claude-sonnet-4-5`). Omitting the provider only works for aliases.
- **Workspace files are injected once per session**: Changes to `AGENTS.md`, `SOUL.md`, etc. take effect on the next session reset or `/new` command.
- **Sandbox mode requires Docker**: If `sandbox.mode` is not `"off"`, ensure Docker is installed and the sandbox image is built (`scripts/sandbox-setup.sh`).
- **Auth profiles rotate on failure**: When a model call fails with auth/rate-limit errors, OpenClaw rotates to the next profile in the order. Check `openclaw models auth order get --provider <name>`.
- **Compaction is automatic**: When context nears the window limit, OpenClaw auto-compacts old turns. Manual compaction via `/compact` is also available.
- **Hot reload has limits**: Most config changes apply without restart, but gateway server changes (port, bind, TLS) require a restart.
- **Pairing codes are one-time**: After approving a sender via pairing, they are added to the allow store. Pairing codes expire; request a new one if needed.
- **Group mentions are required by default**: Set `groups.*.requireMention: false` to allow group messages without @-mention.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config validates: `openclaw config validate` returns no errors
- [ ] Gateway is running: `openclaw status` shows "Gateway: running"
- [ ] Channels are connected: `openclaw channels status` shows all expected channels as "connected"
- [ ] Models are configured: `openclaw models status` shows primary + fallbacks
- [ ] Auth is valid: `openclaw models status --probe` succeeds for all profiles
- [ ] Workspace exists: `~/.openclaw/workspace/` contains `AGENTS.md`, `SOUL.md`, etc.
- [ ] Sessions are accessible: `openclaw sessions --json` lists recent sessions
- [ ] Test message works: Send a message via a channel and receive a reply
- [ ] Logs are clean: `openclaw logs --limit 50` shows no ERROR or WARN entries related to your changes
- [ ] Multi-user setup is secure: If applicable, verify `session.dmScope` is set to `"per-channel-peer"` or `"per-account-channel-peer"`

## Resources

- **Full docs navigation**: https://docs.openclaw.ai/llms.txt (comprehensive page-by-page listing for agent reference)
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference (all config fields, defaults, and examples)
- **Getting started**: https://docs.openclaw.ai/start/getting-started (install and first chat in minutes)
- **Channel setup**: https://docs.openclaw.ai/channels/ (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, and more)
- **Creating skills**: https://docs.openclaw.ai/tools/creating-skills (custom skill workflow and best practices)
- **Session management**: https://docs.openclaw.ai/concepts/session (session scoping, reset policies, and multi-user security)
- **Troubleshooting**: https://docs.openclaw.ai/help/troubleshooting (common errors and diagnostic steps)
- **CLI reference**: https://docs.openclaw.ai/cli/index (all commands and options)
- **Automation**: https://docs.openclaw.ai/automation/cron-jobs (cron jobs, webhooks, and hooks)

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt