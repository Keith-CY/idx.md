---
name: google-maps
description: The definitive Google Maps integration for OpenClaw. Search, navigate, and explore with real-time data.
version: 1.0.0
author: shaharsh
tags: [maps, places, location, navigation, google]
metadata: {"clawdbot":{"emoji":"🗺️","requires":{"env":["GOOGLE_API_KEY"]},"primaryEnv":"GOOGLE_API_KEY","install":[{"id":"pip","kind":"pip","package":"requests","label":"Install dependencies (pip)"}]}}
allowed-tools: [exec]
---

# Google Maps 🗺️

The ultimate tool for location intelligence in OpenClaw. Powered by Google Maps Platform.

## Requirements
- **API Key**: Required via `GOOGLE_API_KEY` environment variable.
- **APIs**: Enable `Places API`, `Distance Matrix API`, and `Geocoding API` in Google Cloud Console.

## Setup
Set your API Key in OpenClaw config:
```json
{
  "env": {
    "GOOGLE_API_KEY": "AIza..."
  }
}
```

> Also supports `GOOGLE_MAPS_API_KEY` for backwards compatibility.

## Tools
I interact with this skill via the Python helper:
`python3 skills/google-maps/lib/map_helper.py <action> <params>`

### Actions
- **search**: `search "<query>"` (Options: `--open` for open now).
- **details**: `details "<place_id>"` (Returns reviews, hours, phone).
- **distance**: `distance "<origin>" "<destination>" "<mode>"` (Modes: driving, walking, bicycling).

## Localization
Supports `--lang=he` (default) or `--lang=en` for dynamic responses.
