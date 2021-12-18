"use strict";
var L10_1_OldMacDonaldsFarm;
(function (L10_1_OldMacDonaldsFarm) {
    class Pig extends L10_1_OldMacDonaldsFarm.Animal {
        constructor() {
            super("Peppa", "grains", 20, "oink", "farts while eating");
        }
        doSpecialAction() {
            let nameDiv = document.getElementById("name"); //zugrief auf id
            nameDiv.innerHTML += this.specialTalent;
        }
    }
    L10_1_OldMacDonaldsFarm.Pig = Pig;
})(L10_1_OldMacDonaldsFarm || (L10_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Pig.js.map