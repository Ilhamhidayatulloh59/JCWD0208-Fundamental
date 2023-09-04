/*
Write a function that will combine 2 given array into one array
*/

let arr = [1, 2, 3]
let arr2 = ["a", "b", "c"]

function myFunc (a, b) {
    // return a.concat(b)
    return [...a, ...b]
}

console.log(myFunc(arr, arr2));