const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Github Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project.'
    },
    {
        type: 'confirm',
        name: 'confirmTableContents',
        message: 'Would you like to include a Table of Contents in the README? (Optional)',
        default: true
    },
    {
        type: 'input',
        name: 'tableContents',
        message: 'Provide subtitles for the Table of Contents.',
        when: ({ confirmTableContents }) => {
            if (confirmTableContents) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'installation',
        message: 'What did you use to build this project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your project.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list all of the contributors, if any, for this project. Provide their GitHub profiles as well.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT', 'GNU']
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Any questions? Feel free to reach out via GitHub or Email. Links will be provided below.'
    }
    ]);
};

// TODO: Create a function to write README file
questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    
/*
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } 
        console.log('Great job! Your README has been created!')
    })
};
*/
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
