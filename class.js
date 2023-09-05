class Stundent { // template object
    name = ""
    // private property
    #age = ""
    program = ""

    constructor(name, age, program) {
        this.name = name
        this.#age = age
        this.program = program
    }

    greeting() {
        console.log(`Hello ${this.name}`)
    }

    getAge() {
        console.log(this.#age)
    }
}

const student1 = new Stundent("Andi", 25, "Digital Marketing")
const student2 = new Stundent("Budi", 26, "Data Science")
const student3 = new Stundent("Cinta", 26, "UI/UX")

console.log(student1.name);
console.log(student1.age);
student1.greeting()
student1.getAge()
student2.greeting()


const students = [student1, student2, student3]
console.log(students);


// encapsulation
class Employee {
    constructor() {
        this.employeeName
    }

    getEmployeeName() {
        return this.employeeName
    }

    setEmployeeName(value) {
        this.employeeName = value
    }
}

const employee1 = new Employee()
employee1.setEmployeeName("John")
console.log(employee1.getEmployeeName());
console.log(employee1.employeeName);

let now = new Date();


// inheritance
class Gender {
    constructor(gender) {
        this.gender = gender
    }
}

class Man extends Gender {
    constructor(name, age) {
        super("male")
        this.name = name
        this.age = age
    }
}

class Woman extends Gender {
    constructor(name, age) {
        super("female")
        this.name = name
        this.age = age
    }
}

let user1 = new Man("Andi", 25)
let user2 = new Woman("Bilqis", 25)
console.log(user1);
console.log(user2);

console.log(user1 instanceof Gender)
console.log(user1 instanceof Man)
console.log(user1 instanceof Woman)
