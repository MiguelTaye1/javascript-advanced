//Object Datatypes
//An object is a datatype that organizes data into key-value pairs.

let student = {
    name: 'James Joho',
    age: 19,
    grade: 'A',
    isEnrolled: true
};

//Access the values by use of the dot notation
console.log("The name of the student is" + student.name)
console.log("The age of the student is" + student.age)

//Acces the values by use of the bracket notation
console.log("The grade the student got is" + student['grade'])
console.log("Is the student enrolled?" + student['isEnrolled'])

//Assignment: create two objects of a player, a car


let user = {
    username: "JohnJohn",
    email: "johnjohn@gmail.com"
};

//Destructuing of the properties of an array
let {username, email}= user;
console.log(username)
console.log(email)

//Assignment: create an object product with properties