// //! 1. What will be the output of the following code and why?

// function scopeTest() {
//   if (true) {
//     var varVariable = "I am var";
//     let letVariable = "I am let";
//     const constVariable = "I am const";
//   }
//   console.log(varVariable);
//   console.log(letVariable);
//   console.log(constVariable);
// }
// scopeTest();

// The output of the code will be:

// I am var
// Uncaught ReferenceError: letVariable is not defined
// Uncaught ReferenceError: constVariable is not defined

// Here's why:

// 1.  varVariable: The variable varVariable is declared using var inside the if block. In JavaScript, variables declared with var have function scope, meaning they are accessible throughout the entire function in which they are declared. Therefore, varVariable is accessible outside the if block but still within the scopeTest function. Thus, console.log(varVariable) will print "I am var".

// 2.  letVariable and constVariable: The variables letVariable and constVariable are declared using let and const, respectively. Both let and const have block scope, meaning they are only accessible within the block in which they are declared. In this case, the block is the if block. Therefore, when console.log(letVariable) and console.log(constVariable) are executed outside the if block, JavaScript throws a ReferenceError because these variables are not defined in that scope.



//! 2. Write a function 'greet' that takes two parameters, 'name' and 'greeting'.'greeting' should have a default value of "Hello". If only the 'name' is provided,the function should return the greeting followed by the name. If both are provided,it should return the custom greeting followed by the name.

function greet(name, greeting = "Hello") {
  return `"${greeting}, ${name}!"`;
}
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"

//! 3. Write a function sum that takes any number of arguments and returns their sum using the rest parameter.

function sum(...numbers) {
  let total = 0;
  for (const a of numbers) {
    total += a;
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5

//! 4. Given the following arrays, use the spread operator to merge them into a new array mergedArray.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const mergedArray = [...array1, ...array2, ...array3];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//! 5. Write an object person using the object literal syntax extensions.The object should have properties name and age, and a method greet that returns a greeting message.

const name = "John";
const age = 30;
const person = {
  name,
  age,
  greet2() {
    return `"Hi, I'm ${name} and I'm ${age} years old."`;
  },
};
console.log(person.greet2()); // "Hi, I'm John and I'm 30 years old."

//! 6. Write a for...of loop to iterate over the following array and print each element to the console.

const fruits = ["apple", "banana", "cherry"];
for (const items of fruits) {
  console.log(items);
}

//! 7. Use template literals to create a string that includes variables name and age.

const name2 = "Alice";
const age2 = 25;
const message = `"My name is ${name2} and I am ${age2} years old."`;
console.log(message); // "My name is Alice and I am 25 years old."

//! 8. You have an array of objects representing students and their grades.Use a for...of loop to iterate over the array and print each student's name and grade.

const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 },
];
for (const student of students) {
  console.log(`${student.name}: ${student.grade}`);
}

//! 9. You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements.

const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (const array of nestedArrays) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  console.log(sum);
}

//! 10. Use template literals to create a string that includes variables a and b, as well as the result of their addition.

const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."
