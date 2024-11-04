// Create an Array of your favorite cities of not more than 8 initial length
// Print to the console the length of the array
// Remove the last element from the array
// Add to the array an other city you like
// Print to the console the first item in the array
// Print to the console the last item in the array
// Print to the console the full array
// Print to the console the length of the array
// Create a car variable to store attributes 
const car = {
    type: 'Benz',
    color: 'Green',
    model: '2024',
    value: '20,000,000'
}

const cars = [
    {
    type: 'Benz',
    color: 'Green',
    model: '2024',
    value: '20,000,000'
},
{
    type: 'Toyota',
    color: 'Green',
    model: '2024',
    value: '20,000,000'
}

]
console.log(cars[0].model);


console.log( 'cartype is' + car.type +  'the color of the car is' + car.color + 'car model is' + car.model + 'The car value is ' + car.value);
console.log( `car type is ${car.type} the color of the car is ${car.color} car model is ${car.model} the car value is ${car.value}`);

// Print to the console one or two values of the car.

// Solution;

const myFavoriteCities = ['London' , 'Kenya' , 'Maldives' , 'USA' , 'Jerusalem' , 'Egypt' , 'Dubai' , 'Qatar']

console.log(myFavoriteCities.length) 

myFavoriteCities.pop()
myFavoriteCities.push('Laos')

myFavoriteCities[0]
console.log(myFavoriteCities[0])

lastitem =[myFavoriteCities.length - 1]
console.log(myFavoriteCities[myFavoriteCities.length - 1])
let carType = 'Benz'
let carValue = '2000000'

console.log(carValue)


