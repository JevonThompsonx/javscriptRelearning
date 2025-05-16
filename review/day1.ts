console.log("Hola");

const log = (string: string | number) => {
  console.log(string);
};

log("Let's do some review");

log("Creating variables");

let letVar: string = "String made with let";
const conVar: number = 18;
var varVar = {
  name: "varVar",
  hello: function () {
    log("I am varVar made with var");
  },
};

log(letVar);
log(conVar);
varVar.hello();

log("we've already started but let's do functions");

const regFunction = function () {
  log("A regular function");
  log("Generally good practice to init with 'const' ");
};

const paramFunction = function (param: number): number {
  log("A function with a parameter");
  log(
    "If using typescript, it's necessary to put the type of function and expected return value",
  );
  return param;
};

regFunction();
console.log("22 + param = ", 22 + paramFunction(40));

const arrFunction = () => {
  log("Here's an arrow function");
};
arrFunction();
log("Let's do some basic match");
console.log("2 + 2 =", 2 + 2);
console.log("90 / 4 = ", 90 / 4);
console.log("Remainder of 59/2 = ", 59 % 2);

log("Comparison operators");

const oneNum = 23;
const dosNum = 80;

console.log("One num = ", oneNum);
console.log("dos num = ", dosNum);
log("Now let's compare them");
console.log(
  "oneNum == dosNum?",
  //@ts-ignore
  oneNum == dosNum ? "totally equal" : "nope. not equal",
);

log("That is the loose operator which converts types if needed to compare");
log(
  "Useful for comparing numbers that might've accidentally been converted to a string",
);
//@ts-ignore
console.log("54 == '54' ?", 54 == "54" ? "wooooh it's equal" : "nerp");

log("Let's try the same thing with a strict comparison operator === ");
console.log(
  "54 === '54' ?",
  54 === "54" ? "wooooh it's equal" : "nerp, one's a string ",
);
