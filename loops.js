// Assignment:
// 1. create an array of at least 10 cities
// 2. Use for loop. while loop. Do while Loop to print out to the terminal all city in the array
// 3. Use if statement inside the loop to print out your most favorite city
// 4. Read on foreach Loop and map in Javascript

// Solution:
const {lens} = require('./functions')
const myFavoriteCities = [ 'London', 'Netherlands', 'Mexico', 'Spain', 'Italy', 'China', 'Tokyo', 'Dubai', 'Egypt', 'Morocco'] 

const len = lens(myFavoriteCities)
for (let cities = 0; cities < len; cities++) {
    let eachCities = myFavoriteCities[cities];
    if (eachCities === 'Spain') {
        console.log('I love Spain More');
        
    } 
    console.log(eachCities);
    console.log(cities);
    
    
}
let citiesLength = lens(myFavoriteCities)
let index = 0
while (index < citiesLength) {
    console.log('Using While Loop', myFavoriteCities[index]);
    index++
} 

let x = 30;

do {
    console.log('do while loop', x);
    x++
} while (x < 20);

for (let i = 1; i < 10; i++) {
    console.log(i);
    
}