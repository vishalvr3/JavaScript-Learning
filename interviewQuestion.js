/******************************************************************/
/************************* INTERVIEW QUESTIONS ********************/
/******************************************************************/

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
// 🍙Question-1: Difference between null and undefined

/*
//THEORY
🖋️ null:
We assign it explicitly to any variable
🖋️ undefined: 
We assigned the variable but didn't assigned any value to it is undefined.
*/

var iAmUseless = null;
// console.log(iAmUseless); // null
// console.log(typeof iAmUseless); // object

var iAmStandBy;
// console.log(iAmStandBy); // undefined
// console.log(typeof iAmStandBy); // undefined

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
// 🍙Question-2: What is NaN (Not a Number)
/*
//THEORY
🖋️ NaN is a property of the global object
🖋️ In other words, it is a variable in global scope.
🖋️ The initial value of NaN is Not-A-Number
*/

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

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
// 🍙Question-3: Difference betweeen == and ===
/*
//THEORY
🖋️ == : Value same (abstract equality)
🖋️ === : Value and Data type same (strict equality)
*/

console.log(2 == 2); //true
console.log(2 === 2); //true
console.log(2 == "2"); //true (abstract equality)
console.log(2 === "2"); //false (Strict equality, value is same but data type isn't)

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
// 🍙Question-4: What is truthy and falsy values in JavaScript?
/*
//THEORY
    📝 Truthy Values: All values which aren't falsy is truthy.
                      🖊️ Goes to "If" part
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
                      🖊️ Goes to "Else" part
                      ❌ Boolean (false)
                      ❌ Boolean (0)
                      ❌ Boolean ("") //empty string
                      ❌ Boolean (unefined)
                      ❌ Boolean (null)
                      ❌ Boolean (NaN)
                      ❌ Boolean (0n)
*/

var val = 0; //falsy (so it will go to else part unless its score===0)

if (val) {
  console.log("You passed 🎉🥂");
} else {
  console.log("you failed 😥💣");
}

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
// 🍙Question-6: Conditional (ternary) Operator:
/*
//THEORY
📝 It is a short-hand if else, which  is known as the "ternary operator", because it consists of #Three_Operands.
👨🏻‍💻 variable = (condition) ? expressionTrue :  expressionFalse;
*/

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
/*
//THEORY
📝 Functions in JavaScript:
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
*/

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
/*
//THEORY
        Interview Question:
                        🍙Question: Why Functions?
                         We can reuse code: Define the code once , and use it many times.
                        📝 We can use the dame code many times with different arguments, to produce different results.

                        OR

                        📝 A function is a group of reusable code which can be called anywhere in our program. This eliminates the need of writing the same code again and again.
*/

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
/*
//THEORY
        Function Expressions:
                          📝 A function expression can be stored in a variable.
                          📝 After a function expression has been stored in a variable, the variable can be used as a function.
*/

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
/*
//THEORY
        Anonymous Expressions:
                          📝 Anonymous Function is a function that does not have any name associated with it.
*/

/*💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻*/
// 🤯 Difference betweeen Function exzpression and function declaration.
/*
//THEORY
📝 The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.
📝Function expressions in JavaScript are not hoisted, unlike function declarations. You can't use function expressions before you create them:
        
*/

/*✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️*/
/******************************** METHODS LIST ***********************/
/*
🎃 alert("Chaad sitare fool aur khushboo ye to saare purane hain.. Taaza taaza kali khili hai hum iske deewane hain...hmmmm hmmmm");

🎃 console.log("Anddaz hain uske naye naye..hai naya naya deewanapan...")

🎃 confirm("Pehna kar taaz javanni ka hans kar laut gaya bachpan...")

🎃 console.log(typeof("hoo hoooooo"))

🎃 console.log(isNaN(25)) //false
🎃 console.log(isNaN("Mummy Ji 🥰")) //true

🎃 console.log(Boolean("2")) //true
🎃 console.log(Boolean(NaN) //false
🎃console.log(Boolean(undefined) //false

*/

/*✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️*/
