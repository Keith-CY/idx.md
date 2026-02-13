import { describe, expect, test } from "bun:test";
import {
  createGithubRepoMetadataFetcher,
  extractGithubRepoMetadata,
  extractGithubRepoRefFromRawUrl,
} from "../lib/github-repo-metadata";

describe("github repo metadata", () => {
  test("extracts stars, forks, and organization flag", () => {
    const metadata = extractGithubRepoMetadata({
      stargazers_count: 123,
      forks_count: 45,
      owner: {
        type: "Organization",
      },
    });

    expect(metadata).toEqual({
      github_stars: 123,
      github_forks: 45,
      github_is_organization: true,
    });
  });

  test("returns null when required fields are missing or invalid", () => {
    expect(
      extractGithubRepoMetadata({
        stargazers_count: "123",
        forks_count: 10,
        owner: { type: "Organization" },
      }),
    ).toBeNull();

    expect(
      extractGithubRepoMetadata({
        stargazers_count: 123,
        forks_count: -1,
        owner: { type: "Organization" },
      }),
    ).toBeNull();

    expect(
      extractGithubRepoMetadata({
        stargazers_count: 123,
        forks_count: 10,
      }),
    ).toBeNull();
  });

  test("extracts owner/repo from raw.githubusercontent URL", () => {
    expect(
      extractGithubRepoRefFromRawUrl(
        "https://raw.githubusercontent.com/acme/skills/main/SKILL.md",
      ),
    ).toEqual({ owner: "acme", repo: "skills" });

    expect(
      extractGithubRepoRefFromRawUrl(
        "https://github.com/acme/skills/blob/main/SKILL.md",
      ),
    ).toBeNull();
  });

  test("fetcher returns metadata and caches by repo", async () => {
    const requests: string[] = [];
    const fetcher = createGithubRepoMetadataFetcher(async (input) => {
      requests.push(String(input));
      return new Response(
        JSON.stringify({
          stargazers_count: 9,
          forks_count: 3,
          owner: { type: "User" },
        }),
        { status: 200 },
      );
    });

    const one = await fetcher({ owner: "acme", repo: "skills" });
    const two = await fetcher({ owner: "acme", repo: "skills" });

    expect(one).toEqual({
      github_stars: 9,
      github_forks: 3,
      github_is_organization: false,
    });
    expect(two).toEqual(one);
    expect(requests).toHaveLength(1);
    expect(requests[0]).toContain("https://api.github.com/repos/acme/skills");
  });

  test("fetcher fails open and returns null on non-OK response", async () => {
    const fetcher = createGithubRepoMetadataFetcher(async () => {
      return new Response("forbidden", { status: 403 });
    });

    expect(await fetcher({ owner: "acme", repo: "skills" })).toBeNull();
  });
});
