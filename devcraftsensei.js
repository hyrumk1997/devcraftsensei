// simple_drawing_tool.js

class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        console.log(`Drawing a ${this.color} shape`);
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing a ${this.color} circle with radius ${this.radius}`);
    }
}

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }

    draw() {
        console.log(`Drawing a ${this.color} rectangle with width ${this.width} and height ${this.height}`);
    }
}

// Example usage
const circle = new Circle(5, 'red');
circle.draw();
const rectangle = new Rectangle(10, 8, 'blue');
rectangle.draw();
