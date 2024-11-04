const myFavoriteCities = [ 'London', 'Netherlands', 'Mexico', 'Spain', 'Italy', 'China', 'Tokyo', 'Dubai', 'Egypt', 'Morocco', 'Quebec'] 

// const len = myFavoriteCities.length
// for (let cities = 0; cities < len; cities++) {
//     let eachCities = myFavoriteCities[cities];
//     if (eachCities === 'Spain') {
//         console.log('I love Spain More');
//         continue;
//     } 
//     console.log(eachCities);
//     console.log(cities);
    
    
// }


// myFavoriteCities.forEach((value, index) => {
//     if (value === "Mexico" || value === "Spain") {
//         console.log(`This is a spanish speaking city: ${value}`)
//     }
//     console.log(value);
// });

let isMostHatedCity = false

for (city of myFavoriteCities) {
    if (city === "Mexico" || city === "Spain") {
        console.log(`This is a spanish speaking city: ${city}`)
        continue;
    }
    console.log(city);
    isMostHatedCity = city === 'Morocco' ? true : false
}
console.log(isMostHatedCity);


const newFavCities =  myFavoriteCities.map(value => {
    return `city: ${value}`
});
console.log(newFavCities);

const cart = [{product: 1, price: 300, quantity: 2}, {product: 2, price: 850, quantity: 3}, {product: 3, price: 400, quantity: 2}]
const checkOutSum = cart.map((value, index) => {
    return {newProduct: value.product, totalAmount: value.price * value.quantity};
})

console.log(checkOutSum);



const filteredCart = cart.filter((value, index) => {
    return value.price > 500
})
console.log(filteredCart);

// ASSIGNMENT
// 1. Create an array of objects of your favorite foods (the food should have key value pairs) e.g complete the below
const foods = [{name: 'Amala', price: 2000, quantity: 5}, {...}]
// 2. Print out the length of the foods array
// 3. Get the first item price of the foods array
// 4. Get the last item quantity of the food array
// 5. use for of and foreach loops to print out the item names of each of the food array
// 6. use map to create a new array to hold total amount of each of the items in the array e.g price * quantity 
