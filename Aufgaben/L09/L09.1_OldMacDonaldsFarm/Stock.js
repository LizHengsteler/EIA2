"use strict";
var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    class Stock {
        constructor(_type, _amount) {
            //console.log("constructor");
            this.type = _type;
            this.amount = _amount;
        }
        showAmount() {
            //this.amount = this.amount - _substractionAmount.amount;
            return `<br>There is ${this.amount} left of ${this.type}.<br>`;
        }
    }
    L09_1_OldMacDonaldsFarm.Stock = Stock;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Stock.js.map