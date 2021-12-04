"use strict";
var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    class Stock {
        constructor(_type, _amount) {
            //console.log("constructor");
            this.type = _type;
            this.amount = _amount;
        }
        substract(_substractionAmount) {
            console.log("substract");
            this.amount = _substractionAmount - this.amount;
            this.showAmount();
        }
        showAmount() {
            return `<br>The ${this.type} named ${this.name} eats  ${this.amountFood} Kg of ${this.food} and sings "${this.sound}".<br>`;
        }
    }
    L09_1_OldMacDonaldsFarm.Stock = Stock;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Stock.js.map