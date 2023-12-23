let myName = "abhishekh"

x = myName.charAt(0).toUpperCase();

let modifiedString = x + myName.substring(1,9)

console.log(modifiedString)

// In this corrected code, charAt(0) extracts the first character of the string, toUpperCase() converts it to uppercase, and then substring(1, 9) extracts the rest of the string starting from index 1 (the second character) up to index 8 (excluding index 9). The modified string is then created by concatenating the uppercase first character with the rest of the original string.

// Solution 1
// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// Solution 2 (Uses string[0] instead of string.charAt(0))
// const myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 3 (Uses template literal and slice())
// const myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;