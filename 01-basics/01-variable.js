/********** What is variable? *******/
// Variables in JavaScript are containers which hold reusable data. In other words, they are units of storage, like some sort of box into which we can put data. Variables are used to store information to be referenced and manipulated in a computer program.

// Here are the following three simple steps to creating a variable:

// 1: Create a variable with the appropriate name.
// 2: Store your value in it.
// 3: Retrieve and use the stored value from the variable.


/****Two new ways to declare a variable: let **and **const.****/
// The variable type let shares lots of similarities with var but unlike var it has some scope constraints. The only thing that you need to know right now is that let is the preferred way of creating variables in modern JavaScript.

// let variableName = '';
// Const is another variable type assigned to data whose value cannot and will not change throught the script.

// const variableName = '';
// The variableName is the name of the variable which you can freely choose.

// What do you think, can we name our variables literally anything?

// We have a few criteria when it comes to creating variable names, also known as identifiers.

// We have a few rules when it comes to creating an identifier in JavaScript:

// the name of the identifier must be unique
// the name of the identifier should not be any reserved JavaScript keyword (for example, we cannot declare a variable like this: var let = 0;
// the first character must be a letter, an underscore (_), or a dollar sign ($). Subsequent characters may be any letter or digit or an underscore or dollar sign.
// To recap, there are three different ways to make (or declare) a variable: var, let and const.

const accountId = 08011996
let accountEmail = "sharmaab275@gmail.com"
var accountPassword = "123456"
accountCity = "Amritsar"
let accountProvince;

// accountId = 2 // NOT ALLOWED

accountEmail = "abhishekhsharma44@gmail.com"
accountPassword = 654321
accountCity = "Brampton"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword,accountCity,accountProvince]);
