let name = " Alice Wanjiku "
let age = 35

// 1. Removing leading/trailing spaces and build a greeting using a string literals
console.log(name)
console.log(name.trim()) // This will remove leading and trailing spaces

let greeting = `Hello, ${name.trim()}! and you are ${age} years old.`;
console.log(greeting);

// 2. Convert the greeting to uppercase
let convertgreeting = greeting.toUpperCase();
console.log(convertgreeting);

// 3. slice - it enables us to extract characters from a given index to another index
console.log(name.trim() . slice(2, 4)); // This will extract characters ic 

// 4. includes function - it checks if a given character exists in a string. It returns boolean value true or false
console.log(name.trim().includes("i")) // This will return true if "A" is found in the string

// 5. toLowerCase - it converts all characters in a string to lowercase
console.log(name.trim().toLowerCase()); // This will convert the string to lowercase

// 6. substring - similar to slice. it extracts characters from a string starting from a given index to the end of the string
console.log(name.trim().substring(6, 8).toLowerCase()); // This will extract characters w a and convert them to lowercase

// 7. indexOf - it returns the index of the first occurrence of a character in a string. If the character is not found, it returns -1
console.log(name.trim().indexOf("W")); // This will return the index of the first occurrence of "W" in the string

// 8. length - it returns the total number of characters including spaces in a string
console.log(name.trim().length); // This will return the total number of characters in the string

// 9. replace - it replaces a character with a new character in a string
let newName = name.trim().replace("Alice", "Jessica");
console.log(newName); // This will replace "Alice" with "Jessica"

//Assignment. find out how to replace multiple occurrences in a string at once
//n JavaScript, to replace multiple different substrings in a string at once, you have a few options.
//  The best method uses regular expressions (RegEx) combined with a replacement function.


// 10. charAt(index) - this function normally finds/outputs the character at a given string
console.log(name.trim().charAt(4)); // This will return the character at index 4 in the string

// 11. split(separator) - it splits a string into an array 
console.log(name.trim().split(" ")); // This will split the string into an array of words

// 12. endsWith - it checks if a string ends with a given character. It returns boolean value true or false
console.log(name.trim().endsWith("Wanjiku")); // This will return true if the string ends with "Wanjiku"

// 13. startsWith - it checks if a string starts with a given character. It returns boolean value true or false
console.log(name.trim().startsWith("Alice")); // This will return true if the string starts with "Alice"

// 14. repeat - it repeats a string a given number of times
console.log(name.repeat(3)); // This will repeat the string 3 times

