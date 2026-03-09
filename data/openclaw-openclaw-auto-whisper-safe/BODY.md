---
name: auto-whisper-safe
version: 1.0.0
description: RAM-safe voice transcription with auto-chunking — works on 16GB machines without crashes
emoji: 🎙️
tags:
  - whisper
  - transcription
  - voice
  - audio
  - ram-safe
requires:
  bins:
    - whisper
    - ffmpeg
---

# Auto-Whisper Safe — RAM-Friendly Voice Transcription

Transcribe voice messages and long audio files using OpenAI Whisper **without crashing your machine**. Designed for 16GB RAM systems running other processes (like OpenClaw agents).

## The Problem

Whisper's `turbo` and `large` models use 6-10GB RAM. On a 16GB machine running OpenClaw + Ollama + other services, this causes OOM crashes. Existing Whisper skills don't handle this.

## The Solution

1. **Auto-detects audio length** via ffprobe
2. **Splits long audio** (>10min) into 10-min chunks automatically
3. **Uses `base` model** by default (~1.5GB RAM — safe on any 16GB machine)
4. **Merges transcripts** seamlessly — no gaps, no duplicates
5. **Cleans up** temp files automatically

## Usage

```bash
# Basic usage
./transcribe.sh /path/to/audio.ogg

# Custom model (if you have more RAM)
WHISPER_MODEL=small ./transcribe.sh /path/to/audio.ogg

# Custom language
WHISPER_LANG=en ./transcribe.sh /path/to/audio.ogg

# Custom output directory
./transcribe.sh /path/to/audio.ogg /path/to/output/
```

## RAM Usage by Model

| Model | RAM | Speed | Accuracy | Recommended For |
|-------|-----|-------|----------|-----------------|
| `tiny` | ~1GB | ⚡⚡⚡ | ★★ | Quick previews, low-RAM systems |
| `base` | ~1.5GB | ⚡⚡ | ★★★ | **Default — best balance** ✅ |
| `small` | ~2.5GB | ⚡ | ★★★★ | When accuracy matters more |
| `medium` | ~5GB | 🐢 | ★★★★★ | 32GB+ RAM only |
| `turbo` | ~6GB | 🐢🐢 | ★★★★★ | Dedicated transcription machines |

## OpenClaw Integration

Add to your agent's `BOOTSTRAP.md`:

```markdown
## Voice Message Handling

When you receive `<media:audio>`, ALWAYS transcribe first:

1. Run: `./skills/auto-whisper-safe/transcribe.sh <audio-path>`
2. Read the output transcript file
3. Respond based on the transcribed content

Do this automatically — voice messages are meant to be transcribed.
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `WHISPER_MODEL` | `base` | Whisper model size |
| `WHISPER_LANG` | `en` | Audio language (ISO code) |

## How Chunking Works

- Audio ≤10min → transcribed directly (no splitting)
- Audio >10min → split into 10-min segments via ffmpeg
- Each segment transcribed independently
- Transcripts concatenated in order
- Temp files cleaned up on exit (even on errors)

## Installation

```bash
# macOS
brew install openai-whisper ffmpeg

# Ubuntu/Debian
pip install openai-whisper
apt install ffmpeg

# Verify
whisper --help && ffmpeg -version
```

## Why This Over Other Whisper Skills

- ✅ **RAM-safe**: Won't crash your 16GB machine
- ✅ **Auto-chunking**: Handles 1-hour podcasts without issues
- ✅ **Cleanup**: No temp files left behind
- ✅ **Progress**: Shows chunk-by-chunk progress
- ✅ **Configurable**: Model + language via env vars
- ✅ **OpenClaw-native**: Drop-in for any agent's BOOTSTRAP.md

## Real-World Performance

Tested on Ubuntu 22.04, 16GB RAM, running OpenClaw (10 agents) + Ollama simultaneously:

| Audio Length | Model | RAM Peak | Time | Result |
|-------------|-------|----------|------|--------|
| 2 min voice memo | base | 1.4GB | ~15s | ✅ Perfect |
| 12 min podcast clip | base | 1.5GB (chunked) | ~90s | ✅ 2 chunks, seamless |
| 45 min interview | base | 1.5GB (chunked) | ~6min | ✅ 5 chunks, seamless |
| 2 min voice memo | tiny | 0.9GB | ~8s | ✅ Good enough for quick reads |

## Supported Audio Formats

ffmpeg handles the conversion, so virtually any format works:
- ✅ `.ogg` (Telegram voice messages)
- ✅ `.mp3`, `.m4a`, `.wav`, `.flac`
- ✅ `.webm` (browser recordings)
- ✅ `.opus` (WhatsApp voice messages)

## Changelog

### v1.0.0
- Initial release
- Auto-chunking for long audio (>10min)
- RAM-safe defaults (base model, 1.5GB)
- Progress tracking per chunk
- Automatic temp file cleanup
- Configurable model and language
