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
        name: 'title',
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
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['Apache', 'Apache 2.0', 'CC0-1.0', 'GNU', 'GNU GPL v3', 'ISC', 'MIT', 'Modzilla 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list all of the contributors, if any, for this project. Provide their GitHub profiles as well.'
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Are there any tests for your application?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are there?',
        when: ({ confirmTests }) => {
            if (confirmTests) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Any questions?',
    }
    ]);
};

// writes README file
const writeFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            return console.log(err);
        } 
        console.log('Great job! Your README has been created!')
    })
};

// initializes program
questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err)
    })


