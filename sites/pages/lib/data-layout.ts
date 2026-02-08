import { resolve } from "path";
import { repoRoot } from "./paths";

export const DATA_ROOT = resolve(repoRoot, "data");
export const CATEGORY_ROOT = resolve(DATA_ROOT, "category");
export const SCENARIO_ROOT = resolve(DATA_ROOT, "scenario");
export const INDUSTRY_ROOT = resolve(DATA_ROOT, "industry");

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
export const SCENARIO_INDEX_PATH = resolve(SCENARIO_ROOT, "index.md");
export const INDUSTRY_INDEX_PATH = resolve(INDUSTRY_ROOT, "index.md");

export function categoryIndexPath(categorySlug: string): string {
  return resolve(CATEGORY_ROOT, categorySlug, "index.md");
}

export function scenarioIndexPath(scenarioSlug: string): string {
  return resolve(SCENARIO_ROOT, scenarioSlug, "index.md");
}

export function industryIndexPath(industrySlug: string): string {
  return resolve(INDUSTRY_ROOT, industrySlug, "index.md");
}

export function formatIndexEntry(topic: string, headContent: string): string {
  const trimmed = headContent.trimEnd();
  return `${trimmed}\n|/data/${topic}|\n`;
}
