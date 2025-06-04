//Async and await functions
//These two keywords are used when the function you have is expecting other additional data/info from an external source

const fetchData = async () => {
    try {
     //Sending a request to an external API(This API will definitely give us a response)
        let response = await fetch('https://api.chucknorris.io/jokes/random');

        //Converting the response to JSON format(Also returns a promise)
        let {created_at, value, id} = await response.json();
        
        //Print the date and the joke that was generated
        console.log("Date created:" + created_at);

        //Print the joke
        console.log("Joke:" + value);

        //Print the id of the joke
        console.log("Joke ID:" + id);
    }
    catch (error) {
        //Catch and handle the errors
        console.error("Error fetching the data:" + error);

    }
}

//Call the fetchData function
fetchData();


//   Assignment use async to 
// https://official-joke-api.appspot.com/random_joke
//Extract the setup and punchline from the joke and print them out


//2. https://sengi2025.pythonanywhere.com/api/getproducts
// On the above api endpoint extract the product_name, and the price and print them out


