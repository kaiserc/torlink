import { describe, it, expect } from "vitest";
import { openStream } from "./openStream";

describe("openStream", () => {
  it("returns false when given an empty URL", async () => {
    const result = await openStream("");
    expect(result).toBe(false);
  });
});
