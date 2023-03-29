// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of the project?',

    },

    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of the project.'
    },

    {
        type: 'input',
        name: 'installationRequirements',
        message: 'What are the steps needed to install the project?',
    },

    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please explain how to use the applicaton/project.'
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license',
        choices: [],
    },

    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'How can others contribute?'
    },

    {
        type: 'input',
        name: 'testingInsturctions',
        message: 'How do you test the project?'
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your Github username.'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log("Your README file has been generated!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput))
    })
}

// Function call to initialize app
init();
