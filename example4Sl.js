const calcAvrg = (nums) => {
  let total = 0;
  nums.forEach((num) => {
    total += num;
  });
  return total / nums.length;
};

const getGrades = function (grade) {
  if (grade >= 90) {
    return "A";
  }
  if (grade >= 75) {
    return "B";
  }
  if (grade >= 60) {
    return "C";
  } else {
    return "F";
  }
};
const showResults = (name, note, grade) => {
  return `${name} scored ${note} which is ${grade}`;
};

const finalFun = (name, ...notes) => {
  const note = calcAvrg(notes);
  const grade = getGrades(note);
  return showResults(name, note, grade);
};

console.log(finalFun("amine", 80, 90, 60, 50, 42, 30, 20, 40));
console.log(finalFun("said", 80, 90, 60, 50, 80, 36, 80, 50));
// const verifyAndGetGrade = (grade) => {
//   if (grade < 0) {
//     return `invalid Mark`;
//   }
//   if (typeof grade === "number") {
//     getGrades(grade);
//     return;
//   }
//   return "invalid type";
// };
// let grades = [];
// const typeGrade = (grade) => {
//   if (typeof grade === "number") {
//     grades.push(grade);
//     return;
//   }
//   return "invalid type";
// };
// console.log(verifyAndGetGrade("dsad"));
