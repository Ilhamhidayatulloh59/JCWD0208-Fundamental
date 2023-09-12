function myFunc (str) {
    let n = 0

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i].charCodeAt() - 64)
        n = str[i].charCodeAt() - 64 + n * 26
    }

    return n
}

console.log(myFunc("AAA")) //28

console.log("a".charCodeAt())
console.log("A".charCodeAt())
console.log("B".charCodeAt())
console.log("Z".charCodeAt())
console.log(" ".charCodeAt())