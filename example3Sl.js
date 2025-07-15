let students = [
  {
    name: "said",
    age: 45,
    isPresent: false,
  },

  {
    name: "mohamed",
    age: 30,
    isPresent: false,
  },
];

students.map((student) => {
  console.log(
    `${student.name} (${student.age}) - ${
      student.isPresent ? "Present" : "Absent"
    }`
  );
});
students.push({
  name: "rania",
  age: 24,
  isPresent: false,
});

students[3] ? console.log(`Added new student : ${students[3].name}`) : console.log('student Addition failed')
students.pop()
!students[3] ? console.log(`student Remved`) : console.log('student deletion failed')

students[0].nationalty = 'algerian'

console.log(...Object.keys(students[0]))
console.log(Object.keys(students[1]))