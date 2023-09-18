function myFunc (str) {
    let res = ''
    let max = 1

    str.split("").map(v => {
        let i = str.split(v).length - 1
        if (i > max) {
            max = i
            res = v
        }
    })
    return res
}

console.log(myFunc("aman"))