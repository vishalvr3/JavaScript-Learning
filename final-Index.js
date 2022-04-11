/*📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆*/
/*📆📆📆📆📆📆📆📆📆📆 DAY-1 📆📆📆📆📆📆📆*/
/*📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆*/

/*🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒
📔📔📔 📔 TOPICS and THEORY 📔📔📔📔

💥1)
      Install Visual Studio Code
      Install Node JS

      👉🏻 To run index.js
          in terminal> node index.js

💥2)
    📝 Difference Between Values and Variables in JavaScript
         var myName = "Vishal Singh Chauhan";
      Here,
          Variable (key) = var  (used to store value or say data)
          Variable Name = myName
          Value = "Vishal Singh Chauhan"


💥3)
      Naming Conventions in JS:
                         👉🏻 First letter must be a letter or an (_) or an ($). You can't use a number as the first character.
                         👉🏻 Names are case-sensitive, lowercase and uppercase are different.
                         👉🏻 Start variable names with a letter, use camelCase for names.
                         👉🏻 Variable names should be self-descriptive, describing the stored value.
                         👉🏻 Can't use reserve keywords
                         👉🏻  Boolean variables are usually prefixed with is or has.

💥4)
      🏋🏻‍♂️ Challenge-1 Time:
                    checking if the variable name is valid or not
                    1. var _myName    👍🏻
                    2. var _1my__Name 👍🏻
                    3. var 1myName    👎🏻
                    4. var $myNAme    👍🏻


💥5)
      Data Types In JavaScript:
                    🖊️ Seven Primitive Data Types in JS-

                    String: typeof instance === "string"
                    Number: typeof instance === "number"
                    Boolen: typeof instance === "boolean"
                    undefined: typeof instance === "undefined"
                    null: typeof instance === "object"
                    BigInt: typeof instance === "bigint"
                    Symbol: typeof instance === "symbol"

                    🖊️ Non-Primitive Data Types in JS-
                    Non-primitive data types refer to objects.
                    Array:
                    Object:


💥6)
     🏋🏻‍♂️ Challenge-2 Time: 
                    Guess the output
                  ✏️ 10 + "20"          // 1020
                  ✏️ 9 - "5"            // 4
                  ✏️ "Java" + "Script"  // javaScript
                  ✏️ " " + " "          // (two spaces)
                  ✏️ " " + 0            // 0 (0 after a space)
                  ✏️ "Vishal" - "al"    // nan
                  ✏️ true + true        // 2 (1+1)
                  ✏️ true + false       // 1 (1+0)
                  ✏️ false + false      // 0 (0+0)
                  ✏️ false - false      // 0 (0-0)

💥7)
      🙋🏻 Interview Question-1:
      Difference between null and undefined
                          🖋️ null:
                                We assign it explicitly to any variable
                          🖋️ undefined: 
                                We assigned the variable but didn't assigned any value to it is undefined.

💥8)
      🙋🏻 Interview Question-2:
      What is NaN (Not a Number) ?
                      🖋️ NaN is a property of the global object
                      🖋️ In other words, it is a variable in global scope.
                      🖋️ The initial value of NaN is Not-A-Number

💥9)
      🏋🏻‍♂️ Challenge-3 Time: 
                     Guess the output
                    ✏️ NaN === NaN //true
                    ✏️ Number.NaN === NaN // false
                    ✏️ isNaN(NaN) //true
                    ✏️ isNaN(Number.NaN) //true
                    ✏️ Number.isNaN(NaN) //true


💥10)
      Expressions and Operators:
                              operand: nums beside the operators
                              operator: + - * / % > < = != === !=== 
                              expression: operand + operator

                              3 + 6
                            🗒️ 3 and 6 === operand
                            🗒️ + === operator
                            🗒️ Expression === combination of operand and operator

💥11)
      Operators In JS:
                        🖋️ Assignment operators:
                                                Assigns a value
                                                var a = 3
                                                var b = 6
                        🖋️ Arithmetic Operators:
                        🖋️ Comparison Operators:
                                                Comparison operator compares its operands and returns a #logical_value.
                                                example: ==, ===, !=, !== >, <, >=, <=
                        🖋️ Logical Operators:
                                          Logical operators are typically used with Boolean (logical) value.
                                          example: && (logical AND) (all true)
                                                   || (logical OR) (one true)
                                                   ! (logical NOT) (reverses)
                        🖋️ String Operators:
                                           Concatenates two string values
                                           example: "Vishal" + "Chauhan"
                        🖋️ Conditional (ternary) Operator:
                                          condition ? exprIfTrue : exprIfFalse

                        🧨 Increment and Decrement Operator
                              📝 Also Called as uniry operator, as it accepts only one operand
                              🖋️ Operator: x++ or ++x or x-- or --x
                                    💣If used postfix, with operator after operand (example, x++)
                                    💣 First returns then increments.

                                    💣If used prefix, with operator before operand (example, ++x)
                                    💣 First  increments then returns.
                              🔗 Best place to understand it, check description box also-
                                                       https://www.youtube.com/watch?v=yPpclaO3ecY


💥12)
      🏋🏻‍♂️ Challenge-4 Time:
                  Guess The Output
                  ✏️ What will be the output of 3**3? (exponential operator)
                     Sol: 3 * 3 * 3 = 27

                  ✏️ What will be the output, when we add a number and a string?
                     sol: Concatenates the number and the string

                  ✏️ Write a programme to swap two numbers.
                     sol: Down in practical

                  ✏️ Write a programme to swap two numbers without using third variable.
                     sol: Down in practical

💥13)
      🙋🏻 Interview Question-3:
      What is difference between == vs === ?
      📝 == : Value same (abstract equality)
      📝 === : Value and Data type same (strict equality)

🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒*/

/*📔📔📔📔📔📔📔📔 TOPICS and PRACTICAL 📔📔📔📔📔📔📔📔📔*/

// 💥1)  Install Visual Studio Code and Install Node JS:
/*
💽 Visual Studio Code:  https://code.visualstudio.com/
💽 Node JS: https://nodejs.org/en/download/

👨🏻‍💻 Inside Terminal
> node --version ↵
> console.log("Hello World") ↵
> node ↵
*/

// 💥2) 📝 Difference Between Values and Variables in JavaScript:
var myName = "Vishal Singh Chauhan";
console.log(myName);

// 💥3) Naming Conventions in JS:
var myAge = 25; // descriptive 👍🏻
var _myName = 25; // must not start with a number 👍🏻
var $myName = 25; // must not start with a number 👍🏻
var myFirstSchool = "Kendriya Vidyalaya INA"; // camel case 👍🏻

// var  1myName = 25; // must not start with a number 👎🏻
var jungle = "Yahooooo";
//console.log(Jungle); // jungle is not same as Jungle 👎🏻
var console = "print it";
console.log(console); // can't use reserve keyword as variable name 👎🏻

// 💥4) 🏋🏻‍♂️ Challenge-1 Time:
var _myName = "Vishal";
var _1my__Name = "Vishu";
// var 1myName  = "wishu"
var $myNAme = "Vish";

console.log(_myName); // 👍🏻
console.log(_1my__Name); // 👍🏻
// console.log(1myName);     // 👎🏻
console.log($myNAme); // 👍🏻

// 💥5) Data Types In JavaScript:
var myName = "Vishal Singh";
console.log(typeof myName); // sring

var cartoonNetworkChannel = 33;
console.log(typeof cartoonNetworkChannel); // number

var isVishalTeenager = false;
console.log(typeof isVishalTeenager); // boolean

var nature = "is beauty";
// console.log(typeof nattture); // undefined

// console.log(nattture);

// 💥6) 🏋🏻‍♂️ Challenge-2 Time:
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

// 💥7) 🙋🏻 Interview Question-1:
var iAmUseless = null;
console.log(iAmUseless); // null
console.log(typeof iAmUseless); // object

var iAmStandBy;
console.log(iAmStandBy); // undefined
console.log(typeof iAmStandBy); // undefined

// 💥8) 🙋🏻 Interview Question-2:
var userName = "vishalam";
var userNum = 36;

console.log(userName + userNum); // vishalam36
console.log(userName - userNum); //NaN
console.log(userName * userNum); //NaN
console.log(userName / userNum); //NaN
console.log(userName % userNum); //NaN

console.log(isNaN(userName)); //true
console.log(isNaN(userNum)); //false
console.log(isNaN(userName + userNum)); //true
console.log(isNaN(userName - userNum)); //true

// 💥9) 🏋🏻‍♂️ Challenge-3 Time:
console.log(NaN === NaN); //false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN)); //true
console.log(isNaN(Number.NaN)); //true
console.log(Number.isNaN(NaN)); //true

// 💥10) Expressions and Operators:

// 💥11) Operators In JS:
/*Assignment operator*/
var a = 3;
var b = 3;

console.log(a + b); // 3 + 6 is an expression
console.log("Is both a and b equal:" + a == b); // false
console.log(`Is both a and b equal: ${a == b}`); // true

/*Arithmetic operator*/
console.log(3 + 6); //9
console.log(3 - 6); //-3
console.log(3 * 6); //18
console.log(3 / 6); //0.5
console.log(3 % 6); //remainder 3
console.log(8 % 3); //remainder 2

/*🧨🧨🧨🧨 Increment and Decrement Operator 🧨🧨🧨🧨*/
// 🤬 postfix (x++ or x-- , first assigns then increments)
var num = 10;
var newNum = num++ + 5;

console.log(num); // 11
console.log(newNum); // 15

// 🤬 prefix (++x or --x , first increments then assigns)
var num = 10;
var newNum = ++num + 5;

console.log(num); // 11
console.log(newNum); // 16

/*Comparison Operator*/
var a = 10;
var b = 20;

// Equal (==)
console.log(a == b); //false

// Not Equal (!=)
console.log(a != b); //true

// greater than (>)
console.log(a > b); //false

//less than than (<)
console.log(a < b); //true

// greater than or equal (<=)
console.log(a >= b); //false

// less than or equal (<=)
console.log(a <= b); //true

/*Logical Operators*/
var a = 10;
var b = 30;

// && (logical AND)
console.log(a > 4 && b > 4); //true
console.log(a < 4 && b > 4); //false

// || (logical ||)
console.log(a > 4 || b > 4); //true
console.log(a < 4 || b > 4); //true

// ! (logical NOT)
console.log(a > 4 && b > 4); //true
console.log(!(a > 4 && b > 4)); //false (reverses)

console.log(!true); //false
console.log(!false); //true

/*String Operators*/
var firstName = "Vishal";
var lastName = "Chauhan";

console.log(firstName + lastName); // VishalChauhan
console.log(firstName + " " + lastName); // Vishal Chauhan

/*Ternary Operator*/
var myAge = 25; // another value 14
var minAge = 18;

console.log(myAge >= minAge ? "Serve Wine 🍷🍺" : "Serve Juice 🥤🧃"); // Serve Wine 🍷🍺

// 💥12) 🏋🏻‍♂️ Challenge-4 Time:
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
console.log(a, b);

// ✏️ Write a programme to swap two numbers without using third variable.
var a = 1;
var b = 2;
console.log(a, b);

a = a + b; //1 + 2, a = 3
b = a - b; //3 - 2, b = 1
a = a - b; //3 - 1, a = 2
console.log(a, b);

// 💥13) 🙋🏻 Interview Question-3:
console.log(2 == 2); //true
console.log(2 === 2); //true
console.log(2 == "2"); //true (abstract equality)
console.log(2 === "2"); //false (Strict equality, value is same but data type isn't)

/*📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆*/
/*📆📆📆📆📆📆📆📆📆📆 DAY-2 📆📆📆📆📆📆📆*/
/*📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆📆*/

/*🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒
📔📔📔 📔 TOPICS and THEORY 📔📔📔📔
💥14)
      Control Statement and Loop:
                          ➰ If-Else
                          ➰ Switch Statement
                          ➰ While Loop
                          ➰ Do-While Loop
                          ➰ For Loop
                          ➰ For In Loop
                          ➰ For Of Loop
                          ➰ Conditional (ternary) Operator

💥15)
      ➰ If-Else:
                📝 The if statement to specify a block of JavaScript code to be executed if a condition is true.
                📝 The else statement to specify a block of code to be executed if the condition is false.

                👨🏻‍💻 if(true) {
                        // Code block
                    } else {
                       // Code vlock
                    }

💥16)
      🏋🏻‍♂️ Challenge Time (if else statement):
                                        🤔❓ Write a program that works out whether if a given year is a leap year or not.


💥17)
      What is truthy and falsy values in JavaScript?
                            📝 Truthy Values: All values which aren't falsy is truthy.
                                       ✅ Boolean (true)
                                       ✅ Boolean ({})
                                       ✅ Boolean ([])
                                       ✅ Boolean (42)
                                       ✅ Boolean ("0")
                                       ✅ Boolean ("false")
                                       ✅ Boolean (new Date())
                                       ✅ Boolean (-42)
                                       ✅ Boolean (12n)
                                       ✅ Boolean (3.14)
                                       ✅ Boolean (-3.14)
                                       ✅ Boolean (Infinity)
                                       ✅ Boolean (-Infinity)

                            📝 Falsy Values:
                                       ❌ Boolean (false)
                                       ❌ Boolean (0)
                                       ❌ Boolean (0n)
                                       ❌ Boolean ("") //empty string
                                       ❌ Boolean (null)
                                       ❌ Boolean (unefined)
                                       ❌ Boolean (NaN)


💥18)
      Conditional (ternary) Operator:
                            📝 It is a short-hand if else, which  is known as the "ternary operator", because it consists of #Three_Operands.

                            👨🏻‍💻 variable = (condition) ? expressionTrue :  expressionFalse;


💥19)
      ➰ Switch Statement:
                          📝 The switch statement is used to perform different actions based on different conditions.
                          📝 Break: Terminates the current loop

                          👨🏻‍💻 switch(expression) {
                                      case x:
                                        // code block
                                        break;
                                      case y:
                                        // code block
                                        break;
                                      default:
                                        // code block
                              }


💥20)
      ➰ While Loop:
                    📝 The while loop loops through a block of code as long as a specified condition is true.

                    👨🏻‍💻 while (i < 10) {
                          text += "The number is " + i;
                          i++;
                        }


💥21)
      ➰ Do-While Loop:
                    📝 The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.
                    📝 The do...while is used when you want to run a code block at least one time.

                    👨🏻‍💻 let text = "";
                        let i = 0;
                        do {
                          text += i + "<br>";
                          i++;
                        }
                        while (i < 5);



💥22) 
      ➰ For Loop:
                  📝 The for statement defines a code block that is executed as long as a condition is true.

                  👨🏻‍💻 for (let i = 0; i < 5; i++) {
                        text += i + "<br>";
                      }


💥23)
       🏋🏻‍♂️ Challenge Time (For-Loop):
                        🤔❓ Write a JS program to print table for given number (8,9,12,15) using for Loop.
                    

💥24) 
      Functions in JavaScript:
                          👨🏻‍💻 Function Definition:
                                                📝 A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
                                                📝 A block of code which we need to use again and again.
                          👨🏻‍💻 Calling a Function:
                          👨🏻‍💻 Function Parameter:
                                                📝 Placeholder
                          👨🏻‍💻 Function Arguments:
                                                📝 Real values while calling function.
                          👨🏻‍💻 Function Declaration:
                                                📝 normal written function is calkled a s "function declaration".
                          👨🏻‍💻 Function Expressions:
                                                📝 Storing a function in a variable is "function expression".
                          👨🏻‍💻 Return Keyword:
                          👨🏻‍💻 Anonymous Function:
                                                📝 Anonymous Function is a function that does not have any name associated with it.


💥25)
      🏋🏻‍♂️ Challenge Time:
                      🤔❓ What is the difference between Function Parameter and Function Arguments?
                      📝 FUnction paramneters are the names listed in the function definitions.
                      📝 FUnction arguments are the real values passed to the function.


💥26)
      🙋🏻 Interview Question:
                        🍙Question: Why Functions?
                         We can reuse code: Define the code once , and use it many times.
                        📝 We can use the dame code many times with different arguments, to produce different results.

                        OR

                        📝 A function is a group of reusable code which can be called anywhere in our program. This eliminates the need of writing the same code again and again.



💥27)
      Function Expressions:
                          📝 A function expression can be stored in a variable.
                          📝 After a function expression has been stored in a variable, the variable can be used as a function.

              
// 💥28) Anonymous Expressions:
                          📝 Anonymous Function is a function that does not have any name associated with it.
                        

🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒*/

/*📔📔📔📔📔📔📔📔 TOPICS and PRACTICAL 📔📔📔📔📔📔📔📔📔*/
// 💥14) Control Statement and Loop:

// 💥15) ➰ If-Else:
/*If-Else*/
// var profile = "Developer";
var profile = "Teaher";

if (profile === "Developer") {
  // console.log("Welcome Developer");
} else {
  // console.log("Sorry .... you are not welcome");
}

// 💥16) Challenge: Write a program that works out whether if a given year is a leap year or not.
/*My-solution*/
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

// 💥17) What is truthy and falsy values in JavaScript:
var val = 0; //falsy (so it will go to else part unless its score===0)

if (val) {
  // console.log("You passed 🎉🥂");
} else {
  // console.log("you failed 😥💣");
}

// 💥18) ➰ Conditional (ternary) Operator:
/*normal if-else*/
var age = 18;

if (age >= 18) {
  // console.log(`Can have the license 🚗🚗🚗🚗`);
} else {
  // console.log(`Can't have the license`);
}

/*Ternary Operator*/
// console.log(age >= 18 ? `Serve wine 🍷🍷` : `Serve Juice 🥤🧃`);

// 💥19)  ➰ Switch Statement:
/*Print the days and Anime Characters*/
var day = "tuesday";

switch (day) {
  case "monday":
    // console.log("It's Monday, Hinomaru");
    break;
  case "tuesday":
    // console.log("It's Tuesday, Taiga");
    break;
  case "wednesday":
    // console.log("It's Wednesday, Goku");
    break;
  case "thursday":
    // console.log("It's Thursday, Ash Ketchum");
    break;
  case "friday":
    // console.log("It's Friday, Conan");
    break;
  case "saturday":
    // console.log("It's Saturday, Saitama");
    break;
  case "sunday":
    // console.log("It's Sunay, Luffy");
    break;
  default:
  // console.log("Wrong Input");
}

/*Find the area of circle, triangle and rectangle*/
var shape = "rectangle";

var PI = 3.14;
var radius = 2;

var base = 3;
var height = 4;

var length = 5;
var breadth = 4;

switch (shape) {
  case "circle":
    // console.log(`The area of circle is: ${PI * radius ** 2}`);
    break;
  case "triangle":
    // console.log(`The area of triangle is: ${0.5 * base * height}`);
    break;
  case "rectangle":
    // console.log(`The area of rectangle is: ${length * breadth}`);
    break;
  default:
  // console.log(`Enter a valid shape`);
}

// 💥20) ➰ While Loop:
var i = 0;

// while (i < 10) {
//   console.log(i); //infinite loop
// }

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// 💥21) ➰ Do-While Loop:
var num = 11;

// do {
//   console.log(num);
//   num++;
// } while (num <= 10);

// 💥22) ➰ For Loop:
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 💥23) 🏋🏻‍♂️ Challenge Time (For-Loop):
/*🤔❓ Write a JS program to print table for given number (8,9,12,15) using for Loop.*/
var num = 8; //8,9,12,15

// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// 💥23) Functions in JavaScript:
/*Without function*/
var a = 10;
var b = 20;
// var sum = a + b;
// console.log(sum);

/*With function, #function declaration*/
function sum(a, b) {
  // console.log(a + b);
}
sum(12, 24); // calling/invoking a function

/*returning val from the function*/
function sum(a, b) {
  return a + b;
}
// console.log(sum(2, 3));

// 💥25) 🏋🏻‍♂️ Challenge Time:
/*🤔❓ What is the difference between Function Parameter and Function Arguments?*/

// 💥26) 🙋🏻 Interview Question: 🍙Question: Why Functions?

// 💥27) Function Expressions:
function sum(a, b) {
  return a + b;
}

var funExp = sum(40, 50);
// console.log(funExp);

// 💥28) Anonymous Expressions: (function with no name)
var mySelf = function (name) {
  return `Hi... i am  ${name}`;
};
console.log(mySelf("vishal")); // Hi... i am  vishal
