---
name: bmkg-monitor
description: "Monitoring earthquake, weather, and tsunami data in Indonesia using BMKG official data. Use when the user asks about earthquakes, weather forecasts, weather warnings, felt tremors, tsunami potential, or seismic events in Indonesia."
---

# BMKG Monitor

Monitor and analyze seismic activity, weather, and natural hazard warnings in Indonesia using real-time data from BMKG (Badan Meteorologi, Klimatologi, dan Geofisika).

## Quick Start

```bash
# Earthquake
python3 scripts/get_data.py latest              # Latest significant earthquake
python3 scripts/get_data.py felt                 # Earthquakes felt by people
python3 scripts/get_data.py recent               # Recent M5.0+ earthquakes
python3 scripts/get_data.py detail <EVENT_ID>    # Moment tensor & phase data
python3 scripts/get_data.py shakemap             # Shakemap image URL
python3 scripts/get_data.py tsunami              # Filter for tsunami potential

# Weather
python3 scripts/get_data.py weather <ADM4_CODE>  # 3-day forecast for location
python3 scripts/get_data.py warnings             # Active severe weather warnings

# Options
python3 scripts/get_data.py felt --json          # Raw JSON output (any command)
python3 scripts/get_data.py help                 # List all commands
```

## ADM4 Codes (Weather)

Weather forecasts use kelurahan/desa administrative codes (format: `XX.XX.XX.XXXX`).
Examples:
- `31.71.03.1001` — Kemayoran, Jakarta Pusat
- `35.07.01.1001` — Surabaya area
- Find codes via Kepmendagri No. 100.1.1-6117/2022.

## Workflows

### 1. "Was there a quake?"
Run `felt` first — includes smaller, shallow quakes that people actually feel. If they want the big one, run `latest`.

### 2. Significant Earthquake Analysis
When a major quake occurs:
1. Run `latest` to get details.
2. Run `shakemap` to get the MMI shakemap image URL.
3. Use [references/seismology.md](references/seismology.md) to explain magnitude, depth classification, MMI intensity, and fault type.
4. Run `tsunami` to check if any events have tsunami potential.

### 3. Weather Check
For weather questions, use `weather <adm4_code>`. Shows next 3 forecast periods with temperature, humidity, condition, wind, and visibility.

### 4. Active Weather Warnings
Run `warnings` to see current nowcast alerts — severe rain, thunderstorms, strong winds across Indonesian provinces. Refer to the "Weather Warning Severity" section in `references/seismology.md` for urgency/severity/certainty meanings.

### 5. Moment Tensor / Beach Ball Analysis
If a detailed BMKG report includes a moment tensor diagram, refer to the "Moment Tensor" section in `references/seismology.md` to identify Strike-Slip, Normal, or Thrust faulting.

## Data Sources

| Data | Source | Format |
|------|--------|--------|
| Earthquake (latest, recent, felt) | `data.bmkg.go.id/DataMKG/TEWS/` | JSON |
| Shakemap images | `data.bmkg.go.id/DataMKG/TEWS/<id>.mmi.jpg` | JPG |
| Weather forecast | `api.bmkg.go.id/publik/prakiraan-cuaca` | JSON |
| Weather warnings | `bmkg.go.id/alerts/nowcast/id` | RSS/XML |
| Moment tensor & phase | `static.bmkg.go.id/` | TXT |

## References

- [seismology.md](references/seismology.md) — Magnitude, MMI scale, depth, tsunami warnings, fault types, Indonesia tectonics, weather severity levels.
