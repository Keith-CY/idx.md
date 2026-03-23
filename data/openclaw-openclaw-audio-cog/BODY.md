---
name: audio-cog
description: AI audio generation powered by CellCog. Three voice providers (OpenAI, ElevenLabs, MiniMax), avatar cloned voices, sound effects, music generation up to 10 minutes. Professional audio creation with AI.
metadata:
  openclaw:
    emoji: "🎵"
author: CellCog
dependencies: [cellcog]
---

# Audio Cog - AI Audio Generation Powered by CellCog

Create professional audio with AI — voiceovers, music, sound effects, and personalized avatar voices.

CellCog provides **three voice providers**, each with different strengths. Choose based on your needs:

| Scenario | Provider | Why |
|----------|----------|-----|
| Standard narration/voiceover | OpenAI | Best voice style control, consistent quality |
| Emotional/dramatic delivery | ElevenLabs | Richest emotional range, supports emotion tags |
| Cloned voice (avatar) | MiniMax | Only provider with voice cloning support |
| Character voice with specific accent | ElevenLabs | 100+ diverse pre-made voices |
| Fine pitch/speed/volume control | MiniMax | Granular voice settings |

---

## Prerequisites

This skill requires the `cellcog` skill for SDK setup and API calls.

```bash
clawhub install cellcog
```

**Read the cellcog skill first** for SDK setup. This skill shows you what's possible.

---

## Voice Providers

### OpenAI (Default)

Best for standard narration, voiceovers, and single-speaker content with precise delivery control.

**Key strength**: Natural-language style instructions — describe the accent, tone, pacing, and emotion you want.

**8 built-in voices:**

| Voice | Gender | Characteristics |
|-------|--------|----------------|
| **cedar** | Male | Warm, resonant, authoritative, trustworthy |
| **marin** | Female | Bright, articulate, emotionally agile, professional |
| **ballad** | Male | Smooth, melodic, musical quality |
| **coral** | Female | Vibrant, lively, dynamic, spirited |
| **echo** | Male | Calm, measured, thoughtful, deliberate |
| **sage** | Female | Wise, contemplative, reflective |
| **shimmer** | Female | Soft, gentle, soothing, approachable |
| **verse** | Male | Poetic, rhythmic, artistic, expressive |

Best quality: **cedar** (male), **marin** (female).

**Style customization examples:**
- "Warm conversational tone, medium pace, slight enthusiasm when mentioning features. American accent."
- "Deep, hushed, enigmatic, with a slow deliberate cadence — true crime narrator style."
- "Heavy French accent, sophisticated yet friendly, moderate pacing with deliberate pauses."

---

### ElevenLabs

Best for emotional delivery, dramatic content, character voices, and audiobook narration.

**Key strength**: Emotion tags embedded directly in text — `[laughs]`, `[sighs]`, `[whispers]`, `[excited]`, `[sarcastic]`. Plus 100+ diverse pre-made voices.

**Emotion tags (use sparingly — 1-2 per paragraph):**

| Tag | Effect |
|-----|--------|
| `[laughs]` | Natural laughter |
| `[chuckles]` | Soft/brief laughter |
| `[sighs]` | Sighing |
| `[gasps]` | Surprise/shock |
| `[whispers]` | Whispering delivery |
| `[pause]` | Natural pause/beat |
| `[sad]`, `[happy]`, `[excited]`, `[angry]`, `[sarcastic]` | Emotional delivery |

**Example prompt:**
> "Generate speech using ElevenLabs with a warm British male voice:
> 'And then, just when everyone thought it was over... [pause] [whispers] it wasn't.'"

---

### MiniMax

Best for cloned voices (avatars) and fine-grained voice control.

**Key strength**: MiniMax Speech 2.8 HD — studio-grade audio quality. Supports avatar cloned voice IDs for personalized content, plus 17+ standard pre-made voices with granular speed, pitch, and volume control.

**Standard voices include:** `Deep_Voice_Man`, `Calm_Woman`, `Casual_Guy`, `Lively_Girl`, `Wise_Woman`, `Friendly_Person`, `Young_Knight`, `Elegant_Man`, and more.

**Voice settings:** emotion (happy/sad/angry/neutral/etc.), speed (0.5–2.0), volume (0–10), pitch (-12 to 12).

---

## Avatar / Cloned Voice

Users can create avatars on CellCog with their own cloned voice. When an avatar has a cloned voice, CellCog uses the MiniMax provider to generate speech that sounds like that person.

**How it works:**
- The user creates an avatar on cellcog.ai and uploads voice samples
- CellCog clones their voice using MiniMax Speech 2.8 HD
- Any audio request referencing that avatar uses their cloned voice

**Example prompt:**
> "Generate a voiceover using my avatar Luna's voice: 'Welcome to our quarterly update. I'm excited to share some incredible results with you today.'"

This is powerful for creating consistent, personalized content — marketing videos, podcast intros, course narration — all in the user's own voice.

---

## Sound Effects (SFX)

CellCog generates standalone sound effects from text descriptions. Royalty-free, 0.1 to 30 seconds.

**Example prompts:**
- "Generate a sound effect of heavy rain hitting a metal roof with occasional thunder, 10 seconds"
- "Create a crispy footsteps-on-fresh-snow sound effect, 5 seconds"
- "Generate an echoing door slam in a large empty warehouse"

**Tips for better SFX:**
- Be specific about textures and environment
- Specify duration when exact length matters
- For ambient audio longer than 30 seconds, generate a short loopable segment and extend with ffmpeg

---

## Music Generation

Create original music from text descriptions. 3 seconds to 10 minutes. Royalty-free.

**Capabilities:**
- Any genre or genre fusion
- Instrumental and vocal tracks (specify if you want vocals)
- Complex arrangements, mood transitions, and energy dynamics
- Describe what you want — the model handles music theory

**Example prompts:**
- "Create 2 minutes of calm lo-fi hip-hop background music with soft piano and mellow beats, 75 BPM"
- "Generate a 15-second upbeat tech podcast intro jingle"
- "Create 90 seconds of cinematic orchestral music — start soft and inspiring, build to a confident crescendo"
- "Generate a 3-minute pop song about summer adventures with female vocals"

For precise section-by-section control (exact timing per section), describe your composition plan in detail — CellCog handles the structure.

**All generated music is royalty-free** — use commercially without attribution or licensing fees.

---

## Multi-Language Support

All three voice providers support 40+ languages. Provide speech text in the target language:

English, Spanish, French, German, Italian, Portuguese, Chinese (Mandarin/Cantonese), Japanese, Korean, Hindi, Arabic, Russian, Polish, Dutch, Turkish, and many more.

---

## Chat Mode

**Use `chat_mode="agent"`** for all audio tasks. Audio generation executes efficiently in agent mode — no need for agent team.

---

## Tips for Better Audio

1. **Choose the right provider**: OpenAI for standard narration, ElevenLabs for emotional/dramatic, MiniMax for cloned voices
2. **Provide the complete script**: Write out exactly what should be spoken — don't say "something about our product"
3. **Include style instructions**: "Confident but warm", "slow and deliberate", "with slight excitement"
4. **For music**: Specify duration, mood, genre, and tempo (BPM if you know it)
5. **Pronunciation guidance**: For names or technical terms, add hints: "CellCog (pronounced SELL-kog)"
6. **For ElevenLabs emotion tags**: Use sparingly — 1-2 per paragraph. Tags affect all subsequent text until a new tag.
