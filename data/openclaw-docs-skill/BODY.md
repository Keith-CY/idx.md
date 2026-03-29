---
name: Clawdbot
description: Use when deploying and managing a self-hosted AI agent gateway, configuring messaging channels (WhatsApp, Telegram, Discord, iMessage, etc.), setting up multi-agent routing, creating skills and plugins, or automating agent workflows with cron jobs and webhooks.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product Summary

OpenClaw is a self-hosted WebSocket gateway that connects AI agents to multiple messaging platforms (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, and more) in a single process. Agents run on your hardware with full control over data, tools, and configuration. The Gateway manages sessions, channels, routing, and automation. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent files), CLI: `openclaw` command. Primary docs: https://docs.openclaw.ai

## When to Use

Reach for this skill when:
- **Setting up OpenClaw**: initial install, onboarding, configuration
- **Managing channels**: connecting WhatsApp, Telegram, Discord, or other messaging platforms
- **Configuring agents**: workspace setup, system prompts, bootstrap files, multi-agent routing
- **Building tools and skills**: creating custom skills, plugins, or extending agent capabilities
- **Automating workflows**: cron jobs, webhooks, hooks, heartbeats, session management
- **Troubleshooting**: diagnostics, logs, health checks, config validation
- **Securing access**: DM policies, pairing, allowlists, sandboxing, token management

## Quick Reference

### Essential Commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Open dashboard | `openclaw dashboard` |
| Check status | `openclaw gateway status` |
| View logs | `openclaw logs --follow` |
| Edit config | `openclaw configure` or edit `~/.openclaw/openclaw.json` |
| Add channel | `openclaw channels add --channel telegram` |
| List agents | `openclaw agents list` |
| Send message | `openclaw message send --target +15555550123 --message "Hi"` |
| Run cron job | `openclaw cron add --name "Daily" --cron "0 9 * * *" --message "..."` |
| Validate config | `openclaw config validate` |

### Config File Locations

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main configuration (JSON5 format) |
| `~/.openclaw/workspace/` | Agent workspace (AGENTS.md, SOUL.md, TOOLS.md, etc.) |
| `~/.openclaw/workspace/skills/` | Workspace-specific skills |
| `~/.openclaw/skills/` | Managed/shared skills |
| `~/.openclaw/agents/<agentId>/sessions/` | Session transcripts (JSONL) |

### Config Structure (Minimal)

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" }
    }
  },
  channels: {
    whatsapp: { allowFrom: ["+15555550123"] },
    telegram: { enabled: true, botToken: "123:abc" }
  },
  gateway: { port: 18789 }
}
```

### Bootstrap Files (Workspace)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operating instructions and memory |
| `SOUL.md` | Persona, boundaries, tone |
| `TOOLS.md` | User-maintained tool notes and conventions |
| `IDENTITY.md` | Agent name, vibe, emoji |
| `USER.md` | User profile and preferred address |
| `BOOTSTRAP.md` | One-time first-run ritual (auto-deleted) |
| `MEMORY.md` | Long-term memory (injected on every turn) |

## Decision Guidance

### When to Use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| **Single agent vs multi-agent** | Single agent (`agents.defaults`) | Simpler, shared workspace. Use multi-agent only if you need isolated workspaces/sessions per user or role. |
| **DM access control** | `dmPolicy: "pairing"` | Default; unknown senders get a one-time code. Use `"allowlist"` for strict control, `"open"` for public bots. |
| **Group mention gating** | `requireMention: true` | Prevents spam in groups. Set `false` only for private/trusted groups. |
| **Session scope** | `dmScope: "per-channel-peer"` | Recommended for multi-user. Use `"main"` for shared history, `"per-peer"` for isolation. |
| **Cron vs heartbeat** | Cron for precise timing | Use cron for scheduled tasks (7am daily). Use heartbeat for periodic check-ins (every 30m). |
| **Hooks vs webhooks** | Hooks for internal events | Hooks run inside Gateway on agent events. Webhooks are external HTTP endpoints. |
| **Sandboxing** | `sandbox.mode: "non-main"` | Isolate non-main sessions in Docker. Use `"all"` only if you need full isolation. |
| **Tool profile** | `tools.profile: "coding"` | Allows file I/O + runtime. Use `"messaging"` for messaging-only bots, `"minimal"` for restricted access. |

## Workflow

### 1. Initial Setup
1. Install Node 24+ (or 22.14+)
2. Run `openclaw onboard --install-daemon` — wizard guides you through model provider, gateway auth, channels, and skills
3. Verify: `openclaw gateway status` and `openclaw dashboard`
4. Create workspace files: `openclaw setup` auto-creates templates in `~/.openclaw/workspace/`

### 2. Configure a Channel
1. Choose a channel: WhatsApp (Web-based), Telegram (fastest), Discord, iMessage, etc.
2. Get credentials: bot token, API key, or account credentials
3. Add via CLI: `openclaw channels add --channel telegram --token $BOT_TOKEN`
4. Or edit config directly: add `channels.telegram.botToken` to `openclaw.json`
5. Verify: `openclaw channels status`

### 3. Customize the Agent
1. Edit workspace files in `~/.openclaw/workspace/`:
   - `AGENTS.md` — instructions and memory
   - `SOUL.md` — personality and boundaries
   - `TOOLS.md` — tool usage notes
2. Add skills: `openclaw skills install <skill-slug>` or place in `workspace/skills/`
3. Reload: changes hot-apply; no restart needed for most settings

### 4. Set Up Multi-Agent Routing (Optional)
1. Create separate workspaces: `~/.openclaw/workspace-work`, `~/.openclaw/workspace-home`
2. Add agents to config:
   ```json5
   {
     agents: {
       list: [
         { id: "home", workspace: "~/.openclaw/workspace-home", default: true },
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

### 5. Automate with Cron or Hooks
1. **Cron jobs** (precise timing):
   ```bash
   openclaw cron add --name "Morning brief" --cron "0 9 * * *" --message "What's on my agenda?"
   ```
2. **Hooks** (event-driven):
   - Create `~/.openclaw/workspace/hooks/<name>.ts`
   - Hook fires on agent events (`command:new`, `command:reset`, etc.)
   - Enable: `openclaw hooks enable <name>`
3. **Heartbeat** (periodic check-ins):
   ```json5
   { agents: { defaults: { heartbeat: { every: "30m", target: "last" } } } }
   ```

### 6. Verify and Monitor
1. Check config: `openclaw config validate`
2. View logs: `openclaw logs --follow`
3. Health check: `openclaw health` or `openclaw status --deep`
4. Session list: `openclaw sessions`
5. Run diagnostics: `openclaw doctor`

## Common Gotchas

- **Config validation is strict**: unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor --fix` to auto-repair common issues.
- **Bootstrap files are injected on every turn**: keep `MEMORY.md` concise to avoid token bloat. Use `memory_search` tool to read daily memory files on demand instead.
- **Model refs require provider prefix**: use `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. Omitting the provider only works if there's no `/` in the model ID.
- **Session scope affects isolation**: `dmScope: "main"` shares history across all users; `per-channel-peer` isolates per sender. Choose based on your use case.
- **Cron jobs run in isolated sessions by default**: they don't carry over conversation history. Use `--session main` to append to the main session instead.
- **Skills are loaded at session start**: changes to `SKILL.md` or skill config take effect on the next new session, not mid-conversation.
- **Sandboxing requires Docker**: if `sandbox.mode` is set but Docker is unavailable, the Gateway will fail. Set `mode: "off"` to disable.
- **Pairing codes are one-time**: once a sender is approved, they're stored in the allow list. Pairing codes don't work twice.
- **WhatsApp is Web-based (Baileys)**: no official WhatsApp Business API integration; uses WhatsApp Web. Requires periodic re-login.
- **Group mention patterns are regex**: test patterns carefully; invalid regex will silently fail to match. Use simple text patterns when in doubt.

## Verification Checklist

Before submitting work:

- [ ] Config passes validation: `openclaw config validate`
- [ ] Gateway is running: `openclaw gateway status` shows "running"
- [ ] Channels are connected: `openclaw channels status` shows all channels healthy
- [ ] Agent workspace exists: `ls ~/.openclaw/workspace/` shows AGENTS.md, SOUL.md, etc.
- [ ] Skills are eligible: `openclaw skills list --eligible` shows expected skills
- [ ] No errors in logs: `openclaw logs --limit 50` shows no ERROR or FATAL
- [ ] Test message works: send a message via a channel and verify agent responds
- [ ] Multi-agent bindings (if used): `openclaw agents list` and `openclaw agents bindings` show correct routing
- [ ] Cron jobs (if used): `openclaw cron list` shows jobs enabled and next run time
- [ ] Hooks (if used): `openclaw hooks list` shows hooks enabled
- [ ] Config hot-reload works: edit `openclaw.json`, verify changes apply without restart (check logs for "hot-apply")

## Resources

- **Comprehensive page listing**: https://docs.openclaw.ai/llms.txt
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **CLI reference**: https://docs.openclaw.ai/cli/index
- **Channels setup**: https://docs.openclaw.ai/channels (WhatsApp, Telegram, Discord, iMessage, etc.)
- **Multi-agent routing**: https://docs.openclaw.ai/concepts/multi-agent
- **Skills and plugins**: https://docs.openclaw.ai/tools/skills
- **Automation (cron, hooks, webhooks)**: https://docs.openclaw.ai/automation/cron-jobs
- **Troubleshooting**: https://docs.openclaw.ai/gateway/troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt