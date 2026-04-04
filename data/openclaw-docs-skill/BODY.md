---
name: Clawdbot
description: Use when deploying and managing a self-hosted AI agent gateway, configuring messaging channels (WhatsApp, Telegram, Discord, iMessage, etc.), building custom skills, setting up multi-agent routing, or troubleshooting agent behavior and channel connectivity.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted WebSocket gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, and more) to AI agents. A single Gateway process routes inbound messages to agents, manages sessions, executes tools, and delivers replies back to channels. Agents run the embedded Pi agent core with access to tools (browser, exec, web search, skills), memory, and multi-agent routing. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent workspace with AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, MEMORY.md, and skills/). Primary CLI: `openclaw` with subcommands for setup, config, agents, channels, skills, and gateway management. See the full docs at https://docs.openclaw.ai.

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, onboarding, configuring the Gateway, or initializing workspaces
- **Connecting channels**: adding WhatsApp, Telegram, Discord, or other messaging platforms; troubleshooting channel connectivity
- **Building skills**: creating custom SKILL.md files to teach agents new capabilities
- **Configuring agents**: setting models, tools, sandbox, session behavior, or multi-agent routing
- **Managing sessions**: understanding session scoping, memory, context, and compaction
- **Troubleshooting**: diagnosing agent behavior, channel issues, config validation errors, or tool failures
- **Automating workflows**: setting up cron jobs, hooks, heartbeats, or webhooks

## Quick reference

### Essential commands

| Task | Command |
|------|---------|
| Install OpenClaw | `npm install -g openclaw@latest` |
| Run onboarding | `openclaw onboard --install-daemon` |
| Check Gateway status | `openclaw gateway status` |
| Open Control UI | `openclaw dashboard` |
| Send a test message | `openclaw agent --message "hello"` |
| List skills | `openclaw skills list` |
| View config | `openclaw config get agents.defaults.workspace` |
| Set a config value | `openclaw config set agents.defaults.model.primary "anthropic/claude-sonnet-4-6"` |
| Validate config | `openclaw config validate` |
| Run diagnostics | `openclaw doctor` |
| Restart Gateway | `openclaw gateway restart` |

### Key file paths

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config file (JSON5 format) |
| `~/.openclaw/workspace/` | Default agent workspace |
| `~/.openclaw/workspace/AGENTS.md` | Agent instructions and memory |
| `~/.openclaw/workspace/SOUL.md` | Agent persona and boundaries |
| `~/.openclaw/workspace/TOOLS.md` | User notes on tool usage |
| `~/.openclaw/workspace/IDENTITY.md` | Agent name and identity |
| `~/.openclaw/workspace/USER.md` | User profile |
| `~/.openclaw/workspace/MEMORY.md` | Long-term memory |
| `~/.openclaw/workspace/skills/` | Custom workspace skills |
| `~/.openclaw/agents/<agentId>/sessions/` | Session transcripts (JSONL) |

### Config structure (minimal)

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" }
    }
  },
  channels: {
    whatsapp: {
      enabled: true,
      allowFrom: ["+15555550123"]
    }
  }
}
```

### Channel setup pattern

All channels follow the same config structure:

```json5
{
  channels: {
    <channel>: {
      enabled: true,
      <channel-specific-auth>,
      dmPolicy: "pairing",  // pairing | allowlist | open | disabled
      allowFrom: ["<id>"],
      groups: { "*": { requireMention: true } }
    }
  }
}
```

### Skill metadata (SKILL.md frontmatter)

```markdown
---
name: skill_name
description: One-line description for the agent
metadata: {
  "openclaw": {
    "requires": { "bins": ["tool"], "env": ["VAR"], "config": ["path.to.config"] },
    "os": ["darwin", "linux"],
    "emoji": "🎯"
  }
}
---
```

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **Single vs multi-agent** | One agent per Gateway | Need isolated workspaces/sessions per user or role |
| **DM policy** | `pairing` (default) | Unknown senders; `allowlist` for known senders only; `open` for public bots |
| **Session scope** | `per-channel-peer` (default) | `main` for shared session; `per-account-channel-peer` for strict isolation |
| **Sandbox mode** | `off` (default) | `non-main` for untrusted inputs; `all` for maximum isolation |
| **Skills location** | `<workspace>/skills/` | `~/.openclaw/skills/` for shared across agents; `~/.agents/skills/` for personal agent profile |
| **Config hot-reload** | `hybrid` (default) | `hot` if you want to control restarts; `restart` for aggressive reloads |
| **Memory backend** | Built-in (default) | `honcho` for external vector DB; `qmd` for markdown-based search |

## Workflow

### 1. Initial setup
1. Install Node 24 (or 22.14+)
2. Run `npm install -g openclaw@latest`
3. Run `openclaw onboard --install-daemon` and follow prompts (choose model provider, set API key, configure Gateway)
4. Verify: `openclaw gateway status` and `openclaw dashboard`

### 2. Connect a channel
1. Choose a channel (Telegram is fastest to set up)
2. Get the required credential (bot token, API key, etc.)
3. Run `openclaw channels add --channel <name>` or edit `~/.openclaw/openclaw.json` directly
4. Set `dmPolicy` and `allowFrom` for access control
5. Verify: `openclaw channels status`

### 3. Create a custom skill
1. Create `~/.openclaw/workspace/skills/<skill-name>/SKILL.md`
2. Add YAML frontmatter with `name`, `description`, and optional `metadata.openclaw.requires`
3. Write markdown instructions for the agent
4. Test: `openclaw agent --message "trigger the skill"` or chat in Control UI
5. Verify: `openclaw skills list --eligible`

### 4. Configure multi-agent routing
1. Create separate workspaces: `mkdir -p ~/.openclaw/workspace-work ~/.openclaw/workspace-home`
2. Add agents to config:
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
3. Add bindings to route channels to agents:
   ```json5
   {
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "biz" } }
     ]
   }
   ```
4. Restart: `openclaw gateway restart`

### 5. Troubleshoot a problem
1. Run `openclaw doctor` to check config, Gateway, and services
2. Check logs: `openclaw logs --follow` or `openclaw channels logs --channel <name>`
3. Validate config: `openclaw config validate`
4. Check channel status: `openclaw channels status --probe`
5. Test agent directly: `openclaw agent --message "test"` with `--local` flag if Gateway is down
6. Review workspace files (AGENTS.md, SOUL.md, TOOLS.md) for context issues

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor --fix` to repair common issues.
- **Session scope affects isolation**: `dmScope: "main"` shares one session across all senders; `per-channel-peer` isolates per sender+channel. Choose carefully for multi-user setups.
- **Skills require exact metadata**: If a skill declares `requires.bins: ["tool"]`, that binary must exist on PATH at skill load time. Sandboxed runs need the binary inside the container too.
- **Bootstrap files are one-time**: `BOOTSTRAP.md` is only created for a brand-new workspace. Delete it after completing the ritual; it won't be recreated.
- **Group messages need mention gating**: By default, groups require the agent to be mentioned. Set `requireMention: false` in channel config if you want all group messages.
- **Model refs use provider/model format**: Use `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. Omitting the provider only works if there's no `/` in the model ID.
- **Workspace is not a hard sandbox**: Tools resolve relative paths against the workspace, but absolute paths can still reach elsewhere unless `agents.defaults.sandbox` is enabled.
- **Hot reload doesn't restart for all changes**: Gateway server changes (port, bind, TLS) require a manual restart. Use `gateway.reload: { mode: "hybrid" }` for automatic restarts on critical changes.
- **Channel health monitoring can restart channels aggressively**: If a channel looks stale, the Gateway may restart it. Tune `gateway.channelHealthCheckMinutes` and `channelStaleEventThresholdMinutes` to avoid flapping.
- **Skills are snapshotted per session**: Changes to skills take effect on the next new session, not mid-conversation. Use `/new` to start a fresh session.
- **Memory is separate from context**: Memory files (MEMORY.md, memory/*.md) are stored on disk; context is what's in the model's current window. Large conversations may be compacted to fit the context window.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config validates: `openclaw config validate` returns no errors
- [ ] Gateway is running: `openclaw gateway status` shows "listening"
- [ ] Channels are healthy: `openclaw channels status` shows all enabled channels as connected
- [ ] Skills are eligible: `openclaw skills list --eligible` shows expected skills
- [ ] Test message works: `openclaw agent --message "test"` returns a reply
- [ ] Workspace files exist: `ls ~/.openclaw/workspace/{AGENTS,SOUL,TOOLS,IDENTITY,USER}.md`
- [ ] Sessions are stored: `openclaw sessions list` shows recent sessions
- [ ] No validation errors in logs: `openclaw logs --limit 50 | grep -i error` returns nothing critical
- [ ] Multi-agent bindings are correct (if applicable): `openclaw agents bindings --json` matches your routing intent
- [ ] Skills have required binaries: `openclaw skills check` shows no missing requirements for enabled skills

## Resources

**Comprehensive navigation**: See https://docs.openclaw.ai/llms.txt for a complete page-by-page listing of all documentation.

**Critical pages**:
- [Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference) — full schema for `openclaw.json`
- [Creating Skills](https://docs.openclaw.ai/tools/creating-skills) — step-by-step skill authoring
- [Multi-Agent Routing](https://docs.openclaw.ai/concepts/multi-agent) — isolated agents and session routing

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt