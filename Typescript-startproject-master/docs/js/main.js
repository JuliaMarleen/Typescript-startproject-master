"use strict";
var Bomb = (function () {
    function Bomb() {
        console.log("bomb created");
    }
    Bomb.prototype.update = function () {
        console.log("BOOM!");
    };
    return Bomb;
}());
var Car = (function () {
    function Car() {
        console.log("car created");
        this.div = document.createElement("car-div");
        document.body.appendChild(this.div);
    }
    Car.prototype.update = function () {
        console.log("vrooom!Vroom!");
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        var c = new Car();
        c.update();
        var b = new Bomb();
        b.update();
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map