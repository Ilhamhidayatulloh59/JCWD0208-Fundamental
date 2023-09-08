console.log(Boolean(""))
console.log(Boolean("0"))
console.log(Boolean([]))
console.log(Boolean(+"0")) // 0 -> conversi string ke number
console.log(Boolean(Number("0"))) // 0
console.log(Boolean({}))
console.log(Boolean([].length))

console.log(3 + "3" * 3)
console.log(3 - "3" * 3)
console.log(3 - "3")

const data = {
    name: "budi",
    age: 25
}

console.log(data.name)
console.log(data["name"])
console.log(typeof data)
console.log(typeof console)
console['log']("test")

// console.log(Object["keys"](console))

for (let key in data) {
    // console.log(data.key)
    // console.log(data["key"])
    // console.log(data[key])
}

const str = "age"
console.log(data.str)
console.log(data[str])

const arr = [1, 2, 3]

arr[10] = 4

console.log(arr)
console.log(arr[9])