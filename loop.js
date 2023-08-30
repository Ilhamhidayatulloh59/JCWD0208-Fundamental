// while loop

let i = 3 // 3

while (i < 3) {
    console.log(`Hello ke ${i} while`);
    i++
}

// do while -> aksi terlebih dahulu, baru ngecek kondisi
do {
    console.log(`Hello ke ${i} do while`);
    i++
} while (i < 3);

// break
let sum = 0

while (true) {
    if (sum === 5) break
    console.log(sum)
    sum++
}

