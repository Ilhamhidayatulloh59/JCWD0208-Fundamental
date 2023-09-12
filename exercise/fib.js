// [0, 1, 1, 2, 3, 5, 8, 13]

function fib (n) {
    let res = [0, 1]
    for (let i = 2; i <= n + 1; i++) {
        res.push(res[i - 1] + res[i - 2])
    }
    return res[n + 1]
}

console.log(fib(6))