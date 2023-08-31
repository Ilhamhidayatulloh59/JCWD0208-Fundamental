// Write a code to format number as currency (IDR)

let num = 1234567890 // Rp. 1.234.567,00
let result = ""
let numString = num.toString()

for(let i = 0; i < numString.length; i++) {
    if(i % 3 === 0 && i > 0) {
        result = "." + result
    }
    result = numString.charAt(numString.length - 1 - i) + result
}

console.log(`Rp. ${result},00`)