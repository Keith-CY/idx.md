---
name: aavegotchi-traits
description: Retrieve Aavegotchi NFT data by gotchi ID or name on Base. Returns traits, wearables, rarity scores, kinship, XP, level, and owner data.
---

# Aavegotchi Traits

Fetch Aavegotchi data on Base by ID or name.

## Usage

```bash
cd scripts
node get-gotchi.js 9638
node get-gotchi.js aaigotchi
./gotchi-info.sh 9638
```

## What it returns

- Token ID, name, owner, haunt
- BRS / modified BRS
- Kinship, XP, level
- Base + modified traits
- Equipped wearables with names
- Collateral, staked amount, last interaction
- JSON output for automation

## Environment

- `AAVEGOTCHI_RPC_URL` (optional)
- `AAVEGOTCHI_SUBGRAPH_URL` (optional; default Goldsky Base subgraph)
- `AAVEGOTCHI_SEARCH_BATCH_SIZE` (optional)
- `AAVEGOTCHI_RPC_RETRIES` (optional)
- `AAVEGOTCHI_RPC_RETRY_DELAY_MS` (optional)

## Reliability

- Name lookup uses subgraph first for speed.
- If subgraph fails, script scans on-chain with RPC retry/backoff to handle rate limits.
