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
// The almighty splice method
// splice lets you add items to any position. It also lets you remove items from any position. Its syntax looks a bit confusing, but it’s super convenient.

// Here’s the syntax:
// const deletedItems = array.splice(index, deleteCount, itemsToAdd)
// index is the position to start modifying the array.
// deleteCount is the number of items you want to delete.
// itemsToAdd is items you want to add, each separated by ,.
// Adding items with splice
// You can use splice to add items to the start of an array.

const array = [3, 4, 5]
array.splice(0, 0, 1, 2)

console.log(array) // [1, 2, 3, 4, 5]

// Here’s what we did with splice:
// First argument (0): Start at index 0.
// Second argument (0): Delete 0 items.
// Third and fourth argument: Items we want to add.
// You can use splice to add items to the end of an array. (But it’s easier to use push).

const array = [3, 4, 5]
array.splice(array.length, 0, 6, 7)

console.log(array) // [3, 4, 5, 6, 7]

// Here’s what we did:
// First argument (array.length): Start modifying the array at array.length, which means we start modifying the array AFTER the last item.
// Second argument (0): Delete 0 items.
// Third and fourth argument: Items we want to add.
// You can also use splice to add items to the middle of an array.

const array = [3, 4, 7]
array.splice(2, 0, 5, 6)

console.log(array) // [3, 4, 5, 6, 7]

// Here’s what we did:
// First argument (2): Start modifying the array at index 2. This means we start modifying the array between the second and third items.
// Second argument (0): Delete 0 items.
// Third and fourth argument: Items we want to add.
// Removing items with splice
// You can use splice to remove items from the start of an array.

const array = [3, 4, 5]
const deleted = array.splice(0, 2)

console.log(deleted) // [3, 4]
console.log(array) // [5]

// Here’s what we did:
// First argument (0): Start at index 0.
// Second argument (2): Delete 2 items.
// You can use splice to remove items from the end of an array.

const array = [3, 4, 5]
const deleted = array.splice(array.length - 2, 2)

console.log(array) // [3]
console.log(deleted) // [4, 5]

// Here’s what we did:
// First argument (array.length - 2): Modifies the array at index array.length - 2, which is 3 - 2 = 1. So we remove items from second item onwards.
// Second argument (2): Delete 2 items.
// You can also use splice to remove items from the middle of an array.

const array = [3, 4, 9, 8, 5]
const deleted = array.splice(2, 2)

console.log(deleted) // [9, 8]
console.log(array) // [3, 4, 5]
Here’s what we did:

First argument (2): Start modifying the array at index 2. This means we start deleting the third item.
Second argument (2): Delete 2 items.

// *************** array.slice() **************//
// And finally, the slice function. This handy little piece of code can make a new variable that contains every element from a certain point on in whatever array you feed it!

const names = ["Jon", "Bob", "David", "Mark"];

const noOneLikesJon = names.slice(1);

console.log(noOneLikesJon); // ["Bob","David","Mark"]

// Don't worry, Jon is still in the first array.

console.log(names); // ["Jon", "Bob", "David", "Mark"];