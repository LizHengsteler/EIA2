"use strict";
var L10_1_OldMacDonaldsFarm;
(function (L10_1_OldMacDonaldsFarm) {
    class Cow extends L10_1_OldMacDonaldsFarm.Animal {
        constructor() {
            super("Paula", "wheat", 10, "muuuuh", "shows her tongue because its purple");
        }
        doSpecialAction() {
            let nameDiv = document.getElementById("name"); //zugriff auf id
            nameDiv.innerHTML += this.specialTalent;
        }
    }
    L10_1_OldMacDonaldsFarm.Cow = Cow;
})(L10_1_OldMacDonaldsFarm || (L10_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Cow.js.map