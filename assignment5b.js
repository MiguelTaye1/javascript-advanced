//   Assignment use async to 
// https://official-joke-api.appspot.com/random_joke
const fetchJoke = async () => {
    try {
        // Sending a request to the joke API
        let response = await fetch('https://official-joke-api.appspot.com/random_joke');

        // Converting the response to JSON format
        let jokeData = await response.json();

        // Extract the setup and punchline from the joke
        let { setup, punchline } = jokeData;

        // Print the setup and punchline
        console.log("Setup: " + setup);
        console.log("Punchline: " + punchline);
    } catch (error) {
        // Catch and handle any errors
        console.error("Error fetching the joke: " + error);
    }
};

// Call the function
fetchJoke();

//Assignment 2.
//2. https://sengi2025.pythonanywhere.com/api/getproducts
// On the above api endpoint extract the product_name, and the price and print them out
const fetchProducts = async () => {
    try {
        // Sending a request to the products API
        let response = await fetch('https://sengi2025.pythonanywhere.com/api/getproducts');

        // Converting the response to JSON format (Also returns a promise)
        let [firstProduct] = await response.json(); // Destructure the first product from the array

        // Extract product_name and price from the first product
        let { product_name, product_cost } = firstProduct;

        // Print product name
        console.log("Product Name: " + product_name);

        // Print product price
        console.log("Price: " + product_cost);
    }
    catch (error) {
        // Catch and handle the errors
        console.error("Error fetching the product data: " + error);
    }
};

// Call the fetchProducts function
fetchProducts();
