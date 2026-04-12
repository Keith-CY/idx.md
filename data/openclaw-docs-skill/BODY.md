---
name: Clawdbot
description: Use when deploying, configuring, or troubleshooting OpenClaw — a self-hosted multi-channel AI agent gateway. Reach for this skill when setting up channels (Discord, Telegram, WhatsApp, etc.), configuring agents and models, managing tools and skills, or working with the CLI and Control UI.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill

## Product summary

OpenClaw is a self-hosted, multi-channel gateway that connects AI agents to messaging platforms (Discord, Telegram, WhatsApp, Slack, Signal, iMessage, Matrix, and 15+ others). The agent runs on your hardware, processes messages from any connected channel, and responds with tool use, file I/O, web browsing, and custom skills. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md). Primary CLI: `openclaw` with subcommands for setup, channels, config, agents, and gateway management. See [docs.openclaw.ai](https://docs.openclaw.ai) for the full reference.

## When to use

Reach for this skill when:
- **Deploying OpenClaw**: installing, onboarding, running the gateway service
- **Configuring channels**: setting up WhatsApp, Telegram, Discord, or other messaging platforms
- **Managing agents**: creating isolated agents, routing messages, configuring workspaces
- **Tuning models and tools**: selecting providers, setting fallbacks, allowing/denying tools
- **Troubleshooting**: diagnosing channel health, session issues, config errors
- **Automating workflows**: setting up cron jobs, hooks, heartbeats, or multi-agent routing
- **Extending capabilities**: installing skills, plugins, or custom tools

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Open dashboard | `openclaw dashboard` |
| Check status | `openclaw gateway status` |
| View config | `openclaw config get <path>` |
| Edit config | `openclaw config set <path> <value>` |
| Add channel | `openclaw channels add --channel telegram --token <token>` |
| List agents | `openclaw agents list` |
| Create agent | `openclaw agents add <name> --workspace <dir>` |
| Restart gateway | `openclaw gateway restart` |
| View logs | `openclaw logs --follow` |

### Config file structure

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      skills: ["github", "web-search"],
    },
    list: [
      { id: "main", default: true },
      { id: "work", workspace: "~/.openclaw/workspace-work" },
    ],
  },
  channels: {
    whatsapp: { allowFrom: ["+15555550123"], groups: { "*": { requireMention: true } } },
    telegram: { botToken: "123:abc", dmPolicy: "pairing" },
    discord: { botToken: "token", dmPolicy: "allowlist" },
  },
  gateway: { port: 18789, auth: { token: "secret" } },
  tools: { profile: "coding", allow: ["browser", "exec"], deny: [] },
}
```

### Workspace files (injected into agent context)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `IDENTITY.md` | Agent name, emoji, theme |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after) |
| `MEMORY.md` | Long-term memory and recall |

### Tool groups (for allow/deny)

| Group | Tools |
|-------|-------|
| `group:fs` | read, write, edit, apply_patch |
| `group:runtime` | exec, process, code_execution |
| `group:web` | web_search, x_search, web_fetch |
| `group:ui` | browser, canvas |
| `group:sessions` | sessions_list, sessions_history, subagents |
| `group:media` | image, image_generate, music_generate, video_generate, tts |
| `group:messaging` | message |
| `group:automation` | cron, gateway |

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| **First time setup** | `openclaw onboard` | Interactive wizard handles all choices |
| **Editing one config value** | `openclaw config set` | Faster than editing JSON directly |
| **Large config changes** | Edit `~/.openclaw/openclaw.json` directly | Batch changes, then hot-reload applies |
| **Restricting tools globally** | `tools.profile: "coding"` | Baseline for all agents |
| **Restricting tools per agent** | `agents.list[].tools.profile` | Override defaults for one agent |
| **Single shared agent** | `agents.defaults.workspace` | Simplest setup |
| **Multiple isolated agents** | `agents.list[]` with separate workspaces | Each agent has own sessions and memory |
| **DM safety: known users** | `dmPolicy: "allowlist"` + `allowFrom` | Explicit control |
| **DM safety: new users** | `dmPolicy: "pairing"` | One-time approval code per sender |
| **Group mention gating** | `channels.<provider>.groups` + `mentionPatterns` | Prevent spam in groups |
| **Debugging config** | `openclaw doctor` | Detects and fixes common issues |
| **Debugging channels** | `openclaw channels status --probe` | Live health check per account |

## Workflow

1. **Install and onboard**
   - Run `openclaw onboard --install-daemon`
   - Choose a model provider and API key
   - Set gateway port and auth token
   - Verify with `openclaw gateway status`

2. **Configure the first channel**
   - Run `openclaw channels add --channel telegram --token <bot-token>`
   - Or edit `channels.telegram` in `~/.openclaw/openclaw.json`
   - Test with `openclaw channels status --probe`

3. **Set up agent workspace**
   - Create `~/.openclaw/workspace/` if missing
   - Edit `AGENTS.md` with operating instructions
   - Edit `SOUL.md` with persona and boundaries
   - Edit `IDENTITY.md` with agent name and emoji

4. **Configure tools and skills**
   - Set `tools.profile` to `coding`, `messaging`, or `minimal`
   - Use `tools.allow` / `tools.deny` for fine-grained control
   - Install skills with `openclaw skills install <slug>`
   - Verify with `openclaw skills check`

5. **Test and iterate**
   - Open `openclaw dashboard` and send a test message
   - Check logs with `openclaw logs --follow`
   - Adjust config and let hot-reload apply changes
   - Use `openclaw doctor` to diagnose issues

6. **Add more channels or agents**
   - For channels: `openclaw channels add --channel <name>`
   - For agents: `openclaw agents add <id> --workspace <dir>`
   - Set up routing with `agents.list[]` and `bindings`

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the gateway to refuse to start. Run `openclaw doctor` to see exact errors.
- **Workspace must exist**: If `agents.defaults.workspace` points to a missing directory, create it first or run `openclaw setup`.
- **Channel tokens are secrets**: Store in env vars or use SecretRef (`source: "env"`) in config, not plaintext.
- **Hot-reload doesn't restart for all changes**: Gateway server changes (port, auth, TLS) require manual restart. Use `openclaw gateway restart`.
- **DM allowlists are per-channel**: Setting `allowFrom` on WhatsApp doesn't affect Telegram. Configure each channel separately.
- **Group mention patterns are regex**: Use safe patterns like `@openclaw` or `openclaw` — avoid complex regex that could break.
- **Sessions are scoped by default**: Direct messages collapse into `main` session; groups are isolated. Change with `session.dmScope`.
- **Skills must be installed**: Just adding a skill folder doesn't enable it. Use `openclaw skills install` or place in `~/.openclaw/skills/`.
- **Tool groups are case-sensitive**: Use `group:fs`, not `group:FS`.
- **Sandbox requires Docker**: If `agents.defaults.sandbox.mode` is set, run `scripts/sandbox-setup.sh` first.
- **Model refs need provider prefix**: Use `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`.
- **Env var substitution in config**: Use `${VAR_NAME}` syntax; missing vars throw errors at load time.

## Verification checklist

Before submitting work:

- [ ] Config passes validation: `openclaw config validate` returns no errors
- [ ] Gateway is running: `openclaw gateway status` shows `listening`
- [ ] Channels are healthy: `openclaw channels status --probe` shows `works` or `ok`
- [ ] Agent workspace exists: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.
- [ ] Skills are ready: `openclaw skills check` shows no missing requirements
- [ ] Tools are allowed: `openclaw config get tools.allow` includes needed tools
- [ ] Test message works: Send a message via the dashboard or channel and verify response
- [ ] Logs are clean: `openclaw logs --limit 50` shows no errors or warnings
- [ ] Hot-reload applied: If you edited config directly, wait 1–2 seconds and verify with `openclaw config get`

## Resources

- **Full navigation**: [docs.openclaw.ai/llms.txt](https://docs.openclaw.ai/llms.txt) — comprehensive page-by-page index for agent navigation
- **Configuration reference**: [docs.openclaw.ai/gateway/configuration-reference](https://docs.openclaw.ai/gateway/configuration-reference) — every config field with defaults and examples
- **CLI reference**: [docs.openclaw.ai/cli/index](https://docs.openclaw.ai/cli/index) — all commands, subcommands, and options
- **Channels setup**: [docs.openclaw.ai/channels](https://docs.openclaw.ai/channels) — platform-specific guides for Discord, Telegram, WhatsApp, etc.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt