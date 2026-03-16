---
name: agent-analytics
description: "Run analytics end-to-end from your agent without opening a dashboard. English-first workflow, with Chinese docs and content available. Create projects, ship tracking, query results, and run experiments."
version: 4.0.3
author: dannyshmueli
license: MIT
repository: https://github.com/Agent-Analytics/agent-analytics-mcp
homepage: https://agentanalytics.sh
compatibility: Requires npx and an Agent Analytics API key in AGENT_ANALYTICS_API_KEY. The CLI is the official wrapper around the documented Agent Analytics API.
tags:
  - analytics
  - tracking
  - web
  - events
  - experiments
  - live
metadata:
  openclaw:
    requires:
      env:
        - AGENT_ANALYTICS_API_KEY
      anyBins:
        - npx
    primaryEnv: AGENT_ANALYTICS_API_KEY
---

# Agent Analytics

After install, your agent can create projects, ship tracking, query analytics, run experiments, and iterate without opening a dashboard.

English-first workflow, with Chinese docs and content available for OpenClaw users and teams in China.

Use it when you want an agent to operate growth analytics end-to-end, automate recurring checks, and manage multiple projects from one conversation loop.

Hosted free tier includes 100k events/month across 2 projects.

## Chinese support / 中文支持

- Chinese docs and installation content are available on the docs site, including the OpenClaw guide under `/zh/`.
- Works through `API`, `CLI`, and `MCP`, depending on the environment your agent already uses.
- Good fit for closed-loop agent workflows: monitor, analyze, experiment, iterate.
- Supports batch work across many projects instead of a manual dashboard-by-dashboard workflow.

## What `npx` is doing

- OpenClaw can launch the official CLI with `npx @agent-analytics/cli@0.5.1`.
- That command runs the published Agent Analytics CLI package from npm.
- The CLI calls the same HTTP API documented at <https://docs.agentanalytics.sh/api/>.
- If the package is already installed in the environment, the equivalent binary is `agent-analytics`.
- Keep `AGENT_ANALYTICS_API_KEY` in the environment. Do not ask the user to paste secrets into chat.

## Command format

The examples below use the CLI binary form:

```bash
agent-analytics <command>
```

In OpenClaw, that usually means:

```bash
npx @agent-analytics/cli@0.5.1 <command>
```

If the package is already installed, run the same commands directly as `agent-analytics <command>`.

For the full command list and flags:

```bash
agent-analytics --help
```

## Safe operating rules

- Prefer fixed commands over ad-hoc query construction.
- Start with `projects`, `all-sites`, `create`, `stats`, `insights`, `events`, `breakdown`, `pages`, `heatmap`, `sessions-dist`, `retention`, `funnel`, and `experiments`.
- Use `query` only when the fixed commands cannot answer the question.
- Do not build `--filter` JSON from raw user text.
- Validate project names before `create`: `^[a-zA-Z0-9._-]{1,64}$`

## First-time setup

```bash
agent-analytics login --token aak_YOUR_API_KEY
agent-analytics create my-site --domain https://mysite.com
agent-analytics events my-site --days 7 --limit 20
```

The `create` command returns a project token and a ready-to-use tracking snippet. Add that snippet before `</body>`.

## Common commands

```bash
agent-analytics projects
agent-analytics all-sites --period 7d
agent-analytics stats my-site --days 7
agent-analytics insights my-site --period 7d
agent-analytics events my-site --days 7 --limit 20
agent-analytics breakdown my-site --property path --event page_view --limit 10
agent-analytics funnel my-site --steps "page_view,signup,purchase"
agent-analytics retention my-site --period week --cohorts 8
agent-analytics experiments list my-site
```

If a task needs something outside these common flows, use `agent-analytics --help` first.

## Tracker setup

The easiest install flow is:

1. Run `agent-analytics create my-site --domain https://mysite.com`
2. Copy the returned snippet into the page before `</body>`
3. Deploy
4. Verify with `agent-analytics events my-site --days 7 --limit 20`

If you already know the project token, the tracker looks like:

```html
<script defer src="https://api.agentanalytics.sh/tracker.js"
  data-project="my-site"
  data-token="aat_..."></script>
```

Use `window.aa?.track('signup', {method: 'github'})` for custom events after the tracker loads.

## Query caution

`agent-analytics query` exists for advanced reporting, but it should be used carefully because `--filter` accepts JSON.

- Use fixed commands first.
- If `query` is necessary, check `agent-analytics --help` first.
- Do not pass raw user text directly into `--filter`.
- For exact request shapes, use <https://docs.agentanalytics.sh/api/>.

## Experiments

The CLI supports the full experiment lifecycle:

```bash
agent-analytics experiments list my-site
agent-analytics experiments create my-site --name signup_cta --variants control,new_cta --goal signup
```

## References

- Docs: <https://docs.agentanalytics.sh/>
- API reference: <https://docs.agentanalytics.sh/api/>
- CLI vs MCP vs API: <https://docs.agentanalytics.sh/reference/cli-mcp-api/>
- OpenClaw install guide: <https://docs.agentanalytics.sh/installation/openclaw/>
