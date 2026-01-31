const IMPORT_LINE = /^\s*import\s+(?:[\w\{\*"'`])/m;
const EXPORT_LINE =
  /^\s*export\s+(?:(?:declare|abstract|async)\s+)?(?:\*|\{|default|const|function|class|type|interface|enum|let|var|namespace|module)/m;
const JSX_TAG = /<\/?[A-Z][^>]*>/;
const JSX_FRAGMENT = /<\s*>|<\s*\/\s*>/;
const FENCE_LINE = /^\s*(```|~~~)/;

function stripInlineCode(line: string): string {
  let output = "";
  let fenceLength = 0;

  for (let index = 0; index < line.length; ) {
    if (line[index] === "`") {
      let count = 1;
      while (index + count < line.length && line[index + count] === "`") {
        count += 1;
      }
      if (fenceLength === 0) {
        fenceLength = count;
      } else if (fenceLength === count) {
        fenceLength = 0;
      }
      index += count;
      continue;
    }

    if (fenceLength === 0) {
      output += line[index];
    }
    index += 1;
  }

  return output;
}

function stripBlockquotePrefixes(line: string): string {
  let rest = line;
  while (true) {
    const match = rest.match(/^\s*>\s?/);
    if (!match) {
      break;
    }
    rest = rest.slice(match[0].length);
  }
  return rest;
}

function stripListPrefix(line: string): string {
  const match = line.match(/^\s*(?:[-*+]|\d+\.)\s+/);
  if (!match) {
    return line;
  }
  const prefixLength = match[0].length;
  const trimmed = line.slice(prefixLength);
  const extraSpace = match[0].match(/\s+$/);
  if (extraSpace && extraSpace[0].length > 1) {
    return `${extraSpace[0].slice(1)}${trimmed}`;
  }
  return trimmed;
}

function stripPrefixes(line: string): string {
  const indentMatch = line.match(/^\s*/);
  const indent = indentMatch ? indentMatch[0] : "";
  const rest = line.slice(indent.length);
  const withoutBlockquotes = stripBlockquotePrefixes(rest);
  const withoutList = stripListPrefix(withoutBlockquotes);
  return `${indent}${withoutList}`;
}

export function buildScanTarget(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  const kept: string[] = [];
  let inFence = false;

  for (const line of lines) {
    const afterPrefix = stripPrefixes(line);
    const isIndentedOriginal = /^(?:\t| {4,})/.test(line);
    const isIndentedAfterPrefix = /^(?:\t| {4,})/.test(afterPrefix);
    const isIndentedCode = isIndentedOriginal || isIndentedAfterPrefix;
    if (isIndentedCode) {
      continue;
    }
    if (FENCE_LINE.test(afterPrefix)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) {
      continue;
    }

    kept.push(stripInlineCode(afterPrefix));
  }

  return kept.join("\n");
}

function hasExpressionBlock(scanTarget: string): boolean {
  return /(^|\s)\{[\s\S]*?\}/m.test(scanTarget);
}

export function detectMdx(markdown: string): string | null {
  const scanTarget = buildScanTarget(markdown);

  if (IMPORT_LINE.test(scanTarget)) {
    return "Top-level import detected";
  }
  if (EXPORT_LINE.test(scanTarget)) {
    return "Top-level export detected";
  }
  if (JSX_FRAGMENT.test(scanTarget)) {
    return "JSX fragment detected";
  }
  if (JSX_TAG.test(scanTarget)) {
    return "JSX tag detected";
  }
  if (hasExpressionBlock(scanTarget)) {
    return "MDX expression block detected";
  }
  return null;
}
