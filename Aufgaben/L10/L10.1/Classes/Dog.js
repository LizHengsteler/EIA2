"use strict";
var L10_1_OldMacDonaldsFarm;
(function (L10_1_OldMacDonaldsFarm) {
    class Dog extends L10_1_OldMacDonaldsFarm.Animal {
        constructor() {
            super("Peanut", "treats", 5, "wooof", "hunts down chickens");
        }
        doSpecialAction() {
            let nameDiv = document.getElementById("name"); //zugrief auf id
            nameDiv.innerHTML += this.specialTalent;
        }
    }
    L10_1_OldMacDonaldsFarm.Dog = Dog;
})(L10_1_OldMacDonaldsFarm || (L10_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Dog.js.map