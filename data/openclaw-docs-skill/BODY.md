---
name: Clawdbot
description: Use when building, configuring, or troubleshooting a self-hosted AI agent gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, etc.) to LLM models. Reach for this skill when agents need to set up channels, manage sessions, create custom skills, configure automation, or debug gateway/agent behavior.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, Signal, Slack, Mattermost, MS Teams, and more) to AI agents. It runs a single embedded agent runtime with multi-channel support, session management, tool execution, and automation. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md, BOOTSTRAP.md, IDENTITY.md, USER.md), `~/.openclaw/agents/<agentId>/sessions/` (session transcripts). Primary CLI: `openclaw` with subcommands for setup, config, channels, agents, models, cron, hooks, and more. See https://docs.openclaw.ai for full documentation.

## When to use

Use this skill when:
- **Setting up OpenClaw**: installing, onboarding, configuring the gateway, or running it as a service
- **Connecting channels**: pairing WhatsApp, Telegram, Discord, or other messaging platforms
- **Configuring agents**: setting workspace files (AGENTS.md, SOUL.md, TOOLS.md), managing multi-agent routing, or controlling DM/group access
- **Managing models**: selecting LLM providers, setting up authentication, configuring fallbacks, or switching models
- **Creating custom skills**: building SKILL.md files with agent instructions and tool guidance
- **Automating workflows**: setting up cron jobs, hooks (event-driven automation), webhooks, or heartbeat check-ins
- **Debugging**: troubleshooting channel connectivity, session issues, config validation, or agent behavior
- **Extending functionality**: installing plugins, registering custom tools, or building extensions

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Start gateway | `openclaw gateway --port 18789` |
| Check status | `openclaw status` or `openclaw health` |
| Edit config | `openclaw configure` or `openclaw config set <path> <value>` |
| List channels | `openclaw channels list` |
| Add channel | `openclaw channels add --channel <name>` |
| List agents | `openclaw agents list` |
| Add agent | `openclaw agents add <name>` |
| List models | `openclaw models list` |
| Set model | `openclaw models set <provider/model>` |
| Run agent turn | `openclaw agent --message "text"` |
| List skills | `openclaw skills list` |
| List hooks | `openclaw hooks list` |
| Enable hook | `openclaw hooks enable <name>` |
| View logs | `openclaw logs --follow` |
| Validate config | `openclaw config validate` |
| Run doctor | `openclaw doctor` |

### Config file structure

Config lives at `~/.openclaw/openclaw.json` (JSON5 format). Key sections:

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-opus-4-6" },
      sandbox: { mode: "off" }
    },
    list: [
      { id: "main", default: true, workspace: "~/.openclaw/workspace" }
    ]
  },
  channels: {
    whatsapp: { enabled: true, allowFrom: ["+15555550123"] },
    telegram: { enabled: true, botToken: "..." }
  },
  gateway: { port: 18789, auth: { token: "..." } },
  session: { dmScope: "per-channel-peer" },
  hooks: { internal: { enabled: true } },
  cron: { enabled: true }
}
```

### Workspace files (agent context)

Create these in `~/.openclaw/workspace/`:

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions + memory for the agent |
| `SOUL.md` | Persona, boundaries, tone, and values |
| `TOOLS.md` | User-maintained notes on tool usage conventions |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after completion) |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `USER.md` | User profile + preferred address |
| `MEMORY.md` | Long-term memory (vector-searchable) |
| `memory/*.md` | Session snapshots (auto-created by session-memory hook) |
| `skills/` | Custom skill directories with SKILL.md files |
| `hooks/` | Custom hook directories with HOOK.md + handler.ts |

### Tool profiles (base allowlists)

Set `tools.profile` to restrict agent tool access:

| Profile | Tools |
|---------|-------|
| `minimal` | `session_status` only |
| `coding` | File system, runtime, sessions, memory, image |
| `messaging` | Messaging, sessions, status |
| `full` | No restriction (default) |

### DM access policies

Set `dmPolicy` per channel:

| Policy | Behavior |
|--------|----------|
| `pairing` | Unknown senders get one-time pairing code (default) |
| `allowlist` | Only senders in `allowFrom` or paired store |
| `open` | Allow all DMs (requires `allowFrom: ["*"]`) |
| `disabled` | Ignore all DMs |

### Session scopes

Set `session.dmScope` to control session isolation:

| Scope | Behavior |
|-------|----------|
| `main` | Shared session across all senders |
| `per-peer` | One session per sender (cross-channel) |
| `per-channel-peer` | One session per sender per channel (recommended) |
| `per-account-channel-peer` | One session per sender per account per channel |

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **Single vs multi-agent** | One agent handles all users | Different users/teams need isolated workspaces + sessions |
| **Sandbox mode** | Running untrusted agent code or limiting file access | Agent is trusted; performance matters more than isolation |
| **Tool profile** | Restricting agent capabilities (e.g., messaging-only) | Agent needs full access (coding, file system, etc.) |
| **DM policy: pairing** | New users should approve access before chatting | Users are pre-approved or you want open access |
| **DM policy: allowlist** | You maintain a fixed list of approved senders | Users change frequently or you want open access |
| **Session scope: per-peer** | Users chat across multiple channels; share context | Each channel is independent; isolate per-channel |
| **Cron vs heartbeat** | Scheduled tasks on a fixed schedule (daily, weekly) | Periodic check-ins triggered by user activity or time |
| **Hooks vs webhooks** | Event-driven automation inside the gateway | External systems trigger work in OpenClaw |
| **Skills vs tools** | Agent guidance + instructions (LLM-facing) | Structured tool definitions + execution (system-facing) |

## Workflow

### 1. Install and onboard

```bash
# Install OpenClaw
curl -fsSL https://openclaw.ai/install.sh | bash

# Run onboarding (interactive setup)
openclaw onboard --install-daemon

# Verify gateway is running
openclaw gateway status
```

### 2. Connect a channel

```bash
# Add WhatsApp
openclaw channels add --channel whatsapp

# Or add Telegram
openclaw channels add --channel telegram --account alerts --token $TELEGRAM_BOT_TOKEN

# Check channel status
openclaw channels status
```

### 3. Configure the agent

Edit `~/.openclaw/openclaw.json`:

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-opus-4-6" }
    }
  },
  channels: {
    whatsapp: { allowFrom: ["+15555550123"] }
  }
}
```

### 4. Set up workspace files

```bash
# Create workspace
mkdir -p ~/.openclaw/workspace/skills

# Add AGENTS.md (operating instructions)
cat > ~/.openclaw/workspace/AGENTS.md << 'EOF'
# Agent Instructions

You are a helpful assistant. Respond to user messages with clear, concise answers.
EOF

# Add SOUL.md (persona)
cat > ~/.openclaw/workspace/SOUL.md << 'EOF'
# Persona

You are friendly, professional, and helpful.
EOF

# Add TOOLS.md (tool notes)
cat > ~/.openclaw/workspace/TOOLS.md << 'EOF'
# Tool Usage

Use the browser tool for web automation. Use exec for shell commands.
EOF
```

### 5. Create a custom skill

```bash
# Create skill directory
mkdir -p ~/.openclaw/workspace/skills/my-skill

# Create SKILL.md
cat > ~/.openclaw/workspace/skills/my-skill/SKILL.md << 'EOF'
---
name: my_skill
description: "My custom skill"
---

# My Skill

When the user asks for help with X, use the browser tool to search for information.
EOF
```

### 6. Set up automation

```bash
# Enable session-memory hook (saves context when /new is issued)
openclaw hooks enable session-memory

# Add a cron job (daily check-in)
openclaw cron add --name "daily-checkin" --cron "0 9 * * *" --message "Good morning!"

# Or use heartbeat (periodic check-in)
openclaw config set agents.defaults.heartbeat.every "30m"
```

### 7. Test and verify

```bash
# Send a test message
openclaw message send --target +15555550123 --message "Hello from OpenClaw"

# Run an agent turn
openclaw agent --message "What is 2+2?"

# Check session history
openclaw sessions --json

# View logs
openclaw logs --follow
```

### 8. Troubleshoot

```bash
# Run diagnostics
openclaw doctor

# Check config validity
openclaw config validate

# View detailed status
openclaw status --deep

# Check channel health
openclaw channels status --probe
```

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the gateway to refuse to start. Run `openclaw doctor --fix` to repair.
- **Workspace files are injected on first turn**: AGENTS.md, SOUL.md, etc. are read once per session start. Changes require `/new` to take effect.
- **BOOTSTRAP.md is deleted after first run**: It's a one-time ritual. Don't recreate it unless you want to run it again.
- **Session scope affects context sharing**: `per-peer` shares context across channels; `per-channel-peer` isolates per channel. Choose based on your use case.
- **DM pairing codes expire**: Users have a limited time to approve pairing. If they miss it, they'll get a new code on next message.
- **Model refs use `provider/model` format**: `anthropic/claude-opus-4-6`, not just `claude-opus-4-6`. Omitting the provider is deprecated.
- **Sandbox mode requires Docker**: If `agents.defaults.sandbox.mode` is set to `non-main` or `all`, Docker must be installed and the sandbox image must be built (`scripts/sandbox-setup.sh`).
- **Tools are gated by profile + allow/deny**: A tool must pass the base profile, then allow/deny lists. Denied tools are not sent to the model.
- **Hooks run during command processing**: Keep them fast. Fire-and-forget async work if needed; don't block.
- **Skills are discovered at startup**: New skills in `~/.openclaw/workspace/skills/` require a gateway restart to load.
- **Channels need explicit `enabled: true`**: Disabled channels are ignored even if configured.
- **Group messages require mention by default**: Set `requireMention: false` in group config to allow all messages.
- **Session transcripts are JSONL**: Each line is a message/tool event. Large sessions are compacted automatically.
- **Memory files are vector-searchable**: Use `openclaw memory search "query"` to find relevant context.
- **Config hot-reload is default**: Changes to `openclaw.json` apply automatically in `hybrid` mode. Some changes (gateway port, plugins) require restart.
- **Env var substitution uses `${VAR_NAME}`**: Only uppercase names work. Missing vars throw an error at load time.
- **SecretRef fields support env/file/exec sources**: Use `{ source: "env", id: "MY_KEY" }` to reference environment variables securely.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config validates: `openclaw config validate` (no errors)
- [ ] Gateway is running: `openclaw gateway status` shows `running`
- [ ] Channels are connected: `openclaw channels status` shows all channels as `connected`
- [ ] Agent workspace exists: `ls ~/.openclaw/workspace/AGENTS.md` (file present)
- [ ] Model is set: `openclaw models status` shows a primary model
- [ ] Test message works: `openclaw message send --target <recipient> --message "test"` succeeds
- [ ] Agent responds: `openclaw agent --message "hello"` returns a reply
- [ ] Logs are clean: `openclaw logs --limit 50` shows no `ERROR` or `FATAL` entries
- [ ] Doctor passes: `openclaw doctor` shows no critical issues
- [ ] Skills are loaded: `openclaw skills list` shows custom skills if added
- [ ] Hooks are enabled: `openclaw hooks list` shows enabled hooks with checkmarks
- [ ] Sessions persist: `openclaw sessions --json` lists active sessions

## Resources

**Comprehensive navigation**: See https://docs.openclaw.ai/llms.txt for a complete page-by-page listing of all documentation.

**Critical pages**:
- [Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference) — all config fields, defaults, and examples
- [CLI Reference](https://docs.openclaw.ai/cli/index) — all commands, subcommands, and options
- [Tools](https://docs.openclaw.ai/tools/index) — agent tools (browser, canvas, nodes, message, cron, sessions, etc.)

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt