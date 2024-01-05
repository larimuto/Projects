// Create an array with a length of 20
let newArray = new Array(20).fill(0);

// Values to replace at indices 2 to 15
let replacementValues = [1, 1, 1, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// Replace values at indices 2 to 15 with replacementValues



x= 5
const test = x.toString().repeat(5).split("").map(Number)
newArray.splice(2, 14, ...test);
console.log(newArray);