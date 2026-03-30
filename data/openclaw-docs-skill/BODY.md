---
name: Clawdbot
description: Use when deploying a self-hosted AI agent gateway, configuring multi-channel messaging (WhatsApp, Telegram, Discord, iMessage, etc.), managing agent workspaces and sessions, setting up tools and skills, or troubleshooting gateway operations and channel connectivity.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted WebSocket gateway that connects AI agents to multiple messaging channels (WhatsApp, Telegram, Discord, iMessage, Signal, Slack, and more) simultaneously. Agents run in isolated workspaces with persistent sessions, tools, and memory. The Gateway is the single source of truth for routing, channel connections, and session management. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace), `~/.openclaw/agents/` (session storage). Primary CLI: `openclaw` with subcommands for setup, configuration, messaging, and gateway management. Full docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Deploying or configuring the Gateway** — setting up auth, channels, models, or tools
- **Managing agent workspaces** — creating isolated agents, configuring bootstrap files, or tuning session behavior
- **Connecting messaging channels** — pairing WhatsApp, Telegram, Discord, or other platforms
- **Troubleshooting channel connectivity or message delivery** — diagnosing pairing, allowlist, or mention-gating issues
- **Configuring tools and skills** — enabling/disabling tools, managing skill load paths, or gating skills by environment
- **Setting up multi-agent routing** — isolating agents by workspace, channel, or account
- **Automating workflows** — configuring cron jobs, hooks, webhooks, or heartbeat
- **Debugging agent behavior** — inspecting sessions, logs, memory, or config hot-reload issues

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Open dashboard | `openclaw dashboard` |
| Check gateway status | `openclaw gateway status` |
| View logs | `openclaw logs --follow` |
| Edit config interactively | `openclaw configure` |
| Get/set config values | `openclaw config get/set <path>` |
| List channels | `openclaw channels list` |
| Add a channel | `openclaw channels add --channel <name>` |
| Send a message | `openclaw message send --target <dest> --message <text>` |
| Run one agent turn | `openclaw agent --message <text>` |
| List skills | `openclaw skills list` |
| Install a skill | `openclaw skills install <slug>` |
| Validate config | `openclaw config validate` |
| Run health check | `openclaw health` |
| Diagnose issues | `openclaw doctor` |

### Config file locations and structure

```
~/.openclaw/
├── openclaw.json          # Main config (JSON5 format)
├── workspace/             # Default agent workspace
│   ├── AGENTS.md          # Operating instructions
│   ├── SOUL.md            # Persona and boundaries
│   ├── TOOLS.md           # User-maintained tool notes
│   ├── BOOTSTRAP.md       # One-time setup ritual (deleted after)
│   ├── IDENTITY.md        # Agent name/emoji
│   ├── USER.md            # User profile
│   └── skills/            # Workspace-specific skills
├── agents/                # Session storage
│   └── <agentId>/
│       └── sessions/
│           └── <sessionId>.jsonl
└── skills/                # Managed/local skills (override bundled)
```

### Config schema essentials

```json5
{
  // Agent workspace and defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      models: { /* allowlist */ },
      sandbox: { mode: "off" },  // off | non-main | all
      blockStreamingDefault: "off",
    },
    list: [
      { id: "main", default: true, workspace: "~/.openclaw/workspace" },
      // multi-agent: { id: "work", workspace: "~/.openclaw/workspace-work" }
    ],
  },

  // Channel configuration
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"],  // DM allowlist
      dmPolicy: "pairing",  // pairing | allowlist | open | disabled
      groups: { "*": { requireMention: true } },
    },
    telegram: {
      enabled: true,
      botToken: "123:abc",
      dmPolicy: "pairing",
    },
    // discord, slack, signal, imessage, googlechat, msteams, etc.
  },

  // Gateway server
  gateway: {
    port: 18789,
    bind: "loopback",  // loopback | lan | tailnet | auto | custom
    auth: { mode: "token", token: "..." },  // or password
    reload: { mode: "hybrid" },  // hot | restart | off
  },

  // Session and message routing
  session: {
    dmScope: "per-channel-peer",  // main | per-peer | per-channel-peer
    reset: { mode: "daily", atHour: 4, idleMinutes: 120 },
  },

  // Tools and skills
  tools: {
    profile: "full",  // full | coding | messaging | minimal
    allow: ["group:fs", "browser"],
    deny: ["exec"],
  },
  skills: {
    entries: {
      "image-lab": { enabled: true, apiKey: "..." },
    },
  },

  // Automation
  cron: { enabled: true },
  hooks: { enabled: true, token: "..." },
  agents: { defaults: { heartbeat: { every: "30m" } } },
}
```

### DM access policies

| Policy | Behavior |
|--------|----------|
| `pairing` | Unknown senders get a one-time pairing code; approved senders are stored |
| `allowlist` | Only senders in `allowFrom` or paired store can message |
| `open` | All DMs allowed (requires `allowFrom: ["*"]`) |
| `disabled` | Ignore all DMs |

### Tool groups and profiles

| Group | Tools |
|-------|-------|
| `group:fs` | read, write, edit, apply_patch |
| `group:runtime` | exec, bash, process, code_execution |
| `group:web` | web_search, x_search, web_fetch |
| `group:sessions` | sessions_list, sessions_history, subagents |
| `group:messaging` | message |
| `group:ui` | browser, canvas |

## Decision guidance

### When to use `pairing` vs `allowlist` vs `open`

| Scenario | Policy | Why |
|----------|--------|-----|
| Personal use, unknown senders | `pairing` | Approve once, then auto-allow; balances security and convenience |
| Locked-down production, known senders only | `allowlist` | No approval flow; strict control |
| Public bot, any sender | `open` | Requires `allowFrom: ["*"]`; use with caution |
| Disabled channel | `disabled` | Ignore all DMs; use for group-only channels |

### When to use single agent vs multi-agent

| Setup | Use case |
|-------|----------|
| Single agent (default) | Personal assistant, one workspace, one set of tools |
| Multi-agent | Separate work/home, different tool policies, isolated sessions per workspace |

### When to hot-reload vs restart the Gateway

| Change | Hot-reload? | Restart? |
|--------|------------|----------|
| Channel config, models, tools, skills | Yes | No (hybrid mode auto-restarts if needed) |
| Gateway port, bind, auth, TLS | No | Yes |
| Plugins, discovery, infrastructure | No | Yes |

### When to use skills vs tools vs plugins

| Layer | When to use |
|-------|------------|
| **Tools** | Built-in agent capabilities (exec, browser, web_search, message) |
| **Skills** | Markdown guidance injected into system prompt; teach agent when/how to use tools |
| **Plugins** | Package channels, model providers, tools, skills, and custom logic together |

## Workflow

### 1. Initial setup and onboarding

1. **Install OpenClaw**: `npm install -g openclaw@latest` or use the install script
2. **Run onboarding**: `openclaw onboard --install-daemon`
   - Choose a model provider (Anthropic, OpenAI, etc.)
   - Set API key
   - Configure gateway auth (token or password)
   - Optionally add channels
3. **Verify the Gateway**: `openclaw gateway status`
4. **Open the dashboard**: `openclaw dashboard` (browser at http://127.0.0.1:18789)
5. **Send a test message** in the Control UI chat

### 2. Configuring a messaging channel

1. **Choose a channel** (WhatsApp, Telegram, Discord, etc.)
2. **Read the channel-specific docs** (e.g., `/channels/telegram`)
3. **Gather credentials** (bot token, API key, etc.)
4. **Add the channel**:
   ```bash
   openclaw channels add --channel telegram --account default --token $BOT_TOKEN
   ```
5. **Set DM policy** in config:
   ```json5
   { channels: { telegram: { dmPolicy: "pairing", allowFrom: ["*"] } } }
   ```
6. **Test**: Send a DM to the bot; if pairing is enabled, approve the pairing code
7. **Verify**: `openclaw channels status`

### 3. Configuring tools and skills

1. **Check available skills**: `openclaw skills list`
2. **Check eligible skills** (missing requirements): `openclaw skills check`
3. **Install a skill from ClawHub**: `openclaw skills install <slug>`
4. **Enable/disable tools** in config:
   ```json5
   { tools: { profile: "coding", deny: ["exec"] } }
   ```
5. **Gate skills by environment** (e.g., require an API key):
   ```json5
   { skills: { entries: { "image-lab": { enabled: true, apiKey: "..." } } } }
   ```
6. **Verify**: Run `/status` in chat or `openclaw skills check`

### 4. Setting up multi-agent routing

1. **Create a second workspace**:
   ```bash
   mkdir -p ~/.openclaw/workspace-work
   ```
2. **Add the agent to config**:
   ```json5
   {
     agents: {
       list: [
         { id: "home", default: true, workspace: "~/.openclaw/workspace" },
         { id: "work", workspace: "~/.openclaw/workspace-work" },
       ],
     },
   }
   ```
3. **Create bootstrap files** in the new workspace (AGENTS.md, SOUL.md, etc.)
4. **Add routing bindings**:
   ```json5
   {
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "business" } },
     ],
   }
   ```
5. **Verify**: `openclaw agents list` and `openclaw agents bindings`

### 5. Troubleshooting a channel issue

1. **Check channel status**: `openclaw channels status --probe`
2. **View recent logs**: `openclaw channels logs --channel <name> --lines 50`
3. **Run diagnostics**: `openclaw doctor`
4. **Check pairing state** (if DM policy is pairing): `openclaw pairing list <channel>`
5. **Verify config** against the channel docs (token, allowlist, mention patterns)
6. **Check Gateway logs**: `openclaw logs --follow`
7. **Restart the channel** if needed: `openclaw gateway restart`

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor --fix` to repair.
- **DM allowlist is per-channel**: `channels.whatsapp.allowFrom` does not apply to Telegram. Set allowlists for each channel separately.
- **Mention patterns are regex**: In `mentionPatterns`, use safe regex (e.g., `@openclaw`, `openclaw`). Avoid complex patterns that could cause ReDoS.
- **Bootstrap files are one-time**: `BOOTSTRAP.md` is deleted after the first run. If you delete it manually, it won't be recreated on restart.
- **Skills are loaded at session start**: Changes to skills or config take effect on the next new session, not mid-conversation.
- **Hot-reload debounce**: Config changes are debounced by 300ms by default. Rapid edits may coalesce into one reload.
- **Session scope affects routing**: `dmScope: "main"` shares sessions across all DMs; `per-channel-peer` isolates by channel and sender. Choose carefully for multi-user setups.
- **Workspace is the only working directory**: All tool operations (exec, read, write) use `agents.defaults.workspace` as `cwd`. Relative paths are resolved from there.
- **Model refs require provider prefix**: Use `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. If you omit the provider, OpenClaw treats it as an alias or default-provider model.
- **Pairing codes expire**: Pairing approval codes are one-time use. If a sender loses the code, they must request a new pairing.
- **Group mention gating is channel-specific**: `channels.whatsapp.groups.*.requireMention` does not affect Telegram. Configure per-channel.
- **Sandboxing requires Docker**: If `agents.defaults.sandbox.mode` is not `off`, Docker must be installed and the sandbox image must be built (`scripts/sandbox-setup.sh`).
- **Secrets are not persisted in logs**: API keys and tokens are masked in logs, but treat all logs as potentially sensitive.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] **Config is valid**: Run `openclaw config validate` (no errors)
- [ ] **Gateway is running**: `openclaw gateway status` shows "running"
- [ ] **Channels are connected**: `openclaw channels status` shows all expected channels as "connected"
- [ ] **Agent responds**: Send a test message in the Control UI or via a channel; agent replies within timeout
- [ ] **Skills are eligible**: `openclaw skills check` shows required skills as "ready" (no missing bins/env/config)
- [ ] **Sessions persist**: Send a message, then send a follow-up; agent remembers context from the first message
- [ ] **Logs are clean**: `openclaw logs --limit 50` shows no ERROR or WARN entries related to your changes
- [ ] **Multi-agent routing works** (if configured): Messages to different channels/accounts route to the correct agent
- [ ] **DM policy is enforced**: Unknown senders are blocked or require pairing; allowlisted senders can message
- [ ] **Tools are available**: Run `/status` in chat; agent can see and call expected tools

## Resources

- **Comprehensive page navigation**: https://docs.openclaw.ai/llms.txt
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **Channel setup guides**: https://docs.openclaw.ai/channels (WhatsApp, Telegram, Discord, Signal, iMessage, etc.)
- **CLI reference**: https://docs.openclaw.ai/cli/index
- **Troubleshooting**: https://docs.openclaw.ai/gateway/troubleshooting and https://docs.openclaw.ai/channels/troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt