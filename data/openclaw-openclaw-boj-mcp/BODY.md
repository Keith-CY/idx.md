---
name: boj-mcp
description: "Access Bank of Japan (BOJ/日本銀行) statistical data — price indices (CGPI, SPPI), flow of funds, balance of payments, BIS statistics, interest rates, money supply, exchange rates. Japan central bank monetary policy data. No API key required."
metadata: {"openclaw":{"emoji":"🏦","requires":{"bins":["boj-mcp"]},"install":[{"id":"uv","kind":"uv","package":"boj-mcp","bins":["boj-mcp"],"label":"Install boj-mcp (uv)"}],"tags":["japan","boj","central-bank","monetary-policy","mcp","statistics","interest-rates","finance"]}}
---

# BOJ: Bank of Japan Statistical Data

Access Bank of Japan time-series statistics from the official flat file download service. Covers price indices (CGPI, SPPI), flow of funds, balance of payments, international investment position, BIS statistics, and TANKAN survey data.

## Use Cases

- Look up Corporate Goods Price Index (CGPI/企業物価指数) trends
- Analyze Services Producer Price Index (SPPI/企業向けサービス価格指数)
- Retrieve Flow of Funds data (資金循環統計)
- Access Balance of Payments statistics (国際収支統計)
- Review BIS international statistics
- Explore TANKAN survey results (短観)

## Commands

### List available datasets
```bash
# Show all available BOJ flat file datasets
boj-mcp datasets
```

### Download and display data
```bash
# Display dataset in table format
boj-mcp data cgpi_m_en

# JSON output with more rows
boj-mcp data sppi_m_en --format json --rows 50
```

### Search for series
```bash
# Search within a specific dataset
boj-mcp search "electricity" --dataset cgpi_m_en

# Search across datasets by name
boj-mcp search "price"
```

### Test connectivity
```bash
boj-mcp test
```

## Available Dataset Categories

| Category | Prefix | Description |
|---|---|---|
| **Prices** | cgpi, sppi, cspi, rop | Corporate/Services price indices |
| **Surveys** | co | TANKAN (Short-term Economic Survey) |
| **Flow of Funds** | fof | Financial assets & liabilities |
| **Balance of Payments** | bp | International transactions |
| **International Investment** | qiip | International investment position |
| **BIS Statistics** | bis | BIS international banking/debt |
| **Money Stock** | md | Money stock statistics |
| **Interest Rates** | ir | Various interest rates |

## Workflow

1. `boj-mcp datasets` -> browse available datasets
2. `boj-mcp search <keyword>` -> find relevant series
3. `boj-mcp data <dataset_name>` -> retrieve data

## Important

- No API key required — BOJ flat files are publicly available
- Data is cached locally after first download for faster subsequent access
- Files are in Shift_JIS encoding (handled automatically)
- Data source: Bank of Japan (https://www.stat-search.boj.or.jp/)
- Python package: `pip install boj-mcp` or `uv tool install boj-mcp`
