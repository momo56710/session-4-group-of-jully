let user = {
  name: "ali", // ✅ Valid property name
  age: 22, // ✅ Valid property name
  isStudent: true, // ✅ Valid property name
};
let userArr = ["ali", 22, true];

let User = {
  age: 25, // ✅ Valid property name
  isStudent: false, // ✅ Valid property name
  name: "Mohamed", // ✅ Valid property name
};
let users = [user, User];
let UserArr = [22, true, "ali"];
console.log(user.name); // "Ali"
console.log(userArr[0]); // "Ali"
console.log(User.name); // "Ali"
console.log(UserArr[0]); // "Ali"

let shopping1 = {
  fruits: ["apple", "orange", "kiwi"],
  cloths: ["t-shirt", "shoe"],
};
let shopping2 = {
  healthcare: ["SHAMPOO", "DSAD"],
  toys : ['legos']
};
// console.log(shopping);
// shopping.fruits.push("S3IDA");
// console.log(shopping);
console.log("----------");
console.log(users);


console.log(shopping1);
// // ➕ Add a new key-value pair
// user.city = "Algiers"; // adds city property
// console.log(user); // { name: "Ali", age: 22, isStudent: true, city: "Algiers" }
// User.country = "Algeria"; // adds country property
// console.log(User); // { name: "Mohamed", age: 25, isStudent: false, country: "Algeria" }
// // ❌ Delete a property
// delete user.city;
// console.log(user); // { name: "Ali", age: 22, isStudent: true, city: "Algiers" }
// ❓ Check if a property exists
console.log("healthcare" in shopping1); // true

// 🔑 Object.keys() → array of property names
console.log(Object.keys(User)[0]); // ["name", "age", "city"]

// // 🔢 Object.values() → array of property values
// console.log(Object.values(user)); // ["Ali", 22, "Algiers"]

// // 💫 Object.assign() - merging objects
// const additionalInfo = { hobby: "reading", language: "Arabic" };
shopping1.others = shopping2
console.log(shopping1); // { name: "Ali", age: 22, city: "Algiers", hobby: "reading", language: "Arabic" }
// Object.assign(User, user);
// console.log(User); // { name: "Mohamed", age: 25, isStudent: false, country: "Algeria" }

