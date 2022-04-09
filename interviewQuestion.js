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
// 🍙Question-2: Difference betweeen == and ===
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

/*✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️*/
/******************************** METHODS LIST ***********************/
/*
alert("Chaad sitare fool aur khushboo ye to saare purane hain.. Taaza taaza kali khili hai hum iske deewane hain...hmmmm hmmmm");

console.log("Anddaz hain uske naye naye..hai naya naya deewanapan...")

confirm("Pehna kar taaz javanni ka hans kar laut gaya bachpan...")

console.log(typeof("hoo hoooooo"))

console.log(isNaN(25)) //false
console.log(isNaN("Mummy Ji 🥰")) //true



*/

/*✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️*/
