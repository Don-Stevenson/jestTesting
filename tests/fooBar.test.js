const fooBar = require("../fooBar")

describe("FooBar tests", () => {
  test("expect 'foo' to be returned when passed in bar", () =>
    expect(fooBar("foo")).toBe("bar"))

  test("expect 'bar' to be returned when passed in foo", () =>
    expect(fooBar("bar")).toBe("foo"))

  test("when passed in an empty string, expect 'undefined'", () =>
    expect(fooBar("")).toBe(undefined))

  test("when passed in a word other than 'foo' or 'bar', expect 'undefined' to be returned", () =>
    expect(fooBar("that")).toBe(undefined))

  test("when passed in a number, expect 'undefined' to be returned", () =>
    expect(fooBar(5)).toBe(undefined))

  test("when passed in 'Bar', expect 'undefined' to be returned", () =>
    expect(fooBar("Bar")).toBe(undefined))

  test("when passed in 'Foo', expect 'undefined' to be returned", () =>
    expect(fooBar("Foo")).toBe(undefined))

  test("When passed in 'Nan', expect 'undefined' to be returned", () =>
    expect(fooBar(NaN)).toBe(undefined))

  test("When passed in 'false', expect 'undefined' to be returned", () =>
    expect(fooBar(false)).toBe(undefined))
})
