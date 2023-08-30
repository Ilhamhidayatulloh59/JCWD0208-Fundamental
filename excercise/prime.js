// Write a code to check whether the number is prime number or not

let number = 19
let divider = 0 // pembagi

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divider++ // increment -> divider = divider + 1
    }
}

console.log(`${number} ${divider === 2 ? 'is' : 'is not'} prime number`);