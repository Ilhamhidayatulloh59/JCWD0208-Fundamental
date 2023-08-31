/*
Write a code to change every letter a into * from a string of input
Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
*/

let str = "An apple a day keeps the doctor away"

console.log(str.toLowerCase().replaceAll("a", "*"))
console.log(str.toLowerCase().replace(/a/g, "*"))