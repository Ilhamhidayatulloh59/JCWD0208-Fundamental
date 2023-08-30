// Write a code to print the first N fibonacci numbers.
// 10 -> 0 1 1 2 3 5 8 13 21 34

let n = 10
let curr = 0 // 1
let next = 1 // 1
let desc = ""

for (let i = 1; i <= n; i++) {
    desc += `${curr} `
    let count = curr + next
    curr = next
    next = count
}

console.log(`${n} -> ${desc}`);