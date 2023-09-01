function square(number) {  // dunction declaration
    return number * number
}

const x = square(4) // 16
console.log(x);
console.log(square(5))

function addition(a = 1, b = 1) { // default parameters
    return a + b
}

console.log(addition(10, 5))
console.log(addition(10))
console.log(addition())

// funxtion expression
const square2 = function(number) {
    return number * number
}

console.log(square2(6));

let hello = "Hello"

function greeting() {
    let hello = "Hi"
    return hello
}

console.log(greeting());
console.log(hello);

function multiply(a = 1, b = 1, ...other) { // rest parameters
    console.log(other);
    return a * b
}

console.log(multiply(10, 2, 3, 4, 5, 6, 7));

// nested function
function getMessage(firstname) { 
    function sayHello() {
        return "Hello " + firstname + "."
    }

    function welcomeMessage() {
        return "Welcome to purwadhika !"
    }

    return sayHello() + " " + welcomeMessage()
}

console.log(getMessage("Budi"));

// closure function
function greetingName(name) {
    const defaultMessage = "Hello "
    return function() {
        return defaultMessage + name
    }
}

const greetingDavid = greetingName("David")
console.log(greetingDavid());

// currying function
function multiplier(factor) {
    return function (number) {
        return factor * number
    }
}

const mul3 = multiplier(3)
const mul4 = multiplier(4)
console.log(mul3(5));
console.log(mul3(10));
console.log(mul4(10));

// recursive function
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1
    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

countDown(5)


// arrow function
const square3 = (number) => number * number

console.log(square3(3));