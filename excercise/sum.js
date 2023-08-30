/* Write a code to find the sum of the numbers 1 to N.
Example : 5 → 1 + 2 + 3 + 4 + 5 = 15 */

let num = 5
let counter = 1
let desc = "1"

for (let i = 2; i <= num; i++) {
    desc += ` + ${i}` // concat
    // console.log(desc);
    counter += i
}

console.log(`${num} -> ${desc} = ${counter}`);

// 5! -> 5 x 4 x 3 x 2 x 1 = 120