// Functions
// functions are functional code blocks that we've written to be reused through out our codebase
// Arrow function
// exports.addNumbers = (num1 = 0, num2 = 0) => {
//     if (typeof num1=== "number" && typeof num2 === "number") {
//         return num1 + num2 
//     }
//     return "This is not allowed"
// }


// function addNum(a, b) {
//     return a + b
// }


// function printNum(num) {
//     for (let i = 0; i <= num; i++) {
//         console.log(i); 
//     }
// }

// const addition = addNumbers(23)

// console.log(addNumbers(true, 1));
// console.log(addNum(5, 6));
// printNum(12)
// console.log(addition);


// ASSIGNMENT
// 1. create a function that receives an array as a parameter and returns the length of the array

exports.lens=(fullArray) => {
    return fullArray.length
}


