export type OpenClawCategory = {
  title: string;
  slug: string;
  items: OpenClawItem[];
};

export type OpenClawItem = {
  title: string;
  url: string;
  description?: string;
};

const CATEGORY_PATTERN =
  /<summary>\s*<h3[^>]*>(.*?)<\/h3>\s*<\/summary>/gi;

function decodeHtml(input: string): string {
  return input
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractDescription(line: string, endIndex: number): string | undefined {
  const tail = line.slice(endIndex).trim();
  if (!tail) {
    return undefined;
  }
  const cleaned = tail.replace(/^[-–—:]+\s*/, "").trim();
  return cleaned || undefined;
}

function parseItems(block: string): OpenClawItem[] {
  const items: OpenClawItem[] = [];
  const lines = block.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }

    const mdRegex = /\[([^\]]+)\]\(([^)]+)\)/;
    const mdMatch = mdRegex.exec(trimmed);
    if (mdMatch) {
      const title = mdMatch[1]?.trim();
      const url = mdMatch[2]?.trim();
      if (title && url) {
        const desc = extractDescription(
          trimmed,
          mdMatch.index + mdMatch[0].length,
        );
        items.push({ title, url, description: desc });
      }
      continue;
    }

    const htmlRegex = /<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/i;
    const htmlMatch = htmlRegex.exec(trimmed);
    if (htmlMatch) {
      const url = htmlMatch[1]?.trim();
      const title = decodeHtml(htmlMatch[2]?.trim() ?? "");
      if (title && url) {
        const desc = extractDescription(
          trimmed,
          htmlMatch.index + htmlMatch[0].length,
        );
        items.push({ title, url, description: desc });
      }
    }
  }

  return items;
}

export function parseOpenClawCategories(readme: string): OpenClawCategory[] {
  const categories: OpenClawCategory[] = [];
  let match: RegExpExecArray | null;

  while ((match = CATEGORY_PATTERN.exec(readme)) !== null) {
    const title = decodeHtml(match[1]?.trim() ?? "");
    const start = match.index + match[0].length;
    const end = readme.indexOf("</details>", start);
    if (!title || end === -1) {
      continue;
    }
    const block = readme.slice(start, end);
    const items = parseItems(block);
    const rawSlug = slugify(title);
    const slug = rawSlug || "uncategorized";
    if (!rawSlug) {
      console.warn(`Category "${title}" has empty slug; using "${slug}".`);
    }
    categories.push({ title, slug, items });
  }

  return categories;
}
