class Queue {
    constructor(data) {
        this.data = data
    }

    #randomSec() {
        return Math.ceil(Math.random() * 10) * 1000
    }

    #executeAsync(data, sec) {
        return new Promise((resolve, reject) => {

            if (sec / 1000 <= 7) {
                setTimeout(() => {
                        resolve(`${data} Done in ${sec / 1000} seconds`)
                }, sec)
            } else {
                setTimeout(() => {
                        reject(`Request failed in 8 seconds`)
                }, 8000)

            }

        })
    }

    async run() {
        let i = 0
        while (i < this.data.length) {
            // try {
            //     const result = await this.#executeAsync(this.data[i], this.#randomSec())
            //     console.log(result)
            // } catch (err) {
            //     console.log(err)
            // }

            await this.#executeAsync(this.data[i], this.#randomSec())
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            i++
        }
    }
}

module.exports = Queue