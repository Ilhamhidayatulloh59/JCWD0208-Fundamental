function myFunc (arr) {
    return arr.filter(v => arr.filter(item => item == v).length > arr.length / 2)[0]|| 0
}

console.log(myFunc([1, 1, 1, 2, 2, 2, 2]))
console.log(myFunc([3, 2, 3]))