const obj1 = { a: 1, b: 2 }
const obj2 = { a: 1, c: 3, b: 2 }

function intersection (input1, input2) {
    let res = {}

    // for (const key in input1) {
    //     if(input1[key] === input2[key]) {
    //         res[key] = input1[key]
    //     }
    // }

    Object.keys(input1).map(key => {
        if(input1[key] === input2[key]) {
            res[key] = input1[key]
        }
    })

    return res
}

console.log(intersection(obj1, obj2))