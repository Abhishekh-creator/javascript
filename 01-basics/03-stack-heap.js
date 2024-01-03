// Garbage Collection
// Before we look at how data is stored in memory, I just want to mention that JavaScript uses something called garbage collection. With some low-level languages such as C and C++, you actually have to manage your own memory. When you create variables, you have to allocate the memory yourself and when you are done, you need to free up that space. It makes programming much more difficult. More modern interpreted languages like JavaScript and Python, do not have you do this. It is automated with something called garbage collection. That's why you don't technically need to know how this stuff works to start writing JavaScript.

// Memory Allocation
// When we create a variable, the JavaScript engine allocates them into two different locations called the stack and the heap.

// Primitive values like strings, numbers, etc are static and immutable data that are fixed. Because of this, the size of the data doesn't change at all, so the space is allocated as a fixed amount and is stored on the stack.

//Values are stored on the stack
// Strings || number || Boolean || Null || Undefined || Symbol || BigInt

const name = "Abhishekh"
const age = 27

// Reference values are stored on the heap
// Array || Functions || Objects

const person = {
    name :"Akhil",
    age :27
}

// Since this is a reference type that is not static and we can add and remove values from it, the object gets stored in the heap

let newName = name;
newName="John"

let newPerson = person
newPerson.name = "Brad"

console.log(name,newName)
console.log(person,newPerson)
