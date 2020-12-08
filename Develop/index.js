const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");
const fs = require("fs");
const { setFlagsFromString } = require("v8");
const generateMarkdown = require("./utils/generateMarkdown");
const { userInfo } = require("os");
const { errorMonitor } = require("stream");

// array of questions for user
const questions = [
    inquirer
    .prompt([
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
    ])
 .then((data) => { 
    console.log(data);
    const mdfile = "##";
    makeReadMe(mdfile);
        function makeReadMe(mdfile) {
            
        }
    })
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if (err) {
            return console.log(err)
        }

        console.log("Success!")
    });
};

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
function init() {
    try {

    // Prompt Inquirer
    const userResponses = await inquirer.prompt(questions);
    // Pass answers to Inquirer
    const markdown = generateMarkdown(userResponses, userInfo);
    // write markdown
    await fs.writeFileAsync('ExampleREADME.md', markdown);
    } 
    
    catch (error) {
        console.log(error);
    }
};

// function call to initialize program
init();
