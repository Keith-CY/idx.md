---
name: Clawdbot
description: Use when setting up, configuring, or troubleshooting OpenClaw agents, channels, models, tools, automation, or gateway operations. Reach for this skill when users ask about agent configuration, connecting messaging platforms, enabling tools, managing sessions, or deploying the OpenClaw gateway.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# clawdbot

OpenClaw is an agentic AI platform that runs a single embedded agent runtime with configurable channels (Discord, Telegram, WhatsApp, Slack, etc.), tools, models, and automation. Agents operate from a workspace directory with bootstrap files (AGENTS.md, SOUL.md, TOOLS.md, etc.) and are managed through a JSON5 config file at `~/.openclaw/openclaw.json`. The gateway listens on port 18789 and exposes a Control UI dashboard, RPC API, and CLI commands.

**Key files and commands:**
- Config: `~/.openclaw/openclaw.json` (JSON5 format, hot-reloads)
- Workspace: `~/.openclaw/workspace/` (agent files, sessions, skills)
- CLI: `openclaw` (gateway, config, agent, channel, model, session management)
- Dashboard: `openclaw dashboard` opens Control UI at http://127.0.0.1:18789
- Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: first-time installation, onboarding, workspace initialization
- **Configuring agents**: editing AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, or BOOTSTRAP.md
- **Connecting channels**: setting up Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Matrix, Mattermost, etc.
- **Managing models**: choosing providers (Anthropic, OpenAI, Google, etc.), setting fallbacks, switching models
- **Enabling tools**: browser, exec, web search, skills, plugins, sandboxing, cron jobs, webhooks
- **Controlling access**: DM policies (pairing, allowlist, open), group chat mention gating, user allowlists
- **Troubleshooting**: config validation, health checks, session management, channel restarts, log inspection
- **Scaling**: multi-agent routing, sandboxing, session scoping, background processes, remote gateways

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| First-time setup | `openclaw onboard --install-daemon` |
| Check gateway status | `openclaw gateway status` |
| Open dashboard | `openclaw dashboard` |
| View config | `openclaw config get <path>` |
| Set config value | `openclaw config set <path> <value>` |
| Validate config | `openclaw doctor` or `openclaw doctor --fix` |
| View logs | `openclaw logs` |
| List agents | `openclaw agents` |
| List sessions | `openclaw sessions` |
| List channels | `openclaw channels` |
| Restart gateway | `openclaw gateway restart` |

### Config file structure

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: "anthropic/claude-sonnet-4-6",
      skills: ["github", "weather"],  // optional allowlist
      sandbox: { mode: "non-main" },  // off | non-main | all
    },
    list: [
      { id: "main", default: true },
      { id: "work", workspace: "~/.openclaw/workspace-work" },
    ],
  },
  
  // Channels (Discord, Telegram, WhatsApp, etc.)
  channels: {
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing",  // pairing | allowlist | open | disabled
      allowFrom: ["tg:123"],
    },
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],
      groups: { "*": { requireMention: true } },
    },
  },
  
  // Tools and automation
  tools: {
    exec: { applyPatch: true },
    browser: { enabled: true },
  },
  cron: { enabled: true },
  hooks: { enabled: true, token: "secret" },
  
  // Gateway server
  gateway: {
    port: 18789,
    auth: { token: "optional-gateway-token" },
    reload: { mode: "hybrid" },
  },
}
```

### Bootstrap files (in workspace)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions, memory, context |
| `SOUL.md` | Persona, boundaries, tone, values |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `IDENTITY.md` | Agent name, emoji, vibe |
| `USER.md` | User profile, preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after completion) |

## Decision guidance

### When to use DM policies

| Policy | Use when | Example |
|--------|----------|---------|
| `pairing` | Unknown senders should approve first | Personal assistant, security-conscious |
| `allowlist` | Only specific users can DM | Work bot, restricted access |
| `open` | Anyone can DM (requires `allowFrom: ["*"]`) | Public bot, community assistant |
| `disabled` | Ignore all DMs | Group-only bot |

### When to use sandbox modes

| Mode | Use when | Trade-off |
|------|----------|-----------|
| `off` | Full trust, performance critical | No isolation, tool calls run in main process |
| `non-main` | Balance safety and performance | Main session unrestricted, others isolated |
| `all` | Maximum isolation | All sessions isolated, higher overhead |

### When to use session scopes

| Scope | Use when |
|-------|----------|
| `main` | Single shared conversation (personal assistant) |
| `per-peer` | One conversation per user across all channels |
| `per-channel-peer` | One conversation per user per channel (recommended) |
| `per-account-channel-peer` | One conversation per user per account per channel |

### When to use model failover

| Scenario | Configuration |
|----------|---------------|
| Primary + fallback | `model: { primary: "anthropic/claude-sonnet-4-6", fallbacks: ["openai/gpt-5.4"] }` |
| Cost optimization | Use cheaper fallback when primary quota exhausted |
| Regional failover | Fallback to different provider in different region |

## Workflow

### Setting up OpenClaw for the first time

1. **Install Node.js** (24 recommended, 22.14+ supported)
2. **Install OpenClaw**: `curl -fsSL https://openclaw.ai/install.sh \| bash`
3. **Run onboarding**: `openclaw onboard --install-daemon` (choose model provider, set API key)
4. **Verify gateway**: `openclaw gateway status` (should show port 18789)
5. **Open dashboard**: `openclaw dashboard` (Control UI at http://127.0.0.1:18789)
6. **Send first message** in Control UI chat
7. **Connect a channel** (Telegram is fastest: just a bot token)

### Configuring a channel (example: Telegram)

1. **Create bot** with BotFather on Telegram, get token
2. **Edit config**: `openclaw config set channels.telegram.botToken "123:abc"`
3. **Set DM policy**: `openclaw config set channels.telegram.dmPolicy "pairing"`
4. **Verify**: `openclaw channels` should show Telegram enabled
5. **Test**: Send DM to bot, get pairing code, approve in Control UI

### Switching models

1. **Check available models**: `openclaw config get agents.defaults.models`
2. **Set primary model**: `openclaw config set agents.defaults.model "openai/gpt-5.4"`
3. **Add fallback** (optional): `openclaw config set agents.defaults.model.fallbacks '["anthropic/claude-sonnet-4-6"]'`
4. **Verify**: Next agent turn uses new model
5. **In chat**: Use `/model` command to switch mid-conversation

### Enabling a tool (example: browser)

1. **Check if available**: `openclaw config get tools.browser`
2. **Enable**: `openclaw config set tools.browser.enabled true`
3. **Verify**: `openclaw doctor` (no errors)
4. **Test**: Ask agent to visit a URL
5. **Troubleshoot**: Check logs with `openclaw logs` if tool fails

### Restricting skills per agent

1. **Set default allowlist**: `openclaw config set agents.defaults.skills '["github", "weather"]'`
2. **Override for one agent**: `openclaw config set agents.list[1].skills '["docs-search"]'`
3. **Disable all skills**: `openclaw config set agents.list[2].skills '[]'`
4. **Verify**: `openclaw doctor` validates the config

### Troubleshooting config errors

1. **Validate**: `openclaw doctor` (shows exact issues)
2. **Auto-fix**: `openclaw doctor --fix` (applies safe repairs)
3. **Check last-known-good**: Look for `.clobbered.*` files next to `openclaw.json`
4. **Inspect logs**: `openclaw logs` for validation errors
5. **Restore**: If broken, `openclaw doctor --fix` restores from backup

## Common gotchas

- **Config must be valid JSON5**: Unknown keys, malformed types, or invalid values cause gateway to refuse startup. Run `openclaw doctor` to see exact issues.
- **Model refs use `provider/model` format**: `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. If model ID contains `/` (OpenRouter-style), include provider prefix.
- **Workspace must exist**: `agents.defaults.workspace` path must be a real directory. Use `openclaw setup` to initialize it.
- **Bootstrap files are injected once per session**: AGENTS.md, SOUL.md, etc. are read on first turn of new session. Changes take effect on next session, not current one.
- **DM policies are per-channel**: WhatsApp allowlist is separate from Telegram allowlist. Set each channel's `dmPolicy` and `allowFrom` independently.
- **Hot-reload doesn't restart gateway for all changes**: Gateway server changes (port, auth, TLS) require manual restart. Use `openclaw gateway restart`.
- **Skills config doesn't control which tools exist**: TOOLS.md is user guidance only. Built-in tools (read, exec, write) are always available unless blocked by tool policy.
- **Session IDs are stable**: Don't delete session files manually; use `openclaw sessions delete <id>` or reset via config.
- **Symlinked config files are unsupported**: OpenClaw may replace the symlink instead of preserving it. Use real file paths.
- **Env var substitution only works for uppercase names**: `${OPENAI_API_KEY}` works, `${openai_api_key}` does not. Missing vars throw error at load time.

## Verification checklist

Before submitting work with clawdbot:

- [ ] **Config validates**: Run `openclaw doctor` with no errors
- [ ] **Gateway is running**: `openclaw gateway status` shows port 18789
- [ ] **Workspace exists**: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.
- [ ] **Bootstrap files are readable**: Check file permissions and content
- [ ] **Channels are enabled**: `openclaw channels` shows expected channels
- [ ] **Models are configured**: `openclaw config get agents.defaults.model` returns valid ref
- [ ] **Skills are accessible**: `openclaw config get agents.defaults.skills` matches intended allowlist
- [ ] **No stale sessions**: Old sessions don't interfere with new ones (check `openclaw sessions`)
- [ ] **Logs are clean**: `openclaw logs` shows no validation or startup errors
- [ ] **Dashboard loads**: `openclaw dashboard` opens Control UI without errors
- [ ] **Test message works**: Send a message in Control UI and get a response
- [ ] **Channel test passes**: Send DM to connected channel (Telegram, Discord, etc.) and verify delivery

## Resources

**Comprehensive navigation**: https://docs.openclaw.ai/llms.txt

**Critical documentation pages**:
- [Getting started](https://docs.openclaw.ai/start/getting-started) — 5-minute setup walkthrough
- [Gateway configuration](https://docs.openclaw.ai/gateway/configuration) — config file structure, common tasks, hot-reload behavior
- [Agent runtime](https://docs.openclaw.ai/concepts/agent) — workspace contract, bootstrap files, sessions

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt