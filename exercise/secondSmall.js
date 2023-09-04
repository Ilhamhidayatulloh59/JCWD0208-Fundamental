/*
Write a function from a given array of numbers and return 
the second smallest number
*/

let arr = [5, 1, 2, 4, 3]

function myFunc (input) {
    return input.sort((a, b) => a - b)[1]
}

console.log(myFunc(arr));
