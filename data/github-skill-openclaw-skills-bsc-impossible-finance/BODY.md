---
name: bsc-impossible-finance
version: 1.0.0
description: BSC (Binance Smart Chain) trading on Impossible Finance DEX - wallet registration, swaps, discover tokens and pairs, funding.
homepage: https://impossible.finance
---

# Impossible Finance Trading Skill

This skill lets the AI agent create a BSC wallet (private key + address saved in one file), **discover which tokens and swaps are available** on Impossible Finance DEX, swap tokens, and receive top-ups from the user. The agent is not limited to specific tokens — it can resolve token addresses and check which pairs have liquidity.

Impossible Finance V3 Swap is interface-compatible with Uniswap V2 but includes modifications for higher capital efficiency trades (lower slippage for supported pairs, especially stablecoins).

## Configuration (BSC Mainnet)

```bash
export BSC_RPC_URL="https://bsc-dataseed1.binance.org"
export BSC_CHAIN_ID=56

# Impossible Finance V3 (BSC mainnet)
export IF_ROUTER="0xCCF4881b849d94C15c98567Ba71b08eD829ABA33"
export IF_FACTORY="0xBf9D97eAF551877E4710d8E9d0519F79E03E5E69"
export WBNB="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
```

**Block explorer:** https://bscscan.com

**Impossible Finance Swap UI:** https://app.impossible.finance/swap

**Prerequisite:** Node.js 18+ with `ethers` (v6):

```bash
npm install ethers
# or: pnpm add ethers
```

---

## 1. Registration — Create Wallet and Save Keys to One File

The agent needs one file that stores both the **private key** and **public address** so it can sign transactions. Create it once and reuse it.

### Option A: Using Node.js (recommended)

Run this script to generate a new wallet and write it to a file:

```bash
node -e "
const fs = require('fs');
const path = require('path');
const { ethers } = require('ethers');
const wallet = ethers.Wallet.createRandom();
const dir = process.env.HOME + '/.config/impossible_agent';
fs.mkdirSync(dir, { recursive: true });
const file = dir + '/wallet.json';
fs.writeFileSync(file, JSON.stringify({
  privateKey: wallet.privateKey,
  address: wallet.address,
  publicKey: wallet.publicKey
}, null, 2));
console.log('Wallet saved to ' + file);
console.log('Address: ' + wallet.address);
"
```

Default file location: `~/.config/impossible_agent/wallet.json`.

**File format (wallet.json):**

```json
{
  "privateKey": "0x...",
  "address": "0x...",
  "publicKey": "0x..."
}
```

- **privateKey** — Used to sign transactions. Keep this file secret and only on the agent's machine.
- **address** — The agent's BSC account. User sends BNB/tokens to this address to top up.
- **publicKey** — Optional; derived from private key.

### Option B: Custom path

To use a different path, set the output file in the script:

```bash
export IF_WALLET_FILE="$HOME/.config/impossible_agent/wallet.json"
# Then in the script, write to process.env.IF_WALLET_FILE
```

### After registration

1. Read `address` and `publicKey` from `wallet.json`.
2. Tell the user: **My BSC address for top-ups is:** `<address>`
3. User must send native BNB (for gas) and any tokens they want the agent to swap to this address.
4. **Register public key on Chromia:** Link your BSC wallet public key to your ClawChain agent account to enable tracking EVM events on Chromia.

---

## 1.5. Register Public Key on Chromia

After creating your BSC wallet, register the public key on Chromia to link your Impossible Finance wallet to your ClawChain agent account. This enables tracking EVM events on your Chromia chain.

### Prerequisites

- You must have a registered agent account on ClawChain (Chromia)
- You must have an authenticated session (FT4 session from MetaMask or Chromia Vault)
- Your `wallet.json` file must exist with `publicKey` (required) and optionally `address`

### Registration Steps

#### Option A: Using Chromia CLI

```bash
# Set your ClawChain configuration
export CLAWCHAIN_BRID="9D728CC635A9D33DAABAC8217AA8131997A8CBF946447ED0B98760245CE5207E"
export CLAWCHAIN_NODE="https://chromia.01node.com:7740"

# Read wallet info
WALLET_FILE="$HOME/.config/impossible_agent/wallet.json"
PUBLIC_KEY=$(cat $WALLET_FILE | grep -o '"publicKey": "[^"]*' | cut -d'"' -f4)
ADDRESS=$(cat $WALLET_FILE | grep -o '"address": "[^"]*' | cut -d'"' -f4)

# Register public key on Chromia
chr tx register_evm_public_key \
  "impossible_finance" \
  "$PUBLIC_KEY" \
  "BSC" \
  56 \
  "$ADDRESS" \
  --ft-auth \
  --secret ~/.config/clawchain/credentials.json \
  -brid $CLAWCHAIN_BRID \
  --api-url $CLAWCHAIN_NODE \
  --await
```

**Arguments:** `wallet_type` `public_key` `chain` `network_id` `address`

**Network IDs:**
- BSC Mainnet: `56`
- BSC Testnet: `97`
- Ethereum Mainnet: `1`
- Ethereum Goerli: `5`
- Polygon Mainnet: `137`

**Note:** If you don't have an address, use `""` (empty string) for the last parameter.

#### Option B: Using JavaScript/TypeScript

If you're integrating this into a web application with an authenticated FT4 session:

```javascript
const fs = require('fs');
const walletData = JSON.parse(fs.readFileSync('~/.config/impossible_agent/wallet.json', 'utf8'));

// Assuming you have a Chromia session object (from @chromia/ft4)
const result = await session.call({
  name: 'register_evm_public_key',
  args: [
    'impossible_finance',         // wallet_type
    walletData.publicKey,         // public_key (required)
    'BSC',                         // chain
    56,                            // network_id (56 for BSC mainnet, 97 for testnet)
    walletData.address || ""      // address (optional)
  ]
});

console.log('Public key registered:', result);
```

### Query Registered Public Keys

To check which public keys are registered for your agent:

```bash
# Get all registered public keys for an agent
chr query get_evm_public_keys 'agent_name=your_agent_name' \
  -brid $CLAWCHAIN_BRID --api-url $CLAWCHAIN_NODE

# Get specific public key by wallet type
chr query get_evm_public_key_by_type \
  'agent_name=your_agent_name' \
  'wallet_type=impossible_finance' \
  -brid $CLAWCHAIN_BRID --api-url $CLAWCHAIN_NODE
```

### Error Handling

- **"Public key already registered"**: The public key is already registered for this agent. Query existing keys to verify.
- **"Public key is required for EIF event tracking"**: You must provide a public key.
- **"Invalid public key format"**: Public key must start with `0x` and be at least 66 characters (0x + 64 hex chars).
- **"Agent not found"**: Ensure your agent account exists on ClawChain.
- **Authentication errors**: Ensure you have a valid FT4 session authenticated with your Chromia account.

---

---

## 2. How the User Can Top Up the Agent Account

The agent does not have an "account" on a server — it has a BSC address (from `wallet.json`). Fund the agent by sending BNB and tokens to that address:

### Get BNB for gas and swaps

1. Buy BNB on an exchange or bridge from another chain.
2. Send **BNB** to the agent address: `<address>` from `wallet.json`.
3. Add BSC Mainnet in MetaMask (Chain ID 56, RPC above), then transfer BNB to the agent.

### Get tokens

- Send any BEP-20 token to `<address>`. The agent can swap via Impossible Finance if a pair exists (e.g. USDT/BNB, BUSD/BNB, IF/BNB).

### Check balance

- **Native (BNB):** `provider.getBalance(address)`
- **Any BEP-20 token:** call `balanceOf(address)` on the token contract.

---

## 3. Discovering Available Tokens and Swaps

The agent must support **any** BEP-20 token and determine **which swaps are possible**.

### Which tokens are available

- **By contract address:** Any BEP-20 token is identified by its contract address. Accept token addresses from the user or from token lists.
- **Resolve symbol and decimals:** Call the token contract (ERC-20/BEP-20):
  - `symbol()` → e.g. "USDT", "WBNB", "IF"
  - `decimals()` → use for amount math and display (e.g. 18 or 6)
  - `name()` → full name (optional)
- **Token lists (optional):** Impossible Finance and BSC publish token lists; the agent can also accept any user-provided contract address.
- **Native gas token:** BNB is the chain native token; the wrapped version is WBNB (address in config). Use WBNB in router paths.

### Which swaps are available

- **Get the Factory:** Use the factory address from config (`IF_FACTORY`).
- **Check if a pair exists:** Call `factory.getPair(tokenA, tokenB)`. If the result is the zero address (`0x000...`), no pair exists. Otherwise it is the pair contract address.
- **Check liquidity:** On the pair contract, call `getReserves()`. If both reserves are > 0, the pair has liquidity and that swap is available.
- **Quote before swapping:** Use the router's `getAmountsOut(amountIn, path)` (read-only). If the call reverts or returns zero for the output amount, the swap is not feasible (no liquidity or invalid path).
- **Multi-hop paths:** If there is no direct A–B pair, try a path via WBNB: `[tokenA, WBNB, tokenB]`. Call `getAmountsOut(amountIn, path)`; if it succeeds and returns a positive amount, the swap is available.
- **Impossible Finance advantage:** Stablecoin pairs on Impossible Finance may offer lower slippage than PancakeSwap due to V3's capital efficiency improvements.

---

## 4. Making a Trade (Swap on Impossible Finance)

The agent uses the private key from `wallet.json` to sign a swap transaction and sends it to BSC.

### Impossible Finance contracts (BSC mainnet)

| Contract | Address |
|----------|---------|
| Router | `0xCCF4881b849d94C15c98567Ba71b08eD829ABA33` |
| Factory | `0xBf9D97eAF551877E4710d8E9d0519F79E03E5E69` |
| WBNB | `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c` |

### Common swap methods (Uniswap V2-compatible)

| Method | Use case |
|--------|----------|
| `swapExactETHForTokens` | Swap exact BNB for tokens (min amount out) |
| `swapExactTokensForETH` | Swap exact tokens for BNB |
| `swapExactTokensForTokens` | Swap exact token A for token B |
| `swapTokensForExactTokens` | Swap tokens for exact amount of token B |

### Swap flow (any token pair with liquidity)

1. **Load wallet** from `wallet.json` (privateKey + address).
2. **Connect** to BSC: `new ethers.JsonRpcProvider(BSC_RPC_URL)` (mainnet: chain id 56).
3. **Resolve tokens:** Use token contract addresses (from user or discovery). For native BNB use WBNB in the path.
4. **Check swap availability:** Call router `getAmountsOut(amountIn, path)`. If it reverts or returns zero, try a multi-hop path (e.g. `[tokenA, WBNB, tokenB]`) or inform the user the pair has no liquidity.
5. **Build path:** e.g. BNB → token: `[WBNB, tokenAddress]`; token → BNB: `[tokenAddress, WBNB]`; token → token: `[tokenA, WBNB, tokenB]` (or direct if pair exists).
6. **Get router contract** (address above), ABI for `swapExactETHForTokens`, `swapExactTokensForETH`, or `swapExactTokensForTokens`.
7. **Deadline:** `Math.floor(Date.now() / 1000) + 300` (e.g. 5 minutes).
8. **amountOutMin:** from `getAmountsOut(amountIn, path)` then apply slippage (e.g. 1% = amountOut * 0.99).
9. **Sign and send:** For BNB → token use `{ value: amountInWei }`; for token → BNB or token → token, approve router for the token first, then call the swap.

### Slippage

- **amountOutMin** = expected output × (1 - slippage). E.g. 1% slippage → multiply by 0.99.
- For volatile pairs use 2–5%.
- Impossible Finance may allow tighter slippage on stablecoin pairs due to V3 capital efficiency.

### Token decimals

- BNB has 18 decimals. 1 BNB = `1e18` wei.
- Many BEP-20 tokens use 18 decimals; USDT/USDC often use 6. Check the token contract or docs.

---

## 5. Command / Script Patterns for the Agent

### Read wallet (do not expose private key in logs)

- Read `~/.config/impossible_agent/wallet.json` (or `IF_WALLET_FILE`).
- Use `address` when telling the user where to top up.
- Use `privateKey` only inside the signing process (ethers Wallet).

### Execute swap (high level)

1. Load `wallet.json`.
2. Create `ethers.Wallet(privateKey, provider)`.
3. Build router call (e.g. `swapExactETHForTokens`) with path, deadline, amountOutMin.
4. Send transaction: `tx = await router.swapExactETHForTokens(...); await tx.wait()`.
5. Return tx hash to user: `https://bscscan.com/tx/<hash>`.

### Get quote before swapping

- Call router `getAmountsOut(amountIn, path)` (read-only) to get expected `amountOut`, then compute `amountOutMin` with slippage.

---

## 6. Example Token Addresses (BSC Mainnet)

| Symbol | Address | Notes |
|--------|---------|--------|
| WBNB | `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c` | Native wrapped; use in paths |
| USDT | `0x55d398326f99059fF775485246999027B3197955` | Stablecoin |
| BUSD | `0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56` | Stablecoin |
| IF | `0xb0e1fc65c1a741b4662b813eb787d369b8614af1` | Impossible Finance governance token |
| IDIA | `0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89` | Impossible Decentralized Incubator Access token |

**Do not limit to these.** The agent should accept any BEP-20 address and discover availability via `getPair` / `getReserves` and `getAmountsOut` (see §3). If a pair has no liquidity, try a multi-hop path via WBNB or use the Impossible Finance UI.

---

## 7. Security Notes

- **wallet.json** contains the private key. Restrict access: `chmod 600 ~/.config/impossible_agent/wallet.json`.
- Use this wallet only for the agent and only with amounts you accept to lose if the machine or file is compromised.
- Prefer a dedicated BSC wallet; do not reuse a wallet that holds large funds elsewhere.

---

## 8. Errors

| Error | Meaning / action |
|-------|------------------|
| insufficient funds | Not enough BNB for gas or not enough token/BNB for the swap. User should top up. |
| execution reverted: INSUFFICIENT_OUTPUT_AMOUNT | Slippage too low; increase or retry. |
| execution reverted: EXPIRED | Deadline passed; rebuild tx with new deadline. |
| nonce too low | Reuse of nonce; wait and retry or refresh nonce from chain. |
| execution reverted: PAIR_NOT_EXIST | No pair exists for this token combination. Try a multi-hop path via WBNB. |

---

## 9. Links

- Impossible Finance Swap: https://app.impossible.finance/swap
- Impossible Finance Docs: https://docs.impossible.finance
- Impossible Finance GitHub: https://github.com/ImpossibleFinance
- BSC explorer: https://bscscan.com
