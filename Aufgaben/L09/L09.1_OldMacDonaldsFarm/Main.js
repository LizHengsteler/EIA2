"use strict";
var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    /*Aufgabe: L09.1 OldMacDonaldsFarm
  Name: Liz Hengsteler
  Matrikel: 268386
  Datum: 25.11.2021
  Zusammenarbeit: Theo Züffle, Kristoffer Müller
  Quellen: Praktikum mit Markus, Inverted Classroom, W3Schools*/
    window.addEventListener("load", handleLoad);
    L09_1_OldMacDonaldsFarm.animals = [];
    L09_1_OldMacDonaldsFarm.stock = [];
    let cow;
    let chicken;
    let dog;
    let donkey;
    let pig;
    let wheat;
    let seeds;
    let treat;
    let grass;
    let grains;
    function handleLoad(_event) {
        console.log("handleLoad");
        cow = new L09_1_OldMacDonaldsFarm.Animal("cow", "Paula", "wheat", 10, "muuuh");
        chicken = new L09_1_OldMacDonaldsFarm.Animal("chicken", "Darcy", "seeds", 5, "gack");
        dog = new L09_1_OldMacDonaldsFarm.Animal("dog", "Peanut", "treat", 3, "woof");
        donkey = new L09_1_OldMacDonaldsFarm.Animal("donkey", "Elisabeth", "grass", 50, "iaia");
        pig = new L09_1_OldMacDonaldsFarm.Animal("pig", "Peppa", "grains", 20, "oink");
        L09_1_OldMacDonaldsFarm.animals.push(cow, chicken, dog, donkey, pig);
        wheat = new L09_1_OldMacDonaldsFarm.Stock("wheat", 300);
        seeds = new L09_1_OldMacDonaldsFarm.Stock("seeds", 300);
        treat = new L09_1_OldMacDonaldsFarm.Stock("treat", 300);
        grass = new L09_1_OldMacDonaldsFarm.Stock("grass", 300);
        grains = new L09_1_OldMacDonaldsFarm.Stock("grains", 300);
        L09_1_OldMacDonaldsFarm.stock.push(wheat, seeds, treat, grass, grains);
        simulateDay();
    }
    function simulateDay() {
        cow.eat();
        cow.sing();
        console.log("simulateDay");
        /*for (let index: number = 0; index < animals.length; index++) {

            animals[index].eat(_food, _amountFood);
            animals[index].sing();
            
        }*/
    }
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Main.js.map