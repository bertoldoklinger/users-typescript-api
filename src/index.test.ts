// eslint-disable-next-line @typescript-eslint/no-var-requires
const Person = require("./server")

it("should sum", () => {
  const person = new Person()
  expect(person.sayMyName()).toBe("Bertoldo")
})
