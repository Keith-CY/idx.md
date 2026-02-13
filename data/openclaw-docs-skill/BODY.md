---
name: Clawdbot
description: Self-hosted gateway that connects WhatsApp, Telegram, Discord, iMessage, and more to AI coding agents. Run a single Gateway process on your own machine and message your AI assistant from anywhere.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw enables AI agents to operate across multiple messaging platforms simultaneously through a single self-hosted gateway. Agents can execute complex workflows including browser automation, file operations, shell commands, and inter-agent communication. The system supports persistent sessions with memory management, multi-agent routing with workspace isolation, and comprehensive security controls including sandboxing and elevated execution modes.

## Skills

### Messaging & Channels
- **Multi-channel support**: Connect agents to WhatsApp, Telegram, Discord, iMessage, Slack, Mattermost, Signal, Google Chat, MS Teams, Feishu, Matrix, Line, Zalo, and IRC simultaneously
- **Channel routing**: Route inbound messages to specific agents based on channel, account, sender, or group membership
- **Message actions**: Send text and media, edit/delete messages, create threads, manage reactions, send polls, and handle native commands
- **Group messaging**: Support for group chats with mention detection, member tracking, and group-specific context
- **Media support**: Send and receive images, audio, documents, and video across channels
- **Broadcast groups**: Send messages to multiple recipients or channels in a single operation
- **Plugin channels**: Extend with custom messaging platforms via plugin architecture

### Browser Automation
- **Browser control**: Start/stop browser, manage tabs, navigate URLs, take snapshots and screenshots
- **UI interaction**: Click, type, drag, select elements using stable UI tree references (AI or ARIA)
- **Browser profiles**: Support for named profiles (openclaw, chrome, remote CDP)
- **Target selection**: Route browser operations to sandbox, host, or paired nodes
- **Session state**: Manage cookies, storage, credentials, geolocation, media, timezone, locale, and device settings
- **Debugging**: Console access, PDF generation, error tracking, request inspection, network tracing

### File & Code Operations
- **File operations**: Read, write, edit files with line-based or full-file replacement
- **Patch tool**: Apply multi-file changes using structured patch format (Add/Update/Delete operations)
- **Workspace access**: Operate within configured workspace directories with path isolation
- **Code analysis**: Parse and modify code files with syntax awareness

### Command Execution
- **Shell commands**: Execute bash/shell commands via exec tool with foreground and background support
- **Process management**: Keep long-running tasks in memory, list active processes, manage background sessions
- **Command timeout**: Configure execution timeouts and environment variables
- **Elevated mode**: Escape sandbox restrictions for host-level execution when authorized
- **Approval gates**: Request user approval for sensitive commands

### Web Tools
- **Web search**: Search via Brave Search API (default) or Perplexity Sonar with structured results
- **Web fetch**: HTTP fetch with readable extraction (HTML to markdown/text conversion)
- **Search providers**: Switch between Brave, Perplexity, or OpenRouter-based providers

### Agent Coordination
- **Sub-agents**: Spawn background tasks in isolated sessions without blocking main conversation
- **Agent communication**: Send messages between agents via agent-send tool
- **Multi-agent routing**: Configure separate workspaces and sessions per agent with binding rules
- **Sub-agent management**: List, stop, inspect logs, and send messages to running sub-agents

### Session & Memory Management
- **Session persistence**: Store conversation history in JSONL format per session
- **Session reset**: Start fresh sessions with /new or /reset commands
- **Context compaction**: Summarize old turns to manage token budget with /compact
- **Memory recall**: Search and retrieve past session context
- **Session pruning**: Automatically trim old tool outputs based on context limits
- **Workspace memory**: Save session summaries to dated memory files on session reset

### Mobile & Device Integration
- **iOS/Android nodes**: Pair mobile devices as companion nodes with WebSocket connection
- **Canvas rendering**: Display HTML/CSS/JS interfaces on iOS nodes via WKWebView
- **Camera access**: Capture photos and video clips from paired devices
- **Location services**: Get device location via GPS
- **Voice wake**: Trigger agent from voice commands on mobile nodes
- **Screen recording**: Record device screen when permissions granted
- **macOS companion app**: Run macOS as a node with local canvas and camera commands

### Automation & Scheduling
- **Cron jobs**: Schedule tasks with precise timing (cron expressions)
- **Heartbeat polling**: Check for work at regular intervals (30-min default)
- **Webhooks**: Trigger agent runs from external HTTP requests
- **Gmail Pub/Sub**: React to Gmail events via Google Cloud Pub/Sub
- **Polling**: Periodically check external systems for changes
- **Auth monitoring**: Watch for authentication state changes
- **Hooks system**: Execute custom logic on events (session-memory, file-chooser, etc.)

### Model & LLM Integration
- **Multiple providers**: Anthropic, OpenAI, OpenRouter, Vercel AI Gateway, Cloudflare, Moonshot, Bedrock, Qianfan, and more
- **Model failover**: Configure primary and fallback models
- **Custom providers**: Support OpenAI-compatible and Anthropic-compatible endpoints
- **Local models**: Run Ollama or other local LLM runtimes
- **Prompt caching**: Leverage Anthropic's prompt caching for efficiency
- **Model selection**: Switch models per-session with /model directive

### Reasoning & Thinking
- **Extended thinking**: Enable model reasoning with /think directive (off/minimal/low/medium/high)
- **Reasoning visibility**: Control whether thinking blocks are shown with /reasoning on|off|stream
- **Verbose output**: Show tool calls and internal reasoning with /verbose directive
- **Token tracking**: Monitor token usage with /usage directive
- **Streaming reasoning**: Stream reasoning into Telegram draft bubble (Telegram only)

### Message Delivery & Streaming
- **Block streaming**: Send completed text blocks as they finish (configurable chunking)
- **Queue modes**: Control inbound message behavior (steer/followup/collect/interrupt)
- **Message steering**: Inject messages into active runs or queue for followup
- **Retry logic**: Automatic retry with exponential backoff for failed sends
- **Channel chunking**: Respect platform message limits with intelligent splitting
- **Delivery targeting**: Route replies to specific channels, threads, or recipients

### Reactions & Interactions
- **Emoji reactions**: React to messages with emoji on Discord, Slack, Telegram, Signal, WhatsApp
- **Reaction removal**: Remove reactions with remove=true or empty emoji
- **Reaction notifications**: Receive inbound reaction events (Signal)
- **Message editing**: Edit previously sent messages
- **Message deletion**: Delete messages from chat
- **Polls**: Send polls on WhatsApp, Discord, MS Teams

### Security & Sandboxing
- **Docker sandbox**: Run agent tools in isolated Docker containers
- **Tool policy**: Allow/deny specific tools globally or per-agent
- **Elevated execution**: Escape sandbox for host-level exec when authorized
- **Approval gates**: Request user approval for sensitive operations
- **Sender allowlists**: Restrict commands to authorized senders
- **Access groups**: Define permission groups for command authorization
- **Formal verification**: Security properties formally verified

### System & Configuration
- **CLI interface**: Full command-line control via openclaw commands
- **Web dashboard**: Browser-based Control UI for chat, config, sessions, nodes
- **Terminal UI**: TUI interface for local gateway interaction
- **WebChat**: Web-based chat interface
- **Configuration files**: YAML/JSON config with hot-reload support
- **Gateway protocol**: WebSocket-based control plane for all clients
- **HTTP APIs**: Tools invoke API, OpenAI-compatible API, browser control API

### Skills & Extensibility
- **Skills system**: AgentSkills-compatible skill folders with SKILL.md documentation
- **ClawHub registry**: Publish and discover skills with versioning and semver
- **Plugin system**: Extend with custom tools, channels, and Gateway RPC methods
- **Slash commands**: Define custom commands with /command syntax
- **Lobster workflows**: Typed workflow runtime with resumable approvals
- **LLM task tool**: JSON-only LLM step for structured workflow output

## Workflows

### Setting Up Multi-Agent Routing
1. Define multiple agents in config with separate workspaces
2. Configure bindings to route channels/accounts to specific agents
3. Each agent maintains isolated sessions and memory
4. Use /agent command to switch context between agents

### Browser Automation Workflow
1. Start browser with browser action=status
2. Open URL with browser action=navigate url=<url>
3. Take snapshot to get UI tree with browser action=snapshot
4. Interact with elements using snapshot ref IDs: browser action=act ref=<id> type=click
5. Capture results with browser action=screenshot

### Parallel Task Execution with Sub-Agents
1. Spawn sub-agent with task: spawn_subagent task="research topic X"
2. Main agent continues responding while sub-agent works
3. Monitor with /subagents list
4. View results with /subagents log <id>
5. Sub-agent announces completion back to chat

### Scheduled Automation
1. Create cron job: openclaw cron add --name "Daily task" --cron "0 9 * * *" --message "Run analysis"
2. Or use heartbeat for periodic checks: HEARTBEAT.md triggers every 30 minutes
3. Configure delivery target for results: --announce to send to chat
4. Monitor with openclaw cron list and openclaw cron runs --id <id>

### File-Based Code Modification
1. Read file: read path=src/app.ts
2. For single edit: edit path=src/app.ts line=10 text="new code"
3. For multi-file changes: Use apply_patch with Add/Update/Delete operations
4. Verify changes with read before committing

### Session Context Management
1. Monitor context with /context list
2. When approaching limits, use /compact to summarize old turns
3. For fresh start, use /new to reset session ID
4. Enable session-memory hook to auto-save summaries on reset

### Mobile Device Integration
1. Pair iOS/Android device: openclaw pairing request
2. Approve pairing on device
3. Invoke commands: openclaw nodes camera snap --node <device>
4. Display canvas: openclaw nodes invoke --node <device> --command canvas.navigate --params '{"url":"..."}'
5. Capture location: openclaw nodes invoke --node <device> --command location.get

## Integration

OpenClaw integrates with:
- **Messaging platforms**: 15+ chat apps via native channels or plugins
- **LLM providers**: Anthropic, OpenAI, OpenRouter, and 10+ others
- **Cloud services**: Gmail (Pub/Sub), Google Cloud, AWS Bedrock
- **Local systems**: Docker, Ollama, local file systems, shell commands
- **Mobile devices**: iOS and Android via WebSocket nodes
- **Custom tools**: Plugin architecture for extending with arbitrary functionality
- **HTTP APIs**: OpenAI-compatible API, Tools Invoke API, browser control API
- **Webhooks**: Receive events from external systems via HTTP

## Context

**Architecture**: OpenClaw runs a single Gateway process that manages agents, channels, and nodes. All clients (CLI, web UI, mobile apps) connect via WebSocket using the Gateway protocol.

**Agent Loop**: Each message triggers a complete loop: intake → context assembly → model inference → tool execution → streaming replies → persistence. Loops are serialized per session to maintain consistency.

**Sessions**: Conversations are stored as JSONL files with metadata. Each chat (channel + recipient) has a session key. Sessions can be reset, compacted, or pruned based on context limits.

**Workspace**: Agents operate within a configured workspace directory. File operations are scoped to this directory. Sandboxed agents get isolated workspace copies.

**System Prompt**: OpenClaw builds custom system prompts per run including AGENTS.md, SOUL.md, IDENTITY.md, TOOLS.md, and injected context. Sub-agents receive minimal prompts focused on task completion.

**Tool Policy**: Three-layer security model: Sandbox (where tools run), Tool Policy (which tools allowed), and Elevated (host escape hatch). All three must permit an action for it to execute.

**Message Routing**: Inbound messages are routed to agents via bindings, queued if a run is active, then processed in the agent loop. Queue modes control whether messages steer the current run or wait for followup.

**Streaming**: Agents stream replies as they generate them. Block streaming sends completed text blocks immediately. Chunking respects platform message limits.

**Plugins**: Extend OpenClaw with custom channels, tools, and Gateway RPC methods. Plugins are loaded from configured paths and can register handlers at startup.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt