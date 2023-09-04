/*
Write a function that takes an array of words and
returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
*/

let arr = ['apple', 'orange', 'lemon', 'mango'] 
// 'apple, orange, lemon and mango'

function myFunc (input) {
    let lastword = input[input.length - 1] // menampung value terakhir
    input.pop() // menghapus value terakhir
    return input.join(", ") + " and " + lastword
}

console.log(myFunc(arr));