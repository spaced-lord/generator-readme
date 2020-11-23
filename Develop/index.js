const inquirer = require("inquirer");


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
            type: "input",
            message: "What kind of licenses are needed for your project?",
            name: "licenses",
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
    const mdfile = "## `${title}`";
    makeReadMe(mdfile);
        function makeReadMe(mdfile) {
            
        }
    })
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
