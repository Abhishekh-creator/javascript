// Comparison Operators compare two values and return boolean values true or false.

// const a = 5; 
// const b = 10; 

// we can test whether a value is greater than the other value 
// console.log(a > b); 
// we can also test whether a value is greater than or equal to the other value 
// console.log(a >= b); 

// we can test whether a value is less than the other value 
// console.log(a < b); 

// we can also test whether a value is less than or equal to the other value 
// console.log(a <= b); 


// finally, we have the equality operators, 
// we can test whether a value is equal 
// console.log(a == b); 

// we also test whether a value is not equal 
// console.log(a != b); 

// what you're going to see more often are going to be the strict equality 
// and strict inequality operators. They look like this. 
// strict equal, strict not equal 
// console.log(a === b); 
// console.log(a !== b);


console.log(null > 0)
console.log(null == 0)
console.log(null <= 0)

/*
The reason is that an equality check == and comparisons >, <, >=, <= work differently 
Comparison convert null to a number, treating it as 0.
Thats why (3) null >=0 is true and (1) null >0 is false.
*/