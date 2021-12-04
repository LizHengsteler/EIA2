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
    let output;
    function handleLoad(_event) {
        console.log("handleLoad");
        L09_1_OldMacDonaldsFarm.cow = new L09_1_OldMacDonaldsFarm.Animal("cow", "Paula", "wheat", 10, "muuuh");
        L09_1_OldMacDonaldsFarm.chicken = new L09_1_OldMacDonaldsFarm.Animal("chicken", "Darcy", "seeds", 5, "gack");
        L09_1_OldMacDonaldsFarm.dog = new L09_1_OldMacDonaldsFarm.Animal("dog", "Peanut", "treats", 1, "woof");
        L09_1_OldMacDonaldsFarm.donkey = new L09_1_OldMacDonaldsFarm.Animal("donkey", "Elisabeth", "grass", 50, "iaia");
        L09_1_OldMacDonaldsFarm.pig = new L09_1_OldMacDonaldsFarm.Animal("pig", "Peppa", "grains", 20, "oink");
        L09_1_OldMacDonaldsFarm.animals.push(L09_1_OldMacDonaldsFarm.cow, L09_1_OldMacDonaldsFarm.chicken, L09_1_OldMacDonaldsFarm.dog, L09_1_OldMacDonaldsFarm.donkey, L09_1_OldMacDonaldsFarm.pig);
        L09_1_OldMacDonaldsFarm.wheat = new L09_1_OldMacDonaldsFarm.Stock("wheat", 400);
        L09_1_OldMacDonaldsFarm.seeds = new L09_1_OldMacDonaldsFarm.Stock("seeds", 350);
        L09_1_OldMacDonaldsFarm.treat = new L09_1_OldMacDonaldsFarm.Stock("treat", 40);
        L09_1_OldMacDonaldsFarm.grass = new L09_1_OldMacDonaldsFarm.Stock("grass", 600);
        L09_1_OldMacDonaldsFarm.grains = new L09_1_OldMacDonaldsFarm.Stock("grains", 1000);
        L09_1_OldMacDonaldsFarm.stock.push(L09_1_OldMacDonaldsFarm.wheat, L09_1_OldMacDonaldsFarm.seeds, L09_1_OldMacDonaldsFarm.treat, L09_1_OldMacDonaldsFarm.grass, L09_1_OldMacDonaldsFarm.grains);
        output = document.getElementById("output");
        console.log(L09_1_OldMacDonaldsFarm.animals[1].output());
        simulateDay();
    }
    function simulateDay() {
        for (let index = 0; index < L09_1_OldMacDonaldsFarm.animals.length; index++) {
            let displayOutput = (document.createElement("span"));
            displayOutput.innerHTML += L09_1_OldMacDonaldsFarm.animals[index].output();
            displayOutput.innerHTML += L09_1_OldMacDonaldsFarm.stock[index].showAmount();
            output.appendChild(displayOutput);
        }
    }
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Main.js.map