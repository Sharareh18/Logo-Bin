// packages used
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const { generateLogo } = require('./lib /generateLogo');



// User input for logo name, text color, shape and shape color.
const questions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'Please enter up to 3 letters for the text of the logo:',
            name: 'text', 
        },
        {
            type: 'list',
            message: 'Please select the color for your text:',
            choices: ['White', 'Red', 'Yellow'],
            name: 'textColor',  
        },
        {
            type: 'list',
            message: 'Please select the shape of your logo:',
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shape',   
        },
        {
            type: 'list',
            message: 'Please select the color of your logo:',
            choices: ['Green', 'Black', 'Gray'],
            name: 'shapeColor',  
        },

    ])
    .then((answers) => {
      // using the generateLogo function in separate file to take in user inputs, create shape and text and generate an svg logo file to be saved as newLogo file
      const svg = generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
      fs.writeFile('newLogo.svg', svg, (err) => {
        if (err) throw err;
        console.log('Generated newLogo.svg');
      });
    });
  };



questions();

