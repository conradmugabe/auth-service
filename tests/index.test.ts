import { app } from "../src/index";

describe("Express App", () => {
  it("should export an Express application", () => {
    expect(app()).toBeDefined();
    expect(typeof app()).toBe("function");
    expect(app().listen).toBeDefined();
  });
});
