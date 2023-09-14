// setTimeout(message, 3000)

function message() {
    console.log("Asynchronous is easy");
}


console.log("Task 1")
setTimeout(() => console.log("Task 2"), 3000)
console.log("Task 3")