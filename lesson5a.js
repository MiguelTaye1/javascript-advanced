//Arrow functions:
//They were introduced in the current version of JavaScript (ES6) and help us come up with simplified structure of a function
//Example

const greetings = () => {
    console.log("Hello, there!");
}
greetings(); // calling the arrow function

//create an arrow functions that add two numbers . Call it summation
const summation = (num1, num2) => {
    const total = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${total}`);
}
summation(5, 15); // calling the summation function

//Arrow function with parameters
const greeting = (name) => {
    console.log(`Hello, ${name}! How have you been?`)
}
greeting('Miguel'); 
greeting('Mary');

// An arrow function that finds the products of three numbers
const product = (num1, num2, num3) => {
    let total = num1 * num2 * num3;
    console.log(`The product of numbers is: ${total.toFixed(2)}`);
}
product(45.5, 12.6, 7); // calling the product function

//Assignment: Create an arrow function that is able to simple interest of three individuals

