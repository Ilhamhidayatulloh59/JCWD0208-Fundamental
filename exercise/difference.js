/*
Write a function to find the difference in 2 given array
*/

let arr = [1, 2, 3]
let arr2 = [1, 2, 4]

function difference (a, b) {
    let input = [...a, ...b]
    let res = []

    for (let i = 0; i < input.length; i++) {
        if (input.filter(item => item == input[i]).length == 1) {
            res.push(input[i])
        }
    }
    return res
}

console.log(difference(arr, arr2));