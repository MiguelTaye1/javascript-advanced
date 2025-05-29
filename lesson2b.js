//Array methods
//map() methods

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//summing the numbers
let sum = 0;

let answer = numbers.map(n => sum + n)
console.log('the answer is' + sum)

//filter function
let even = numbers.filter(n => n % 2 === 0);
console.log(even)

//generate an array of odd numbers from the numbers array
let odd = numbers.filter(n => n % 2 !== 0);
console.log(odd)

//assignment ; create an array of 5 numbers. Use map to double them and filter to extract numbers greater than 5.

//Use .map() function/method to convert an array of prices to prices with 16% value added tax (VAT) to show the final cost

// Create an array of five numbers
const number = [2, 4, 6, 8, 10];

// Use map to double them
const doubled = number.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

// Use filter to extract numbers greater than 5
const greaterThanFive = doubled.filter(num => num > 5);
console.log("Numbers Greater Than 5:", greaterThanFive);


// Array of original prices
const prices = [100, 250, 400, 50, 80];

// Add 16% VAT and get final cost
const pricesWithVAT = prices.map(price => price * 1.16);
console.log("Prices with 16% VAT:", pricesWithVAT);

let addition = 0;
let total= pricesWithVAT.map(price => addition = addition + price);
console.log("Total Cost with VAT:", addition);


