// Write a conditional statement to sort three numbers

let a = 25
let b = 15
let c = 20

if(a > b) { // 9 > 10
    let d = a
    a = b
    b = d
}

if(b > c) { // 10 > 8 -> b = 8 ; c = 10
    let d = b
    b = c
    c = d
}

if(a > b) { // 9 > 8 -> a = 8; b = 9
    let d = a
    a = b
    b = d
}

console.log(a, b, c) // 8 9 10