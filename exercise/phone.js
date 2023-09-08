function phonenumber (input) {
    let temp = "(xxx)-xxx-xxxx"
    input.split("").map(item => {
        temp = temp.replace("x", item)
        console.log(temp)
    })
    return temp
}

console.log(phonenumber('1234567890')) // (123)-456-7890