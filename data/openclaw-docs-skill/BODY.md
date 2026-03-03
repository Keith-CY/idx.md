---
name: Clawdbot
description: Use when setting up, configuring, or managing an AI agent gateway that connects messaging platforms (WhatsApp, Telegram, Discord, Slack, iMessage, etc.) to LLM-powered agents. Reach for this skill when building agent workspaces, configuring channels, managing sessions, creating skills, automating tasks with cron/webhooks, or troubleshooting agent behavior.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

# OpenClaw (clawdbot) Skill

## Product summary

OpenClaw is a self-hosted AI agent gateway that bridges messaging platforms (WhatsApp, Telegram, Discord, Slack, iMessage, Signal, Mattermost, and more) to LLM-powered agents. The Gateway runs as a single process on your machine or server, routing inbound messages to an agent that can execute tools, manage sessions, and automate tasks. The agent is built on the pi SDK and uses a workspace directory (`~/.openclaw/workspace` by default) to store operating instructions, memory, and configuration. Key files: `~/.openclaw/openclaw.json` (config), `~/.openclaw/agents/<agentId>/sessions/` (chat history), workspace files (`AGENTS.md`, `SOUL.md`, `TOOLS.md`, `MEMORY.md`). Primary docs: https://docs.openclaw.ai

## When to use

Reach for this skill when:
- **Setting up or configuring OpenClaw**: installing the Gateway, running `openclaw setup` or `openclaw onboard`, connecting channels
- **Building agent behavior**: editing workspace files (`AGENTS.md`, `SOUL.md`), managing memory, defining system prompts
- **Managing channels**: configuring WhatsApp, Telegram, Discord, Slack, or other messaging platforms; handling multi-account routing
- **Creating or extending capabilities**: writing custom skills, registering slash commands, building plugins
- **Automating workflows**: setting up cron jobs, webhooks, hooks, or background tasks
- **Troubleshooting**: debugging agent behavior, checking logs, validating config, fixing channel issues
- **Multi-agent setups**: routing messages to different agents, managing isolated workspaces and sessions
- **Security and sandboxing**: configuring tool policies, sandbox modes, elevated exec, or permission controls

## Quick reference

### Essential CLI commands

| Command | Purpose |
|---------|---------|
| `openclaw setup` | Initialize config and workspace |
| `openclaw onboard` | Interactive wizard for channels, models, and config |
| `openclaw gateway start` | Start the Gateway daemon |
| `openclaw gateway status` | Check Gateway health |
| `openclaw agents list` | List configured agents |
| `openclaw models` | Discover and configure LLM providers |
| `openclaw channels` | Manage messaging channel config |
| `openclaw skills` | List and manage skills |
| `openclaw cron` | Schedule and manage jobs |
| `openclaw logs --follow` | Tail Gateway logs |
| `openclaw doctor` | Validate config and diagnose issues |

### Key file paths

| Path | Purpose |
|------|---------|
| `~/.openclaw/openclaw.json` | Main config (JSON5 format) |
| `~/.openclaw/workspace/` | Default agent workspace (AGENTS.md, SOUL.md, TOOLS.md, MEMORY.md) |
| `~/.openclaw/agents/<agentId>/sessions/` | Chat history and session state |
| `~/.openclaw/skills/` | Shared skills (per-agent skills live in workspace/skills/) |
| `~/.openclaw/cron/jobs.json` | Scheduled cron jobs |
| `/tmp/openclaw/openclaw-YYYY-MM-DD.log` | Rolling Gateway log file |

### Workspace files (in agent workspace)

| File | Purpose |
|------|---------|
| `AGENTS.md` | Agent identity, capabilities, and operating instructions |
| `SOUL.md` | Personality, tone, and behavioral guidelines |
| `TOOLS.md` | Local notes about tool setup and environment |
| `MEMORY.md` | Long-term memory (optional; auto-loaded in sessions) |
| `IDENTITY.md` | Identity and context (optional) |
| `USER.md` | User preferences and metadata (optional) |
| `HEARTBEAT.md` | Scheduled background behavior (optional) |
| `BOOTSTRAP.md` | First-run setup (auto-created, should not persist) |

### Config structure (openclaw.json)

```json
{
  "agents": {
    "defaults": {
      "workspace": "~/.openclaw/workspace",
      "model": { "primary": "anthropic/claude-3-5-sonnet" },
      "sandbox": { "enabled": false }
    },
    "list": [
      { "id": "main", "default": true, "workspace": "~/.openclaw/workspace" }
    ]
  },
  "channels": {
    "telegram": { "accounts": { "default": { "token": "BOT_TOKEN" } } },
    "whatsapp": { "accounts": { "default": { "enabled": true } } }
  },
  "cron": { "enabled": true },
  "tools": { "exec": { "enabled": true } },
  "gateway": { "port": 18789 }
}
```

## Decision guidance

### When to use X vs Y

| Scenario | Use | Reason |
|----------|-----|--------|
| **Single agent vs multi-agent** | Single agent with sessions | Simpler, less token-heavy; use sessions for parallel work |
| | Multi-agent with bindings | Need isolated workspaces, separate auth, or per-channel routing |
| **Cron vs heartbeat** | Cron | Scheduled tasks, webhooks, one-shot jobs |
| | Heartbeat | Continuous background monitoring, periodic checks |
| **Sandbox vs host exec** | Sandbox (Docker) | Untrusted code, security isolation, resource limits |
| | Host exec | Trusted workflows, full system access needed |
| **Skill vs plugin** | Skill (SKILL.md) | Agent-facing tool instructions, per-workspace or shared |
| | Plugin | Gateway-level features, custom commands, channel extensions |
| **Session memory vs MEMORY.md** | Session memory (hook) | Auto-save chat summaries on `/new` |
| | MEMORY.md | Persistent long-term facts, preferences, context |
| **Tool policy vs elevated** | Tool policy (deny/allow) | Restrict which tools are available |
| | Elevated (host exec) | Run exec on host when sandboxed (escape hatch) |

## Workflow

### Typical task: Set up OpenClaw with a messaging channel

1. **Initialize the Gateway**
   - Run `openclaw setup` to create `~/.openclaw/openclaw.json` and workspace
   - Or run `openclaw onboard --wizard` for interactive setup

2. **Choose and authenticate a model provider**
   - Run `openclaw models` to list providers (Anthropic, OpenAI, Ollama, etc.)
   - Set `agents.defaults.model.primary` in config or via `openclaw onboard`
   - Ensure API keys are in environment or `~/.openclaw/.env`

3. **Configure a messaging channel**
   - Pick a channel (Telegram, WhatsApp, Discord, Slack, etc.)
   - Run `openclaw onboard` and follow channel-specific setup (token, webhook, etc.)
   - Verify channel is enabled in `channels.<id>.accounts.<accountId>`

4. **Customize agent behavior**
   - Edit `~/.openclaw/workspace/AGENTS.md` with agent identity and instructions
   - Edit `SOUL.md` for personality and tone
   - Edit `TOOLS.md` with environment-specific notes

5. **Start the Gateway**
   - Run `openclaw gateway start` (or `openclaw onboard --install-daemon` for systemd/launchd)
   - Verify with `openclaw gateway status` and `openclaw logs --follow`

6. **Test and iterate**
   - Send a message on the configured channel
   - Check logs: `openclaw logs --follow`
   - Adjust AGENTS.md or config as needed
   - Restart Gateway: `openclaw gateway restart`

### Typical task: Create a custom skill

1. **Create a skill directory**
   - In workspace: `~/.openclaw/workspace/skills/<skill-name>/`
   - Or shared: `~/.openclaw/skills/<skill-name>/`

2. **Write SKILL.md with YAML frontmatter**
   ```markdown
   ---
   name: my_skill
   description: Does something useful
   ---
   
   # My Skill
   
   When the user asks for X, use the `exec` tool to run `command`.
   ```

3. **Test the skill**
   - Restart the Gateway
   - Ask the agent to use the skill
   - Check logs for errors

4. **Refine instructions**
   - Edit SKILL.md with clearer examples or constraints
   - Restart and test again

### Typical task: Schedule a cron job

1. **Enable cron in config**
   ```json
   { "cron": { "enabled": true } }
   ```

2. **Create a job via agent or CLI**
   - Agent: ask "schedule a daily task at 9am to check email"
   - CLI: `openclaw cron add --schedule "0 9 * * *" --prompt "check email"`

3. **Verify job is stored**
   - Check `~/.openclaw/cron/jobs.json`
   - Or run `openclaw cron list`

4. **Monitor execution**
   - Check logs: `openclaw logs --follow`
   - Adjust schedule or prompt as needed

## Common gotchas

- **Workspace not persisting**: Confirm the Gateway is using the same workspace path on every restart. Remote mode uses the Gateway host's workspace, not your local machine.
- **Agent forgets after restart**: Memory is stored in sessions and MEMORY.md. If the bot "forgets," ask it to write important facts into AGENTS.md or MEMORY.md rather than relying on chat history alone.
- **Config not reloading**: Most config changes require a Gateway restart (`openclaw gateway restart`). Plugin changes always require a restart.
- **Channels not receiving messages**: Verify the channel is enabled, the bot token is correct, and the bot is in the group/channel. Check `openclaw doctor` for validation errors.
- **Cron jobs not running**: Confirm `cron.enabled: true` in config. Check logs for schedule parsing errors. Verify the agent has a workspace configured.
- **Sandbox blocking tools**: If a tool is denied globally or per-agent, sandboxing won't bring it back. Use `openclaw sandbox explain` to debug effective policies.
- **Multi-agent routing not working**: Ensure bindings match the channel, accountId, and peer correctly. Test with `openclaw doctor`.
- **Skills not loading**: Check skill directory structure (`<workspace>/skills/<name>/SKILL.md`). Verify YAML frontmatter is valid. Restart the Gateway.
- **Elevated exec not available**: Confirm `tools.elevated.enabled: true` and the sender is in the allowlist. Elevated only affects exec when sandboxed.
- **Session memory hook not saving**: Enable the hook with `openclaw hooks enable session-memory`. Ensure `agents.defaults.workspace` is set. Check logs for LLM errors during slug generation.

## Verification checklist

Before submitting work with OpenClaw:

- [ ] Config is valid JSON5 and passes `openclaw doctor`
- [ ] Gateway starts without errors: `openclaw gateway start` and check logs
- [ ] Workspace files (AGENTS.md, SOUL.md) are readable and contain expected content
- [ ] Model provider is authenticated and `openclaw models` lists available models
- [ ] At least one channel is configured and enabled
- [ ] Test message sent on the channel receives a reply
- [ ] Agent behavior matches AGENTS.md and SOUL.md instructions
- [ ] Skills are discoverable: `openclaw skills list` shows custom skills
- [ ] Cron jobs (if used) appear in `~/.openclaw/cron/jobs.json` and run on schedule
- [ ] Logs are clean: `openclaw logs --follow` shows no errors during a test message
- [ ] Multi-agent bindings (if used) route to the correct agent
- [ ] Sandbox and tool policies are correctly applied: `openclaw sandbox explain`

## Resources

**Comprehensive navigation**: https://docs.openclaw.ai/llms.txt

**Critical docs**:
- [Gateway Configuration](https://docs.openclaw.ai/gateway/configuration) — config structure, channels, models, cron, sandbox
- [Agent Workspace](https://docs.openclaw.ai/concepts/agent-workspace) — workspace layout, AGENTS.md, SOUL.md, memory
- [Creating Skills](https://docs.openclaw.ai/tools/creating-skills) — skill structure, SKILL.md format, examples

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt