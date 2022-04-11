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

/*****************************🤯 Challenge-5:  *************************/
/***************************** Leap Year Or Not  ***********************/
/****************************** Day-2 index.js  ************************/

// 🤔❓ Write a program that works out whether if a given year is a leap year or not.
// Solution:
var year = 2400; // 1988, 1992, 1996, 1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600, 1600, 2000, 2400
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      // console.log("Leap year");
    } else {
      // console.log("Not a leap year");
    }
  } else {
    // console.log(`${year} is a leap year`);
  }
} else {
  // console.log(`${year} is Not a leap year`);
}

/*****************************🤯 Challenge-6:  *************************/
/********************* Program to write Table of number  ***************/
/****************************** Day-2 index.js  ************************/

// 🤔❓ Write a JS program to print table for given number (8,9,12,15) using for Loop.
var num = 8; //8,9,12,15

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

/*****************************🤯 Challenge-7:  *************************/
/**************** Function Parameter and Function Arguments ************/
/****************************** Day-2 index.js  ************************/

// 🤔❓ What is the difference between Function Parameter and Function Arguments?
/*
📝 Function paramneters are the names listed in the function definitions.
📝 Function arguments are the real values passed to the function.
*/
