function myFunc (str) {
    return str.split(" ").map(item =>
        item.substring(1) + item[0] + checkVowel(item[0])).join(" ")
}

console.log(myFunc("Pig latin is cool !"))

function checkVowel (str) {
    let vowel = ["a", "i", "u", "e", "o"]
    if (vowel.includes(str)) {
        return "way"
    } else {
        return "ay"
    }
}