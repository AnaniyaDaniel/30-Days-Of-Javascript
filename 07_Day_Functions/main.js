// functions: A function is a reusable block of code or programming statements designed to perform a certain task

// 1, function declaratio
// function functionName(){
// }
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq); // 4
}
square(); // 4
function printFullName() {
  let firstName = "Ananiya";
  let lastName = "Daniel";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}
printFullName(); // Ananiya Daniel

// function returnig value
function addTwoNumbers() {
  let numOne = 2;
  let numTwo = 3;
  let sum = numOne + numTwo;
  return sum;
}
console.log(addTwoNumbers()); // 5

// function with a parameter: In a function we can pass different data types(number, string, boolean, object, function) as a parameter
function myFunction(num2) {
  let newsum = 6 + num2;
  return newsum;
}
console.log(myFunction(8)); // 14

// function with two parameters
function functionName(para1, para2) {
  let deffrence = para1 / para2;
  return deffrence;
}
console.log(functionName(12, 6));

// function with many parameters
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers)); //15

//anonymous function: without name
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun",
  );
};

// expressinon function: After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable.
const squ = function (n) {
  return n * n;
};
console.log(squ(5)); // 25

// self invoking functions: are anonymous functions which do not need to be called to return a value
let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum); // 100

// arrow function: uses arrow instead of the keyword function to declare a function.
// const square = n =>{
// return n
// }

const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(fullName("Ananiya", "Daniel")); // Ananiya Daniel

// function with default parameters: Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values

// with declaration function
function greetings(name = "Jhon") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
  return message;
}
console.log(greetings()); // Jhon
console.log(greetings("Ananiya")); //Ananiya

// with arrow function
const greetings2 = (name = "Jhon") => {
  let message2 = name + ", welcome to 30 Days Of JavaScript!";
  return message2;
};
console.log(greetings2()); // Jhon
console.log(greetings2("Ananiya")); // Ananiya
