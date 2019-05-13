class Game {
    constructor(){
        console.log("new game created!")

        let c = new Car()
        c.update()

        let b = new Bomb()
        b.update()
    }
}

window.addEventListener("load", () => new Game())
