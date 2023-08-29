console.log(2 == "2") // true
console.log(2 === "2") // false
console.log(2 != "2") // false
console.log(2 !== "2") // true
console.log(4 > 2)
console.log(4 < 2)

console.log("abc" == "Abc") // false -> sensitive case

let person = {
    name: 'Andi',
    age: 26
}

let person2 = {
    name: 'Andi',
    age: 26
}

let name = "Budi"
let name2 = "Budi"

console.log(person === person)
console.log(person == person2)
console.log(name == name2)