import { describe, expect, it } from "vitest";

import { API_BASE, buildApiUrl, buildAssetUrl } from "./api.js";

describe("api config", () => {
  it("buildApiUrl normalizes path and joins base", () => {
    expect(buildApiUrl("/meals")).toBe(`${API_BASE}/meals`);
    expect(buildApiUrl("orders")).toBe(`${API_BASE}/orders`);
  });

  it("buildAssetUrl returns empty string for empty path", () => {
    expect(buildAssetUrl("")).toBe("");
  });

  it("buildAssetUrl prefixes non-empty path", () => {
    expect(buildAssetUrl("/images/x.jpg")).toBe(`${API_BASE}/images/x.jpg`);
  });
});
