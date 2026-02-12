# Connectors

> Skills use `~~category` placeholders instead of specific tool names. Replace each placeholder with whichever tool your organization uses.

## Tool Categories

| Category | Placeholder | Example Tools |
|----------|-------------|---------------|
| SEO Platform | `~~SEO tool` | Ahrefs, SEMrush, Moz, Sistrix, SE Ranking |
| Analytics | `~~analytics` | Google Analytics, Adobe Analytics, Plausible, Matomo |
| Search Console | `~~search console` | Google Search Console, Bing Webmaster Tools |
| AI Visibility | `~~AI monitor` | Otterly, Profound, Scrunch AI |
| Web Crawler | `~~web crawler` | Screaming Frog, Sitebulb, DeepCrawl, Lumar |
| Link Database | `~~link database` | Ahrefs, Majestic, Moz Link Explorer |
| CDN / Hosting | `~~CDN` | Cloudflare, Fastly, Vercel, Netlify |
| Page Speed | `~~page speed tool` | Google PageSpeed Insights, WebPageTest, GTmetrix |
| Schema Validator | `~~schema validator` | Google Rich Results Test, Schema.org Validator |
| Knowledge Graph | `~~knowledge graph` | Google Knowledge Graph API, Wikidata SPARQL, DBpedia, CrunchBase |
| Brand Monitor | `~~brand monitor` | Google Alerts, Brand24, Mention.com, Brandwatch |

## How Placeholders Work

A skill might say:

```
Pull keyword rankings from ~~SEO tool and cross-reference with ~~search console impressions.
```

If your organization uses Ahrefs and Google Search Console, read it as:

```
Pull keyword rankings from Ahrefs and cross-reference with Google Search Console impressions.
```

Every skill works without any tool integration (paste data manually). Connecting tools via MCP automates data retrieval but is never required.
