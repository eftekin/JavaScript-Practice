// Import necessary modules here
import { getRoles, getCompanies } from "./salaryData.js";
import {
  getAverageSalaryByRole,
  getAverageSalaryByCompany,
  getSalaryAtCompany,
  getIndustryAverageSalary,
} from "./workAroundModule.js";
import { formatNumber } from "./utilities.js";

// Call `getCompanies` and `getRoles` functions to retrieve companies and roles data
const companies = getCompanies();
const roles = getRoles();

// Render input buttons once the HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderInputButtons(companies, "company");
  renderInputButtons(roles, "role");
});

// This function creates a <section> and a radio input button for each company and role
function renderInputButtons(labels, groupName) {
  const container = document.createElement("section");
  container.setAttribute("id", `${groupName}Inputs`);

  let header = document.createElement("h3");
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach((label) => {
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "option");

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("name", groupName);
    inputElement.setAttribute("value", label);
    divElement.appendChild(inputElement);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    inputElement.addEventListener("click", updateResults);

    container.appendChild(divElement);
  });

  document.querySelector("main").prepend(container);
}

// This function updates the displayed results based on selected company and role
function updateResults() {
  const companyInput = document.querySelector("input[name='company']:checked");
  const roleInput = document.querySelector("input[name='role']:checked");

  if (!companyInput || !roleInput) {
    return;
  }

  const company = companyInput.value;
  const role = roleInput.value;

  const averageSalaryByRole = getAverageSalaryByRole(role);
  const averageSalaryByCompany = getAverageSalaryByCompany(company);
  const salary = getSalaryAtCompany(role, company);
  const industryAverageSalary = getIndustryAverageSalary();

  document.getElementById(
    "salarySelected"
  ).innerText = `The salary for ${role}s at ${company} is \$${formatNumber(
    salary
  )}`;
  document.getElementById(
    "salaryAverageByRole"
  ).innerText = `The industry average salary for ${role} positions is \$${formatNumber(
    averageSalaryByRole
  )}`;
  document.getElementById(
    "salaryAverageByCompany"
  ).innerText = `The average salary at ${company} is \$${formatNumber(
    averageSalaryByCompany
  )}`;
  document.getElementById(
    "salaryAverageIndustry"
  ).innerText = `The average salary in the Tech industry is \$${formatNumber(
    industryAverageSalary
  )}`;
}
