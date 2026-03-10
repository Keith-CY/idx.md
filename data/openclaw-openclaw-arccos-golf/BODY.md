---
name: arccos-golf
license: MIT
description: Analyze Arccos Golf performance data including club distances, strokes gained metrics, scoring patterns, and round-by-round performance. Use when the user asks about golf statistics, club recommendations, performance trends, or wants detailed analysis from their Arccos Golf sensors.
---

# Arccos Golf Performance Analyzer

Fetches live data from the Arccos Golf API and generates performance analysis: strokes gained, club distances, scoring, putting, pace of play, and recent rounds.

## ⚠️ Privacy & Security Notice

This skill makes authenticated network requests to Arccos Golf API servers using your account credentials:

- **Credentials**: Your Arccos email and password are used to authenticate. A session token is cached at `~/.arccos_creds.json` (mode 0600, readable only by your user).
- **Network**: The script calls `authentication.arccosgolf.com` (login) and `api.arccosgolf.com` (data). No other endpoints are contacted.
- **No data leaves your machine** beyond the API calls needed to fetch your own golf data.
- **External dependency**: Requires the `arccos` library from `github.com/pfrederiksen/arccos-api` (MIT licensed, authored by the same user who published this skill).

Review the `arccos` library source before installing if you have concerns: <https://github.com/pfrederiksen/arccos-api>

## Prerequisites

```bash
# 1. Install the arccos library
git clone https://github.com/pfrederiksen/arccos-api
pip install -e arccos-api/

# 2. Authenticate — opens a prompt for email + password
#    Credentials cached to ~/.arccos_creds.json (0600)
arccos login
```

Alternatively, pass credentials directly at runtime (see Usage below).

## Usage

### Full report (uses cached credentials)
```bash
python3 scripts/arccos_golf.py
```

### Pass credentials explicitly (no cached creds required)
```bash
python3 scripts/arccos_golf.py --email you@example.com --password secret
```

### Specific sections
```bash
python3 scripts/arccos_golf.py --summary
python3 scripts/arccos_golf.py --strokes-gained
python3 scripts/arccos_golf.py --clubs           # all clubs
python3 scripts/arccos_golf.py --clubs iron       # filter by type
python3 scripts/arccos_golf.py --pace
python3 scripts/arccos_golf.py --recent-rounds 10
```

### JSON output
```bash
python3 scripts/arccos_golf.py --format json
```

### Offline / no credentials (cached JSON file)
```bash
python3 scripts/arccos_golf.py --file /path/to/arccos-data.json
```

## System Access

| Resource | Details |
|----------|---------|
| **Network** | `authentication.arccosgolf.com` — login/token refresh |
| **Network** | `api.arccosgolf.com` — rounds, handicap, clubs, stats, courses |
| **File read** | `~/.arccos_creds.json` — cached session token (created by `arccos login`) |
| **File read** | Optional `--file` path for offline JSON analysis |
| **File write** | `~/.arccos_creds.json` — updated on token refresh |
| **Subprocess** | None |
| **Shell exec** | None |

## API Calls Made

| Data | Endpoint |
|------|----------|
| Rounds list | `GET /users/{userId}/rounds` |
| Course names | `GET /courses/{courseId}` |
| Handicap | `GET /users/{userId}/handicaps/latest` |
| Club distances | `GET /v4/clubs/user/{userId}/smart-distances` |
| Strokes gained | `GET /v2/sga/shots/{roundIds}` |

All calls are authenticated with a Bearer JWT. The JWT is obtained from and refreshed against `authentication.arccosgolf.com` using your `arccos` session credentials.

## Dependencies

- Python ≥ 3.11
- `arccos` library: `github.com/pfrederiksen/arccos-api` (MIT) — wraps `requests`, `click`, `rich`
- Standard library only in the analysis script itself
