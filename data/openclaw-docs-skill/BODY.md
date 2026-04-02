---
name: Clawdbot
description: Use when deploying or managing a self-hosted AI agent gateway, configuring messaging channels (WhatsApp, Telegram, Discord, iMessage, etc.), setting up multi-agent routing, managing skills and tools, automating workflows with cron/heartbeat, or troubleshooting gateway and channel issues.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted gateway that connects messaging apps (WhatsApp, Telegram, Discord, iMessage, Signal, Slack, and more) to AI agents. The Gateway runs on any OS (macOS, Linux, Windows) and routes inbound messages to an embedded agent runtime with tool support, session management, and multi-agent isolation. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/workspace/` (agent files), `~/.openclaw/agents/<agentId>/sessions/` (chat history). Primary CLI: `openclaw`. Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw**: installing, running `openclaw onboard`, configuring the Gateway
- **Connecting channels**: adding WhatsApp, Telegram, Discord, or other messaging platforms
- **Configuring agents**: setting workspace files (AGENTS.md, SOUL.md, TOOLS.md), managing multi-agent routing
- **Managing tools and skills**: enabling/disabling tools, installing skills from ClawHub, creating custom skills
- **Automating workflows**: setting up cron jobs, heartbeat, hooks, webhooks, or standing orders
- **Troubleshooting**: diagnosing channel issues, config validation errors, session problems, or model failover
- **Securing access**: setting DM policies (pairing, allowlist, open), group mention gating, or sandboxing

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initial setup | `openclaw onboard --install-daemon` |
| Check status | `openclaw gateway status` |
| Open dashboard | `openclaw dashboard` |
| View config | `openclaw config get <path>` |
| Edit config | `openclaw config set <path> <value>` |
| Validate config | `openclaw doctor` |
| List channels | `openclaw channels list` |
| Add channel | `openclaw channels add --channel <name>` |
| List skills | `openclaw skills list` |
| Install skill | `openclaw skills install <slug>` |
| List agents | `openclaw agents list` |
| Add agent | `openclaw agents add <name>` |
| Send message | `openclaw message send --target <dest> --message "text"` |
| Run cron job | `openclaw cron add --name <name> --every <duration> --message "text"` |
| View logs | `openclaw logs --follow` |

### Config file structure

```json5
{
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: { primary: "anthropic/claude-sonnet-4-6" },
      heartbeat: { every: "30m", target: "last" }
    }
  },
  channels: {
    whatsapp: { enabled: true, allowFrom: ["+15555550123"] },
    telegram: { enabled: true, botToken: "123:abc" }
  },
  session: { dmScope: "per-channel-peer" },
  tools: { allow: ["group:fs", "browser", "web_search"] },
  skills: { entries: { "image-lab": { enabled: true } } }
}
```

### Workspace bootstrap files

Create these in `~/.openclaw/workspace/`:
- **AGENTS.md** — operating instructions and memory
- **SOUL.md** — persona, boundaries, tone
- **TOOLS.md** — user notes on tool usage conventions
- **IDENTITY.md** — agent name, emoji, vibe
- **USER.md** — user profile and preferred address
- **BOOTSTRAP.md** — one-time first-run ritual (auto-deleted after completion)

### Tool groups (for allow/deny lists)

| Group | Tools |
|-------|-------|
| `group:runtime` | exec, bash, process, code_execution |
| `group:fs` | read, write, edit, apply_patch |
| `group:web` | web_search, x_search, web_fetch |
| `group:sessions` | sessions_list, sessions_history, sessions_send, subagents |
| `group:memory` | memory_search, memory_get |
| `group:ui` | browser, canvas |
| `group:messaging` | message |
| `group:automation` | cron, gateway |

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **Heartbeat vs Cron** | Routine monitoring (inbox, calendar) in one batched turn every 30m | Precise schedules (daily reports, one-shot reminders) needed |
| **DM policy: pairing vs allowlist** | Unknown senders should approve once before messaging | Only specific numbers/IDs can message (stricter) |
| **Single agent vs multi-agent** | One workspace, one set of sessions | Multiple isolated agents with separate workspaces/sessions |
| **Sandbox: off vs non-main vs all** | Trust all code, full tool access | Untrusted inputs or risky tools; isolate non-main sessions | All sessions in containers |
| **Tool profile: full vs coding vs messaging** | Agent needs all tools | Agent only needs file I/O + runtime | Agent only needs messaging |
| **Session scope: main vs per-peer vs per-channel-peer** | Shared session across all senders | Separate session per sender | Separate session per sender per channel |
| **Config hot reload: hybrid vs hot vs restart** | Safe changes apply instantly; critical ones auto-restart | Safe changes only; you handle restarts | Restart on any change |

## Workflow

### 1. Deploy and configure OpenClaw

1. **Install**: `npm install -g openclaw@latest` or use the install script
2. **Run onboarding**: `openclaw onboard --install-daemon` (interactive setup for model, channels, gateway)
3. **Verify**: `openclaw gateway status` and `openclaw dashboard` (opens browser UI)
4. **Edit config** (optional): `openclaw config set <path> <value>` or edit `~/.openclaw/openclaw.json` directly
5. **Validate**: `openclaw doctor` (checks for config/security issues)

### 2. Connect a messaging channel

1. **Choose channel**: Telegram is fastest (just a bot token); WhatsApp requires Web login
2. **Add channel**: `openclaw channels add --channel <name>` (interactive) or `openclaw config set channels.<name>.botToken "..."`
3. **Set DM policy**: `openclaw config set channels.<name>.dmPolicy "pairing"` (or `allowlist`, `open`, `disabled`)
4. **Test**: Send a message from your phone; check `openclaw logs --follow` for errors
5. **Troubleshoot**: Run `openclaw channels status --probe` and `openclaw doctor`

### 3. Configure the agent workspace

1. **Create bootstrap files** in `~/.openclaw/workspace/`:
   - `AGENTS.md` — agent instructions and memory
   - `SOUL.md` — persona and boundaries
   - `TOOLS.md` — tool usage notes
2. **Restart** the Gateway: `openclaw gateway restart` (or changes auto-apply)
3. **Test**: Send a message and verify the agent responds with the right persona

### 4. Set up multi-agent routing (optional)

1. **Create workspaces**: `mkdir -p ~/.openclaw/workspace-{home,work}`
2. **Add agents to config**:
   ```json5
   {
     agents: {
       list: [
         { id: "home", default: true, workspace: "~/.openclaw/workspace-home" },
         { id: "work", workspace: "~/.openclaw/workspace-work" }
       ]
     },
     bindings: [
       { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "biz" } }
     ]
   }
   ```
3. **Verify**: `openclaw agents list` and `openclaw agents bindings`

### 5. Manage tools and skills

1. **List available tools**: `openclaw skills list` (shows eligible skills)
2. **Install a skill**: `openclaw skills install <slug>` (from ClawHub)
3. **Enable/disable tools**: `openclaw config set tools.allow ["group:fs", "browser"]`
4. **Check readiness**: `openclaw skills check` (shows missing requirements)
5. **Create custom skill**: Add `<workspace>/skills/<name>/SKILL.md` with YAML frontmatter

### 6. Automate workflows

1. **Heartbeat** (routine monitoring): `openclaw config set agents.defaults.heartbeat.every "30m"`
2. **Cron job** (precise schedule): `openclaw cron add --name "daily-report" --every "0 9 * * *" --message "Generate report"`
3. **Hooks** (event-driven): Configure `hooks.mappings` in config to run scripts on agent lifecycle events
4. **Webhooks** (inbound HTTP): Enable `hooks.enabled: true` and POST to `/hooks` endpoint
5. **Standing orders** (persistent context): Add to `AGENTS.md` as persistent instructions

### 7. Troubleshoot issues

1. **Check Gateway health**: `openclaw gateway status` and `openclaw health`
2. **View logs**: `openclaw logs --follow` (real-time) or `openclaw logs --limit 200`
3. **Validate config**: `openclaw doctor` (auto-fixes safe issues with `--fix`)
4. **Diagnose channels**: `openclaw channels status --probe`
5. **Check model auth**: `openclaw models status --probe` (live auth check)
6. **Inspect sessions**: `openclaw sessions` (list stored conversations)

## Common gotchas

- **Config validation is strict**: Unknown keys or malformed types cause the Gateway to refuse to start. Run `openclaw doctor --fix` to auto-repair.
- **Model refs must use `provider/model` format**: `anthropic/claude-sonnet-4-6`, not just `claude-sonnet-4-6`. If the model ID contains `/` (OpenRouter-style), include the provider prefix.
- **Workspace files are injected on first turn**: Changes to AGENTS.md, SOUL.md, etc. take effect on the next new session, not mid-conversation.
- **Skills snapshot is per-session**: Skill changes are picked up on the next new session. Use `skills.load.watch: true` for hot reload.
- **DM pairing codes are one-time**: Once a sender is approved, they don't need to pair again (stored in allow list).
- **Group messages require mention by default**: Set `channels.<channel>.groups."*".requireMention: false` to allow all group messages.
- **Sandboxing requires Docker**: If `agents.defaults.sandbox.mode` is not `off`, Docker must be installed and the sandbox image built (`scripts/sandbox-setup.sh`).
- **Multi-agent bindings are order-dependent**: First matching binding wins. Order bindings from most specific to least specific.
- **Tool policy is global**: `tools.allow` and `tools.deny` apply to all agents unless overridden per-agent with `agents.list[].tools.profile`.
- **Heartbeat and cron are separate**: Heartbeat batches checks in one turn; cron runs isolated jobs. Use both for comprehensive automation.
- **Config hot reload doesn't restart the Gateway**: Gateway server changes (port, bind, TLS) require manual restart. Use `gateway.reload.mode: "hybrid"` for auto-restart on critical changes.
- **Secrets in config are not encrypted**: Use SecretRef objects (`{ source: "env", id: "VAR_NAME" }`) to reference env vars instead of plaintext keys.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] **Config is valid**: Run `openclaw doctor` with no errors
- [ ] **Gateway is running**: `openclaw gateway status` shows "running"
- [ ] **Channels are connected**: `openclaw channels list` shows enabled channels
- [ ] **Agent responds**: Send a test message and verify a reply in logs (`openclaw logs --follow`)
- [ ] **Workspace files exist**: Check `~/.openclaw/workspace/AGENTS.md`, `SOUL.md`, etc.
- [ ] **Model auth is valid**: `openclaw models status --probe` shows no auth errors
- [ ] **Skills are eligible**: `openclaw skills check` shows required tools/env vars available
- [ ] **Multi-agent bindings are correct** (if used): `openclaw agents bindings` matches your routing rules
- [ ] **Tool policy is intentional**: `openclaw config get tools.allow` and `tools.deny` match your security model
- [ ] **Logs are clean**: `openclaw logs --limit 50` shows no repeated errors or warnings

## Resources

- **Comprehensive page listing**: https://docs.openclaw.ai/llms.txt
- **Configuration reference**: https://docs.openclaw.ai/gateway/configuration-reference
- **Channel setup guides**: https://docs.openclaw.ai/channels (WhatsApp, Telegram, Discord, etc.)
- **Multi-agent routing**: https://docs.openclaw.ai/concepts/multi-agent
- **Skills and tools**: https://docs.openclaw.ai/tools
- **Automation (cron, heartbeat, hooks)**: https://docs.openclaw.ai/automation
- **Troubleshooting**: https://docs.openclaw.ai/gateway/troubleshooting

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt