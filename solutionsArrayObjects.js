let students = [
  {
    name: "Ali",
    age: 20,
    isStudent: true,
  },
  {
    name: "Sara",
    age: 22,
    isStudent: false,
  },
  {
    name: "Omar",
    age: 19,
    isStudent: true,
  },
];

students.forEach((student) => {
  console.log(
    `${student.name} age of ${student.age} is ${
      student.isStudent ? "" : "not "
    }a student.`
  );
});
