// packages used
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const { Circle, Triangle, Square } = require('./lib /shapes');


// function to generate logo, using user input to create an svg file
function generateLogo(text, textColor, shape, shapeColor) {
  const svg = `<svg width="300" height="200"><g>${createShape(shape, shapeColor)}${createText(text, textColor)}</g></svg>`;
  return svg;
 
};
// funciton to generate text based on user input to be used in the generateLogo funciton to create svg file
function createText(text, textColor) {
  return `<text x="150" y="130" text-anchor="middle" fill="${textColor}" font-size="35">${text}</text>`;
};


// Using user input to create the shape of their choice, adding the chosen color and rendering the shape.  
const createShape = (shape, shapeColor) => {
  console.log(`Shape: ${shape}`);
  let shapeType;
  switch (shape) {
    case "circle":
      shapeType = new Circle(shapeColor);
      console.log(`Creating circle with color: ${shapeColor}`);
      break;
    case "triangle":
      shapeType = new Triangle(shapeColor);
      console.log(`Creating triangle with color: ${shapeColor}`);
      break;
    case "square":
      shapeType = new Square(shapeColor);
      console.log(`Creating square with color: ${shapeColor}`);
      break;
      default:
        throw new Error(`Invalid shape: ${shape}`);
  }
  
  let sh = shapeType.render()
  return sh;
  
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
      choices: ['circle', 'triangle', 'square'],
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
      fs.writeFile('newLogo.svg', logo, (err) => {
        if (err) throw err;
        console.log('Generated newLogo.svg');
      });
    });


};

questions();
