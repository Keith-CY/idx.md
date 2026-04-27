---
name: Clawdbot
description: Use when setting up, configuring, or troubleshooting a self-hosted AI agent gateway. Reach for this skill when agents need to understand OpenClaw's multi-channel architecture, CLI commands, configuration patterns, tool management, or deployment across Discord, Slack, Telegram, WhatsApp, and other messaging platforms.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted gateway that connects AI agents to multiple messaging platforms (Discord, Slack, Telegram, WhatsApp, iMessage, Signal, Matrix, and 15+ others) through a single unified process. The Gateway runs on any OS, manages sessions and routing, and exposes a CLI (`openclaw`), browser Control UI, and REST APIs for configuration and automation.

**Key files and paths:**
- Config: `~/.openclaw/openclaw.json` (JSON5 format)
- Workspace: `~/.openclaw/workspace/` (agent files: AGENTS.md, SOUL.md, TOOLS.md, BOOTSTRAP.md, IDENTITY.md, USER.md)
- Sessions: `~/.openclaw/agents/<agentId>/sessions/<sessionId>.jsonl`
- State: `~/.openclaw/` (default; override with `OPENCLAW_HOME` or `OPENCLAW_STATE_DIR`)

**Primary CLI:** `openclaw <command> [options]`

**Primary docs:** https://docs.openclaw.ai

## When to use

Reach for this skill when:
- Setting up OpenClaw for the first time or troubleshooting an existing deployment
- Configuring channels (WhatsApp, Telegram, Discord, etc.) or controlling who can message the bot
- Managing models, tools, skills, or plugins
- Debugging gateway health, sessions, or message delivery
- Automating tasks with cron jobs, hooks, or webhooks
- Deploying to remote servers or containers
- Building multi-agent setups with isolated workspaces
- Reviewing or editing `openclaw.json` configuration

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| First-time setup | `openclaw onboard --install-daemon` |
| Check gateway status | `openclaw gateway status` |
| Open Control UI | `openclaw dashboard` |
| View logs | `openclaw logs` |
| Edit config interactively | `openclaw configure` |
| Get a config value | `openclaw config get agents.defaults.workspace` |
| Set a config value | `openclaw config set agents.defaults.model.primary "anthropic/claude-sonnet-4-6"` |
| Validate config | `openclaw config validate` |
| List channels | `openclaw channels list` |
| List models | `openclaw models list` |
| List skills | `openclaw skills list` |
| Send a test message | `openclaw message send --channel telegram --text "Hello"` |
| View sessions | `openclaw sessions` |
| Restart gateway | `openclaw gateway restart` |

### Config file structure (minimal)

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
    },
  },
  // Channel setup
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],  // DM allowlist
      dmPolicy: "allowlist",         // pairing | allowlist | open | disabled
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing",
    },
  },
}
```

### Workspace files (injected on first turn)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted after completion) |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `USER.md` | User profile and preferred address |

### Built-in tools (always available)

| Tool | What it does |
|------|-------------|
| `exec` / `process` | Run shell commands |
| `read` / `write` / `edit` | File I/O in workspace |
| `browser` | Control Chromium (navigate, click, screenshot) |
| `web_search` / `web_fetch` | Search and fetch web content |
| `image` / `image_generate` | Analyze or generate images |
| `message` | Send messages across channels |
| `cron` / `gateway` | Manage jobs and gateway config |
| `sessions_*` / `subagents` | Session and sub-agent management |

### Tool profiles

| Profile | Includes |
|---------|----------|
| `full` | No restriction (default) |
| `coding` | File I/O, exec, web, sessions, media generation |
| `messaging` | Message sending and session tools only |
| `minimal` | Session status only |

### Channel DM policies

| Policy | Behavior |
|--------|----------|
| `pairing` | Unknown senders get a one-time pairing code |
| `allowlist` | Only senders in `allowFrom` can message |
| `open` | Allow all DMs (requires `allowFrom: ["*"]`) |
| `disabled` | Ignore all DMs |

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| First-time setup | `openclaw onboard` | Interactive wizard handles all choices |
| Editing config | Control UI or direct JSON | Control UI has form validation; JSON for scripting |
| Restricting tools | `tools.profile` + `tools.allow/deny` | Profile sets baseline; allow/deny refines |
| Multi-agent setup | `agents.list[]` + `bindings[]` | Isolated workspaces per agent with routing rules |
| Channel safety | `dmPolicy: "pairing"` | Pairing is default; use `allowlist` for known senders |
| Group chat gating | `mentionPatterns` + `requireMention` | Text patterns + metadata mentions for flexibility |
| Automation | Cron jobs vs hooks | Cron for scheduled; hooks for event-driven |
| Sandboxing | `agents.defaults.sandbox.mode` | `non-main` for untrusted sessions; `all` for strict |

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
   This walks through model provider, API key, and basic config.

3. **Verify gateway is running**
   ```bash
   openclaw gateway status
   ```
   Should show listening on port 18789.

4. **Open Control UI**
   ```bash
   openclaw dashboard
   ```
   Test chat in the browser.

5. **Connect a channel** (e.g., Telegram)
   - Get a bot token from BotFather
   - Set in config: `channels.telegram.botToken: "123:abc"`
   - Restart: `openclaw gateway restart`

6. **Test from the channel**
   - Send a message to the bot
   - Verify response in Control UI logs

### Typical config edit task

1. **Check current value**
   ```bash
   openclaw config get agents.defaults.model.primary
   ```

2. **Edit interactively** (recommended)
   ```bash
   openclaw configure
   ```
   Or edit directly: `~/.openclaw/openclaw.json`

3. **Validate**
   ```bash
   openclaw config validate
   ```

4. **Restart if needed**
   ```bash
   openclaw gateway restart
   ```
   (Most changes hot-apply; gateway/port changes require restart)

### Typical multi-agent setup

1. **Create workspaces**
   ```bash
   mkdir -p ~/.openclaw/workspace-home ~/.openclaw/workspace-work
   ```

2. **Add agents to config**
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

3. **Populate workspace files** (AGENTS.md, SOUL.md, etc.) for each agent

4. **Restart gateway**
   ```bash
   openclaw gateway restart
   ```

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the gateway to refuse startup. Run `openclaw doctor` to see exact issues; use `openclaw doctor --fix` to auto-repair.

- **Symlinked config files don't work**: OpenClaw may replace the symlink instead of preserving it. Use `OPENCLAW_CONFIG_PATH` to point at the real file if config lives outside `~/.openclaw/`.

- **Bootstrap files are one-time only**: `BOOTSTRAP.md` is created only for brand-new workspaces and deleted after completion. Don't expect it to recreate on restart.

- **Tool allowlists fail closed**: If `tools.allow: ["nonexistent_tool"]` and no plugin registers that tool, the run stops before the model call instead of continuing as text-only.

- **Model refs require provider prefix**: Use `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. If the model ID itself contains `/` (OpenRouter-style), include the full prefix.

- **DM allowlists are per-channel**: `channels.whatsapp.allowFrom` doesn't affect Telegram. Set allowlists for each channel separately.

- **Group chat mention gating is per-agent**: `agents.list[].groupChat.mentionPatterns` overrides global defaults. Omit it to inherit.

- **Sessions collapse by default**: Direct chats from the same sender share a `main` session. Groups are isolated. Use `session.dmScope` to change this behavior.

- **Hot-reload doesn't restart the gateway**: Most config changes apply instantly, but `gateway.*` (port, bind, TLS) and `plugins` require a manual restart. Use `hybrid` mode (default) for automatic restarts when needed.

- **Workspace files are injected, not read live**: Changes to AGENTS.md, SOUL.md, etc. take effect on the next new session, not mid-conversation.

- **Pairing codes are one-time**: Once a sender pairs, they're in the allow store. Pairing codes don't regenerate for the same sender.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config validates: `openclaw config validate` returns no errors
- [ ] Gateway is running: `openclaw gateway status` shows "listening"
- [ ] Control UI loads: `openclaw dashboard` opens in browser
- [ ] Test message works: Send a message in Control UI or a connected channel and get a response
- [ ] Logs are clean: `openclaw logs` shows no ERROR or WARN lines (INFO is normal)
- [ ] Channels are enabled: `openclaw channels list` shows expected channels as "connected"
- [ ] Models are set: `openclaw models list` shows the primary model
- [ ] Workspace files exist: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.
- [ ] For multi-agent: `openclaw agents list` shows all agents; bindings are correct
- [ ] For tools: `openclaw config get tools.allow` and `tools.deny` match intent
- [ ] For cron: `openclaw cron list` shows expected jobs if configured
- [ ] For channels: Test DM and group message delivery if applicable

## Resources

**Comprehensive navigation:** https://docs.openclaw.ai/llms.txt

**Critical pages:**
- [Getting Started](/start/getting-started) — Installation and first chat in 5 minutes
- [Configuration](/gateway/configuration) — Common config tasks and patterns
- [Channels](/channels) — Setup for Discord, Slack, Telegram, WhatsApp, and others

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt