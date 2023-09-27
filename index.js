// packages used
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const { Circle, Triangle, Square } = require('./lib /shapes');


// it's got to be a render method not setting the fill attribute right or 
// the color is not being passed in correctly or createShape isn't returning
// the shape markup/color or generateLogo isn't passing the shape and color into 
// createShape right....

function generateLogo(text, textColor, shape, shapeColor) {
  const svg = `<svg width="300" height="200">${createText(text, textColor)}${createShape(shape, shapeColor)}</svg>`;
  return svg;
};



const createShape = (shape, shapeColor) => {
  let shapeType;
  switch (shape) {
    case "circle":
      shapeType = new Circle(shapeColor);
      // return circle.render();
      break;
    case "triangle":
      shapeType = new Triangle(shapeColor);
      // return triangle.render();
      break;
    default:
      shapeType = new Square(shapeColor);
      // return square.render();
      break;
  }
  let sh = shapeType.render()
  return sh;
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
      // const shape = createShape(answers.shape, answers.shapeColor);
      fs.writeFile('newLogo.svg', logo, (err) => {
        if (err) throw err;
        console.log('Generated newLogo.svg');
      });
    });


};

questions();
