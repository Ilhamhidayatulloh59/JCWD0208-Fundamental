// [1, 2, 3, 4, 5] => 15

function additional(arr) {
    return arr.reduce((a, b) => a + b)
}

const add = (arr) => arr.reduce((a, b) => a + b)

console.log(additional([1, 2, 3, 4, 5]));
console.log(add([1, 2, 3, 4, 5]));