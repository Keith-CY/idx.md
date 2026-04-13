---
name: Clawdbot
description: Use when setting up, configuring, or operating a multi-channel AI agent gateway. Reach for this skill when deploying OpenClaw on any OS, connecting messaging channels (Discord, Slack, Telegram, WhatsApp, etc.), configuring agents and models, managing tools and skills, or troubleshooting gateway operations.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted, multi-channel gateway for AI agents that runs on any OS (macOS, Linux, Windows). It bridges chat apps (Discord, Slack, Telegram, WhatsApp, iMessage, Signal, Matrix, and more) to AI agents with tool use, sessions, memory, and multi-agent routing. The Gateway is the single source of truth for sessions, routing, and channel connections. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with `AGENTS.md`, `SOUL.md`, `TOOLS.md`, `IDENTITY.md`, `USER.md`). Primary CLI: `openclaw` with subcommands for setup, config, channels, agents, models, and gateway management. See [OpenClaw docs](https://docs.openclaw.ai).

## When to use

Reach for this skill when:
- **First-time setup**: installing OpenClaw, running onboarding, or initializing the gateway
- **Channel configuration**: connecting WhatsApp, Telegram, Discord, Slack, or other messaging platforms
- **Agent management**: creating multi-agent setups, configuring workspaces, or managing sessions
- **Model and provider setup**: choosing LLM providers (Anthropic, OpenAI, Google, etc.), setting API keys, or configuring fallbacks
- **Tool and skill management**: enabling/disabling tools, installing skills, or restricting agent capabilities
- **Gateway operations**: starting/stopping the service, checking health, viewing logs, or troubleshooting
- **Security and access control**: setting up pairing, allowlists, group mention gating, or sandboxing
- **Advanced workflows**: multi-agent routing, cron jobs, webhooks, or remote access via Tailscale

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| **First-time setup** | `openclaw onboard --install-daemon` |
| **Open dashboard** | `openclaw dashboard` |
| **Check gateway status** | `openclaw gateway status` |
| **View logs** | `openclaw logs --follow` |
| **Edit config** | `openclaw config set <path> <value>` or edit `~/.openclaw/openclaw.json` directly |
| **List channels** | `openclaw channels list` |
| **Add a channel** | `openclaw channels add --channel telegram --token <token>` |
| **List agents** | `openclaw agents list` |
| **Add an agent** | `openclaw agents add <name> --workspace <dir>` |
| **List models** | `openclaw models list` |
| **Set primary model** | `openclaw models set <provider>/<model>` |
| **Send a test message** | `openclaw message send --target +15555550123 --message "Hi"` |
| **Run agent turn** | `openclaw agent --message "test" --to <dest>` |
| **Validate config** | `openclaw config validate` |
| **Doctor (health check)** | `openclaw doctor` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
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
      allowFrom: ["+15555550123"],
      dmPolicy: "pairing", // pairing | allowlist | open | disabled
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing",
    },
    discord: {
      enabled: true,
      botToken: "token",
    },
  },

  // Gateway server
  gateway: {
    port: 18789,
    bind: "loopback", // loopback | lan | tailnet | auto
    auth: { token: "..." },
  },

  // Session management
  session: {
    dmScope: "per-channel-peer",
    reset: { mode: "daily", atHour: 4 },
  },

  // Tools and skills
  tools: {
    profile: "coding", // full | coding | messaging | minimal
    allow: ["group:fs", "browser", "web_search"],
    deny: ["exec"],
  },

  // Automation
  cron: { enabled: true },
  hooks: { enabled: true, token: "..." },
}
```

### Key file paths

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config file (JSON5 format) |
| `~/.openclaw/workspace/` | Agent workspace root |
| `~/.openclaw/workspace/AGENTS.md` | Agent operating instructions + memory |
| `~/.openclaw/workspace/SOUL.md` | Agent persona, boundaries, tone |
| `~/.openclaw/workspace/TOOLS.md` | User-maintained tool notes |
| `~/.openclaw/workspace/IDENTITY.md` | Agent name, emoji, theme |
| `~/.openclaw/workspace/USER.md` | User profile + preferred address |
| `~/.openclaw/agents/<agentId>/sessions/` | Session transcripts (JSONL) |
| `~/.openclaw/.env` | Environment variables (optional) |

## Decision guidance

### When to use X vs Y

| Decision | Option A | Option B | Use A when | Use B when |
|----------|----------|----------|-----------|-----------|
| **DM access control** | `dmPolicy: "pairing"` | `dmPolicy: "allowlist"` | You want one-time approval codes for new senders | You have a fixed list of approved numbers/IDs |
| **Tool restriction** | `tools.profile: "coding"` | `tools.profile: "messaging"` | Agent needs file I/O, exec, web search, media | Agent only sends messages, no file access |
| **Session scope** | `dmScope: "per-channel-peer"` | `dmScope: "main"` | Multi-user setup; isolate conversations per person | Single-user; share context across all channels |
| **Sandbox mode** | `sandbox.mode: "non-main"` | `sandbox.mode: "off"` | Run untrusted code safely in containers | Trust the agent; prioritize speed |
| **Config hot-reload** | `gateway.reload.mode: "hybrid"` | `gateway.reload.mode: "off"` | Auto-apply safe changes; restart for critical ones | Manual control; restart on demand |
| **Multi-agent setup** | `agents.list: [...]` + `bindings: [...]` | Single agent in `agents.defaults` | Separate workspaces/models per channel or user | One agent handles all conversations |
| **Model failover** | `model.fallbacks: [...]` | `model.primary` only | Graceful degradation if primary is unavailable | Single model; no fallback needed |

## Workflow

### Typical setup and operation

1. **Install and onboard**
   - Run `npm install -g openclaw@latest` or use the install script
   - Run `openclaw onboard --install-daemon` to walk through setup
   - Choose a model provider (Anthropic, OpenAI, etc.) and enter API key
   - Confirm the Gateway is running: `openclaw gateway status`

2. **Open the dashboard**
   - Run `openclaw dashboard` to open the Control UI in your browser
   - Send a test message to verify the agent responds

3. **Connect a channel**
   - Run `openclaw channels add --channel telegram --token <bot-token>` (or Discord, WhatsApp, etc.)
   - Verify the channel is connected: `openclaw channels status`
   - Test sending a message from that channel

4. **Configure agent workspace**
   - Edit `~/.openclaw/workspace/AGENTS.md` with operating instructions
   - Edit `~/.openclaw/workspace/SOUL.md` with persona and boundaries
   - Edit `~/.openclaw/workspace/IDENTITY.md` with agent name and emoji
   - Edit `~/.openclaw/workspace/USER.md` with your profile

5. **Restrict tools and skills (optional)**
   - Run `openclaw skills list` to see available skills
   - Edit `openclaw.json` to set `tools.profile` or `tools.allow`/`tools.deny`
   - Run `openclaw skills install <skill-name>` to add skills from ClawHub

6. **Set up multi-agent routing (optional)**
   - Add agents to `agents.list` with separate workspaces
   - Define `bindings` to route channels/accounts to specific agents
   - Run `openclaw agents list` to verify

7. **Monitor and troubleshoot**
   - Run `openclaw logs --follow` to tail the gateway log
   - Run `openclaw doctor` to check for common issues
   - Run `openclaw health` for a quick health snapshot
   - Run `openclaw status --deep` for a detailed probe

### Editing config

**Interactive method:**
```bash
openclaw configure          # Full wizard
openclaw config set agents.defaults.workspace ~/.openclaw/workspace
openclaw config get agents.defaults.model.primary
```

**Direct edit method:**
```bash
# Edit the file directly
nano ~/.openclaw/openclaw.json
# Gateway watches and hot-applies changes (in hybrid mode)
```

**Validation:**
```bash
openclaw config validate    # Check syntax before restart
openclaw doctor             # Detect and fix common issues
```

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor --fix` to repair issues automatically.
- **Workspace files are injected on first turn**: Changes to `AGENTS.md`, `SOUL.md`, etc. only take effect on new sessions. Existing sessions keep their original context.
- **Bootstrap files are one-time**: `BOOTSTRAP.md` is deleted after the first session completes. Don't rely on it for ongoing instructions.
- **Session IDs are stable**: OpenClaw chooses the session ID; you don't. Use `dmScope` to control isolation (per-peer, per-channel, etc.).
- **Tool groups are case-sensitive**: Use `group:fs`, not `group:FS`. Typos silently fail to match.
- **Model refs require provider prefix**: Use `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. Omitting the provider falls back to defaults.
- **Pairing codes are one-time**: Each new sender gets a unique code. Codes expire after approval or timeout.
- **Group mention gating is per-channel**: Set `channels.<provider>.groups` separately for each channel; global defaults don't apply to groups.
- **Sandbox requires Docker**: If `sandbox.mode` is enabled but Docker isn't running, the Gateway logs errors and falls back to non-sandboxed execution.
- **Hot-reload doesn't restart the Gateway**: In `hybrid` mode, critical changes auto-restart. In `hot` mode, you must restart manually. Check logs to see which mode applied.
- **Secrets in config are not encrypted**: Store sensitive values in env vars or use SecretRef objects (`source: "env"`, `source: "file"`, `source: "exec"`).
- **Channel health checks can restart channels**: If a channel looks stale, the Gateway may auto-restart it. Tune `gateway.channelHealthCheckMinutes` to control aggressiveness.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] **Config is valid**: Run `openclaw config validate` with no errors
- [ ] **Gateway is running**: `openclaw gateway status` shows "running"
- [ ] **Channels are connected**: `openclaw channels status` shows all expected channels as "connected"
- [ ] **Agent responds**: Send a test message and receive a reply
- [ ] **Workspace files exist**: `ls ~/.openclaw/workspace/` shows `AGENTS.md`, `SOUL.md`, `IDENTITY.md`, `USER.md`
- [ ] **Models are configured**: `openclaw models list` shows at least one available model
- [ ] **Tools are accessible**: `openclaw agent --message "test" --to <dest>` completes without tool errors
- [ ] **Logs are clean**: `openclaw logs --limit 50` shows no ERROR or WARN lines related to your changes
- [ ] **Health check passes**: `openclaw health` returns a successful status
- [ ] **Doctor reports no issues**: `openclaw doctor` shows no critical findings

## Resources

- **Full navigation**: [llms.txt](https://docs.openclaw.ai/llms.txt) — comprehensive page-by-page listing for agent navigation
- **Getting started**: [Getting Started](https://docs.openclaw.ai/start/getting-started) — installation, onboarding, and first chat
- **Configuration reference**: [Configuration](https://docs.openclaw.ai/gateway/configuration) — all config options with examples
- **CLI reference**: [CLI Reference](https://docs.openclaw.ai/cli/index) — complete command tree and options

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt