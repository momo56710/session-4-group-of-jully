// 🔹 1. for loop → repeat a known number of times

// ✅ Use case: Show steps 1 to 5, print numbers, repeat N times
for (var i = 1; i < 10; i++) {
  console.log("i" + i);
  let a = Math.floor(Math.random() * 10 + 1);
  console.log("a:" + a);
  if (a === 5) break;
}
console.log(i);
// 🔹 2. while loop → repeat while condition is true
let count = 3;
while (count >= 0) {
  console.log("Countdown:", count);
  count--;
}
// ✅ Use case: Wait until condition is false (like battery > 0, lives left)
// ❌ Don’t use if you need guaranteed one-time execution

// 🔹 3. do...while loop → run at least once, even if condition is false
let tries = 0;
do {
  console.log("This runs once even if condition is false.");
  tries++;
} while (tries < 1);
// ✅ Use case: Show message, ask for input once minimum
// ❌ Don't use if you need to check condition first
