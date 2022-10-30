const fooBar = require("../fooBar")

describe("FooBar tests", () => {
  test("expect foo to when passed in bar", () =>
    expect(fooBar("foo")).toBe("bar"))

  test("expect bar to when passed in foo", () =>
    expect(fooBar("bar")).toBe("foo"))

  test("expect 'undefined' response when passed in an empty string", () =>
    expect(fooBar("")).toBe(undefined))

  test("expect 'undefined' when passed in a word other than 'foo' or 'bar'",()=>
    expect(fooBar("that")).toBe(undefined)) 
})
