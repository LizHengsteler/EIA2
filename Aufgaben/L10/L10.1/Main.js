"use strict";
var L10_1_OldMacDonaldsFarm;
(function (L10_1_OldMacDonaldsFarm) {
    /*Aufgabe: L09.1 OldMacDonaldsFarm
    Name: Liz Hengsteler
    Matrikel: 268386
    Datum: 04.12.2021
    Zusammenarbeit: Hannah Sättele (Konzeptdurchsprache)
    Quellen: Praktikum mit Markus, Inverted Classroom,
    
    */
    window.addEventListener("load", handleLoad);
    L10_1_OldMacDonaldsFarm.animals = [];
    L10_1_OldMacDonaldsFarm.stock = [];
    let output;
    function handleLoad(_event) {
        console.log("handleLoad");
        L10_1_OldMacDonaldsFarm.cow = new L10_1_OldMacDonaldsFarm.Cow();
        L10_1_OldMacDonaldsFarm.chicken = new L10_1_OldMacDonaldsFarm.Chicken();
        L10_1_OldMacDonaldsFarm.dog = new L10_1_OldMacDonaldsFarm.Dog();
        L10_1_OldMacDonaldsFarm.donkey = new L10_1_OldMacDonaldsFarm.Donkey();
        L10_1_OldMacDonaldsFarm.pig = new L10_1_OldMacDonaldsFarm.Pig();
        L10_1_OldMacDonaldsFarm.animals.push(L10_1_OldMacDonaldsFarm.cow, L10_1_OldMacDonaldsFarm.chicken, L10_1_OldMacDonaldsFarm.dog, L10_1_OldMacDonaldsFarm.donkey, L10_1_OldMacDonaldsFarm.pig);
        L10_1_OldMacDonaldsFarm.wheat = new L10_1_OldMacDonaldsFarm.Stock("wheat", 400);
        L10_1_OldMacDonaldsFarm.seeds = new L10_1_OldMacDonaldsFarm.Stock("seeds", 350);
        L10_1_OldMacDonaldsFarm.treat = new L10_1_OldMacDonaldsFarm.Stock("treat", 40);
        L10_1_OldMacDonaldsFarm.grass = new L10_1_OldMacDonaldsFarm.Stock("grass", 600);
        L10_1_OldMacDonaldsFarm.grains = new L10_1_OldMacDonaldsFarm.Stock("grains", 1000);
        L10_1_OldMacDonaldsFarm.stock.push(L10_1_OldMacDonaldsFarm.wheat, L10_1_OldMacDonaldsFarm.seeds, L10_1_OldMacDonaldsFarm.treat, L10_1_OldMacDonaldsFarm.grass, L10_1_OldMacDonaldsFarm.grains);
        output = document.getElementById("output");
        console.log(L10_1_OldMacDonaldsFarm.animals[1].output());
        simulateDay();
    }
    function simulateDay() {
        for (let index = 0; index < L10_1_OldMacDonaldsFarm.animals.length; index++) {
            let displayOutput = (document.createElement("span"));
            displayOutput.innerHTML += L10_1_OldMacDonaldsFarm.animals[index].output(); // wie greif ich auf zb muuuh zu
            displayOutput.innerHTML += L10_1_OldMacDonaldsFarm.stock[index].showAmount();
            output.appendChild(displayOutput);
        }
    }
})(L10_1_OldMacDonaldsFarm || (L10_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Main.js.map