//loops: Imagine if I ask you to print out from 0 to 100 using console.log(). To implement this simple task it may take you 2 to 5 minutes, such kind of tedious and repetitive task can be carried out using loop

// for loop:
//  for(initialization, condition, increment/decrement){
//    code goes here
// }
for (let i = 0; i <= 5; i++) {
  console.log(i); // 0 1 2 3 4 5
}

// adding all elements in the array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 15

// ceating a new array based on the existing array
const numbers2 = [1, 2, 3, 4, 5];
const newArr = [];
let sum2 = 0;
for (let i = 0; i < numbers2.length; i++) {
  newArr.push(numbers2[i] ** 2);
}

console.log(newArr); // [1, 4, 9, 16, 25]

// while loop
let i = 0;
while (i <= 5) {
  console.log(i); // 0 1 2 3 4 5
  i++;
}

// do wile loop
let a = 0;
do {
  console.log(a); // 0 1 2 3 4 5
  a++;
} while (a <= 5);

// for of  loop: it is very hand way to iterate therough an array if we are not interested in the index of each element in the array.
// for (const element of arr) {
// code goes here
// }
const numbers3 = [1, 2, 3, 4, 5];

for (const num of numbers3) {
  console.log(num);
}

// break: is used to interrupt a loop
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i); // 0 1 2
}

// continue: is used to skip a certain iterations
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i); // 0 1 2 4 5
}
