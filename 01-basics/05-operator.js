// As all other programming languages, JavaScript includes operators as well. An operator performs some operation on single or multiple operands (data value) and produces a result. For example 1 + 2, where + sign is an operator and 1 is left operand and 2 is right operand. + operator adds two numeric values and produces a result which is 3 in this case.

// JavaScript includes following categories of operators:
// 1) Arithmetic Operators
// 2) Comparison Operators
// 3) Logical Operators
// 4) Assignment Operators
// 5) Conditional Operators

//********* 1: Airthmetic Operator ************//
const a = 5;
const b = 10;
let result = 0;

//Addition
result = a + b;

//Substraction
result = a - b;

//Multiplication
result = a*b;

//Division
result = a/b;

// Exponent
result = b **a;

// Moduler
result = a%b;

let apples = 10;
let children = 4;

let applesEachChildGets = Math.floor(apples / children);
let applesLeftOver = apples % children;

console.log("Each child gets " + applesEachChildGets + " apples.");
console.log("Apples left over: " + applesLeftOver);

// Increment / Decrement
result++
result--

console.log(result);

//******** 2: Comparison Operators and Equality **********/

// Comparison Operators compare two values and return boolean value true or false.

// That sentence is the main takeaway. If you understand that you're good to go!

// The return value of a comparison operator is ALWAYS going to be a boolean value.

// The topic of Equality in JavaScript is closely connected to the comparison operators - I've got you covered there as well. We're going to go through both topics in this video. So let's start.

// Everything that we've covered is pretty straight forward. The only thing that I'd like to take a deeper look at is the strict vs loose equality. What are the differences and when should we use each option? Let's cover that in the next lesson!

// JAVASCRIPT
const a = 5;
const b = 10;

// we can test whether a value is greater than the other value
console.log(a > b);
// we can also test whether a value is greater than or equal to the other value
console.log(a >= b);
// looks like I have a font installed so for me, it's going to look like one sign,
// but it's two. The greater than sign, and then immidiately the equality sign.

// we can test whether a value is less than the other value
console.log(a < b);
// we can also test whether a value is less than or equal to the other value
console.log(a <= b);

// finally, we have the equality operators,
// we can test whether a value is equal
console.log(a == b);
// we also test whether a value is not equal
console.log(a != b);

// what you're going to see more often are going to be the strict equality
// and strict inequality operators. They look like this.

// strict equal, strict not equal
console.log(a === b);
console.log(a !== b);

//******* 3: Strict vs Loose Equality ************//

// Equality is a fundamental concept in JavaScript. We say two values are equal when they are the same value. For example:

console.log("This is a string." === "This is a string."); // true
console.log(2 === 2);  // true

// Note that we use three equal signs to represent this concept of equality in JavaScript.

// JavaScript also allows us to test loose equality. It is written using two equal signs. Things may be considered loosely equal even if they refer to different values that look similar, an example would be the following:

console.log(5 == "5"); // true
// Let's explore each one in more detail:

// Strict equality using ===
// The strict equality method of comparison is a preferred option to use because it’s behaviour can be easily predicted, which leads to less bugs and unexpected results. The JavaScript interpreter compares the values as well as their types and only returns true when both are the same.

console.log(20 === "20"); // false 

// The code above will print false because even though the values seem to be the same, they are of different types. The first one is of type String and the second is of type Number.

// Here's just one short thing that I wanted to show you. If we strictly compare objects, we're never going to get true. Let's test it out:

console.log({} === {}); // false 
// we get false, even though they have the same type and content, weird

// the same thing happens for arrays as they are actually objects under the hood
console.log([] === []); // false 

// For the sake of simplicity, we're not going to go into too much depth about non-primitive data types like objects and arrays. That is a rather complex topic on it’s own. Because of that, later in the course we have a whole separate section called Value vs Reference. In there we're going to explore the mentioned inconsistencies of the equality operator.

// Now let's move on to the loose equality.

// Loose equality
// We write loose equality using double equal sign. It uses the same underlying logic as the Strict equality except for a minor, yet huge, difference.

// The loose equality doesn’t compare the data types.

// You should almost never use the loose equality.

// Douglas Crockford's in his excellent book called JavaScript: The Good Parts wrote:

// JavaScript has two sets of equality operators: === and !==, and their evil twins == and !=.

// The good ones work the way you would expect. If the two operands are of the same type and have the same value, then === produces true and !== produces false. The evil twins do the right thing when the operands are of the same type, but if they are of different types, they attempt to change the values. The rules by which they do that are complicated and unmemorable. These are some of the interesting cases:

'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true
// Here are a few more examples:

// Using the == operator

true == 1; // true, because 'true' is converted to 1 and then compared
"5" == 5;  // true, because the string of "5" is converted to the number 5 and then compared
// Using the === operator

true === 1; // false
"5" === 5;  // false
// That's exactly how it should be. On the other hand:

5 == "5" // true

// This isn't and should never be equal. "5" is a string, and should be treated like that. As I mentioned, most of the JavaScript developers completely avoid loose equality and rely only on the strict equality. It is considered a better practice and it causes less bugs. From now one, you're going to see me use only the strict equality.

// And for the end, I found for you a great visual representation of strict versus loose equalities:

https://dorey.github.io/JavaScript-Equality-Table/

// As you can see, using the loose equality we get these green boxes all over the place. They're unpredictable. But if we switch to the strict equality, we get this nice predictable line.

// So what's the moral of the story? Always use three equal signs.

// JAVASCRIPT
console.log("This is a string." === "This is a string."); // true
console.log(2 === 2);  // true

console.log(5 == "5"); // true
console.log(20 === "20"); // false 

'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

//******* 4: Logical operators ************//

// Logical operators are used to combine two or more conditions. JavaScript includes three logical operators: || OR, && AND, ! NOT.

// Complete knowledge of logical operators requires the knowledge of if/else statements and truthy and falsy values. In this video we're just going to cover the syntax of logical operators and then we're going to come back to them to see them in full action after we cover the two mentioned topics!

// And Operator (&&)
// Double ampersand && is known as AND operator. It checks whether ALL OPERANDS are truthy values (we're going to explain truthy and falsy values in one of the later videos). And if they are truthy, it returns true, otherwise it returns false.

console.log(true && false); // false
console.log(true && true); // true
console.log(false && false); // false
// We can also pass multiple conditions:

console.log(true && true && false); // false
// Or Operator (||)
// Double ampersand || is known as OR operator. It checks whether AT LEAST ONE OPERAND is a true value. And if there is at least one true, it returns true, otherwise it returns false.

console.log(true || false); // true
console.log(true || true); // true
console.log(false || false); // false

// We can also pass multiple conditions:

console.log(true || true || false); // true
// Not Operator (!)
// An exclamation sign ! is known as NOT operator. It reverses the boolean result of the condition.

// The syntax is pretty simple:

console.log(!true); // false
console.log(!false); // true
// As you can see, the not operator simply converts boolean false to true, and boolean true to false.

// This was just an introductory video to these logical operators. They are used really really often in real JavaScript applications and I'm exited to show you their real uses once we learn about if statements and truthy and falsy values!

//*********** 5: Assignment Operator ************/

let number = 5;

number += 5; // the same as number = number + 5;
number -= 5; // the same as number = number - 5;
number *= 5; // the same as number = number * 5;
number /= 5; // the same as number = number / 5;

console.log(number);
// An assignment operator assigns a value to its left operand based on the value of its right operand.

// Would you believe me if I told you that you not only know what an assignment operator is, but that you've been using it this whole time? The simplest form of an assignment operator is the = equal sign used for assigning values to variables:

const number = 5;
// This right here is an assignment operator.

// We can also join the assignment operator with one of the arithmetic operators:

// The addition assignment can also be used with strings! Let me show you:

let string = 'Hello';

string += ', I am John.';
 
console.log(string);