// Formats a number with commas for readability (e.g., 1000 -> 1,000)
export const formatNumber = (number) => {
  let numStr = String(Math.floor(number));
  for (let i = numStr.length - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + "," + numStr.slice(i);
  }
  return numStr;
};

// Import necessary modules
import { getDataByRole, getDataByCompany } from "./salaryData.js";
import salaryData from "./salaryData.js";

// Returns the average salary for a specific role
const getAverageSalaryByRole = (role) => {
  const roleData = getDataByRole(role);
  const salariesOfRole = roleData.map((obj) => obj.salary);
  return calculateAverage(salariesOfRole);
};

// Returns the average salary at a specific company
const getAverageSalaryByCompany = (company) => {
  const companyData = getDataByCompany(company);
  const salariesAtCompany = companyData.map((obj) => obj.salary);
  return calculateAverage(salariesAtCompany);
};

// Returns the salary for a specific role at a specific company
const getSalaryAtCompany = (role, company) => {
  const companyData = getDataByCompany(company);
  const roleAtCompany = companyData.find((obj) => obj.role === role);
  return roleAtCompany.salary;
};

// Returns the average salary across the industry
const getIndustryAverageSalary = () => {
  const allSalaries = salaryData.map((obj) => obj.salary);
  return calculateAverage(allSalaries);
};

// Helper function to calculate the average of an array of numbers
function calculateAverage(arrayOfNumbers) {
  let total = 0;
  arrayOfNumbers.forEach((number) => (total += number));
  return (total / arrayOfNumbers.length).toFixed(2);
}

// Exporting functions for use in other modules
export {
  getAverageSalaryByRole,
  getAverageSalaryByCompany,
  getSalaryAtCompany,
  getIndustryAverageSalary,
};
