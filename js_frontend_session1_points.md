# JavaScript for Frontend Development - Session 1 (2 hours)

## 1. Introduction to JavaScript
- What is JavaScript?  
  // Brief history, role in web development, ECMAScript standard
- Where does JS run?  
  // Browsers, Node.js (focus on browsers for frontend)
- How JS interacts with HTML/CSS  
  // Dynamic content, DOM manipulation

**Exercise:**  
- Open the browser console and type `console.log("Hello, JavaScript!")`.

## 2. Setting Up the Environment
- Using browser DevTools (Console, Sources, Elements)  
  // Quick demo: open console, run simple JS
- Writing JS in HTML files  
  // `<script>` tag, inline vs external scripts

**Exercise:**  
- Create a simple HTML file and add a `<script>` tag. Write `console.log("Script loaded!")` inside it.

## 3. Basic Syntax and Data Types
- Variables: `var`, `let`, `const`  
  - `var` is function-scoped, can be redeclared and updated, hoisted to the top of its scope.
  - `let` is block-scoped, can be updated but not redeclared in the same scope, not hoisted in the same way as `var`.
  - `const` is block-scoped, cannot be updated or redeclared, must be initialized at declaration.

**Examples:**
```js
// var example
var x = 10;
if (true) {
    var x = 20; // same variable!
    console.log(x); // 20
}
console.log(x); // 20

// let example
let y = 10;
if (true) {
    let y = 20; // different variable (block scope)
    console.log(y); // 20
}
console.log(y); // 10

// const example
const z = 30;
// z = 40; // Error: Assignment to constant variable
```

**Exercises:**  
- Declare a variable with `var` inside a function and log it outside the block.
- Declare a variable with `let` inside a block and try to log it outside the block (should cause an error).
- Try redeclaring a `let` variable in the same scope (should cause an error).
- Try updating a `const` variable (should cause an error).

## 4. Operators and Expressions
- Arithmetic, assignment, comparison, logical operators  
  // Simple examples

**Exercise:**  
- Try basic arithmetic and comparison in the console. E.g., `5 + 3`, `10 > 2`, `true && false`.

## 5. Control Structures
- Conditional statements: `if`, `else if`, `else`  
  // Syntax and examples
- Loops: `for`, `while`  
  // Basic usage

**Exercise:**  
- Write an `if` statement that checks if a number is positive or negative.
- Write a `for` loop that logs numbers 1 to 5.

## 6. Functions
- Declaring and calling functions  
  // Function declaration vs expression
- Parameters and return values

**Exercise:**  
- Write a function that takes a name and logs "Hello, [name]!".
- Call the function with your name.

## 7. Arrays and Objects (Intro)
- Creating and accessing arrays  
  // Indexing, basic methods (`push`, `pop`)
- Creating and accessing objects  
  // Key-value pairs

**Exercise:**  
- Create an array of three colors and log the second color.
- Create an object representing a person with `name` and `age`, then log the name.

## 8. Basic DOM Manipulation
- What is the DOM?  
  // Document Object Model overview
- Selecting elements (`getElementById`, `querySelector`)  
  // Simple demo
- Changing content (`textContent`, `innerHTML`)  
  // Example: change a heading

**Exercise:**  
- Add a `<h1>` to your HTML. Use JS to change its text content.

## 9. Events (Intro)
- What are events?  
  // Click, input, etc.
- Adding event listeners  
  // `addEventListener` basic usage

**Exercise:**  
- Add a button to your HTML. Use JS to show an alert when it is clicked.

## 10. Q&A and Practice
- Short exercises or live coding  

**Exercise:**  
- Combine DOM manipulation and events: When the button is clicked, change the `<h1>` text.

---
> **Tip:** Encourage students to experiment in the browser console and ask questions throughout.
