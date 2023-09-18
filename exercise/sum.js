const arr = [
    [1, 2, 3],
    [2, 3, 1],
    [2, 1, 3]
]

function myFunc (input) {
    let res = 0
    input.map(item => item.map(v => res += v ))
    return res
}

console.log(myFunc(arr))