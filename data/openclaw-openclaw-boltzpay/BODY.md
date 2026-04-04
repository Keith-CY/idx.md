---
name: boltzpay
description: Pay for API data automatically — multi-protocol (x402 + L402 + MPP), multi-chain, streaming sessions
metadata: {"openclaw": {"emoji": "\u26a1", "requires": {"bins": ["npx"], "env": ["COINBASE_API_KEY_ID", "COINBASE_API_KEY_SECRET", "COINBASE_WALLET_SECRET"]}, "install": [{"id": "boltzpay-cli", "kind": "node", "label": "BoltzPay CLI"}]}}
---

# BoltzPay — Paid API Access for AI Agents

BoltzPay lets AI agents pay for API data automatically. It supports three payment protocols (x402, L402, and MPP) across multiple chains (Base, Solana, Tempo), paying with USDC, Bitcoin Lightning, or Stripe. Agents can discover 5,700+ scored endpoints from the live registry, evaluate pricing, open streaming sessions, and purchase API data in a single workflow.

## Quick Start

Fetch data from a paid API endpoint:

```
npx @boltzpay/cli fetch https://invy.bot/api
```

## Commands

| Command | Description | Credentials Needed |
|---------|-------------|--------------------|
| `npx @boltzpay/cli fetch <url>` | Fetch and pay for API data | Yes |
| `npx @boltzpay/cli quote <url>` | Get a price quote | No |
| `npx @boltzpay/cli discover` | Browse the BoltzPay registry (5,700+ endpoints) | No |
| `npx @boltzpay/cli discover --protocol mpp --min-score 70` | Filter by protocol and trust score | No |
| `npx @boltzpay/cli discover --query weather` | Search endpoints by name or URL | No |
| `npx @boltzpay/cli diagnose <url>` | Full diagnostic — DNS, protocol detection (x402/L402/MPP), pricing, health, latency | No |
| `npx @boltzpay/cli budget` | Check spending budget | No |
| `npx @boltzpay/cli history` | View payment history | No |
| `npx @boltzpay/cli wallet` | Check wallet address and balance | No |

## Setup

Set the following environment variables for paid API access:

### x402 (USDC on Base)

- `COINBASE_API_KEY_ID` — Your Coinbase CDP API key ID
- `COINBASE_API_KEY_SECRET` — Your Coinbase CDP API key secret
- `COINBASE_WALLET_SECRET` — Your Coinbase CDP wallet secret

Get your Coinbase CDP keys at [portal.cdp.coinbase.com](https://portal.cdp.coinbase.com).

### MPP (Tempo payment channels)

- `TEMPO_PRIVATE_KEY` — Tempo wallet private key (hex). Enables MPP one-shot payments and streaming sessions.

### Optional

- `NWC_CONNECTION_STRING` — NWC connection string for L402 (Lightning) payments
- `STRIPE_SECRET_KEY` — Stripe secret key for Stripe MPP payments
- `BOLTZPAY_DAILY_BUDGET` — Daily spending limit in USD (default: unlimited)

## Examples

### 1. Discover APIs from the registry

```
npx @boltzpay/cli discover
```

Browse 5,700+ scored and verified paid APIs from the BoltzPay registry. Filter by protocol, category, score, or free-text search. No credentials needed.

```
npx @boltzpay/cli discover --protocol x402 --min-score 80 --category crypto-data
```

### 2. Get a price quote

```
npx @boltzpay/cli quote https://invy.bot/api
```

See the payment protocol, amount, and chain options without spending anything.

### 3. Fetch paid data

```
npx @boltzpay/cli fetch https://invy.bot/api
```

Automatically detects the payment protocol (x402, L402, or MPP), pays, and returns the API response.

### 4. Diagnose an endpoint

```
npx @boltzpay/cli diagnose https://invy.bot/api
```

Full diagnostic: DNS resolution, protocol detection, format version, pricing, health classification, and latency.

## No Credentials?

Six of the seven commands work without any credentials:

- `quote` — get detailed pricing
- `discover` — browse the registry with filters (protocol, score, category, search)
- `diagnose` — full endpoint diagnostic (DNS, protocol, pricing, health, latency)
- `budget` — check spending limits
- `history` — view past transactions
- `wallet` — check wallet address and balance

Only `fetch` requires credentials (it makes actual payments).

## Links

- [GitHub](https://github.com/leventilo/boltzpay)
- [npm](https://www.npmjs.com/package/@boltzpay/sdk)
- [Documentation](https://boltzpay.ai)
- [Registry](https://status.boltzpay.ai)
