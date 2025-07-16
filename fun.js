// ===============================
// FUNCTION DECLARATION
// ===============================
const grreting = greet("moha");
// Traditional function declaration - hoisted
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(grreting);
console.log(greet());
// Function declaration with default parameter
function multiply(a = 1, b = 5) {
  return a * b;
}
function createAccount(name, email, verfied = false) {
  return `account created ${name} ${email} ${verfied}`;
}

console.log(createAccount("mohamed", "mha@moha"));
console.log(createAccount("mohamed", "mha@moha", true));
console.log(multiply());
// Function declaration using rest parameters
function sumAll(prof, ...mods) {
  let total = 0;
  let cofs = 0;
  mods.forEach((mod) => {
    total += mod.note * mod.cof;
    cofs += mod.cof;
  });

  return `${prof} mdalk ${total / cofs}`;
}
console.log(sumAll("hamid", { note: 15, cof: 2 }, { note: 3, cof: 6 }));
console.log(
  sumAll(
    { note: 15, cof: 2 },
    { note: 3, cof: 6 },
    { note: 3, cof: 6 },
    { note: 3, cof: 6 },
    { note: 3, cof: 6 }
  )
);

// ===============================
// FUNCTION EXPRESSION
// ===============================

// Anonymous function expression assigned to a variable
function greetDec(name) {
  return `Hi, ${name}!`;
}
const greetExp = function (name) {
  return `Hi, ${name}!`;
};
const greetArrw = (name) => {
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
