```skill
---
name: prezentit
description: Generate beautiful AI-powered presentations instantly. Create professional slides with custom themes, visual designs, and speaker notes—all through natural language commands.
homepage: https://prezentit.net
emoji: "👽"
metadata:
  clawdbot:
    emoji: "👽"
    skillKey: prezentit
    homepage: https://prezentit.net
    requires:
      config:
        - PREZENTIT_API_KEY
    config:
      requiredEnv:
        - name: PREZENTIT_API_KEY
          description: Your Prezentit API key. Get one at https://prezentit.net/api-keys
      example: |
        export PREZENTIT_API_KEY=pk_your_api_key_here
---

# Prezentit - AI Presentation Generator

**Base URL**: `https://prezentit.net/api/v1`  
**Auth Header**: `Authorization: Bearer pk_your_api_key_here`

## ⚠️ CRITICAL FOR AI AGENTS

**ALWAYS use `"stream": false`** in generation requests! Without this, you get streaming responses that cause issues.

---

## Complete Workflow (FOLLOW THIS ORDER)

### Step 1: Check Credits First

```http
GET /api/v1/me/credits
Authorization: Bearer pk_your_api_key_here
```

**Response:**
```json
{
  "success": true,
  "data": {
    "credits": 100,
    "totalUsed": 0,
    "presentationsCreated": 0
  }
}
```

→ If not enough credits, tell user to buy at https://prezentit.net/buy-credits

### Step 2: Find Theme (if user wants specific style)

```http
GET /api/v1/themes?search=minimalist
Authorization: Bearer pk_your_api_key_here
```

**Response:**
```json
{
  "success": true,
  "data": {
    "themes": [
      {
        "id": "theme_abc123",
        "name": "Clean Minimalist",
        "prompt": "Clean minimalist design with lots of white space...",
        "previewUrl": "https://..."
      }
    ]
  }
}
```

→ Use the `id` from results in step 3

### Step 3: Generate Presentation

```http
POST /api/v1/presentations/generate
Authorization: Bearer pk_your_api_key_here
Content-Type: application/json

{
  "topic": "User's topic here",
  "slideCount": 5,
  "theme": "theme_abc123",
  "stream": false
}
```

**⏱️ IMPORTANT: Generation takes 1-3 minutes. The API will return when complete.**

**Full Request Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string | Yes* | Presentation topic (2-500 chars). Required if no `outline`. |
| `outline` | object | No | Pre-built outline (saves 33% credits). See Outline section below. |
| `slideCount` | number | No | Number of slides (1-20, default: 5). Ignored if outline provided. |
| `theme` | string | No | Theme ID from `/themes` endpoint. |
| `themePrompt` | string | No | Custom theme description (overrides theme ID). |
| `audience` | string | No | Target audience for content tailoring. |
| `purpose` | string | No | Presentation goal (inform, persuade, etc.). |
| `includeNotes` | boolean | No | Generate speaker notes (default: true). |
| `language` | string | No | Output language code (e.g., "es", "fr"). |
| `stream` | boolean | **ALWAYS false** | **AI agents must always set `stream: false`**. |

### Step 4: Get the Result

**Success Response:**
```json
{
  "success": true,
  "data": {
    "presentationId": "uuid-here",
    "viewUrl": "https://prezentit.net/view/abc123",
    "creditsUsed": 75,
    "remainingCredits": 25
  }
}
```

→ Share the `viewUrl` with the user. That's their presentation!

### Step 5: Download (Optional)

```http
GET /api/v1/presentations/{presentationId}/download?format=pptx
Authorization: Bearer pk_your_api_key_here
```

**Formats:** `pptx` (PowerPoint), `pdf`, `json` (raw data)

---

## Pricing

| Scenario | Cost per Slide | Example (5 slides) |
|----------|----------------|-------------------|
| Auto-generate outline | 15 credits | 75 credits |
| Provide your own outline | 10 credits | 50 credits (33% savings!) |

- New accounts get **100 free credits**
- Buy more at: https://prezentit.net/buy-credits

---

## Theme Selection Guide

### Search by Keyword

```http
GET /api/v1/themes?search=minimalist
```

### Browse All Themes

```http
GET /api/v1/themes
```

### Theme Categories

| Category | Search Terms |
|----------|--------------|
| Corporate | `professional`, `corporate`, `business`, `executive` |
| Creative | `creative`, `bold`, `colorful`, `artistic` |
| Minimal | `minimalist`, `clean`, `simple`, `whitespace` |
| Tech | `tech`, `modern`, `digital`, `futuristic` |
| Nature | `nature`, `organic`, `earthy`, `botanical` |
| Dark | `dark`, `night`, `moody`, `elegant` |
| Light | `light`, `bright`, `airy`, `pastel` |

### Custom Theme (Skip the Search)

Instead of using a theme ID, provide a `themePrompt`:

```json
{
  "topic": "AI in Healthcare",
  "themePrompt": "Modern medical theme with blue and white colors, clean typography, subtle DNA helix patterns in backgrounds",
  "stream": false
}
```

**Good Theme Prompts Include:**
- Color palette: "navy blue and gold accents"
- Style: "minimalist", "corporate", "playful"
- Visual elements: "geometric shapes", "gradients", "photography-based"
- Typography: "modern sans-serif", "elegant serif"
- Mood: "professional", "energetic", "calm"

---

## Creating Outlines (Save 33% Credits)

Providing your own outline saves credits and gives you more control.

### Outline Structure

```json
{
  "topic": "Your Presentation Topic",
  "audience": "Who this is for",
  "purpose": "What you want to achieve",
  "slides": [
    {
      "type": "title",
      "title": "Main Title",
      "subtitle": "Optional Subtitle",
      "notes": "Speaker notes here"
    },
    {
      "type": "content",
      "title": "Slide Title",
      "bullets": ["Point 1", "Point 2", "Point 3"],
      "notes": "Speaker notes"
    }
  ]
}
```

### Slide Types

| Type | Required Fields | Optional Fields | Best For |
|------|-----------------|-----------------|----------|
| `title` | `title` | `subtitle`, `notes` | Opening slide |
| `content` | `title`, `bullets` | `notes` | Main content |
| `section` | `title` | `subtitle`, `notes` | Section dividers |
| `conclusion` | `title` | `bullets`, `notes` | Closing slide |

### Validation Rules

**Overall:**
- Minimum 1 slide, maximum 20 slides
- Topic: 2-500 characters
- First slide should typically be `title` type

**Per Slide:**
- Title: 1-200 characters, REQUIRED
- Subtitle: 1-150 characters (optional)
- Bullets: Array of strings, 3-7 recommended
- Each bullet: 1-300 characters
- Notes: 1-1000 characters (optional)

### Complete Example

```json
{
  "topic": "Introduction to Machine Learning",
  "outline": {
    "topic": "Introduction to Machine Learning",
    "audience": "Business executives",
    "purpose": "Explain ML basics and business applications",
    "slides": [
      {
        "type": "title",
        "title": "Introduction to Machine Learning",
        "subtitle": "Transforming Business with AI",
        "notes": "Welcome everyone. Today we'll explore how ML is revolutionizing business."
      },
      {
        "type": "content",
        "title": "What is Machine Learning?",
        "bullets": [
          "Subset of AI that learns from data",
          "Improves automatically through experience",
          "Powers recommendations, predictions, and automation"
        ],
        "notes": "Start with the basics - ML is about pattern recognition."
      },
      {
        "type": "section",
        "title": "Business Applications",
        "subtitle": "Real-World Use Cases"
      },
      {
        "type": "content",
        "title": "Key Applications",
        "bullets": [
          "Customer churn prediction",
          "Fraud detection",
          "Personalized recommendations",
          "Process automation"
        ]
      },
      {
        "type": "conclusion",
        "title": "Getting Started",
        "bullets": [
          "Identify high-impact use cases",
          "Start with clean, quality data",
          "Partner with ML experts"
        ],
        "notes": "End with actionable next steps."
      }
    ]
  },
  "theme": "theme_abc123",
  "stream": false
}
```

### Get Schema Programmatically

```http
GET /api/v1/docs/outline-format
```

Returns the full JSON schema for validation.

---

## Error Handling

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "retryAfter": 30
  }
}
```

### Common Errors & Solutions

| HTTP | Code | Message | Solution |
|------|------|---------|----------|
| 400 | `INVALID_TOPIC` | Topic must be 2-500 characters | Adjust topic length |
| 400 | `INVALID_OUTLINE` | Outline validation failed | Check outline structure per rules above |
| 400 | `INVALID_SLIDE_COUNT` | Must be 1-20 slides | Use valid slide count |
| 400 | `INVALID_LANGUAGE` | Unsupported language code | Use ISO 639-1 codes |
| 401 | `UNAUTHORIZED` | Invalid or missing API key | Check `Authorization: Bearer pk_...` header |
| 402 | `INSUFFICIENT_CREDITS` | Not enough credits | Direct user to https://prezentit.net/buy-credits |
| 404 | `PRESENTATION_NOT_FOUND` | Presentation doesn't exist | Verify presentation ID |
| 404 | `THEME_NOT_FOUND` | Theme ID invalid | Re-fetch from `/themes` endpoint |
| 409 | `DUPLICATE_REQUEST` | Same request within 30 seconds | Wait 30 seconds |
| 429 | `RATE_LIMIT_EXCEEDED` | Too many requests | Wait `retryAfter` seconds |
| 500 | `GENERATION_FAILED` | Internal error | Retry once, then contact support |
| 503 | `SERVICE_UNAVAILABLE` | System overloaded | Retry after `retryAfter` seconds |

### Handling Insufficient Credits

```json
{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_CREDITS",
    "message": "You need 75 credits but only have 50",
    "required": 75,
    "available": 50,
    "purchaseUrl": "https://prezentit.net/buy-credits"
  }
}
```

**AI Agent Response:** "You need 75 credits but only have 50. Purchase more at https://prezentit.net/buy-credits"

### Handling Rate Limits

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests",
    "retryAfter": 30
  }
}
```

**AI Agent Action:** Wait `retryAfter` seconds before retrying.

---

## Additional Endpoints

### Cancel Generation

```http
POST /api/v1/presentations/{presentationId}/cancel
Authorization: Bearer pk_your_api_key_here
```

Only works while generation is in progress. Credits are refunded.

### Get Presentation Details

```http
GET /api/v1/presentations/{presentationId}
Authorization: Bearer pk_your_api_key_here
```

**Response:**
```json
{
  "success": true,
  "data": {
    "presentationId": "uuid",
    "status": "completed",
    "viewUrl": "https://prezentit.net/view/abc123",
    "createdAt": "2024-01-15T10:30:00Z",
    "slideCount": 5,
    "creditsUsed": 75
  }
}
```

### List All Themes

```http
GET /api/v1/themes
Authorization: Bearer pk_your_api_key_here
```

Optional query params:
- `?search=keyword` - Filter by name/description
- `?category=corporate` - Filter by category
- `?limit=20` - Limit results

---

## Anti-Spam Rules

| Rule | Limit | What Happens |
|------|-------|--------------|
| Request cooldown | 5 seconds | 429 error if too fast |
| Duplicate detection | 30 seconds | 409 error for same request |
| Rate limit | Varies | 429 error with `retryAfter` |

**Best Practice:** Always check for `retryAfter` in error responses and wait that duration.

---

## Quick Copy-Paste Examples

### Minimal Generation

```json
POST /api/v1/presentations/generate
{
  "topic": "Introduction to Climate Change",
  "stream": false
}
```

### With Theme

```json
POST /api/v1/presentations/generate
{
  "topic": "Q4 Sales Report",
  "slideCount": 8,
  "theme": "theme_corporate_blue",
  "stream": false
}
```

### With Custom Theme

```json
POST /api/v1/presentations/generate
{
  "topic": "Startup Pitch Deck",
  "slideCount": 10,
  "themePrompt": "Modern tech startup style with gradient backgrounds, bold typography, dark mode aesthetic",
  "stream": false
}
```

### With Outline (33% Savings)

```json
POST /api/v1/presentations/generate
{
  "outline": {
    "topic": "Team Meeting",
    "slides": [
      {"type": "title", "title": "Weekly Team Sync", "subtitle": "January 15, 2024"},
      {"type": "content", "title": "Accomplishments", "bullets": ["Completed feature X", "Fixed critical bugs", "Improved performance 20%"]},
      {"type": "content", "title": "This Week's Goals", "bullets": ["Launch beta", "User testing", "Documentation"]},
      {"type": "conclusion", "title": "Questions?", "bullets": ["Open discussion", "Next meeting: Monday 10am"]}
    ]
  },
  "theme": "theme_minimal",
  "stream": false
}
```

---

## Getting Help

- **Website**: https://prezentit.net
- **Buy Credits**: https://prezentit.net/buy-credits
- **Support**: https://prezentit.net/support
- **API Key Management**: https://prezentit.net/api-keys
```
