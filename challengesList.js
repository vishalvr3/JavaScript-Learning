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

/*****************************🤯 Challenge-8:  *************************/
/************* SORTING ARRAY IN ASCENDING and DESCENDING ORDER*********/
/****************************** Day-3 index.js  ************************/
// ⁉️1
const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Orange' ]

// ⁉️2
const arr1 = [1, 30, 4, 21, 100000, 99];

console.log(arr1.sort()); // [ 1, 100000, 21, 30, 4, 99 ]
console.log(arr1.sort((a, b) => a - b)); // [ 1, 4, 21, 30, 99, 100000 ]

/*****************************🤯 Challenge-9:  *************************/
/******************************* Array Methods *************************/
/****************************** Day-3 index.js  ************************/
/*
const months = ["Jan", "march", "April", "June", "July"]
1: Add Dec at the end of an Array?
2: What is the return value of splice method?
3: update march to March (update) ?
4: Delete June from an array ?
*/
// SOLs-
const monthList = ["Jan", "march", "April", "June", "July"];

//🧑🏻‍💻 Sol-1
// monthList.push("Dec");
// const newMonth = monthList.splice(5, 0, "Dec");
// const newMonth = monthList.splice(monthList.length, 0, "Dec");
// console.log(monthList); // [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]

//🧑🏻‍💻 Sol-2
// const spliceMonth = monthList.splice(1, 3);
// console.log(spliceMonth); // [ 'march', 'April', 'June' ] // removed 3 elements from index 1
// console.log(monthList); // [ 'Jan', 'July', 'Dec' ]

//🧑🏻‍💻 Sol-3
// const updateMarch = monthList.splice(1, 1, "March");
// console.log(monthList); // [ 'Jan', 'March', 'April', 'June', 'July' ]

// const indexMarch = monthList.indexOf("march");
// if (indexMarch != -1) {
//   const updateMarch = monthList.splice(indexMarch, 1, "March");
// } else {
//   console.log("No such data find");
// }
// console.log(monthList); // [ 'Jan', 'March', 'April', 'June', 'July' ]

//🧑🏻‍💻 Sol-4
// const indexJune = monthList.indexOf("June");
// console.log(indexJune); // 3
// console.log(monthList.splice(indexJune, 1)); // [ 'June' ]
// console.log(monthList); // [ 'Jan', 'march', 'April', 'July' ]

/*****************************🤯 Challenge-10:  ************************/
/********************* MAP and FILTER Practice challenge****************/
/****************************** Day-3 index.js  ************************/
/*
⁉️🤯 1- Find the square root of each element in an array.
        let arr = [25, 36, 49, 64, 81]
⁉️🤯 2- Multiply each element by 2 and return only those elements which are greater than 10?
        let arr = [2,3,4,6,8]
*/
//🧑🏻‍💻SOl-1
let arrSqrt = [25, 36, 49, 64, 81];
const sqrtedArr = arrSqrt.map((num) => Math.sqrt(num));
// console.log(sqrtedArr); // [ 5, 6, 7, 8, 9 ]

//🧑🏻‍💻SOl-2
let arrMult = [2, 3, 4, 6, 8];

// const multedArr = arrMult.map((num) => num * 2);
// console.log(multedArr); // [ 4, 6, 8, 12, 16 ]
// const filteredMultedArr = multedArr.filter((num) => num > 10);
// console.log(filteredMultedArr); // [ 12, 16 ]

const multFiltArr = arrMult.map((num) => num * 2).filter((num) => num > 10);
// console.log(multFiltArr);
