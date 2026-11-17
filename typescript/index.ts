let x: number = 5;
console.log(x);
x = 10;
let y: number = x + 15;
console.log(y);

let firstName: string = "John";
console.log(firstName);

let isCustomer: boolean = true;
if (isCustomer) {
    console.log("Welcome, valued customer!");
} else {
    console.log("Hello, guest!");
}

let num: number | string = 42;
console.log(num);
num = "Now I'm a string!";
console.log(num);

interface Person {
    name: string;
    age: number;
    city: string;
    postalCode?: string;  // Optional property
}

let person: Person = {
    name: "Alice",
    age: 30,
    city: "New York",
    postalCode: "10001"  // This property is not defined in the Person interface
}


let user: Person = {
    name: "Bob",
    age: 25,
    city: "Los Angeles"
}

let numbers: number[] = [1, 2, 3, 4, 5];
//another way to declare an array of numbers
let numbers2: Array<number> = [6, 7, 8, 9, 10];

let strings: string[] = ["apple", "banana", "cherry"];

let string: number | string = "Hello, world!";
string = 10;
console.log(string);

let abc:any = "This can be any type";
console.log(abc);
abc = 42;
console.log(abc);