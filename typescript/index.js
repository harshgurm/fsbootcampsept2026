"use strict";
let x = 5;
console.log(x);
x = 10;
let y = x + 15;
console.log(y);
let firstName = "John";
console.log(firstName);
let isCustomer = true;
if (isCustomer) {
    console.log("Welcome, valued customer!");
}
else {
    console.log("Hello, guest!");
}
let num = 42;
console.log(num);
num = "Now I'm a string!";
console.log(num);
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    postalCode: "10001", // This property is not defined in the Person interface
};
let user = {
    name: "Bob",
    age: 25,
    city: "Los Angeles"
};
let numbers = [1, 2, 3, 4, 5];
//another way to declare an array of numbers
let numbers2 = [6, 7, 8, 9, 10];
let strings = ["apple", "banana", "cherry", "date", "elderberry"];
let string = "Hello, world!";
string = 10;
console.log(string);
let abc = "This can be any type";
console.log(abc);
abc = 42;
console.log(abc);
let username = "JohnDoe";
let mixVal = [1, "two", true, "Test"];
let mixVal1 = [1, "two", true, "Test"];
function calPercentage(marks) {
    return (marks / 500) * 100;
}
calPercentage(400);
class Car {

    model;
    doors;

    constructor(carModel, carDoors) {
        this.model = carModel;
        this.doors = carDoors;
    }

    carDetails(){
        console.log("Car Model: " + this.model + ", Number of Doors: " + this.doors);
    }
}

let car1 = new Car("Toyota", 4);
let car2 = new Car("Honda", 2);
// car2.carDetails();

// let car3 = new Car("Ford", 4);
// car1.carDetails();