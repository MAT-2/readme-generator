// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Please provide a description of the project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide what installations are needed for the project.",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage for this project?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "Please confirm what license is being used for this project.",
    name: "license",
    choices: [
      "APACHE License 2.0",
      "MIT License",
      "The Unlicense",
      "Eclipse Public License 2.0",
      "Boost Software License 1.0",
    ],
  },
  {
    type: "input",
    message: "Were there any contributors? If so, please input their name.",
    name: "contributors",
  },
  {
    type: "input",
    message: "Please provide instructions to test project.",
    name: "test",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
