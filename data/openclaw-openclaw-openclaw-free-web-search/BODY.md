---
name: local-web-search
description: >
  Free, private, real-time web search for OpenClaw — zero API keys required.
  Powered by self-hosted SearXNG + Scrapling anti-bot engine. Multi-engine
  parallel search (Bing/DuckDuckGo/Google/Startpage/Qwant), intent-aware
  Agent Reach query expansion, three-tier Browse/Viewing (Fetcher →
  StealthyFetcher → DynamicFetcher for Cloudflare/JS sites), cross-engine
  anti-hallucination validation, and automatic public fallback.
homepage: https://github.com/wd041216-bit/openclaw-free-web-search
metadata:
  clawdbot:
    emoji: "🔍"
    requires:
      env: []
    files: ["scripts/*"]
---

# Local Free Web Search v3.0

Use this skill when the user needs current or real-time web information.
Powered by **Scrapling** (anti-bot) + **SearXNG** (self-hosted search).
Zero API keys. Zero cost. Runs entirely locally.

---

## External Endpoints

| Endpoint | Data Sent | Purpose |
|---|---|---|
| `http://127.0.0.1:18080` (local) | Search query string only | Local SearXNG instance |
| `https://searx.be` (fallback only) | Search query string only | Public fallback when local SearXNG is down |
| Any URL passed to `browse_page.py` | HTTP GET request only | Fetch page content for reading |

No personal data, no credentials, no conversation history is ever sent to any endpoint.

---

## Security & Privacy

- All search queries go to your **local SearXNG** instance by default — no third-party tracking
- Public fallback (`searx.be`) is only used when local service is unavailable, and only receives the raw query string
- `browse_page.py` makes standard HTTP GET requests to URLs you explicitly pass — no data is posted
- Scrapling runs entirely locally — no cloud API calls, no telemetry
- No API keys required or stored
- No conversation history or personal data leaves your machine

**Trust Statement:** This skill sends search queries to your local SearXNG instance (default) or `searx.be` (fallback). Page content is fetched via standard HTTP GET. No personal data is transmitted. Only install if you trust the public SearXNG instance at `searx.be` as a fallback.

---

## Model Invocation Note

This skill is invoked autonomously by the agent when a query requires live web information. You can disable autonomous invocation by removing this skill from your workspace. The agent will only use this skill when it determines real-time information is needed.

---

## Tool 1 — Web Search

```bash
python3 ~/.openclaw/workspace/skills/local-web-search/scripts/search_local_web.py \
  --query "YOUR QUERY" \
  --intent general \
  --limit 5
```

**Intent options** (controls engine selection + query expansion):

| Intent | Best for |
|---|---|
| `general` | Default, mixed queries |
| `factual` | Facts, definitions, official docs |
| `news` | Latest events, breaking news |
| `research` | Papers, GitHub, technical depth |
| `tutorial` | How-to guides, code examples |
| `comparison` | A vs B, pros/cons |
| `privacy` | Sensitive queries (ddg/startpage/qwant only) |

**Additional flags:**

| Flag | Description |
|---|---|
| `--engines bing,duckduckgo,...` | Override engine selection |
| `--freshness hour\|day\|week\|month\|year` | Filter by recency |
| `--max-age-days N` | Downrank results older than N days |
| `--browse` | Auto-fetch top result with browse_page.py |
| `--no-expand` | Disable Agent Reach query expansion |
| `--json` | Machine-readable JSON output |

---

## Tool 2 — Browse/Viewing (read full page)

```bash
python3 ~/.openclaw/workspace/skills/local-web-search/scripts/browse_page.py \
  --url "https://example.com/article" \
  --max-words 600
```

**Fetcher modes** (use `--mode` flag):

| Mode | Fetcher | Use case |
|---|---|---|
| `auto` | Tier 1 → 2 → 3 | Default — tries fast first |
| `fast` | `Fetcher` | Normal sites |
| `stealth` | `StealthyFetcher` | Cloudflare / anti-bot sites |
| `dynamic` | `DynamicFetcher` | Heavy JS / SPA sites |

Returns: title, published date, word count, confidence (HIGH/MEDIUM/LOW),
full extracted text, and anti-hallucination advisory.

---

## Recommended Workflow

1. Run `search_local_web.py` — review results by Score and `[cross-validated]` tag
2. Run `browse_page.py` on the top URL — check Confidence level
3. If Confidence is LOW (paywall/blocked) — retry with `--mode stealth` or try next URL
4. Answer only after reading HIGH-confidence page content
5. **Never state facts from snippets alone**

---

## Rules

- Always use `--intent` to match the query type for best results.
- When local SearXNG is unavailable, both scripts automatically fall back to `searx.be`.
- If the fallback also fails, tell the user to start local SearXNG:

```bash
cd "$(cat ~/.openclaw/workspace/skills/local-web-search/.project_root)" && ./start_local_search.sh
```

- Do NOT invent search results if all sources fail.
- `search_local_web.py` and `browse_page.py` are complementary: **search first, browse second**.
- Prefer `[cross-validated]` results (appeared in multiple engines) for factual claims.
- For sites behind Cloudflare or requiring JS, use `browse_page.py --mode stealth`.
