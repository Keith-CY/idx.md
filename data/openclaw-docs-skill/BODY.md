---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw enables agents to operate as always-on personal AI assistants across multiple messaging platforms simultaneously. Agents can execute complex workflows including browser automation, shell command execution, file operations, media processing, and scheduled tasks. The system supports multi-agent routing with isolated workspaces, session management with memory persistence, and sandboxed execution environments for security. Agents can spawn sub-agents for parallel work, integrate with 15+ messaging channels, and leverage multiple AI model providers with automatic failover.

## Skills

### Messaging & Channel Integration
- **Multi-channel messaging**: Send and receive messages across WhatsApp, Telegram, Discord, Slack, iMessage, Signal, Google Chat, Mattermost, MS Teams, Feishu, Matrix, Line, Zalo, and more
- **Message actions**: React to messages, pin/unpin, create threads, manage polls, send media (images, audio, documents)
- **Channel routing**: Route inbound messages to specific agents based on channel, account, peer, or guild/team
- **Group chat support**: Handle group messages with mention patterns and per-agent mention-gating
- **Message queueing**: Control how concurrent messages are handled (steer, followup, collect, or interrupt modes)
- **Streaming delivery**: Stream responses in real-time with block-based chunking and paragraph-aware formatting

### Browser Automation & Web Access
- **Browser control**: Automate Chrome/Firefox with snapshot (UI tree), screenshot (pixels), navigation, and actions (click, type, drag, select)
- **Web search**: Search via Brave Search API or Perplexity Sonar with real-time results and citations
- **Web fetch**: Extract readable content from HTML pages (markdown/text conversion)
- **Browser profiles**: Manage multiple browser profiles (openclaw, work, remote) with deterministic tab control
- **Login automation**: Handle authentication flows and maintain session state

### Code & Shell Execution
- **Shell commands**: Execute bash/shell commands in the workspace with foreground or background execution
- **Process management**: Run long-lived background processes with status tracking and output streaming
- **File operations**: Read, write, edit, and apply patches to files in the workspace
- **Elevated mode**: Run privileged commands when authorized (host-only, requires explicit permission)
- **Working directory & environment**: Set custom working directories and environment variables per command

### Agent Sessions & Memory
- **Session management**: Maintain isolated conversation contexts per user/channel/workspace
- **Transcript persistence**: Store full conversation history in JSONL format with automatic compaction
- **Memory system**: Save session summaries to markdown files with automatic slug generation
- **Context limits**: Manage token usage with session pruning and automatic compaction
- **Session tools**: Create new sessions, list history, send messages to other sessions, spawn sub-agents
- **Presence tracking**: Monitor agent availability and multi-agent coordination

### Multi-Agent & Sub-Agent Coordination
- **Multi-agent routing**: Run multiple isolated agents in one Gateway with separate workspaces and sessions
- **Sub-agents**: Spawn background agent runs that execute in parallel and announce results back to the requester
- **Agent allowlists**: Control which agents can spawn which sub-agents
- **Per-agent configuration**: Override model, tools, sandbox, and identity per agent
- **Agent discovery**: List available agents and their capabilities

### Automation & Scheduling
- **Cron jobs**: Schedule tasks at precise times with isolated sessions and optional chat delivery
- **Heartbeat monitoring**: Periodic checks (every 30 min) for inbox scanning, calendar events, and status checks
- **Webhooks**: Receive inbound events from external services (Telegram, Zalo, Gmail PubSub)
- **Polling**: Long-poll for updates from messaging platforms (default mode, no public URL required)
- **Lobster workflows**: Deterministic multi-step pipelines with approval gates and resumable execution
- **LLM tasks**: Structured LLM steps with JSON schema validation for workflow integration

### Media & Device Integration
- **Camera control**: Snap photos, record video clips from paired devices (iOS, Android, macOS)
- **Audio processing**: Transcribe audio files via OpenAI Whisper or CLI tools
- **Canvas rendering**: Display HTML/CSS/JS, A2UI components, and interactive UIs on connected devices
- **Screen recording**: Capture screen video with configurable duration, FPS, and audio
- **Location services**: Query device location with accuracy levels (coarse, balanced, precise)
- **Voice wake words**: Global wake word list for voice activation across all paired devices
- **Voice calls**: Make and receive voice calls via Twilio integration (plugin)

### Sandbox & Security
- **Docker sandboxing**: Run tools in isolated containers to limit filesystem and process access
- **Per-agent sandbox**: Configure sandbox mode per agent (off, non-main, all)
- **Tool policies**: Allow/deny specific tools globally, per-agent, or per-sandbox
- **Elevated mode restrictions**: Control which senders can use privileged commands
- **Workspace isolation**: Separate workspaces per agent with optional read-only or no access modes
- **Security tokens**: Authenticate nodes and operators with token-based pairing

### Model & Provider Management
- **Multiple providers**: Support for Anthropic, OpenAI, OpenRouter, Vercel AI Gateway, Moonshot, Minimax, GLM, Z.AI, Bedrock, and custom providers
- **Model failover**: Configure primary and fallback models with automatic switching on failure
- **Custom providers**: Add OpenAI-compatible or LiteLLM proxies with custom base URLs
- **Prompt caching**: Leverage Anthropic's prompt caching for cost reduction (API-only)
- **Model selection**: Per-agent or per-session model overrides
- **Cost tracking**: Monitor token usage and costs per session

### Skills & Extensions
- **Skill system**: Load AgentSkills-compatible skill folders with YAML metadata and instructions
- **ClawHub**: Browse, search, and install community skills with versioning and changelogs
- **Plugin system**: Extend OpenClaw with custom tools, commands, and Gateway RPC methods
- **Slash commands**: Trigger agent actions via /new, /queue, /status, /subagents, etc.
- **Skill filtering**: Load-time filtering based on environment, config, and binary availability

### Control & Monitoring
- **Web Control UI**: Browser dashboard for chat, config, sessions, and node management
- **Terminal UI (TUI)**: Full-featured terminal interface for agent interaction
- **WebChat**: Lightweight web-based chat interface
- **macOS companion app**: Native menu bar app with Canvas, voice overlay, and webchat
- **Health checks**: Gateway diagnostics, node status, and service health monitoring
- **Logging**: Structured logs with verbose mode for debugging RPC traffic

## Workflows

### Browser-Based Automation
1. Agent receives task requiring web interaction (e.g., "log into TradingView and analyze charts")
2. Use `browser start` to launch the OpenClaw-managed Chrome profile
3. Call `browser snapshot` to get the UI tree (AI or ARIA mode)
4. Use `browser act` with snapshot ref IDs to click, type, or navigate
5. Call `browser screenshot` to capture visual confirmation
6. Extract data and return results to the user

### Scheduled Reporting
1. Create a cron job: `openclaw cron add --name "Daily briefing" --cron "0 7 * * *" --message "Generate morning briefing"`
2. Agent runs in isolated session at 7 AM
3. Agent uses web search and file operations to gather information
4. Results are delivered to specified chat channel
5. Session context is saved to memory for continuity

### Multi-Step Approval Workflow
1. Enable Lobster workflow runtime
2. Create `.lobster` YAML file with steps (collect, categorize, approve, execute)
3. Agent calls `lobster run --pipeline workflow.lobster`
4. Workflow pauses at approval step, waiting for human confirmation
5. User approves via chat command
6. Workflow resumes and executes final steps
7. Results are reported back to the requester

### Parallel Task Execution
1. Agent receives complex task requiring parallel work
2. Spawn sub-agents: `sessions_spawn` with different tasks
3. Sub-agents run in isolated sessions concurrently
4. Each sub-agent completes and announces results to the main chat
5. Main agent synthesizes results from all sub-agents
6. Final response delivered to user

### Multi-Agent Team Coordination
1. Configure multiple agents in `agents.list` with different models/tools
2. Set up bindings to route messages to specific agents (e.g., @coordinator, @worker1, @worker2)
3. Coordinator agent spawns sub-agents under worker agents for specialized tasks
4. Workers execute in parallel with isolated workspaces
5. Coordinator collects results and synthesizes final response
6. Each agent maintains separate session history and memory

### Media Capture & Processing
1. Pair iOS/Android device or macOS node with Gateway
2. Agent receives request: "Take a photo and analyze it"
3. Use `nodes camera snap --node <device>` to capture image
4. Image is returned as MEDIA block in agent context
5. Agent analyzes image using vision model
6. Results are sent back to user via original messaging channel

### Deterministic Data Pipeline
1. Create Lobster workflow with structured steps
2. Use `llm-task` plugin for classification/summarization steps
3. Use `exec` tool for data processing commands
4. Each step is deterministic and resumable
5. Approval gates pause workflow for human review
6. Failed steps can be retried without re-running earlier steps
7. Full audit trail of execution and approvals

## Integration

OpenClaw integrates with external systems through multiple mechanisms:

- **Messaging platforms**: Native adapters for 15+ chat services with webhook and polling support
- **Model providers**: OpenAI, Anthropic, OpenRouter, and custom OpenAI-compatible servers
- **External APIs**: Web search (Brave, Perplexity), HTTP fetch, and custom webhook receivers
- **Email**: Gmail PubSub integration for inbox monitoring and automation
- **Devices**: iOS, Android, macOS nodes for camera, canvas, location, and voice control
- **Workflow engines**: Lobster for deterministic pipelines with approval gates
- **Custom tools**: Plugin system for extending with domain-specific capabilities
- **RPC/API**: WebSocket protocol for programmatic control and monitoring

## Context

**Architecture**: OpenClaw runs a single Gateway process that manages agents, sessions, and channels. Agents are embedded runtimes derived from pi-mono. Nodes are companion devices (iOS/Android/macOS) that connect via WebSocket and expose device capabilities.

**Session model**: Each conversation is a session with a unique key (agent:agentId:sessionKey). Sessions persist transcripts in JSONL format and can be compacted to manage context window. Sessions are isolated per user/channel/workspace.

**Tool execution**: Tools run synchronously in foreground or asynchronously in background. Sandboxed tools run in Docker containers. Elevated tools require explicit sender authorization. Tools are filtered at load time based on environment, config, and binary availability.

**Message flow**: Inbound messages are routed to agents via bindings. If an agent run is active, messages are queued (steer, followup, collect, or interrupt). Outbound replies are chunked and formatted per channel. Streaming is supported with block-based delivery.

**Multi-agent**: Multiple agents run in one Gateway with separate workspaces, sessions, and configurations. Bindings route messages deterministically. Sub-agents spawn from existing runs and announce results back to the requester chat.

**Security**: Sandbox mode isolates tool execution in Docker. Tool policies restrict access per agent. Elevated mode requires sender authorization. Tokens authenticate nodes and operators. Allowlists control DM/group access per channel.

**Model failover**: Configure primary and fallback models. If primary fails, Gateway automatically tries fallbacks. Per-agent or per-session overrides are supported. Cost tracking monitors token usage.

**Persistence**: Sessions, transcripts, memory, and configuration are persisted to disk. Cron jobs and scheduled tasks are stored in the Gateway. Node pairing tokens are persisted for reconnection.

**Performance**: Block streaming reduces latency for long responses. Message queueing prevents context loss during concurrent messages. Background processes keep the agent responsive. Sub-agents enable parallel work without blocking the main session.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt