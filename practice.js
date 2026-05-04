// JavaScript Practice File

// Variables
let name = "John";
const age = 25;

// Function
function greet(name, age) {
    //  name="haris";
    //  age=22;
    return `Hello, ${name}! ${age}`;
}

console.log(greet(name, age));

// Array
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(fruit));

// Object
let person = {
    name: "Jane",
    age: 30,
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

console.log(person.greet());

const arrow = (a, b) => a + b;
console.log(arrow(3, 5));
const arrows = () => name + age;
console.log(arrows());