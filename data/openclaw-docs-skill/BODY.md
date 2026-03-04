---
name: Clawdbot
description: Use when configuring, deploying, or troubleshooting a self-hosted AI agent gateway that connects messaging platforms (WhatsApp, Telegram, Discord, Slack, Signal, iMessage) to LLM-powered agents. Reach for this skill when setting up channels, managing agent workspaces, configuring tools and permissions, creating skills, or debugging agent behavior.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw Skill Reference

## Product summary

OpenClaw is a self-hosted gateway that connects messaging platforms (WhatsApp, Telegram, Discord, Slack, Signal, iMessage, and others) to AI agents. It runs a single Gateway process on your hardware that routes inbound messages to agents, manages sessions, executes tools, and delivers replies back to channels. The agent is the product; the Gateway is the control plane.

**Key files and directories:**
- `~/.openclaw/openclaw.json` — main config file
- `~/.openclaw/workspace/` — agent workspace (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, HEARTBEAT.md, MEMORY.md)
- `~/.openclaw/skills/` — shared skills across agents
- `~/.openclaw/agents/<agentId>/sessions/` — session transcripts

**Primary CLI:** `openclaw` (gateway, channels, agents, skills, cron, etc.)

**Primary docs:** https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up or reconfiguring** the Gateway, channels, or agents
- **Configuring models** (OpenAI, Anthropic, Ollama, etc.) and authentication
- **Creating or modifying skills** to extend agent capabilities
- **Managing permissions** (tool policies, sandbox, elevated mode)
- **Debugging agent behavior** (sessions, memory, context, tool execution)
- **Automating tasks** (cron jobs, hooks, webhooks)
- **Routing messages** to multiple agents or channels
- **Troubleshooting** channel connectivity, model failures, or session issues

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initialize config + workspace | `openclaw setup` |
| Run interactive setup wizard | `openclaw setup --wizard` |
| Start the Gateway | `openclaw gateway` |
| Check Gateway + channel status | `openclaw status` |
| Diagnose and auto-fix config | `openclaw doctor --fix` |
| View/edit config | `openclaw config` |
| List/add/remove agents | `openclaw agents list`, `openclaw agents add <name>` |
| Manage channels | `openclaw channels list`, `openclaw channels add <type>` |
| Manage skills | `openclaw skills list`, `clawhub search <query>`, `clawhub install <slug>` |
| Create cron jobs | `openclaw cron add --name "..." --cron "0 7 * * *"` |
| View logs | `openclaw logs` |
| Reset/compact session | `/new` (in chat), `/compact` (in chat) |

### Workspace files (agent context)

| File | Purpose | Auto-created? |
|------|---------|---------------|
| `AGENTS.md` | Agent instructions, capabilities, personality | Yes |
| `SOUL.md` | Core identity, values, long-term goals | Yes |
| `TOOLS.md` | Tool usage guidance (not tool definitions) | Yes |
| `IDENTITY.md` | Avatar, name, display metadata | Yes |
| `USER.md` | User preferences, context | Yes |
| `HEARTBEAT.md` | Periodic checks, reminders, background tasks | Yes |
| `MEMORY.md` | Optional persistent memory (agent-editable) | No |
| `memory/YYYY-MM-DD.md` | Daily session snapshots (if hooks enabled) | No |
| `BOOTSTRAP.md` | First-run only; deleted after first session | Yes |

All workspace files are injected into the agent's context at the start of each session (subject to truncation limits).

### Tool groups (for tool policies)

Use these in `tools.allow` / `tools.deny`:

| Group | Expands to |
|-------|-----------|
| `group:fs` | read, write, edit, apply_patch |
| `group:runtime` | exec, bash, process |
| `group:ui` | browser, canvas |
| `group:web` | web_search, web_fetch |
| `group:memory` | memory_search, memory_get |
| `group:sessions` | sessions_list, sessions_history, sessions_send, sessions_spawn, session_status |
| `group:automation` | cron, gateway |
| `group:messaging` | message |
| `group:nodes` | nodes (device control) |
| `group:openclaw` | all built-in tools (excludes plugins) |

### Model provider setup

| Provider | Config key | Auth method |
|----------|-----------|------------|
| OpenAI | `openai/gpt-4o` | API key (`OPENAI_API_KEY`) |
| Anthropic | `anthropic/claude-opus-4-1` | API key or setup token |
| Ollama (local) | `ollama/llama2` | No auth (local) |
| OpenRouter | `openrouter/...` | API key |
| Together | `together/...` | API key |
| Bedrock | `bedrock/...` | AWS credentials |

Set default: `agents.defaults.model.primary = "provider/model-id"`

## Decision guidance

### When to use X vs Y

| Decision | Use X when | Use Y when |
|----------|-----------|-----------|
| **Single agent vs multi-agent** | One bot, one workspace, simple routing | Multiple isolated agents, different workspaces, channel-specific routing |
| **Sandbox vs host execution** | Untrusted agents, need isolation, Docker available | Trusted agent, need full system access, no Docker |
| **Tool policy vs elevated** | Restrict which tools are available | Allow sandboxed agent to run exec on host (escape hatch) |
| **Cron vs heartbeat** | Precise timing (7am daily), one-shot jobs | Periodic checks (every 30 min), background monitoring |
| **Session vs isolated cron** | Job output goes to main chat history | Job runs in isolation, no chat spam |
| **Skill vs plugin** | Simple tool guidance, no code | Custom tools, CLI commands, or complex logic |
| **ClawHub vs local skills** | Reusable, versioned, shareable skills | Private, workspace-specific customizations |
| **Browser vs web_fetch** | JS-heavy sites, login flows, visual interaction | Simple HTML scraping, API calls, no JS |

## Workflow

### 1. Set up OpenClaw for the first time

1. **Initialize config and workspace:**
   ```bash
   openclaw setup --wizard
   ```
   This guides you through:
   - Local or remote Gateway mode
   - Model provider selection (OpenAI, Anthropic, etc.)
   - Channel setup (WhatsApp, Telegram, Discord, etc.)
   - Workspace location

2. **Verify the setup:**
   ```bash
   openclaw status
   openclaw doctor
   ```

3. **Start the Gateway:**
   ```bash
   openclaw gateway
   ```

4. **Test with a message** to your configured channel.

### 2. Configure a new channel

1. **List available channels:**
   ```bash
   openclaw channels list
   ```

2. **Add a channel:**
   ```bash
   openclaw channels add <type>  # e.g., whatsapp, telegram, discord
   ```

3. **Follow the prompts** for authentication (API keys, QR codes, etc.).

4. **Verify connectivity:**
   ```bash
   openclaw status --deep
   ```

### 3. Create or modify a skill

1. **Search ClawHub for existing skills:**
   ```bash
   clawhub search "web scraping"
   clawhub install <slug>
   ```

2. **Or create a custom skill locally:**
   ```bash
   mkdir -p ~/.openclaw/skills/my-skill
   cat > ~/.openclaw/skills/my-skill/SKILL.md << 'EOF'
   ---
   name: my_skill
   description: Does something useful
   ---
   
   # My Skill
   
   When the user asks for X, use the `exec` tool to run Y.
   EOF
   ```

3. **Reload skills:**
   ```bash
   openclaw skills reload
   ```

### 4. Configure tool permissions

1. **Read current config:**
   ```bash
   openclaw config
   ```

2. **Edit `~/.openclaw/openclaw.json`** to set tool policies:
   ```json
   {
     "tools": {
       "allow": ["group:fs", "browser", "exec"],
       "deny": ["message"]
     }
   }
   ```

3. **Validate and restart:**
   ```bash
   openclaw doctor --fix
   openclaw gateway
   ```

### 5. Set up a cron job

1. **Create a one-shot job:**
   ```bash
   openclaw cron add --name "Morning brief" \
     --cron "0 7 * * *" \
     --session isolated \
     --message "Summarize today's news" \
     --announce
   ```

2. **List jobs:**
   ```bash
   openclaw cron list
   ```

3. **View logs:**
   ```bash
   openclaw logs | grep cron
   ```

### 6. Debug a session

1. **Check session status:**
   ```bash
   openclaw sessions list
   ```

2. **View session transcript:**
   ```bash
   openclaw sessions history <sessionId>
   ```

3. **Compact a session (summarize old messages):**
   - In chat: `/compact [instructions]`
   - Or: `openclaw sessions compact <sessionId>`

4. **Start fresh:**
   - In chat: `/new`
   - Or: `openclaw sessions reset <sessionId>`

### 7. Route messages to multiple agents

1. **Add agents to config:**
   ```json
   {
     "agents": {
       "list": [
         { "id": "home", "default": true, "workspace": "~/.openclaw/workspace-home" },
         { "id": "work", "workspace": "~/.openclaw/workspace-work" }
       ]
     }
   }
   ```

2. **Set up bindings to route by channel/account:**
   ```json
   {
     "bindings": [
       { "agentId": "home", "match": { "channel": "whatsapp", "accountId": "personal" } },
       { "agentId": "work", "match": { "channel": "whatsapp", "accountId": "business" } }
     ]
   }
   ```

3. **Restart Gateway:**
   ```bash
   openclaw gateway
   ```

## Common gotchas

- **Workspace files not injected:** Check `agents.defaults.bootstrapMaxChars` and `bootstrapTotalMaxChars` limits; large files are truncated. Use `/context` to see what's actually injected.

- **Agent forgets after restart:** Workspace is not persisted across Gateway restarts unless you use the same workspace path. Confirm `agents.defaults.workspace` is set correctly in config.

- **Tool calls fail silently:** Check tool policy (`tools.allow` / `tools.deny`) and sandbox mode. Use `openclaw sandbox explain` to debug.

- **Channel not receiving messages:** Verify pairing/allowlist (`channels.<id>.allowFrom`), account is enabled, and Gateway is running. Run `openclaw status --deep` to probe live.

- **Cron jobs not running:** Confirm `cron.enabled: true` in config, job schedule is valid (use `0 7 * * *` format), and Gateway is running. Check logs: `openclaw logs | grep cron`.

- **Model API failures:** Verify API key is set (env var or config), model name is correct (use `openclaw models list --all`), and provider is reachable. Set fallback models: `agents.defaults.model.fallbacks`.

- **Session context too large:** Use `/compact` to summarize old messages, or enable session pruning (`agents.defaults.sessionPruning.enabled: true`).

- **Sandbox Docker not available:** Either install Docker, or disable sandbox (`agents.defaults.sandbox.mode: "direct"`). Elevated mode is an escape hatch for sandboxed agents.

- **Skill not loading:** Check skill directory structure (`skills/<name>/SKILL.md`), YAML frontmatter syntax, and reload: `openclaw skills reload`. Use `openclaw doctor` to validate.

- **Multi-agent routing not working:** Verify bindings match channel/account IDs exactly. Use `openclaw status` to see which agent is handling each channel.

## Verification checklist

Before submitting work or deploying changes:

- [ ] Run `openclaw doctor` and fix any errors
- [ ] Verify Gateway starts: `openclaw gateway` (no errors in logs)
- [ ] Test channel connectivity: `openclaw status --deep`
- [ ] Confirm agent responds to a test message
- [ ] Check workspace files are injected: `/context` in chat
- [ ] Verify tool policies are correct: `openclaw sandbox explain`
- [ ] If using cron, confirm job runs: `openclaw cron list` and check logs
- [ ] If using skills, reload and test: `openclaw skills reload`
- [ ] If using multi-agent, verify routing: `openclaw status` shows correct agent per channel
- [ ] Backup workspace: `cd ~/.openclaw/workspace && git add . && git commit -m "..."`

## Resources

**Comprehensive navigation:** https://docs.openclaw.ai/llms.txt

**Critical docs:**
1. [Getting Started](https://docs.openclaw.ai/start/getting-started) — first-run setup and onboarding
2. [Agent Workspace](https://docs.openclaw.ai/start/openclaw) — workspace files, memory, context injection
3. [Gateway Configuration](https://docs.openclaw.ai/gateway/configuration-reference) — all config keys and options
4. [Tools & Permissions](https://docs.openclaw.ai/tools/index) — tool policies, sandbox, elevated mode
5. [Channels](https://docs.openclaw.ai/channels/index) — supported messaging platforms and setup
6. [Skills & ClawHub](https://docs.openclaw.ai/tools/clawhub) — creating and installing skills
7. [Troubleshooting](https://docs.openclaw.ai/help/troubleshooting) — common issues and fixes

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt