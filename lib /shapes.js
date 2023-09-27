// constructor function to define shape and its color
class shape {
    constructor() {
      this.color = "";
    }
    setColor(shapeColor) {
        this.color = shapeColor;
      }
    };

// Circle, Triangle and Square classes (and properties inherited from the shape class)
class Circle extends shape {
  constructor(color) {
    super();
    this.color = color;
  }
  render() {
    return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
  }
};

class Triangle extends shape {
  constructor(color) {
    super();
    this.color = color;
  }
  render() {
    return `<polygon points="100,50 50,150 150,150" fill="${this.color}" />`;
  }
};

class Square extends shape {
  constructor(color) {
    super();
    this.color = color;
  }
  render() {
    return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
  }
};

   module.exports = { Circle, Triangle, Square };

  
 
  
 
  

  
