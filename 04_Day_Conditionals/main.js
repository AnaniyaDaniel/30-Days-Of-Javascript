// conditionals: uded for make decisions based on different conditions
// if: its key word used check if a condition is true and to execute the block code
let num1 = 3;
if (num1 > 0) {
  console.log(`${num1} is a positive number`); //  3 is a positive number
}

// if else: if condition is thrue the first block will execuded.if note the else condition will be executed.
let num2 = -3;
if (num2 > 0) {
  console.log(`${num2} is a positive number`);
} else {
  console.log(`${num2} is a negative number`); //  -3 is a negative number
}

// if else if else: checking multiple conditions
let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`); // 0 is zero
} else {
  console.log(`${a} is not a number`);
}

// switch: is an alternative for if else if else
let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket."); // It might be cold, you need a jacket
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

// ternary operators: another way to write conditionals in short
let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
