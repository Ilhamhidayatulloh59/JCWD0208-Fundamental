const Queue = require("./queue.js")

const queue = new Queue(["Queue 1", "Queue 2", "Queue 3", "Queue 4", "Queue 5", "Queue 6"])

queue.run()

let i = 1
setInterval(() => {
    console.log(`${i} seconds`);
    i++
}, 1000)