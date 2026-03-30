---
name: topic-monitor
version: 1.5.2
description: Monitor topics of interest and proactively alert when important developments occur. Use when the user wants automated monitoring of specific subjects like product releases, news topics, technology updates, RSS/Atom feeds, or GitHub releases. Supports scheduled web search plus feed polling, boolean topic filters, AI importance scoring with sentiment tracking, smart alerts vs weekly digests, and memory-aware contextual summaries.
metadata: {"openclaw":{"requires":{"bins":["python3"],"env":{"TOPIC_MONITOR_TELEGRAM_ID":"optional - Telegram chat ID for alerts","TOPIC_MONITOR_DATA_DIR":"optional - defaults to .data/ in skill dir","WEB_SEARCH_PLUS_PATH":"optional - defaults to relative path"},"note":"All env vars optional. Defaults work out of the box."}}}
---

# Topic Monitor

Monitor topics continuously and alert only when something looks relevant.

## What’s new in v1.5.0

- **RSS/Atom feed monitoring** as a first-class source via `feeds`
- **GitHub release monitoring** via `github_repos` → `https://github.com/{owner}/{repo}/releases.atom`
- **Feed auto-discovery** from normal URLs
- **OPML import** for feed lists
- **Advanced filters** with `required_keywords` and `exclude_keywords`
- **Sentiment analysis** on findings: `positive`, `negative`, `neutral`, `mixed`
- **Sentiment shift alerts** with `alert_on_sentiment_shift`

## Quick start

```bash
python3 scripts/quick.py "AI Model Releases"
python3 scripts/quick.py "OpenClaw Releases" --github-repos "openclaw/openclaw"
python3 scripts/quick.py "Security Advisories" --feeds "https://example.com/security.xml"
```

Then test it:

```bash
python3 scripts/monitor.py --dry-run --verbose
```

## Core model

Each topic can mix multiple sources:

- **Web search** via `query`
- **RSS/Atom feeds** via `feeds`
- **GitHub releases** via `github_repos`

All collected results flow into the same pipeline:

1. gather results
2. deduplicate
3. apply advanced filters
4. score importance
5. classify sentiment
6. alert immediately or save for digest
7. track state and sentiment history

## Topic config

Each topic supports these keys:

- `id`
- `name`
- `query`
- `keywords`
- `feeds`
- `github_repos`
- `required_keywords`
- `exclude_keywords`
- `frequency` → `hourly|daily|weekly`
- `importance_threshold` → `high|medium|low`
- `channels`
- `context`
- `alert_on`
- `alert_on_sentiment_shift`
- `ignore_sources`
- `boost_sources`

### Example config

```json
{
  "topics": [
    {
      "id": "openclaw-news",
      "name": "OpenClaw Updates",
      "query": "OpenClaw AI assistant update release",
      "keywords": ["OpenClaw", "release", "update"],
      "feeds": ["https://example.com/blog/rss.xml"],
      "github_repos": ["openclaw/openclaw"],
      "required_keywords": ["release"],
      "exclude_keywords": ["rumor", "affiliate"],
      "frequency": "daily",
      "importance_threshold": "medium",
      "channels": ["telegram"],
      "context": "Track product updates and releases",
      "alert_on": ["keyword_exact_match", "github_release"],
      "alert_on_sentiment_shift": true,
      "ignore_sources": [],
      "boost_sources": ["github.com"]
    }
  ]
}
```

## Advanced filters

### `required_keywords`

All listed terms must appear in the title/snippet before scoring.

```json
"required_keywords": ["release", "stable"]
```

### `exclude_keywords`

Any matching term filters the result out before scoring.

```json
"exclude_keywords": ["beta", "rumor", "affiliate"]
```

This is intentionally simple boolean logic:

- any exclude match → reject
- any missing required term → reject

## RSS/Atom feeds

### Direct feeds

```bash
python3 scripts/manage_topics.py add "Security Feeds" \
  --feeds "https://example.com/rss.xml,https://example.com/atom.xml" \
  --keywords "security,CVE,patch"
```

### Feed discovery

Discover feeds from a normal website URL:

```bash
python3 scripts/manage_topics.py discover-feed https://example.com/blog
python3 scripts/monitor.py --discover-feed https://example.com/blog
```

Add a topic and auto-discover feeds in one step:

```bash
python3 scripts/manage_topics.py add "Vendor Blog" \
  --discover-feeds "https://example.com/blog" \
  --keywords "release,announcement"
```

### OPML import

Import feed subscriptions from an OPML file:

```bash
python3 scripts/manage_topics.py import-opml feeds.opml
```

Imported topics default to daily / medium unless you override:

```bash
python3 scripts/manage_topics.py import-opml feeds.opml --frequency hourly --importance high
```

### Feed caching

Feed polling uses `feedparser` and stores per-feed cache data in monitor state:

- `etag`
- `last-modified`
- last check metadata

That allows efficient conditional requests and avoids reprocessing unchanged feeds.

## GitHub release monitoring

Track repo releases with:

```json
"github_repos": ["openclaw/openclaw", "anthropics/claude-code"]
```

These map to GitHub Atom feeds automatically:

- `https://github.com/openclaw/openclaw/releases.atom`
- `https://github.com/anthropics/claude-code/releases.atom`

CLI example:

```bash
python3 scripts/manage_topics.py add "CLI Releases" \
  --github-repos "openclaw/openclaw,anthropics/claude-code" \
  --keywords "release,version"
```

GitHub release items are labeled clearly in alerts.

## Sentiment analysis

Each scored finding also gets a sentiment label:

- `positive`
- `negative`
- `neutral`
- `mixed`

Alerts and digest entries include that sentiment.

### Sentiment shift alerts

Enable:

```json
"alert_on_sentiment_shift": true
```

When enabled, a result that changes sentiment versus the topic’s previous sentiment history gets promoted for alerting.

State tracks:

- `last_sentiment`
- `sentiment_history`

## Scripts

### `scripts/manage_topics.py`

```bash
# Add topic
python3 scripts/manage_topics.py add "Topic Name" \
  --query "search query" \
  --keywords "word1,word2" \
  --feeds "https://example.com/rss.xml" \
  --github-repos "openclaw/openclaw" \
  --required-keywords "release" \
  --exclude-keywords "beta,rumor"

# List topics
python3 scripts/manage_topics.py list

# Edit topic
python3 scripts/manage_topics.py edit topic-id --feeds "https://example.com/rss.xml"

# Discover feeds
python3 scripts/manage_topics.py discover-feed https://example.com/blog

# Import OPML
python3 scripts/manage_topics.py import-opml feeds.opml

# Test topic
python3 scripts/manage_topics.py test topic-id
```

### `scripts/monitor.py`

```bash
python3 scripts/monitor.py
python3 scripts/monitor.py --dry-run
python3 scripts/monitor.py --topic openclaw-news --verbose
python3 scripts/monitor.py --discover-feed https://example.com/blog
```

## Alert output

Alerts can now include:

- source label (`Web`, `Feed`, `GitHub Release`)
- score and reason
- sentiment
- sentiment shift marker when applicable

## Installation note

Feed support uses Python `feedparser`.

Install if needed:

```bash
pip3 install feedparser
```

## Troubleshooting

### Feeds not showing results

- verify the feed URL manually
- try `discover-feed` against the site URL
- install `feedparser`
- run `python3 scripts/monitor.py --dry-run --verbose`

### Too much noise

- tighten `required_keywords`
- add `exclude_keywords`
- increase `importance_threshold`

### Missing GitHub release alerts

- confirm repo is `owner/repo`
- verify releases exist on GitHub
- test with `--verbose`

## Notes

- Search and feed results are merged into the same scoring pipeline.
- Existing web-search behavior remains supported.
- Digest entries store sentiment so weekly output reflects tone changes too.
