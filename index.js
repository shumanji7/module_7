// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
];

//Generate markdown for README
const createMarkdown = (answers) => {
return `# ${answers.title}
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)
## Description
${answers.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contributing
${answers.contribution}
## Tests
${answers.test}
## License

This project is licensed under the ${answers.license} license.

## Questions
If you have any questions, please contact me at ${answers.email}. You can find more of my work at [${answers.github}]
- [GitHub](${answers.github})(github.com/${answers.github})
- [Email](mailto:${answers.email})
`;
}


// TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {
//    fs.writeFile(fileName, data, (err) =>
//        err ? console.error(err) : console.log('Success!'));
//};



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = createMarkdown(answers);
            fs.writeFileSync('README.md', markdown);
            console.log('Success! Your README.md file has been created.');
        })
        .catch((error) => {
            console.error("An error has occurred:", error);
        });     
};

// Function call to initialize app
init();
