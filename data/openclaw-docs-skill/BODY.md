---
name: Clawdbot
description: Use when deploying, configuring, or troubleshooting OpenClaw gateways; setting up multi-channel AI agents; managing channels (Discord, Slack, Telegram, WhatsApp, etc.); configuring agent workspaces and sessions; or implementing agent routing and security policies.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted multi-channel gateway that connects AI agents to messaging platforms (Discord, Slack, Telegram, WhatsApp, iMessage, Signal, Matrix, Microsoft Teams, Google Chat, Feishu, and more). A single Gateway process bridges chat apps to coding agents with tool use, sessions, memory, and multi-agent routing. Configuration lives in `~/.openclaw/openclaw.json` (JSON5 format). Key CLI: `openclaw onboard`, `openclaw gateway`, `openclaw config`, `openclaw dashboard`. Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Deploying OpenClaw**: installing, onboarding, running the Gateway service
- **Configuring channels**: setting up Discord, Slack, Telegram, WhatsApp, or other messaging platforms
- **Managing agents**: creating multi-agent setups, routing messages to specific agents, configuring workspaces
- **Security and access control**: setting up pairing, allowlists, group mention gating, DM policies
- **Troubleshooting**: diagnosing Gateway health, channel connectivity, session issues, or configuration errors
- **Automation**: setting up cron jobs, webhooks, heartbeats, or task flows
- **Advanced setup**: sandboxing, model failover, custom providers, or remote access

## Quick reference

### Essential commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Check Gateway status | `openclaw gateway status` |
| Open dashboard | `openclaw dashboard` |
| View config | `openclaw config get <path>` |
| Edit config | `openclaw config set <path> <value>` |
| Validate config | `openclaw doctor` |
| List agents | `openclaw agents list` |
| Send test message | `openclaw message send --agent main "test"` |
| View logs | `openclaw logs` |
| Restart Gateway | `openclaw gateway restart` |

### Config file locations

- **Main config**: `~/.openclaw/openclaw.json` (JSON5 format)
- **Workspace**: `~/.openclaw/workspace/` (agent files: AGENTS.md, SOUL.md, TOOLS.md, etc.)
- **Sessions**: `~/.openclaw/agents/<agentId>/sessions/`
- **State directory**: `~/.openclaw/` (override with `OPENCLAW_STATE_DIR`)
- **Config path**: `~/.openclaw/openclaw.json` (override with `OPENCLAW_CONFIG_PATH`)

### Key config sections

| Section | Purpose | Example |
|---------|---------|---------|
| `agents.defaults.workspace` | Agent workspace directory | `"~/.openclaw/workspace"` |
| `agents.defaults.model` | Primary model and fallbacks | `{ primary: "anthropic/claude-sonnet-4-6" }` |
| `channels.<provider>` | Channel setup (Telegram, Discord, etc.) | `{ enabled: true, botToken: "..." }` |
| `channels.<provider>.dmPolicy` | DM access control | `"pairing"` \| `"allowlist"` \| `"open"` \| `"disabled"` |
| `session.dmScope` | Session isolation | `"per-channel-peer"` (recommended) |
| `agents.defaults.sandbox` | Sandbox mode | `{ mode: "non-main", scope: "agent" }` |
| `hooks` | Webhook endpoints | `{ enabled: true, token: "..." }` |
| `cron` | Scheduled jobs | `{ enabled: true, maxConcurrentRuns: 2 }` |

### Bootstrap files (agent workspace)

Create these in `~/.openclaw/workspace/`:

- **AGENTS.md** — operating instructions and memory
- **SOUL.md** — persona, boundaries, tone
- **TOOLS.md** — user-maintained tool notes and conventions
- **IDENTITY.md** — agent name, vibe, emoji
- **USER.md** — user profile and preferred address
- **BOOTSTRAP.md** — one-time first-run ritual (deleted after completion)

## Decision guidance

### When to use X vs Y

| Choice | Use X when | Use Y when |
|--------|-----------|-----------|
| **DM policy: pairing vs allowlist** | Unknown senders should approve once | Only specific users can message |
| **Session scope: per-peer vs per-channel-peer** | Single user, single channel | Multi-user or multi-channel setup |
| **Sandbox: off vs non-main vs all** | Trust the agent fully | Isolate untrusted sessions or all runs |
| **Config hot-reload: hybrid vs restart** | Want instant changes | Need guaranteed consistency |
| **Multi-agent: single vs multiple** | One agent per Gateway | Different agents for different channels/workspaces |
| **Channel: built-in vs plugin** | Discord, Slack, Telegram, WhatsApp | Matrix, Nostr, Twitch, Zalo |

## Workflow

### Typical deployment workflow

1. **Install OpenClaw**
   ```bash
   curl -fsSL https://openclaw.ai/install.sh | bash
   ```

2. **Run onboarding**
   ```bash
   openclaw onboard --install-daemon
   ```
   - Choose a model provider (Anthropic, OpenAI, Google, etc.)
   - Set API key
   - Configure initial Gateway settings

3. **Verify Gateway is running**
   ```bash
   openclaw gateway status
   ```

4. **Open the dashboard**
   ```bash
   openclaw dashboard
   ```
   - Opens browser at `http://127.0.0.1:18789`

5. **Send a test message** in the Control UI chat

6. **Connect a channel** (e.g., Telegram)
   - Get bot token from provider
   - Set in config: `channels.telegram.botToken`
   - Restart Gateway: `openclaw gateway restart`

7. **Configure access control**
   - Set `channels.telegram.dmPolicy: "pairing"` for unknown senders
   - Set `channels.telegram.allowFrom` for allowlist
   - Set group mention patterns if needed

8. **Test from the channel** and verify messages flow

### Typical configuration workflow

1. **Check current config**
   ```bash
   openclaw config get agents.defaults.workspace
   ```

2. **Make a change** (one of three ways)
   - **CLI**: `openclaw config set agents.defaults.model.primary "anthropic/claude-opus-4-6"`
   - **Control UI**: Open dashboard → Config tab → edit form
   - **Direct edit**: Edit `~/.openclaw/openclaw.json` directly

3. **Validate** (if editing directly)
   ```bash
   openclaw doctor
   ```

4. **Restart if needed**
   ```bash
   openclaw gateway restart
   ```
   (Most changes hot-apply; only gateway server settings need restart)

5. **Verify** in logs or Control UI

### Typical troubleshooting workflow

1. **Check Gateway health**
   ```bash
   openclaw gateway status
   openclaw health
   ```

2. **View recent logs**
   ```bash
   openclaw logs --tail 50
   ```

3. **Run diagnostics**
   ```bash
   openclaw doctor
   ```

4. **Check channel status**
   ```bash
   openclaw channels status
   ```

5. **Validate config**
   ```bash
   openclaw doctor --fix
   ```

6. **Restart if needed**
   ```bash
   openclaw gateway restart
   ```

## Common gotchas

- **Config validation is strict**: Unknown keys, malformed types, or invalid values cause the Gateway to refuse to start. Run `openclaw doctor` to see exact issues.

- **Symlinked config files are not supported**: OpenClaw may replace the symlink instead of preserving it. Use `OPENCLAW_CONFIG_PATH` to point at the real file if config is outside the default state directory.

- **Bootstrap files are only created once**: `BOOTSTRAP.md` is created only for a brand-new workspace. If you delete it after completing the ritual, it won't be recreated. Set `agents.defaults.skipBootstrap: true` to disable bootstrap file creation entirely.

- **Session IDs are stable**: Session transcripts are stored at `~/.openclaw/agents/<agentId>/sessions/<SessionId>.jsonl`. The session ID is chosen by OpenClaw and doesn't change.

- **Model refs require provider prefix**: Use `provider/model` format (e.g., `anthropic/claude-sonnet-4-6`). If the model ID itself contains `/` (OpenRouter-style), include the provider prefix (e.g., `openrouter/moonshotai/kimi-k2`).

- **DM policy defaults to "pairing"**: Unknown senders get a one-time pairing code. Set `dmPolicy: "allowlist"` and `allowFrom` to restrict to specific users.

- **Group messages require mention by default**: Set `requireMention: true` in group config and define `mentionPatterns` in agent config.

- **Config hot-reload can fail silently**: If you see `Config auto-restored from last-known-good`, inspect the `.clobbered.*` file next to `openclaw.json`, fix the issue, and run `openclaw config validate`.

- **Workspace must exist**: `agents.defaults.workspace` must point to a valid directory. Use `openclaw setup` to create it with default bootstrap files.

- **API keys in env vars**: Store API keys in `~/.openclaw/.env` (for daemon use) or set them in the parent process. Use `env.shellEnv.enabled: true` to auto-import from login shell.

- **Channels need explicit enable**: Set `channels.<provider>.enabled: true` to activate a channel. Some channels require additional config (bot tokens, service accounts, etc.).

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Config is valid: `openclaw doctor` shows no errors
- [ ] Workspace exists: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.
- [ ] Model is configured: `openclaw models status` shows available models
- [ ] Channels are connected: `openclaw channels status` shows enabled channels
- [ ] Test message works: Send a message in Control UI or connected channel and verify response
- [ ] Access control is set: `dmPolicy` and `allowFrom` are configured for security
- [ ] Logs are clean: `openclaw logs --tail 20` shows no errors or warnings
- [ ] Config hot-reloaded: If you edited `openclaw.json` directly, verify changes applied without restart (or restart if needed)

## Resources

- **Full navigation**: https://docs.openclaw.ai/llms.txt — comprehensive page-by-page listing for agent navigation
- **Getting Started**: https://docs.openclaw.ai/start/getting-started — installation and first chat in 5 minutes
- **Configuration Reference**: https://docs.openclaw.ai/gateway/configuration-reference — complete field-by-field config guide
- **Channels**: https://docs.openclaw.ai/channels — setup guides for Discord, Slack, Telegram, WhatsApp, and more

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt