// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        message: 'Provde instructions and example on how to use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list all of the contributors, if any, for this project. Provide their GitHub profiles as well.'
    },
    {
        type: 'checkout',
        name: 'license',
        message: 'Choose which of the following best describes your situation to determine a license for your project.',
        choices: ['I need to work in a community.', 'I wanted it simple and permissive.', 'I care about sharing improvements.']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
    {
        type: 'input',
        name: 'questions',
        message: 'Any questions? Feel free to reach out via GitHub or Email. Links will be provided below.'
    }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
