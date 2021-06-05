// define the class
class Rectangle {
    // define the constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // return the area
    area() {
        return this.height * this.width;
    }

    // return the perimeter
    perimeter() {
        return (this.height * 2) + (this.width * 2);
    }
}

// create an object with height 10 and width 20
var myRectangle = new Rectangle(10, 20);

// print out the area and primeter
console.log(myRectangle.area());
console.log(myRectangle.perimeter());