const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
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
        name: "installation", 
        type: "input", 
        message: "Enter the installation instructions for your application: "
    }, 

    {
        name: "usage", 
        type: "input", 
        message: "Enter the usage information for your application: "
    }, 

    {
        name: "contribution", 
        type: "input", 
        message: "Enter the contribution guidelines for your application: "
    },

    {
        name: "testing", 
        type: "input", 
        message: "Enter the test intructions for your application: "
    }, 

    {
        name: "license", 
        type: "list", 
        message: "Please select a license for your application: ",
        choices: ["MIT", "Apache 2.0", "Eclipse Public License 1.0", "GNU GPL v3", "IBM", "Mozilla", "none"]
    }, 
    {
        name: "github", 
        type: "input", 
        message: "Enter your GitHub username: "
    },
    {
        name: "email", 
        type: "input", 
        message: "Enter your email adress: "
    }
]


// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) =>{
        err ? console.log(err) : console.log("your README file has been generated!");
    })
    return
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) =>{
        const markdown = generateMarkdown(data);
        writeToFile("README.md", markdown);
    })
}

// Function call to initialize app
init();
