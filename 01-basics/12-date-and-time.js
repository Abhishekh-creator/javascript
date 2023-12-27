// *************The Date object***************//

// What’s the date today?

// You can tell the date physically if you have a calendar around you. You can also tell the time if you have a clock. In JavaScript, we can tell the date and time with the Date object.

// Here’s what it looks like:

const date = new Date()
// If you console.log date, you’ll get a log that tells you four things:

// The day of the week (like Wednesday)
// The date today (like Jan 23 2019)
// The time now (like 17:21:13)
// The timezone offset (like GMT+8000 Singapore Standard Time)
// Wed Jan 23 2019 17:21:13 GMT+0800 (Singapore Standard Time)

//***************** Getting a formatted date ****************///////////

// If I ask you what’s the date today, I don’t expect a full-blown reply that says Tue Jan 23 2019 17:21:13 GMT+0800 (Singapore Standard Time). I’ll expect something along the lines of 23 Jan, 2019.

// How do you get 23 Jan, 2019 from the Date object?

// Built-in formats
// Date comes with seven methods that lets you convert a Date object into a string. Here’s what each of them do:

// toString returns: Wed Jan 23 2019 17:23:42 GMT+0800 (Singapore Standard Time)
// toDateString returns: Wed Jan 23 2019
// toLocaleString returns: 23/01/2019, 17:23:42
// toLocaleDateString returns: 23/01/2019
// toGMTString returns: Wed, 23 Jan 2019 09:23:42 GMT
// toUTCString returns: Wed, 23 Jan 2019 09:23:42 GMT
// toISOString returns:2019-01-23T09:23:42.079Z

// Each method gives a specific date/time string. Unfortunately, none of them gives us the format (23 Jan, 2019) we wanted.

// We need to create the format ourselves with some Date methods.

let d;

// Get today's date and time
d = new Date();

// Set to a string
d = d.toString();

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();

// Get the timestamp of a specific date
d = new Date();
d = d.getTime();
d = d.valueOf();

// Create a date from a timestamp
d = new Date(1666962049745);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

d = Date.now();
console.log(d);