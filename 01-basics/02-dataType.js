    //Primitive Types - Stored directly in the location that the variables is accessed.

    // number => Any number in JavaScript is the Number type, including floats and decimals.
    const age = 27.9;
    console.log(age,typeof age)

    // bigInt => BigInt is a new primitive type and represents integers that are out of the range of the Number type.
    const n = 9007199254740991n;
    console.log(n, typeof n)

    //string = A string is a "string" of characters wrapped in either single or double quotes. Strings can include any number, letter or symbol.
    const firstName = "Akhil"
    console.log(firstName, typeof firstName)

    // boolean => Boolean represents a logical entity and can have only two values: true or false.
    const hasKids =  true

    // null => null is just a special value which represents “nothing”, “empty” or “value unknown”.
    const aptNumber = null;
    console.log(aptNumber, typeof aptNumber)

    // undefined => A variable that has not been assigned a value is undefined.
    let score;
    console.log(score, typeof score)
    /*
    undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value.
    Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object
    */
   
    //symbol => A “symbol” represents a unique identifier.

/*********Reference Data Types (Objects) ***********/

// There are basically 3 types that are passed by reference

// Arrays

const numbers = [1,2,3,4,5]
console.log(numbers, typeof numbers)

// Functions

function sayHello(){
  console.log("Hello world")
}

console.log(sayHello(), typeof sayHello)
// Objects

const person = {
  name: "Abhishekh"
}

console.log(person, typeof person)
// Technically, these are all "objects", meaning that they have properties and methods.

// Reference types or "objects" are a non-primitive value and when assigned to a variable, the variable is given a reference to that value. The reference points to the object's location in memory. Unlike primitives, where the variable contains the actual value.