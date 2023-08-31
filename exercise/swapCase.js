/*
Write a code to swap the case of each character from string 
Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
*/

let str = "The QuiCk BrOwN Fox"
let result = ""

for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === str.charAt(i).toUpperCase()) {
        result += str.charAt(i).toLowerCase()
    } else {
        result += str.charAt(i).toUpperCase()
    }
}

console.log(result);