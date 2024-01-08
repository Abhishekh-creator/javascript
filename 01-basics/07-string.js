/***       What is string?    ***/

// In JavaScript, and in any programming language for that matter, we need a way to store text.

// In JavaScript we use strings to store text. String is nothing more than a primitive data type.

// How can we create strings in JavaScript?

// There are a few ways:

const single = 'This is a string written inside of single quotes.';
const double = "This is a string written inside of double quotes.";

const backticks = `This is a string written inside of double quotes.`;
// Strings created with single and double quotes are the same. We can call them simple or basic strings. They simply represent some static textual value.

// Strings created with backticks on the other hand provide extended functionality. They are dynamic. They allow us to execute real JavaScript logic inside of them. Let me show you what I mean in an example:

const backticks = `${2 + 2}`; // 4 
// Everything that we put in between the dollar sign and curly brackets is not simply taken for granted. It is evaluated as JavaScript logic. Therefore, 2 + 2 returns 4, rather than the string of '2 + 2'.

// That means that we can also make function calls inside of backticks string, for example:

const sum = (a, b) => a + b;

const total = `The sum is ${sum(2, 2)}`; // The sum is 4
// Backtick strings have one extra feature. We can span them accros multiple lines.

const numbers = `
	1
	2
	3
`; 
// If we tried doing this with basic single or double quote strings, we would get an error.

// Let me ask you one question, how would the value of the following string look like?

const greeting = 'Hi, I'm John';
// This would produce an error. In here, with a single quote after the I, we actually end the string. And JavaScript doesen't know how to evaluate the rest of the code.

// One way to fix this would simply be to use different type of quotes. For example:

const greeting = "Hi, I'm John.";
// But this is not a solution. Imagine if we had both types of the strings in the sentence:

const greeting = "Hi, I'm John, "Johnny John".";
// This would, again, break. There's something called an "escape character", which allows us to treat special characters like normal letters. This is how we can escape the single and double quotes.

const greeting = 'Hi, I\\'m John, \\"Johnny John\\".';
// That's it! But this is getting messy. We still have "cool" strings at our disposal, right? Let's use them.

const greeting = `Hi, I'm John, "Johnny John".`;

// This way, we can write the string however we want.

/**** String Length and Basic Properties  ******/

// One thing that we often want to know when it comes to strings is its lenght. You might think that we need to do some complex stuff to come to that value. Like loop through all the characters, count them and then display the value. It's so much simpler than that!

const name = 'John';

name.length // 4
// Another thing we might want to do often is get the element at a certain position of the string. We can do it really easily as well.

// This is how we would get the first letter of a string:

name[0] // j;
// ... and this is how we would get the last letter:

name[name.length - 1]; // n
// Let's inspect this line for a moment.

name.length is equal to 4

// 4 minus one is 3

// name of 3 is the last letter, because we start from 0 and not from 1. For the reason that strings start from 0, we need to do it like this.

// ... and in the same fashion, we can get any character in the string

name[2]; // n

// Great! In this video, we learned how to get a length of the strings using the length property, as well as how to get certain characters of a string!

// Now let's learn how we can change the case of the string!

/****** Change String Case ******/

// In JavaScript, we have only two, really simple and straight forward methods for changing the character case, and they are:

// string.toLowerCase() string.toUpperCase()

// Let's show this in an example:

const mixedCaseString = 'Hello! How are you, James?';

mixedCaseString.toLowerCase();
mixedCaseString.toUpperCase();
// Notice how we have paranthesses on these two. That's because they are functions, more precisely methods we call on a string. Let's learn more useful string methods! :)

/******** Searching for a Substring ******/

// There are multiple ways to look for a substring within a string.

str.indexOf()
// The first method is str.indexOf(substr, pos).

// It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.

// For instance:

const exampleString = 'I love ducks, he said, ducks are great!';

exampleString.indexOf('ducks'); // 7
exampleString.indexOf('Ducks'); // -1
// The optional second parameter allows us to search starting from the given position.

// For instance, the first occurrence of 'ducks' is at position 7. To look for the next occurrence, let’s start the search frome position 8:

exampleString.indexOf('ducks', 8); // 23
str.lastIndexOf()
str.lastIndexOf(substr, position)

// There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning.

exampleString.lastIndexOf('ducks'); // 23
// Great! Now you can use indexOf methods if you need to find the exact position of some substrings in a string.

includes()
// But much more often, you're just interested if a string contains something, and you're not concerned where is it in the string.

// For these cases you can use string.includes()

// It simply returns true or false.

// It’s the right choice if we need to test for the match, but don’t need its position:

const exampleString = 'I love ducks, he said, ducks are great!';

exampleString.includes('ducks'); // true
// As with the indexOf method, he optional second argument of str.includes is the position to start searching from.

str.startsWith() and str.endsWith()
// The methods str.startsWith and str.endsWith do exactly what they say:

exampleString.startsWith('I'); // true
exampleString.endsWith('ducks'); // false

/***Getting a sub-string***/

// The best method for getting a substring of a string is str.slice().

// Let's show it on an example:

str.slice(start [, end])

// Returns the part of the string from start to (but not including) end.For instance:

const exampleString = 'hotdog';

exampleString.slice(3, 6); // dog


// Some times, we might want to split the string into multiple substrings. For that we'll be using a string method called split().

// Let me give you some examples:

// This is how we can split a word into characters:

const exampleString = 'dog';

console.log(exampleString.split(''));
// Notice how we passed an empty string as a first parameter of a split method.

// This is how we can split a sentence into words:

const exampleString = 'The quick brown fox jumps over the lazy dog.';

console.log(exampleString.split(' '));
// The result of both examples is an... array!

// Exactly.

/** Split a String **/

// In JavaScript, the split() method is used to divide a string into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

// Here's a basic example in JavaScript:

let text = "hello world";
// Split the string on space
let words = text.split(" ");
console.log(words);  // Output will be ['hello', 'world']

// In this example, split(" ") is used to split the string "hello world" into an array of words at each space. If you don't provide any separator, the entire string will be returned as a single element in an array.


// *****Reverse, Repeat and Trim ************//

// REVERSE
// There isn't a built in string method that reverses a string. Rather, we can use the knowledge we previously gained! Remember how we can split a string into array of characters? Arrays do have a reverse method.

// So this is a process.

// Split a string
// Reverse newly created a array
// Turn the array back into string using join()
const exampleString = 'test';

str.split('').reverse().join(''); // tset
REPEAT
// Let's say that you want to repeat a string an x number of times. You can easily do that by using the string.repeat() method.

const dogSays = 'woof';

console.log(dogSays.repeat(5)); // woofwoofwoofwoofwoof
TRIM
// Sometimes, users don't know how to type. And we need to clean their emails, usernames and whatnot. We can clean empty spaces using the trim method.

const str = "       Hello World!        ";

console.log(str.trim());

// Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

// Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
const s = new String('Hello World');

x = typeof s;

x = s.length;

// Access value by key
x = s[0];

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;

// Change case
x = s.toUpperCase();
x = s.toLowerCase();

// charAt() - returns the character at the specified index
x = s.charAt(0);

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('d');

// substring() - search a string for a specified value
x = s.substring(2, 5);
x = s.substring(7);

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);

// trim() - remove whitespace from beginning and end of string
x = '         Hello World';
x = x.trim();

// replace() - replace all instances of a string
x = s.replace('World', 'John');

// includes() - returns true if the string is found
x = s.includes('Hell');

// valueOf() - returns the primitive value of a variable
x = s.valueOf();

// split() - returns an array of strings
x = s.split('');

console.log(x);