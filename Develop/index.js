const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = requier("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input", 
        message: "Enter the title of your application: "
    }, 

    {
        name: "description", 
        type: "input", 
        message: "Enter the description of your application: "
    }, 

    {
        name: "installation instructions", 
        type: "input", 
        message: "Enter the installation instructions for your application: "
    }, 

    {
        name: "usage information", 
        type: "input", 
        message: "Enter the usage information for your application: "
    }, 

    {
        name: "contribution guidelines", 
        type: "input", 
        message: "Enter the contribution guidelines for your application: "
    },

    {
        name: "test instructions", 
        type: "input", 
        message: "Enter the test intructions for your application: "
    }, 

    {
        name: "license", 
        type: "list", 
        message: "Please select a license for your application: ",
        choices: ["MIT", "Apache2.0", "Eclipse_Public_License_2.0", "none"]
    }, 
    {
        name: "github username", 
        type: "input", 
        message: "Enter your GitHub username: "
    },
    {
        name: "email address", 
        type: "input", 
        message: "Enter your email adress: "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile("README.md")
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
