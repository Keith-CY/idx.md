---
name: assemblyai-transcribe
description: >
  Transcribe, diarise, translate, post-process, and structure audio/video with AssemblyAI.
  Use this skill when the user wants AssemblyAI specifically, needs high-quality speech-to-text
  from a local file or URL, wants speaker labels or named speakers, language detection, subtitles,
  paragraph/sentence exports, topic/entity/sentiment extraction, Speech Understanding, or agent-friendly
  transcript output as Markdown or normalised JSON for downstream AI workflows.
compatibility: Requires Node.js 18+ with internet access and ASSEMBLYAI_API_KEY. Optional ASSEMBLYAI_BASE_URL / ASSEMBLYAI_LLM_BASE_URL for EU routing.
metadata:
  author: OpenAI
  version: "2.0.0"
  homepage: https://www.assemblyai.com/docs
  clawdbot:
    skillKey: assemblyai
    emoji: "🎙️"
    requires:
      bins:
        - node
      env:
        - ASSEMBLYAI_API_KEY
    primaryEnv: ASSEMBLYAI_API_KEY
---

# AssemblyAI transcription, Speech Understanding, and agent-friendly exports

Use this skill when the user wants **AssemblyAI** rather than generic transcription, or when the job benefits from AssemblyAI-specific capabilities such as:

- model routing across `universal-3-pro` and `universal-2`
- language detection and code switching
- diarisation plus **speaker name / role mapping**
- translation, custom formatting, or AssemblyAI speaker identification
- subtitles, paragraphs, sentences, topic / entity / sentiment tasks
- transcript output that is easy for **other agents** to consume as Markdown or normalised JSON

The skill is designed for AI agents like OpenClaw, not just end users. It provides:

1. **A no-dependency Node CLI** in `scripts/assemblyai.mjs` (and a compatibility wrapper at `assemblyai.mjs`)
2. **Bundled model/language knowledge** via `models` and `languages` commands
3. **Stable transcript output formats**
   - agent-friendly Markdown
   - normalised agent JSON
   - bundle manifests for downstream automation
4. **Speaker mapping workflows**
   - manual speaker/channel maps
   - AssemblyAI speaker identification
   - merged display names in both Markdown and JSON
5. **AssemblyAI LLM Gateway integration** for structured extraction from transcripts

## Use this skill in this order

### 1) Decide whether the user needs AssemblyAI-specific behaviour
If they just want “a transcript”, a generic solution may be enough. Reach for this skill when the user mentions AssemblyAI, wants a specific AssemblyAI feature, or needs the richer outputs and post-processing this skill provides.

### 2) Pick the best entry point

- **New transcription** → `transcribe`
- **Existing transcript id** → `get` or `wait`
- **Re-render existing saved JSON** → `format`
- **Post-process an existing transcript** → `understand`
- **Run transcript text through LLM Gateway** → `llm`
- **Need a quick capability lookup before deciding** → `models` or `languages`

### 3) Prefer the agent-friendly defaults
For most unknown-language or mixed-language jobs, prefer:

```bash
node {baseDir}/assemblyai.mjs transcribe INPUT   --bundle-dir ./assemblyai-out   --all-exports
```

Why:

- the CLI defaults to **auto-best** routing when models are not specified
- it writes a **manifest + multiple files** that agents can inspect without reparsing terminal output
- Markdown and agent JSON become available immediately for follow-on steps

## Quick-start recipes

### Best general default
Use this when the source language is unknown or could be outside the 6-language Universal-3-Pro set:

```bash
node {baseDir}/assemblyai.mjs transcribe ./meeting.mp3   --bundle-dir ./out   --all-exports
```

This defaults to model routing plus language detection unless the request already specifies a model or language.

### Best known-language accuracy
If the language is known and supported by Universal-3-Pro, prefer an explicit request:

```bash
node {baseDir}/assemblyai.mjs transcribe ./meeting.mp3   --speech-model universal-3-pro   --language-code en_us   --bundle-dir ./out
```

### Meeting / interview with speaker labels
```bash
node {baseDir}/assemblyai.mjs transcribe ./meeting.mp3   --speaker-labels   --bundle-dir ./out
```

### Add explicit speaker names or roles
Manual mapping:

```bash
node {baseDir}/assemblyai.mjs transcribe ./meeting.mp3   --speaker-labels   --speaker-map @assets/speaker-map.example.json   --bundle-dir ./out
```

AssemblyAI speaker identification:

```bash
node {baseDir}/assemblyai.mjs transcribe ./meeting.mp3   --speaker-labels   --speaker-type role   --known-speakers "host,guest"   --bundle-dir ./out
```

Or post-process an existing transcript:

```bash
node {baseDir}/assemblyai.mjs understand TRANSCRIPT_ID   --speaker-type name   --speaker-profiles @assets/speaker-profiles-name.example.json   --bundle-dir ./out
```

### Translation
```bash
node {baseDir}/assemblyai.mjs transcribe ./meeting.mp3   --translate-to de,fr   --match-original-utterance   --bundle-dir ./out
```

### Structured extraction through LLM Gateway
```bash
node {baseDir}/assemblyai.mjs llm TRANSCRIPT_ID   --prompt @assets/example-prompt.txt   --schema @assets/llm-json-schema.example.json   --out ./summary.json
```

## Command guidance

## `transcribe`
Use for local files or remote URLs.

- Local files are uploaded first.
- Public URLs are sent directly to AssemblyAI.
- Waits by default, then renders output.

Prefer `--bundle-dir` for anything longer than a trivial clip.

## `get` / `wait`
Use when you already have the transcript id. `wait` blocks until completion; `get` fetches immediately unless you add `--wait`.

## `format`
Use when you already saved:
- raw transcript JSON from AssemblyAI, or
- the normalised agent JSON produced by this skill

This is useful when you want to apply a new speaker map, re-render Markdown, or generate a fresh bundle without retranscribing.

## `understand`
Use when you need AssemblyAI **Speech Understanding** on an existing transcript:

- translation
- speaker identification
- custom formatting

This command fetches the transcript, merges in the returned understanding results, then renders updated Markdown / agent JSON / bundle outputs.

## `llm`
Use when the user wants:
- summaries
- extraction
- structured JSON
- downstream reasoning over the transcript

Prefer `--schema` when the next step is automated.

## Output strategy

### Best default for agents: bundle mode
`--bundle-dir` writes a directory containing:

- Markdown transcript
- agent JSON
- raw JSON
- optional paragraphs / sentences / subtitles
- a machine-readable manifest

This is usually better than dumping everything to stdout.

### Primary output kinds
Use `--export` to choose the main output:

- `markdown` (default)
- `agent-json`
- `json` / `raw-json`
- `text`
- `paragraphs`
- `sentences`
- `srt`
- `vtt`
- `manifest`

### Sidecar outputs
You can request extra files directly with:

- `--markdown-out`
- `--agent-json-out`
- `--raw-json-out`
- `--paragraphs-out`
- `--sentences-out`
- `--srt-out`
- `--vtt-out`
- `--understanding-json-out`

## Speaker mapping rules

Speaker display names are merged in this order:

1. manual `--speaker-map`
2. AssemblyAI speaker identification mapping
3. fallback generic names like `Speaker A` or `Channel 1`

This means you can let AssemblyAI identify speakers first, then still override individual display names later.

Example manual map file: `assets/speaker-map.example.json`

## Model and language lookup

Before choosing parameters, inspect the bundled reference data:

```bash
node {baseDir}/assemblyai.mjs models
node {baseDir}/assemblyai.mjs models --format json
node {baseDir}/assemblyai.mjs languages --model universal-3-pro
node {baseDir}/assemblyai.mjs languages --model universal-2 --codes --format json
```

The bundled data lives in:

- `assets/model-capabilities.json`
- `assets/language-codes.json`

## Important operating notes

- Keep API keys out of chat logs; use environment injection.
- Use the **EU** AssemblyAI base URL when the user explicitly needs EU processing.
- Uploads and transcript creation must use API keys from the **same AssemblyAI project**.
- Prefer `--bundle-dir` or `--out` for long outputs.
- The CLI is non-interactive and sends diagnostics to stderr, which makes it easier for agents to script reliably.
- Use raw `--config` or `--request` when you need a newly added AssemblyAI parameter that this skill has not exposed yet.

## Reference files

Read these when you need more depth:

- [Capabilities](references/capabilities.md)
- [Workflows and recipes](references/workflows.md)
- [Output formats](references/output-formats.md)
- [Speaker mapping](references/speaker-mapping.md)
- [LLM Gateway notes](references/llm-gateway.md)
- [Troubleshooting](references/troubleshooting.md)

## Key bundled files

- `assemblyai.mjs` — root wrapper for compatibility with the original skill
- `scripts/assemblyai.mjs` — main CLI
- `assets/speaker-map.example.json`
- `assets/speaker-profiles-name.example.json`
- `assets/speaker-profiles-role.example.json`
- `assets/custom-spelling.example.json`
- `assets/llm-json-schema.example.json`
- `assets/transcript-agent-json-schema.json`

## Sanity checks before finishing a task

- Did you pick the right region (`api.assemblyai.com` vs `api.eu.assemblyai.com`)?
- Did you choose a model strategy that matches the language situation?
- If speaker naming matters, did you enable diarisation and/or provide a speaker map?
- If the result will feed another agent, did you produce Markdown and/or agent JSON rather than only raw stdout?
- If the transcript will be machine-consumed, did you keep the manifest or explicit output filenames?
