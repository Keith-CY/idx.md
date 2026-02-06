import { resolve } from "path";
import { repoRoot } from "./paths";

export const DATA_ROOT = resolve(repoRoot, "data");
export const CATEGORY_ROOT = resolve(DATA_ROOT, "category");

export function topicDir(topic: string): string {
  return resolve(DATA_ROOT, topic);
}

export function headPath(topic: string): string {
  return resolve(topicDir(topic), "HEAD.md");
}

export function bodyPath(topic: string): string {
  return resolve(topicDir(topic), "BODY.md");
}

export const INDEX_PATH = resolve(DATA_ROOT, "index.md");
export const CATEGORY_INDEX_PATH = resolve(CATEGORY_ROOT, "index.md");

export function categoryIndexPath(categorySlug: string): string {
  return resolve(CATEGORY_ROOT, categorySlug, "index.md");
}

export function formatIndexEntry(topic: string, headContent: string): string {
  const trimmed = headContent.trimEnd();
  return `${trimmed}\n|/data/${topic}|\n`;
}
