// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('utils\generateMarkdown.js')
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

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
