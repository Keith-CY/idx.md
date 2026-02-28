---
name: Clawdbot
description: Use when setting up, configuring, or operating a self-hosted AI agent gateway that connects messaging platforms (WhatsApp, Telegram, Discord, iMessage, etc.) to AI agents. Reach for this skill when building agent workspaces, managing channels, configuring tools and models, automating tasks with cron/hooks, or troubleshooting agent behavior.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw (clawdbot) Skill

## Product summary

OpenClaw is a self-hosted gateway that bridges messaging apps (WhatsApp, Telegram, Discord, iMessage, Slack, Signal, and more) to AI coding agents. A single Gateway process runs on your machine or server and routes inbound messages to an embedded agent runtime, which can use tools (browser, file I/O, web search, cron jobs) to complete tasks. The agent maintains sessions per conversation, reads workspace files for context (AGENTS.md, SOUL.md, MEMORY.md), and streams replies back to the originating channel.

**Key files and directories:**
- `~/.openclaw/openclaw.json` — Main config file (JSON5 format, optional; safe defaults if missing)
- `~/.openclaw/workspace/` — Agent workspace (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, HEARTBEAT.md, MEMORY.md)
- `~/.openclaw/skills/` — Shared skill definitions (SKILL.md files)
- `~/.openclaw/.env` — Environment variables for daemon (API keys, secrets)

**Primary CLI:** `openclaw` (gateway, channels, agents, cron, models, skills, sessions, etc.)

**Primary docs:** https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up OpenClaw:** Initial installation, onboarding wizard, workspace creation
- **Configuring channels:** Adding WhatsApp, Telegram, Discord, Slack, or other messaging accounts
- **Managing agents:** Creating multi-agent setups, routing messages to different agents, configuring workspaces
- **Configuring models:** Setting up API keys (Anthropic, OpenAI, OpenRouter, etc.), model failover, provider auth
- **Building agent behavior:** Writing AGENTS.md, SOUL.md, MEMORY.md; managing system prompts and context
- **Using tools:** Browser automation, web search, file I/O, cron jobs, webhooks, hooks
- **Automating tasks:** Scheduling cron jobs, setting up event hooks, configuring heartbeat checks
- **Troubleshooting:** Diagnosing channel issues, model auth failures, tool access problems, session state
- **Security:** Configuring sandboxing, tool policies, elevated mode, secrets management

## Quick reference

### Essential CLI commands

| Task | Command |
|------|---------|
| Initialize config + workspace | `openclaw setup` |
| Interactive onboarding | `openclaw onboard` |
| Check gateway status | `openclaw status` |
| View/edit config | `openclaw config show` or web UI at `http://127.0.0.1:18789` |
| Add messaging channel | `openclaw channels add --channel <name>` |
| List channels | `openclaw channels list` |
| Check channel health | `openclaw channels status --probe` |
| List agents | `openclaw agents list` |
| Create new agent | `openclaw agents create --id <name> --workspace <path>` |
| Set up model auth | `openclaw models auth login --provider <id>` |
| Check model status | `openclaw models status` |
| List skills | `openclaw skills list` |
| Check skill readiness | `openclaw skills check` |
| Add cron job | `openclaw cron add --name <name> --cron "0 7 * * *" --message "..."` |
| List cron jobs | `openclaw cron list` |
| View logs | `openclaw logs` |
| Run diagnostics | `openclaw doctor` |
| Manage sessions | `openclaw sessions list` or `openclaw sessions history <session-key>` |

### Config file structure (openclaw.json)

```json5
{
  // Gateway + networking
  gateway: {
    port: 18789,
    bind: "loopback", // or "lan", "tailnet", "auto"
    auth: "token", // or "password"
    token: "...",
  },
  
  // Messaging channels
  channels: {
    whatsapp: {
      accounts: {
        default: { /* account config */ }
      }
    },
    telegram: { /* ... */ },
    discord: { /* ... */ },
  },
  
  // Agent defaults
  agents: {
    defaults: {
      workspace: "~/.openclaw/workspace",
      model: "anthropic/claude-3-5-sonnet",
      sandbox: { mode: "off" }, // or "docker"
    },
    list: [
      { id: "main", default: true, workspace: "~/.openclaw/workspace" },
      { id: "work", workspace: "~/.openclaw/workspace-work" },
    ],
  },
  
  // Message routing
  bindings: [
    { agentId: "main", match: { channel: "whatsapp", accountId: "default" } },
    { agentId: "work", match: { channel: "whatsapp", accountId: "work" } },
  ],
  
  // Model providers
  models: {
    providers: {
      anthropic: {
        apiKey: "${ANTHROPIC_API_KEY}", // or SecretRef
      },
      openai: {
        apiKey: "${OPENAI_API_KEY}",
      },
    },
  },
  
  // Tools + security
  tools: {
    profile: "default", // or "restricted"
    allow: ["browser", "exec", "web_search"],
    deny: [],
    sandbox: {
      tools: {
        allow: ["group:runtime", "group:fs", "group:memory"],
      },
    },
  },
  
  // Automation
  cron: { enabled: true },
  hooks: { enabled: true },
}
```

### Workspace files (agent context)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Agent instructions, capabilities, personality |
| `SOUL.md` | Agent identity, values, long-term goals |
| `TOOLS.md` | Local notes on tool setup (not auto-injected) |
| `IDENTITY.md` | Agent name, role, contact info |
| `USER.md` | User preferences, constraints |
| `HEARTBEAT.md` | Periodic checks (runs every ~30 min) |
| `BOOTSTRAP.md` | One-time setup (created on first run, then deleted) |
| `MEMORY.md` | Persistent session notes (optional) |
| `memory/YYYY-MM-DD-*.md` | Dated session summaries |

## Decision guidance

### When to use X vs Y

| Scenario | Use | Why |
|----------|-----|-----|
| **Scheduling:** Precise timing (7am daily) vs loose checks | Cron jobs | Cron is the Gateway scheduler; HEARTBEAT is for periodic checks (~30 min) |
| **Channels:** Single account vs multiple accounts | Single: top-level config; Multiple: `channels.<name>.accounts` | Accounts allow multi-workspace routing (e.g., personal + work WhatsApp) |
| **Agents:** One agent vs multi-agent | One agent: simpler; Multi-agent: use `agents.list` + `bindings` | Multi-agent for isolated workspaces, different models, or channel-based routing |
| **Sandbox:** Docker vs host | Docker: safer; Host: faster | Docker isolates tool execution; host is default and faster |
| **Tool access:** Tool policy vs sandbox | Tool policy: hard stop; Sandbox: isolation | Tool policy blocks tools globally; sandbox controls where they run |
| **Auth:** API key vs OAuth | API key: simpler; OAuth: multi-user | API keys are static; OAuth refreshes automatically |
| **Memory:** MEMORY.md vs memory/*.md | MEMORY.md: always loaded; memory/*.md: on-demand | MEMORY.md is auto-injected; memory/*.md requires explicit tool calls |

## Workflow

### Typical task: Set up OpenClaw with WhatsApp and Anthropic

1. **Initialize workspace and config:**
   ```bash
   openclaw setup
   ```
   This creates `~/.openclaw/workspace/` and `~/.openclaw/openclaw.json`.

2. **Run onboarding wizard:**
   ```bash
   openclaw onboard
   ```
   Follow prompts to:
   - Choose local or remote mode
   - Set up Anthropic API key (or other model provider)
   - Add WhatsApp channel
   - Configure gateway auth (token or password)

3. **Verify setup:**
   ```bash
   openclaw status
   openclaw models status
   openclaw channels status --probe
   openclaw skills check
   ```

4. **Edit workspace files to customize agent:**
   - Edit `~/.openclaw/workspace/AGENTS.md` to define agent instructions
   - Edit `~/.openclaw/workspace/SOUL.md` for agent identity
   - Edit `~/.openclaw/workspace/TOOLS.md` for local tool notes

5. **Start the gateway:**
   ```bash
   openclaw gateway
   ```
   Or install as daemon:
   ```bash
   openclaw onboard --install-daemon
   ```

6. **Test by sending a message** to the WhatsApp account from your phone.

7. **Monitor logs:**
   ```bash
   openclaw logs
   openclaw channels logs --channel whatsapp
   ```

### Typical task: Add a second agent for work

1. **Create new agent workspace:**
   ```bash
   openclaw agents create --id work --workspace ~/.openclaw/workspace-work
   ```

2. **Edit config to add agent and binding:**
   ```json5
   {
     agents: {
       list: [
         { id: "main", default: true, workspace: "~/.openclaw/workspace" },
         { id: "work", workspace: "~/.openclaw/workspace-work" },
       ],
     },
     bindings: [
       { agentId: "main", match: { channel: "whatsapp", accountId: "personal" } },
       { agentId: "work", match: { channel: "whatsapp", accountId: "work" } },
     ],
   }
   ```

3. **Add second WhatsApp account:**
   ```bash
   openclaw channels add --channel whatsapp --account work --name "Work Bot"
   ```

4. **Customize work agent's AGENTS.md** in `~/.openclaw/workspace-work/`.

5. **Reload config:**
   ```bash
   openclaw config reload
   ```

### Typical task: Schedule a daily cron job

1. **Add cron job:**
   ```bash
   openclaw cron add \
     --name "Morning briefing" \
     --cron "0 7 * * *" \
     --session isolated \
     --message "Summarize today's news and my calendar"
   ```

2. **List jobs:**
   ```bash
   openclaw cron list
   ```

3. **Test job:**
   ```bash
   openclaw cron run <job-id> --force
   ```

4. **View runs:**
   ```bash
   openclaw cron runs --id <job-id>
   ```

## Common gotchas

- **API key not found:** Ensure the key is in `~/.openclaw/.env` or set via `openclaw models auth login`. Keys are per-agent; new agents don't inherit the main agent's key.
- **Config not reloading:** The Gateway watches `openclaw.json` for changes, but some changes (like adding agents) require `openclaw config reload` or a restart.
- **Workspace files not loaded:** AGENTS.md, SOUL.md, etc. must be in the agent's workspace directory (default `~/.openclaw/workspace`), not `~/.openclaw/`. Remote mode uses the Gateway host's workspace, not your local machine.
- **Tool blocked by sandbox:** If a tool is denied by sandbox policy, check `openclaw sandbox explain` to see the effective policy. Use `agents.defaults.sandbox.mode: "off"` to disable sandboxing, or add the tool to `tools.sandbox.tools.allow`.
- **Channel not receiving messages:** Confirm the bot is in the channel, the account is enabled, and the binding matches the inbound channel/account. Run `openclaw channels status --probe` for diagnostics.
- **Sessions not persisting:** Sessions are stored in `~/.openclaw/sessions/`. If the Gateway restarts, sessions are reloaded. If you want session context to survive, write it to MEMORY.md or memory/*.md files.
- **Memory not loading:** MEMORY.md is auto-injected; memory/*.md files require explicit tool calls. Check `agents.defaults.bootstrapMaxChars` (default 20000) and `bootstrapTotalMaxChars` (default 150000) if large files are truncated.
- **Multi-agent routing not working:** Ensure `bindings` match the inbound channel and accountId exactly. Use `openclaw agents list` to verify agent IDs.
- **Cron job not running:** Check `openclaw cron list` to confirm the job is enabled. View logs with `openclaw logs` or `openclaw cron runs --id <job-id>`. Ensure the Gateway is running.
- **Browser tool fails:** Confirm Chrome/Brave/Edge is installed. On Linux, check `openclaw browser status` and see Browser Troubleshooting for snap Chromium issues.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config file is valid JSON5 (no syntax errors; run `openclaw doctor --fix` to auto-fix)
- [ ] All required API keys are set (check `openclaw models status`)
- [ ] Channels are configured and reachable (`openclaw channels status --probe`)
- [ ] Agent workspace files (AGENTS.md, SOUL.md) are in the correct directory
- [ ] Multi-agent bindings match the inbound channel and accountId
- [ ] Tool policies allow the tools you need (check `openclaw sandbox explain`)
- [ ] Cron jobs are enabled and scheduled correctly (`openclaw cron list`)
- [ ] Gateway is running (`openclaw status`)
- [ ] Logs show no errors (`openclaw logs | tail -20`)
- [ ] Test message sent and received successfully
- [ ] Sessions are persisting across restarts (check `openclaw sessions list`)

## Resources

**Comprehensive page listing:** https://docs.openclaw.ai/llms.txt

**Critical documentation:**
1. [Configuration Guide](https://docs.openclaw.ai/gateway/configuration) — Task-oriented setup for channels, models, tools, and automation
2. [Agent Workspace](https://docs.openclaw.ai/concepts/agent-workspace) — How to structure AGENTS.md, SOUL.md, and memory files
3. [CLI Reference](https://docs.openclaw.ai/cli/index) — Complete command reference for all `openclaw` subcommands

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt