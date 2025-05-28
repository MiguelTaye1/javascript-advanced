//Array data type
//an array is a collection of related items which are of the same data type

let fruits = ['banana', 'apple', 'orange','grapes']
console.log(fruits[2])

//push method we use to add ab item to the end of an array
fruits.push('mango');
console.log(fruits)

//slice method we use to extract a section of an array
let somefruits = fruits.slice(1,3);
console.log(somefruits)

//pop method we use to remove the last item of an array
fruits.pop();
console.log(fruits)

console.log('The number of the items in the array is ' + fruits.length)

let cities = ['Nairobi', 'Mombasa', 'Nakuru', 'Eldoret', 'Meru', 'Machakos']
console.log(cities)

//the filter methods is used to show the outputs based on some rules
updatedcities = cities.filter (item => item !== 'Meru');
console.log(updatedcities)
