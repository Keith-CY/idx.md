---
name: clawdbot-cost-tracker
description: Track Clawdbot AI model usage and costs accurately. Use when reporting daily/weekly costs, analyzing spending, or monitoring AI usage. Reads actual API cost data from session JSONL files.
---

# Clawdbot Cost Tracker

Track **accurate** API costs from Clawdbot session data.

## ⚠️ Important: Data Source

**DO NOT use `sessions_list` totalTokens for cost tracking!**

The `totalTokens` field in `sessions_list` represents the **current context window size**, not cumulative usage. It resets after each compaction.

### ✅ Correct Data Source

Session JSONL files contain actual API usage with **real cost data** (in USD):

```
~/.clawdbot/agents/main/sessions/*.jsonl
```

Each API call logs a `usage` object with precise costs:
```json
{
  "usage": {
    "input": 288,
    "output": 646,
    "cacheRead": 8576,
    "cacheWrite": 0,
    "totalTokens": 9510,
    "cost": {
      "input": 0.000432,
      "output": 0.003876,
      "cacheRead": 0.003216,
      "cacheWrite": 0,
      "total": 0.007524
    }
  }
}
```

## Quick Start

### Get All Daily Costs

```bash
cd ~/.clawdbot/agents/main/sessions && \
for f in *.jsonl; do
  grep -o '"timestamp":"[^"]*".*"total":[0-9.]*' "$f" 2>/dev/null | \
  sed 's/.*"timestamp":"\([^T]*\)T.*"total":\([0-9.]*\).*/\1 \2/' 
done | awk '{date=$1; cost=$2; sum[date]+=cost} END {for(d in sum) printf "%s $%.2f\n", d, sum[d]}' | sort
```

### Get Yesterday's Cost

```bash
YESTERDAY=$(date -v-1d +%Y-%m-%d)  # macOS
# YESTERDAY=$(date -d "yesterday" +%Y-%m-%d)  # Linux

cd ~/.clawdbot/agents/main/sessions && \
for f in *.jsonl; do
  grep -o '"timestamp":"'$YESTERDAY'[^"]*".*"total":[0-9.]*' "$f" 2>/dev/null | \
  grep -o '"total":[0-9.]*' | cut -d: -f2
done | awk '{sum+=$1} END {printf "$%.2f\n", sum}'
```

### Get Total Lifetime Cost

```bash
cd ~/.clawdbot/agents/main/sessions && \
for f in *.jsonl; do
  grep -o '"total":[0-9.]*' "$f" 2>/dev/null | cut -d: -f2
done | awk '{sum+=$1} END {printf "$%.2f\n", sum}'
```

### Get Cost by Model (Advanced)

```bash
# Use the bundled script
bash {baseDir}/scripts/extract-cost.sh --by-model
```

## Scripts

### `scripts/extract-cost.sh`

Extract actual costs from JSONL files.

```bash
# Daily costs
bash scripts/extract-cost.sh

# Yesterday only
bash scripts/extract-cost.sh --yesterday

# Specific date
bash scripts/extract-cost.sh --date 2026-01-30

# This week
bash scripts/extract-cost.sh --week

# JSON output
bash scripts/extract-cost.sh --json
```

### `scripts/snapshot-usage.js` (Legacy)

⚠️ **Deprecated** - Uses inaccurate token-based estimation.

If you need token counts (not costs), this still works:
```bash
# Pipe sessions_list JSON to the script
cat sessions.json | node scripts/snapshot-usage.js
```

## Integration with Daily Report

Add to your HEARTBEAT.md:

```markdown
### 费用追踪

获取昨日费用：
\`\`\`bash
bash /path/to/skills/clawdbot-cost-tracker/scripts/extract-cost.sh --yesterday
\`\`\`

展示格式：
💰 昨日费用: $XX.XX
📊 本周累计: $XXX.XX
```

## Data Storage (Optional)

Save daily snapshots for historical tracking:

```bash
# Create snapshot with actual costs
DATE=$(date +%Y-%m-%d)
bash scripts/extract-cost.sh --json > memory/usage/$DATE.json
```

## Pricing Reference

The costs in JSONL are **actual API charges** (USD), already calculated by the provider.

For reference, current pricing (per million tokens):

| Model | Input | Output | Cache Read | Cache Write |
|-------|-------|--------|------------|-------------|
| claude-opus-4-5 | $15 | $75 | $1.50 | $18.75 |
| claude-sonnet-4 | $3 | $15 | $0.30 | $3.75 |
| codex-mini-latest | $1.50 | $6 | $0.15 | $1.88 |

## Color Conventions (Chinese Style)

For financial displays in Chinese context:
- 🔴 Red = Up/Increase (涨)
- 🟢 Green = Down/Decrease (跌)
