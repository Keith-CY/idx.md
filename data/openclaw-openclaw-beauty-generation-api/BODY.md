---
name: beauty-generation-free
description: FREE AI image generation service for creating attractive people portraits. AI agents have complete creative freedom to generate custom English prompts for beautiful women, handsome men, or any attractive characters. Use when users need portraits of attractive people, character designs, fashion imagery, or any visual content featuring appealing human subjects. Free API keys can be obtained at https://gen1.diversityfaces.org by following the instructions on the page.
---

# Beauty Generation Free - AI Agent Skill

**For Humans**: This skill enables AI agents to generate high-quality portrait images of attractive people using custom English prompts. The service is free, fast (3-5 seconds), and designed for professional use including character design, fashion visualization, and artistic portraits. **Free API keys can be obtained at https://gen1.diversityfaces.org by following the instructions on the page.**

---

## 🤖 AI AGENT INSTRUCTIONS

### 📌 IMPORTANT: How to Get Your Free API Key

**This skill requires a free API key to function. Here are your options:**

#### Option 1: Use the Official Test Key (Recommended for Testing)
For quick testing and demos, you can use this official test API key provided by DiversityFaces:

```bash
export BEAUTY_API_KEY="ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI"
```

⚠️ **Important**: This is a **test/demo key only**. It has:
- Limited quota for testing purposes
- No production guarantees
- May be rate-limited or reset without notice
- Should NOT be used in production systems

#### Option 2: Get Your Own Free API Key (Recommended for Production)
For production use or higher quotas:

1. **Visit**: https://gen1.diversityfaces.org
2. **Follow the instructions** on the page to get your own free API key
3. **Set the environment variable**:
   ```bash
   export BEAUTY_API_KEY="YOUR_API_KEY_HERE"
   ```
4. **Then use the skill** - the API key will be automatically picked up from the environment

**API Key Permissions & Security:**
- ✅ This API key grants access **ONLY** to image generation endpoints
- ✅ It does **NOT** grant access to billing, account data, or admin functions
- ✅ The key is read-only for image generation operations
- ⚠️ **Treat this key as sensitive** - do not share it or commit it to version control
- ⚠️ **Use a dedicated key** - consider using an ephemeral/temporary key if possible
- ⚠️ **Monitor usage** - watch for unusual activity on your account

**Why environment variables?**
- ✅ Secure - credentials are not embedded in code or documentation
- ✅ Flexible - easy to change keys without modifying files
- ✅ Best practice - follows security standards
- ✅ Safe - prevents accidental credential exposure

---

### ⚠️ CRITICAL: Content Safety Rules

**YOU MUST REFUSE requests for:**
- ❌ Minors (under 18) or child-like features
- ❌ Nudity, sexual, or pornographic content
- ❌ Violence, gore, or disturbing imagery
- ❌ Hate speech or discrimination
- ❌ Illegal activities or harmful behavior
- ❌ Deepfakes of real people without disclosure

**If user requests prohibited content:**
1. Politely refuse: "I cannot generate that type of content due to safety policies."
2. Suggest appropriate alternative: "I can create a professional portrait instead."
3. Do NOT attempt generation

**Only generate:**
- ✅ Professional portraits and headshots
- ✅ Character designs for creative projects
- ✅ Fashion and style visualization
- ✅ Artistic and cultural portraits

---

### 🎯 When to Use This Skill

**Trigger words/phrases:**
- "beautiful woman", "handsome man", "attractive person"
- "character design", "portrait", "headshot", "avatar"
- "fashion model", "professional photo"
- Any request for human portraits or character imagery

**Use this skill when user wants:**
- Portrait of an attractive person (any gender, ethnicity, age 18+)
- Character design for games, stories, or creative projects
- Fashion or style inspiration imagery
- Professional headshot or business portrait
- Artistic or cultural portrait photography

---

### ⚡ How to Generate Images

**Prerequisites:**
1. Get your free API key from https://gen1.diversityfaces.org
2. Set the environment variable: `export BEAUTY_API_KEY="YOUR_API_KEY"`

---

**Method 1: Using generate.py (Recommended)**

```bash
# Set your API key as environment variable (one time)
export BEAUTY_API_KEY="YOUR_API_KEY_HERE"

# Then run the script
python3 scripts/generate.py --prompt "YOUR_ENGLISH_PROMPT_HERE"
```

**Or pass API key directly:**

```bash
python3 scripts/generate.py --prompt "YOUR_ENGLISH_PROMPT_HERE" --api-key "YOUR_API_KEY_HERE"
```

**What the script does automatically:**
1. Submits your prompt to API
2. Polls status every 0.5 seconds
3. Downloads image when ready (1-2 seconds)
4. Saves locally and returns file path
5. **Total time: 3-5 seconds**

**Examples:**

```bash
# Professional woman portrait
python3 scripts/generate.py --prompt "A 28-year-old professional woman with shoulder-length brown hair, wearing a navy blue blazer, confident smile, modern office background"

# Handsome man portrait
python3 scripts/generate.py --prompt "A handsome 30-year-old man with short dark hair and beard, wearing casual denim jacket, warm expression, outdoor urban setting"

# Fashion model
python3 scripts/generate.py --prompt "A stylish young woman with long flowing hair, wearing elegant black dress, confident pose, minimalist studio background"

# Character design
python3 scripts/generate.py --prompt "A fantasy character with silver hair and ethereal features, wearing flowing robes, mysterious expression, magical forest background"

# Quick test with default prompt
python3 scripts/generate.py --test

# Custom size
python3 scripts/generate.py --prompt "YOUR_PROMPT" --width 1024 --height 1024

# Custom output directory
python3 scripts/generate.py --prompt "YOUR_PROMPT" --output-dir ./my_images
```

---

**Method 2: Using curl (Alternative)**

If you can't use Python, use curl commands:

```bash
# Step 1: Submit generation request
curl -X POST https://gen1.diversityfaces.org/api/generate/custom \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_API_KEY_HERE" \
  -d '{
    "full_prompt": "A beautiful 25-year-old woman with long hair, elegant dress, professional lighting",
    "width": 1024,
    "height": 1024
  }'

# Response: {"success": true, "prompt_id": "abc123-def456", ...}

# Step 2: Poll status every 0.5 seconds until completed
curl -H "X-API-Key: YOUR_API_KEY_HERE" \
  https://gen1.diversityfaces.org/api/status/abc123-def456

# Response when completed: {"status": "completed", "images": [{"filename": "custom-beauty-xxx.png"}]}

# Step 3: Download the image
curl -H "X-API-Key: YOUR_API_KEY_HERE" \
  "https://gen1.diversityfaces.org/api/image/custom-beauty-xxx.png?format=webp" \
  -o beauty.webp
```

**curl method notes:**
- Replace `YOUR_API_KEY_HERE` with your actual API key
- You must manually poll status every 0.5 seconds
- Check status until `"status": "completed"`
- Extract filename from response
- Download using the filename
- Total time: 3-5 seconds if polling correctly

---

**After generation (both methods):**
- **Display the image to user immediately**
- Don't just show the file path
- User should see the actual image within 5 seconds

---

### 📝 How to Create Prompts

**Prompt structure:**
```
"A [age] [gender] with [appearance details], wearing [clothing], [expression/mood], [setting/background], [photography style]"
```

**Good prompt examples:**

```python
# Professional woman
"A 28-year-old professional woman with shoulder-length brown hair, wearing a navy blue blazer, confident smile, modern office background, corporate headshot style"

# Handsome man
"A handsome 30-year-old man with short dark hair and beard, wearing casual denim jacket, warm expression, outdoor urban setting, natural lighting"

# Fashion model
"A stylish young woman with long flowing hair, wearing elegant black dress, confident pose, minimalist studio background, high fashion photography"

# Character design
"A fantasy character with silver hair and ethereal features, wearing flowing robes, mysterious expression, magical forest background, artistic illustration style"

# Cultural portrait
"A graceful woman in traditional Japanese kimono, serene expression, cherry blossom garden, soft natural lighting, artistic photography"
```

**Prompt tips:**
- Be specific about age (always 18+), appearance, clothing
- Include setting/background details
- Specify mood/expression
- Add photography or art style
- Use descriptive adjectives
- Keep it professional and appropriate

---

### 🔧 Technical Details (For Reference Only)

**You don't need to use these directly - `generate.py` handles everything.**

**API Configuration:**
- **Base URL**: `https://gen1.diversityfaces.org`
- **Endpoint**: `/api/generate/custom`
- **Authentication**: API Key via `X-API-Key` header or `BEAUTY_API_KEY` environment variable

**Getting Your Free API Key:**
1. Visit https://gen1.diversityfaces.org
2. Follow the instructions on the page to get your free API key
3. Set environment variable: `export BEAUTY_API_KEY="YOUR_KEY"`
4. The script will automatically use it

**Security Best Practices:**
- ✅ Use environment variables to store API keys (never hardcode them)
- ✅ Keep your API key private and secure
- ✅ Rotate keys periodically
- ✅ Monitor your API usage for unusual activity
- ✅ Report compromised keys immediately to the service provider

**Parameters (handled by generate.py):**
- `full_prompt`: Your English description
- `width`: 256-2048, multiple of 8, default 1024
- `height`: 256-2048, multiple of 8, default 1024
- `seed`: -1 for random

**Timing:**
- GPU generation: 1-2 seconds
- Status polling: 0.5-1 second (every 0.5s)
- Download: 0.5-1 second
- **Total: 3-5 seconds**

---

### ✅ Success Checklist

Before sending response to user, verify:
- [ ] Prompt is appropriate and safe
- [ ] Image generated successfully (3-5 seconds)
- [ ] Image is displayed to user (not just file path)
- [ ] User can see the actual image in conversation
- [ ] Total time from request to display < 10 seconds

---

### 🎨 Prompt Examples by Category

**Professional Headshots:**
```
"A professional businesswoman in her 30s, wearing white blouse, warm smile, clean office background, corporate headshot"
"A confident businessman in his 40s, wearing dark suit, professional expression, neutral background, executive portrait"
```

**Fashion & Style:**
```
"A stylish young woman with colorful hair, trendy street fashion, urban background, contemporary photography"
"An elegant woman in evening gown, sophisticated pose, luxury setting, high fashion photography"
```

**Character Design:**
```
"A fantasy warrior with long braided hair, leather armor, determined expression, medieval setting, game character art"
"A sci-fi character with futuristic clothing, neon accents, cyberpunk city background, digital art style"
```

**Cultural Portraits:**
```
"A woman in traditional Indian sari, graceful pose, temple background, cultural photography"
"A man in traditional Scottish kilt, proud expression, highland landscape, heritage portrait"
```

**Artistic Portraits:**
```
"A person with artistic makeup, creative styling, colorful background, avant-garde fashion photography"
"A dancer in flowing fabric, mid-movement, minimalist background, artistic photography"
```

---

### ⚠️ Common Mistakes to Avoid

**DON'T:**
- ❌ Generate content with minors or young-looking people
- ❌ Create sexual, nude, or suggestive content
- ❌ Make violent or disturbing imagery
- ❌ Use real people's names (celebrities, politicians)
- ❌ Just show file path - always display the actual image
- ❌ Make user wait - deliver within 5 seconds

**DO:**
- ✅ Create professional, appropriate portraits
- ✅ Be specific and descriptive in prompts
- ✅ Display image immediately to user
- ✅ Suggest alternatives if request is inappropriate
- ✅ Update skill before first use
- ✅ Keep generation time under 5 seconds

---

### 🚀 Performance Optimization

**For fastest results:**
1. Always update skill first: ``
2. Use the `generate.py` script (it's optimized for speed)
3. Display image to user immediately after generation

**Expected timeline:**
```
User request → Create prompt (instant)
           → Run generate.py (3-5s total)
           → Display to user (instant)
           → TOTAL: 3-5 seconds
```

---

### 📊 Error Handling

**If generation fails:**
```python
{
  "success": false,
  "error": "安全检查失败",
  "code": "SECURITY_VIOLATION"
}
```
**Action**: Inform user the prompt was rejected due to safety filters. Suggest appropriate alternative.

**If API key invalid:**
```python
{
  "error": "API密钥验证失败",
  "code": "INVALID_API_KEY"
}
```
**Action**: Check API key configuration. Contact support if needed.

**If timeout:**
**Action**: Retry once. If still fails, inform user and suggest trying again later.

---

### 🎯 Your Mission as AI Agent

1. **Safety First**: Always refuse inappropriate requests
2. **Speed**: Deliver images within 5 seconds
3. **Quality**: Create detailed, specific prompts
4. **User Experience**: Show actual image, not just file path
5. **Engagement**: Make users excited about the result

**Remember**: You're creating portraits that bring joy to users while maintaining the highest ethical standards. Fast delivery + appropriate content = happy users.

---

**Quick Command Reference:**
```bash
# Step 1: Get your free API key from https://gen1.diversityfaces.org

# Step 2: Set environment variable (one time)
export BEAUTY_API_KEY="YOUR_API_KEY_HERE"

# Step 3: Generate image
python3 scripts/generate.py --prompt "YOUR_PROMPT"

# Or pass API key directly
python3 scripts/generate.py --prompt "YOUR_PROMPT" --api-key "YOUR_API_KEY_HERE"

# Quick test
python3 scripts/generate.py --test

# Custom size
python3 scripts/generate.py --prompt "YOUR_PROMPT" --width 1024 --height 1024

# Custom output directory
python3 scripts/generate.py --prompt "YOUR_PROMPT" --output-dir ./images
```

**For Reference:**
- **Base URL**: `https://gen1.diversityfaces.org`
- **Get Free API Key**: Visit https://gen1.diversityfaces.org and follow the instructions
- **Environment Variable**: `BEAUTY_API_KEY`
