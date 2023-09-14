const tryPromise = new Promise((resolve, reject) => {
    let isError = false
    if (isError) reject("Error")
    else resolve("Success")
})

const asynAwait = async () => {
    console.log("satu")
    await tryPromise
        .then(() => console.log("Ini kalau sukses"))
        .catch(() => console.log("Ini Kalau error"))
    console.log("dua")
}

// asynAwait()

const tryAndCatch = async () => {
    try {
        let age = 15
        if (age < 17) {
            throw new Error("Belum cukup umur")
        }
        
        let result = await tryPromise // asynchronous
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}

tryAndCatch()