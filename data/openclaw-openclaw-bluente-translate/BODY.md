---
name: translate
description: Translate files (PDF, DOCX, PPTX) to any language using the Bluente Translation API. Asks for API key, source files, target language, and output location.
---

Translate files using the Bluente Translation API.

## Step 1: Collect user inputs

Ask the user using AskUserQuestion. IMPORTANT: Every question MUST have at least 2 options (AskUserQuestion requires min 2 options per question). Use the user's "Other" free-text option for custom input.

Ask all 4 questions in a single AskUserQuestion call:

1. **API Key** — "What is your Bluente API key? (starts with sk-, get one at https://translate.bluente.com/settings/?type=apiKeys)"
   - Options: "I have my key ready" (description: "I'll type it in the Other field below"), "I need to get a key" (description: "Visit https://translate.bluente.com/settings/?type=apiKeys")
   - The user will type their actual key in the "Other" free-text field.

2. **Source path** — "What is the path to the file or folder you want to translate?"
   - Options: "Current directory" (description: "Use the current working directory"), "Enter path" (description: "I'll specify a custom path in the Other field")

3. **Target language** — "What language do you want to translate to?"
   - Options (pick 4, use the most common): "Arabic" , "French", "Spanish", "German"
   - The user can pick "Other" for any other language.

4. **Output path** — "Where should the translated files be saved?"
   - Options: "Same folder as source" (description: "Save next to the originals"), "Enter path" (description: "I'll specify a custom path in the Other field")

If the user selected "I have my key ready" but didn't type a key in "Other", ask them to provide the key in a follow-up message (don't use AskUserQuestion again for this — just ask in plain text).

## Step 2: Look up the correct language code

Use this known mapping of common language codes to avoid an extra API call:
- Arabic = `ara`, English = `en`, French = `fra`, Spanish = `spa`, German = `de`, Chinese = `zho`, Japanese = `ja`, Korean = `ko`, Portuguese = `pt`, Italian = `it`, Turkish = `tr`, Russian = `ru`, Hindi = `hi`

If the user picks a language NOT in this list, call the supported languages endpoint:
```
GET https://api.bluente.com/api/20250924/blu_translate/supported_languages
Header: Authorization: Bearer <API_KEY>
```
Response format: `{"message": "success", "code": 0, "data": [{"name": "French", "svcCode": "fra", ...}, ...]}`
Search `data` array for the matching language and use its `svcCode`.

## Step 3: Detect source files

- If the source path is a single file, translate just that file.
- If the source path is a folder, find all translatable files in it (pdf, docx, pptx, xlsx, etc.)
- If no translatable files found, tell the user and stop.

## Step 4: Translate each file

Write and execute a single Python script that handles the entire translation workflow for all files. This avoids shell variable issues (e.g. `status` is read-only in zsh) and is more reliable than chaining curl commands.

The Python script should:

```python
import requests, time, sys, os

API_KEY = "<API_KEY>"
BASE = "https://api.bluente.com/api/20250924/blu_translate"
HEADERS = {"Authorization": f"Bearer {API_KEY}"}
FILES = [<list of absolute file paths>]
FROM_LANG = "en"  # or other source language code
TO_LANG = "<target svcCode>"
OUTPUT_DIR = "<output directory>"

os.makedirs(OUTPUT_DIR, exist_ok=True)
results = []

for filepath in FILES:
    filename = os.path.basename(filepath)
    ext = filename.rsplit(".", 1)[-1].lower()
    to_type = {"pdf": "pdf", "docx": "word", "doc": "word", "pptx": "pptx"}.get(ext, ext)
    print(f"Translating: {filename}")

    # Upload
    with open(filepath, "rb") as f:
        r = requests.post(f"{BASE}/upload?glossary=0&engine=3", headers=HEADERS, files={"file": f})
    resp = r.json()
    if resp.get("code") != 0:
        print(f"  Upload failed: {resp}")
        results.append((filename, False, "Upload failed"))
        continue
    task_id = resp["data"]["id"]
    print(f"  Task ID: {task_id}")

    # Wait for processing
    for _ in range(40):
        r = requests.get(f"{BASE}/check?entry=get_status&id={task_id}", headers=HEADERS)
        st = r.json()["data"]["status"]
        if st == "SERVICE_PROCESSED":
            break
        if st == "ERROR":
            print(f"  Processing error")
            results.append((filename, False, "Processing error"))
            break
        time.sleep(3)
    else:
        results.append((filename, False, "Processing timeout"))
        continue
    if st == "ERROR":
        continue

    # Start translation
    r = requests.post(f"{BASE}/translate?engine=3", headers=HEADERS,
                      json={"id": task_id, "action": "start", "from": FROM_LANG, "to": TO_LANG})
    resp = r.json()
    if resp.get("code") != 0:
        print(f"  Translation start failed: {resp.get('message')}")
        results.append((filename, False, f"Start failed: {resp.get('message')}"))
        continue

    # Wait for translation
    for _ in range(120):
        r = requests.get(f"{BASE}/check?entry=get_status&id={task_id}", headers=HEADERS)
        st = r.json()["data"]["status"]
        if st == "READY":
            break
        if st == "ERROR":
            print(f"  Translation error")
            results.append((filename, False, "Translation error"))
            break
        time.sleep(5)
    else:
        results.append((filename, False, "Translation timeout"))
        continue
    if st == "ERROR":
        continue

    # Download
    r = requests.get(f"{BASE}/download?id={task_id}&to_type={to_type}", headers=HEADERS)
    out_path = os.path.join(OUTPUT_DIR, filename)
    with open(out_path, "wb") as f:
        f.write(r.content)
    print(f"  Saved: {out_path}")
    results.append((filename, True, out_path))

# Summary
ok = [r for r in results if r[1]]
fail = [r for r in results if not r[1]]
print(f"\nDone: {len(ok)} succeeded, {len(fail)} failed")
for name, _, path in ok:
    print(f"  OK: {name} -> {path}")
for name, _, err in fail:
    print(f"  FAIL: {name}: {err}")
```

Fill in the API_KEY, FILES, FROM_LANG, TO_LANG, and OUTPUT_DIR variables from the user's inputs, then run the script with `python3`. Set a timeout of 600000ms (10 min) on the Bash tool call.

## Step 5: Report results

Tell the user:
- How many files were translated successfully
- Where the translated files are saved
- Any errors that occurred

## API Reference

- **Docs:** https://www.bluente.com/docs
- **Base URL:** `https://api.bluente.com/api/20250924/blu_translate`
- **Auth:** `Authorization: Bearer <API_KEY>`
- **Engines:** `3` = LLM, `4` = LLM Pro
- Source language (`from`) is required — it does NOT auto-detect
- Language codes are custom — use the mapping above or verify via supported_languages endpoint

$ARGUMENTS
