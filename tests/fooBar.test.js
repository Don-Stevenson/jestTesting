const fooBar = require("../fooBar")

describe("FooBar tests", () => {
  test("expect foo to be returned when passed in bar", () =>
    expect(fooBar("foo")).toBe("bar"))

  test("expect bar to be returned when passed in foo", () =>
    expect(fooBar("bar")).toBe("foo"))

  test("expect 'undefined' to be returned when passed in an empty string", () =>
    expect(fooBar("")).toBe(undefined))

  test("expect 'undefined' to be returned when passed in a word other than 'foo' or 'bar'", () =>
    expect(fooBar("that")).toBe(undefined))

  test("expect 'undefined' to be returned when passed in a number", () =>
    expect(fooBar(5)).toBe(undefined))

    test("expect 'undefined' to be returned when passed in 'Bar'", () =>
    expect(fooBar("Bar")).toBe(undefined))
})
