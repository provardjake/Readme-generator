// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  if(license === "Apache 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }
  if(license === "Eclipse Public License 1.0"){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
  }
  if(license === "GNU GPL v3"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  }
  if(license === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]";
  }
  if(license === "Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  }
  if(license === "none"){
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return "(https://opensource.org/licenses/MIT)";
  }
  if(license === "Apache 2.0"){
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
  if(license === "Eclipse Public License 1.0"){
    return "(https://opensource.org/licenses/EPL-1.0)";
  }
  if(license === "GNU GPL v3"){
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  if(license === "IBM"){
    return "(https://opensource.org/licenses/IPL-1.0)";
  }
  if(license === "Mozilla"){
    return "(https://opensource.org/licenses/MPL-2.0)";
  }
  if(license === "none"){
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return `${licenseBadge}${licenseLink}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Testing](#testing)
  7. [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## Questions
  If you have any questions you can contact me at: <br />
  GitHub: ${data.github}<br />
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
