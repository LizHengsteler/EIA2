"use strict";
var L10_1_OldMacDonaldsFarm;
(function (L10_1_OldMacDonaldsFarm) {
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
    L10_1_OldMacDonaldsFarm.Stock = Stock;
})(L10_1_OldMacDonaldsFarm || (L10_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Stock.js.map