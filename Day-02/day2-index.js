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
