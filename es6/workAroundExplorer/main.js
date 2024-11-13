// Gerekli modülleri burada içeri aktarın
import { getRoles, getCompanies } from "./salaryData.js";
import {
  getAverageSalaryByRole,
  getAverageSalaryByCompany,
  getSalaryAtCompany,
  getIndustryAverageSalary,
} from "./workAroundModule.js";
import { formatNumber } from "./utilities.js";

// `getCompanies` ve `getRoles` fonksiyonlarını çağırın
const companies = getCompanies();
const roles = getRoles();

// HTML yüklenince butonları render et
document.addEventListener("DOMContentLoaded", () => {
  renderInputButtons(companies, "company");
  renderInputButtons(roles, "role");
});

// Bu fonksiyon her şirket ve rol için birer <section> ve radio input butonu oluşturur
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
