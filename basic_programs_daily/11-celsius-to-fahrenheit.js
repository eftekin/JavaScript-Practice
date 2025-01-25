/**
 * Temperature Conversion Program
 * This program provides functions to convert temperatures between Celsius and Fahrenheit
 */

/**
 * Converts Celsius temperature to Fahrenheit
 * Formula: (°C × 9/5) + 32 = °F
 * @param {number} celsius - Temperature value in Celsius
 * @returns {void} - Prints the conversion result
 */
function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== "number") {
    console.error("Please provide a valid number for celsius temperature");
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(1)}°F`);
}

/**
 * Converts Fahrenheit temperature to Celsius
 * Formula: (°F − 32) × 5/9 = °C
 * @param {number} fahrenheit - Temperature value in Fahrenheit
 * @returns {void} - Prints the conversion result
 */
function fahrenheitToCelsius(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    console.error("Please provide a valid number for fahrenheit temperature");
    return;
  }

  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(1)}°C`);
}

// Example usage
celsiusToFahrenheit(60); // Expected output: "60°C is equal to 140.0°F"
fahrenheitToCelsius(45); // Expected output: "45°F is equal to 7.2°C"

// Additional test cases
celsiusToFahrenheit(0); // Water freezing point
celsiusToFahrenheit(100); // Water boiling point
fahrenheitToCelsius(98.6); // Average human body temperature
