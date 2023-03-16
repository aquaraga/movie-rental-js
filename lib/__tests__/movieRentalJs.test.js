const assert = require("assert");
const movieRentalJs = require("../index.js");

describe("movieRentalJs", () => {
  it("has a test", () => {
    assert(true, "movieRentalJs should have a test");
    assert.notEqual(
      movieRentalJs,
      undefined,
      "movieRentalJs should be defined"
    );
  });
});
