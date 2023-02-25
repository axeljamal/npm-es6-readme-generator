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
  ${data.license}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Please reachout to me at ${data.email} if you have any questions.
  Also, feel free to view this project and others at https://github/${data.github}
`;
}

module.exports = generateMarkdown;
