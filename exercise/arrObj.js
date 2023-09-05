class Student {
    constructor(name, email, birthdate, score) {
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.score = score
    }
}

const student1 = new Student("andi", "andi@gmail.com", "1995-01-01", 80)
const student2 = new Student("budi", "budi@gmail.com", "1996-01-01", 70)
const student3 = new Student("cahyo", "cahyo@gmail.com", "1997-01-01", 90)

const arrStudent = [student1, student2, student3]
const scoreStudent = arrStudent.map(item => item.score)
const ageStudent = arrStudent.map(item => convertAge(item.birthdate))

console.log(scoreStudent);
console.log(ageStudent);

console.log(arrStudent);

function convertAge(date) {
    let birthdate = new Date(date).getTime()
    let now = new Date().getTime()
    let diff = now - birthdate

    return Math.floor(diff / (24 * 60 * 60 * 1000) / 365) 
}

function calculate(arr) {
    let maxScore = Math.max(...arr.map(item => item.score))
    let minScore = Math.min(...arr.map(item => item.score))
    let avgScore = arr.map(item => item.score).
    reduce((a, b) => a + b) / arr.length

    let maxAge = Math.max(...arr.map(item => convertAge(item.birthdate)))
    let minAge = Math.min(...arr.map(item => convertAge(item.birthdate)))
    let avgAge = arr.map(item => convertAge(item.birthdate)).
    reduce((a, b) => a + b) / arr.length
    
    return {
        score: {
            max: maxScore,
            min: minScore,
            avg: avgScore
        },
        age: {
            max: maxAge,
            min: minAge,
            avg: avgAge
        }
    }
}

console.log(calculate(arrStudent));
