let arr = ["a", "b", "c", "d", "e"] // cara 1 menyimpan data ke array

let arr2 = new Array("a", "b", "c", "d", "e") // cara 2 menyimpan data ke array

console.log(arr)
console.log(arr2)

console.log(arr[2]) // "c" -> calling value in array
console.log(arr2[3]) // "d"

let data = [1, 2, 3] // 4

data.push(4) // menambahkan value ke dalam array dari belakang
console.log(data)

data.unshift(0) // menambahkan value ke dalam array dari depan
console.log(data)

data.pop() // menghapus value array dari belakang
console.log(data)

data.shift() // menghapus value array dari depan
console.log(data)

console.log(data.length)

let str = "selamat datang di purwadhika bandung"
let strSplit = str.split(" ") // string -> array
console.log(strSplit)

let strJoin = strSplit.join(" - ") // array => string
console.log(strJoin);

let student = ["budi", "andi", "doni"] // sorting array
console.log(student.sort())
console.log(student.sort().reverse())

let nilai = [80, 100, 90] // 80, 90, 100
console.log(nilai.sort((a, b) => a - b)) // ascending
console.log(nilai.sort((a, b) => b - a)) // descending

let city = ["jakarta", "bsd", "batam", "bandung", "jogja"]

// looping array forEach
city.forEach(item => {
    console.log(item)
});

// looping array map
city.map((item, index, arr) => {
    console.log(`${item} ada di index ${index} dalam array ${arr}`);
})

let age = [20, 30, 40, 50, 60, 70] // filter age > 30
console.log(age.filter(item => item > 30));

// looping for of (array)
let fruits = ["apple", "orange", "plum"]
for (let item of fruits) {
    console.log(item);
}

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}