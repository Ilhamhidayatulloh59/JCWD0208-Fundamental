/*
Write a function that adds an element to the end of an array. However, 
the element should only be added if it is not already in the array.
*/

function myFunc (n, array) {
    if (array.includes(n)) { // !
        console.log("value udah ada");
    } else {
        array.push(n)
    }

    return array
}

console.log(myFunc(3, [1, 2, 3]));

/*
true = true
!true = false
false = false
!false = true
*/
