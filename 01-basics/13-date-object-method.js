//***********Date Methods************* */

//Here’s a list of methods that helps you format a date.

// getFullYear: Gets 4-digit year according to local time.
// getMonth: Gets month of the year (0-11) according to local time. Month is zero-indexed (which means January === 0 and December === 11).
// getDate: Gets day of the month (1-31) according to local time.
// getDay: Gets day of the week (0-6) according to local time. Day of the week begins with Sunday (0) and ends with Saturday (6).
// So, what should you write to get 23 January, 2019?

// Let’s work it through.

//***Creating a custom format */

const today = new Date()

// Getting the day of the month (23) is simple. We can use getDate.
const day = today.getDate()

// Getting the full year (2019) is simple too. We can use getFullYear.
const year = today.getFullYear()

// Getting January is harder.

// We only have access to getMonth, and getMonth returns a number from 0 to 11. This means we must convert the month number (0-11) into a month string (January-December) ourselves.

console.log(today)
console.log(year)
console.log(day)