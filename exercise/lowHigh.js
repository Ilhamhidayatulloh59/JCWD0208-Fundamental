/*
 Write a function to get the lowest, 
 highest and average value in the array (with and without sort function).
 */

 const arr = [10, 20, 30]

 // with sorting
 function myFunc (number) {
    let sortArray = number.sort((a, b) => a - b)
    let low = sortArray[0]
    let high = sortArray[sortArray.length - 1]
    let avr = sortArray.reduce((a, b) => a + b) / sortArray.length

    return `lowest = ${low}, highest = ${high} and average = ${avr}`
 }

 function myFunc2 (number) {
   let low = Math.min(...number)
   let high = Math.max(...number)
   let avr = number.reduce((a, b) => a + b) / number.length

   return `lowest = ${low}, highest = ${high} and average = ${avr}`
 }

 console.log(myFunc(arr));
 console.log(myFunc2(arr));