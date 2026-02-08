---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw is a self-hosted gateway that enables AI agents to interact across multiple messaging platforms simultaneously. Agents can execute complex workflows including browser automation, file operations, shell commands, and multi-step automation. The system supports persistent sessions with memory management, multi-agent routing with isolated workspaces, and extensible tool ecosystems through skills and plugins.

## Skills

### Messaging & Channel Management
- **Multi-channel messaging**: Send and receive messages across WhatsApp, Telegram, Discord, Slack, Google Chat, Signal, iMessage, MS Teams, Mattermost (plugin), and more
- **Message actions**: React to messages, edit, delete, pin/unpin, create threads, manage polls
- **Channel routing**: Route inbound messages to specific agents based on channel, sender, or custom rules
- **Media support**: Send/receive images, audio, documents, and other attachments
- **Group management**: Handle group messages, broadcast groups, and multi-user conversations

### Browser Automation
- **Browser control**: Open tabs, navigate URLs, take snapshots and screenshots, interact with pages
- **UI automation**: Click, type, drag, select elements using stable UI tree references
- **Profile management**: Isolated browser profiles (openclaw, chrome, remote) separate from personal browsing
- **Login automation**: Handle authentication flows and maintain session state
- **PDF generation**: Capture pages as PDFs for document processing

### File & Code Operations
- **File operations**: Read, write, edit, and delete files in the workspace
- **Patch application**: Apply multi-file changes using structured patch format for complex edits
- **Code generation**: Create and modify source code across multiple files
- **Workspace isolation**: Operate within configured workspace directories

### Shell & Process Execution
- **Command execution**: Run shell commands with foreground and background execution modes
- **Process management**: Spawn long-running background processes, monitor status, manage lifecycle
- **Environment control**: Set working directories, environment variables, command timeouts
- **Output capture**: Capture stdout/stderr for processing and analysis

### Web & Search
- **Web search**: Query the web via Brave Search API or Perplexity Sonar
- **Web fetch**: Retrieve and parse HTML content, convert to markdown/text
- **Real-time information**: Access current web data for research and decision-making

### Browser & Canvas Rendering
- **Canvas rendering**: Display interactive HTML/CSS/JS interfaces through A2UI
- **Visual workspace**: Lightweight UI for agent-controlled visualizations
- **Cross-platform support**: Canvas available on macOS, iOS, and web interfaces

### Session & Memory Management
- **Persistent sessions**: Maintain conversation context across multiple interactions
- **Session isolation**: Separate sessions per agent, workspace, or sender
- **Memory compaction**: Automatically compress long transcripts while preserving context
- **Session pruning**: Clean up old sessions based on age or inactivity
- **Context assembly**: Dynamically load relevant context for each agent turn

### Automation & Scheduling
- **Cron jobs**: Schedule tasks at precise times with isolated sessions
- **Heartbeat monitoring**: Periodic checks for continuous background monitoring
- **Webhook integration**: Trigger agent runs from external HTTP requests
- **Deterministic workflows**: Use Lobster for multi-step pipelines with approval gates
- **Background processes**: Keep long-running tasks alive between interactions

### Multi-Agent Coordination
- **Multi-agent routing**: Run multiple isolated agents with separate workspaces and sessions
- **Sub-agents**: Spawn background agent runs that report results back to requester
- **Agent isolation**: Per-agent sandbox configuration, tool restrictions, and auth profiles
- **Workspace separation**: Each agent has independent agentDir, sessions, and memory

### Model & Provider Configuration
- **Multiple model providers**: Support for Anthropic, OpenAI, OpenRouter, Bedrock, Moonshot, MiniMax, and more
- **Model failover**: Configure primary and fallback models for reliability
- **Custom providers**: Add OpenAI-compatible proxies and local models
- **Model selection**: Switch models per session or use allowlists for security
- **Prompt caching**: Leverage Anthropic's prompt caching for efficiency

### Advanced Reasoning
- **Extended thinking**: Enable reasoning/thinking modes for complex problem-solving
- **Verbose output**: Expose internal tool calls and reasoning for debugging
- **Streaming reasoning**: Stream thinking tokens in real-time to supported channels
- **Token tracking**: Monitor token usage across reasoning and regular output

### Media & Device Integration
- **Camera control**: Capture photos and video from paired devices
- **Audio processing**: Record and process audio from nodes
- **Voice wake**: Trigger agents with voice commands
- **Location services**: Access and share location data
- **Voice calls**: Make and receive voice calls via Twilio, Telnyx, or Plivo (plugin)

### Security & Sandboxing
- **Docker sandboxing**: Run tools in isolated containers to limit blast radius
- **Tool policies**: Fine-grained allow/deny lists for tools at global, agent, and sandbox levels
- **Elevated execution**: Escape hatch for host-level commands when sandboxed
- **Security audit**: Built-in security checker for configuration vulnerabilities
- **Auth profiles**: Per-agent authentication with separate credential stores

### API & Integration
- **Gateway RPC**: JSON-RPC protocol for programmatic control
- **OpenAI HTTP API**: Serve OpenAI-compatible Chat Completions endpoint
- **WebSocket protocol**: Real-time bidirectional communication with event streaming
- **Bridge protocol**: Connect remote gateways and nodes
- **CLI backends**: Use OpenClaw as backend for custom CLI tools

## Workflows

### Browser-Based Automation
1. Start browser with `browser start` or auto-start on first use
2. Navigate to target URL with `browser navigate`
3. Take snapshot with `browser snapshot` to get UI tree
4. Interact using `browser act` with snapshot references
5. Capture results with `browser screenshot` or `browser pdf`
6. Close browser with `browser stop` when done

### Multi-File Code Generation
1. Prepare patch content with file operations (Add/Update/Delete)
2. Wrap in `*** Begin Patch` / `*** End Patch` markers
3. Call `apply_patch` tool with complete patch
4. Verify changes with `read` tool
5. Execute tests with `exec` tool

### Scheduled Automation with Approval
1. Create Lobster workflow file (.lobster) with steps and approval gates
2. Define steps with commands and conditional execution
3. Mark critical steps with `approval: required`
4. Trigger via cron job or webhook
5. Agent pauses at approval step, resumes after human confirmation

### Multi-Agent Task Distribution
1. Configure multiple agents in `agents.list` with separate workspaces
2. Set up channel bindings to route messages to specific agents
3. Use `agent_send` tool to spawn sub-agents for parallel work
4. Sub-agents run in isolated sessions and report results back
5. Coordinator agent aggregates results and responds to user

### Session Context Preservation
1. Enable `session-memory` hook to auto-save session summaries
2. Agent extracts last 15 lines of conversation on `/new`
3. LLM generates descriptive filename slug
4. Memory saved to `<workspace>/memory/YYYY-MM-DD-slug.md`
5. Future sessions can reference saved memory for continuity

### Real-Time Messaging Across Platforms
1. Configure channel accounts under `channels.<id>.accounts`
2. Set up channel routing rules in `channels.routing`
3. Send messages via `message send` with target specification
4. Receive inbound messages routed to configured agent
5. Handle media attachments automatically

## Integration

OpenClaw integrates with:

- **Messaging platforms**: WhatsApp, Telegram, Discord, Slack, Google Chat, Signal, iMessage, MS Teams, Mattermost, and custom channels via plugins
- **Model providers**: Anthropic Claude, OpenAI GPT, OpenRouter, AWS Bedrock, Moonshot, MiniMax, and OpenAI-compatible APIs
- **Voice services**: Twilio, Telnyx, Plivo for voice calls and media streaming
- **External systems**: Via webhooks, HTTP APIs, and custom skills
- **Local tools**: Browser profiles, shell commands, file systems, Docker containers
- **Devices**: macOS companion app, iOS/Android nodes with Canvas support
- **Storage**: Session transcripts, memory files, sticker caches, auth profiles

## Context

**Architecture**: OpenClaw runs a single Gateway process that manages channels, sessions, and agent execution. The Gateway exposes RPC methods for control and WebSocket for real-time events. Agents run embedded using pi-agent-core runtime with access to typed tools.

**Session model**: Each inbound message maps to a sessionKey (agent:agentId:channel:sender). Sessions persist transcripts as JSONL files and maintain state in sessions.json. Context is assembled dynamically per turn, with automatic compaction when approaching token limits.

**Tool execution**: Tools run either on the host or in Docker sandboxes depending on configuration. Tool policies enforce security at multiple levels: global, per-agent, per-provider, and per-sandbox. Elevated mode allows host execution from sandboxed agents.

**Event streaming**: Agent runs emit lifecycle events (start/end/error), assistant deltas, and tool events. Clients receive these as SSE or WebSocket events with sequence tags for ordering.

**Multi-agent routing**: Bindings map (channel, sender, optional group) to an agent. Each agent has isolated workspace, agentDir, sessions, and optional sandbox. Sub-agents spawn in background and announce results to requester.

**Skill system**: Skills are AgentSkills-compatible directories with SKILL.md files. OpenClaw loads bundled skills plus local overrides, filtering at load time based on environment, config, and binary availability. Skills teach agents how to use tools.

**Security model**: Sandboxing limits filesystem/process access. Tool policies enforce hard stops on tool availability. Auth profiles store credentials per-agent. Formal verification available for critical deployments.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt