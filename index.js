//packages required
const inquirer = require('inquirer');
const fsProm = require('fs').promises;

const icon = [];


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
              "Apache 2.0", 
              "MIT", 
              "BSD 3", 
              "GPL 3.0",
              "None"
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

`# ${answers.title}
 
## Description 
---
${answers.description}
<br>
${icon[0]}
    
url: ${answers.url}

## Table of Contents
---
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [license](#license)
* [Questions](#Questions)
    
## Installation 
---
${answers.install}

## Usage 
---
${answers.use}

## Contributions
---
${answers.contributions}
    
## Tests 
---
${answers.test}

## License
---
${answers.license} <br>
Copyright (c) 2021 ${answers.name} <br>

## Questions 
---
If you have any questions please see contact information below.
My GitHub Username: https://github.com/${answers.questions}
    
My Contact Email: ${answers.email}
`;


//func init to create file
async function init() {
    try {
        const answer = await promptUser();

        if (answer.license === 'MIT') {
            icon.push("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)")
        }
        if (answer.license === 'APACHE 2.O') {
            icon.push("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)")
        }
        if (answer.license === 'GPL 3.0') {
            icon.push("[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)")
        }
        if (answer.license === 'BSD 3') {
            icon.push("[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)")
        }
        if (answer.license === 'None') {
            icon.push(" ")
        }

        const readAns = generateREAD(answer);

        fsProm.writeFile("newRead/README.md", readAns);
    } catch(err) {
      console.log(err);
    }
  }

//function call to initialize app
init();
