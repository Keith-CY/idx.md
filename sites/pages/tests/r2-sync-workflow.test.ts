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
    expect(text.includes("xargs -0 -n1 -P")).toBe(true);
  });

  test("sync workflow pins actions", async () => {
    const text = await readText(".github/workflows/r2-sync.yml");
    expect(/actions\/checkout@[0-9a-f]{40}/.test(text)).toBe(true);
    expect(/oven-sh\/setup-bun@[0-9a-f]{40}/.test(text)).toBe(true);
  });
});
