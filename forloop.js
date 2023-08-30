// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 5; i > 0; i--) {
//     if (i === 3) continue
//     console.log(i);
// }

/*
5 x 1 = 5
5 x 2 = 10
....
....
5 x 10 = 50
*/

// let num = 5

// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`)
// }

/*
1 adalah bilangan ganjil
2 adalah bilangan genap
....
....
10 adalah bilangan genap
*/

for (let i = 1; i <= 10; i++) {
    console.log(`${i} adalah bilangan ${i % 2 == 0 ? "genap" : "ganjil"}`);
}