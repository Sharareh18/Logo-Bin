// packages used
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const { Circle, Triangle, Square } = require('./lib /shapes');


function generateLogo(text, textColor, shape, shapeColor) {
  const svg = `<svg width="300" height="200">${createText(text, textColor)}${createShape(shape, shapeColor)}</svg>`;
  return svg;
};



const createShape = (shape, shapeColor) => {
  switch (shape) {
    case "circle": 
      const circle = new Circle(shapeColor);
      return circle.render();

    case "triangle":
      const triangle = new Triangle(shapeColor);
      return triangle.render();

    case "square":
      const square = new Square(shapeColor);
      return square.render();
  }
};

function createText(text, textColor) {
  return `<text x="125" y="125" fill="${textColor}" font-size="35">${text}</text>`;
};


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
      const logo = generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
      const shape = createShape(answers.shape, answers.shapeColor);
      fs.writeFile('newLogo.svg', logo, (err) => {
        if (err) throw err;
        console.log('Generated newLogo.svg');
      });
    });


  };

  questions();
