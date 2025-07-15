// ===============================
// FUNCTION DECLARATION
// ===============================

// Traditional function declaration - hoisted
function greet(name) {
  return `Hello, ${name}!`;
}

// Function declaration with default parameter
function multiply(a = 1, b = 1) {
  return a * b;
}

// Function declaration using rest parameters
function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

// ===============================
// FUNCTION EXPRESSION
// ===============================

// Anonymous function expression assigned to a variable
const greetExpr = function (name) {
  return `Hi, ${name}!`;
};

// Named function expression (name is optional but can help with debugging)
const greetExprNamed = function greetInternal(name) {
  return `Hello from named function: ${name}`;
};

// Function expression with default values
const divide = function (a = 1, b = 1) {
  return b === 0 ? "Cannot divide by zero" : a / b;
};

// ===============================
// ARROW FUNCTIONS
// ===============================

// Basic arrow function
const greetArrow = (name) => {
  return `Hey, ${name}!`;
};

// Arrow function with implicit return (single expression)
const greetQuick = (name) => `Yo, ${name}!`;

// Arrow function returning an object (wrapped in parentheses)
const createUser = (name, age) => ({
  name: name,
  age: age,
  createdAt: new Date(),
});

// Arrow function with destructured object parameter
const logUser = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};

const subtract = (a, b) => a - b;
