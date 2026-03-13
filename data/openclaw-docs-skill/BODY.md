---
name: Clawdbot
description: Use when deploying and managing a self-hosted AI agent gateway, configuring multi-channel messaging (WhatsApp, Telegram, Discord, iMessage, etc.), setting up agent workspaces and sessions, creating custom skills, automating workflows with cron jobs and webhooks, or troubleshooting gateway/channel connectivity issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product Summary

OpenClaw is a self-hosted WebSocket gateway that connects AI agents to multiple messaging platforms (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, and more) simultaneously. It runs on any OS and manages sessions, routing, authentication, and tool execution for coding agents. The primary config file is `~/.openclaw/openclaw.json` (JSON5 format). Key CLI entry point: `openclaw` command. Primary docs: https://docs.openclaw.ai

## When to Use

Reach for this skill when:
- **Deploying the gateway**: installing, configuring, starting the service, or managing daemon lifecycle
- **Connecting channels**: setting up WhatsApp, Telegram, Discord, or other messaging platforms
- **Managing agents**: creating isolated agents, configuring workspaces, setting up multi-agent routing
- **Creating skills**: building custom tool definitions and workspace extensions
- **Automating workflows**: setting up cron jobs, webhooks, hooks, or heartbeat automation
- **Troubleshooting**: diagnosing channel connectivity, session issues, config validation errors, or gateway health
- **Configuring security**: setting up DM allowlists, pairing, group mention gating, or sandboxing
- **Managing sessions**: understanding session routing, scoping, reset behavior, or compaction

## Quick Reference

### Essential Commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Start gateway (foreground) | `openclaw gateway --port 18789` |
| Check gateway status | `openclaw gateway status` |
| Open Control UI | `openclaw dashboard` |
| Configure interactively | `openclaw configure` |
| Add a channel | `openclaw channels add --channel telegram` |
| List channels | `openclaw channels list` |
| Send test message | `openclaw message send --target +15555550123 --message "Hi"` |
| Run agent turn | `openclaw agent --message "test"` |
| List skills | `openclaw skills list` |
| Check health | `openclaw health` |
| View logs | `openclaw logs --follow` |
| Validate config | `openclaw config validate` |

### Config File Locations

| Item | Path |
|------|------|
| Main config | `~/.openclaw/openclaw.json` |
| Workspace | `~/.openclaw/workspace` (default) |
| Sessions | `~/.openclaw/agents/<agentId>/sessions/` |
| Skills (workspace) | `~/.openclaw/workspace/skills/` |
| Skills (shared) | `~/.openclaw/skills/` |
| State directory | `~/.openclaw/` |

### Bootstrap Files (Injected into Agent Context)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions + memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes (camera names, SSH details, etc.) |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after completion) |
| `IDENTITY.md` | Agent name/vibe/emoji |
| `USER.md` | User profile + preferred address |

### Config Hot Reload Modes

| Mode | Behavior |
|------|----------|
| `hybrid` (default) | Hot-applies safe changes; auto-restarts for critical ones |
| `hot` | Hot-applies safe changes only; warns when restart needed |
| `restart` | Restarts on any config change |
| `off` | Disables file watching; manual restart required |

### DM Access Policies

| Policy | Behavior |
|--------|----------|
| `pairing` (default) | Unknown senders get one-time pairing code to approve |
| `allowlist` | Only senders in `allowFrom` array allowed |
| `open` | Allow all DMs (requires `allowFrom: ["*"]`) |
| `disabled` | Ignore all DMs |

### Session Scoping Options

| Scope | Behavior |
|-------|----------|
| `main` | Single shared session for all users |
| `per-peer` | One session per sender (across channels) |
| `per-channel-peer` | One session per (channel, sender) pair |
| `per-account-channel-peer` | One session per (account, channel, sender) triple |

## Decision Guidance

### When to Use X vs Y

#### Config Editing: Interactive vs Direct

| Approach | Use When |
|----------|----------|
| `openclaw configure` | First-time setup, wizard-guided experience |
| `openclaw config set <path> <value>` | Single key changes, scripting |
| Direct edit `~/.openclaw/openclaw.json` | Bulk changes, version control, templates |
| Control UI Config tab | GUI preference, visual schema validation |

#### Channel Setup: Built-in vs Plugin

| Channel | Built-in? | Setup |
|---------|-----------|-------|
| WhatsApp, Telegram, Discord, Slack, Signal, iMessage, Google Chat, MS Teams | Yes | `openclaw channels add --channel <name>` |
| Mattermost, Matrix, LINE, Feishu, Nextcloud Talk, Tlon, Nostr, Twitch, Zalo | Plugin | Install plugin, then `channels add` |

#### Session Isolation: DM Scope vs Bindings

| Scenario | Use |
|----------|-----|
| One agent, multiple users, separate conversations | `session.dmScope: "per-channel-peer"` |
| Multiple agents, route by channel/account | `bindings` array with `agentId` + `match` rules |
| Thread-bound subagent (Discord) | `threadBindings.enabled: true` + `/focus` command |

#### Automation: Cron vs Heartbeat vs Hooks

| Tool | Use When |
|------|----------|
| **Cron** | Precise timing (daily 7am, weekly Monday 9am), isolated jobs, webhook delivery |
| **Heartbeat** | Periodic check-ins (every 30m), last-channel delivery, lightweight |
| **Hooks** | Event-driven (session start/end, `/reset`, `/new`), custom logic, file writes |

#### Sandboxing: Off vs Non-Main vs All

| Mode | Use When |
|------|----------|
| `off` | Single trusted user, local development |
| `non-main` | Multi-user, main session trusted, isolated sessions sandboxed |
| `all` | Untrusted input, strict isolation required |

## Workflow

### 1. Initial Setup & Gateway Deployment

1. **Install OpenClaw**
   ```bash
   curl -fsSL https://openclaw.ai/install.sh | bash
   ```

2. **Run onboarding wizard**
   ```bash
   openclaw onboard --install-daemon
   ```
   - Configures auth (token or password)
   - Sets gateway port/bind
   - Optionally adds channels
   - Installs daemon service

3. **Verify gateway is running**
   ```bash
   openclaw gateway status
   openclaw health
   ```

4. **Open Control UI**
   ```bash
   openclaw dashboard
   # or navigate to http://127.0.0.1:18789
   ```

### 2. Adding a Channel (WhatsApp Example)

1. **Initiate channel setup**
   ```bash
   openclaw channels add --channel whatsapp
   ```

2. **Scan QR code** (WhatsApp Web pairing)
   - Follow CLI prompts to pair phone

3. **Verify connection**
   ```bash
   openclaw channels status --probe
   ```

4. **Set DM access policy** (edit config or use CLI)
   ```json5
   {
     channels: {
       whatsapp: {
         allowFrom: ["+15555550123"],
         groups: { "*": { requireMention: true } }
       }
     }
   }
   ```

5. **Test message delivery**
   ```bash
   openclaw message send --target +15555550123 --message "Hello"
   ```

### 3. Creating a Custom Skill

1. **Create skill directory**
   ```bash
   mkdir -p ~/.openclaw/workspace/skills/my-skill
   ```

2. **Write SKILL.md** with frontmatter + instructions
   ```markdown
   ---
   name: my_skill
   description: Does something useful
   ---
   
   # My Skill
   
   When the user asks for X, use the `bash` tool to run `command`.
   ```

3. **Refresh skills** (automatic on gateway restart, or ask agent to refresh)

4. **Test in chat**
   - Ask agent to use the skill
   - Check Control UI or logs for errors

### 4. Setting Up Multi-Agent Routing

1. **Create second agent workspace**
   ```bash
   mkdir -p ~/.openclaw/workspace-work
   cp ~/.openclaw/workspace/{AGENTS,SOUL,USER,TOOLS}.md ~/.openclaw/workspace-work/
   ```

2. **Add agent to config**
   ```json5
   {
     agents: {
       list: [
         { id: "home", default: true, workspace: "~/.openclaw/workspace" },
         { id: "work", workspace: "~/.openclaw/workspace-work" }
       ]
     }
   }
   ```

3. **Add routing bindings**
   ```json5
   {
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "biz" } }
     ]
   }
   ```

4. **Verify routing**
   ```bash
   openclaw agents list --bindings
   ```

### 5. Setting Up Cron Automation

1. **Enable cron in config**
   ```json5
   {
     cron: {
       enabled: true,
       maxConcurrentRuns: 2,
       sessionRetention: "24h"
     }
   }
   ```

2. **Add a cron job**
   ```bash
   openclaw cron add \
     --name "Morning briefing" \
     --cron "0 7 * * *" \
     --message "Summarize today's priorities" \
     --announce
   ```

3. **List and monitor jobs**
   ```bash
   openclaw cron list
   openclaw cron runs --id <jobId>
   ```

### 6. Troubleshooting a Channel Issue

1. **Check channel status**
   ```bash
   openclaw channels status --probe
   ```

2. **Review recent logs**
   ```bash
   openclaw logs --follow --limit 100
   openclaw channels logs --channel whatsapp --lines 50
   ```

3. **Run diagnostics**
   ```bash
   openclaw doctor
   openclaw doctor --deep
   ```

4. **Validate config**
   ```bash
   openclaw config validate
   ```

5. **Check specific channel docs** (e.g., `/channels/whatsapp`, `/channels/telegram`)

## Common Gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the gateway to refuse startup. Run `openclaw doctor --fix` to auto-repair common issues.

- **Bootstrap files are injected once per session**: Changes to `AGENTS.md`, `SOUL.md`, etc. only affect new sessions. Existing sessions keep their original context. Use `/reset` to start fresh.

- **Model refs require provider prefix**: Use `provider/model` format (e.g., `anthropic/claude-opus-4-6`). Omitting the provider only works if there's no `/` in the model ID.

- **Session scoping affects all users**: `session.dmScope` is global. Use `bindings` + multi-agent routing for per-user isolation.

- **WhatsApp requires QR pairing**: `openclaw channels login` (WhatsApp Web only). Phone must stay online; Baileys library handles the connection.

- **Group messages require mention by default**: Set `requireMention: false` in config if you want the bot to respond to all group messages.

- **Hot reload doesn't restart for gateway server changes**: Changes to `gateway.port`, `gateway.bind`, `gateway.auth.*`, or `gateway.remote.*` require manual restart or `--reload restart` mode.

- **Skills are loaded per-agent**: Workspace skills live in `<workspace>/skills/`; shared skills in `~/.openclaw/skills/`. Workspace wins on name conflict.

- **Cron jobs run in isolated sessions**: They don't carry over prior conversation history. Use `--session main` for main-session jobs instead.

- **Pairing codes are one-time**: Once a sender is approved, they're in the allow store. Pairing is per-channel, not global.

- **Secrets are resolved at startup**: If a SecretRef env var is missing, the gateway won't start. Use `openclaw secrets reload` to refresh after updating env.

- **Config includes are relative to the including file**: `$include: "./agents.json5"` resolves relative to the parent file's directory, not the working directory.

## Verification Checklist

Before submitting work with OpenClaw:

- [ ] **Config validates**: Run `openclaw config validate` with no errors
- [ ] **Gateway is running**: `openclaw gateway status` shows "running"
- [ ] **Health check passes**: `openclaw health` returns OK
- [ ] **Channels are connected**: `openclaw channels status` shows all expected channels as "connected"
- [ ] **Test message works**: `openclaw message send --target <test-recipient> --message "test"` succeeds
- [ ] **Agent responds**: Send a message via channel and verify agent replies
- [ ] **Skills are discoverable**: `openclaw skills list` shows custom skills with no errors
- [ ] **Sessions are isolated**: Verify correct agent/session routing with `openclaw sessions` or Control UI
- [ ] **Logs are clean**: `openclaw logs --limit 50` shows no ERROR or WARN entries related to your changes
- [ ] **Automation works** (if applicable): Cron jobs run on schedule; hooks fire on events
- [ ] **No plaintext secrets in config**: Use SecretRef or env vars, not hardcoded tokens

## Resources

**Comprehensive navigation**: https://docs.openclaw.ai/llms.txt

**Critical documentation pages**:
1. [Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference) — every config field with defaults and constraints
2. [Gateway Runbook](https://docs.openclaw.ai/gateway/index) — day-1 startup and day-2 operations
3. [Channels Overview](https://docs.openclaw.ai/channels/index) — all supported messaging platforms and setup guides

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt