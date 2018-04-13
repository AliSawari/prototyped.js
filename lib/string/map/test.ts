import "./index";

describe("String.prototype.map", () => {
  test("\"Hello\".map((char) => char == \"o\" ? \"O\" : char) returns \"HellO\"", () => {
    expect("Hello".map((char) => char === "o" ? "O" : char))
      .toBe("HellO");
  });
});
