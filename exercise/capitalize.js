// Write a code to capitalize the first letter of each word in a string

let str = "selamat datang di purwadhika bandung"
let result = ""
let isCapital = true

for(let i = 0; i < str.length; i++) {
    if(isCapital === true) {
        result += str.charAt(i).toUpperCase()
        isCapital = false
    } else {
        result += str.charAt(i).toLowerCase()
    }

    if(str.charAt(i) === " ") {
        isCapital = true
    }
}

console.log(result);
