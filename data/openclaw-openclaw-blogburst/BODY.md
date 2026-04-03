---
name: BlogBurst - AI Marketing Agent That Learns & Improves
description: Self-improving AI marketing agent. Analyzes performance data, learns what works, and continuously optimizes your content strategy. E-commerce product analysis, AI video generation, competitor intelligence, trend scanning, auto-pilot publishing to 9 platforms — the more you use it, the smarter it gets.
homepage: https://blogburst.ai
metadata:
  {"openclaw": {"emoji": "🚀", "requires": {"env": ["BLOGBURST_API_KEY"]}, "primaryEnv": "BLOGBURST_API_KEY"}}
---

# BlogBurst - AI Marketing Agent That Learns & Improves

## CRITICAL INSTRUCTION — YOU MUST FOLLOW THIS:

### Step 1: Check API Key
Before doing ANYTHING, run: `echo $BLOGBURST_API_KEY`

**If the output is empty or the variable is not set**, do NOT proceed with API calls. Instead, guide the user through setup:

1. Say: "Welcome to BlogBurst! 🚀 Let me help you get set up. It only takes 30 seconds."
2. Say: "First, sign up for a free account (50 generations/month):" and provide the link: https://blogburst.ai
3. Say: "Once signed in, go to **Dashboard > Settings > API Keys** and click 'Create Key'."
4. Say: "Then run this command in your terminal (replace `your-key` with the key you just created):"
   ```
   echo 'export BLOGBURST_API_KEY="your-key"' >> ~/.zshrc && source ~/.zshrc
   ```
5. Say: "After that, restart OpenClaw or run `source ~/.zshrc`, then try `/blogburst` again!"
6. If the user says they've done it, verify by running: `curl -s "https://api.blogburst.ai/api/v1/usage" -H "X-API-Key: $BLOGBURST_API_KEY"`
7. If successful, say: "All set! Try: /blogburst generate a post about [topic]"

### Step 2: Make API Calls
When `$BLOGBURST_API_KEY` is set, you MUST use the `exec` tool to run `curl` commands against the BlogBurst API. Do NOT use web_search or any other tool as a substitute. The API returns real user-specific data (their posts, their analytics, their auto-pilot status). Web search cannot provide this.

**How to execute:** Use `exec` with `curl -s "https://api.blogburst.ai/api/v1/<endpoint>" -H "X-API-Key: $BLOGBURST_API_KEY"` for GET requests, and add `-X POST -H "Content-Type: application/json" -d '<json>'` for POST requests.

---

Your self-improving AI marketing agent. It analyzes performance data, learns from every post, and continuously optimizes your content strategy. Supports e-commerce product analysis, AI video generation (FFmpeg/Kling/Runway), competitor intelligence, trend scanning, and auto-pilot publishing to 9 platforms. The more you use it, the smarter it gets.

**One message to do anything:**
- "Post about my product launch on Twitter and LinkedIn"
- "Turn on auto-pilot, 3 posts per day"
- "How did my posts perform this week?"
- "Repurpose this article: https://myblog.com/post"
- "Add my product and analyze it for TikTok content"
- "Find my competitors and show me insights"
- "Generate a product video for TikTok"

## Setup (Manual)

1. Sign up free at [blogburst.ai](https://blogburst.ai)
2. Dashboard > Settings > API Keys > Create key
3. Set environment variable:
```bash
export BLOGBURST_API_KEY="your-key"
```

All requests use: `X-API-Key: $BLOGBURST_API_KEY`
Base URL: `https://api.blogburst.ai/api/v1`

---

## API 1: Agent Chat (Recommended — does everything)

Chat with your self-improving AI marketing agent. It generates content, checks analytics, manages auto-pilot, scans trends, analyzes competitors, manages e-commerce products, and continuously learns from your feedback and performance data. The agent has tools and executes actions automatically — the more you use it, the smarter it gets.

**Endpoint**: `POST /assistant/agent-chat-v2`

**Request**:
```json
{
  "messages": [
    {"role": "user", "content": "Generate a Twitter post about my product"}
  ],
  "language": "en"
}
```

Multi-turn conversation — send the full message history each time:
```json
{
  "messages": [
    {"role": "user", "content": "Generate a Twitter post about my product"},
    {"role": "assistant", "content": "Here's your Twitter post..."},
    {"role": "user", "content": "Now make one for LinkedIn too"}
  ],
  "language": "en"
}
```

**Response**:
```json
{
  "reply": "I've generated a Twitter post for you. Ready to copy and post!",
  "data_referenced": ["marketing_strategy", "analytics_7d"],
  "agent_name": "Nova",
  "actions_taken": [
    {
      "tool": "generate_content",
      "result": {
        "success": true,
        "data": {
          "platform": "twitter",
          "content": "Week 3 building BlogBurst. 15 followers, 40 posts published. Best post got 5 likes on Bluesky. Small numbers, real progress.\n\nThe AI agent now picks topics based on what actually performed well last week. No more guessing.",
          "image_urls": ["https://..."],
          "copy_only": true
        }
      }
    }
  ]
}
```

**What users can say** (the agent understands natural language):
- "Generate a post for Twitter/Bluesky/LinkedIn/all platforms"
- "What's trending in my space?"
- "How are my posts doing this week?"
- "Turn on auto-pilot" / "Pause auto-pilot"
- "What did you post today?"
- "Add my product and create a TikTok video"
- "Who are my competitors? Show me insights"
- "What has the AI learned about my audience?"

**When to use**: This is the PRIMARY API. Use it for any user request about social media content, analytics, automation, or marketing. It handles everything through conversation.

---

## API 2: Generate Platform Content (Quick one-shot)

Generate optimized content for multiple platforms at once. Use this for fast, direct generation without conversation.

**Endpoint**: `POST /blog/platforms`

**Request**:
```json
{
  "topic": "5 lessons from building my SaaS in public",
  "platforms": ["twitter", "linkedin", "bluesky"],
  "tone": "casual",
  "language": "en"
}
```

**Parameters**:
- `topic` (required): The title or topic (5-500 chars)
- `platforms` (required): Array from: twitter, linkedin, reddit, bluesky, threads, telegram, discord, tiktok, youtube
- `tone`: professional | casual | witty | educational | inspirational (default: professional)
- `language`: Language code (default: en)

**Response**:
```json
{
  "success": true,
  "topic": "5 lessons from building my SaaS in public",
  "twitter": {
    "thread": [
      "1/ 5 months building a SaaS in public. Here are the lessons nobody talks about...",
      "2/ Lesson 1: Your first 10 users teach you more than 10,000 pageviews.",
      "3/ Lesson 2: Ship weekly. Perfection is the enemy of traction."
    ]
  },
  "linkedin": {
    "post": "I've been building my SaaS in public for 5 months...",
    "hashtags": ["#BuildInPublic", "#SaaS", "#IndieHacker"]
  },
  "bluesky": {
    "posts": ["5 months of building in public. The biggest lesson: your first users don't care about features. They care that you listen."]
  }
}
```

**When to use**: When user wants quick multi-platform content from a topic without ongoing conversation.

---

## API 3: Repurpose Existing Content

Transform a blog post or article (by URL or text) into platform-optimized posts.

**Endpoint**: `POST /repurpose`

**Request**:
```json
{
  "content": "https://myblog.com/my-article",
  "platforms": ["twitter", "linkedin", "bluesky"],
  "tone": "casual",
  "language": "en"
}
```

**Parameters**:
- `content` (required): A URL to an article, or the full text (min 50 chars)
- `platforms` (required): Array from: twitter, linkedin, reddit, bluesky, threads, telegram, discord, tiktok, youtube
- `tone`: professional | casual | witty | educational | inspirational
- `language`: Language code (default: en)

**Response**: Same format as API 2.

**When to use**: When user provides a URL or pastes existing content and wants it adapted for social platforms.

---

## API 4: Auto-Pilot Management

Check and configure the autonomous posting agent.

**Get status**: `GET /assistant/auto-pilot`

**Response**:
```json
{
  "enabled": true,
  "platforms": ["bluesky", "telegram", "discord", "twitter"],
  "posts_per_day": 4,
  "timezone": "America/New_York",
  "last_daily_run": "2026-03-02T08:49:28Z",
  "reactions_enabled": true
}
```

**Configure**: `POST /assistant/auto-pilot`

```json
{
  "enabled": true,
  "posts_per_day": 3,
  "platforms": ["twitter", "bluesky", "telegram"],
  "timezone": "America/New_York"
}
```

**Run immediately**: `POST /assistant/auto-pilot/run-now`

**When to use**: When user wants to start/stop auto-pilot, change posting frequency, or check automation status.

---

## API 5: Trending Topics

Get real-time trending topics from Reddit, HackerNews, Google Trends, and Product Hunt. Updated every 4 hours.

**Endpoint**: `GET /assistant/trending-topics?limit=10`

**Response**:
```json
{
  "topics": [
    {"keyword": "AI agents replacing SaaS", "source": "hackernews", "score": 92},
    {"keyword": "Claude Code launch", "source": "reddit", "score": 87},
    {"keyword": "Open source AI tools", "source": "google_trends", "score": 78}
  ],
  "total": 96,
  "sources": ["reddit", "hackernews", "google_trends", "producthunt"]
}
```

**When to use**: When user asks about trends, hot topics, or what's popular to write about.

---

## API 6: Brainstorm Titles

Chat with AI to develop compelling titles.

**Endpoint**: `POST /chat/title`

**Request**:
```json
{
  "messages": [
    {"role": "user", "content": "I want to write about AI agents"}
  ],
  "language": "en"
}
```

**Response**:
```json
{
  "success": true,
  "reply": "Great topic! Here are some angles...",
  "suggested_titles": [
    "I Replaced My Marketing Team with an AI Agent",
    "Why AI Agents Are the New SaaS",
    "Building an AI Agent That Posts for Me While I Sleep"
  ]
}
```

---

## API 7: Generate Blog Post

Generate a full blog article from a topic.

**Endpoint**: `POST /blog/generate`

**Request**:
```json
{
  "topic": "I Replaced My Marketing Team with an AI Agent",
  "tone": "casual",
  "language": "en",
  "length": "medium"
}
```

**Parameters**:
- `topic` (required): Title or topic (5-500 chars)
- `tone`: professional | casual | witty | educational | inspirational
- `language`: Language code (default: en)
- `length`: short (500-800 words) | medium (1000-1500) | long (2000-3000)

**Response**:
```json
{
  "success": true,
  "title": "I Replaced My Marketing Team with an AI Agent",
  "content": "Full markdown blog post...",
  "summary": "A concise summary...",
  "keywords": ["AI agent", "marketing automation", "SaaS"]
}
```

---

## API 8: E-commerce Products

Manage your product catalog. Upload products, run AI Vision analysis, and generate TikTok-ready videos.

**List products**: `GET /ecommerce/products`

**Create product**: `POST /ecommerce/products`

```json
{
  "name": "Wireless Earbuds Pro",
  "price": 29.99,
  "currency": "USD",
  "category": "electronics",
  "description": "Noise-cancelling wireless earbuds",
  "purchase_url": "https://amazon.com/dp/..."
}
```

**AI Vision analysis**: `POST /ecommerce/products/{id}/analyze`

```json
{ "language": "en" }
```

Response includes: product type, selling points, target audience, visual features, and content angle suggestions — all extracted by Gemini Vision from your product images.

**Generate product video**: `POST /ecommerce/products/{id}/video`

```json
{ "provider": "ffmpeg" }
```

Video providers:
- `ffmpeg` — Free slideshow video (product images + transitions + text overlay)
- `kling` — Kling AI motion video (~$0.15/5sec, Pro plan)
- `runway` — Runway Gen-3 cinematic video (Team plan)

**When to use**: When user wants to add products, analyze them with AI, or create TikTok videos.

---

## API 9: Competitor Intelligence

AI-powered competitor discovery and analysis. Automatically finds competitors, analyzes their content strategy, and generates actionable insights.

**Discover competitors**: `POST /competitors/discover`

```json
{ "language": "en" }
```

AI uses Google Search to find your top competitors based on your product category.

**List competitors**: `GET /competitors`

Response includes: competitor name, website, threat level, content strategy analysis, posting frequency, engagement metrics.

**Get insights**: `GET /competitors/insights?language=en`

Returns competitive landscape analysis with:
- Opportunities your competitors are missing
- Threats to watch out for
- Priority actions ranked by impact
- Content gaps you can exploit

Competitor data is automatically refreshed weekly.

**When to use**: When user asks about competitors, market position, or content strategy gaps.

---

## API 10: Content Feedback (Continuous Learning)

Rate agent-generated content to train the AI. The agent learns from your thumbs up/down feedback and adjusts future content accordingly — the more feedback you give, the better it gets.

**Submit feedback**: `POST /feedback/content`

```json
{
  "target_type": "post",
  "target_id": "post_123",
  "rating": "thumbs_up",
  "comment": "Great hook, more like this",
  "content_type": "product_showcase"
}
```

Parameters:
- `target_type`: post | opportunity | suggestion | content_type
- `rating`: thumbs_up | thumbs_down
- `comment` (optional): Explain what you liked/disliked
- `content_type` (optional): e.g. product_showcase, lifestyle, comparison, trending_challenge

**Get feedback summary**: `GET /feedback/content/summary`

Shows aggregated scores by content type so you can see what the AI has learned about your preferences.

**How it works**: The AI uses your feedback history to reorder content types (liked styles first, disliked last) and adjusts tone/format in future auto-pilot runs. Combined with performance analytics, this creates a continuous improvement loop — every post teaches the AI what works for your audience.

**When to use**: After viewing agent-generated content, when user wants to rate it or train the AI.

---

## Recommended Workflows

### Quick content generation
User says: "Create posts about X for Twitter and LinkedIn"
→ Call **API 2** (`/blog/platforms`)

### Conversational (best experience)
User says: "Help me with my social media" or anything complex
→ Call **API 1** (`/assistant/agent-chat-v2`) — the agent handles everything

### Repurpose existing content
User shares a URL or pastes text
→ Call **API 3** (`/repurpose`)

### Full content pipeline
1. Brainstorm with **API 6** (`/chat/title`)
2. Write blog with **API 7** (`/blog/generate`)
3. Distribute with **API 2** (`/blog/platforms`)

### Automation
User says: "Automate my posting" or "Turn on auto-pilot"
→ Call **API 4** (`/assistant/auto-pilot`)

### E-commerce product launch
1. Create product with **API 8** (`/ecommerce/products`)
2. Upload images, then run AI analysis (`/ecommerce/products/{id}/analyze`)
3. Generate TikTok video (`/ecommerce/products/{id}/video`)
4. Enable auto-pilot with **API 4** — the AI rotates products daily

### Competitor research
1. Auto-discover competitors with **API 9** (`/competitors/discover`)
2. View insights (`/competitors/insights`) — updated weekly
3. Agent uses competitor data to generate differentiated content

### Train the AI
User rates content → **API 10** (`/feedback/content`)
→ AI adjusts future content based on your preferences
→ Combined with analytics data, each post teaches the AI what works

## Supported Platforms

| Platform | ID | Auto-Publish | Content Style |
|----------|-----|:---:|---------------|
| Twitter/X | twitter | ✅ Yes | Threads with hooks (280 chars/tweet) |
| Bluesky | bluesky | ✅ Yes | Short authentic posts (300 chars) |
| Telegram | telegram | ✅ Yes | Rich formatted broadcasts |
| Discord | discord | ✅ Yes | Community-friendly announcements |
| Reddit | reddit | Copy-only | Discussion posts + subreddit suggestions |
| TikTok | tiktok | Copy-only | Hook + script + caption + hashtags |
| YouTube | youtube | Copy-only | Title + description + script + tags |
| LinkedIn | linkedin | Coming soon | Professional insights + hashtags |
| Threads | threads | Coming soon | Conversational posts |

**Important**: To auto-publish, connect your platforms at [Dashboard > Connections](https://blogburst.ai/dashboard/connections). Twitter/X is one-click OAuth — takes 5 seconds.

## Links

- Website: https://blogburst.ai
- API Docs: https://api.blogburst.ai/docs
- GitHub: https://github.com/shensi8312/blogburst-openclaw-skill
