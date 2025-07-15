// 🔹 Simple if condition
let score = 70;
if (score >= 60) {
  console.log("You passed!");
} else if (score == 70) {
  console.log("mahboul");
} else if (score == 50) {
  console.log("slakte");
}
switch (score) {
  case 70:
    console.log("gg");
  case 70:
    console.log("mahboul");
  case 70:
    console.log("repeat");
  default:
    console.log("idk");
    break;
}
// 🔹 Multi-branch if...else if...else
let grade = "B";

if (grade === "A") {
  console.log("Excellent");
} else if (grade === "B") {
  console.log("Good job");
} else if (grade === "C") {
  console.log("You passed");
} else {
  console.log("Try again");
}

// 🔹 Same logic using switch (for exact matches)
switch (grade) {
  case "B":
    console.log("Excellent");
    break;
  case "A":
    console.log("Good job");
    break;
  case "C":
    console.log("You passed");
    break;
  default:
    console.log("Try again");
}

// 🔹 Complex condition (can’t be done with switch)
let age;

if (age) {
  console.log("makash");
} else{
  console.log('bnjr')
}
let hasID = true;
