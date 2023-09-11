const fs = require(`fs`);
const SVG = require('svg.js');

function generateLogo(text, textColor, shape, shapeColor) {
  const svg = SVG().size(300, 200);
  const shapeElement = createShape(shape, shapeColor);
  const textElement = createText(text, textColor);
  svg.add(shapeElement).add(textElement);
  return svg.svg();
};

const createShape = (data) => {
  const { shape } = data;
  switch (shape) {
    case "circle": 
      const makeCircle = new Circle(data);
      return makeCircle;

    case "triangle":
      const makeTriangle = new Triangle(data);
      return makeTriangle;

    case "square":
      const makeSquare = new Square(data);
      return makeSquare;
  }
};

function createText(text, textColor) {
  return SVG().text(text).fill(textColor).move(125, 125).font({ size: 35 });
};

fs.writeFile('newLogo.svg', SVG(), (err) => {
  if (err) throw err;
  console.log('Generated newLogo.svg');
});


module.exports = {generateLogo,};