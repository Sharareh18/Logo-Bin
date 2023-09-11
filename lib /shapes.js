// constructor function to define shape and its color
class Shape {
    constructor() {
      this.color = "";
    }
    setColor(shapeColor) {
        this.color = shapeColor;
      }
    }

// Circle, Triangle and Square classes (and properties inherited from the shape class)
class Circle extends Shape {
    render() {
      return `<circle cx="50" cy="50" r="100" fill="${this.color}" />`;
    }
  }

  class Triangle extends Shape {
    render() {
      return `<polygon points="0,100 50,0 100,100" fill="${this.color}" />`;
    }
  } 

  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="300" height="200" fill="${this.color}" />`;
    }
  } 

  module.exports = { Circle, Triangle, Square };