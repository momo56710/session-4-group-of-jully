// ===== Variable Declarations =====

// let: block-scoped, can be reassigned
// let age;
// age = 26; // ✅ Works
// console.log(age); // 26
// // const: block-scoped, cannot be reassigned
// const birthYear = 2000;
// // birthYear = 1999;

// var: function-scoped, can be reassigned

{
  var name = "Ali";
  name = 20; // ✅ Works
}
console.log(name); // Ali
function showVar() {
  var city = "Algiers"; // ✅ Works
  console.log("Inside function:", city); // Algiers
}
// ===== Naming Rules =====
let a = 5;
let b = 'himda'; // ✅ Valid variable name
let c = a > "8"; // ✅ Valid variable name

console.log(`${b}`); // ✅ Works
console.log(`c is ${c}`); // ✅ Works
console.log(`${c && b}`); // ✅ Works

let userName = "momo"; // ✅ camelCase
let _isLoggedIn = true; // ✅ starts with underscore
let balance = 100; // ✅ starts with dollar sign

// JavaScript is case-sensitive
let city = "Algiers";
let City = "Oran";
console.log(city); // Algiers
console.log(City); // Oran

// ===== Scope Differences =====

// Block scope (let & const)
{
  let x = 10;
  const y = 20;
  console.log("Inside block:", x, y); // ✅ 10 20
}
// console.log(x);
// console.log(y);

// var does NOT have block scope
{
  var z = 30;
}
console.log("Outside block (var):", z); // ✅ 30 → var leaks out

// Function scope (var is scoped to functions)
function showVarScope() {
  var test = "visible inside function";
  console.log(test); // ✅ works
}
showVarScope();
// console.log(test);

// let and const are also scoped inside functions
function showLetConstScope() {
  let a = 1;
  const b = 2;
  console.log("Inside function:", a, b); // ✅ 1 2
}
showLetConstScope();
// console.log(a, b);
