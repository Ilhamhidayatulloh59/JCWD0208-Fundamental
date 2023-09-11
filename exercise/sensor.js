function myFunc (str) {
    let dataSensor = ["anjing", "babi"]
    let res = []
    str.split(" ").map(item => {
        if (dataSensor.includes(item)) {
            res.push(item[0] + "*".repeat(item.length - 2) + item[item.length - 1])
        } else {
            res.push(item)
        }
    })
    return res.join(" ")
}

console.log(myFunc("anjing dan babi"))