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
