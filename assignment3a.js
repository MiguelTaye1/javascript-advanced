// let rawName = "   diana karanja  ";
// let rawEmail = "DianaKaranja@Email.com   ";
// let course = "Introduction to coding";
// let age1 = 17;

// Assignment:
// Welcome, Diana Karanja!
// Email: dianakaranja@email.com
// Course: INTRODUCTION TO CODING
// Your email address has 25 characters.

// First name: Diana
// Updated course: Introduction to JavaScript
// Initials: D.K.

let rawName = "   diana karanja  ";
let rawEmail = "DianaKaranja@Email.com   ";
let course = "Introduction to coding";
let age1 = 17;

// 1. Clean and format the name
let trimmedName = rawName.trim();
let nameParts = trimmedName.split(" ");
let formattedName = nameParts.map(
  word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
).join(" ");

// 2. Clean and format the email
let email = rawEmail.trim().toLowerCase();

// 3. Convert course to uppercase
let upperCourse = course.toUpperCase();

// 4. Get email length
let emailLength = email.length;

// 5. Get first name
let firstName = formattedName.split(" ")[0];

// 6. Updated course
let updatedCourse = "Introduction to JavaScript";

// 7. Get initials
let initials = nameParts.map(
  part => part.charAt(0).toUpperCase()
).join(".");


// OUTPUT
console.log(`Welcome, ${formattedName}!`);
console.log(`Email: ${email}`);
console.log(`Course: ${upperCourse}`);
console.log(`Your email address has ${emailLength} characters.\n`);

console.log(`First name: ${firstName}`);
console.log(`Updated course: ${updatedCourse}`);
console.log(`Initials: ${initials}.`);
