// Define a function to check if a given year is a leap year
function isLeapYear(year) {
  // A year is a leap year if it is divisible by 4, except for years that are divisible by 100.
  // However, years divisible by 400 are also leap years.
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

// Test the function with various years and log the results to the console
console.log("2016 Leap Year? ->", isLeapYear(2016)); // Expected output: true
console.log("2000 Leap Year? ->", isLeapYear(2000)); // Expected output: true
console.log("1700 Leap Year? ->", isLeapYear(1700)); // Expected output: false
console.log("1800 Leap Year? ->", isLeapYear(1800)); // Expected output: false
console.log("100 Leap Year? ->", isLeapYear(100)); // Expected output: false
