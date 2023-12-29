// ***********array.push(value)**********//
// The array.push() function adds a new element, containing the entered variable, to the end of the array.

let names = ["Jon", "Bob", "David", "Mark"];

names.push("Dean");

console.log(names); // ["Jon","Bob","David","Mark","Dean"]

// There's one important thing that many experienced web developers don't know about array.push(). What's it's the return value? Many would think that the return value of the push would be an array, now including the element we've pushed. Let's test it out:

console.log(names.push('Dean')); // 5
// The return value is 5. Hmm, why 5? Think about it.

// It turns out that the array.push() returns the length of the array when the element is pushed.

// We can even store it in a variable:

const length = names.push('Dean');

console.log(length); // 5


// *************array.pop() *************//

// The array.pop() function on the other hand, does quite the opposite, deleting the last element of an array.

const names = ["Jon", "Bob", "David", "Mark"];

names.pop();

console.log(names); // ["Jon","Bob","David"]
// This time, the return of the method is not the final length of the array, as it is with array.push(), rather, it's the value of the removed element. You have it in case you need it somewhere.

const removedValue = names.pop();

console.log(removedValue); // "Mark"
// This can be great for transferring data between two arrays or just giving a value one final use before popping it into the void.

// ****************array.shift()**************//
// Shift works almost exactly like pop, with one major difference. It deletes the first value in an array and moves the rest backwards!

const names = ["Jon", "Bob", "David", "Mark"];

names.shift();

console.log(names); // ["Bob","David","Mark"]
// It too returns the "popped" value.

const removedValue = names.shift();

console.log(removedValue); // "Jon"

//***********array.unshift(value)*************//
// If shift is the sister function to pop, unshift is that to push. It adds a new value to the start of an array instead of the end!

const names = ["Jon", "Bob", "David", "Mark"];

names.unshift("Dean");

console.log(names); // ["Dean","Jon","Bob","David","Mark"]

// Much like push, it returns the new array length.

const length = names.unshift('Dean');

console.log(length); // 5

// *************array.splice()*************//
// Now this one is a little more sophisticated, but don't worry we'll walk you through it. The splice method allows you to "splice" values into the array. It's first parameter determines where the new element or elements are placed, the second how many after that point should be deleted before placement and each subsequent condition is merely an element you wish to add. Here's an example.

const names = ["Jon", "Bob", "David", "Mark"];

names.splice(2, 0, "Jenny", "Johnny");

console.log(names); // ["Jon","Bob", "Jenny", "Johnny", "David","Mark"]
// It can also return an array of any deleted items, like pop!

const removedValue = names.splice(0,1);

console.log(removedValue); // ["Jon"]

// *************** array.slice() **************//
// And finally, the slice function. This handy little piece of code can make a new variable that contains every element from a certain point on in whatever array you feed it!

const names = ["Jon", "Bob", "David", "Mark"];

const noOneLikesJon = names.slice(1);

console.log(noOneLikesJon); // ["Bob","David","Mark"]

// Don't worry, Jon is still in the first array.

console.log(names); // ["Jon", "Bob", "David", "Mark"];