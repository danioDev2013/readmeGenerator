//packages required
const inquirer = require('inquirer');
const fs = require('fs');

//array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?"
        },
        {
            type: "input",
            name: "url",
            message: "What is the live url for this project?"
        },
        {    
            type: "input",
            name: "description",
            message: "What is the description of your project?" 
        }, 
        {
            type: "input",
            name: "install",
            message: "What is the installation instructions?"
        },
        {
            type: "input",
            name: "use",
            message: "How is this project used?"
        },
        {
            type: "list",
            message: "Which type of license would you like to use?",
            name: "license",
            choices: [
              "Apache License 2.0", 
              "MIT License", 
              "BSD 3", 
              "GPL 3.0",
              "none"
            ]
        },
        {
            type: "input",
            name: "name",
            message: "What is your first and last name for copyright license?"
        },
        {
            type: "input",
            name: "contributions",
            message: "Please list any contributions made to the project."
        },
        {
            type: "input",
            name: "test",
            message: "What is the test instructions for the project?"
        },
        {
            type: "input",
            name: "questions",
            message: "Please enter your GitHub username."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your contact Email?"
        },
    ]);
}
const generateREAD = (answers) => 
`
# ${answers.title}
## Description 
${answers.description}

## Table of Contents 
    
${answers.contents}

## Installation 

${answers.install}
## Usage 

${answers.use}
## License 

${answers.license}
Copyright (c) 2021 ${answers.name}
${answers.contributions}
    
## Tests 

${answers.test}
## Questions 

If you have any questions or need any further assistance please see contact information below.
My GitHub Username: https://github.com/${answers.questions}

My Contact Email: ${answers.email}
`;

//func init to create file

//function call to initialize app
init();
