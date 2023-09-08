class Stack {
    #maxSize
    #container = []

    constructor(maxsize = 10) { // default value
        this.#maxSize = maxsize
    }

    #isFull() {
        return this.#container.length >= this.#maxSize
    }

    #isEmpty() {
        return this.#container.length === 0
    }

    push(element) {
        if (this.#isFull()) {
            console.log("Stack Overflow!")
            return
        }
        this.#container.push(element)
    }

    pop() {
        if (this.#isEmpty()) {
            console.log("Stack Underlow!");
            return
        }
        this.#container.pop()
    }

    getElements() {
        return this.#container
    }
}

const stack = new Stack(2)

stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.getElements())

stack.pop()
console.log(stack.getElements())