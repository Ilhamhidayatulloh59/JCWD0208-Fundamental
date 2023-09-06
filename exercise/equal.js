let obj1 = {
    name: "andi",
    age: 20
}

let obj2 = {
    age: 20,
    name: "andi",
}

//JSON -> javascript object notation
// console.log(JSON.stringify(obj1))
// console.log(Object.keys(obj1));
// console.log(Object.keys(obj1).sort());

function compare (a, b) {
    let sortA = {}
    let sortB = {}

    Object.keys(a).sort().map(item => sortA[item] = a[item])
    Object.keys(b).sort().map(item => sortB[item] = b[item])

    return JSON.stringify(sortA) === JSON.stringify(sortB)
}

console.log(compare(obj1, obj2));