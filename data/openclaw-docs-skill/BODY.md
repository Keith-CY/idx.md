---
name: Clawdbot
description: Documentation and capabilities reference for Clawdbot
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

ClawdBot (OpenClaw) enables AI agents to operate autonomously across multiple channels and platforms with sophisticated task automation, browser control, and system integration. Agents can receive messages from 15+ messaging platforms, execute shell commands, control browsers, schedule tasks, manage sessions with persistent memory, and coordinate with other agents—all within a secure, sandboxed environment with granular permission controls.

## Skills

### Messaging & Channels
- **Multi-channel messaging**: Send and receive messages across WhatsApp, Telegram, Discord, Slack, iMessage, Signal, Matrix, Mattermost, Google Chat, MS Teams, Feishu, Line, Zalo, and more
- **Message actions**: Send text/media, create polls, react to messages, edit/delete messages, manage threads, pin/unpin, search message history
- **Group chat support**: Handle group messages with mention patterns, member lists, and per-group configuration
- **Media handling**: Send and receive images, audio, documents, and attachments with configurable size limits
- **Channel routing**: Route inbound messages to specific agents based on channel, account, peer, or guild/team ID

### Browser Automation
- **Browser control**: Start/stop browser, open tabs, navigate URLs, take screenshots, capture UI snapshots
- **Web interaction**: Click elements, type text, drag/select, fill forms using stable UI tree references
- **Browser profiles**: Use isolated OpenClaw-managed browser or system Chrome profile
- **Headless mode**: Run browser in headless mode for server environments
- **Web scraping**: Extract readable content from HTML pages via Readability or Firecrawl
- **Web search**: Search via Brave Search API or Perplexity Sonar with configurable providers

### Task Automation & Scheduling
- **Cron jobs**: Schedule tasks at specific times or intervals with persistent job storage
- **Webhooks**: Expose HTTP webhook endpoints for external event triggers
- **Gmail integration**: Monitor Gmail via Pub/Sub for real-time email notifications
- **Polling**: Long-poll external services for updates
- **Heartbeats**: Periodic agent wakeups for background tasks
- **Background execution**: Run long-running tasks asynchronously without blocking main chat

### Agent Control & Execution
- **Shell commands**: Execute shell commands in workspace via exec tool with foreground/background modes
- **Process management**: Manage background processes, check status, terminate tasks
- **Elevated mode**: Run commands on host system when sandboxed (with approval gates)
- **Approvals**: Request user approval for sensitive operations before execution
- **Command timeout**: Set execution timeouts to prevent hanging processes

### Multi-Agent & Coordination
- **Multi-agent routing**: Run multiple isolated agents in one Gateway with separate workspaces and sessions
- **Agent bindings**: Route messages to specific agents based on channel, account, or peer
- **Sub-agents**: Spawn background agent runs for parallel/long tasks that report results back
- **Agent-to-agent messaging**: Send messages between agents (opt-in feature)
- **Workspace isolation**: Each agent has isolated workspace, sessions, and configuration

### Session & Memory Management
- **Session persistence**: Store conversation history in JSONL format with automatic compaction
- **Context management**: Assemble context from workspace files, skills, and session history
- **Memory recall**: Access previous session summaries and context
- **Session pruning**: Automatically remove old sessions based on age/size
- **Session compaction**: Compress long transcripts while preserving key information
- **Transcript hygiene**: Provider-specific fixups before model runs

### Model Integration
- **Multiple providers**: Support for OpenAI, Anthropic, OpenRouter, Vercel AI Gateway, Moonshot, MiniMax, GLM, Z.AI, Bedrock, and custom providers
- **Model failover**: Configure primary and fallback models for reliability
- **Custom providers**: Add OpenAI-compatible or custom API endpoints
- **Prompt caching**: Anthropic prompt caching support for cost optimization
- **Model selection**: Per-agent model configuration with provider/model syntax

### Security & Sandboxing
- **Docker sandboxing**: Run agent tools in isolated Docker containers
- **Tool policies**: Allow/deny specific tools per agent or globally
- **Sender allowlists**: Restrict elevated operations to authorized senders
- **Sandbox modes**: off, non-main (default), or all
- **Workspace access**: Control read-only or read-write access to workspace
- **Security levels**: deny, allowlist, or full approval modes for sensitive operations

### Media & Devices
- **Camera access**: Capture images from connected cameras
- **Audio recording**: Record and process audio from devices
- **Voice wake**: Detect wake words for voice activation
- **Location services**: Send and receive location data
- **Voice calls**: Make and receive voice calls via Twilio, Telnyx, or Plivo (plugin)
- **Text-to-speech**: Convert text to speech for voice interactions

### Skills & Extensions
- **ClawHub**: Public registry for discovering and installing skills
- **Custom skills**: Create SKILL.md files to teach agents new capabilities
- **Plugin system**: Extend with custom tools, channels, and RPC methods
- **Skill versioning**: Semantic versioning with changelogs and tags
- **Skill search**: Vector search powered by embeddings

### Web Interfaces
- **Control UI**: Browser dashboard for chat, config, sessions, and monitoring
- **Terminal UI**: TUI for local interaction and debugging
- **WebChat**: Web-based chat interface for agents
- **Dashboard**: Real-time status, logs, and session management

## Workflows

### Setting Up Multi-Agent Routing
1. Define multiple agents in `agents.list` with unique IDs
2. Configure per-agent workspace, model, and sandbox settings
3. Create bindings to route inbound messages by channel/account/peer
4. Each agent maintains isolated sessions and context
5. Use `/agents` CLI to manage agent configuration

### Automating Scheduled Tasks
1. Enable cron in gateway configuration
2. Create a cron job with `openclaw cron add --name "task" --every "0 9 * * *" --message "run daily"`
3. Configure session target (main or isolated) and payload type
4. Job runs at specified time, agent executes task
5. Optional: deliver output back to chat channel

### Browser Automation Workflow
1. Start browser with `browser start` or let agent auto-start
2. Navigate to URL with `browser navigate "https://example.com"`
3. Capture UI snapshot with `browser snapshot` to get element references
4. Interact with elements using `browser act` with ref IDs (click, type, select)
5. Take screenshots with `browser screenshot` for visual verification
6. Extract content with `web_fetch` for readable text extraction

### Spawning Sub-Agents for Long Tasks
1. Main agent detects long-running task
2. Call `sessions_spawn` with task description and optional model override
3. Sub-agent runs in isolated session `agent:<id>:subagent:<uuid>`
4. Sub-agent completes task and returns summary
5. Summary is announced back to original chat channel
6. Main chat remains responsive during sub-agent execution

### Implementing Approval Gates
1. Configure `tools.exec.approval.request` to require approvals
2. Set `tools.elevated.allowFrom` to restrict elevated operations
3. When agent calls sensitive tool, approval request is sent
4. User reviews and approves/denies via Control UI or CLI
5. Tool execution proceeds only after approval
6. Audit trail recorded in logs

### Integrating External Services via Webhooks
1. Enable webhook in gateway configuration
2. Expose endpoint at `gateway.webhook.path`
3. External service sends POST request with JSON payload
4. Gateway routes to configured agent session
5. Agent processes webhook data and responds
6. Optional: deliver response back to external service

## Integration

ClawdBot integrates with:
- **Messaging platforms**: 15+ channels including WhatsApp, Telegram, Discord, Slack, iMessage
- **LLM providers**: OpenAI, Anthropic, OpenRouter, custom OpenAI-compatible APIs
- **External services**: Gmail (Pub/Sub), webhooks, HTTP APIs, custom integrations
- **Voice services**: Twilio, Telnyx, Plivo for voice calls and notifications
- **Search engines**: Brave Search, Perplexity Sonar for web search
- **Web extraction**: Readability, Firecrawl for content extraction
- **Container runtime**: Docker for sandboxed execution
- **Local models**: Ollama for local LLM inference
- **OpenAI-compatible endpoint**: Serve Chat Completions API for external clients

## Context

**Agent Architecture**: ClawdBot uses an embedded agent runtime derived from pi-mono. Each agent run follows a complete loop: intake → context assembly → model inference → tool execution → streaming replies → persistence.

**Session Model**: Sessions are identified by a sessionKey (agent:agentId:mainKey or agent:agentId:channel:peerId). Each session maintains a transcript in JSONL format with automatic compaction when context limits are approached.

**Tool System**: Tools are first-class typed functions exposed to agents via system prompt text and JSON schemas. Tools include browser, exec, web_search, web_fetch, message, sessions_send, and more. Plugins can register additional tools.

**Sandbox Execution**: By default, agents run in Docker containers with restricted filesystem and network access. Elevated mode allows host execution for authorized senders. Tool policies provide fine-grained allow/deny control.

**Context Assembly**: System prompt is built per-run from workspace files (AGENTS.md, SOUL.md, TOOLS.md, IDENTITY.md, USER.md), skills list, tool schemas, and injected context. Context limits are tracked against model's context window.

**Message Routing**: Inbound messages are routed to agents via deterministic bindings matching channel, account, peer, guild, or team. Queue modes (steer, followup, collect) control how concurrent messages are handled during active runs.

**Model Failover**: Configure primary and fallback models. If primary fails, Gateway automatically retries with fallback. Per-agent model overrides allow different agents to use different models.

**Streaming & Chunking**: Agents stream responses in real-time. Block streaming sends completed text blocks immediately. Soft chunking respects paragraph/sentence boundaries. Channel-specific limits control message size and splitting.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt