import { describe, expect, test } from "bun:test";

async function readText(path: string): Promise<string> {
  return Bun.file(path).text();
}

describe("r2 sync workflow", () => {
  test("sync workflow targets main and production environment", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes("branches: [\"main\"]")).toBe(true);
    expect(text.includes("workflow_dispatch")).toBe(true);
    expect(text.includes("environment: production")).toBe(true);
  });

  test("sync workflow uses Cloudflare secrets and wrangler", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes("CLOUDFLARE_API_TOKEN")).toBe(true);
    expect(text.includes("CLOUDFLARE_ACCOUNT_ID")).toBe(true);
    expect(text.includes("wrangler r2 object put \"$BUCKET/$key\"")).toBe(true);
    expect(text.includes("--remote")).toBe(true);
  });

  test("sync workflow uses concurrency and retry controls", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes("UPLOAD_CONCURRENCY")).toBe(true);
    expect(text.includes("UPLOAD_RETRIES")).toBe(true);
    expect(text.includes("xargs -0 -P")).toBe(true);
  });

  test("sync workflow enforces per-file upload timeouts", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes("UPLOAD_FILE_TIMEOUT")).toBe(true);
    expect(text.includes('timeout "$UPLOAD_FILE_TIMEOUT"')).toBe(true);
  });

  test("sync workflow exports retry settings for upload subshells", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes("export BUCKET")).toBe(true);
    expect(text.includes("export UPLOAD_CONCURRENCY")).toBe(true);
    expect(text.includes("export UPLOAD_RETRIES")).toBe(true);
    expect(text.includes("export UPLOAD_SLEEP_BASE")).toBe(true);
    expect(text.includes("export UPLOAD_FILE_TIMEOUT")).toBe(true);
  });

  test("sync workflow avoids xargs -n with -I", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes("xargs -0 -P")).toBe(true);
    expect(text.includes("xargs -0 -n1 -P")).toBe(false);
  });

  test("sync workflow commits data to the repository", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes("contents: write")).toBe(true);
    expect(text.includes("git add data")).toBe(true);
    expect(text.includes("git commit")).toBe(true);
    expect(text.includes("git push")).toBe(true);
  });

  test("sync workflow caps runtime to 30 minutes", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes("timeout-minutes: 30")).toBe(true);
  });

  test("sync workflow checks content hash changes", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes("data_prev")).toBe(true);
    expect(text.includes("compare-content-hash.ts")).toBe(true);
    expect(text.includes("steps.compare.outputs.changed")).toBe(true);
  });

  test("sync workflow uploads only new or changed files", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(text.includes('cmp -s "$file" "$previous_file"')).toBe(true);
    expect(text.includes('previous_file="data_prev/$relative_path"')).toBe(true);
    expect(text.includes("No new or changed files to upload.")).toBe(true);
    expect(text.includes("find data -type f -print0")).toBe(true);
  });

  test("sync workflow pins actions", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(/actions\/checkout@[0-9a-f]{40}/.test(text)).toBe(true);
    expect(/oven-sh\/setup-bun@[0-9a-f]{40}/.test(text)).toBe(true);
  });
});
