import { toR2Key } from "./lib/paths";

type Env = {
  IDX_MD: R2Bucket;
};

const OG_TITLE = "Open the index. Agents learn by browsing.";
const OG_DESCRIPTION =
  "idx.md is an open, agent-first knowledge index built entirely in plain Markdown. Just tell your Agents to start from idx.md, and then they can browse the library freely and learn whatever they find interesting.";
const OG_IMAGE_URL =
  "https://raw.githubusercontent.com/Keith-CY/idx.md/main/assets/og.png";

const CRAWLER_UA = /Slackbot|Slack-ImgProxy|Discordbot|Twitterbot|facebookexternalhit|LinkedInBot|WhatsApp|TelegramBot|Googlebot|bingbot|DuckDuckBot/i;

function shouldServeOg(url: URL, userAgent: string | null): boolean {
  if (url.searchParams.get("og") === "1") {
    return true;
  }
  if (!userAgent) {
    return false;
  }
  return CRAWLER_UA.test(userAgent);
}

function renderOgHtml(url: URL): string {
  const ogUrl = `${url.origin}${url.pathname}`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${OG_TITLE}</title>
    <meta property="og:title" content="${OG_TITLE}" />
    <meta property="og:description" content="${OG_DESCRIPTION}" />
    <meta property="og:image" content="${OG_IMAGE_URL}" />
    <meta property="og:url" content="${ogUrl}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </head>
  <body>
    <a href="${ogUrl}">${ogUrl}</a>
  </body>
</html>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (shouldServeOg(url, request.headers.get("user-agent"))) {
      return new Response(renderOgHtml(url), {
        status: 200,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=600",
        },
      });
    }
    const key = toR2Key(url.pathname);

    const object = await env.IDX_MD.get(key);
    if (!object) {
      return new Response("# Not Found\n\nThe requested markdown was not found.", {
        status: 404,
        headers: {
          "content-type": "text/markdown; charset=utf-8",
        },
      });
    }

    const headers = new Headers();
    if (typeof object.writeHttpMetadata === "function") {
      object.writeHttpMetadata(headers);
    }
    headers.set("content-type", "text/markdown; charset=utf-8");
    return new Response(object.body, { status: 200, headers });
  },
};
