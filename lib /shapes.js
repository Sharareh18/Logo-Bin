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
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
};

class Triangle extends shape {
  constructor(color) {
    super();
    this.color = color;
  }
  render() {
    console.log(`Rendering circle with color: ${this.color}`);
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
};

class Square extends shape {
  constructor(color) {
    super();
    this.color = color;
  }
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
};

   module.exports = { Circle, Triangle, Square };

  
 
  
 
  

  
