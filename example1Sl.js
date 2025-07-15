const name = "mohamed";
let age = 22;
let isStudent = false;
let isOlder = age > 21;
let isYonger = age < 18;
let isStudentOrTeacher = isStudent || true;
let isStudentAndTeacher = isStudent && true;

console.log("hello World");
console.log(`name : ${name}`);
console.log(`age : ${age}`);
console.log(`isStudent : ${isStudent}`);
console.log(`is older than 21: ${isOlder}`);
console.log(`is younger than 18: ${isYonger}`);
console.log(`student or teacher: ${isStudentOrTeacher}`);
console.log(`student and teacher: ${isStudentAndTeacher}`);
console.log(`your age next year: ${++age}`);
