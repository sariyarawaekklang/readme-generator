const fs = require('fs');

function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Questions
  ${data.questions}
  Feel free to check out my GitHub, ${data.github}.
  For more information, reach out via email at ${data.email} for any questions.
`;
};

module.exports = generateMarkdown;
