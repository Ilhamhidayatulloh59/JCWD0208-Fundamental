let obj = [{
    name: "David",
    age: 25,
    email: "david@gmail.com",
    address: "Bandung"
}]

function myFunc (input) {
    let res = {}
    Object.keys(input[0]).map(key => {
        res[input[0][key]] = key
    })
    return res
}

console.log(myFunc(obj))