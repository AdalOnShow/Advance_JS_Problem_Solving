//! 1. Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

const person = {
  name: "Adal",
  age: 16,
};
let { name, age } = person;
console.log(`Name: ${name} and Age: ${age}`); //Name: Adal and Age: 16

//! 2. Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.

import { calculateCircleArea } from "./module.js";

const radius = 4;
const area = calculateCircleArea(radius);
console.log(`The area of a circle with radius ${radius} is ${area}.`); //The area of a circle with radius 4 is 50.26548245743669.

//! 3. Problem: Create a class Rectangle with properties width and height and a method to calculate the area.

class rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

const myRectangle = new rectangle(4, 8);
console.log(`The area of the rectangle is ${myRectangle.calculateArea()}.`); //The area of the rectangle is 32.

//! 4. Problem: Create a class Person with a getter and setter for the fullName property.

class person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person3 = new person2("Sharif", "Adal");
console.log(person3.fullName); // "Sharif Adal"

//! 5. Problem: Create a class expression for a Circle with a method to calculate the circumference.
const Circle = class {
  constructor(radius) {
    this.radius = radius;
  }
  calculateCircumference() {
    return 2 * Math.PI * this.radius;
  }
};

const myCircle = new Circle(5);
console.log(
  `The circumference of the circle is ${myCircle.calculateCircumference()}.`
); //The circumference of the circle is 31.41592653589793.

//! 6. Problem: Create an object with computed property names based on variables.

const propName1 = "firstName";
const propName2 = "lastName";

const person4 = {
  [propName1]: "John",
  [propName2]: "Doe",
};

console.log(person4.firstName); // "John"
console.log(person4.lastName); // "Doe"

//! 7. Problem: Create a base class Animal and a derived class Dog that inherits from Animal.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  info() {
    console.log(`${this.name} is a ${this.breed}.`);
  }
}

const myDog = new Dog("Rex", "Golden Retriever");
myDog.speak(); // "Rex barks."
myDog.info(); // "Rex is a Golden Retriever."

//! 8. Problem: Use new.target to create an abstract class Shape that cannot be instantiated directly.

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly.");
    }
  }

  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented.");
  }
}

class Circle2 extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

try {
  const shape = new Shape();
} catch (error) {
  console.error(error.message);
}

const myCircle2 = new Circle2(5);
console.log(`The area of the circle is ${myCircle2.calculateArea()}.`); // The area of the circle is 78.53981633974483.

const myRectangle2 = new Rectangle(4, 5);
console.log(`The area of the rectangle is ${myRectangle2.calculateArea()}.`); // The area of the rectangle is 20.

//! 9. Problem: Create a class MathUtil with a static method square to calculate the square of a number.

class MathUtil {
  static square(number) {
    return number * number;
  }
}

const num = 5;
const squaredNum = MathUtil.square(num);
console.log(`The square of ${num} is ${squaredNum}.`); // "The square of 5 is 25."

//! 10. Problem: Create an object with a symbol as a property key and demonstrate accessing it.

const uniqueSymbol = Symbol("uniqueKey");

const myObject = {
  [uniqueSymbol]: "This is a value associated with a unique symbol",
};

console.log(myObject[uniqueSymbol]); // "This is a value associated with a unique symbol"
