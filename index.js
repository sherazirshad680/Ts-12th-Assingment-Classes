"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = __importDefault(require("./classes"));
var Sheraz = new classes_1.default(`Shoaib`);
console.log(Sheraz);
// Q1: Create a base class called Animal with properties name and sound. Then, create a derived class called Dog that 
// extends Animal and has an additional property breed. Display the name, sound, and breed of the dog.
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
}
class Dog extends Animal {
    constructor(name, sound, breed) {
        super(name, sound);
        this.breed = breed;
    }
}
var dog = new Dog(`Barking`, `Tommy`, `poodel`);
console.log(`${dog.name}  ${dog.sound} ${dog.breed}`);
// Question 2: Overriding Methods Extend the Dog class from the previous question. Add a method called makeSound 
// to the Animal class that logs the sound of the animal.Override this method in the Dog class to log "Woof" as the sound.
class Animal1 {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
}
class Dog1 extends Animal {
    constructor(name, sound, breed) {
        super(name, sound);
        this.breed = breed;
    }
}
var dog = new Dog(`woof`, `Tommy`, `poodel`);
console.log(`${dog.name} ${dog.sound} ${dog.breed}`);
class Manager {
    constructor(name, Id, Salary) {
        this.name = name,
            this.Id = Id;
        this.Salary = Salary;
    }
}
var manager = new Manager(`Sheraz`, 778812, 5000);
console.log(`${manager.name},${manager.Id},${manager.Salary}`);
class EmployeeDetail {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
var employee = new EmployeeDetail(`Sheraz`, `irshad`);
console.log(`${employee.firstName},${employee.lastName}`);
class StudentDetails {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
var Student = new StudentDetails(`Ahmad`, `Jawad`);
console.log(`${Student.firstName},${Student.lastName}`);
// Question 7: Super Keyword Create a base class Vehicle with properties make and model. Implement a derived class Car that// extends Vehicle and adds a property color. Use the super keyword to call the base class constructor and set properties.
class Vehicle {
    constructor(make, model, _color) {
        this.make = make;
        this.model = model;
    }
}
class Car extends Vehicle {
    constructor(make, model, color) {
        super(make, model, color);
        this.color = color;
    }
}
// var setProperties = new Car(`Corolla`, 2023, `red`)
// console.log(`${setProperties.make},${setProperties.model},${setProperties.color}`);
// Question 8: Access Modifiers Create a class Person with properties name and age. Make name private and age protected.
// Implement a method to display the person's details.
class Person {
    constructor(Name, age) {
        this.Name = Name;
        this.age = age;
    }
}
// Question 9: Create a base class Shape with a method draw. Implement two derived classes Circle and Square that override the draw method to display their respective shapes
class Shape {
    constructor() {
        this.draw = () => `Rectangle`;
    }
}
class Circle extends Shape {
    constructor() {
        super(...arguments);
        this.circle = () => `Circle`;
    }
}
class Square extends Shape {
    constructor() {
        super(...arguments);
        this.square = () => `Square`;
    }
}
var square = new Square();
console.log(square.square());
var circle1 = new Circle();
console.log(circle1.circle());
