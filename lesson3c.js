//control flow statements
let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}

// if else if statement
// it is used to evaluate multiple conditions
let grade = 102;
if (grade > 100) {
    console.log("Invalid grade. Please enter a grade between 0 and 100.");
}
else if (grade >= 90 && grade <= 100) {
    console.log("You got an A.");
}
else if (grade >= 80 && grade < 90) {
    console.log("You got a B.");
}
else {
    console.log("Grade C or below.");
}