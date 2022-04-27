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
    📝 Difference Between Values and Variables in JavaScript:
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
                    🤔❓ checking if the variable name is valid or not
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
                  🤔❓ Guess the output
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
                          🤔❓ Difference between null and undefined
                          🖋️ null:
                                We assign it explicitly to any variable
                          🖋️ undefined: 
                                We assigned the variable but didn't assigned any value to it is undefined.

💥8)
      🙋🏻 Interview Question-2:
                      🤔❓ What is NaN (Not a Number) ?
                      🖋️ NaN is a property of the global object
                      🖋️ In other words, it is a variable in global scope.
                      🖋️ The initial value of NaN is Not-A-Number

💥9)
      🏋🏻‍♂️ Challenge-3 Time: 
                    🤔❓ Guess the output
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
                  🤔❓ Guess The Output
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
                  🤔❓ What is difference between == vs === ?
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
