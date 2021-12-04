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
            console.log("showAmount");
            let displayAmount = (document.getElementById("amount"));
            for (let index = 0; index < L09_1_OldMacDonaldsFarm.stock.length; index++) {
                displayAmount.innerHTML = this.amount[L09_1_OldMacDonaldsFarm.stock[index]];
            }
        }
    }
    L09_1_OldMacDonaldsFarm.Stock = Stock;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Stock.js.map