import { toR2Key } from "./lib/paths";

type Env = {
  IDX_MD: R2Bucket;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
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
    headers.set("content-type", "text/markdown; charset=utf-8");
    return new Response(object.body, { status: 200, headers });
  },
};
