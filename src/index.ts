import Tree from "./one/two/three/tree"

class Person {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  sayMyName() {
    return "Bertoldo"
  }
}
console.log(new Tree().log(), new Person().sayMyName())
export default Person
