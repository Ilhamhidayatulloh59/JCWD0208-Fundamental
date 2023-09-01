function bmi (weight, hight) {
    let scoreBmi = weight / hight ** 2

    console.log(scoreBmi);

    if (scoreBmi < 18.5) {
        console.log("less weight");
    } else if (scoreBmi >= 18.5 && scoreBmi <= 24.9) {
        console.log("ideal");
    } else if (scoreBmi >= 25 && scoreBmi <= 29.9) {
        console.log("overweight");
    } else if (scoreBmi >= 30 && scoreBmi <= 39.9) {
        console.log("very overweight");
    } else {
        console.log("obesity");
    }
}

bmi(70, 2)