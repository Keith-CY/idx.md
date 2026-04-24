---
name: agent-analytics
description: "Headless analytics management for AI builders shipping multi-surface products. Let your agent create projects, install tracking, compare surfaces, query results, and run growth analysis from code, chat, or the terminal."
version: 4.0.22
author: dannyshmueli
license: MIT
repository: https://github.com/Agent-Analytics/agent-analytics-skill
homepage: https://agentanalytics.sh
compatibility: Requires npx. Browser approval is the normal sign-in path, and detached approval plus finish-code handoff is the default for issue-based runtimes. In Paperclip company-task workflows, always use detached login for the skill path. Normal setup does not require an API key or pasting secrets into chat.
tags:
  - analytics
  - tracking
  - web
  - events
  - experiments
  - growth
  - builders
  - delegation
provides:
  - capability: analytics
  - capability: ab-testing
  - capability: funnels
  - capability: retention
metadata:
  openclaw:
    requires:
      anyBins:
        - npx
---

# Agent Analytics

Agent Analytics is headless analytics management for AI builders shipping products across many surfaces.

After install, your agent can create projects, install tracking, compare surfaces, query analytics, run experiments, and decide what to fix next without opening a dashboard.

It fits the way builders actually work now: one product often spans the main site, docs, blog, onboarding, free tools, and related properties, and one builder or team often runs more than one product.

English-first workflow, with Chinese docs and content available for OpenClaw users and teams in China.

Use it when you want an agent to operate the day-to-day growth loop across products, portfolios, and surfaces from one conversation, terminal, or code workflow.

The CLI behind this skill is open source and published from:

- GitHub: <https://github.com/Agent-Analytics/agent-analytics-cli>
- npm: <https://www.npmjs.com/package/@agent-analytics/cli>

Hosted free tier includes 100k events/month across 2 projects.

## Chinese support / 中文支持

- Chinese docs and installation content are available on the docs site, including the OpenClaw guide under `/zh/`.
- Works through `API`, `CLI`, and `MCP`, depending on the environment your agent already uses.
- Good fit for closed-loop agent workflows: monitor, analyze, experiment, iterate.
- Supports batch work across many projects instead of a manual dashboard-by-dashboard workflow.

## Mandatory execution policy

- For any live Agent Analytics task, always use the official CLI through `npx --yes @agent-analytics/cli@0.5.21 <command>`.
- Treat that exact `npx` invocation as the primary interface under test in agent environments like OpenClaw and Codex.
- Do not substitute raw HTTP requests, `curl`, repo-local scripts, `node agent-analytics-cli/...`, MCP tools, or a locally installed `agent-analytics` binary unless the user explicitly asks for one of those paths.
- If a task needs multiple steps, compose the answer from multiple `npx --yes @agent-analytics/cli@0.5.21 ...` commands instead of switching transports.
- If the CLI returns `PRO_REQUIRED` or a free-tier read cap, explain which deeper read is blocked, keep the workflow on the official CLI path, and ask the user to upgrade outside the skill before rerunning the blocked command.
- Default to browser approval for signup/login. In issue-based runtimes like OpenClaw, prefer detached approval plus a finish-code reply. Do not ask the user to paste secrets into chat.
- In Paperclip company-task flows, treat detached login as mandatory for the skill path. Do not use plain `login`, do not rely on a localhost callback, and do not auto-open a live interactive browser session on behalf of the task.

## Delegation support

If the AI agent or client supports subagent delegation, Agent Analytics tasks can benefit from it. Hermes supports this through `delegate_task`. Other clients should only use the delegation patterns below if they expose an equivalent child-agent capability with isolated context and explicit tool access.

Use delegation when the work naturally splits into independent Agent Analytics workstreams, for example:
- growth audits across homepage, scanner, onboarding, docs, compare pages, and ecosystem surfaces
- one child inspecting live surfaces while another verifies instrumentation in code
- one child running account or project reads while another checks whether the top growth bets are already measurable
- multi-project portfolio analysis where each child handles a bounded slice and the parent synthesizes the result

Do not delegate when the job is just one CLI command, a simple one-project read, or an auth handoff that should pause cleanly for the human.

### Delegation rules for child agents

If delegation is available, every child agent doing live Agent Analytics work must follow the same core rules as the parent:

1. Stay on the pinned official CLI path for live Agent Analytics work:
   `npx --yes @agent-analytics/cli@0.5.21 <command>`
2. Preserve prerequisite order:
   - install/setup -> identify the public site URL, then run `scan <url> --json` first
   - account-wide questions -> run `projects` first
   - project-specific analysis -> resolve the project, then run `context get <project>` first
3. Pass concrete context into each child:
   - project name or ID
   - public URL
   - login state
   - `analysis_id` and scan resume details if a scan has already started
   - current activation definition or project context when known
4. Do not switch transports in children:
   - no raw API calls, `curl`, repo-local wrappers, MCP, or a locally installed `agent-analytics` binary unless the user explicitly asked for that path
5. Do not install generic instrumentation before analysis:
   - use the scan-driven recommendations first
   - do not add duplicate custom events for automatically captured signals like page views, referrers, UTMs, sessions, browser/device, or country
6. Verify before finishing:
   - setup children should verify the first useful recommended event
   - analysis children should clearly report which top bets are already measurable and which minimal gaps matter now

### Recommended delegation pattern for Agent Analytics growth audits

Best default split when the client supports delegation:
- child 1: acquisition surfaces (homepage + scanner)
- child 2: activation surface (agent onboarding / setup flow)
- child 3: content or ecosystem surfaces (docs, blog, compare pages, directories)
- optional child 4: measurement verification in the repo or tracked events

Important Hermes note: the default `max_concurrent_children` is 3. If you want all four workstreams, either:
- run the first three in one delegated batch and run measurement verification as a separate delegated pass, or
- raise the Hermes delegation concurrency limit explicitly before relying on a four-child batch.

Delegate by surface or job-to-be-done, not by a generic funnel. For Agent Analytics, the surfaces have different local goals:
- homepage = positioning and route selection
- scanner = cold-start wedge
- onboarding = activation
- blog/docs/compare = intent shaping
- directories/ecosystem = qualified outbound click-through

The parent agent should synthesize the child outputs in this order:
1. ranked A/B tests and growth bets
2. why these bets matter now
3. surface-specific KPI and CTA recommendations
4. cross-surface funnel narrative
5. minimal instrumentation gaps that matter now

Lead with growth bets before instrumentation details.

### Example: delegated Agent Analytics growth audit

Use a split like this when the client supports delegation:

- child 1: homepage + scanner
  - goal: find the top acquisition bets
  - focus: route selection, scanner-start rate, scan completion, handoff quality
- child 2: agent onboarding
  - goal: find friction to activation
  - focus: path selection, auth handoff, project creation, first event verification
- child 3: compare/blog/directory surfaces
  - goal: find the best intent-shaping and qualified-click bets
  - focus: local KPI per surface instead of raw signup
- child 4: measurement verification
  - goal: verify whether the top bets are already measurable in code or tracked events
  - focus: exact evidence, minimal attribution or event gaps only

A good parent synthesis for Agent Analytics should answer:
- what are the top 3-5 growth bets right now?
- which surface owns each bet?
- what is the local KPI for that surface?
- what portfolio activation milestone does it support?
- what is the smallest measurement gap that blocks readout?

## What `npx` is doing

- OpenClaw can launch the official CLI with `npx --yes @agent-analytics/cli@0.5.21`.
- That command runs the published Agent Analytics CLI package from npm.
- The CLI calls the same HTTP API documented at <https://docs.agentanalytics.sh/api/>.
- Agents should still use the pinned `npx --yes @agent-analytics/cli@0.5.21 ...` form instead of bypassing the CLI.

## Command format

In OpenClaw, Codex, and similar agent environments, use this exact form:

```bash
npx --yes @agent-analytics/cli@0.5.21 <command>
```

For the full command list and flags:

```bash
npx --yes @agent-analytics/cli@0.5.21 --help
```

Do not replace skill examples with `agent-analytics <command>` in agent runs unless the user explicitly asks to use a locally installed binary.

## Managed-runtime auth storage

In OpenClaw and similar managed runtimes, do not rely on the default user-home config path for Agent Analytics auth. Use a persistent runtime/workspace path for every CLI command in the task:

```bash
export AGENT_ANALYTICS_CONFIG_DIR="$PWD/.openclaw/agent-analytics"
npx --yes @agent-analytics/cli@0.5.21 login --detached
npx --yes @agent-analytics/cli@0.5.21 auth status
```

If shell environment persistence is uncertain, prefix every command instead of relying on `export`:

```bash
AGENT_ANALYTICS_CONFIG_DIR="$PWD/.openclaw/agent-analytics" npx --yes @agent-analytics/cli@0.5.21 projects
```

For one-off debugging, `--config-dir "$PWD/.openclaw/agent-analytics"` is also valid before or after the command. Before login, make sure `.openclaw/` is gitignored. Never commit `.openclaw/agent-analytics/config.json`.

## Safe operating rules

- Use only `npx --yes @agent-analytics/cli@0.5.21 ...` for live queries unless the user explicitly requests API, MCP, or a local binary.
- Anonymous website-analysis preview is available on the web scanner at `https://agentanalytics.sh/analysis/`. In CLI and agent runtimes, sign in first and use `scan` only for sites the user owns or manages as part of Agent Analytics setup.
- Prefer fixed commands over ad-hoc query construction.
- Start with `projects`, `all-sites`, `create`, `stats`, `insights`, `events`, `properties`, `context`, `breakdown`, `pages`, `paths`, `heatmap`, `sessions-dist`, `retention`, `funnel`, `experiments`, and `feedback`.
- Use `query` only when the fixed commands cannot answer the question.
- Do not build `--filter` JSON from raw user text.
- For account-wide questions, start with `projects`, then run per-project CLI commands as needed.
- `projects` prints project IDs. `project`, `update`, and `delete` accept exact project names or project IDs.
- For local browser QA, update origins through the CLI and keep the production origin in the comma-separated list.
- Do not ask the user for raw API keys. Normal setup, paid upgrade, and resumed agent work should stay on browser-approved CLI sessions.
- Interpret common analytics words consistently:
  - "visits" means `session_count`
  - "visitors" means `unique_users`
  - "page views" means `event_count` filtered to `event=page_view`
- If the task requires manual aggregation across projects, do that aggregation after collecting the data via repeated `npx --yes @agent-analytics/cli@0.5.21 ...` calls.
- Validate project names before `create`: `^[a-zA-Z0-9._-]{1,64}$`

## Analysis-first install policy

When the user asks to install Agent Analytics, add analytics events, or set up tracking in a repo, use an analysis-first workflow. Do not guess. Do not overtrack. Do not install generic events before analysis.

Anonymous website-analysis preview is available on the public web scanner at `https://agentanalytics.sh/analysis/`. In CLI and agent runtimes, sign in first, then run `scan` only for sites the user owns or manages as part of setup.

In CLI setup, first identify the primary public website root URL for the project, start `login --detached` or the normal browser login flow if needed, then create or identify the Agent Analytics project whose `allowed_origins` domain matches the scanned hostname. After that, run `npx --yes @agent-analytics/cli@0.5.21 scan <url> --project <project> --json`. Treat the output as the source of analytics judgment: it tells you what the user's agent should track first, what each event unlocks, and what not to track yet.

If the user asks for deep analysis, owns multiple sites, or the repo points to related public surfaces, scan the additional public websites the user owns or operates too. Typical owned surfaces include the marketing site, docs, pricing page, app signup surface, support site, changelog, launch page, or demo page. Only scan sites the user owns, operates, or explicitly asks you to analyze. Compare `current_blindspots` and `minimum_viable_instrumentation` across those scans before deciding what to install first. This is part of the workflow: the scanner gives the agent product eyes on useful data the user may not be collecting yet, not just analytics data after tracking is installed.

Use the preview to continue setup:

1. If the user is not logged in, start `login --detached` or the normal browser login flow.
2. Create or identify the Agent Analytics project before running CLI website analysis; the project must have an `allowed_origins` domain that matches the scanned hostname.
3. Run `npx --yes @agent-analytics/cli@0.5.21 scan <url> --project <project> --json` and read `minimum_viable_instrumentation`, `current_blindspots`, `not_needed_yet`, `goal_driven_funnels`, and `after_install_agent_behavior`.
4. For deeper multi-site work, compare scans for additional owned public surfaces before editing code.
5. Install the tracker plus only high-priority `minimum_viable_instrumentation` items first.
6. Explain what each event enables before or while installing it.
7. Verify the first useful recommended event with `npx --yes @agent-analytics/cli@0.5.21 events <project> --event <event_name> --days 7 --limit 20`.
8. Summarize what the installed events now let the user's agent answer.

Follow each recommendation's `implementation_hint`. Page views, paths, referrers, UTMs, device/browser fields, country, session IDs, session count, days since first visit, and first-touch attribution are automatic, so do not add duplicate custom events for those signals. Prefer `data-aa-event` attributes for named click intent, `data-aa-impression` for meaningful section exposure, `window.aa.track(...)` for computed client state, server-side tracking for durable outcomes such as `signup_completed`, and `aa.identify(...)` plus `aa.set(...)` immediately after auth. Use broad script opt-ins like `data-track-clicks`, scroll depth, errors, forms, downloads, vitals, or performance only when the analysis says they unlock a concrete decision.

The handoff framing is: "Give your agent analytics judgment and product eyes for data you are not collecting yet." If you need to pass work to another agent, say to scan relevant owned public surfaces, install only high-priority minimum viable instrumentation first, explain what each event enables, avoid generic tracking, and verify the first useful recommended event.

## First-time setup

For a no-login preview, use the public web scanner:

```text
https://agentanalytics.sh/analysis/
```

For CLI and agent runtimes, use the authenticated setup flow:

```bash
npx --yes @agent-analytics/cli@0.5.21 login --detached
npx --yes @agent-analytics/cli@0.5.21 create my-site --domain https://mysite.com
npx --yes @agent-analytics/cli@0.5.21 scan https://mysite.com --project my-site --json
npx --yes @agent-analytics/cli@0.5.21 events my-site --event <first_useful_event> --days 7 --limit 20
```

For Paperclip, OpenClaw, and other issue-based runtimes, `login --detached` is the preferred first step. It should print the approval URL and exit, so the agent can post the URL to the user without keeping a polling command alive. Wait for the user to sign in with Google or GitHub and reply with the finish code, then run the printed `login --auth-request ... --exchange-code ...` command and continue with project setup.

If the runtime can receive a localhost browser callback, regular `login` is also valid for non-Paperclip interactive environments. The `create` command returns the exact tracking snippet for the project. Add that returned snippet before `</body>`.

Use `--detached` when the runtime cannot receive a localhost browser callback, when the workflow happens in issues or task threads, and always for Paperclip company-task execution.

## Default agent task

When the user wants Agent Analytics installed in the current repo, the default task shape is:

```text
Set up Agent Analytics for this project. If approval is needed, send me the approval link and wait. I will sign in with Google or GitHub, then reply with the finish code. After that, create or identify the matching Agent Analytics project, run website analysis for this site so you know what my agent should track first, install only the high-priority minimum viable instrumentation, explain what each event enables, and verify the first useful recommended event.
```

For deeper product analysis, extend that task with owned surfaces:

```text
If this product has other owned public websites or pages that shape the growth loop, scan those too and tell me what data we are not collecting yet before you install events.
```

## Detached approval handoff

For OpenClaw-style issue workflows, the expected login loop is:

1. run `npx --yes @agent-analytics/cli@0.5.21 login --detached`
2. send the approval URL to the user
3. wait for the user to reply with the finish code
4. complete the exchange with the printed `login --auth-request ... --exchange-code ...` command and keep going with setup

This is the preferred managed-runtime path because it does not rely on a long-running polling process. Do not ask the user to paste a permanent API key into chat.

For Paperclip company tasks, use this same detached loop even if the underlying runtime technically has browser automation available. The important behavior is that the task posts an approval URL, exits the start command, waits for the user's finish code, and then continues.

## Paid-tier handoff

Free is enough to prove setup and basic reads. Some deeper reads such as funnels, retention, session paths, longer history, and experiments require Pro.

When a user asks for analysis that likely needs Pro, run the intended CLI command first. Do not pre-sell an upgrade before proving the block. If the CLI returns `PRO_REQUIRED` or a free-tier read cap:

1. Explain in one sentence which exact answer is blocked.
2. Ask the user to upgrade the Agent Analytics account outside the skill if they want that deeper read.
3. After the user confirms the account is upgraded, run `npx --yes @agent-analytics/cli@0.5.21 whoami`, then rerun the blocked command.

If the user does not upgrade, continue with free-tier commands only and do not approximate paid-only results as if they were measured.

## Common commands

```bash
npx --yes @agent-analytics/cli@0.5.21 projects
npx --yes @agent-analytics/cli@0.5.21 all-sites --period 7d
npx --yes @agent-analytics/cli@0.5.21 stats my-site --days 7
npx --yes @agent-analytics/cli@0.5.21 insights my-site --period 7d
npx --yes @agent-analytics/cli@0.5.21 events my-site --days 7 --limit 20
npx --yes @agent-analytics/cli@0.5.21 breakdown my-site --property path --event page_view --days 7 --limit 10
npx --yes @agent-analytics/cli@0.5.21 paths my-site --goal signup --since 30d --max-steps 5
npx --yes @agent-analytics/cli@0.5.21 funnel my-site --steps "page_view,signup,activation"
npx --yes @agent-analytics/cli@0.5.21 retention my-site --period week --cohorts 8
npx --yes @agent-analytics/cli@0.5.21 experiments list my-site
npx --yes @agent-analytics/cli@0.5.21 context get my-site
npx --yes @agent-analytics/cli@0.5.21 update my-site --origins 'https://mysite.com,http://lvh.me:3101'
```

If a task needs something outside these common flows, use `npx --yes @agent-analytics/cli@0.5.21 --help` first.

## Project context

Use `context get` and `context set` when the product has custom goals, activation events, or event meanings that should travel with analytics results. Keep the context short because project analytics endpoints include it as `project_context` for later agent reads. `context set` accepts an encoded JSON body up to 8KB.

At the start of any project-specific analysis, run `context get <project>` after resolving the project. Use the returned `project_context` to interpret metrics, choose goal events, and explain results in the product's language.

Treat project context as compact self-improving memory close to the analytics data. The loop is: read context, analyze with it, notice durable product truth, then update the context so the next analysis starts smarter.

Before setting or refreshing context, inspect current event names with `properties <project>` or `properties-received <project>`. Glossary entries must be tied to `event_name` so future agents can connect human product language to actual tracked events.

`context set` replaces the stored context. Always read the existing context first, merge your change, and preserve still-valid goals, activation events, and glossary entries.

After website analysis, first instrumentation, funnel work, retention review, or a human correction, do a short context review:

- Save durable product truth: activation definition, business goals, event meanings, which events matter, and stable interpretations such as "invite_team_member is the meaningful team activation event."
- Skip noisy findings: weekly metric values, temporary anomalies, raw reports, long notes, user lists, PII, secrets, and guesses that are not useful in future analyses.
- If a learning is clear from the user's instruction or a Product Growth Scanner result, update context. If it is inferred from analytics and could be wrong, ask one short confirmation question first.
- If the context is near the limits, consolidate or replace weaker entries instead of appending more text.
- Do not invent unsupported fields such as `findings`, `learnings`, or `open_questions` in `context set`; store only what fits `goals`, `activation_events`, and event-name `glossary`.

For multi-project or multi-domain work, keep context separate per project. Do not reuse one activation definition across a product app, directory site, docs site, landing page, or lead-generation domain unless the human explicitly says they share the same meaning. Examples:

- A trial product might define activation as trial signup plus first item created.
- A team product might define activation as signup plus teammate invited.
- A directory or marketing domain might define activation as a qualified visitor clicking through to the product or becoming a lead.

When those projects belong to the same growth system, add a separate account-level portfolio context with `portfolio-context get` and `portfolio-context set`. Use that layer for shared goals, surface roles, and cross-project milestones such as `qualified_click_to_product` or `first_recommended_event_verified`. Keep project context for per-surface truth; keep portfolio context for shared interpretation across surfaces.

When answering, briefly mention when stored project context shaped the interpretation. When you update context, state the compact change you saved.

Example:

```bash
npx --yes @agent-analytics/cli@0.5.21 properties my-site
npx --yes @agent-analytics/cli@0.5.21 context set my-site --json '{"goals":["Increase activated accounts"],"activation_events":["signup_completed","project_created","first_event_received"],"glossary":[{"event_name":"first_event_received","term":"AA Activation","definition":"Signup, project created, and first event received."}]}'
```

## Session paths

Use `paths` when the user asks how entry pages, exit pages, and conversion behavior connect inside a single session.

Prefer this workflow:

1. Run `npx --yes @agent-analytics/cli@0.5.21 paths <project> --goal <event> --since 30d --max-steps 5`
2. Summarize the top entry pages, exit pages, drop-offs, truncations, and conversion rate.
3. Recommend the next bounded analysis step: a funnel, retention check, or experiment.

Do not use paths for long-cycle cross-session attribution. Treat it as session-local: the goal only counts when it occurs in the same session.

## Example: all projects, last 48 hours

Question:

```text
How many visits did all my projects get in the last 48 hours?
```

Workflow:

1. Run `npx --yes @agent-analytics/cli@0.5.21 projects`
2. For each project, run:

```bash
npx --yes @agent-analytics/cli@0.5.21 query my-site --metrics session_count --days 2
```

3. Sum the returned `session_count` values across projects

Stay on the CLI path for this workflow. Do not switch to direct API requests or local scripts just because the answer spans multiple projects.

## Time windows

Use `--days N` or `since` values like `7d` and `30d` for whole-day lookbacks. Do not use `24h`; the API does not support hour shorthand.

For an exact rolling window such as "last 24 hours", use `query` with timestamp filters. Build the timestamps yourself as epoch milliseconds, keep the date prefilter broad enough to include both dates, and still stay on the CLI path:

```bash
FROM_MS=$(node -e 'console.log(Date.now() - 24 * 60 * 60 * 1000)')
TO_MS=$(node -e 'console.log(Date.now())')
FROM_DATE=$(node -e 'console.log(new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10))')
TO_DATE=$(node -e 'console.log(new Date().toISOString().slice(0, 10))')
npx --yes @agent-analytics/cli@0.5.21 query my-site --metrics event_count,unique_users --group-by event --from "$FROM_DATE" --to "$TO_DATE" --filter "[{\"field\":\"timestamp\",\"op\":\"gte\",\"value\":$FROM_MS},{\"field\":\"timestamp\",\"op\":\"lte\",\"value\":$TO_MS}]" --count-mode raw --order-by event_count --order desc
```

Do not answer an exact "last 24 hours" request with `stats --days 1` unless the user explicitly accepts a whole-day approximation.

## Feedback

Use `npx --yes @agent-analytics/cli@0.5.21 feedback` when Agent Analytics was confusing, a task took too long, the workflow could be improved, or the agent had to do manual calculations or analysis that Agent Analytics should have handled.

Describe the use case, friction, or missing capability in a sanitized way:

- Include what was hard and what Agent Analytics should have done instead.
- Do not include private owner details, secrets, API keys, raw customer data, or unnecessary personal information.
- Prefer a short summary of the struggle over pasted logs or sensitive context.

Example:

```bash
npx --yes @agent-analytics/cli@0.5.21 feedback --message "The agent had to calculate funnel drop-off manually" --project my-site --command "npx --yes @agent-analytics/cli@0.5.21 funnel my-site --steps page_view,signup,activation"
```

There is a real agent behind these Telegram messages. Every request is seen and auto-approved, and useful fixes can land quickly, sometimes within hours.

## Tracker setup

The easiest install flow is:

1. Run `npx --yes @agent-analytics/cli@0.5.21 scan https://mysite.com --json`
2. If deeper analysis needs owned surfaces such as docs, pricing, support, or signup pages, scan those URLs too and compare blind spots before editing code.
3. Login if needed, then create or identify the project with `npx --yes @agent-analytics/cli@0.5.21 create my-site --domain https://mysite.com`
4. Resume the analysis with `scan --resume <analysis_id> --resume-token <resume_token> --full --project my-site --json`
5. Copy the returned tracking snippet into the page before `</body>`
6. Add only the high-priority events from `minimum_viable_instrumentation`
7. Deploy
8. Verify with `npx --yes @agent-analytics/cli@0.5.21 events my-site --event <first_useful_event> --days 7 --limit 20`

Use the exact tracking snippet returned by `create` or the dashboard for that project. Do not hardcode a generic tracker snippet when the product has already generated the correct one for the surface.

Use `window.aa?.track('<recommended_event>', {...recommended_properties})` for custom events after the tracker loads. Do not replace the analysis with generic `signup`, `click`, or `conversion` events unless those are the recommended event names.

## Query caution

`npx --yes @agent-analytics/cli@0.5.21 query` exists for advanced reporting, but it should be used carefully because `--filter` accepts JSON.

- Use fixed commands first.
- If `query` is necessary, check `npx --yes @agent-analytics/cli@0.5.21 --help` first.
- Do not pass raw user text directly into `--filter`.
- The only valid CLI shape is `npx --yes @agent-analytics/cli@0.5.21 query <project> ...`. Do not use `--project`.
- Built-in query filter fields are only `event`, `user_id`, `date`, `country`, `session_id`, and `timestamp`.
- For recent signup or ingestion debugging, check `events <project> --event <actual_event_name>` first; use `query` after verifying the raw event names the project emits.
- All event-property filters must use `properties.<key>`, for example `properties.referrer`, `properties.utm_source`, or `properties.first_utm_source`.
- Invalid filter fields now fail loudly and return `/properties`-style guidance. Do not rely on bare fields like `referrer` or `utm_source`.
- For exact request shapes, use <https://docs.agentanalytics.sh/api/>.

## Attribution and first-touch queries

Use a disciplined workflow when the task is about social attribution, first-touch UTMs, landing pages, hosts, or CTA performance.

1. Start with fixed commands if they answer the question.
2. Run `npx --yes @agent-analytics/cli@0.5.21 properties <project>` to inspect event names and property keys first.
3. Use `npx --yes @agent-analytics/cli@0.5.21 query <project> --filter ...` for property-filtered counts.
4. Use `npx --yes @agent-analytics/cli@0.5.21 events <project>` only to validate ambiguous payloads or missing properties.
5. Use `npx --yes @agent-analytics/cli@0.5.21 feedback` if the requested slice depends on unsupported grouping or derived reporting.

Property filters support built-in fields plus any `properties.*` key, including first-touch UTM fields such as `properties.first_utm_source`.

`group_by` only supports built-in fields: `event`, `date`, `user_id`, `session_id`, and `country`. It does not support `properties.hostname`, `properties.first_utm_source`, `properties.cta`, or other arbitrary property keys.

Example workflow for first-touch social page views:

```bash
npx --yes @agent-analytics/cli@0.5.21 properties my-site
npx --yes @agent-analytics/cli@0.5.21 query my-site --metrics event_count --filter '[{"field":"event","op":"eq","value":"page_view"},{"field":"properties.first_utm_source","op":"eq","value":"reddit"}]' --days 30
```

If the user wants a one-shot direct-social slice grouped by channel, host, CTA, or an activation proxy, explain that the current query surface cannot group by arbitrary `properties.*` fields and send product feedback instead of inventing an unreliable manual answer.

## Experiments

The CLI supports the full experiment lifecycle:

```bash
npx --yes @agent-analytics/cli@0.5.21 experiments list my-site
npx --yes @agent-analytics/cli@0.5.21 experiments create my-site --name signup_cta --variants control,new_cta --goal signup
```

## References

- Docs: <https://docs.agentanalytics.sh/>
- Session paths guide: <https://docs.agentanalytics.sh/guides/session-paths/>
- API reference: <https://docs.agentanalytics.sh/api/>
- CLI vs MCP vs API: <https://docs.agentanalytics.sh/reference/cli-mcp-api/>
- OpenClaw install guide: <https://docs.agentanalytics.sh/installation/openclaw/>
