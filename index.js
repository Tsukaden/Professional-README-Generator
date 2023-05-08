const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of the project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation of the project?", 
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of the project?",   
    },
    {
        type: "list",
        name: "license",
        message: "What is the license of the project?",
        choices: ["IBM", "MIT", "Mozilla", "NONE"],
    },
    {
        type: "input",
        name: "contributing",
        message: "What is the contributing of the project?",    
    },
    {
        type: "input",
        name: "tests",
        message: "What is the tests of the project?",   
    },
    {
        type: "input",
        name: "questions",
        message: "What is the questions of the project?",
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
      }); 
}

function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers)
      writeToFile("README.md", generateMarkdown(answers))
    })
    .catch((error) => {
      if (error.isTtyError) {
        throw error;
      }
    });
}

init();
