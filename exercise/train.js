class Train {
    #container = ["masinis"]
    #maxsize = 10

    #search(name) {
        return this.#container.indexOf(name)
    }

    #isfull() {
        return this.#container.length >= this.#maxsize
    }

    #remaining() {
        console.log(`remaining seat : ${10 - this.#container.filter(item => item !== null).length}`)
    }

    enter(name) {
        let index = this.#search(null)
        if (this.#isfull()) {
            console.log(`Train over capacity`)
            return
        }

        if (index > 0) {
            this.#container[index] = name
            this.#remaining()
        } else if (this.#search(name) >= 0) {
            console.log(`${name} already exist`)
        } else {
            this.#container.push(name)
            this.#remaining()
        }
    }

    out(name) {
        let index = this.#search(name)
        if (index > 0) {
            this.#container[index] = null
            this.#remaining()
        } else if (index == 0) {
            console.log(`masinis must be inside`)
        } else {
            console.log(`${name} isn't exist`)
        }
    }

    getData() {
        return this.#container
    }
}

let train = new Train()

train.enter("andi")
train.enter("budi")
console.log(train.getData())

train.out("andi")
console.log(train.getData())

train.enter("john")
train.enter("a")
train.enter("b")
train.enter("c")
train.enter("d")
train.enter("e")
train.enter("f")
train.out("masinis")
console.log(train.getData())