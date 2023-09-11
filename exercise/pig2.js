function myFunc (str) {
    let res = []
    str.split(" ").map(item => {
        if (item.endsWith("way")) {
            let word = item.slice(0, -3)
            res.push(word[word.length - 1] + word.slice(0, -1))
        } else {
            let word = item.slice(0, -2)
            res.push(word[word.length - 1] + word.slice(0, -1))
        }
    })
    return res.join(" ")
}

console.log(myFunc("igPay atinlay siway oolcay !ay"))