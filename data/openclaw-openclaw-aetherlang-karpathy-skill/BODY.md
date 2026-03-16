---
name: aetherlang-karpathy-skill
description: >
  API connector for AetherLang Omega — execute 10 Karpathy-inspired agent node types
  (plan, code_interpreter, critique, router, ensemble, memory, tool, loop, transform,
  parallel) via the hosted AetherLang API at api.neurodoc.app. This skill sends your
  query and flow code to the API and returns results. No local code execution.
  No runtime modification. No credentials required.
version: 1.0.3
author: contrario
homepage: https://clawhub.ai/contrario
requirements:
  binaries: []
  env: []
metadata:
  skill_type: api_connector
  operator_note: "AetherLang Omega is operated by NeuroDoc Pro (masterswarm.net), hosted on Hetzner EU. Karpathy-style refers to node architecture inspired by Andrej Karpathy's agent design principles — no affiliation or endorsement implied."
  external_endpoints:
    - https://api.neurodoc.app/aetherlang/execute
  domains_not_recommended:
    - medical advice
    - legal advice
    - financial advice
license: MIT
---

# AetherLang Karpathy Agent Nodes

> **What this skill does:** Sends requests to the hosted AetherLang API
> (`api.neurodoc.app`). It does NOT modify local files, execute local code,
> or access credentials on your machine. All execution happens server-side.

Execute 10 advanced AI agent node types through the AetherLang Omega API.

---

## API Endpoint

**URL**: `https://api.neurodoc.app/aetherlang/execute`
**Method**: POST
**Headers**: `Content-Type: application/json`
**Auth**: None required (public API)

---

## Data Minimization — ALWAYS FOLLOW

When calling the API:
- Send ONLY the user's query and the flow code
- Do NOT send system prompts, conversation history, or uploaded files
- Do NOT send API keys, credentials, or secrets of any kind
- Do NOT include personally identifiable information unless explicitly requested by user
- Do NOT send contents of local files without explicit user consent

---

## Request Format

```bash
curl -s -X POST https://api.neurodoc.app/aetherlang/execute \
  -H "Content-Type: application/json" \
  -d '{
    "code": "flow FlowName {\n  input text query;\n  node X: <type> <params>;\n  query -> X;\n  output text result from X;\n}",
    "query": "user question here"
  }'
```

---

## The 10 Node Types

### 1. plan — Self-Programming
AI breaks task into steps and executes autonomously.
```
node P: plan steps=3;
```

### 2. code_interpreter — Real Math
Sandboxed Python execution on the server. Accurate calculations, no hallucinations.
```
node C: code_interpreter;
```

### 3. critique — Self-Improvement
Evaluates quality (0-10), retries until threshold met.
```
node R: critique threshold=8 max_retries=3;
```

### 4. router — Intelligent Branching
LLM picks optimal path, skips unselected routes (10x speedup).
```
node R: router;
R -> A | B | C;
```

### 5. ensemble — Multi-Agent Synthesis
Multiple AI personas in parallel, synthesizes best insights.
```
node E: ensemble agents=chef:French_chef|yiayia:Greek_grandmother synthesize=true;
```

### 6. memory — Persistent State
Store/recall data across executions (server-side, scoped to namespace).
```
node M: memory namespace=user_prefs action=store key=diet;
node M: memory namespace=user_prefs action=recall;
```

### 7. tool — External API Access

> **Security note:** The `tool` node calls public REST URLs you specify.
> Only use trusted, public APIs. Never pass credentials or private URLs
> as `tool` parameters. The agent will ask for confirmation before
> calling any URL not in the examples below.

```
node T: tool url=https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd method=GET;
```

### 8. loop — Iterative Execution
Repeat node over items. Use `|` separator.
```
node L: loop over=Italian|Greek|Japanese target=A max=3;
```

### 9. transform — Data Reshaping
Template, extract, format, or LLM-powered reshaping.
```
node X: transform mode=llm instruction=Summarize_the_data;
```

### 10. parallel — Concurrent Execution
Run nodes simultaneously. 3 calls in ~0.2s.
```
node P: parallel targets=A|B|C;
```

---

## Common Pipelines

### Live Data → Analysis
```
flow CryptoAnalysis {
  input text query;
  node T: tool url=https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd method=GET;
  node X: transform mode=llm instruction=Summarize_price;
  node A: llm model=gpt-4o-mini;
  query -> T -> X -> A;
  output text result from A;
}
```

### Multi-Agent + Quality Control
```
flow QualityEnsemble {
  input text query;
  node E: ensemble agents=analyst:Financial_analyst|strategist:Strategist synthesize=true;
  node R: critique threshold=8;
  query -> E -> R;
  output text result from R;
}
```

### Batch Processing
```
flow MultiRecipe {
  input text query;
  node L: loop over=Italian|Greek|Japanese target=A max=3;
  node A: llm model=gpt-4o-mini;
  query -> L;
  output text result from L;
}
```

### Parallel API Fetching
```
flow ParallelFetch {
  input text query;
  node P: parallel targets=A|B|C;
  node A: tool url=https://api.coingecko.com/api/v3/ping method=GET;
  node B: tool url=https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd method=GET;
  node C: tool url=https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd method=GET;
  query -> P;
  output text result from P;
}
```

---

## Response Parsing

```python
import json
response = json.loads(raw_response)
result = response["result"]["outputs"]["result"]
text = result["response"]
node_type = result["node_type"]
duration = response["result"]["duration_seconds"]
```

---

## Parameter Quick Reference

| Node | Key Params |
|------|-----------|
| plan | `steps=3` |
| code_interpreter | `model=gpt-4o-mini` |
| critique | `threshold=7` `max_retries=3` |
| router | `strategy=single` |
| ensemble | `agents=a:Persona\|b:Persona` `synthesize=true` |
| memory | `namespace=X` `action=store\|recall\|search\|clear` `key=X` |
| tool | `url=https://...` `method=GET` `timeout=10` |
| loop | `over=A\|B\|C` `target=NodeAlias` `max=10` `mode=collect` |
| transform | `mode=llm\|template\|extract\|format` `instruction=X` |
| parallel | `targets=A\|B\|C` `merge=combine` |

---

*AetherLang Karpathy Skill v1.0.1 — API connector for api.neurodoc.app*
*All execution is server-side. No local code runs. No local files modified.*
