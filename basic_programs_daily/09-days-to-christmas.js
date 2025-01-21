// Initialize the current date object
let today = new Date();

// Create a Date object for Christmas (December 25th) of the current year
// Note: Month is 0-based, so 11 represents December
let cmas = new Date(today.getFullYear(), 11, 25);

// Check if Christmas has already passed this year
// If so, calculate for next year's Christmas
if (today.getMonth() == 11 && today.getDate() > 25) {
  // Add one year to the Christmas date
  cmas.setFullYear(cmas.getFullYear() + 1);
}

// Calculate milliseconds in one day
// 1000 ms * 60 sec * 60 min * 24 hours
const one_day = 1000 * 60 * 60 * 24;

// Calculate the difference between dates
// 1. Get time values in milliseconds using getTime()
// 2. Find the difference between the dates
// 3. Convert to days by dividing by milliseconds per day
// 4. Use Math.ceil() to round up to the nearest whole day
console.log(
  Math.ceil((cmas.getTime() - today.getTime()) / one_day) +
    " days left until Christmas!"
);
