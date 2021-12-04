"use strict";
var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    /*Aufgabe: L09.1 OldMacDonaldsFarm
    Name: Liz Hengsteler
    Matrikel: 268386
    Datum: 04.12.2021
    Zusammenarbeit: Theo Züffle, Kristoffer Müller und Hannah Sättele
    Quellen: Praktikum mit Markus, Inverted Classroom, W3Schools
    Youtube Video https://www.youtube.com/watch?v=OsFwOzr3_sE
    */
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
    let output = (document.getElementById("output"));
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
        console.log(L09_1_OldMacDonaldsFarm.animals[1].output());
        simulateDay();
        console.log(L09_1_OldMacDonaldsFarm.animals);
        console.log(L09_1_OldMacDonaldsFarm.stock);
    }
    function simulateDay() {
        for (let index = 0; index < L09_1_OldMacDonaldsFarm.animals.length; index++) {
            let displayOutput = (document.createElement("span"));
            displayOutput.innerHTML += L09_1_OldMacDonaldsFarm.animals[index].output();
            output.appendChild(displayOutput);
        }
    }
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Main.js.map