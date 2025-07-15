// Arithmetic
let a = 10,
  b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1
console.log(2 ** 3); // 8
a++;
console.log(a); // 11
b--;
console.log(b); // 2

// Comparison
console.log(5 == "5"); // true (loose equal)
console.log(5 === "5"); // false (strict equal)
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
console.log(7 > 5); // true
console.log(3 <= 2); // false

// Logical
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // false
console.log(isAdult || hasID); // true
console.log(!isAdult); // false
