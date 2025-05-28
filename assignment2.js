//  Assignment: Create an object product with properties id name, cost, quantity
//  and description. Use destructuring to extract and log them
// Create the product object
const product = {
  id: 3,
  name: "iphone",
  cost: 25000,
  quantity: 5,
  description: "very sleek and fast"
};

// Use destructuring to extract the properties
const { id, name, cost, quantity, description } = product;


console.log("ID:", id);
console.log("Name:", name);
console.log("Cost:", cost);
console.log("Quantity:", quantity);
console.log("Description:", description);

// Create the player object
const player = {
  id: 1,
  name: "Miguel",
  age: 34,
  position: "Striker",
  team: "Arsenal FC",
  goals: 15
};

// Create the car object
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2023,
  color: "Red",
  price: 79999
};

// Assignmet2: create two objects of a player, a car

// Destructure the player object
const { id: playerId, name: playerName, age, position, team, goals } = player;

// Destructure the car object
const { brand, model, year, color, price } = car;

// Log the extracted properties of the player object
console.log("Player Info:");
console.log("ID:", playerId);
console.log("Name:", playerName);
console.log("Age:", age);
console.log("Position:", position);
console.log("Team:", team);
console.log("Goals Scored:", goals);

// Log the extracted properties of the car object
console.log("\nCar Info:");
console.log("Brand:", brand);
console.log("Model:", model);
console.log("Year:", year);
console.log("Color:", color);
console.log("Price:", price);

// Step 1: Create a list of 5 countries
const countries = ["Kenya", "Brazil", "Germany", "India", "Australia"];

// Step 2: Use .slice() to get a portion of the list (e.g., first 3 countries)
const slicedCountries = countries.slice(0, 3);
console.log("Sliced Countries:", slicedCountries);

// Step 3: Use .filter() to get countries with names longer than 5 characters
const longNamedCountries = countries.filter(country => country.length > 5);
console.log("Countries with names longer than 5 characters:", longNamedCountries);


