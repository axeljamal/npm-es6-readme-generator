// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge({ license }) {
  let yourLicense = "";
  if (license === "MIT") {
    yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return yourLicense;
  } else if (license === "AGPL-3.0") {
    yourLicense = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    return yourLicense;
  } else if (license === "GPL-3.0") {
    yourLicense = `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    return yourLicense;
  } else {
    yourLicense = "N/A";
    return yourLicense;
  }
}
// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data)}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Please reachout to me at ${data.email} if you have any questions.
  Also, feel free to view this project and others at https://github.com/${
    data.github
  }
`;
}

module.exports = generateMarkdown;
