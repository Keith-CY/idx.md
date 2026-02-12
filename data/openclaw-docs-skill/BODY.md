---
name: Clawdbot
description: Self-hosted gateway that connects WhatsApp, Telegram, Discord, iMessage, and more to AI coding agents. Run a single Gateway process on your own machine and message your AI assistant from anywhere.
metadata:
    mintlify-proj: clawdbot
    version: "1.0"
---

## Capabilities

OpenClaw is a self-hosted gateway that bridges messaging applications to AI agents with full tool access, persistent sessions, and multi-agent routing. Agents can automate tasks across 15+ messaging channels, execute shell commands, control browsers, manage files, schedule jobs, and coordinate with other agents—all while maintaining isolated workspaces and session memory.

## Skills

### Messaging & Channel Integration
- **Multi-channel messaging**: Send/receive messages across WhatsApp, Telegram, Discord, Slack, iMessage, Signal, MS Teams, Google Chat, Mattermost, Matrix, IRC, Feishu, LINE, Zalo, and more
- **Message actions**: React to messages, create/reply to threads, manage pins, edit/delete messages, search message history
- **Media support**: Send and receive images, audio, documents, and other media types
- **Group management**: Handle group messages, broadcast to multiple agents simultaneously, configure group activation rules
- **Channel routing**: Route inbound messages to specific agents based on channel, account, or sender
- **Broadcast groups**: Run multiple specialized agents on the same message (WhatsApp, with Telegram/Discord/Slack planned)

### Agent Tools & Automation
- **Browser automation**: Control a dedicated browser profile with snapshot (UI tree), screenshot, navigation, and action tools (click, type, drag, select)
- **Web tools**: Search the web via Brave Search or Perplexity Sonar; fetch and extract readable content from URLs
- **Shell execution**: Run bash commands in the workspace with foreground/background execution support
- **File operations**: Read, write, edit files; apply multi-file patches with structured format
- **Process management**: Manage long-running background tasks with status tracking
- **Canvas control**: Drive iOS/Android node canvases via WKWebView navigation and interaction
- **Media capture**: Take screenshots, record audio, capture camera feeds, record screen (iOS/Android nodes)
- **Location access**: Retrieve device location data from paired nodes

### Session & Memory Management
- **Session persistence**: Maintain conversation history and state across multiple interactions
- **Session memory search**: Index and search session transcripts (experimental)
- **Multi-agent sessions**: Isolated sessions per agent with separate workspaces
- **Session tools**: Create, list, spawn, send to, and manage sessions programmatically
- **Memory compaction**: Automatically compress long session histories to fit context windows
- **Session pruning**: Remove old sessions based on age or inactivity

### Scheduling & Automation
- **Cron jobs**: Schedule tasks with precise timing (daily, weekly, monthly patterns)
- **Webhooks**: Trigger agent runs via HTTP webhooks
- **Gmail Pub/Sub hooks**: Automatically trigger on incoming emails
- **Polling**: Periodically check external systems and trigger agent actions
- **Heartbeat**: Periodic background checks for maintenance tasks
- **System events**: Wake agents with custom system events

### Agent Coordination
- **Sub-agents**: Spawn focused agents for specific tasks with reduced system prompts
- **Agent send**: Trigger agent runs directly without inbound messages
- **Multi-agent routing**: Route messages to different agents based on bindings (channel, account, sender)
- **Agent isolation**: Separate workspaces, sessions, and tool policies per agent
- **Presence tracking**: Monitor which agents are active

### Slash Commands & Directives
- **Built-in commands**: /help, /status, /agent, /session, /model, /settings, /reset, /abort
- **Session directives**: /think, /verbose, /reasoning, /elevated, /exec, /model, /queue
- **Custom commands**: Register plugin-provided slash commands with arguments and authorization
- **Command authorization**: Control who can execute commands via allowlists and access groups

### Model Configuration
- **Multiple providers**: Anthropic (Claude), OpenAI (GPT), OpenRouter, Vercel AI Gateway, Cloudflare, Moonshot, Bedrock, LiteLLM, and 10+ others
- **Model switching**: Change models per-session with /model directive
- **Model failover**: Configure fallback models for redundancy
- **Prompt caching**: Support for Anthropic's prompt caching (API-only)
- **Local models**: Run Ollama or other local LLM servers

### Security & Sandboxing
- **Sandbox mode**: Run tools in isolated Docker containers instead of the host
- **Tool policies**: Allow/deny specific tools globally or per-agent
- **Elevated mode**: Escape hatch to run commands on the host when sandboxed
- **Approval gates**: Require approval for sensitive operations (exec, elevated)
- **Sender allowlists**: Restrict commands to authorized senders per channel
- **Access groups**: Define permission groups for fine-grained access control

### Plugins & Extensions
- **Plugin system**: Extend OpenClaw with custom channels, commands, RPC methods, and tools
- **Voice call plugin**: Initiate and manage phone calls via Twilio, Telnyx, or Plivo
- **Custom channels**: Register new messaging platforms as plugins
- **Skill management**: Load and manage AgentSkills-compatible skill folders
- **ClawHub**: Discover, install, and manage community skills and plugins

### System & Configuration
- **RPC API**: Gateway exposes methods for wizard flow, configuration, pairing, and custom operations
- **OpenAI-compatible HTTP API**: Serve Chat Completions endpoint for external clients
- **CLI commands**: 40+ commands for agents, channels, models, sessions, cron, plugins, and more
- **Web interfaces**: Control UI (browser dashboard), Terminal UI, WebChat
- **Configuration management**: YAML-based config with hot-reload support
- **Health & diagnostics**: Gateway health checks, doctor command, logging, and troubleshooting tools

### Streaming & Message Delivery
- **Block streaming**: Send partial replies as the model produces text blocks
- **Chunking**: Respect channel text limits and avoid splitting code blocks
- **Message retry**: Automatic retry with exponential backoff for failed sends
- **Queue management**: Manage message delivery queues and priorities
- **Typing indicators**: Show typing status while agent is thinking
- **Human-like delays**: Add pauses between block replies for natural feel

### Nodes & Mobile Integration
- **iOS/Android nodes**: Pair mobile devices to extend agent capabilities
- **Canvas rendering**: Display interactive web UIs on mobile devices
- **Camera access**: Capture photos and video from mobile devices
- **Voice wake**: Trigger agents with voice commands on macOS/iOS
- **Device pairing**: Secure token-based pairing for mobile nodes
- **Remote access**: SSH tunnels and Tailscale support for remote gateways

## Workflows

### Setting Up a Multi-Channel Agent
1. Start the Gateway: `openclaw gateway`
2. Open the Control UI at http://127.0.0.1:18789/
3. Run the onboarding wizard: `openclaw onboard`
4. Configure messaging channels (WhatsApp, Telegram, Discord, etc.) with API keys
5. Set the primary model: `openclaw models auth paste-token --provider anthropic`
6. Test with a direct message to verify the agent responds

### Automating a Daily Task
1. Create a cron job: `openclaw cron add --name "Morning brief" --cron "0 7 * * *" --message "Summarize today's news"`
2. Optionally announce results to a channel: `--announce`
3. View scheduled jobs: `openclaw cron list`
4. Monitor execution: `openclaw logs --follow`

### Running Multiple Specialized Agents
1. Configure multiple agents in config:
```
agents:
  list:
    - { id: "home", workspace: "~/.openclaw/workspace-home" }
    - { id: "work", workspace: "~/.openclaw/workspace-work" }
```
2. Set up bindings to route messages:
```
bindings:
  - { agentId: "home", match: { channel: "whatsapp", accountId: "personal" } }
  - { agentId: "work", match: { channel: "whatsapp", accountId: "business" } }
```
3. Restart the Gateway and messages route automatically

### Browser Automation Task
1. Agent uses `browser snapshot` to get the UI tree
2. Agent uses `browser act` with snapshot ref IDs to click/type/drag
3. Agent uses `browser screenshot` to capture pixels for verification
4. Agent can navigate to URLs and interact with JavaScript-heavy sites

### Scheduled Email Processing
1. Set up Gmail Pub/Sub hook: `openclaw webhooks gmail setup --account user@gmail.com`
2. Configure hook to trigger agent: `--hook-url http://gateway:18789/webhook`
3. Agent receives email content and can process/respond automatically
4. Results can be sent back via message tool

### Coordinating Sub-agents
1. Main agent identifies a task and calls `agent_send` with task description
2. Sub-agent receives reduced system prompt focused on the task
3. Sub-agent completes work and returns results to main agent
4. Main agent incorporates results into final response

## Integration

OpenClaw integrates with:
- **Messaging platforms**: 15+ channels including WhatsApp, Telegram, Discord, Slack, iMessage, Signal, MS Teams, Google Chat, Mattermost, Matrix, IRC, Feishu, LINE, Zalo
- **AI models**: Anthropic Claude, OpenAI GPT, OpenRouter, Vercel AI Gateway, Cloudflare, Moonshot, Bedrock, LiteLLM, Ollama, and 10+ others
- **Voice services**: Twilio, Telnyx, Plivo for phone calls
- **Search**: Brave Search API, Perplexity Sonar
- **Email**: Gmail Pub/Sub for automated email triggers
- **Mobile platforms**: iOS and Android via native node apps
- **External APIs**: HTTP webhooks, OpenAI-compatible Chat Completions endpoint
- **Plugins**: Custom channels, commands, RPC methods, and tools via plugin system

## Context

**Architecture**: OpenClaw runs a single Gateway process that manages agent runtime, session state, message routing, and tool execution. Agents are isolated by workspace and session, with optional Docker sandboxing for tool execution.

**System Prompt**: Built automatically each run with tool list, skills, workspace location, current time, and injected context files (SOUL.md, IDENTITY.md, USER.md, HEARTBEAT.md, BOOTSTRAP.md). Sub-agents receive a reduced prompt focused on their task.

**Context Window**: Everything sent to the model (system prompt, conversation history, tool results, attachments) is bounded by the model's context limit. Session memory can be compacted to fit within limits.

**Tool Execution**: Tools run either on the host or in a Docker sandbox (configurable). Elevated mode allows escaping sandbox for sensitive operations. Tool policies control which tools are available per agent.

**Sessions**: Persistent conversation state stored per agent/sender/channel combination. Sessions can be pruned, compacted, or manually managed. Session memory is searchable (experimental).

**Channels**: Each messaging platform has its own adapter handling authentication, message routing, media, threads, and native features. Broadcast groups allow multiple agents to respond to the same message.

**Routing**: Inbound messages are routed to agents via bindings (channel, account, sender patterns). Channel routing can also broadcast to multiple agents or route to different agents based on group/DM context.

**Pairing**: Devices (iOS/Android nodes) and remote gateways use token-based pairing for secure connection. Pairing requests can be approved/rejected via RPC or CLI.

**Plugins**: Extend OpenClaw with custom channels, commands, RPC methods, and tools. Plugins are loaded from extensions directory or configured paths and can register handlers for various lifecycle events.

---

> For additional documentation and navigation, see: https://docs.openclaw.ai/llms.txt