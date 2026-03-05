---
name: Clawdbot
description: Use when building, configuring, or troubleshooting a self-hosted AI agent gateway that connects messaging platforms (WhatsApp, Telegram, Discord, Slack, iMessage, etc.) to LLM providers. Reach for this skill when setting up channels, managing agent workspaces, configuring tools and permissions, handling multi-agent routing, or debugging session/memory issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw (clawdbot) Skill

## Product summary

OpenClaw is a self-hosted gateway that bridges messaging apps (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, Google Chat, Mattermost, MS Teams, and more) to AI agents powered by LLM providers (Anthropic, OpenAI, Mistral, etc.). The Gateway is the always-on control plane; agents run inside it with isolated workspaces, sessions, and memory. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, USER.md, MEMORY.md), `~/.openclaw/agents/<agentId>/sessions/` (chat history). Primary CLI: `openclaw` (gateway, channels, agents, models, skills, sessions, etc.). See [https://docs.openclaw.ai](https://docs.openclaw.ai) for full documentation.

## When to use

- **Setting up a new Gateway**: Run `openclaw onboard` to configure channels, models, and workspace interactively.
- **Adding messaging channels**: Use `openclaw channels add --channel <name>` to connect WhatsApp, Telegram, Discord, etc.
- **Configuring agent behavior**: Edit workspace files (AGENTS.md for rules, SOUL.md for persona, USER.md for user context, MEMORY.md for long-term memory).
- **Managing tools and permissions**: Configure tool policies, sandbox mode, and elevated access in `openclaw.json`.
- **Running multiple agents**: Set up multi-agent routing with separate workspaces and bindings.
- **Debugging sessions and memory**: Use `openclaw sessions` and `openclaw memory` commands to inspect and manage state.
- **Automating tasks**: Set up cron jobs, webhooks, or hooks for scheduled/event-driven agent runs.
- **Troubleshooting channel delivery**: Run `openclaw channels status --probe` and `openclaw doctor` to diagnose issues.

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initialize Gateway + workspace | `openclaw setup` or `openclaw onboard` |
| Add a messaging channel | `openclaw channels add --channel <whatsapp\|telegram\|discord\|slack\|signal\|imessage\|googlechat\|msteams>` |
| List configured channels | `openclaw channels list` |
| Check channel health | `openclaw channels status --probe` |
| Manage agents | `openclaw agents list`, `openclaw agents add <name>` |
| Switch/set default model | `openclaw models status`, `/model <provider/model>` in chat |
| View sessions | `openclaw sessions list`, `openclaw sessions history <sessionId>` |
| Search memory | `openclaw memory search <query>` |
| Run diagnostics | `openclaw doctor`, `openclaw doctor --fix` |
| View logs | `openclaw logs --lines 100`, `openclaw channels logs` |
| Manage skills | `clawhub search <query>`, `clawhub install <slug>`, `clawhub update --all` |

### Workspace file structure

| File | Purpose | Scope |
|------|---------|-------|
| `AGENTS.md` | Operating instructions, rules, priorities | Loaded every session |
| `SOUL.md` | Persona, tone, boundaries | Loaded every session |
| `USER.md` | User context and preferences | Loaded every session |
| `IDENTITY.md` | Agent name, vibe, emoji | Created during bootstrap |
| `TOOLS.md` | Local tool notes (not enforced) | Reference only |
| `MEMORY.md` | Curated long-term memory | Loaded in main session only |
| `memory/YYYY-MM-DD.md` | Daily memory log | Auto-created per day |
| `HEARTBEAT.md` | Tiny checklist for scheduled runs | Optional, keep short |
| `BOOTSTRAP.md` | One-time first-run ritual | Delete after first run |
| `skills/` | Workspace-specific skills | Override bundled skills |

### Config file structure (`~/.openclaw/openclaw.json`)

```json5
{
  // Agent defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: {
        primary: "anthropic/claude-sonnet-4-5",
        fallbacks: ["openai/gpt-5.2"]
      },
      models: {
        "anthropic/claude-sonnet-4-5": { alias: "Sonnet" },
        "openai/gpt-5.2": { alias: "GPT" }
      }
    },
    list: [
      { id: "main", default: true, workspace: "~/.openclaw/workspace" }
    ]
  },

  // Channels (messaging platforms)
  channels: {
    whatsapp: {
      enabled: true,
      dmPolicy: "pairing", // pairing | allowlist | open | disabled
      allowFrom: ["+15551234567"]
    },
    telegram: {
      enabled: true,
      botToken: "YOUR_BOT_TOKEN",
      dmPolicy: "pairing"
    },
    discord: {
      enabled: true,
      token: "YOUR_BOT_TOKEN"
    }
  },

  // Tool policies and sandbox
  tools: {
    profile: "default", // base allowlist
    allow: ["exec", "browser", "web_search"],
    deny: []
  },

  sandbox: {
    mode: "host" // host | docker | disabled
  },

  // Sessions
  session: {
    dmScope: "per-channel-peer",
    reset: {
      mode: "daily",
      atHour: 4
    }
  },

  // Gateway
  gateway: {
    port: 8000,
    bind: "loopback" // loopback | lan | tailnet | auto | custom
  }
}
```

### Channel DM policies

| Policy | Behavior |
|--------|----------|
| `pairing` | Unknown senders get one-time approval code |
| `allowlist` | Only senders in `allowFrom` array |
| `open` | Allow all DMs (requires `allowFrom: ["*"]`) |
| `disabled` | Ignore all DMs |

### Tool groups (shorthand)

| Group | Expands to |
|-------|-----------|
| `group:runtime` | `exec`, `bash`, `process` |
| `group:fs` | `read`, `write`, `edit`, `apply_patch` |
| `group:sessions` | `sessions_list`, `sessions_history`, `sessions_send`, `sessions_spawn` |
| `group:memory` | `memory_search`, `memory_get` |
| `group:ui` | `browser`, `canvas` |
| `group:automation` | `cron`, `gateway` |
| `group:messaging` | `message` |
| `group:web` | `web_search`, `web_fetch` |
| `group:openclaw` | All built-in tools |

## Decision guidance

### When to use sandbox vs host mode

| Scenario | Recommendation |
|----------|-----------------|
| Untrusted agents or multi-tenant | Use `sandbox: { mode: "docker" }` |
| Single trusted agent, full system access | Use `sandbox: { mode: "host" }` |
| Hybrid (some agents sandboxed) | Per-agent config: `agents.list[].sandbox.mode` |
| Need host access from sandbox | Use `tools.elevated` (sender-based allowlist) |

### When to use tool policy vs sandbox

| Need | Use |
|------|-----|
| Decide which tools exist/are callable | Tool policy (`tools.allow`, `tools.deny`) |
| Decide where tools run (Docker vs host) | Sandbox mode (`sandbox.mode`) |
| Escape sandbox for specific commands | Elevated mode (`tools.elevated`) |

### When to use sessions vs memory

| Use case | Approach |
|----------|----------|
| Short-term context (current chat) | Session (automatic, per-channel-peer) |
| Long-term facts (user preferences, history) | MEMORY.md or memory/YYYY-MM-DD.md |
| Durable behavior across restarts | Write to AGENTS.md or MEMORY.md |
| Daily summary of conversations | Enable `session-memory` hook |

### When to use multi-agent routing

| Scenario | Setup |
|----------|-------|
| One bot, multiple users | Single agent, per-channel-peer sessions |
| Separate work/home bots | Multi-agent with bindings by channel/account |
| Team coordinator + workers | One main agent + subagents via `agent_send` tool |

## Workflow

### 1. Initial setup

1. Run `openclaw onboard` (interactive) or `openclaw setup` (minimal).
2. Choose a model provider (Anthropic, OpenAI, etc.) and authenticate.
3. Optionally add channels (WhatsApp, Telegram, Discord, etc.).
4. Confirm Gateway is running: `openclaw status`.

### 2. Configure workspace

1. Navigate to `~/.openclaw/workspace/` (or your configured workspace).
2. Edit `AGENTS.md` with operating instructions and rules.
3. Edit `SOUL.md` with persona and tone.
4. Edit `USER.md` with user context.
5. Optionally create `MEMORY.md` for long-term facts.
6. Commit to git (recommended): `git init && git add . && git commit -m "initial"`.

### 3. Add a messaging channel

1. Run `openclaw channels add --channel <name>` (interactive) or use flags for non-interactive mode.
2. For WhatsApp: scan QR code.
3. For Telegram/Discord: provide bot token.
4. Verify: `openclaw channels status --probe`.

### 4. Configure tool access

1. Edit `~/.openclaw/openclaw.json` to set `tools.allow` and `tools.deny`.
2. For sandboxed agents, also set `sandbox.mode: "docker"`.
3. For elevated host access, configure `tools.elevated.allowFrom: ["sender-id"]`.
4. Reload: `openclaw gateway restart` or restart the daemon.

### 5. Test and debug

1. Send a message to the bot on a configured channel.
2. Check logs: `openclaw logs --lines 50`.
3. If no reply, run `openclaw doctor --fix` to diagnose.
4. Inspect session: `openclaw sessions history <sessionId>`.
5. Check memory: `openclaw memory search <query>`.

### 6. Set up automation (optional)

1. For scheduled tasks: `openclaw cron add --schedule "0 9 * * *" --command "..."`.
2. For event-driven tasks: Enable hooks in config (`automation.hooks.enabled: true`).
3. For webhooks: Configure `automation.webhook` in config and POST to `/webhook/<name>`.

## Common gotchas

- **Bot doesn't reply**: Check `dmPolicy` (default is `pairing`; unknown senders need approval). Run `openclaw channels status --probe` and `openclaw doctor`.
- **Sessions reset unexpectedly**: Confirm `session.reset.mode` in config. Default is daily at 4 AM. Use `session.reset.mode: "idle"` for idle-based reset.
- **Memory lost after restart**: Ensure workspace is on the same host (remote mode uses gateway host's workspace, not your local machine). Write durable facts to AGENTS.md or MEMORY.md, not chat history.
- **Tool denied but should be allowed**: Check tool policy (`tools.allow`/`tools.deny`) first; sandbox mode is secondary. Deny always wins.
- **Sandbox mode blocks everything**: Confirm `sandbox.mode: "host"` or use `tools.elevated` for host escape hatch.
- **Multi-agent routing not working**: Verify `bindings` array matches channel/account/peer. Use `openclaw agents list` to confirm agents exist.
- **Config validation errors**: Run `openclaw doctor --fix` to auto-repair common issues.
- **Large workspace files truncated**: Adjust `agents.defaults.bootstrapMaxChars` (default 20000) and `agents.defaults.bootstrapTotalMaxChars` (default 150000).
- **Channel auth fails**: Verify token/credentials are in `~/.openclaw/.env` or config. Use `openclaw models status` to check provider auth.
- **Skill not found**: Install from ClawHub: `clawhub install <slug>`. Workspace skills override bundled skills when names collide.

## Verification checklist

Before submitting work or declaring setup complete:

- [ ] Gateway is running: `openclaw status` returns healthy.
- [ ] At least one channel is configured: `openclaw channels list` shows entries.
- [ ] Model is set and authenticated: `openclaw models status` shows no errors.
- [ ] Workspace files exist: `ls ~/.openclaw/workspace/{AGENTS,SOUL,USER}.md`.
- [ ] Test message sent and replied: Send a message on a configured channel and confirm reply.
- [ ] Logs are clean: `openclaw logs --lines 20` shows no ERROR or WARN (except expected ones).
- [ ] Config is valid: `openclaw doctor` reports no issues (or `--fix` auto-repairs).
- [ ] Sessions are persisting: `openclaw sessions list` shows recent entries.
- [ ] Memory is accessible: `openclaw memory search <test-query>` returns results (if memory enabled).
- [ ] Tools are callable: Test a tool in chat (e.g., `/web_search <query>` or `/exec echo test`).

## Resources

- **Comprehensive page listing**: [https://docs.openclaw.ai/llms.txt](https://docs.openclaw.ai/llms.txt)
- **Configuration guide**: [https://docs.openclaw.ai/gateway/configuration](https://docs.openclaw.ai/gateway/configuration)
- **Agent workspace & memory**: [https://docs.openclaw.ai/concepts/agent-workspace](https://docs.openclaw.ai/concepts/agent-workspace)
- **Channels setup**: [https://docs.openclaw.ai/channels/index](https://docs.openclaw.ai/channels/index)

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt