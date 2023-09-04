/*
Write a function to insert multiple given integer (not an array) 
to an array and have a maximum size input. The array can only have 
a maximum size from a given input. (if the maximum size of the given 
input is 5 than the array can only contain 5 elements). 
*/

function myFunc (maxSize, ...number) {
    return number.slice(0, maxSize)
}

console.log(myFunc(5, 1, 2, 3, 4, 5, 6, 7, 8));
