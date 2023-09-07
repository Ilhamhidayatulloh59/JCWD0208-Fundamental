class Player {
    health = 100
    power = 10

    constructor(name) {
        this.name = name
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`)
    }

    hit(player) {
        this.health -= player.power
        console.log(`Player ${this.name} has been damaged by ${player.power} points`)
        console.log(`Player ${this.name} has ${this.health} remaining health`)
        player.power = 10
    }

    useItem(item) {
        if (item.health) {
            this.health += item.health
            console.log(`Player ${this.name} received ${item.health} health points`)
        }
        if (item.power) {
            this.power += item.power
            console.log(`Player ${this.name} received ${item.power} power points`)
        }
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem() {
        let item = {}
        let random = Math.floor(Math.random() * 2) // 0 ~ 9

        if (random == 0) {
            item.health = 10
        } else if (random == 1) {
            item.power = 10
        }

        return item // { health: 10 }, { power: 10 }, {}
    }

    start() {
        console.log('==== Start Game ====')
        while (this.player1.health > 1 && this.player2.health > 1) {
            console.log(`=== Player ${this.player1.name} turn ===`)
            this.player1.useItem(this.getRandomItem())
            this.player1.showStatus()
            this.player2.hit(this.player1)
            if (this.player2.health === 0) {
                break
            }

            console.log(`=== Player ${this.player2.name} turn ===`)
            this.player2.useItem(this.getRandomItem())
            this.player2.showStatus()
            this.player1.hit(this.player2)
            if (this.player1.health === 0) {
                break
            }
        }

        if (this.player1.health <= 0) {
            console.log(`The winner is ${this.player2.name}`)
        } else {
            console.log(`The winner is ${this.player1.name}`)
        }

        console.log('==== End Game ====')
    }
}

const ahmad = new Player("ahmad")
const budi = new Player("budi")

const game1 = new ShootingGame(ahmad, budi)
game1.start()