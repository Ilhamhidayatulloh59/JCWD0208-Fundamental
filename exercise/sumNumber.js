/*
Write a function from a given array of mixed data types 
and return the sum of all the number
*/

let arr = [1, "a", null, 2, 3, "9"] // 6

function myFunc(input) {
    return input.filter(item => typeof item == 'number')
    .reduce((a, b) => a + b)
}

console.log(myFunc(arr));