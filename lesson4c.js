//Javascript functions
// a function is a block of code that performs a specific task
//1. functions with parameters
//structure:
//fun keword followed by the function name, then parameters in parentheses, and finally the code block in curly braces
function greet() {
    console.log("Hello there! How have you been?");
}
greet(); // calling the function

//2. functions with parameters
// Parameterrs are additional values that can be passed to the function when it is called
function greeting(name) {
    console.log(`Hello ${name}! How have you been?`);
}
greeting("Miguel"); 
greeting("Mary");
greeting("John");

//functions with multiple parameters
function sum(num1,num2,num3){
    let total = num1 + num2 + num3;
    console.log(`The total is: ${total}`);
}

sum(10, 20, 30);

//create a function that multiplies four numbers
function multiply(num1, num2, num3, num4) {
    let product = num1 * num2 * num3 * num4;
    console.log(`The product is: ${product}`);
}
multiply(2, 3, 4, 5);

//destructuring in functiions
function studentInfo({name, subject, cat1, cat2}){
    const total = cat1 + cat2;
    console.log(`${name} scored ${total} marks in ${subject}`);
};

studentInfo({
    name: "Joseph",
    subject: "Mathematics",
    cat1: 40,
    cat2: 42
});

//remind yourself on arrow functions