function calculator (a, b, callback) {
    callback(a + b)
}

function displayer(something) {
    console.log(something)
}

calculator(5, 10, displayer)