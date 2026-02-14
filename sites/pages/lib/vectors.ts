export type HeadVectorShardParams = {
  topic: string;
  stableId: string;
  type: string;
  title: string;
  summary: string;
  tags: readonly string[];
  sourceUrl: string;
  retrievedAt: string;
  contentSha256: string;
};

export type VectorRecord = {
  id: string;
  kind: "head";
  path: string;
  text: string;
  metadata: {
    stable_id: string;
    topic: string;
    type: string;
    title: string;
    tags: string[];
    source_url: string;
    retrieved_at: string;
    content_sha256: string;
  };
};

export type VectorShard = {
  schema: "idx.md/vectors@1";
  topic: string;
  generated_at: string;
  records: [VectorRecord];
};

function normalizeInlineText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function buildHeadVectorText(params: {
  title: string;
  summary: string;
  type: string;
  tags: readonly string[];
  sourceUrl: string;
}): string {
  const lines = [
    `title: ${normalizeInlineText(params.title)}`,
    `summary: ${normalizeInlineText(params.summary)}`,
    `type: ${normalizeInlineText(params.type)}`,
    `tags: ${params.tags.length > 0 ? params.tags.join(", ") : "(none)"}`,
  ];
  const sourceUrl = normalizeInlineText(params.sourceUrl);
  if (sourceUrl) {
    lines.push(`source_url: ${sourceUrl}`);
  }
  return lines.join("\n");
}

export function buildHeadVectorShard(params: HeadVectorShardParams): VectorShard {
  return {
    schema: "idx.md/vectors@1",
    topic: params.topic,
    generated_at: params.retrievedAt,
    records: [
      {
        id: `${params.stableId}#head`,
        kind: "head",
        path: `/data/${params.topic}/HEAD.md`,
        text: buildHeadVectorText({
          title: params.title,
          summary: params.summary,
          type: params.type,
          tags: params.tags,
          sourceUrl: params.sourceUrl,
        }),
        metadata: {
          stable_id: params.stableId,
          topic: params.topic,
          type: params.type,
          title: params.title,
          tags: [...params.tags],
          source_url: params.sourceUrl,
          retrieved_at: params.retrievedAt,
          content_sha256: params.contentSha256,
        },
      },
    ],
  };
}

export function serializeVectorShard(shard: VectorShard): string {
  return `${JSON.stringify(shard, null, 2)}\n`;
}
