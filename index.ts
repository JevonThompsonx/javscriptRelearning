import { addSyntheticLeadingComment } from "typescript"

console.log("Hello from javascript")

console.log("create variables:")

let string1 = "Hello I am a string"
const string2 = "Hello I am a immutable string"

console.log(string1)
console.log(string2)

var string3 = "var can also be used"

console.log(string3)
// This is a comment
// hello i am comment
/*
 Multi 
 line
 comment
 here
 */

console.log("Let's make some string literals")


let princessName = "Jessica Shaver"

console.log(`My beautiful amazing gf's name is ${princessName}`)

// String lits baybee

console.log("Different types:")
console.log(`A number ${14}`)
console.log("A string")
console.log(`A boolean ${true}`)
console.log(`An array: ${[44, 'string', 12, true]}`)
const personObject = {
  name: "Jevon",
  age: 24,
  active: true
}
console.log("An object:")
console.log(personObject)


console.log("Let's make a function")

const helloFunction = function() {
  console.log("Hello there from a function")
}

helloFunction()

const parameterFunction = (name: string) => {
  console.log(`Hello there ${name} from the arrow function!`)
}
parameterFunction("Joseph")

const objectWithFunct = {
  name: "Cindy",
  age: 36,
  greet: function() {
    console.log(`Hello from the object with the person named ${this.name}`)
  }
}

objectWithFunct.greet()

console.log("Let's do some comparisons")

console.log(`22 is equal to 24 ${22 == 22}`)
//@ts-ignore
console.log(`22 is equal to "22" in non strict mode ${22 == "22"}`)
//@ts-ignore
console.log(`22 is equal to "22" in strict mode: ${22 === "22"}`)
console.log(`22 > 24: ${22 > 24}`)
console.log(`22 == 22 #{22 == 22}`)
console.log(`54 < 20 ${54 < 20}`)
console.log(`23 <= 23 ${23 <= 23}`)

