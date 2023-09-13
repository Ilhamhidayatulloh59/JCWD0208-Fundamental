function myFunc (arr) {
    let minValue = Math.min(...arr)
    let indexMin = arr.indexOf(minValue)
    let tempArr = arr.splice(indexMin, arr.length - indexMin)
    let maxValueTemp = Math.max(...tempArr)
    console.log({
        minValue, indexMin, tempArr, maxValueTemp
    })

    return maxValueTemp - minValue
}

console.log(myFunc([7,1,5,3,6,4]))