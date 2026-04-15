# Connectors

> Skills use `~~category` placeholders instead of specific tool names. Replace each placeholder with whichever tool your organization uses.

## Tool Categories

| Category | Placeholder | Example Tools | Included Server(s) |
|----------|-------------|---------------|---------------------|
| SEO Platform | `~~SEO tool` | Ahrefs, Semrush, Moz, SISTRIX, SE Ranking | Ahrefs, Semrush, SE Ranking, SISTRIX |
| Analytics | `~~analytics` | Google Analytics, Adobe Analytics, Plausible, Matomo | Amplitude |
| Search Console | `~~search console` | Google Search Console, Bing Webmaster Tools | — |
| AI Visibility | `~~AI monitor` | Otterly, Profound, Scrunch AI | — |
| Web Crawler | `~~web crawler` | Screaming Frog, Sitebulb, DeepCrawl, Lumar | — |
| Link Database | `~~link database` | Ahrefs, Majestic, Moz Link Explorer | Ahrefs, Semrush |
| Competitive Intel | `~~competitive intel` | SimilarWeb, SpyFu, Semrush | SimilarWeb, Semrush |
| CDN / Hosting | `~~CDN` | Cloudflare, Fastly, Vercel, Netlify | Cloudflare, Vercel |
| Page Speed | `~~page speed tool` | Google PageSpeed Insights, WebPageTest, GTmetrix | — |
| Schema Validator | `~~schema validator` | Google Rich Results Test, Schema.org Validator | — |
| Knowledge Graph | `~~knowledge graph` | Google Knowledge Graph API, Wikidata SPARQL, DBpedia, CrunchBase | — |
| Brand Monitor | `~~brand monitor` | Google Alerts, Brand24, Mention.com, Brandwatch | — |
| CRM / Marketing | `~~CRM` | HubSpot, Salesforce, Marketo | HubSpot |
| Content Platform | `~~content platform` | Notion, WordPress, Medium, Ghost, Substack | Notion |
| Communication | `~~team chat` | Slack, Microsoft Teams, Discord | Slack |
| Reporting | `~~reporting` | Google Data Studio, Tableau, Power BI | — |
| Content Management | `~~CMS` | WordPress, Webflow, Contentful, Sanity | Webflow, Sanity, Contentful |

## Included MCP Servers

Pre-configured in `.mcp.json` (HTTP-based, no local setup required):

| Server | What it provides |
|--------|-----------------|
| Ahrefs | Keyword data, backlink profiles, site audits |
| Semrush | Keyword research, domain analytics, backlinks, SERP data |
| SE Ranking | Keyword tracking, site audits, competitive data |
| SISTRIX | Visibility Index, rankings, search volume |
| SimilarWeb | Traffic estimates, competitive intelligence |
| Cloudflare | DNS management, cache purging, Workers, performance |
| Vercel | Project deployments, domain management, logs |
| HubSpot | CRM contacts, marketing analytics |
| Amplitude | Product analytics, user behavior data |
| Notion | Project documentation, content calendars |
| Webflow | Site management, CMS content, design canvas |
| Sanity | Structured content, schema management, media |
| Contentful | Content lifecycle management, assets, environments |
| Slack | Team notifications, alert delivery |

To add more servers, edit `.mcp.json` at the project root:

```json
{
  "mcpServers": {
    "google-search-console": {
      "type": "http",
      "url": "https://your-search-console-mcp-endpoint"
    }
  }
}
```

## How Placeholders Work

A skill might say:

```
Pull keyword rankings from ~~SEO tool and cross-reference with ~~search console impressions.
```

If your organization uses Ahrefs and Google Search Console, read it as:

```
Pull keyword rankings from Ahrefs and cross-reference with Google Search Console impressions.
```

## Progressive Enhancement Tiers

Skills are designed to work at three levels of tool integration:

| Tier | Integration Level | Experience |
|------|-------------------|------------|
| **Tier 1** | No integrations | Paste data, describe context manually. Skills still provide full analysis frameworks. |
| **Tier 2** | Basic MCP | Connect ~~search console or ~~analytics for automatic data retrieval. |
| **Tier 3** | Full integration | All available integrations — SEO, analytics, search console, CDN, CMS, and more — for fully automated workflows. |

Every skill works without any tool integration (paste data manually). Connecting tools via MCP automates data retrieval but is never required.

## Environment Variables

Some skills declare a `primaryEnv` in their `metadata.openclaw` block for ClawHub discovery. These are **soft dependencies** — skills work without them.

| Variable | MCP Server | Skills Using It |
|----------|------------|-----------------|
| `AHREFS_API_KEY` | Ahrefs | keyword-research, competitor-analysis, serp-analysis, content-gap-analysis, backlink-analyzer, rank-tracker, internal-linking-optimizer |
| `AMPLITUDE_API_KEY` | Amplitude | performance-reporter, alert-manager |

Most new servers (Semrush, SE Ranking, SISTRIX, SimilarWeb, Cloudflare, Vercel, Webflow, Sanity, Contentful) use **OAuth** — authentication happens interactively on first use, no environment variables needed.

All 20 skills function at Tier 1 (no integrations) by accepting manually provided data.
