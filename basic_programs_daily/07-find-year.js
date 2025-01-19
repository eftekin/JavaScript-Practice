// Log a separator to visually distinguish the output
console.log("--------------------");

/**
 * Finds and logs the years where January 1st is a Sunday within a given range.
 * @param {number} startYear - The starting year of the range.
 * @param {number} endYear - The ending year of the range.
 */
function findSundaysOnFirstJanuary(startYear, endYear) {
  // Loop through the years from startYear to endYear (inclusive)
  for (let year = startYear; year <= endYear; year++) {
    // Create a Date object for January 1st of the current year
    let date = new Date(year, 0, 1);

    // Check if January 1st is a Sunday (0 corresponds to Sunday)
    if (date.getDay() === 0) {
      // Log the year if January 1st is a Sunday
      console.log(`1st January is a Sunday in ${year}`);
    }
  }
}

// Call the function with the desired range
findSundaysOnFirstJanuary(2014, 2050);

// Log another separator to conclude the output
console.log("--------------------");
