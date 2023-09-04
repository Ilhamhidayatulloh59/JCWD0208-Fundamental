/*
Write a function to calculate each
element in the same position from two arrays of integer.
Assume both arrays are of the same length.
*/

let arr = [1, 2, 3, 4]
let arr2 = [3, 2, 1]

// [4, 4, 4]

function myFunc (a, b) {
    return a.map((item, index) => item + b[index])
}

const myFunc2 = (a, b) => a.map((item, index) => item + b[index])

console.log(myFunc(arr, arr2));
console.log(myFunc2(arr, arr2));