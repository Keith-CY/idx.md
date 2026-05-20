---
name: Clawdbot
description: Use when setting up or managing a self-hosted AI agent gateway, configuring channels (Discord, Slack, Telegram, WhatsApp, etc.), managing agent workspaces and sessions, deploying multi-agent systems, or troubleshooting gateway operations and channel connectivity.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted multi-channel gateway for AI agents that runs on any OS (macOS, Linux, Windows, Raspberry Pi). It connects messaging platforms (Discord, Slack, Telegram, WhatsApp, Signal, iMessage, Matrix, Microsoft Teams, Google Chat, and more) to a single embedded agent runtime. Agents use tools, manage sessions, and route messages across channels from one Gateway process. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, BOOTSTRAP.md). Primary CLI: `openclaw` with subcommands for gateway, agents, channels, models, and automation. [Full docs](https://docs.openclaw.ai).

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, running onboarding, configuring the Gateway
- **Managing channels**: connecting Discord, Slack, Telegram, WhatsApp, or other messaging platforms
- **Configuring agents**: editing workspace files (AGENTS.md, SOUL.md, TOOLS.md), setting models, controlling tool access
- **Multi-agent routing**: running multiple isolated agents with separate workspaces and session stores
- **Troubleshooting**: diagnosing channel failures, session issues, model auth, or Gateway health
- **Automation**: setting up cron jobs, webhooks, heartbeats, or standing orders
- **Security**: managing pairing, allowlists, sandboxing, or access control

## Quick reference

### Essential commands

| Task | Command |
|------|---------|
| Install | `npm install -g openclaw@latest` or `curl -fsSL https://openclaw.ai/install.sh \| bash` |
| Onboard (interactive setup) | `openclaw onboard --install-daemon` |
| Open dashboard | `openclaw dashboard` |
| Check Gateway status | `openclaw gateway status` or `openclaw status` |
| View logs | `openclaw logs` |
| Edit config interactively | `openclaw configure` |
| Get/set config values | `openclaw config get agents.defaults.workspace` / `openclaw config set channels.telegram.botToken "..."` |
| List agents | `openclaw agents list` |
| List channels | `openclaw channels list` |
| Send a message | `openclaw message send --channel telegram --text "hello"` |
| Run diagnostics | `openclaw doctor` |
| Validate config | `openclaw config validate` |

### Config file locations

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config (JSON5 format) |
| `~/.openclaw/.env` | Environment variables (global fallback) |
| `~/.openclaw/workspace/` | Default agent workspace |
| `~/.openclaw/agents/<agentId>/sessions/` | Session transcripts (JSONL) |
| `~/.openclaw/skills/` | Managed/local skills |

### Workspace bootstrap files (injected into agent context on first turn)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions + memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after completion) |

### Global CLI flags

| Flag | Effect |
|------|--------|
| `--dev` | Isolate state under `~/.openclaw-dev`, shift default ports |
| `--profile <name>` | Isolate state under `~/.openclaw-<name>` |
| `--no-color` | Disable ANSI colors |
| `-V, --version` | Print version and exit |

### Config hot reload modes

| Mode | Behavior |
|------|----------|
| `hybrid` (default) | Hot-applies safe changes instantly; auto-restarts for critical ones |
| `hot` | Hot-applies safe changes only; logs warning when restart needed |
| `restart` | Restarts Gateway on any config change |
| `off` | Disables file watching; manual restart required |

## Decision guidance

### When to use `dmPolicy` values

| Policy | Use when |
|--------|----------|
| `pairing` (default) | Unknown senders should get a one-time pairing code to approve |
| `allowlist` | Only specific senders (in `allowFrom`) can message the bot |
| `open` | Allow all inbound DMs (requires `allowFrom: ["*"]`) |
| `disabled` | Ignore all DMs entirely |

### When to use session scopes

| Scope | Use when |
|-------|----------|
| `main` | Single shared session across all users |
| `per-peer` | Separate session per sender (recommended for multi-user) |
| `per-channel-peer` | Separate session per sender per channel |
| `per-account-channel-peer` | Separate session per sender per channel per account |

### When to use sandbox modes

| Mode | Use when |
|------|----------|
| `off` | No sandboxing; agent runs in main process |
| `non-main` | Only non-main sessions run in sandbox; main session runs in process |
| `all` | All sessions (including main) run in isolated sandbox runtimes |

### When to use queue modes

| Mode | Behavior |
|------|----------|
| `steer` | Inbound messages injected into current run after tool calls finish |
| `followup` | Queued messages start a new agent turn after current turn ends |
| `collect` | Same as `followup` but collects multiple messages before new turn |

## Workflow

### 1. Initial setup
1. Install: `npm install -g openclaw@latest`
2. Run onboarding: `openclaw onboard --install-daemon`
3. Verify Gateway is running: `openclaw gateway status`
4. Open dashboard: `openclaw dashboard`
5. Send a test message in the Control UI chat

### 2. Connect a channel
1. Choose a channel (Telegram is fastest to set up)
2. Read the channel-specific docs (e.g., `/channels/telegram`)
3. Obtain credentials (bot token, API key, etc.)
4. Edit config: `openclaw configure` or `openclaw config set channels.telegram.botToken "..."`
5. Verify: `openclaw channels status`

### 3. Configure agent workspace
1. Navigate to `~/.openclaw/workspace/`
2. Edit `AGENTS.md` with operating instructions
3. Edit `SOUL.md` with persona and boundaries
4. Edit `TOOLS.md` with tool usage notes
5. Edit `IDENTITY.md` with agent name/emoji
6. Edit `USER.md` with user profile
7. Restart or wait for hot reload: `openclaw gateway restart`

### 4. Set up multi-agent routing
1. Create separate workspaces: `mkdir -p ~/.openclaw/workspace-work ~/.openclaw/workspace-home`
2. Edit config to define agents:
   ```json5
   {
     agents: {
       list: [
         { id: "home", default: true, workspace: "~/.openclaw/workspace-home" },
         { id: "work", workspace: "~/.openclaw/workspace-work" }
       ]
     }
   }
   ```
3. Add bindings to route messages to agents:
   ```json5
   {
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "biz" } }
     ]
   }
   ```
4. Verify: `openclaw agents list`

### 5. Troubleshoot a problem
1. Check Gateway health: `openclaw health`
2. View logs: `openclaw logs` or `openclaw logs --tail 50`
3. Run diagnostics: `openclaw doctor`
4. Check channel status: `openclaw channels status`
5. Validate config: `openclaw config validate`
6. If config is broken, restore last-known-good: `openclaw doctor --fix`

## Common gotchas

- **Config validation is strict**: Unknown keys, malformed types, or invalid values cause the Gateway to refuse to start. Run `openclaw doctor` to see exact issues.
- **Workspace files are injected on first turn only**: Changes to AGENTS.md, SOUL.md, etc. do not take effect mid-session. Start a new session or reset the session to pick up changes.
- **BOOTSTRAP.md is deleted after first run**: It is only created for a brand new workspace. Do not recreate it manually unless you want to re-run the bootstrap ritual.
- **Hot reload does not restart for all changes**: Gateway server changes (port, bind, auth, TLS) require a manual restart. Use `openclaw gateway restart` or check the reload mode in config.
- **Session IDs are stable**: Do not manually edit session JSONL files; OpenClaw manages them. Corrupt sessions can be pruned with `openclaw sessions cleanup`.
- **Model refs require provider prefix**: Use `provider/model` format (e.g., `anthropic/claude-sonnet-4-6`). Omitting the provider falls back to alias or default provider.
- **Pairing is device-based**: New devices require approval. Approve pending devices with `openclaw pairing list` and `openclaw pairing approve`.
- **Env vars in config use `${VAR_NAME}` syntax**: Only uppercase names matched. Missing/empty vars throw an error at load time. Escape with `$${VAR}` for literal output.
- **Channel health checks can cause restarts**: If a channel looks stale, the Gateway may auto-restart it. Tune `gateway.channelHealthCheckMinutes` and `gateway.channelStaleEventThresholdMinutes` if this is too aggressive.
- **Symlinked config files are not preserved**: OpenClaw may replace the symlink with a regular file on write. Use `OPENCLAW_CONFIG_PATH` to point directly at the real file if you keep config outside the default state directory.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Config is valid: `openclaw config validate` passes
- [ ] Channels are connected: `openclaw channels status` shows expected channels
- [ ] Agent workspace exists: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.
- [ ] Models are configured: `openclaw models list` shows at least one model
- [ ] Sessions can be created: `openclaw agent` or send a test message in Control UI
- [ ] Logs are clean: `openclaw logs --tail 20` shows no ERROR or FATAL lines
- [ ] Pairing is approved: `openclaw pairing list` shows no pending devices (if using remote access)
- [ ] Hot reload is working: Edit config and verify changes apply without manual restart (if using `hybrid` mode)
- [ ] Multi-agent routing works (if configured): `openclaw agents list` shows all agents, bindings route correctly

## Resources

- **Full page navigation**: [https://docs.openclaw.ai/llms.txt](https://docs.openclaw.ai/llms.txt) — comprehensive page-by-page reference for all documentation
- **Configuration reference**: [https://docs.openclaw.ai/gateway/configuration](https://docs.openclaw.ai/gateway/configuration) — task-oriented config guide with examples
- **CLI reference**: [https://docs.openclaw.ai/cli/index](https://docs.openclaw.ai/cli/index) — complete command list and global flags
- **Agent runtime**: [https://docs.openclaw.ai/concepts/agent](https://docs.openclaw.ai/concepts/agent) — workspace contract, bootstrap files, session management

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt