const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("it should be a rectangle class", () => {
  it("should have a square method", () => {
    const square = new Rectangle(5, 5);
    assert.strictEqual(square.isSquare(), true);
    const notSquare = new Rectangle(3, 5);
    assert.strictEqual(notSquare.isSquare(), false);
  });
  it("should give us the area", () => {
    const area = new Rectangle(10, 10);
    assert.strictEqual(area.getArea(), 100);
  });
  it("should give us the permiter", () => {
    const perimeter = new Rectangle(4, 6);
    assert.strictEqual(perimeter.getPerimeter(), 20);
  });
});
