function triangle (number) {
    let counter = 0
    for(let i = 1; i <= number; i++) {
        let res = ""
        for(let j = 1; j <= i; j++) {
            counter++
            res += `${counter < 10 ? "0" : ""}${counter} `
        }
        console.log(res);
    }
}

triangle(6)