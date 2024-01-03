// In programming, type conversion or type casting is the process of explicitly converting a value from one type to another. For instance, you may have a string value of '5' and you want to convert it to a number value of 5 so that you can do some arithmetic operations on it. 

// Type conversion in JavaScript is the process of converting a value from one data type to another. This can happen automatically (implicit conversion) or can be done manually by the programmer (explicit conversion).

// Implicit Conversion: Also known as "type coercion," this happens when JavaScript automatically converts types behind the scenes. For example, when you add a number to a string, JavaScript will convert the number to a string before concatenating them.
let result = '3' + 2; // '32', number 2 is converted to a string

// Explicit Conversion: This is when you intentionally convert values from one type to another using functions like Number(), String(), or Boolean().
let num = "5";
let convertedNum = Number(num); // Explicitly converts string '5' to number 5

let amount = 0;

/**** Change string to number *****/
// amount = parseInt(amount)
// amount = +amount
// amount = Number(amount)

/******Change number to string*******/ 
// amount = amount.toString()
// amount = String(amount)

/******Change string to decimal*******/
// amount = parseFloat(amount)

/********Convert number to boolean*********/

amount = Boolean(amount)
console.log(amount, typeof amount)
