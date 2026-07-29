# LetzAI Polling Pattern Guide

Every LetzAI generation endpoint is asynchronous. The POST returns a job id immediately;
you then poll the matching GET until the job reaches a terminal state.

1. **Submit** → receive `id`
2. **Poll** → check `status` periodically
3. **Collect** → read the result URLs

## Status Flow

```
┌─────┐     ┌────────────┐     ┌───────┐
│ new │ ──> │ generating │ ──> │ ready │
└─────┘     └────────────┘     └───────┘
                  │
                  ├──> failed
                  ├──> interrupted
                  └──> not_allowed
```

### Status values per resource

| Resource | Statuses |
|---|---|
| Images | `new` · `generating` · `ready` · `hidden` · `failed` · `interrupted` · `not_allowed` |
| Videos | `new` · `generating` · `ready` · `saved` · `failed` · `interrupted` |
| Image edits | `new` · `generating` · `ready` · `saved` · `failed` · `interrupted` |
| Upscales | `new` · `generating` · `ready` · `failed` |
| Models | `new` · `pending` · `training` · `finished` · `available` · `failed` |

**There is no `"in progress"` status.** In-flight jobs report `generating`. Older
documentation and SDK snippets that check for `"in progress"` will simply never match and
poll until they time out.

Treat `ready` (and `saved` on videos and edits) as success. `failed`, `interrupted` and
`not_allowed` are terminal failures — `statusDetail` explains why.

## Job endpoints

| Create | Poll | Interval |
|---|---|---|
| `POST /images` | `GET /images/{id}` | 3 s |
| `POST /image-edits` | `GET /image-edits/{id}` | 3 s |
| `POST /upscale` | `GET /upscale/{id}` | 3 s |
| `POST /videos` | `GET /videos/{id}` | 2–3 s |
| `POST /models` | `GET /models/{id}` | 30 s (training takes minutes) |

Note the **singular `/upscale`** — `/upscales` is a private web-app route and returns 404
on the public API.

## Where the result lives

| Resource | Field |
|---|---|
| Images, upscales | `imageVersions.original` (also `["1920x1920"]`, `["640x640"]`) |
| Image edits | `generatedImageCompletion.imageVersions.original` |
| Videos | `videoVersions.original` |

While a job runs, `progress` is 0–100 and `previewImage` may hold a base64 preview.

## Implementation

### JavaScript / TypeScript

```javascript
const READY = new Set(['ready', 'saved']);
const FAILED = new Set(['failed', 'interrupted', 'not_allowed']);

async function pollUntilDone(endpoint, jobId, intervalMs = 3000, maxAttempts = 120) {
  const url = `https://api.letz.ai/${endpoint}/${jobId}`;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.LETZAI_API_KEY}` },
    });

    if (response.status === 429) {
      const retryAfter = Number(response.headers.get('Retry-After') || 30);
      await new Promise((r) => setTimeout(r, retryAfter * 1000));
      continue;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    if (READY.has(data.status)) return data;
    if (FAILED.has(data.status)) {
      throw new Error(`Job ${data.status}: ${data.statusDetail ?? 'no detail'}`);
    }

    await new Promise((r) => setTimeout(r, intervalMs));
  }

  throw new Error(`Timeout after ${maxAttempts} attempts`);
}

const image = await pollUntilDone('images', imageId, 3000);
const video = await pollUntilDone('videos', videoId, 2500);
const upscale = await pollUntilDone('upscale', upscaleId, 3000);
```

### Python

```python
import os
import time

import requests

READY = {"ready", "saved"}
FAILED = {"failed", "interrupted", "not_allowed"}


def poll_until_done(endpoint: str, job_id: str, interval: float = 3.0, max_attempts: int = 120):
    """endpoint is one of 'images', 'videos', 'image-edits', 'upscale'."""
    url = f"https://api.letz.ai/{endpoint}/{job_id}"
    headers = {"Authorization": f"Bearer {os.environ['LETZAI_API_KEY']}"}

    for _ in range(max_attempts):
        response = requests.get(url, headers=headers)

        if response.status_code == 429:
            time.sleep(float(response.headers.get("Retry-After", 30)))
            continue

        response.raise_for_status()
        data = response.json()
        status = data.get("status", "")

        if status in READY:
            return data
        if status in FAILED:
            raise RuntimeError(f"Job {status}: {data.get('statusDetail') or 'no detail'}")

        time.sleep(interval)

    raise TimeoutError(f"Timed out after {max_attempts} attempts")


image = poll_until_done("images", image_id, interval=3.0)
video = poll_until_done("videos", video_id, interval=2.5)
```

### cURL / shell

```bash
#!/usr/bin/env bash
set -euo pipefail

ENDPOINT="${1:-images}"   # images | videos | image-edits | upscale
JOB_ID="$2"
INTERVAL="${3:-3}"
MAX_ATTEMPTS="${4:-120}"

for ((attempt = 0; attempt < MAX_ATTEMPTS; attempt++)); do
  response=$(curl -sS -H "Authorization: Bearer $LETZAI_API_KEY" \
    "https://api.letz.ai/${ENDPOINT}/${JOB_ID}")
  status=$(jq -r '.status' <<<"$response")

  case "$status" in
    ready|saved)
      jq '.' <<<"$response"
      exit 0
      ;;
    failed|interrupted|not_allowed)
      echo "Job $status: $(jq -r '.statusDetail // "no detail"' <<<"$response")" >&2
      exit 1
      ;;
    *)
      echo "attempt $((attempt + 1)): $status ($(jq -r '.progress // 0' <<<"$response")%)"
      sleep "$INTERVAL"
      ;;
  esac
done

echo "Timed out" >&2
exit 1
```

## Advanced Patterns

### Exponential backoff

Useful for videos, which can take minutes:

```javascript
async function pollWithBackoff(endpoint, jobId, initialMs = 2000, maxMs = 30000) {
  let interval = initialMs;

  while (true) {
    const response = await fetch(`https://api.letz.ai/${endpoint}/${jobId}`, {
      headers: { Authorization: `Bearer ${process.env.LETZAI_API_KEY}` },
    });
    const data = await response.json();

    if (READY.has(data.status)) return data;
    if (FAILED.has(data.status)) throw new Error(data.statusDetail ?? data.status);

    await new Promise((r) => setTimeout(r, interval));
    interval = Math.min(interval * 1.5, maxMs);
  }
}
```

### Progress reporting

```javascript
async function pollWithProgress(endpoint, jobId, onProgress) {
  while (true) {
    const response = await fetch(`https://api.letz.ai/${endpoint}/${jobId}`, {
      headers: { Authorization: `Bearer ${process.env.LETZAI_API_KEY}` },
    });
    const data = await response.json();

    // `previewImage` carries a base64 preview mid-generation on some models.
    onProgress?.(data.progress ?? 0, data.previewImage);

    if (READY.has(data.status)) return data;
    if (FAILED.has(data.status)) throw new Error(data.statusDetail ?? data.status);

    await new Promise((r) => setTimeout(r, 3000));
  }
}
```

### Polling several jobs at once

```javascript
const [imageA, imageB, video] = await Promise.all([
  pollUntilDone('images', imageIdA),
  pollUntilDone('images', imageIdB),
  pollUntilDone('videos', videoId, 2500),
]);
```

## Errors During Polling

| Status | Cause | Handling |
|---|---|---|
| 401 | Invalid or expired key | Fix the `Authorization` header; do not retry |
| 404 | Wrong job id, or a private-API route (`/upscales`, `/video-edits`) | Check the id and the path |
| 429 | Polling too aggressively | Honour `Retry-After`, then increase the interval |
| 500 | Transient server error | Retry with exponential backoff, cap at ~3 attempts |

Reset your retry counter after each successful poll so a single hiccup halfway through a
long video job does not abort it.

## Best Practices

1. Respect the intervals — 3 s for images, edits and upscales; 2–3 s for videos.
2. Set a timeout. Images usually finish in 10–30 s, videos in 30 s–5 min depending on the model.
3. Handle unknown statuses by continuing to poll rather than throwing.
4. Persist job ids so you can resume polling after a restart.
5. Use webhooks for production workloads and keep polling only as a fallback.

## Webhooks

Pass `webhookUrl` on any create call and LetzAI will POST to it when the job reaches a
terminal state:

```javascript
await fetch('https://api.letz.ai/images', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.LETZAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'A beautiful landscape',
    baseModel: 'gemini-3-pro-image',
    mode: '2k',
    webhookUrl: 'https://your-server.com/api/letzai/callback',
  }),
});
```

The callback body is the same DTO the corresponding GET returns. Match the `id` against
your own records before acting on it, and keep a polling fallback for jobs you cannot
afford to lose.
