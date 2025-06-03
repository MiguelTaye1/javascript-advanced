//Loops
//Looping staatements are used to execute a block of code repeatedly untill a condition is met.
//We have several types of loops in JavaScript:
// 1. for loop

//structure of the for loop

for (let i = 1; i <= 5; i++){
    console.log("The values are: " + i)
}

// 2. While loop
// structure:
// initialize a variable with some values 
// while (condition){
// code to execute
// }
let j = 1;
while (j <= 5){
    console.log("The value of j is: " + j)
    j++
};

// 3. do while loop
//this loop is guaranteed to execute at least once even if the condition is false.
//structure: initialize a variable with new values
//do {
// code to execute
//}while (condition); 

let k = 40;
do {
    console.log(k);
    k++;
}while (k <= 10);

//loops can be used to loop through arrays

let countries = ["Kenya","TZ", "Uganda", "Burundi","Congo", "Somalia", "Ethiopia"];

console.log(countries)
for (let i = 0; i < countries.length; i++){
    console.log( countries[i]);
}


//Break and continue keywords in loops
//break keyword is used to exit a loop prematurely
//continue keyword is used to skip the current iteration and continue with the next one

//example 1 = continue

for (let i = 0; i < 10; i++){
     console.log( i);
    if (i === 5){
        console.log("five is here ")
    console.log( i);
}continue;
}

//example 2 = break

for (let i = 20; i <= 30; i++){
    if (i == 26)
        break; // this will exit the loop when i is equal to 26
    console.log( i);
}
