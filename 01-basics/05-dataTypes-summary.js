// Primitive: Stored directly in the stack, where it is accessed form

// The 7 primitive data types are the following

// String - a sequence of characters. In JavaScript, strings can be enclosed within the single or double quotes
// Number - Represent both integer and floating-point numbers
// Boolean - Represent a logical entity and can have two values: true or false
// Null - Represents the intentional absence of any object value
// Undefined - A variable that has not been assigned a value is undefined.
// Symbol - It is a built-in object whose constructor returns a symbol-that is unique
// BigInt - New data type used for numbers that are greater than the Number type can handle.


// Reference (Non primitive): Stored in the heap and accessed by refrence

// Reference Data Types (Objects)

// We talked about the primitive data types that are stored directly in memory where they are accessed. Reference types work a little differently under the hood. There are basically 3 types that are passed by reference

// Arrays
// Functions
// Objects
// Technically, these are all "objects", meaning that they have properties and methods.

// Reference types or "objects" are a non-primitive value and when assigned to a variable, the variable is given a reference to that value. The reference points to the object's location in memory. Unlike primitives, where the variable contains the actual value. I'll talk more about this in the next video.

// Arrays
// I know we haven't gone over arrays yet so don't worry if you've never worked with them. They're essentially a data structure that can hold multiple values.

// So if we write

// const numbers = [1,2,3,4]
// We have created an array in memory and a variable that points to the address or location of that array.

// Object Literals
// Objects are comma separated lists of name-value pairs. We'll get into them later, but just to give you an example here

// {
//   name: 'John',
//   age: 30
// }

// Functions:
// Functions are also objects in JavaScript. They can have properties and methods. What distinguishes them from other objects is that they can be called.

// const sayHello = function() {
//   return 'Hello';
// }

// sayHello()
// If we check the type with typeof, we'll get "object" for arrays and object literals, but we actually get "function" for a function. This is still an object, it's just identified as a function object, which can be called as you can see here

// ***** Dynamic vs Static Types ******* \\

// JavaScript is a "dynamically-typed" language. This means that when we create a variable or a function, we don't explicitly assign the type. JavaScript assigns the type of that value dynamically. In other words, the type is associated with the value, not the variable. So you can have a variable value be a string and then later in the script, change it to a number. You probably won't do that very often, but you can.

// There are other languages that are "statically-typed". This is where you would explicitly define the type of data. Java is an example of a statically-typed language. There's also a language called TypeScript, which is essentially JavaScript with some extra features, including types. So is TypeScript, you could do this.

// const y:number = 100
// You can see we defined it as a number. So now that y variable's value HAS to always be a number.

// This is not something we can do with vanilla JavaScript. The advantage of static types is that it makes your code more robust and less prone to errors. The downside is you need to write a bit more code.