// Assignment :create a register function 
// it will have username,email,password and phone
// check if the email is valid by checking the at symbol and dot
// check password if is strong and finally resgister successfully



function register(username, email, password, phone) {
    let message = "";

    if (!username || !email || !password || !phone) {
        message = "All fields are required.";
    } else if (!email.includes("@") || !email.includes(".")) {
        message = "Email must contain '@' and '.'";
    } else if (password.length < 8) {
        message = "Password should be at least 8 characters.";
    } else {
        message = "User registered successfully!";
    }

    console.log(message);
}

// Example 
register("Sam", "samgmail.com", "1234", "0714395644")
