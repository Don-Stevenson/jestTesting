const fooBar = fooOrBar => {
  if (fooOrBar === "foo") return "bar"
  else if (fooOrBar === "bar") return "foo"
  else return undefined
}

module.exports = fooBar