/**
 * Calculates the area of a triangle using Heron's formula
 * @param {number} side1 - Length of first side
 * @param {number} side2 - Length of second side
 * @param {number} side3 - Length of third side
 * @returns {number} Area of the triangle
 */
const calculateTriangleArea = (side1, side2, side3) => {
  // Calculate the semi-perimeter
  const semiPerimeter = (side1 + side2 + side3) / 2;

  // Calculate area using Heron's formula
  const area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
  );

  return Number(area.toFixed(2));
};

// Example usage
const side1 = 5;
const side2 = 6;
const side3 = 7;

const area = calculateTriangleArea(side1, side2, side3);
console.log(
  `The area of the triangle with sides ${side1}, ${side2}, and ${side3} is: ${area}`
);
