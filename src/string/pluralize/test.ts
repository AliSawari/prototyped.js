import "./index";

describe("String.prototype.pluralize", () => {
  test("\"apple\".pluralize() returns \"apples\"", () => {
    expect("apple".pluralize())
      .toBe("apples");
  });

  test("\"apple\".pluralize(0) returns \"apples\"", () => {
    expect("apple".pluralize(0))
      .toBe("apples");
  });

  test("\"apple\".pluralize(1) returns \"apple\"", () => {
    expect("apple".pluralize(1))
      .toBe("apple");
  });

  test("\"apple\".pluralize(2) returns \"apples\"", () => {
    expect("apple".pluralize(2))
      .toBe("apples");
  });

  test("\"person\".pluralize(2) returns \"people\"", () => {
    expect("person".pluralize(2))
      .toBe("people");
  });

  test("\"people\".pluralize(1) returns \"person\"", () => {
    expect("people".pluralize(1))
      .toBe("person");
  });
});