// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util= require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: "input",
        name: "title",
        message: "Enter Project Title:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
    {
        type: "input",
        name: "description",
        message: "Enter Description:",
    },
    
    {
        type: "input",
        name: "installation",
        message: "Enter Installation Instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter Usage Information:",
    },
    {
        type: "input",
        name: "contributors",
        message: "Enter contribution guidelines:",
    },
    {
        type: "input",
        name: "test",
        message: "Enter Test Instructions:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter Email",
    },
    {
        type: "input",
        name: "creator",
        message: "Enter Githun Username",
    },
];










// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else{
            console.log("success")
        }
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
      
  }
  init();

// Function call to initialize app
init();


