const fooBar = require("../fooBar")

test("expect foo to when passed in bar", () =>
  expect(fooBar("foo")).toBe("bar"))

test("expect bar to when passed in foo", () =>
  expect(fooBar("bar")).toBe("foo"))
