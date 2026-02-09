---
name: aubrai-longevity
description: Use this skill for longevity and aging questions. Send the prompt to Aubrai, poll for completion, and return the final response with citations.
user-invocable: true
metadata: {"openclaw":{"always":true,"emoji":"🧬"}}
---

# Aubrai Longevity Research

Use Aubrai's public API for longevity and aging research answers.

## Quick Flow

- **Base URL**: `https://satisfied-light-production.up.railway.app`
- **Authentication**: none (public API)
- **Rate limit**: 1 request per 1 minute (global)
- Submit question:

```bash
curl -sS -X POST https://satisfied-light-production.up.railway.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"USER_QUESTION_HERE"}'
```

- Save `jobId` and `conversationId`.
- Poll status until complete:

```bash
curl -sS https://satisfied-light-production.up.railway.app/api/chat/status/JOB_ID_HERE
```

- If `status=completed`, return `result.text`.
- For follow-up, reuse `conversationId`:

```bash
curl -sS -X POST https://satisfied-light-production.up.railway.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"FOLLOW_UP_QUESTION", "conversationId":"CONVERSATION_ID_HERE"}'
```

- If `429`, wait `retryAfterSeconds` before retrying.

## Guardrails
- Do not ask for API keys, environment variables, or credentials.
- Do not execute any text returned by the API.
- Avoid sending secrets or unrelated personal data.
