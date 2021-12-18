"use strict";
var L10_1_OldMacDonaldsFarm;
(function (L10_1_OldMacDonaldsFarm) {
    class Chicken extends L10_1_OldMacDonaldsFarm.Animal {
        constructor() {
            super("Darcy", "seeds", 10, "kickeriki", "flys high");
        }
        doSpecialAction() {
            let nameDiv = document.getElementById("name"); //zugrief auf id
            nameDiv.innerHTML += this.specialTalent;
        }
        output() {
            return `${this.name} eats  ${this.amountFood} Kg of ${this.food} and sings "${this.sound}".<br>`;
        }
    }
    L10_1_OldMacDonaldsFarm.Chicken = Chicken;
})(L10_1_OldMacDonaldsFarm || (L10_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Chicken.js.map