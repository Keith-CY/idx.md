---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw enables agents to operate as personal AI assistants across multiple messaging platforms simultaneously. Agents can receive messages from WhatsApp, Telegram, Discord, iMessage, Slack, Mattermost, Google Chat, Signal, MS Teams, and WebChat through a single self-hosted Gateway. The system supports tool execution, file operations, browser automation, session management with memory, multi-agent routing, and scheduled automation.

## Skills

### Messaging & Channels
- **Multi-channel messaging**: Send and receive messages across WhatsApp, Telegram, Discord, iMessage, Slack, Mattermost, Google Chat, Signal, MS Teams, and WebChat
- **Message operations**: Send text/media, edit, delete, react with emojis, pin/unpin messages, create threads, manage polls
- **Channel routing**: Route inbound messages to specific agents based on channel, account, peer, guild, or team
- **Group chat support**: Handle group messages with mention gating, group context injection, and member awareness
- **Media handling**: Send and receive images, audio, documents, and other file types
- **Broadcast groups**: Send messages to multiple recipients simultaneously

### Agent Execution & Control
- **Agent loop**: Full agentic cycle including message intake, context assembly, model inference, tool execution, streaming replies, and session persistence
- **Tool execution**: Run shell commands, file operations, browser automation, web search/fetch, and custom tools
- **Streaming responses**: Stream assistant output in real-time with configurable chunking and block streaming
- **Session management**: Maintain isolated sessions per agent, workspace, or sender with automatic session routing
- **Context management**: Automatic context compaction when approaching model token limits with memory flush before compaction

### File & Workspace Operations
- **File operations**: Read, write, edit, and delete files in the agent workspace
- **Patch operations**: Apply multi-file changes using structured patch format (add/update/delete files)
- **Workspace isolation**: Each agent has its own workspace directory with optional sandboxing
- **Relative path resolution**: Tools resolve paths relative to the workspace directory

### Browser Automation
- **Browser control**: Start/stop browser, open tabs, navigate, take screenshots, interact with UI elements
- **UI tree extraction**: Get stable UI snapshots (AI or ARIA) for element reference
- **Profile management**: Use isolated OpenClaw browser profile or system Chrome/Brave/Edge profiles
- **Remote browser support**: Route browser control to connected nodes or sandbox environments
- **Login support**: Browser-based login flows with credential handling

### Web Tools
- **Web search**: Search via Brave Search API (default) or Perplexity Sonar with real-time results
- **Web fetch**: HTTP fetch with readable extraction (HTML to markdown/text conversion)
- **Search provider flexibility**: Switch between Brave and Perplexity with API key configuration

### Multi-Agent & Coordination
- **Multi-agent routing**: Run multiple isolated agents in one Gateway with separate workspaces and sessions
- **Sub-agents**: Spawn background agent runs that execute in parallel and report results back
- **Agent send**: Send messages between agents for coordination
- **Deterministic routing**: Match inbound messages to agents by channel, account, peer, guild, or team
- **Per-agent configuration**: Override model, workspace, sandbox, and tool policies per agent

### Session & Memory Management
- **Session persistence**: Store session transcripts in JSONL format with metadata tracking
- **Automatic compaction**: Compress session history when approaching context limits
- **Memory system**: Agents can write durable notes to memory files that persist across compactions
- **Session pruning**: Remove old tool results from context while preserving transcript
- **Session tools**: List, search, and manage sessions programmatically

### Automation & Scheduling
- **Cron jobs**: Schedule agent runs with precise timing (cron expressions or relative times)
- **Heartbeat**: Check agent status at regular intervals (every 30 minutes default)
- **Webhooks**: Trigger agent runs via HTTP webhooks
- **Gmail Pub/Sub**: Trigger runs on incoming emails via Gmail webhooks
- **Polling**: Poll external services and trigger agent runs on changes
- **System events**: Trigger runs with custom system prompts for background tasks

### Model & Provider Integration
- **Multiple model providers**: OpenAI, Anthropic, OpenRouter, Vercel AI Gateway, Cloudflare, Moonshot, Synthetic, OpenCode, GLM, Z.AI, MiniMax, Venice, Amazon Bedrock, Qianfan
- **Model failover**: Configure primary and fallback models for reliability
- **Custom providers**: Add OpenAI-compatible or custom providers via models.json
- **Per-agent models**: Override default model per agent
- **Prompt caching**: Anthropic prompt caching support for cost optimization

### Voice & Media
- **Voice calls**: Make and receive voice calls via Twilio, Telnyx, or Plivo (plugin)
- **Voice wake**: Wake agent with voice commands on supported platforms
- **Audio handling**: Send and receive audio files, voice messages
- **Text-to-speech**: OpenAI or ElevenLabs TTS for voice output
- **Canvas**: Live drawing/UI canvas on supported platforms (macOS, iOS, Android)

### Security & Sandboxing
- **Docker sandboxing**: Run agents in isolated Docker containers
- **Tool policies**: Allow/deny specific tools globally, per-agent, or per-sandbox
- **Workspace access control**: Configure read-only, read-write, or no workspace access
- **Elevated mode**: Run specific commands with elevated privileges when needed
- **Token allowlists**: Restrict API access by token

### System & Configuration
- **CLI interface**: Full command-line control via `openclaw` commands
- **Web dashboard**: Browser-based Control UI for chat, config, sessions, and monitoring
- **Terminal UI**: TUI for real-time monitoring and interaction
- **RPC API**: Gateway RPC methods for programmatic control
- **HTTP API**: OpenAI-compatible HTTP API for model inference
- **Configuration validation**: Validate and apply configuration changes with automatic restart

## Workflows

### Setting Up Multi-Channel Agent
1. Install OpenClaw and start the Gateway: `openclaw gateway`
2. Add messaging channels: `openclaw channels add --channel telegram --token $TOKEN`
3. Configure agent model: Set `agents.defaults.model.primary` in config
4. Open Control UI: `openclaw dashboard` or visit http://127.0.0.1:18789/
5. Start chatting with the agent across configured channels

### Automating Daily Tasks
1. Create a cron job for morning briefing: `openclaw cron add --name "Morning brief" --cron "0 7 * * *" --message "Summarize today's agenda"`
2. Configure memory file for persistent notes: Agent writes to `memory/YYYY-MM-DD.md`
3. Set up session-specific context in workspace files (AGENTS.md, SOUL.md, TOOLS.md)
4. Monitor runs: `openclaw status` or check Control UI dashboard

### Parallel Task Execution with Sub-Agents
1. Main agent spawns sub-agents for parallel work: `sessions_spawn` tool call
2. Sub-agents run in isolated sessions with their own context
3. Main agent waits for sub-agent completion
4. Sub-agents announce results back to the chat channel
5. Configure sub-agent concurrency: `agents.defaults.subagents.maxConcurrent`

### Browser Automation Workflow
1. Agent calls `browser start` to launch isolated browser
2. Agent takes snapshot to get UI tree: `browser snapshot`
3. Agent uses snapshot ref IDs to click/type: `browser act`
4. Agent takes screenshot for visual verification: `browser screenshot`
5. Agent closes browser: `browser stop`

### Session Context Management
1. User sends `/context list` to see context breakdown
2. When context approaches limit, auto-compaction triggers
3. Agent writes durable notes to memory before compaction
4. Session summary is stored, recent messages preserved
5. User can manually compact with `/compact [instructions]`

### Multi-Agent Routing Setup
1. Define multiple agents in `agents.list` with unique IDs
2. Configure bindings to route messages: `bindings[].match.channel`, `match.accountId`, `match.peer`
3. Each agent has isolated workspace and sessions
4. Inbound messages route deterministically based on match order
5. Override per-agent model, sandbox, and tool policies

## Integration

OpenClaw integrates with:

- **Messaging platforms**: WhatsApp, Telegram, Discord, Slack, iMessage, Mattermost, Google Chat, Signal, MS Teams, WebChat
- **Model providers**: OpenAI, Anthropic, OpenRouter, Vercel AI Gateway, Cloudflare, Moonshot, Synthetic, OpenCode, GLM, Z.AI, MiniMax, Venice, Amazon Bedrock, Qianfan
- **Voice services**: Twilio, Telnyx, Plivo for voice calls
- **Email**: Gmail Pub/Sub for email-triggered automation
- **Browser**: Chrome, Brave, Edge, Chromium with isolated profile support
- **Plugins**: Extensible plugin system for custom tools, commands, and channels
- **Skills**: AgentSkills-compatible skill folders for tool guidance
- **ClawHub**: Public skill registry for discovering and installing community skills
- **Webhooks**: HTTP webhooks for external system integration
- **Docker**: Container-based sandboxing for agent isolation
- **Tailscale**: Secure remote access and tunneling

## Context

**Agent Architecture**: OpenClaw uses an embedded pi-agent-core runtime that executes the full agent loop: message intake → context assembly → model inference → tool execution → streaming replies → persistence. Each run is serialized per session with lifecycle events.

**Session Model**: Sessions are identified by sessionKey (derived from channel, account, peer, guild, team) and stored in JSONL format. Session metadata tracks token usage, last route, and compaction history. Sessions can be isolated per agent, workspace, or sender.

**Context Window Management**: OpenClaw tracks token usage and triggers auto-compaction when approaching the model's context limit. Before compaction, a silent memory flush turn allows the agent to write durable notes. Compaction preserves a summary and recent messages while removing old tool results.

**Tool Policies**: Tools are controlled via allow/deny lists at global, agent, and sandbox levels. Tool groups (group:fs, group:web, group:ui, etc.) provide convenient shortcuts. Sub-agents exclude session tools by default to prevent misuse.

**Workspace Isolation**: Each agent has a workspace directory (default ~/.openclaw/workspace-<agentId>) used as the working directory for file tools. Sandboxing can restrict workspace access to read-only or none. Absolute paths can still reach elsewhere unless sandboxing is enabled.

**System Prompt**: OpenClaw builds a custom system prompt for each run, assembled from workspace files (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md, HEARTBEAT.md), skills list, tool schemas, and injected context. Prompt mode can be full (default), minimal (sub-agents), or none.

**Message Delivery**: Inbound messages are routed to sessions via bindings, queued if a run is active, and delivered as streaming or block replies. Queue modes (steer, followup, collect) control how multiple inbound messages are handled during active runs.

**Streaming & Chunking**: Responses stream in real-time with configurable block boundaries (text_end vs message_end) and chunk size (800-1200 chars, prefers paragraph breaks). Block streaming is off by default; enable per-channel with blockStreaming: true.

**Plugins**: Plugins extend OpenClaw with custom tools, CLI commands, channels, and Gateway RPC methods. Plugins can ship their own skills and are loaded from configured paths. Plugin changes require Gateway restart.

**Sandbox Modes**: Sandboxing can be off, non-main (only non-main sessions), or all. Sandboxed agents run in Docker containers with configurable workspace access, resource limits, and environment variables. Per-session sandbox workspaces isolate file operations.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt