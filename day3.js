function add(a, b) { return a + b; }       // declaration — hoisted, can call before defined

const subtract = (a, b) => a - b;          // arrow function — implicit return, no braces needed

const multiply = function (a, b) {         // function expression
  return a * b;
};

function greet(name = "friend") {          // default parameter
  return `Hello, ${name}`;                  // template literal — backticks + ${}
}

console.log(add(2, 3));                       // 5
console.log(subtract(5, 2));                  // 3
console.log(multiply(4, 3));                  // 12
console.log(greet("Tyler"));                         // Hello, Tyler