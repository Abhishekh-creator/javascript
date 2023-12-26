// Create a variable called `x` that is a random number between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.
let x = Math.floor(Math.random() * 100 + 1)
let y =  Math.floor(Math.random() * 50 + 1)
console.log(x)
console.log(y)

// Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.

let sum = x + y
let difference = x - y
let product = x * y
let quotient = x / y
let remainder = x % y

// - You can log the output string directly or put them in separate variables and log them like below.
// - You can use string concatenation or template literals for the output.

console.log(`sum of x= ${x} and y= ${y} is ${sum}`)
console.log(`diffrence of x= ${x} and y= ${y} is ${difference}`)
console.log(`product of x= ${x} and y= ${y} is ${product}`)
console.log(`quotient of x= ${x} and y= ${y} is ${quotient}`)
console.log(`remainder of x= ${x} and y= ${y} is ${remainder}`)