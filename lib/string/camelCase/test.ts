import "./index";

describe("String.prototype.camelCase", () => {
  test("\"some_database_field_name\".camelCase() returns \"someDatabaseFieldName\"", () => {
    expect("some_database_field_name".camelCase())
      .toBe("someDatabaseFieldName");
  });

  test("\"Some label that needs to be camelized\".camelCase() returns \"someLabelThatNeedsToBeCamelized\"", () => {
    expect("Some label that needs to be camelized".camelCase())
      .toBe("someLabelThatNeedsToBeCamelized");
  });

  test("\"some-javascript-property\".camelCase() returns \"someJavascriptProperty\"", () => {
    expect("some-javascript-property".camelCase())
      .toBe("someJavascriptProperty");
  });

  test("\"some-mixed_string with spaces_underscores-and-hyphens\".camelCase() returns " +
    "\"someMixedStringWithSpacesUnderscoresAndHyphens\"", () => {
      expect("some-mixed_string with spaces_underscores-and-hyphens".camelCase())
        .toBe("someMixedStringWithSpacesUnderscoresAndHyphens");
    });
});
