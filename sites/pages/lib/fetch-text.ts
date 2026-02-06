const TEXT_DECODER = new TextDecoder("utf-8");

type FetchText = (url: string) => Promise<string | null>;
type CurlText = (url: string) => Promise<string | null>;

async function fetchTextViaFetch(url: string): Promise<string | null> {
  let response: Response;
  try {
    response = await fetch(url);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Fetch failed (${url}): ${message}`);
    return null;
  }

  if (!response.ok) {
    console.error(
      `Fetch failed (${url}): ${response.status} ${response.statusText}`,
    );
    return null;
  }

  const buffer = await response.arrayBuffer();
  return TEXT_DECODER.decode(buffer);
}

async function fetchTextViaCurl(url: string): Promise<string | null> {
  const escapedUrl = url.replaceAll("'", "'\\''");
  const process = Bun.spawn(
    ["/bin/zsh", "-lc", `curl -L --silent --show-error '${escapedUrl}'`],
    {
      stdout: "pipe",
      stderr: "pipe",
    },
  );

  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(process.stdout).text(),
    new Response(process.stderr).text(),
    process.exited,
  ]);

  if (exitCode !== 0) {
    const message = stderr.trim() || stdout.trim() || `exit ${exitCode}`;
    console.error(`Curl failed (${url}): ${message}`);
    return null;
  }

  return stdout;
}

export async function fetchTextWithCurlFallback(
  url: string,
  opts: {
    fetchText?: FetchText;
    curlText?: CurlText;
  } = {},
): Promise<string | null> {
  const fetchText = opts.fetchText ?? fetchTextViaFetch;
  const curlText = opts.curlText ?? fetchTextViaCurl;

  const primary = await fetchText(url);
  if (primary !== null) {
    return primary;
  }

  return curlText(url);
}
