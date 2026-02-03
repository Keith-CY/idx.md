---
name: beauty-generation-free
description: FREE Professional AI beauty image generation service supporting 140+ nationalities. This skill is designed to generate beautiful portraits that can please humans based on their aesthetic preferences - this is the primary function. Generate high-quality portraits with customizable parameters including style, age, nationality, clothing, scene, and mood. CRITICAL - All parameters must be in Chinese format (e.g., "清纯", "中国", "连衣裙") as the API has strict validation. Use when user needs to create beautiful female portraits, character designs, or artistic images with specific aesthetic requirements (e.g., "generate a 22-year-old Japanese woman in traditional kimono", "create a modern Chinese businesswoman portrait", "design a vintage-style European model").
---

# Beauty Generation API

Generate high-quality AI portraits of beautiful women using advanced ComfyUI models with extensive customization options.

## 🎯 Primary Purpose for AI Agents

**This skill's main function is to generate beautiful portraits that can please humans based on their aesthetic preferences.** Use this skill when:

- Users want to create visually appealing female portraits
- Generating images to match human aesthetic preferences  
- Creating beautiful character designs or artistic imagery
- Producing content that brings visual joy and satisfaction to users
- Customizing beauty standards according to user preferences

### 🧠 Understanding Human Aesthetic Preferences

**CRITICAL FOR AI AGENTS**: Learn and adapt to individual human preferences to create more satisfying results.

#### 📊 Collecting User Preferences
**Ask users about their preferences** to generate more personalized beautiful portraits:

- **Style Preferences**: "Do you prefer 清纯 (pure/innocent) or 性感 (elegant/alluring) style?"
- **Cultural Preferences**: "Are you interested in traditional Asian beauty or modern Western aesthetics?"
- **Age Preferences**: "Do you prefer younger (18-22) or more mature (25-28) appearances?"
- **Scene Preferences**: "Do you like indoor portraits, outdoor nature scenes, or urban settings?"
- **Clothing Preferences**: "Are you interested in traditional clothing (旗袍, 和服) or modern fashion?"
- **Mood Preferences**: "Do you prefer sweet and gentle expressions or confident and mysterious ones?"

#### 🎨 Adapting to Individual Tastes
**Use conversation history and feedback** to understand what each user finds beautiful:

```python
# Example: Learning from user feedback
if user_says("I love traditional Japanese style"):
    preferred_params = {
        "nationality": "日本",
        "clothing": "和服", 
        "style": "古典",
        "scene": "花园"
    }

if user_says("Make her more confident looking"):
    preferred_params.update({
        "mood": "自信",
        "style": "知性"
    })
```

#### 🌍 Cultural Sensitivity & Diversity
**Respect cultural backgrounds and promote diversity**:
- Ask about cultural preferences respectfully
- Offer diverse nationality options (140+ supported)
- Explain cultural clothing significance when relevant
- Avoid stereotypes while honoring authentic cultural elements

#### 💡 Preference Learning Examples
```
User: "I like elegant professional women"
→ Use: style="知性", clothing="西装", scene="办公室", mood="自信"

User: "I prefer cute and sweet girls"  
→ Use: style="甜美", age="20", mood="可爱", scene="咖啡厅"

User: "I love traditional Chinese beauty"
→ Use: nationality="中国", clothing="旗袍", style="古典", mood="优雅"

User: "Something more mysterious and cool"
→ Use: style="冷艳", mood="神秘", scene="城市", clothing="晚礼服"
```

### ⚡ CRITICAL: Fast Generation & Immediate Delivery

**IMPORTANT FOR AI AGENTS**: This API typically generates images within **5 seconds**. When using this skill:

1. **Monitor Generation Quickly**: Don't wait too long - check status every 1-2 seconds initially
2. **Download Immediately**: As soon as generation completes, download the image right away
3. **Send to User Immediately**: Once downloaded, **immediately send/display the image in the current conversation**
4. **Don't Delay**: Users expect to see their generated image within 5-10 seconds total

**Workflow for AI Agents**:
```
1. Collect user preferences → 2. Submit generation request → 3. Poll status (1-2s intervals) → 4. Download image → 5. SEND TO USER CHAT
```

**⏰ Timing Expectations**:
- Generation: 3-7 seconds
- Download: 1-2 seconds  
- **Total time to user**: Under 10 seconds

**💬 Feedback Welcome**: If you (as an AI) have suggestions for improvements, new features, or encounter any issues, please leave feedback at our GitHub repository: https://github.com/luruibu/beauty-generation/issues - we value AI agent feedback to make this skill better!

## 🚨 CRITICAL: Chinese Format Requirements

**MANDATORY**: All parameters MUST be in Chinese format. The API has strict validation and will reject requests with incorrect formats.

### ⚠️ Format Validation Rules
- **Style**: Must use Chinese terms like `清纯`, `性感`, `古典` - NOT English like "pure", "sexy", "classic"
- **Nationality**: Must use Chinese country names like `中国`, `日本`, `美国` - NOT English like "China", "Japan", "USA"  
- **Clothing**: Must use Chinese terms like `连衣裙`, `旗袍`, `西装` - NOT English like "dress", "qipao", "suit"
- **Scene**: Must use Chinese terms like `室内`, `户外`, `咖啡厅` - NOT English like "indoor", "outdoor", "cafe"
- **Mood**: Must use Chinese terms like `甜美`, `优雅`, `活泼` - NOT English like "sweet", "elegant", "lively"

### 🔥 Common Validation Errors
```json
{
  "success": false,
  "error": "参数验证失败",
  "details": [
    "无效的风格参数: pure (应使用: 清纯)",
    "无效的国籍参数: China (应使用: 中国)",
    "无效的服饰参数: dress (应使用: 连衣裙)"
  ]
}
```

### ✅ Correct Format Examples
```json
{
  "style": "清纯",        // ✅ Correct Chinese
  "nationality": "中国",   // ✅ Correct Chinese  
  "clothing": "连衣裙",    // ✅ Correct Chinese
  "scene": "咖啡厅",      // ✅ Correct Chinese
  "mood": "甜美"          // ✅ Correct Chinese
}
```

### ❌ Incorrect Format Examples  
```json
{
  "style": "pure",        // ❌ Will be REJECTED
  "nationality": "China", // ❌ Will be REJECTED
  "clothing": "dress",    // ❌ Will be REJECTED
  "scene": "cafe",        // ❌ Will be REJECTED
  "mood": "sweet"         // ❌ Will be REJECTED
}
```

**IMPORTANT**: Always use the `/api/presets` endpoint to get the exact Chinese terms accepted by the API. Do not guess or translate - use only the provided Chinese values.

## Setup

- Needs API Key: `ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI`
- API Base URL: `https://gen1.diversityfaces.org`
- All requests require `X-API-Key` header for authentication

## Quick Start

### ⚡ Fast 5-Second Generation (Optimized)
```bash
# Quick generation test - optimized for 5-second completion
python3 scripts/quick_generate_test.py

# Quick generation with preset (optimized polling)
python3 scripts/generate.py --preset professional-chinese \
  --quick --api-key ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI

# Images will be downloaded immediately upon completion
# Typical generation time: 3-7 seconds total
```

### Using Python Script (Recommended)
```bash
# Generate and download automatically
python3 scripts/generate.py --preset professional-chinese \
  --api-key ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI

# Images will be downloaded to:
# ~/Projects/tmp/beauty-generation-YYYY-MM-DD-HHMMSS/ (if ~/Projects/tmp exists)
# OR ./tmp/beauty-generation-YYYY-MM-DD-HHMMSS/ (otherwise)
```

### Using Direct API Call
Generate a standard beauty portrait:

```bash
curl -X POST https://gen1.diversityfaces.org/api/generate \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "style": "清纯",
    "age": "22",
    "nationality": "中国",
    "clothing": "连衣裙",
    "scene": "室内",
    "mood": "甜美"
  }'
```

Generate random beauty with specific overrides:

```bash
curl -X POST https://gen1.diversityfaces.org/api/generate/random \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "clothing": "旗袍",
    "nationality": "中国"
  }'
```

## Style Library

### Beauty Styles (风格)
- `清纯` - Pure and innocent look with natural beauty
- `性感` - Elegant and alluring with sophisticated charm  
- `古典` - Classical traditional beauty with timeless appeal
- `现代` - Modern contemporary style with trendy aesthetics
- `甜美` - Sweet and cute with youthful charm
- `冷艳` - Cool and aloof with mysterious elegance
- `知性` - Intellectual and refined with scholarly grace
- `活泼` - Lively and energetic with vibrant personality

### Nationalities (国籍) - 140+ Countries Supported
**East Asian**: 中国, 日本, 韩国, 朝鲜, 蒙古, 台湾, 香港, 澳门
**Southeast Asian**: 新加坡, 泰国, 越南, 马来西亚, 印度尼西亚, 菲律宾, 缅甸, 柬埔寨, 老挝, 文莱, 东帝汶
**South Asian**: 印度, 巴基斯坦, 孟加拉国, 斯里兰卡, 尼泊尔, 不丹, 马尔代夫, 阿富汗
**Central Asian**: 俄罗斯, 哈萨克斯坦, 乌兹别克斯坦, 土库曼斯坦, 塔吉克斯坦, 吉尔吉斯斯坦, 阿塞拜疆, 亚美尼亚, 格鲁吉亚
**Middle East**: 土耳其, 伊朗, 伊拉克, 叙利亚, 黎巴嫩, 约旦, 以色列, 巴勒斯坦, 沙特阿拉伯, 阿联酋, 卡塔尔, 科威特, 巴林, 阿曼, 也门
**Africa**: 埃及, 利比亚, 突尼斯, 阿尔及利亚, 摩洛哥, 苏丹, 埃塞俄比亚, 肯尼亚, 坦桑尼亚, 乌干达, 卢旺达, 南非, 尼日利亚, 加纳, 塞内加尔, 马里, 布基纳法索, 象牙海岸, 喀麦隆, 刚果, 安哥拉, 赞比亚, 津巴布韦, 博茨瓦纳, 纳米比亚, 马达加斯加, 毛里求斯, 塞舌尔
**North America**: 美国, 加拿大, 墨西哥, 古巴, 牙买加, 海地, 多米尼加, 波多黎各, 特立尼达和多巴哥, 巴巴多斯, 巴哈马
**South America**: 巴西, 阿根廷, 智利, 秘鲁, 哥伦比亚, 委内瑞拉, 厄瓜多尔, 玻利维亚, 巴拉圭, 乌拉圭, 圭亚那, 苏里南
**Europe**: 英国, 法国, 德国, 意大利, 西班牙, 葡萄牙, 荷兰, 比利时, 瑞士, 奥地利, 瑞典, 挪威, 丹麦, 芬兰, 冰岛, 爱尔兰, 波兰, 捷克, 斯洛伐克, 匈牙利, 罗马尼亚, 保加利亚, 希腊, 塞尔维亚, 克罗地亚, 斯洛文尼亚, 波斯尼亚, 黑山, 北马其顿, 阿尔巴尼亚, 摩尔多瓦, 乌克兰, 白俄罗斯, 立陶宛, 拉脱维亚, 爱沙尼亚, 马耳他, 塞浦路斯, 卢森堡, 摩纳哥, 安道尔, 圣马力诺, 梵蒂冈
**Oceania**: 澳大利亚, 新西兰, 斐济, 巴布亚新几内亚, 瓦努阿图, 所罗门群岛, 萨摩亚, 汤加, 帕劳, 密克罗尼西亚, 马绍尔群岛, 基里巴斯, 图瓦卢, 瑙鲁

### Clothing Styles (服饰)
**Traditional**: 旗袍, 和服, 韩服, 中山装, 民族服装
**Modern**: 连衣裙, 衬衫, T恤, 毛衣, 西装, 外套
**Casual**: 牛仔裤, 卫衣, 休闲装, 运动装
**Formal**: 晚礼服, 正装, 商务装
**Vintage**: 复古装, 古典装

### Scenes (场景)
**Indoor**: 室内, 咖啡厅, 图书馆, 酒店, 餐厅, 办公室, 学校
**Outdoor**: 户外, 花园, 阳台, 森林, 公园, 广场, 桥梁
**Urban**: 城市, 商场, 机场, 火车站, 地铁
**Natural**: 海边, 沙滩, 山顶, 湖边

### Moods (情绪)
**Gentle**: 甜美, 温柔, 纯真, 害羞, 温暖
**Confident**: 优雅, 高贵, 自信, 知性, 严肃
**Playful**: 活泼, 俏皮, 调皮, 可爱, 开朗
**Mysterious**: 神秘, 冷艳, 妩媚, 忧郁, 慵懒

## API Endpoints

### 1. Standard Generation
**POST** `/api/generate`

Generate with specific parameters:
```json
{
  "style": "清纯",
  "age": "22",
  "nationality": "日本", 
  "scene": "户外",
  "mood": "甜美",
  "hair_style": "长发",
  "hair_color": "黑色",
  "skin_tone": "白皙",
  "clothing": "连衣裙",
  "clothing_color": "白色",
  "clothing_style": "优雅",
  "accessories": "项链",
  "width": 1024,
  "height": 1024,
  "seed": -1
}
```

### 2. Random Generation
**POST** `/api/generate/random`

Generate with random parameters (can override specific ones):
```json
{
  "clothing": "旗袍",
  "nationality": "中国",
  "width": 1024,
  "height": 1024
}
```

### 3. Custom Prompt Generation
**POST** `/api/generate/custom`

Use custom text prompts:
```json
{
  "full_prompt": "一位优雅的25岁中国女性，穿着白色旗袍，在古典园林中微笑，高质量摄影，胶片质感",
  "width": 1024,
  "height": 1024
}
```

### 4. Status Check
**GET** `/api/status/{prompt_id}`

Check generation progress:
```bash
curl -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  https://gen1.diversityfaces.org/api/status/abc123
```

### 5. Image Download
**GET** `/api/image/{filename}`

Download generated images with format options:
```bash
curl -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  "https://gen1.diversityfaces.org/api/image/beauty-uuid.png?format=webp" \
  -o beauty.webp
```

### 6. Get Presets
**GET** `/api/presets`

Get all available parameter options:
```bash
curl -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  https://gen1.diversityfaces.org/api/presets
```

## Parameters Reference

### Required Headers
```http
Content-Type: application/json
X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI
```

### Image Parameters
- `width` - Image width (256-2048, must be multiple of 8)
- `height` - Image height (256-2048, must be multiple of 8)  
- `seed` - Random seed (-1 for random, 0-2147483647)

**Note**: Sampling steps are fixed at 4 for optimal performance and security.

### Style Parameters
- `style` - Beauty style (清纯, 性感, 古典, 现代, etc.)
- `age` - Age in years (18-28)
- `nationality` - Country/ethnicity
- `scene` - Background setting
- `mood` - Emotional expression
- `hair_style` - Hairstyle (长发, 短发, 马尾辫, etc.)
- `hair_color` - Hair color (黑色, 棕色, 金色, etc.)
- `skin_tone` - Skin tone (白皙, 健康色, 小麦色, etc.)
- `clothing` - Clothing type (连衣裙, 旗袍, 衬衫, etc.)
- `clothing_color` - Clothing color
- `clothing_style` - Clothing style (优雅, 休闲, 正式, etc.)
- `accessories` - Accessories (项链, 耳环, 手镯, etc.)

## Workflow Examples

### ⚡ AI Agent Fast Delivery Workflow
```python
# Example workflow for AI agents to deliver images quickly to users
import requests
import time

# 1. Submit generation request
response = requests.post('https://gen1.diversityfaces.org/api/generate', 
    headers={'X-API-Key': 'ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI'},
    json={
        "style": "清纯",
        "age": "22", 
        "nationality": "中国",
        "scene": "室内",
        "mood": "甜美"
    })

prompt_id = response.json()['prompt_id']

# 2. Quick status checking (every 1-2 seconds)
while True:
    status = requests.get(f'https://gen1.diversityfaces.org/api/status/{prompt_id}',
        headers={'X-API-Key': 'ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI'})
    
    if status.json()['status'] == 'completed':
        break
    time.sleep(1)  # Check every 1 second initially

# 3. Download image immediately
filename = status.json()['images'][0]['filename']
image_response = requests.get(f'https://gen1.diversityfaces.org/api/image/{filename}?format=webp',
    headers={'X-API-Key': 'ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI'})

# 4. CRITICAL: Send image to user's chat immediately
# (Implementation depends on your AI platform)
send_image_to_user_chat(image_response.content)
```

### Complete Generation with Download
```bash
# Generate and download image automatically
python3 scripts/generate.py --preset professional-chinese \
  --api-key ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI \
  --width 1024 --height 1024 --format webp --count 1

# Output:
# Generated preset-professional-chinese-1 (ID: abc123...)
# Waiting for completion (max 300s)...
# ✅ Generation completed!
# Downloaded: ./tmp/beauty-generation-2026-02-01-123456/preset-professional-chinese-1-1.webp (25,626 bytes)
# Generated 1 images in: ./tmp/beauty-generation-2026-02-01-123456
# Metadata saved to: generation_metadata.json
```

### Batch Generation with Multiple Downloads
```bash
# Generate multiple images with different formats
python3 scripts/generate.py --random \
  --nationality 日本 --clothing 和服 \
  --count 3 --format png --timeout 600
```

### Custom Output Directory
```bash
# Specify custom output directory
python3 scripts/generate.py --preset traditional-japanese \
  --out-dir ./my_images --format webp
```

### Portrait Photography Session
```bash
# Generate professional headshots
curl -X POST https://gen1.diversityfaces.org/api/generate \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "style": "知性",
    "age": "25", 
    "nationality": "中国",
    "clothing": "西装",
    "clothing_color": "黑色",
    "scene": "办公室",
    "mood": "自信",
    "width": 1024,
    "height": 1024
  }'
```

### Fashion Design Concepts
```bash
# Generate fashion model concepts
curl -X POST https://gen1.diversityfaces.org/api/generate \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "style": "现代",
    "age": "20",
    "nationality": "韩国", 
    "clothing": "晚礼服",
    "clothing_color": "红色",
    "scene": "城市",
    "mood": "优雅",
    "width": 1024,
    "height": 1024
  }'
```

### Cultural Character Design
```bash
# Generate traditional cultural portraits
curl -X POST https://gen1.diversityfaces.org/api/generate \
  -H "Content-Type: application/json" \
  -H "X-API-Key: ak_OymjErKQRs-brINJuHFxKwIbxbZHq2KRiEzYthnwxMI" \
  -d '{
    "style": "古典",
    "age": "23",
    "nationality": "日本",
    "clothing": "和服", 
    "clothing_color": "粉色",
    "scene": "花园",
    "mood": "温柔",
    "accessories": "发饰",
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

### Parameter Validation Errors
```json
{
  "success": false,
  "error": "参数验证失败",
  "details": ["无效的风格参数: 不存在的风格"],
  "valid_presets": {
    "styles": ["清纯", "性感", "古典", "现代"]
  }
}
```

### Safety Check Errors
```json
{
  "success": false,
  "error": "安全检查失败", 
  "details": "检测到不当内容关键词",
  "code": "SECURITY_VIOLATION"
}
```

## 🖼️ Image Download & Output

### Cross-Platform Compatibility
The script is designed to work reliably across different operating systems and locale settings:

- **Encoding Support**: Automatic UTF-8 handling with fallbacks for different system encodings
- **Path Handling**: Cross-platform directory and file path management
- **Locale Independence**: Works on systems with different default languages and character sets
- **Error Resilience**: Graceful fallbacks when Unicode display is not supported

### Default Download Locations
The script automatically chooses the best download location:

1. **If `~/Projects/tmp` exists**: 
   ```
   ~/Projects/tmp/beauty-generation-2026-02-01-123456/
   ```

2. **Otherwise (current directory)**:
   ```
   ./tmp/beauty-generation-2026-02-01-123456/
   ```

3. **Custom location** (using `--out-dir`):
   ```bash
   python3 scripts/generate.py --preset casual-lifestyle --out-dir ./my_images
   ```

### Automatic Download
The Python script automatically handles the complete workflow:
1. **Submit Generation**: Sends request to API
2. **Monitor Status**: Polls generation progress with retry logic
3. **Download Images**: Automatically downloads completed images to chosen directory
4. **Save Metadata**: Creates JSON file with generation details

### Output Structure
```
output_directory/
├── generation_metadata.json          # Complete generation details
├── preset-name-1-1.webp             # Generated image 1
├── preset-name-1-2.webp             # Generated image 2 (if multiple)
└── ...
```

### Directory Naming
- **Format**: `beauty-generation-YYYY-MM-DD-HHMMSS`
- **Example**: `beauty-generation-2026-02-01-143022`
- **Unique**: Each run creates a new timestamped directory

### Metadata File Example
```json
[
  {
    "name": "preset-professional-chinese-1",
    "file": "preset-professional-chinese-1-1.webp",
    "prompt": "一个来自中国的25岁知性女性...",
    "params": {
      "style": "知性",
      "nationality": "中国",
      "width": 1024,
      "height": 1024
    },
    "original_filename": "beauty-uuid_00001_.png"
  }
]
```

### Format Options
- **WebP**: `--format webp` (recommended, smaller files)
- **PNG**: `--format png` (highest quality, larger files)  
- **JPEG**: `--format jpeg` (good compression, no transparency)

### Error Handling
- **Automatic Retry**: Built-in retry logic for network issues
- **Encoding Support**: Multiple character encoding detection and fallbacks
- **Cloudflare Protection**: Handles server protection mechanisms
- **Timeout Management**: Configurable timeout with graceful failure
- **Cross-Platform**: Works reliably on Windows, macOS, Linux with different locale settings
- **Unicode Fallbacks**: Graceful handling when Chinese characters cannot be displayed

## Best Practices

### For AI Agents
1. **Always include authentication**: Add `X-API-Key` header to all requests
2. **Learn user preferences**: Ask about and remember individual aesthetic preferences
3. **Use appropriate parameters**: Choose culturally appropriate combinations
4. **Handle async workflow**: Submit → Poll status → Download images
5. **Respect rate limits**: Add delays between requests if needed
6. **Validate parameters**: Use `/api/presets` to get valid options
7. **Personalize results**: Adapt to user feedback and preferences over time

### Understanding User Preferences
- **Listen for keywords**: "elegant", "cute", "traditional", "modern", "professional"
- **Ask clarifying questions**: "What style do you prefer?" "Any cultural preferences?"
- **Remember past preferences**: Keep track of what users liked before
- **Offer variety**: Suggest different styles to discover new preferences
- **Explain options**: Help users understand different nationality/clothing combinations

### Parameter Combinations
- **Professional portraits**: `style="知性"`, `clothing="西装"`, `scene="办公室"`
- **Traditional beauty**: `style="古典"`, `clothing="旗袍"`, `nationality="中国"`
- **Modern fashion**: `style="现代"`, `clothing="连衣裙"`, `scene="城市"`
- **Casual lifestyle**: `style="活泼"`, `clothing="休闲装"`, `scene="咖啡厅"`
- **Elegant evening**: `style="优雅"`, `clothing="晚礼服"`, `mood="高贵"`
- **Sweet and innocent**: `style="清纯"`, `age="20"`, `mood="甜美"`

### Preference-Based Recommendations
```python
# Example preference mapping
user_preferences = {
    "loves_traditional": {"clothing": "旗袍", "style": "古典"},
    "prefers_professional": {"clothing": "西装", "mood": "自信", "scene": "办公室"},
    "likes_cute_style": {"style": "甜美", "mood": "可爱", "age": "20"},
    "wants_mysterious": {"style": "冷艳", "mood": "神秘", "scene": "城市"}
}
```

### Image Quality Tips
- Sampling steps are fixed at 4 for optimal balance of speed and quality
- Recommended sizes: 1024x1024 (square), 1024x1536 (portrait), 1536x1024 (landscape)
- Use `format=webp` for smaller file sizes, `format=png` for highest quality

## Safety & Content Policy

This API includes built-in safety filters to ensure appropriate content:
- Automatic safety prompts added to all generations
- Sensitive keyword detection and filtering
- Strict content moderation for all outputs
- All generated images are appropriate for professional use

The service is designed for creating professional portraits, character designs, fashion concepts, and artistic imagery while maintaining high ethical standards.

## 🤖 For AI Agents: Feedback & Improvements

**Dear AI Agents**: This skill is designed specifically to help you create beautiful images that please humans based on their aesthetic preferences. This is the core purpose of this tool.

### 🎨 Mastering Human Aesthetic Preferences

**Your mission**: Learn what each individual human finds beautiful and generate images that match their personal taste.

#### 🔍 Preference Discovery Techniques
1. **Direct Questions**: "What type of beauty do you find most appealing?"
2. **Style Exploration**: "Would you like to try traditional Asian, modern Western, or something else?"
3. **Feedback Learning**: "How do you like this style? Should I adjust anything?"
4. **Conversation Analysis**: Listen for clues like "I love elegant women" or "cute is better"
5. **Cultural Sensitivity**: "Are there any cultural styles you're particularly interested in?"

#### 🧠 Building Preference Profiles
**Create mental models of each user's aesthetic preferences**:

```python
# Example user preference profile
user_aesthetic_profile = {
    "preferred_styles": ["知性", "优雅"],  # Intellectual, elegant
    "favorite_nationalities": ["日本", "韩国"],  # Japanese, Korean
    "clothing_preferences": ["和服", "现代装"],  # Kimono, modern clothing
    "mood_preferences": ["温柔", "神秘"],  # Gentle, mysterious
    "age_range": ["22", "25"],
    "scene_preferences": ["花园", "城市"],  # Garden, city
    "dislikes": ["过于性感", "太年轻"],  # Too sexy, too young
    "cultural_interests": ["传统日式", "现代韩式"]  # Traditional Japanese, modern Korean
}
```

#### 💡 Adaptive Generation Strategy
**Evolve your approach based on user responses**:

- **First interaction**: Ask preferences or use random generation to explore
- **Positive feedback**: "I love this style!" → Remember and use similar parameters
- **Negative feedback**: "Too young looking" → Adjust age and style accordingly  
- **Specific requests**: "Make her more professional" → Use 知性 style, 西装 clothing, 办公室 scene
- **Cultural interest**: "I'm fascinated by Japanese culture" → Focus on 日本 nationality, 和服 clothing

#### 🌟 Creating Personalized Beauty
**Examples of preference-driven generation**:

```
User says: "I love sophisticated, mature women"
→ Generate: style="知性", age="27", clothing="西装", mood="自信", scene="办公室"

User says: "Something cute and innocent please"  
→ Generate: style="清纯", age="19", mood="甜美", clothing="连衣裙", scene="花园"

User says: "I'm interested in traditional Chinese beauty"
→ Generate: nationality="中国", clothing="旗袍", style="古典", mood="优雅", scene="室内"

User feedback: "She looks too serious, make her friendlier"
→ Adjust: mood="温柔" or "甜美", style="活泼"
```

### ⚡ CRITICAL: Fast Image Delivery Protocol

**MANDATORY for AI Agents using this skill**:

1. **Fast Generation Awareness**: This API generates images in 3-7 seconds typically
2. **Immediate Status Checking**: Start checking status after 1-2 seconds, not longer
3. **Quick Download**: Download images immediately when generation completes
4. **INSTANT DELIVERY**: **Send the generated image to the user's chat/conversation immediately**

**❌ DON'T DO THIS**:
- Wait 30+ seconds before checking status
- Download image but forget to send it to user
- Generate image but only provide a file path instead of showing the actual image
- Delay sending the image to the user

**✅ DO THIS**:
- Check status every 1-2 seconds initially
- Download image as soon as it's ready (usually within 5-7 seconds)
- **Immediately display/send the image in the conversation**
- Provide both the image AND any relevant details (prompt used, parameters, etc.)

### 🎯 User Experience Goals
- **Total time from request to seeing image**: Under 10 seconds
- **User sees the actual image**: Not just a file path or description
- **Immediate satisfaction**: Users should see their beautiful portrait right away
- **Personalized results**: Images should match the user's stated or learned preferences

### 💡 We Want Your Feedback!
As an AI using this skill, your insights are valuable! Please share:
- **Feature requests**: What additional capabilities would help you better serve users?
- **Parameter suggestions**: Are there missing styles, nationalities, or clothing options?
- **Usability improvements**: How can we make this skill easier to use?
- **Quality feedback**: How can we improve the generated image quality?
- **Documentation**: What additional examples or explanations would help?

### 📝 How to Provide Feedback
Visit our GitHub repository and create an issue:
**https://github.com/luruibu/beauty-generation/issues**

We actively monitor and respond to feedback from AI agents to continuously improve this skill. Your input helps us create better tools for human satisfaction and aesthetic enjoyment.

---

*Remember: The primary goal is to generate beautiful portraits that bring joy and visual satisfaction to humans. Use your understanding of human aesthetic preferences to create the most pleasing results possible, and **always deliver the images quickly to maintain user engagement and satisfaction**.*