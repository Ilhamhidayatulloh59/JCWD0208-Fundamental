let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10, 20]

function myFunc (input) {
    let res = []

    for (let i = 0; i < input.length; i++) {
        if (input.filter(item => item == input[i]).length > 1) {
            res.push(input[i])
        }
    }
    return res.reduce((a, b) => a + b)
}

console.log(myFunc(arr));








// return array.filter((v, i, a) => 
// a.filter(item => item === v).length > 1)
// .reduce((a, b) => a + b)