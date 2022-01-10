const fs = require('fs');

// creates readme.md in dist directory
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
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  This project was created with the following:
  ${data.installation}

  ## Usage
  How to use this project:
  ${data.usage}

  ## License
  ${data.license}

  ## Credits
  This project was created by:
  ${data.credits}

  ## Tests
  How to test this application:
  ${data.tests}

  ## Questions
  ${data.questions}
  Feel free to check out my GitHub, https://github.com/${data.github}
  </br>
  For more information, reach out via email at ${data.email} for any questions.
`;
};

module.exports = generateMarkdown;
