// using the classes from shapes file  
const { Circle, Triangle, Square } = require('./shapes');


// running test for a black circle to be rendered 
describe("circle test", () => {
    test("expect an svg of black circle", () => {
      const shape = new Circle();
      shape.setColor("black");
      expect(shape.render()).toEqual(
        '<circle cx="50" cy="50" r="100" fill="black" />'
      );
    });
  });

  // running test for a black tirangle to be rendered 
  describe("triangle test", () => {
    test("expect an svg of black triangle", () => {
      const shape = new Triangle();
      shape.setColor("black");
      expect(shape.render()).toEqual(
        '<polygon points="0,100 50,0 100,100" fill="black" />'
      );
    });
  });

  // running test for a black square to be rendered 
  describe("square test", () => {
    test("expect an svg of black square", () => {
      const shape = new Square();
      shape.setColor("black");
      expect(shape.render()).toEqual(
        '<rect x="50" y="50" width="300" height="200" fill="black" />'
      );
    });
  });
  