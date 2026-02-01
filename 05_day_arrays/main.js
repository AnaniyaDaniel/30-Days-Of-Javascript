// array: an array can store multiple values. Each value in an array has an index, and each index has a reference in a memory address. Each value can be accessed by using their indexes. The index of an array starts from zero, and the index of the last element is less by one from the length of the array

// syntax
// This the most recommended way to create an empty list
const arr = [];
console.log(arr);

// creat an array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

// creating an array using split
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");
console.log(words);

// accessing array items using index
const car = ["volvo", "toyota", "mercedes", "tesla"];
let car1 = car[0];
console.log(car1);
let car2 = car[1];
console.log(car2);
let lastIndex = car.length - 1;
lastCar = car[lastIndex];
console.log(lastCar);

// modifying array element: Once an array is created, we can modify the contents of the array elements.
const num = [1, 2, 3, 4, 5];
console.log(num[0]);
let num1 = (num[0] = 10);
let num2 = (num[1] = 20);
console.log(num1, num2);

// methods to manipulate array: These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// array constructor
const ar = Array();
console.log(ar);

const eightEmptyValues = Array(8);
console.log(eightEmptyValues);

// creating static values with fill
let arr1 = Array(5).fill(7);
console.log(arr1); // [7,7,7,7,7]

// concatinatig array using concat
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// getting array length: to know the size of the array
const number = [1, 2, 3, 4, 5];
console.log(number.length); // -> 5 is the size of the array

// getting index an element in array
console.log(number.indexOf(5)); // -> 4
console.log(number.indexOf(0)); // -> -1
console.log(number.indexOf(1)); // -> 0
console.log(number.indexOf(6)); // -> -1

// geting last index of an element in array
const numbe = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbe.lastIndexOf(2));
console.log(numbe.lastIndexOf(0));
console.log(numbe.lastIndexOf(1));
console.log(numbe.lastIndexOf(4));
console.log(numbe.lastIndexOf(6));

// checking array
const number1 = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers)); // true

const number2 = 100;
console.log(Array.isArray(number2)); // false

// joining array elements
// join: it is used to join the elements of the array
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.join(" # "));

// splice method in array
// splice: it takes three parameters Starting position, number of times to be removed and number of items to be added
const number3 = [1, 2, 3, 4, 5];
number3.splice(0, 2);
console.log(number3); // [3, 4, 5]

// push: adding item in the end.
const item = ["item1", "item2", "item3"];
item.push("item4");
console.log(item); // [ "item1", "item2", "item3","item4"]

// pop: removing items in the end.
const numbers5 = [1, 2, 3, 4, 5];
numbers5.pop();
console.log(numbers5); //[ 1, 2, 3, 4]

// shift: removing one array element in the beginning of the array.
const numbers6 = [1, 2, 3, 4, 5];
numbers6.shift();
console.log(numbers6); //  [2,3,4,5]

// unshift: adding array element in the beginning of the
const numbers7 = [1, 2, 3, 4, 5];
numbers7.unshift(0);
console.log(numbers7); // [0,1,2,3,4,5]

// reverse: reverse the order of an array
const numbers8 = [1, 2, 3, 4, 5];
numbers8.reverse();
console.log(numbers8); // [5, 4, 3, 2, 1]

numbers8.reverse();
console.log(numbers8); // [1, 2, 3, 4, 5]

// sort: arrange array elements in ascending order.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); //
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// array can store diffetent data types including an array itself.
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [firstNums, secondNums];
console.log(arrayOfArray[0]); // [1, 2, 3]
console.log(arrayOfArray[1]); // [1, 4, 9,]
