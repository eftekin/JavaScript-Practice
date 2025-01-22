class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
}

// Example usage:
const calc = new Calculator();
console.log("2 + 3 =", calc.add(2, 3));
console.log("5 - 2 =", calc.subtract(5, 2));
console.log("4 * 6 =", calc.multiply(4, 6));
console.log("8 / 2 =", calc.divide(8, 2));

// Error handling example
try {
  console.log("5 / 0 =", calc.divide(5, 0));
} catch (error) {
  console.log("Error:", error.message);
}
