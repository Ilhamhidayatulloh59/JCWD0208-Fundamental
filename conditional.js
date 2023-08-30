let age = 15;

if (age >= 17) {
    console.log("You can now create an ID Card")
} else {
    console.log("You are not old enough to create an ID Card")
}

let grade = "B"

if (grade === "A") {
    console.log("Excelent Result")
} else if (grade === "B") {
    console.log("Great Result!")
} else if (grade === "C") {
    console.log("Average Result!")
} else {
    console.log("Invalid Grade!")
}

let now = new Date()
let days = now.getDay()

switch (days) {
    case 0:
        console.log("Hari Minggu");
        break;
    case 1:
        console.log("Hari Senin");
        break;
    case 2:
        console.log("Hari Selasa");
        break;
    case 3:
        console.log("Hari Rabu");
        break;
    case 4:
        console.log("Hari Kamis");
        break;
    case 5:
        console.log("Hari Jum'at");
        break;
    default:
        console.log("Hari Sabtu");
        break;
}

// contoh NaN
let str = "abc"
console.log(Number(str))

let car = "BMW"

if (car === "BMW" || car === "Toyota") {
    console.log("This car is awesome");
}

// Ternary operator
let word = "Typescript"

if (word === "Javascript") {
    console.log("Javascript");
} else if (word === "Python") {
    console.log("Python");
} else {
    console.log("Not Javascript or Python");
}

console.log(word === "Javascript" || word === "Typescript" ? "Javascript" : 
word === "Python" ? "Python" : "Not Javascript or Python")