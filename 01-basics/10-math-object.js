let x;

// Square root => In simple terms, finding the square root is like figuring out what number, when multiplied by itself, gives you the original number you started with.
x = Math.sqrt(-4);

// Absolute value => Math.abs() ensures that the result is always a non-negative number. It's commonly used in situations where you want to ensure that you're working with a positive value, such as when calculating differences or distances.
x = Math.abs(2);

// Round
x = Math.round(4.4);

// Round up
x = Math.ceil(4.2);

// Round down
x = Math.floor(4.9);

// Exponent => it calculates the result of a base number raised to a specified power. So, in simple terms, the Math.pow() method helps you use a special number (your superhero power or base number) a certain number of times (the exponent), and it tells you the total power you get after using it that many times. It's like multiplying your superpower by itself as many times as you want!
x = Math.pow(2, 3); // 2^3 (2 raised to the power of 3)

// Minimum number
x = Math.min(4, 5, 3);

// Maximum number
x = Math.max(4, 5, 3);

// Get a random number/decimal between 0 and 1
x = Math.random();

// Get a random number between 1 and 100
// x = Math.floor(Math.random() * 100 + 1);

console.log(x);