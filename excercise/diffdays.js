// Write a code to get difference between dates in days.
// menemukan berapa menuju tahun baru
let date1 = new Date()
let date2 = new Date("2024-01-01")

let selisih = date2.getTime() - date1.getTime()

// conversi milisecond ke hari
let days = Math.floor(selisih / (24 * 60 * 60 * 1000))
console.log(`${days} hari menuju tahun baru`) // 124 hari

// Write a code to convert days to years, months and days.
let tahun = Math.floor(days / 365)
let sisa = days % 365
let bulan = Math.floor(sisa / 30)
let hari = sisa % 30

console.log(`${tahun} tahun, ${bulan} bulan dan ${hari} hari`)

// membulatkan number
let num = 20.45
console.log(Math.round(num)) // membulatkan dengan aturan matematika
console.log(Math.floor(num)) // membulatkan ke bawah
console.log(Math.ceil(num)) // membulatkan ke atas