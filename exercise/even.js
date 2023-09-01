let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arrow function
const even = (array) => array.filter(item => item % 2 === 0)

console.log(even(arr));
console.log(even2(arr));

function even2 (array) {
    return array.filter(item => item % 2 === 0)
}
