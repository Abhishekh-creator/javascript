// *******Introduction to Arrays********//

// Let’s say you want to buy some groceries from the market, and you wrote them down in a list.

// In JavaScript, this “list” needs to be placed in an array. An array is a special kind of object that stores list-like information.

// **********Creating arrays *******/
// You create an array by writing square brackets:

let emptyArray = []

// You can add values to the array as you create it. Make sure you separate each value with a comma.

let groceriesToBuy = ['cabbage', 'tomato sauce', 'salmon']

// Array literal
let numbers = [1,2,3,4,5]

// Array Constructor
let fruits = new Array("apple","banana","grapes")


// *******Array values*****/////
// Arrays can contain any valid JavaScript value. It can store primitives (like Strings and Numbers) and objects (like objects, other arrays, and even functions).

let strings = ['One', 'Two', 'Three', 'Four']
let numbers = [1, 2, 3, 4]
let booleans = [true, true, false, true]
let objects = [{ name: 'Zell' }, { name: 'Vincy' }]
let arrays = [
  [1, 2, 3],
  [1, 2, 3],
]

// Arrays can get difficult to read if everything is written in a single line. You can put each item on a new line to make it easier to read.

// One item in one line
let groceriesToBuy = ['cabbage', 'tomato sauce', 'salmon']

// Arrays separated with new lines to make them easier to read
let arrays = [
  [1, 2, 3],
  [1, 2, 3],
]

// Objects separated with new lines to make them easier to read
const objects = [
  { firstName: 'Zell', lastName: 'Liew' },
  { firstName: 'Vincy', lastName: 'Zhang' },
]
// Checking the number of items in an array
// Arrays have properties and methods since they are objects. You can check the number of items in an array with the length property.

const numbers = [1, 2, 3, 4]
console.log(numbers.length) // 4

// **********Getting the value of an item**********//
// To get the value of an item in an array, you write the name of the array, followed by the position of the item in square brackets. This position is called the index.

// Where n is the index
const item = array[n]

// In JavaScript:

// First item has index 0,
// Second item has index 1
// Third item has index 2
// And so on.
// Indexes that start from zero are called zero-based indexes.

const strings = ['One', 'Two', 'Three', 'Four']

const firstItem = strings[0] // One
const secondItem = strings[1] // Two
const thirdItem = strings[2] // Three
const fourthItem = strings[3] // Four
// If you provide an index that exceeds the number of items in the array, you’ll get undefined.

const tenthItem = strings[9]
console.log(tenthItem) // undefined


// *********Getting items from the end**********//
// If you want to get the last item in the array, you can use Array.length to help you out:

const strings = ['One', 'Two', 'Three', 'Four']
const lastItem = strings[strings.length - 1]

console.log(lastItem) // Four

// Here’s how this works:

// The last item, Four is in the fourth position.
// Fourth position means index 3.
// array.length counts the number of items in the array. (This gives 4).
// To get the last item, you can use array.length - 1 (which is 4 - 1 = 3).
// Feel free to use the array.length method to get the second last, third last, or even the fourth-last item.

const strings = ['One', 'Two', 'Three', 'Four']

const lastItem = strings[strings.length - 1] // Four
const secondLastItem = strings[strings.length - 2] // Three
const thirdLastItem = strings[strings.length - 3] // Two

// Adding items in the array
let numbers = [1,2,3,4,5]
numbers[numbers.length] = 6

// **********Setting the value of an item***********//
// You can change the value of an item by assigning a value to it. You use = to assign a value.

const strings = ['One', 'Two', 'Three', 'Four']

// Assigning a new value to the first item
strings[0] = 1

console.log(strings) // [1, 'Two', 'Three', 'Four']
// If you provide an index that exceeds the number of items in the array, JavaScript will help you create the intermediary items and fill them with undefined. (On Google Chrome, it may say empty. Nobody knows why they use empty).

// For example, let’s say you have an array that contains four items. You add a string, ten as the tenth item.

const strings = ['One', 'Two', 'Three', 'Four']
strings[9] = 'Ten'

console.log(strings)
// JavaScript fills any intermediary items with undefined
// JavaScript fills any intermediary items with undefined

// Here, JavaScript creates items 5, 6, 7, 8 and 9 and fills them with undefined before setting the tenth item as Ten.
