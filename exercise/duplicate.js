/*
Write a function to find duplicate values in an array
*/

let arr = [1, 2, 3, 4, 5, 1, 2] // [ 1, 2 ]

function duplicate (input) {
    let res = []

    for (let i = 0; i < input.length; i++) {
        if (input.filter(item => item == input[i]).length > 1 && !res.includes(input[i])) {
            res.push(input[i])
        }
    }
    return res
}

console.log(duplicate(arr));