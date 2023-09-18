function myFunc (date) {
    const day = new Date(date).getDay()

    return day == 0 || day == 6 ? "weekend" : "weekday"
}

console.log(myFunc("2023-09-15"));