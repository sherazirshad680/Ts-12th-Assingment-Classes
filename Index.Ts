import sheraz from "./classes";
var Sheraz = new sheraz(`Shoaib`)
console.log(Sheraz);


// Q1: Create a base class called Animal with properties name and sound. Then, create a derived class called Dog that 
// extends Animal and has an additional property breed. Display the name, sound, and breed of the dog.

class Animal {
    name: string;
    sound: string;
    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound
    }
}
class Dog extends Animal {
    breed: string;
    constructor(name: string, sound: string, breed: string) {
        super(name, sound)
        this.breed = breed;
    }
}
var dog = new Dog(`Barking`, `Tommy`, `poodel`);
console.log(`${dog.name}  ${dog.sound} ${dog.breed}`);

// Question 2: Overriding Methods Extend the Dog class from the previous question. Add a method called makeSound 
// to the Animal class that logs the sound of the animal.Override this method in the Dog class to log "Woof" as the sound.

class Animal1 {
    name: string;
    sound: string;
    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound
    }
}
class Dog1 extends Animal {
    breed: string;
    constructor(name: string, sound: string, breed: string) {
        super(name, sound)
        this.breed = breed;
    }
}
var dog = new Dog(`woof`, `Tommy`, `poodel`);
console.log(`${dog.name} ${dog.sound} ${dog.breed}`);


// Question 3: Abstract Class Create an abstract class Shape with an abstract method calculateArea. Implement two classes Circle and Rectangle that extend Shape and provide implementations for calculateArea.


// Question 4: Interfaces Create an interface Employee with properties name, id, and salary. Implement a class called
// Manager that implements the Employee interface and sets the properties accordingly.

interface Employee {
    name: string;
    Id: number;
    Salary: number
}

class Manager implements Employee {
    constructor(name: string, Id: number, Salary: number) {
        this.name = name,
            this.Id = Id
        this.Salary = Salary
    }
    name: string;
    Id: number;
    Salary: number;
}
var manager = new Manager(`Sheraz`, 778812, 5000);
console.log(`${manager.name},${manager.Id},${manager.Salary}`);


// Question 5: Interface Inheritance Extend the Employee interface from the previous question to include a method getDetails. Implement this method in the Manager class to display the details of the manager.



// Question 6: Multiple Inheritance Create an interface called Person with properties firstName and lastName. Implement a class // Student that implements both Person and Employee interfaces from previous questions. Display the student's and employee's details.

interface person {
    firstName: string;
    lastName: string;
}
class EmployeeDetail implements person {
    static firstName: any;
    static lastName: any;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }
    lastName: string;
    firstName: string
}

var employee = new EmployeeDetail(`Sheraz`, `irshad`)
console.log(`${employee.firstName},${employee.lastName}`);

interface students {
    firstName: string;
    lastName: string;
}
class StudentDetails implements EmployeeDetail {
    static firstName: any;
    static lastName: any;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }
    lastName: string;
    firstName: string
}
var Student = new StudentDetails(`Ahmad`, `Jawad`)
console.log(`${Student.firstName},${Student.lastName}`);

// Question 7: Super Keyword Create a base class Vehicle with properties make and model. Implement a derived class Car that// extends Vehicle and adds a property color. Use the super keyword to call the base class constructor and set properties.

class Vehicle {
    make: string;
    model: number;
    constructor(make: string, model: any, _color: string) {
        this.make = make;
        this.model = model
    }
}
class Car extends Vehicle {
    color: string;
    static make: any;

    constructor(make: string, model: number, color: string) {
        super(make, model, color);
        this.color = color;
    }
}

// var setProperties = new Car(`Corolla`, 2023, `red`)
// console.log(`${setProperties.make},${setProperties.model},${setProperties.color}`);


// Question 8: Access Modifiers Create a class Person with properties name and age. Make name private and age protected.
// Implement a method to display the person's details.

class Person {
    private Name: string;
    protected age: number;
    constructor(Name: string, age: number) {
        this.Name = Name;
        this.age = age
    }
}


// Question 9: Create a base class Shape with a method draw. Implement two derived classes Circle and Square that override the draw method to display their respective shapes


class Shape {
    draw = (): string => `Rectangle`;
}
class Circle extends Shape {
    circle = (): string => `Circle`;
}
class Square extends Shape {
    square = (): string => `Square`;
}
var square = new Square();
console.log(square.square());
var circle1 = new Circle();
console.log(circle1.circle());

