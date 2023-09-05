// object
const car = {
    brand: "BMW",
    model: "M135i xDrive",
    price: 800000000
}

const car2 = new Object({
    brand: "BMW",
    model: "M135i xDrive",
    price: 800000000
})

// accessing value
console.log(car.brand);
console.log(car.model);

console.log(car['brand'])

// properties & method
let user = {
    name: "David",
    greet() {
        console.log("Hello!")
    }
}

user.greet()

// add property
user.age = 25
console.log(user);

// update property
user.name = "Budi"
console.log(user);

// delete property
delete user.greet
console.log(user);

let person = {
    name: "Andi",
    age: 26,
    address: {
        city: "Bandung",
        country: "Indonesia"
    }
}

// error
// console.log(person.address.city)

// optional chaining
console.log(person.address?.city)

// accessing key
console.log(Object.keys(person))
console.log(Object.keys(person.address))

// for in
for (const key in person) {
    console.log(key);
    console.log(person[key]);
}

// getter & setter
let student = {
    firstname: "John",
    lastName: "Smith",

    get fullName() {
        return `${this.firstname} ${this.lastName}`
    },

    set fullName(value) {
        const splittedValue = value.split(" ") // ["Alice", "Cooper"]
        this.firstname = splittedValue[0]
        this.lastName = splittedValue[1]
    }
}

console.log(student.fullName);

// setter
student.fullName = "Alice Cooper"
console.log(student.fullName);


// destructuring 

let arr = ["apple", "lemon"]

let [a, b] = arr
console.log(a);
console.log(b);

let fruit = {
    name: "apple",
    color: "red"
}

// object destructuring
let { color, name } = fruit

console.log(name)
console.log(fruit.name)

let fruit2 = {
    price: 5000,
    quantity: 10
}

// spread oprator
let fruits = { ...fruit, ...fruit2 }
console.log(fruits);

let fruits2 = Object.assign(fruit, fruit2)
console.log(fruits2);
