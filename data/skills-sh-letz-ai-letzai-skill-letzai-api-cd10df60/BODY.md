---
name: letzai-api
description: "Generate AI images and videos via the LetzAI API. Images with Nano Banana Pro, Seedream 5, Flux 2, GPT Image 2; videos with Veo 3.1, Kling V3, Seedance 2.0. Includes context editing, upscaling, asset uploads, and custom @model training. Use for content creation apps and automation."
license: MIT
dependencies:
  - node-fetch (npm)
  - requests (pip)
---

# LetzAI API Integration Skill

## Overview

Helps you integrate the LetzAI public API for AI image and video generation, editing,
upscaling, asset uploads, and custom model (LoRA) training. Custom-trained models for
persons, objects and styles are referenced inside prompts with `@modelname`.

## Authentication

- **Base URL:** `https://api.letz.ai`
- **Auth:** `Authorization: Bearer YOUR_API_KEY`
- **Get an API key:** [letz.ai/subscription](https://letz.ai/subscription)
- **Swagger (source of truth):** [api.letz.ai/doc](https://api.letz.ai/doc) — machine-readable at `/doc-json` and `/doc-yaml`

```javascript
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.LETZAI_API_KEY}`,
};
```

```python
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.environ['LETZAI_API_KEY']}",
}
```

> **Do not confuse the public API with the private one.** `https://api.letz.ai` is the
> public developer API described here. `https://private-api.letz.ai` powers the LetzAI web
> app and has different route names (`/upscales`, `/image_completions`, `/video-edits`).
> Those routes 404 on the public API.

### Unknown-field rejection

The API validates request bodies strictly. Sending a field that is not in the schema
returns `400`. In particular there is **no** `negativePrompt`, `seed` or `aspectRatio` on
`POST /images` — aspect ratio is expressed via `width`/`height`.

## Core Workflows

### 1. Image Generation — `POST /images`

| Parameter | Type | Default | Notes |
|---|---|---|---|
| `prompt` | string | — | **Required.** May contain `@modelname` tags. |
| `baseModel` | string | account default | See model table below. |
| `mode` | string | model default | Resolution tier — allowed values differ per model. |
| `width` | int | `1600` | 480–2160 |
| `height` | int | `1600` | 480–2160 |
| `quality` | int | `2` | 1–6 |
| `creativity` | int | `2` | 1–6 |
| `hasWatermark` | bool | `true` | |
| `systemVersion` | int | account default | `2` or `3` |
| `hideFromUserProfile` | bool | `false` | |
| `webhookUrl` | string | — | POSTed when the job finishes. |
| `organizationId` | UUID | — | Bill credits to an org you belong to. |

#### Image models

`mode` is the **resolution tier**, and the accepted values are model-specific.

| Model | `baseModel` | `mode` values | Credits (generate) | Credits (edit) |
|---|---|---|---|---|
| Nano Banana Pro (Google) | `gemini-3-pro-image` | `default` (1K) · `2k` (HD) · `4k` | 80 / 160 / 240 | 80 / 160 / 240 |
| Nano Banana 2 (Google) | `nbf-inferencesh` | `default` (1K) · `2k` (HD) · `4k` | 40 / 80 / 160 | 50 / 100 / 150 |
| Nano Banana 2 Lite (Google) | `nano-banana-2-lite` | `default` (1K) | 20 | 25 |
| Seedream 5 Pro (ByteDance) | `seedream-5-0-pro` | `2k` (HD) · `4k` | 80 / 160 | 80 / 160 |
| Seedream 4.5 (ByteDance) | `seedream-4-5-251128` | `2k` (HD) · `4k` | 80 / 160 | 80 / 160 |
| Flux 2 (Black Forest Labs) | `flux2` | `1k` · `hd` | 60 / 120 | 60 / 120 |
| GPT Image 2 (OpenAI) | `gpt-image-2` | `1k` · `hd` · `4k` | 160 / 240 / 480 | 160 / 240 / 480 |
| WAN 2.7 Image Pro (Alibaba) | `wan-2-7-image-pro` | `1k` · `2k` | 10 | 10 |

Aliases are accepted, e.g. `gemini-3-pro-image-preview` still resolves to Nano Banana Pro.
The live catalogue with pricing lives at [letz.ai/docs/models.json](https://letz.ai/docs/models.json).

**Workflow**
1. `POST /images`
2. Read `id` from the response
3. Poll `GET /images/{id}` every 3 s
4. On `status === "ready"`, read `imageVersions.original`

See [examples/image_generation.js](examples/image_generation.js).

### 2. Video Generation — `POST /videos`

| Parameter | Type | Notes |
|---|---|---|
| `prompt` | string | **Required.** |
| `originalImageCompletionId` | UUID | Animate a previously generated LetzAI image. |
| `imageUrl` | string | Animate a public image URL. |
| `imageUrls` | string[] | Multi-frame: `[0]` = first frame, `[1]` = last frame. |
| `prompts` | object[] | Multi-shot storyboards (`video-kling3`): `[{ prompt, duration }]`. |
| `baseModel` | string | Optional; `settings.mode` is the usual selector. |
| `width` / `height` / `resolution` | number | Optional output sizing. |
| `settings` | object | Model + duration + audio (below). |
| `webhookUrl` | string | |
| `hidePrompt` | bool | |
| `organizationId` | UUID | |

**Image input is optional** — omit all of `originalImageCompletionId` / `imageUrl` /
`imageUrls` for pure text-to-video.

#### `settings`

| Field | Notes |
|---|---|
| `mode` | Video model key — see table. |
| `duration` | Seconds, clamped to the model's allowed values. |
| `withSound` | Enable native audio where supported. |
| `highQuality` | Higher-resolution tier; usually doubles the price. |
| `resolution` | `"720p"`, `"1080p"`, `"4k"` for per-second-priced models. |

#### Video models

Use the **`video-` prefixed key** as `settings.mode`.

| Model | `settings.mode` | Duration | Credits |
|---|---|---|---|
| Google Veo 3.1 | `video-veo31` | 8 s (fixed) | 1500 · ×2 with audio · ×2 at 1080p |
| Kling V3 | `video-kling3` | 3–15 s | 150 · 300 with audio |
| Kling V2.6 | `video-kling26` | 5 or 10 s | 150 · ×2 with audio · ×2 at 1080p |
| WAN 2.5 | `video-wan25` | 5 or 10 s | 110 · ×2 at 1080p (image-to-video only) |
| Seedance 2.0 | `video-seedance2` | 4–15 s | per second: 105 @480p · 210 @720p · 500 @1080p · 1000 @4K (audio always on) |
| Seedance 2.0 Enterprise | `video-seedance2-enterprise` | 4–15 s | same as Seedance 2.0; requires `organizationId` | only available to Enterprise Customers with an active organization
| Gemini Omni Flash | `video-gemini-omni` | 3–10 s | 100 per second (audio always on) |

**Workflow**
1. `POST /videos`
2. Poll `GET /videos/{id}` every 2–3 s
3. On `status === "ready"`, read `videoVersions.original`

See [examples/video_generation.py](examples/video_generation.py).

### 3. Image Editing — `POST /image-edits`

| Parameter | Type | Notes |
|---|---|---|
| `mode` | string | **Required.** `context` (AI editing) or `skin` (skin fix). |
| `prompt` | string | Edit instruction. May contain `@modelname` tags. |
| `imageUrl` | string | Single source image URL. |
| `inputImageUrls` | string[] | Multi-reference source images (up to 9 in practice). |
| `originalImageCompletionId` | UUID | Edit a previously generated LetzAI image. |
| `originalImageCompletionIds` | UUID[] | Several LetzAI images as sources. |
| `baseModel` | string | Same identifiers as image generation. |
| `settings` | object | `{ resolution, aspect_ratio, model }` |
| `imageCompletionsCount` | int | Variations to generate (1–5, default 1). Not used by `skin`. |
| `mask` | string | Base64 mask, legacy inpainting only. |
| `width` / `height` | number | Target dimensions. |
| `webhookUrl`, `organizationId`, `hidePrompt` | | |

`settings`:
- `resolution`: `"2k"` (HD) or `"4k"` (Ultra HD)
- `aspect_ratio`: `"1:1"`, `"16:9"`, `"9:16"`, `"4:3"`, `"3:4"`, `"21:9"`, `"9:21"`
- `model`: same identifiers as `baseModel`

Provide at least one source: `imageUrl`, `inputImageUrls`, `originalImageCompletionId`
or `originalImageCompletionIds`.

**Prefer the top-level `baseModel`.** Server-side queue routing reads `baseModel`;
`settings.model` is forwarded to the worker. Setting both to the same value is safest.

**Workflow**
1. `POST /image-edits`
2. Poll `GET /image-edits/{id}` every 3 s
3. On `status === "ready"`, read `generatedImageCompletion.imageVersions.original`

`mode: "in"` (inpainting) and `mode: "out"` (outpainting) are deprecated — use `context`.

### 4. Upscaling — `POST /upscale`

> The public route is **`/upscale`** (singular). `/upscales` is the private web-app route
> and returns 404 here.

| Parameter | Type | Default | Notes |
|---|---|---|---|
| `imageId` | UUID | — | A LetzAI image completion ID. |
| `imageUrl` | string | — | Public image URL. Use instead of `imageId`. To upscale your own file, upload it via `/user-assets` and pass the returned `imageUrl`. |
| `mode` | string | `default` | Upscaler model — see table. |
| `size` | number | — | 2–12; output tier — see table. |
| `strength` | number | `1` | 1–5. |
| `prompt` | string | — | Optional guidance for creative upscalers. |
| `webhookUrl`, `organizationId` | | | |

| `mode` | Upscaler | `size` → output | Credits |
|---|---|---|---|
| `nano-banana-pro` | Google Gemini 3 Pro | 4 → 1K · 8 → 2K · 12 → 4K | 80 / 160 / 240 |
| `nano-banana-2` | Google Gemini 3.1 Flash | 4 → 1K · 8 → 2K · 12 → 4K | 50 / 100 / 150 |
| `gpt-image-2` | OpenAI GPT Image 2 | 4 → 1K · 8 → 2K · 12 → 4K | 160 / 240 / 480 |
| `pruna` | Pruna P-Image-Upscale | 4 → 1 MP · 8 → 4 MP · 12 → 16 MP | 20 / 40 / 80 |
| `default` | LetzAI in-house | — | 20 |

**Workflow**
1. `POST /upscale`
2. Poll `GET /upscale/{id}` every 3 s
3. On `status === "ready"`, read `imageVersions.original`

### 5. Uploading Your Own Files — `POST /user-assets`

Two-step pre-signed S3 upload. Use this to get a public URL for a local file before
feeding it to `/image-edits`, `/videos` or `/upscale`.

1. `POST /user-assets` with `{ extension }` (plus optional `originalFilename`,
   `mimeType`, `fileSize`, `caption`, `metadata`, `numberOfImages`).
2. `PUT` the raw file bytes to the returned `uploadUrl` with the matching `Content-Type`
   header. **No `Authorization` header** — the URL is already signed.
3. The file is then reachable at `imageUrl` from the step-1 response.

Allowed `extension` values: `jpg`, `jpeg`, `png`, `gif`, `webp`, `mp4`, `webm`, `mov`,
`avi`, `mp3`, `wav`, `ogg`, `m4a`, `aac`, `flac`.

`POST /user-images` is the older image/video-only variant of the same flow; prefer
`/user-assets`, which also accepts audio.

See [examples/uploads_and_training.md](examples/uploads_and_training.md).

### 6. Custom AI Models (`@modelname`)

Trained models for persons, objects and styles. Tag them inside any image or edit
prompt: `@john_doe on the beach at sunset`.

**List:** `GET /models` — query params `page`, `limit`, `sortBy`, `sortOrder`, `search`,
`name`, `userId`, `username`, `class` (`person` | `object` | `style`), `type`,
`description`, `privacy` (`public` | `private` | `licensed`), `systemVersion`,
`isActive`, `status`. Pagination is reported through the `X-Total-Count`,
`X-Current-Page`, `X-Per-Page` and `X-Total-Pages` response headers.

**Get one:** `GET /models/{id}`

**Train a new model:** `POST /models` — this *is* available over the API (Enterprise
plans).

| Parameter | Notes |
|---|---|
| `name` | Required. Alphanumeric, `_` and `.`, max 50 chars. Becomes the `@tag`. |
| `class` | Required. `person` \| `style` \| `object` |
| `privacy` | `public` \| `private` \| `licensed` |
| `type` | Optional; auto-generated when omitted. |
| `trainingDataUrls` | 1–50 public image URLs. Upload via `/user-assets` first. |
| `trainingMode` | e.g. `default`, `slow` |
| `settings` | e.g. `["NO_ADULT_CONTENT", "NO_VIOLENCE"]` |
| `description`, `website`, `webhookUrl`, `organizationId` | Optional. |

Training starts automatically. Poll `GET /models/{id}` until `status` is `available`.

**Manage:** `PATCH /models/{id}`, `DELETE /models/{id}`,
`PUT /models/{id}/thumbnail`.

## Workflow Decision Tree

**Create an image** → pick `baseModel` + `mode` from the model table → `POST /images` →
poll `GET /images/{id}` → `imageVersions.original`.

**Use a trained model** → `GET /models?class=person` to find the name → put
`@name` in the prompt → generate normally.

**Edit an image** → get a source (URL, `/user-assets` upload, or a LetzAI completion id)
→ `POST /image-edits` with `mode: "context"` → poll → `generatedImageCompletion.imageVersions.original`.

**Create a video** → optional source image → `POST /videos` with
`settings.mode` = a `video-*` key → poll → `videoVersions.original`.

**Upscale** → `POST /upscale` with `imageId` or `imageUrl` → poll → `imageVersions.original`.

**Train a model** → upload images via `/user-assets` → `POST /models` with
`trainingDataUrls` → poll `GET /models/{id}` until `available`.

## Status Polling

Every generation endpoint is asynchronous: the POST returns an `id`, and you poll the
matching GET until a terminal status.

| Resource | Statuses |
|---|---|
| Images | `new` · `generating` · `ready` · `failed` · `interrupted` · `not_allowed` · `hidden` |
| Videos | `new` · `generating` · `ready` · `saved` · `failed` · `interrupted` |
| Image edits | `new` · `generating` · `ready` · `saved` · `failed` · `interrupted` |
| Upscales | `new` · `generating` · `ready` · `failed` |
| Models | `new` · `pending` · `training` · `finished` · `available` · `failed` |

There is no `"in progress"` status — in-flight jobs report `generating`. Treat
`ready` and `saved` as success; `failed`, `interrupted` and `not_allowed` as terminal
failures. Responses also carry `progress` (0–100) and, during generation, a base64
`previewImage`.

Recommended intervals: 3 s for images / edits / upscales, 2–3 s for videos. Pass a
`webhookUrl` instead of polling for production workloads.

For a full implementation, see [examples/polling_pattern.md](examples/polling_pattern.md).

## Error Handling

| Status | Meaning | Fix |
|---|---|---|
| 400 | Invalid parameters, or an unknown field in the body | Check ranges and remove fields that are not in the schema |
| 401 | Missing/invalid key, or not a member of `organizationId` | Check the `Authorization` header |
| 402 | Insufficient credits | Top up at [letz.ai/subscription](https://letz.ai/subscription) |
| 404 | Resource not found — or you used a private-API route | Check the id, and that the path exists on `api.letz.ai` |
| 429 | Rate limited | Back off exponentially |
| 500 | Server error | Retry with backoff |

## Limitations

- All generation is asynchronous — poll or use webhooks.
- Videos are billed per model; per-second models can be expensive at 1080p/4K.
- `mode` values are model-specific; an unsupported tier falls back to the model default.
- Seedance 2.0 Enterprise requires an `organizationId` you are a member of.
- A paid subscription is required for API access.

## Quick Reference: API Endpoints

| Endpoint | Method | Purpose |
|---|---|---|
| `/images` | POST | Create image |
| `/images` | GET | List / filter images |
| `/images/{id}` | GET | Image status + URLs |
| `/images/{id}/interruption` | PUT | Stop generation |
| `/images/{id}/privacy` | PUT | `{ privacy: "public" \| "private" \| "licensed" }` |
| `/images/{id}/prompt-privacy` | PUT | Hide/show the prompt publicly |
| `/image-edits` | POST | Create edit |
| `/image-edits` | GET | List edits |
| `/image-edits/{id}` | GET | Edit status + URLs |
| `/image-edits/{imageCompletionId}/mask` | GET | Mask used for a legacy inpaint |
| `/videos` | POST | Create video |
| `/videos` | GET | List videos |
| `/videos/{id}` | GET | Video status + URLs |
| `/videos/{id}/privacy` | PUT | Change video privacy |
| `/videos/{id}/prompt-privacy` | PUT | Hide/show the prompt publicly |
| `/upscale` | POST | Create upscale |
| `/upscale` | GET | List upscales |
| `/upscale/{id}` | GET | Upscale status + URLs |
| `/upscale/{id}` | DELETE | Delete an upscale |
| `/models` | GET | List models |
| `/models` | POST | Train a new model |
| `/models/{id}` | GET | Model details |
| `/models/{id}` | PATCH | Update model metadata |
| `/models/{id}` | DELETE | Delete model |
| `/models/{id}/thumbnail` | PUT | Set thumbnail |
| `/user-assets` | POST | Get a pre-signed upload URL (image/video/audio) |
| `/user-assets` | GET | List uploads |
| `/user-assets/{id}` | GET / PATCH / DELETE | Manage an upload |
| `/user-images` | POST / GET | Legacy image+video-only upload flow |
| `/user-images/{id}` | GET / DELETE | Manage a legacy upload |
| `/realtime/health` | GET | Realtime gateway health |

**Not on the public API** (private web-app routes — these 404): `/upscales`,
`/video-edits`, `/image_completions`, `PUT /videos/{id}/interruption`.

### Key response fields

- **Images / upscales:** `imageVersions.original`, `imageVersions["1920x1920"]`, `imageVersions["640x640"]`
- **Edits:** `generatedImageCompletion.imageVersions.original` (source in `originalImageCompletion`)
- **Videos:** `videoVersions.original`
- **In flight:** `progress` (0–100), `previewImage` (base64), `statusDetail` on failure

### Model Catalogue
To see the current list of AI Models that are supported on LetzAI, including their parameters and token costs, always read the models.json file:

**Model catalogue (live):** [letz.ai/docs/models.json](https://letz.ai/docs/models.json)


## Additional Resources

- **Swagger / OpenAPI:** [api.letz.ai/doc](https://api.letz.ai/doc) · [`/doc-json`](https://api.letz.ai/doc-json)
- **Developer docs:** [letz.ai/docs/api](https://letz.ai/docs/api)
- **Model catalogue (live):** [letz.ai/docs/models.json](https://letz.ai/docs/models.json)
- **Detailed reference:** [api_reference.md](api_reference.md)
- **Code examples:** [examples/](examples/)
- **LetzAI Documentation with all features of the platform:** [letz.ai/docs](https://letz.ai/docs)
