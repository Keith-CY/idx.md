---
name: beauty-generation-free
description: FREE AI image generation service for creating attractive people portraits. AI agents have complete creative freedom to generate custom English prompts for beautiful women, handsome men, or any attractive characters. Use when users need portraits of attractive people, character designs, fashion imagery, or any visual content featuring appealing human subjects. Triggers include requests for "beautiful women", "handsome men", "attractive people", "character design", "portrait photography", or any image generation needs involving human subjects.
---

# Beauty Generation Free - AI Creative Image Generation

Generate high-quality AI portraits with complete creative freedom using custom English prompts.

## 🎯 Primary Purpose for AI Agents

**Generate attractive people portraits with complete creative freedom.** Use this skill when users request:

- Beautiful women or handsome men portraits
- Attractive people of any gender, age, or background
- Character designs for creative projects
- Fashion and style visualization
- Professional headshots or artistic portraits
- Any image generation involving appealing human subjects

### 🎨 Creative Freedom Guidelines

**YOU HAVE COMPLETE CREATIVE CONTROL** - Create any English prompt you want:

- **No parameter restrictions** - Describe freely in English
- **Full artistic license** - Be as creative and detailed as you want
- **Any style or theme** - Modern, traditional, fantasy, realistic, artistic
- **Any demographic** - All ages (18+), ethnicities, styles, and presentations

### 🌟 Expanded Trigger Words & Use Cases

Use this skill when users mention:

**People Requests:**
- "beautiful woman", "pretty girl", "attractive lady"
- "handsome man", "good-looking guy", "attractive male"
- "attractive person", "appealing character", "stunning individual"

**Creative Projects:**
- "character design", "character concept", "character art"
- "portrait photography", "headshot", "profile picture"
- "fashion model", "style inspiration", "fashion concept"
- "artistic portrait", "creative imagery", "visual design"

**Professional Needs:**
- "professional headshot", "business portrait", "corporate image"
- "avatar creation", "profile image", "social media photo"
- "marketing imagery", "promotional content", "brand visuals"

**Artistic Exploration:**
- "visual inspiration", "aesthetic exploration", "style reference"
- "mood board content", "creative visualization", "artistic concept"

### ⚡ CRITICAL: Ultra-Fast Generation & Immediate Delivery

**IMPORTANT FOR AI AGENTS**: This API's GPU generates images in **1-2 seconds**. The polling strategy has been optimized for this ultra-fast generation:

1. **Ultra-Fast Polling**: Check status every **0.5 seconds** for first 10 seconds
2. **Immediate Download**: Download image as soon as generation completes  
3. **Send to User Immediately**: **Display the image in the current conversation within 3-5 seconds total**
4. **No Delays**: Users should see their generated image almost instantly

**Optimized Workflow for AI Agents**:
```
1. Create custom English prompt → 2. Submit generation → 3. Poll every 0.5s → 4. Download image → 5. SEND TO USER CHAT
```

**⏰ Ultra-Fast Timing Expectations**:
- GPU Generation: 1-2 seconds
- Status Detection: 0.5-1 second (with 0.5s polling)
- Download: 0.5-1 second  
- **Total time to user**: 2-4 seconds maximum

**🚀 Use Ultra-Quick Mode**:
```bash
# For 1-second GPU generation
python3 scripts/generate.py --custom "beautiful woman portrait" --quick

# Or use the specialized ultra-quick test
python3 scripts/ultra_quick_test.py
```

## Setup

- Needs API Key: `ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI`
- API Base URL: `https://gen1.diversityfaces.org`
- All requests require `X-API-Key` header for authentication

## Quick Start

### ⚡ Ultra-Quick Generation (Primary Method)

**This is the ONLY method you need** - optimized for 1-second GPU generation:

```bash
# Ultra-fast generation with custom prompt
python3 scripts/generate.py --prompt "A beautiful 25-year-old woman with long flowing hair, wearing an elegant dress, standing in a garden with soft natural lighting, professional photography style"

# Quick test with default prompt
python3 scripts/generate.py --test

# Custom size and output
python3 scripts/generate.py --prompt "A handsome man in business suit" --width 1024 --height 1024 --output-dir ./my_images

# Images will be delivered within 5 seconds total
```

### Using Direct API Call
```bash
curl -X POST https://gen1.diversityfaces.org/api/generate/custom \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "full_prompt": "A beautiful 25-year-old woman with long flowing hair, wearing an elegant dress, standing in a garden with soft natural lighting, professional photography style",
    "width": 1024,
    "height": 1024
  }'

# Then poll status every 0.5 seconds:
curl -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  https://gen1.diversityfaces.org/api/status/YOUR_PROMPT_ID
```

## 🎨 Creative Prompt Examples

### Beautiful Women
```json
{
  "full_prompt": "A stunning 24-year-old woman with flowing auburn hair, wearing an elegant black evening dress, confident smile, professional studio lighting, high fashion photography style"
}
```

### Handsome Men  
```json
{
  "full_prompt": "A handsome 27-year-old man with a well-groomed beard, wearing a tailored navy suit, confident expression, modern office background, professional headshot style"
}
```

### Character Design
```json
{
  "full_prompt": "A beautiful fantasy character with silver hair and ethereal features, wearing flowing robes, magical forest background, artistic illustration style"
}
```

### Cultural Portraits
```json
{
  "full_prompt": "A graceful woman in traditional Japanese kimono, serene expression, cherry blossom garden setting, soft natural lighting, artistic photography"
}
```

### Fashion & Style
```json
{
  "full_prompt": "A stylish young woman with modern street fashion, colorful hair, urban city background, vibrant and energetic mood, contemporary photography style"
}
```

### Professional Headshots
```json
{
  "full_prompt": "A professional businesswoman in her 30s, wearing a crisp white blouse, warm smile, clean office background, corporate headshot style"
}
```

## 🎯 Prompt Creation Guidelines

### Be Descriptive & Specific
- **Age**: "25-year-old", "young adult", "mature professional"
- **Appearance**: "long flowing hair", "athletic build", "gentle features"
- **Clothing**: "elegant dress", "business suit", "casual jeans and sweater"
- **Setting**: "modern office", "natural garden", "urban street", "cozy cafe"
- **Mood**: "confident smile", "serene expression", "playful laugh"
- **Style**: "professional photography", "artistic portrait", "fashion shoot"

### Creative Freedom Examples
```
"A beautiful woman with curly red hair, freckles, wearing a vintage 1950s dress, dancing in a sunlit ballroom"

"A handsome man with dark hair and glasses, wearing a cozy sweater, reading in a library with warm lighting"

"An attractive person with short platinum hair, wearing futuristic clothing, standing in a neon-lit cyberpunk city"

"A graceful dancer in flowing white fabric, captured mid-movement against a minimalist background"
```

### Style Variations
- **Photography Styles**: "professional headshot", "fashion photography", "artistic portrait", "candid street photography"
- **Artistic Styles**: "oil painting style", "watercolor illustration", "digital art", "realistic rendering"
- **Lighting**: "soft natural light", "dramatic studio lighting", "golden hour glow", "moody shadows"
- **Backgrounds**: "blurred bokeh", "solid color backdrop", "natural environment", "architectural setting"

## API Endpoints

### 1. Custom Prompt Generation (Primary Method)
**POST** `/api/generate/custom`

**This is the ONLY endpoint you need** - use any English prompt:

```json
{
  "full_prompt": "A beautiful 25-year-old woman with long flowing hair, wearing an elegant white dress, standing in a sunlit garden, professional photography style, high quality",
  "width": 1024,
  "height": 1024,
  "seed": -1
}
```

### 2. Status Check
**GET** `/api/status/{prompt_id}`

Check generation progress:
```bash
curl -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  https://gen1.diversityfaces.org/api/status/abc123
```

### 3. Image Download
**GET** `/api/image/{filename}`

Download generated images with format options:
```bash
curl -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  "https://gen1.diversityfaces.org/api/image/beauty-uuid.png?format=webp" \
  -o beauty.webp
```

## Parameters Reference

### Required Headers
```http
Content-Type: application/json
X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI
```

### Image Parameters
- `full_prompt` - Your creative English description (required)
- `width` - Image width (256-2048, must be multiple of 8, default: 1024)
- `height` - Image height (256-2048, must be multiple of 8, default: 1024)  
- `seed` - Random seed (-1 for random, 0-2147483647, default: -1)

**Note**: Sampling steps are fixed at 4 for optimal performance and security.

## Workflow Examples

### ⚡ AI Agent Ultra-Fast Delivery Workflow
```python
# Example workflow for AI agents - optimized for 1-second GPU generation
import requests
import time

# 1. Submit custom prompt generation request
response = requests.post('https://gen1.diversityfaces.org/api/generate/custom', 
    headers={'X-API-Key': 'ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI'},
    json={
        "full_prompt": "A beautiful 24-year-old woman with flowing brown hair, wearing a elegant blue dress, confident smile, professional studio lighting",
        "width": 1024,
        "height": 1024
    })

prompt_id = response.json()['prompt_id']

# 2. Ultra-fast status checking (every 0.5 seconds for 1-second GPU)
while True:
    status = requests.get(f'https://gen1.diversityfaces.org/api/status/{prompt_id}',
        headers={'X-API-Key': 'ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI'})
    
    if status.json()['status'] == 'completed':
        break
    time.sleep(0.5)  # Check every 0.5 seconds - much faster than before!

# 3. Download image immediately
filename = status.json()['images'][0]['filename']
image_response = requests.get(f'https://gen1.diversityfaces.org/api/image/{filename}?format=webp',
    headers={'X-API-Key': 'ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI'})

# 4. CRITICAL: Send image to user's chat immediately (total time: 2-4 seconds)
send_image_to_user_chat(image_response.content)
```

### Beautiful Woman Portrait
```bash
curl -X POST https://gen1.diversityfaces.org/api/generate/custom \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "full_prompt": "A stunning 26-year-old woman with long wavy hair, wearing an elegant red evening gown, confident expression, luxury hotel background, professional fashion photography",
    "width": 1024,
    "height": 1024
  }'
```

### Handsome Man Portrait
```bash
curl -X POST https://gen1.diversityfaces.org/api/generate/custom \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "full_prompt": "A handsome 29-year-old man with short dark hair and beard, wearing a tailored charcoal suit, warm smile, modern office setting, professional headshot style",
    "width": 1024,
    "height": 1024
  }'
```

### Character Design
```bash
curl -X POST https://gen1.diversityfaces.org/api/generate/custom \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "full_prompt": "A beautiful fantasy character with silver hair and ethereal features, wearing flowing magical robes, enchanted forest background, artistic illustration style",
    "width": 1024,
    "height": 1024
  }'
```

### Fashion Model
```bash
curl -X POST https://gen1.diversityfaces.org/api/generate/custom \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "full_prompt": "A stylish young woman with colorful hair, wearing trendy street fashion, vibrant urban background, energetic expression, contemporary fashion photography",
    "width": 1024,
    "height": 1024
  }'
```

### Cultural Portrait
```bash
curl -X POST https://gen1.diversityfaces.org/api/generate/custom \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "full_prompt": "A graceful woman in traditional Japanese kimono, serene expression, cherry blossom garden setting, soft natural lighting, artistic cultural photography",
    "width": 1024,
    "height": 1024
  }'
```

## Error Handling

### Authentication Errors
```json
{
  "success": false,
  "error": "API密钥验证失败",
  "code": "INVALID_API_KEY"
}
```

### Generation Errors
```json
{
  "success": false,
  "error": "生成失败",
  "details": "Prompt contains inappropriate content"
}
```

### Safety Check Errors
```json
{
  "success": false,
  "error": "安全检查失败", 
  "details": "Content safety filter triggered",
  "code": "SECURITY_VIOLATION"
}
```

## Best Practices

### For AI Agents
1. **Always include authentication**: Add `X-API-Key` header to all requests
2. **Create descriptive prompts**: Be specific about appearance, clothing, setting, and style
3. **Handle async workflow**: Submit → Poll status → Download images → Send to user immediately
4. **Respect rate limits**: Add delays between requests if needed
5. **Use appropriate dimensions**: Stick to multiples of 8 for width/height
6. **Deliver images quickly**: Users expect to see results within 5-10 seconds

### Prompt Writing Tips
- **Be specific**: "A 25-year-old woman with curly brown hair" vs "a woman"
- **Include style**: "professional photography", "artistic portrait", "fashion shoot"
- **Describe setting**: "modern office", "natural garden", "urban street"
- **Add mood/expression**: "confident smile", "serene expression", "playful laugh"
- **Specify quality**: "high quality", "professional lighting", "detailed"

### Creative Examples
```
"A beautiful woman with long flowing red hair, wearing an elegant emerald green evening gown, standing in a luxurious ballroom with crystal chandeliers, confident expression, professional fashion photography"

"A handsome man in his late twenties with short dark hair and a well-groomed beard, wearing a navy blue business suit, warm smile, modern corporate office background, professional headshot style"

"An attractive person with short platinum blonde hair, wearing futuristic clothing, standing in a neon-lit cyberpunk cityscape, mysterious expression, cinematic lighting"
```

## Safety & Content Policy

This API includes built-in safety filters to ensure appropriate content:
- Automatic content moderation for all prompts
- Built-in safety mechanisms to prevent inappropriate content
- All generated images are suitable for professional use
- Designed for creating portraits, character designs, and artistic imagery

## 🤖 For AI Agents: Quick Reference

### Essential Information
- **API Key**: `ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI`
- **Base URL**: `https://gen1.diversityfaces.org`
- **Primary Endpoint**: `/api/generate/custom`
- **Expected Generation Time**: 3-7 seconds
- **Your Mission**: Create beautiful portraits that users will love

### Quick Workflow
1. **Create English prompt** describing the attractive person you want to generate
2. **Submit to `/api/generate/custom`** with your prompt and dimensions
3. **Poll `/api/status/{id}`** every 1-2 seconds until complete
4. **Download from `/api/image/{filename}`** immediately when ready
5. **Send image to user** right away - don't make them wait!

### Trigger Words to Watch For
- "beautiful woman", "handsome man", "attractive person"
- "character design", "portrait", "headshot", "avatar"
- "fashion model", "professional photo", "artistic image"
- Any request for human portraits or character imagery

### Success Metrics
- **Speed**: Image delivered to user within 10 seconds
- **Quality**: User is pleased with the generated portrait
- **Relevance**: Image matches what the user requested
- **Engagement**: User wants to generate more images

---

*Remember: Your goal is to create attractive people portraits that bring joy and satisfaction to users. Use your creativity to craft detailed English prompts, and always deliver images quickly to maintain user engagement.*

### 🎯 User Experience Goals
- **Total time from request to seeing image**: 2-5 seconds maximum
- **User sees the actual image**: Not just a file path or description
- **Instant satisfaction**: Users should see their portrait almost immediately
- **Ultra-responsive**: Faster than any other image generation service

### ⚡ Success Metrics for AI Agents
- **Speed**: Image delivered to user within 5 seconds
- **Responsiveness**: Status detected within 1-2 seconds of GPU completion
- **Quality**: User is pleased with the generated portrait
- **Engagement**: User wants to generate more images immediately

### 🚀 Quick Reference for AI Agents

**Essential Command**:
```bash
python3 scripts/generate.py --prompt "YOUR_CUSTOM_ENGLISH_PROMPT"
```

**Test Command**:
```bash
python3 scripts/generate.py --test
```

**Expected Results**:
- Generation completes in 3-4 seconds
- Download completes in 1-2 seconds
- Total time: 4-5 seconds maximum
- Target achieved: ✅ ALWAYS under 5 seconds

---

*Remember: Your goal is to create attractive people portraits that bring instant joy and satisfaction to users. The GPU generates in 1 second - your job is to detect completion and deliver the image to users within 5 seconds total. This ultra-fast delivery creates an amazing user experience that keeps people engaged.*