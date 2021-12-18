"use strict";
var L10_1_OldMacDonaldsFarm;
(function (L10_1_OldMacDonaldsFarm) {
    class Donkey extends L10_1_OldMacDonaldsFarm.Animal {
        constructor() {
            super("Darcy", "seeds", 10, "kickeriki", "fliegen");
        }
        doSpecialAction() {
            let nameDiv = document.getElementById("name"); //zugrief auf id
            nameDiv.innerHTML += this.specialTalent;
        }
    }
    L10_1_OldMacDonaldsFarm.Donkey = Donkey;
})(L10_1_OldMacDonaldsFarm || (L10_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Donkey.js.map