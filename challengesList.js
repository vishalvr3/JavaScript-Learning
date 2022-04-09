// 🤯 Challenge-1: Guess if the variable name is valid o not (naming convention)

/*****************************🤯 Challenge-1:  ************************/
/********* Guess if the variable naming convention is correct **********/
/****************************** Day-1 index.js  ************************/

var _myName = "Vishal";
var _1my__Name = "Vishu";
// var 1myName  = "wishu"
var $myNAme = "Vish";

// console.log(_myName);     // 👍🏻
// console.log(_1my__Name);  // 👍🏻
// console.log(1myName);     // 👎🏻
// console.log($myNAme);     // 👍🏻

/*****************************🤯 Challenge-2:  *************************/
/***************************** Guess the output  ***********************/
/****************************** Day-1 index.js  ************************/

console.log(10 + "20"); //1020
console.log(9 - "5"); //4
console.log("Java" + "Script"); //JavaScript
console.log(" " + " "); // (two spaces)
console.log(" " + 0); // 0 (0 after a space)
console.log("Vishal" - "al"); //nan
console.log(true + true); //2 (1+1)
console.log(true + false); //1 (1+0)
console.log(false + false); //0 (0+0)
console.log(false - false); //0 (0-0)

/*****************************🤯 Challenge-3:  *************************/
/***************************** Guess the output  ***********************/
/****************************** Day-1 index.js  ************************/
console.log(NaN === NaN); //true
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN)); //true
console.log(isNaN(Number.NaN)); //true
console.log(Number.isNaN(NaN)); //true

/*****************************🤯 Challenge-4:  *************************/
/***************************** Guess the output  ***********************/
/****************************** Day-1 index.js  ************************/
// ✏️ What will be the output of 3**3? //27
console.log(3 ** 3);

// ✏️ What will be the output, when we add a number and a string?
console.log("The average life span of humans is: " + 70 + " Years");

// ✏️ Write a programme to swap two numbers.
var a = 5;
var b = 10;
console.log(a, b);

var c = a; // we took the third variable c = 5
a = b; // a = 10
b = c; // b = 5
// console.log(a, b);

// ✏️ Write a programme to swap two numbers without using third variable.
var a = 1;
var b = 2;
console.log(a, b);

a = a + b; //1 + 2, a = 3
b = a - b; //3 - 2, b = 1
a = a - b; //3 - 1, a = 2
console.log(a, b);
