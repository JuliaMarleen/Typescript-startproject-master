class Car {
    div:HTMLElement

    constructor() {
        console.log("car created")
        this.div = document.createElement("car-div")
        document.body.appendChild(this.div)
    }
    update() {
        console.log("vrooom!Vroom!")
    }
}
