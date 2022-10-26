const fooBar = require("../fooBar")

test("expect foo to equal bar", () => {
  expect(fooBar("foo")).toBe("bar")
})

test("expect bar to equal foo", () => {
  expect(fooBar("bar")).toBe("foo")
})