function myFunc (arr) {
    return arr.filter(v => arr.filter(item => item == v).length == 1)
}

console.log(myFunc([4, 1, 2, 1, 2, 5]))

let arr = [4,1,2,1,2]

function nonDuplicate(input) {
    let temp = []

    for (let i = 0; i < input.length; i++) {
        if (input.filter(item => item == input[i]).length == 1) {
            temp.push(input[i])
        }
    }
    return temp
}

console.log(nonDuplicate(arr));
