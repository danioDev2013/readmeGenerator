//packages required
const inquirer = require('inquirer');
const fsProm = require('fs').promises;

//const icon array for the badges
const icon = [];


//array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        //title of projects
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
            validate: function (answers) {
                if (answers.length < 1) {
                    return console.log("You must enter a title for your project.");
                }
                return true;
            }
        },
        //live url
        {
            type: "input",
            name: "url",
            message: "What is the live url for this project?"
        },
        //project description
        {    
            type: "input",
            name: "description",
            message: "What is the description of your project?",
            validate: function (answers) {
                if (answers.length < 1) {
                    return console.log("You must enter a description for your project.");
                }
                return true;
            }
        }, 
        //installation instructions
        {
            type: "input",
            name: "install",
            message: "What is the installation instructions?"
        },
        //installation dependencies
        {
            type: "input",
            name: "dependencies",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        },
        //used
        {
            type: "input",
            name: "use",
            message: "How is this project used?",
            validate: function (answers) {
                if (answers.length < 1) {
                    return console.log("You must enter how to use your project.");
                }
                return true;
            }
        },
        //list of license
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
        //name for copyright
        {
            type: "input",
            name: "name",
            message: "What is your first and last name for copyright license?",
            validate: function (answers) {
                if (answers.length < 1) {
                    return console.log("You must enter your name.");
                }
                return true;
            }
        },
        //contributions
        {
            type: "input",
            name: "contribute",
            message: "Please list any contributions users can make to the project."
        },
        //authors
        {
            type: "input",
            name: "authors",
            message: "Please list the authors of this project."
        },
        //credits
        {
            type: "input",
            name: "credits",
            message: "Please list any links to repos or inspirations used for this project."
        },
        //test instructions
        {
            type: "input",
            name: "test",
            message: "What is the test instructions for the project?"

        },
        //username
        {
            type: "input",
            name: "questions",
            message: "Please enter your GitHub username.",
            validate: function (response) {
                if (response.length < 1) {
                    return console.log("You must enter a GitHub username.");
                }
                return true;
            }
        },
        //contact email
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
* [Contribute](#Contribute)
* [Tests](#Tests)
* [Authors](#Authors)
* [Credits](#Credits)
* [license](#license)
* [Questions](#Questions)
    
## Installation 
---
${answers.install}
<br>
To install necessary dependencies, run the following command: <br>
\`\`\`${answers.dependencies}\`\`\`

## Usage 
---
${answers.use}

## Contribute
---
${answers.contribute}
    
## Tests 
---
${answers.test}

## Authors
---
${answers.authors}

## Credits 
---
${answers.credits}

## License
---
Copyright © ${answers.name} 

licensed under ${answers.license}

## Questions 
---
If you have any questions please see contact information below. <br>

My GitHub Username: [${answers.questions}](http://github.com/${answers.questions})
    
My Contact Email: ${answers.email}
`;


//func init to create file
async function init() {
    try {
        const answer = await promptUser();

        //if statement for the badges 
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

        //write file, located in newRead file
        fsProm.writeFile("newRead/README.md", readAns);
    } catch(err) {
      console.log(err);
    }
  }

//function call to initialize app
init();
