const inquirer = require('inquirer');
const fs = require('fs');
const { generateLogo } = require('./generateLogo');

inquirer.prompt([

        {
            type: 'input',
            name: 'text',
            message: 'Please enter 3 letters for the text of the logo:',
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Please select a text color:',
            choices: ['White', 'Black', '']
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select the shape of your logo:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Please select the color of your logo:',
            choices: ['Green', 'Black', 'Gray'],
        },

    ]);

    inquirer.prompt(questions).then((answers) => {
        const svg = generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
        fs.writeFileSync('newLogo.svg', svg);
        console.log('Generated newLogo.svg');
    });


// generateLogo();