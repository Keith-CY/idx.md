# LetzAI Polling Pattern Guide

LetzAI uses asynchronous generation for all image and video operations. This guide explains how to properly implement polling to check job status and retrieve results.

## Why Polling?

AI image and video generation takes time (seconds to minutes). Instead of keeping connections open, LetzAI uses an async pattern:

1. **Submit Job** → Receive job ID immediately
2. **Poll Status** → Check periodically until complete
3. **Get Result** → Fetch URLs when ready

## Status Flow

```
┌─────┐     ┌─────────────┐     ┌───────┐
│ new │ ──> │ in progress │ ──> │ ready │
└─────┘     └─────────────┘     └───────┘
                  │
                  v
              ┌────────┐
              │ failed │
              └────────┘
```

### Status Values

| Status | Description | Action |
|--------|-------------|--------|
| `new` | Job queued | Continue polling |
| `in progress` | Processing | Continue polling |
| `generating` | Alternative for processing | Continue polling |
| `ready` | Complete! | Fetch result URLs |
| `failed` | Error occurred | Handle error, stop polling |

## Recommended Polling Intervals

| Operation | Interval | Typical Wait Time |
|-----------|----------|-------------------|
| Images | 3 seconds | 10-30 seconds |
| Videos | 2-3 seconds | 30-120 seconds |
| Image Edits | 3 seconds | 15-45 seconds |
| Upscales | 3 seconds | 10-30 seconds |

## Implementation Patterns

### JavaScript/TypeScript

```javascript
async function pollUntilReady(endpoint, jobId, intervalMs = 3000, maxAttempts = 60) {
  const url = `https://api.letz.ai/${endpoint}/${jobId}`;
  
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const response = await fetch(url, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    switch (data.status) {
      case 'ready':
        return data;
      case 'failed':
        throw new Error(data.error || 'Generation failed');
      case 'new':
      case 'in progress':
      case 'generating':
        // Continue polling
        await new Promise(r => setTimeout(r, intervalMs));
        break;
      default:
        console.warn(`Unknown status: ${data.status}`);
        await new Promise(r => setTimeout(r, intervalMs));
    }
  }
  
  throw new Error(`Timeout: Job did not complete in ${maxAttempts} attempts`);
}

// Usage
const imageResult = await pollUntilReady('images', imageId, 3000);
const videoResult = await pollUntilReady('videos', videoId, 2500);
```

### Python

```python
import time
import requests

def poll_until_ready(endpoint: str, job_id: str, interval: float = 3.0, max_attempts: int = 60):
    """
    Poll LetzAI API until job completes.
    
    Args:
        endpoint: API endpoint ('images', 'videos', 'image-edits', 'upscales')
        job_id: The job ID to poll
        interval: Seconds between polls
        max_attempts: Maximum polling attempts before timeout
        
    Returns:
        dict: The completed job data
        
    Raises:
        TimeoutError: If job doesn't complete
        RuntimeError: If job fails
    """
    url = f"https://api.letz.ai/{endpoint}/{job_id}"
    headers = {"Authorization": f"Bearer {API_KEY}"}
    
    for attempt in range(max_attempts):
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()
        
        status = data.get("status", "")
        
        if status == "ready":
            return data
        elif status == "failed":
            raise RuntimeError(data.get("error", "Generation failed"))
        elif status in ("new", "in progress", "generating"):
            time.sleep(interval)
        else:
            print(f"Warning: Unknown status '{status}'")
            time.sleep(interval)
    
    raise TimeoutError(f"Job {job_id} timed out after {max_attempts} attempts")

# Usage
image_result = poll_until_ready("images", image_id, interval=3.0)
video_result = poll_until_ready("videos", video_id, interval=2.5)
```

### cURL / Shell Script

```bash
#!/bin/bash

API_KEY="your_api_key"
JOB_ID="$1"
ENDPOINT="${2:-images}"  # Default to images
INTERVAL="${3:-3}"       # Default 3 seconds
MAX_ATTEMPTS="${4:-60}"  # Default 60 attempts

poll_job() {
    local attempt=0
    
    while [ $attempt -lt $MAX_ATTEMPTS ]; do
        response=$(curl -s -H "Authorization: Bearer $API_KEY" \
            "https://api.letz.ai/${ENDPOINT}/${JOB_ID}")
        
        status=$(echo "$response" | jq -r '.status')
        
        case "$status" in
            "ready")
                echo "Job complete!"
                echo "$response" | jq
                return 0
                ;;
            "failed")
                echo "Job failed!"
                echo "$response" | jq
                return 1
                ;;
            *)
                echo "Attempt $((attempt + 1)): Status = $status"
                sleep $INTERVAL
                ;;
        esac
        
        attempt=$((attempt + 1))
    done
    
    echo "Timeout: Job did not complete"
    return 1
}

poll_job
```

## Advanced Patterns

### Exponential Backoff

For long-running jobs (especially videos), consider exponential backoff:

```javascript
async function pollWithBackoff(endpoint, jobId, initialInterval = 2000, maxInterval = 30000) {
  let interval = initialInterval;
  
  while (true) {
    const response = await fetch(`https://api.letz.ai/${endpoint}/${jobId}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    
    const data = await response.json();
    
    if (data.status === 'ready') return data;
    if (data.status === 'failed') throw new Error(data.error);
    
    await new Promise(r => setTimeout(r, interval));
    
    // Increase interval, up to max
    interval = Math.min(interval * 1.5, maxInterval);
  }
}
```

### Progress Tracking

Some responses include progress information:

```javascript
async function pollWithProgress(endpoint, jobId, onProgress) {
  while (true) {
    const response = await fetch(`https://api.letz.ai/${endpoint}/${jobId}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    
    const data = await response.json();
    
    // Report progress if available
    if (data.progress && onProgress) {
      onProgress(data.progress);
    }
    
    if (data.status === 'ready') return data;
    if (data.status === 'failed') throw new Error(data.error);
    
    await new Promise(r => setTimeout(r, 3000));
  }
}

// Usage with progress callback
const result = await pollWithProgress('images', imageId, (progress) => {
  console.log(`Progress: ${progress}%`);
});
```

### Parallel Polling

Poll multiple jobs simultaneously:

```javascript
async function pollMultiple(jobs) {
  // jobs = [{ endpoint: 'images', id: 'abc' }, { endpoint: 'videos', id: 'xyz' }]
  
  return Promise.all(
    jobs.map(job => pollUntilReady(job.endpoint, job.id))
  );
}

// Usage
const [image1, image2, video1] = await pollMultiple([
  { endpoint: 'images', id: imageId1 },
  { endpoint: 'images', id: imageId2 },
  { endpoint: 'videos', id: videoId1 }
]);
```

## Error Handling

### Common Errors During Polling

| Error | Cause | Solution |
|-------|-------|----------|
| 401 Unauthorized | Invalid/expired API key | Check API key |
| 404 Not Found | Invalid job ID | Verify ID from creation response |
| 429 Rate Limited | Too many requests | Increase polling interval |
| 500 Server Error | API issue | Retry with backoff |

### Robust Error Handling

```javascript
async function robustPoll(endpoint, jobId) {
  let retries = 0;
  const maxRetries = 3;
  
  while (true) {
    try {
      const response = await fetch(`https://api.letz.ai/${endpoint}/${jobId}`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
      });
      
      if (response.status === 429) {
        // Rate limited - wait longer
        const retryAfter = response.headers.get('Retry-After') || 30;
        await new Promise(r => setTimeout(r, retryAfter * 1000));
        continue;
      }
      
      if (response.status === 500 && retries < maxRetries) {
        // Server error - retry with backoff
        retries++;
        await new Promise(r => setTimeout(r, Math.pow(2, retries) * 1000));
        continue;
      }
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status === 'ready') return data;
      if (data.status === 'failed') throw new Error(data.error);
      
      // Reset retries on successful poll
      retries = 0;
      await new Promise(r => setTimeout(r, 3000));
      
    } catch (error) {
      if (error.name === 'AbortError' || retries >= maxRetries) {
        throw error;
      }
      retries++;
      await new Promise(r => setTimeout(r, Math.pow(2, retries) * 1000));
    }
  }
}
```

## Best Practices

1. **Don't poll too frequently** - Respect the recommended intervals (3s for images, 2-3s for videos)

2. **Set reasonable timeouts** - Images typically complete in 10-30s, videos in 30-120s

3. **Handle all status values** - Always have a case for unknown statuses

4. **Log progress** - Helpful for debugging and user feedback

5. **Implement backoff** - For production systems, use exponential backoff

6. **Cancel capability** - Allow users to cancel long-running polls

7. **Store job IDs** - Save IDs to resume polling after page refresh or app restart

## Webhook Alternative

For production systems, consider using webhooks instead of polling:

```javascript
// When creating the job, include webhook URL
const response = await fetch('https://api.letz.ai/images', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'A beautiful landscape',
    webhookUrl: 'https://your-server.com/api/letzai/callback'
  })
});

// Your server receives a POST when complete:
// POST /api/letzai/callback
// Body: { event: 'image.completed', data: { id, status, imageVersions, ... } }
```

See the [API Reference](../api_reference.md) for webhook configuration details.
