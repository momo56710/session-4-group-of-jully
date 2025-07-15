// 🔹 Function Declaration (hoisted)
sayHello("hmida"); // ✅ works

function sayHello(name) {
  console.log(`Hello from ${name}`);
}
// 🔹 Anonymous Function Expression
const speak = function () {
  console.log("reuslt");
};
function calcForm(a, b, oprt) {
  if (typeof a !== "number" || typeof b !== "number") {
    speak();
    return "Both a and b must be numbers";
  }
  switch (oprt) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "mod":
      return a % b;
    case "pow":
      return a ** b; // Exponentiation operator
    default:
      return "Invalid operator";
  }
}
let result = calcForm(5, "3", "pow"); // ✅ works
// 🔹 Function Expression (not hoisted)
console.log(result); // ✅ works
// greet(); ❌ Error: Cannot access 'greet' before initialization
sayHello("dm"); // ✅ works
const greet = function () {
  console.log("Hello from an expression!");
};

greet(); // ✅ works here

speak();

// 🔹 Named Function Expression (for recursion or debugging)
const shout = function shoutOutLoud() {
  console.log("I'm a named function inside an expression.");
};

shout(); // ✅ works
// shoutOutLoud(); ❌ doesn't work outside — name is scoped inside the function

const addnumber = (a, b) => console.log(a + b);
