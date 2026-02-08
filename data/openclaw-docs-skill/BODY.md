---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw enables AI agents to operate autonomously across messaging platforms, execute system commands, automate browser interactions, and coordinate complex multi-agent workflows. Agents can maintain persistent sessions with automatic memory management, access web content, control devices, schedule tasks, and operate in isolated sandboxed environments for security.

## Skills

### Messaging & Channel Integration
- **Multi-channel messaging**: Send and receive messages across WhatsApp, Telegram, Discord, Slack, Google Chat, Mattermost, Signal, iMessage, and MS Teams
- **Message operations**: Send text/media, create polls, manage reactions, edit/delete messages, pin/unpin, search, create threads
- **Channel routing**: Route inbound messages to specific agents based on channel, account, peer, guild, or team
- **Group management**: Support for direct messages, group chats, broadcast groups, and channel-specific routing
- **Media support**: Send and receive images, audio, documents, and location data across channels

### Agent Execution & Control
- **Agent loop**: Full agentic loop with intake, context assembly, model inference, tool execution, and streaming replies
- **System prompt injection**: Custom system prompts assembled per run with tool lists, skills metadata, workspace context, and runtime information
- **Tool execution**: Access to typed tools including browser, exec, file operations, web search, and more
- **Streaming output**: Block streaming with configurable chunking (text_end or message_end), respecting channel text limits
- **Reasoning/thinking**: Extended reasoning with visibility control (/reasoning on|off|stream) and token tracking

### Browser Automation
- **Browser control**: Start/stop/navigate browser, take snapshots and screenshots, interact with UI elements
- **UI automation**: Snapshot returns stable UI tree (AI or ARIA), act uses snapshot ref IDs for click/type/drag/select
- **Profile support**: Named browser profiles (openclaw, chrome, remote CDP)
- **Headless mode**: Optional headless operation for automation without visible window
- **Login automation**: Browser-based login flows with session persistence

### Web & Information Tools
- **Web search**: Search via Brave Search API (default) or Perplexity Sonar with real-time results
- **Web fetch**: HTTP fetch with readable extraction (HTML to markdown/text), Firecrawl integration, response caching
- **Content extraction**: Readability-based main content extraction with fallback to Firecrawl

### File & Workspace Operations
- **File operations**: read, write, edit files in workspace
- **Patch application**: apply_patch tool for multi-file/multi-hunk edits with structured patch format
- **Workspace access**: Configurable read-only or read-write access per agent
- **Sandbox isolation**: Optional Docker-based sandboxing for tool execution

### Command Execution
- **Shell commands**: exec tool for running shell commands with foreground/background execution
- **Process management**: process tool for managing long-running background tasks
- **Elevated mode**: /elevated directive to run on host when sandboxed (with approval gates)
- **Command timeouts**: Configurable command and invoke timeouts

### Session & Memory Management
- **Session persistence**: JSONL-based session transcripts with metadata tracking
- **Auto-compaction**: Automatic context window management with silent memory flush before compaction
- **Manual compaction**: /compact command to manually trigger session compaction
- **Memory files**: Durable memory storage in workspace (memory/YYYY-MM-DD.md)
- **Session pruning**: Remove old tool results from in-memory prompt without rewriting transcript
- **Session reset**: /new or /reset to start fresh sessions

### Multi-Agent Coordination
- **Sub-agents**: Spawn background agent runs (sessions_spawn) that announce results back to requester
- **Agent routing**: Multiple isolated agents with separate workspaces, agentDirs, and sessions
- **Agent send**: Direct messaging between agents (agent_send tool)
- **Presence tracking**: Monitor agent availability and status
- **Tool restrictions**: Per-agent tool allow/deny policies and sandbox configuration

### Scheduling & Automation
- **Cron jobs**: Gateway-owned scheduler for precise timing, isolated sessions, optional chat delivery
- **Webhooks**: Inbound webhook support for triggering agent runs
- **Polling**: Poll external services for changes
- **Gmail PubSub**: Gmail push notifications for email-triggered automation
- **Auth monitoring**: Monitor authentication status changes
- **Heartbeat**: Periodic agent wakeups (alternative to cron for continuous tasks)

### Media & Device Integration
- **Camera access**: Capture images from connected devices
- **Audio handling**: Record and process audio from nodes
- **Voice calls**: Voice call plugin with Twilio, Telnyx, or Plivo providers
- **Voice wake**: Wake agent on voice command from macOS companion app
- **Location**: Send and receive location data (geo URI format)
- **Talk mode**: Text-to-speech output with configurable providers (OpenAI, ElevenLabs)

### Model & Provider Management
- **Multiple providers**: OpenAI, Anthropic, OpenRouter, Bedrock, Vercel AI Gateway, Moonshot, MiniMax, GLM, Qianfan, and custom providers
- **Model failover**: Configure primary and fallback models per agent
- **Custom providers**: Add OpenAI/Anthropic-compatible proxies via models.providers
- **Prompt caching**: Anthropic prompt caching support (API-only)
- **Token tracking**: Monitor token usage per run with detailed cost breakdown

### Security & Sandboxing
- **Docker sandboxing**: Optional per-agent Docker isolation (mode: off|non-main|all)
- **Tool policy**: Global and per-agent tool allow/deny lists
- **Elevated mode**: Escape hatch for host execution when sandboxed (with approval gates)
- **Sender allowlists**: Restrict elevated access by sender provider
- **Workspace access**: Configure per-agent workspace access (none|ro|rw)
- **Approval gates**: exec approval requests with security levels (deny|allowlist|full)

### Web Interfaces & Control
- **Control UI**: Browser-based dashboard for chat, config, sessions, and nodes
- **Dashboard**: Local gateway dashboard at http://127.0.0.1:18789/
- **Web chat**: Webchat interface for direct browser interaction
- **TUI**: Terminal user interface for gateway control
- **RPC API**: WebSocket-based RPC for programmatic control

### Skills & Extensibility
- **Skills system**: AgentSkills-compatible skill folders with SKILL.md metadata
- **Skill loading**: Bundled skills plus optional local overrides, filtered by environment/config
- **Slash commands**: Custom commands for agent control (/new, /reset, /compact, /reasoning, /elevated, etc.)
- **Plugins**: Extensible plugin system for custom channels, tools, and RPC methods
- **ClawHub**: Public skill discovery and sharing platform with versioning and community feedback

## Workflows

### Setting Up a Multi-Channel Agent
1. Start the Gateway: `openclaw gateway`
2. Run the onboarding wizard: `openclaw onboard` or access Control UI at http://127.0.0.1:18789/
3. Add messaging channels: `openclaw channels add --channel telegram --token $TOKEN`
4. Configure agent model: Set `agents.defaults.model.primary` in config
5. Test with Control UI webchat or send a message to the configured channel

### Automating a Scheduled Task
1. Create a cron job: `openclaw cron add --name "daily-report" --cron "0 9 * * *" --message "Generate report"`
2. Agent receives the message in a new session
3. Agent executes tools and generates output
4. Optionally deliver output back to chat: `--deliver-to channel:123`
5. Monitor runs: `openclaw cron runs --id <id>`

### Browser Automation Workflow
1. Agent calls `browser snapshot` to get UI tree
2. Agent calls `browser act` with ref IDs to interact (click, type, drag)
3. Agent calls `browser screenshot` to capture visual state
4. Agent calls `browser navigate` to change pages
5. For logins: use `browser_login` tool for credential-based authentication

### Multi-Agent Coordination
1. Main agent calls `sessions_spawn` with task and optional agentId
2. Sub-agent runs in isolated session (agent:<agentId>:subagent:<uuid>)
3. Sub-agent executes tools and completes task
4. Sub-agent announces result back to requester chat channel
5. Main agent continues with sub-agent output

### Session Compaction & Memory
1. Session accumulates messages and tool results
2. When approaching context window, auto-compaction triggers
3. Silent memory flush turn prompts agent to write durable notes
4. Agent writes to memory/YYYY-MM-DD.md
5. Compaction summarizes session and retains recent messages
6. Agent continues with compacted context

### Sandboxed Execution
1. Configure `agents.defaults.sandbox.mode: "non-main"` in config
2. Non-main sessions run tools in Docker container
3. Agent can access workspace files (read-only or read-write)
4. For host access: use `/elevated on` (requires approval)
5. Tool policy further restricts available tools per agent

## Integration

OpenClaw integrates with:
- **Messaging platforms**: WhatsApp, Telegram, Discord, Slack, Google Chat, Mattermost, Signal, iMessage, MS Teams
- **LLM providers**: OpenAI, Anthropic, OpenRouter, Bedrock, Vercel AI Gateway, and custom OpenAI-compatible servers
- **Voice providers**: Twilio, Telnyx, Plivo for voice calls
- **TTS providers**: OpenAI, ElevenLabs, Edge TTS for text-to-speech
- **Web services**: Brave Search, Perplexity Sonar, Firecrawl for web content
- **Device platforms**: iOS, Android, macOS, Linux, Windows with node pairing
- **Deployment**: Docker, Nix, Ansible, Fly.io, Hetzner, GCP, Railway, Render, Northflank

## Context

**Agent Architecture**: OpenClaw uses a serialized agent loop per session that emits lifecycle and stream events. Each run includes context assembly (tools, skills, workspace, time, runtime metadata), model inference, tool execution, and streaming replies.

**Session Model**: Sessions are identified by sessionKey (derived from channel, account, peer, guild, team). Transcripts persist as JSONL files with metadata in sessions.json. Context limits are tracked per model's context window with configurable reserve tokens.

**Sandbox Model**: Sandboxing decides where tools run (Docker vs host). Tool policy decides which tools are available. Elevated mode is an exec-only escape hatch for host execution when sandboxed.

**Tool Execution**: Tools are typed and first-class (not shelled). Core tools (read/exec/edit/write) are always available, subject to tool policy. Optional tools like apply_patch are controlled by configuration.

**Streaming**: Block streaming sends completed blocks as the model writes (text_end) or flushes at message end (message_end). Chunking respects channel text limits and avoids splitting code blocks. Telegram supports draft streaming for partial text updates.

**Memory Management**: Sessions auto-compact when approaching context window. Pre-compaction memory flush prompts agent to write durable notes. Compaction summarizes context and retains recent messages. Manual compaction via /compact command.

**Multi-Agent**: Multiple agents run in one Gateway with isolated workspaces and sessions. Inbound routing uses deterministic matching (peer → guild → team → accountId → default). Sub-agents spawn background runs that announce results back to requester.

**Security**: Sandbox isolation, tool policies, sender allowlists, and approval gates control execution. Elevated mode requires explicit approval. Workspace access is configurable per agent (none/ro/rw).

**Configuration**: YAML-based config at ~/.openclaw/config.yml or environment variables. Per-agent overrides via agents.list[]. Model selection via agents.defaults.model.primary (provider/model format). Skills loaded from bundled + local directories, filtered by environment/config/binary presence.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt