---
stable_id: skills/skills-sh-mattpocock-skills-tdd
type: skills
title: skills-sh-mattpocock-skills-tdd
summary: >-
  # Good and Bad Tests

  ## Good Tests

  **Integration-style**: Test through real interfaces, not mocks of internal
  parts.

  ```typescript

  // GOOD: Tests observable behavior

  test("user can checkout with valid cart", async () => {
    const cart = createCart();
    cart.add(product);
    const result = await checkout(cart, paymentMethod);
    expect(result.status).toBe("confirmed");
tags:
  - skills-sh
  - skills-sh-all-time
source_url: https://raw.githubusercontent.com/mattpocock/skills/HEAD/tdd/tests.md
license: ""
upstream_ref: https://skills.sh/mattpocock/skills/tdd
github_stars: 8203
github_forks: 659
github_is_organization: false
retrieved_at: 2026-04-03T07:27:14.314Z
content_sha256: e12182f5c4c6a844b7c6ab4b8d2623b642aaaae5460fe58ed087efd4f3d5fb8a
---
