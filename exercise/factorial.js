function factorial (n) {
    return n == 0 ? 1 : n * factorial(n - 1)
}

const fact2 = (n) => n == 0 ? 1 : n * fact2(n - 1)

console.log(factorial(5))
console.log(fact2(5))