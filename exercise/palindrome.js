// Write a code to check whether a string is a palindrome or not.

let str = "Malam" // 11
let reverse = ""

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i)
    // console.log(reverse);
}

console.log(reverse.toLowerCase() === str.toLowerCase() ?
    `${str} is palindrome` :
    `${str} is not palindrome` );