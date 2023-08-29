// ini code pertama
console.log("Hello World !");

/* ini komen 
2 baris */

// ini komen shortcut

// membuat variable dengan nama message
let message;
let Message;

// menambahkan data atau nilai ke variable yang udah dibuat
message = "Hello"

console.log(message)

var globalVarible = "Global Variable"

let replacable = "This value will be replaced"
// console.log(replacable)
replacable = "I love Javascript"
// console.log(replacable)

const constant = "Hello Purwadhika"


// data types

let kata = "Javascript"  // string
let count = 1 // number
let bigNumber = 9121221n // bigInt
let isTrue = true // boolean
let noData = null // null
let noAssigned // undefined
const person = { // object
    name: "Jomni",
    age: 26,
}
let arr = [1, 2, 3, 4, "Hello"]

// typeof adalah syntax untuk mengetahui type data dalam variable
console.log(typeof kata)
console.log(typeof count)
console.log(typeof bigNumber)
console.log(typeof isTrue)

let str = "purwadhika"
console.log(str.toUpperCase())
console.log(str.charAt(2))
console.log(str.replace("a", "i"))
console.log(str.split(" "))

console.log(str + ' bandung')
// template literals
console.log(`${str} bandung`)


let num = 123.4
console.log(typeof num)
console.log(typeof num.toString())
console.log(num.toFixed())

console.log(Boolean(-1))