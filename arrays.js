const apple = ["apple", "banana", "orange", true];
let fruits = ["banana", "orange", 20];
let name = "mohamed";
let size = window.screen.width;

console.log(apple); // ["apple", "banana", "orange"]
// ➕ .push() → adds item to the end
fruits.unshift(name); // ["apple", "banana", "orange", "grape"]
console.log(fruits); // ["apple", "banana", "orange"]
fruits.pop(); // ["apple", "banana", "orange"]
// console.log(fruits); // ["apple", "banana", "orange"]
// console.log(fruits); // ["apple", "banana", "orange"]
fruits[0] = "said";
console.log(fruits); // ["apple", "banana", "orange"]
fruits.splice(2, 0, ...apple);
console.log(fruits);
fruits.push(...apple); // ["apple", "banana", "orange", "grape"]
console.log(fruits); // ["apple", "banana", "orange"]
// ➖ .pop() → removes the last item
fruits.pop(); // ["apple", "banana", "orange"]
console.log(fruits); // ["apple", "banana", "orange"]
fruits.pop(); // ["apple", "banana", "orange"]
console.log(fruits); // ["apple", "banana", "orange"]
// ➕ .unshift() → adds item to the start
fruits.unshift("kiwi"); // ["kiwi", "apple", "banana", "orange"]
console.log(fruits); // ["apple", "banana", "orange"]
// ➖ .shift() → removes the first item
// fruits.shift(); // ["apple", "banana", "orange"]
console.log(fruits); // ["apple", "banana", "orange"]
// ❓ .includes() → checks if value exists in array
console.log(fruits.includes("kiwi")); // true
console.log(fruits[0]); // false

// 🔍 .indexOf() → finds the position of a value
console.log(fruits.indexOf("banana")); // 2

// 🔗 .join() → turns array into a string, separated by commas
console.log(...fruits); // "apple, banana, orange"

// ✂️ .slice(start, end) → copies part of the array (end not included)
let someFruits = fruits.slice(0, 2); // ["apple", "banana"]

// 🧹 .splice(index, count) → removes or replaces items
fruits.splice(1, 1); // removes 1 item at index 1 → ["apple", "orange"]
