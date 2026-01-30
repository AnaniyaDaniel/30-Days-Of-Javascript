// boolean : is a value of true or false
// if the condition is correct it returs true if it's note returns false
let x = 5;
console.log(x == 6); // fale
console.log(x == 5); // true

// undefined : if the value not assigned it returns undefiend
let car;
console.log(car); // undefined

//  null : it means no value
let city = "Addis Abeba";
city = null;
console.log(city); // null

// equal sign ( = ): is assignmetn operator use to assign
let firstName = "Ananiya";
let age = 19;

// arithmetic operators
// addition (+), subturaction(-) ,multiplication(-), division(/), modulus(%),exponential(**)
let a = 8;
let b = 7;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b); // 15,1,56,1.428571428571428,1,2097152

// comparison operators: it returns boolean value
// graterthan, lessthan, equalto, strictlyequal, graterthan/equalto, lessthan/equalto, notequalto,notstrictlyequalto
let i = 67;
let j = 48;
console.log(i > j, i < j, i == j, i === j, i <= j, i >= j, i != j, i !== j); //true false false false false true true true

// logical operators
// and(&&), or(||), negation(!)
let check1 = 4 > 3 && 10 > 5;
let check2 = 4 > 3 || 10 > 5;
let check3 = !(4 > 3);
console.log(check1, check2, check3); // true && true -> true, true  || true -> true, false

// increment and decrementr
// pre-increment, post-increment, pre-decrement, post-decrement
let count1 = 0;
console.log(++count1); // 1
let count2 = 0;
console.log(count2++); // 0
let count3 = 0;
console.log(--count3); // -1
let count4 = 0;
console.log(count4--); // 0

// window methods
// window alert()
alert("Welcome to 30DaysOfJavaScript");

// window prompt()
let request = prompt("Please enter your name");
console.log(request); // your name

// window confirm()
const agree = confirm("Are you sure you like to delete? ");
console.log(agree); //  boolean

// date object
const now = new Date();
console.log(now); // todays date and time
console.log(now.getFullYear()); // year
console.log(now.getMonth()); //month
console.log(now.getDay()); //day
console.log(now.getHours()); // hours
console.log(now.getMinutes()); //minutes
console.log(now.getSeconds()); // seconds
