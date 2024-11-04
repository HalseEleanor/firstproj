// Assignment:
// 1. A car dealer wants to make a sale i.e sales and cost will be global variables. 
//if cost is more than 20,000, update sales to be 30,000 and if not update sales to be 20,000

// Use if else statement to do this, use switch statement to do this, use ternary operator to do this.
// 2. Add more conditions such that it has two or more else if conditions - use if else and switch statement for this.

// Solution.

let cartype = 'Toyota'
let cost = '30,000'
let sales 
if (cartype = 'Toyota') {
    cost = '30,000';
} else {
    sales = '20,000'
}
    console.log(sales);
    
if (cost > '20,000') {sales = '30,000'

} else if(cost < '20,000') {sales = '20,000'}

// Ternary operators
cost > '20,000' ? sales = '30,000':  sales = '20,000'

// Switch 
switch (cartype) {
    case cost:
        
        break;

    default:
        break;
}
