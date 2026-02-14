import { describe, expect, test } from "bun:test";
import { buildHeadVectorShard, serializeVectorShard } from "../lib/vectors";

describe("vector shard generation", () => {
  test("builds a per-topic head vector shard with stable metadata", () => {
    const shard = buildHeadVectorShard({
      topic: "example-topic",
      stableId: "openclaw/example-topic",
      type: "openclaw",
      title: "Example Topic",
      summary: "Useful summary for retrieval.",
      tags: ["alpha", "beta"],
      sourceUrl: "https://example.com/topic",
      retrievedAt: "2026-02-13T00:00:00.000Z",
      contentSha256:
        "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
    });

    expect(shard.schema).toBe("idx.md/vectors@1");
    expect(shard.topic).toBe("example-topic");
    expect(shard.records.length).toBe(1);

    const record = shard.records[0];
    expect(record.id).toBe("openclaw/example-topic#head");
    expect(record.path).toBe("/data/example-topic/HEAD.md");
    expect(record.kind).toBe("head");
    expect(record.metadata.tags).toEqual(["alpha", "beta"]);
    expect(record.metadata.retrieved_at).toBe("2026-02-13T00:00:00.000Z");
    expect(record.metadata.content_sha256).toBe(
      "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
    );
  });

  test("serializes shard as pretty json with trailing newline", () => {
    const shard = buildHeadVectorShard({
      topic: "topic",
      stableId: "type/topic",
      type: "type",
      title: "Title",
      summary: "Summary",
      tags: [],
      sourceUrl: "",
      retrievedAt: "2026-02-13T00:00:00.000Z",
      contentSha256:
        "fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210",
    });

    const json = serializeVectorShard(shard);
    expect(json.endsWith("\n")).toBe(true);
    expect(json.includes('"schema": "idx.md/vectors@1"')).toBe(true);
    expect(json.includes('"text": "title: Title\\nsummary: Summary\\ntype: type\\ntags: (none)"')).toBe(
      true,
    );
  });
});
