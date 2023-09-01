function fizzBuzz (number) {
    let arr = []
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            arr.push("Fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }
    return arr
}

console.log(fizzBuzz(16))