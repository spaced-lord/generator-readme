const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
            type: "input",
            message: "What is your Github username?",
            name: "username",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the title of your application?",
            name: "title",
        },
        {
            type: "input",
            message: "Please enter a short description of your project.",
            name: "description",
        },
        {
            type: "list",
            message: "What kind of licenses are needed for your project?",
            name: "licenses",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD3", "MST3K", "NONE"],
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "install",
        },
        {
            type: "input",
            message: "What command should be run to run test?",
            name: "test",
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "repoInfo",
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "repoContribute",
        },
    ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log("Boom... README")
    });
};


// function to initialize program
function init() {

    // Prompt Inquirer
    inquirer.prompt(questions).then((response) => {
        const data = generateMarkdown(response);
        writeToFile("README.md", data);
    });   
};

// function call to initialize program
init();
