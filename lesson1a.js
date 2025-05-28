// A variable is a temporary storage location in memory
// Variables can be used to store data that can change over time
// We have two main initilizers i.e let and const

let x = 10
console.log(x);

// Javascript Data types.

// string : Series of characters which are inside of quotes. The characters can be letters,
//  numbers, symbols, and spaces.

let statement = "Hello there, I love programming!";
console.log(statement);

// to verify the data type of a variable wecan use the typeof operator
console.log(typeof statement); // string

// Numbers:  Represents both integers and floating-point numbers.
let mynumbers  = 38;
const pi = 3.142;

console.log(mynumbers);
console.log(typeof mynumbers); // number
console.log(typeof pi);

// Boolean: Represents a logical entity and can have two values: true or false.
let isSunny = true;
console.log(isSunny);
console.log(typeof isSunny); 

let isRaining = false;
console.log(isRaining);
console.log(typeof isRaining); // boolean

// BigInt: Represents integers with arbitrary precision, allowing for very large numbers.
let bigNumber = 12901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber); // bigint


//undefined: A variable declared but not assigned a value is of type undefined.
let myVariable;
console.log(myVariable);
console.log(typeof myVariable); 

// null: Represents the intentional absence of any object value.
let mynumber = null;
console.log(mynumber);
console.log(typeof mynumber); // object (this is a known quirk in JavaScript)