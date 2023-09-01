// hoisting -> var, function

console.log(str);

var str = "abc"


console.log(square(5))

function square(number) {
    return number * number
}

const square2 = (number) => number * number
console.log(square2(5))