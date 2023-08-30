// Write a code to find factorial of a number.

let num = 6
let counter = 1
let desc = `${num}` // menyamakan dengan num dalam bentuk string

for (let i = num; i > 1; i--) {
    desc += ` x ${i - 1}`
    counter *= i
}

console.log(`${num} -> ${desc} = ${counter}`);