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
const nextSectionSperator = () => {
  console.log("---------------------------------------")
  console.log("")
}
nextSectionSperator()
console.log("Let's get into some logical operations:")
console.log("Using the && and or ops")
console.log(`true && true is ${true && true}`)
console.log(`true && false is ${true && false}`)
console.log(`false && false is ${false && false}`)
console.log("")
console.log("This means that the only way for the answer to be true is if both left and right are true")
console.log("")
console.log("The || or operator works different. Only one value has to be true")
console.log(`true || true is ${true || true}`)
console.log(`true || false is ${false || true}`)
console.log(`false || false is ${false || false}`)
console.log("")
console.log("There is also the !not operator")
console.log("The not operator is used to make the current value oposite")
console.log(`eg: !true is ${!true}`)
console.log(`This only works if the value can be negated`)
//@ts-ignore
console.log(`eg: !22 is ${!22}`)
console.log("Numbers, string, arrays, objects and all types are generally 'truthy'")
console.log(`The values that aren't by default truthy are ${null} and ${undefined}`)
//@ts-ignore
console.log(`!null is ${!null}`)
//@ts-ignore
console.log(`!undefined is ${!undefined}`)
nextSectionSperator()
console.log("Let's try if/else statements")
console.log(`Syntax:
            if (condition) {
              code to run
            }`)

console.log("Let's create a function to tell if someone is an adult")

interface personTypes {
  name: string;
  age: number;
  active: boolean;
}
class Person implements personTypes {
  name: string;
  age: number;
  active: boolean;
  constructor({ name, age, active }: personTypes) {
    this.name = name;
    this.age = age;
    this.active = active
  }
  greet = () => {
    console.log(`Hello from ${this.name}`)
  }
}

const jevon = new Person({ name: "Jevon", age: 24, active: true })
console.log(jevon)
console.log("Let's run the greet function attached to the person ${jevon.greet()}")
jevon.greet()
console.log("Let's create some more people to use for the if/else functions")

const jessica = new Person({ name: "Jessica", age: 24, active: true })
const dobby = new Person({ name: "Dobby", age: 19, active: false })

const areTheyActive = ({ person }: { person: personTypes }) => {
  if (person.active === true) {
    console.log(`${person.name} is active!`)
  }
  else if (!typeof (Boolean)) {
    console.log("Uh I don't know how but you messed up bud")
  }
  else {
    console.log(`${person.name} should touch grass`)
  }
}

areTheyActive({ person: jessica })
areTheyActive({ person: jevon })
areTheyActive({ person: dobby })
