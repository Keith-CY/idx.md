import { toR2Key } from "./lib/paths";

type Env = {
  IDX_MD: R2Bucket;
};

const OG_TITLE = "Open the index. Agents learn by browsing.";
const OG_DESCRIPTION =
  "idx.md is an open, agent-first knowledge index built entirely in plain Markdown. Just tell your Agents to start from idx.md, and then they can browse the library freely and learn whatever they find interesting.";
const OG_IMAGE_SOURCE_URL =
  "https://raw.githubusercontent.com/Keith-CY/idx.md/main/assets/og.jpg";
const VARY_USER_AGENT = "User-Agent";

// Social link unfurlers should get OG/Twitter meta HTML. Search crawlers should index the
// actual markdown instead, so keep them out of this list.
const SOCIAL_PREVIEW_UA =
  /Slackbot|Slack-ImgProxy|Discordbot|Twitterbot|facebookexternalhit|LinkedInBot|WhatsApp|TelegramBot/i;

function shouldServeOg(url: URL, userAgent: string | null): boolean {
  if (url.searchParams.get("og") === "1") {
    return true;
  }
  if (!userAgent) {
    return false;
  }
  return SOCIAL_PREVIEW_UA.test(userAgent);
}

function setVaryUserAgent(headers: Headers): Headers {
  const existing = headers.get("vary");
  if (!existing) {
    headers.set("vary", VARY_USER_AGENT);
    return headers;
  }

  const values = existing
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  if (!values.includes("user-agent")) {
    headers.set("vary", `${existing}, ${VARY_USER_AGENT}`);
  }

  return headers;
}

async function proxyOgImage(): Promise<Response> {
  const upstream = await fetch(OG_IMAGE_SOURCE_URL);
  if (!upstream.ok || !upstream.body) {
    return new Response("Failed to fetch OG image.", { status: 502 });
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      "content-type": upstream.headers.get("content-type") ?? "image/jpeg",
      "cache-control": "public, max-age=86400",
    },
  });
}

function renderOgHtml(url: URL): string {
  const ogUrl = `${url.origin}${url.pathname}`;
  const ogImageUrl = `${url.origin}/og.jpg`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${OG_TITLE}</title>
    <meta property="og:title" content="${OG_TITLE}" />
    <meta property="og:description" content="${OG_DESCRIPTION}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:url" content="${ogUrl}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content="${OG_TITLE}" />
    <meta name="twitter:description" content="${OG_DESCRIPTION}" />
    <meta name="twitter:image" content="${ogImageUrl}" />
    <meta name="twitter:url" content="${ogUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
  </head>
  <body>
    <a href="${ogUrl}">${ogUrl}</a>
  </body>
</html>`;
}

function renderRobotsTxt(url: URL): string {
  const origin = url.origin;
  return [
    "User-agent: *",
    "Allow: /",
    "Disallow: /data/reports/",
    `Sitemap: ${origin}/sitemap.xml`,
    "",
  ].join("\n");
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/og.jpg") {
      return proxyOgImage();
    }

    if (url.pathname === "/robots.txt") {
      return new Response(renderRobotsTxt(url), {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=3600",
        },
      });
    }

    if (url.pathname === "/sitemap.xml") {
      const object = await env.IDX_MD.get("data/sitemap.xml");
      if (!object) {
        return new Response("Not Found", {
          status: 404,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=60",
          },
        });
      }

      const headers = new Headers();
      if (typeof object.writeHttpMetadata === "function") {
        object.writeHttpMetadata(headers);
      }
      headers.set("content-type", "application/xml; charset=utf-8");
      if (!headers.has("cache-control")) {
        headers.set("cache-control", "public, max-age=3600");
      }
      setVaryUserAgent(headers);
      return new Response(object.body, { status: 200, headers });
    }

    if (shouldServeOg(url, request.headers.get("user-agent"))) {
      const headers = setVaryUserAgent(
        new Headers({
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=600",
        }),
      );

      return new Response(renderOgHtml(url), {
        status: 200,
        headers,
      });
    }
    const key = toR2Key(url.pathname);

    const object = await env.IDX_MD.get(key);
    if (!object) {
      return new Response("# Not Found\n\nThe requested markdown was not found.", {
        status: 404,
        headers: setVaryUserAgent(
          new Headers({
            "content-type": "text/markdown; charset=utf-8",
          }),
        ),
      });
    }

    const headers = new Headers();
    if (typeof object.writeHttpMetadata === "function") {
      object.writeHttpMetadata(headers);
    }
    headers.set("content-type", "text/markdown; charset=utf-8");
    setVaryUserAgent(headers);
    return new Response(object.body, { status: 200, headers });
  },
};
