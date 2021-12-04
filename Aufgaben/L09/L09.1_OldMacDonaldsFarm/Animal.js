"use strict";
var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    class Animal {
        constructor(_type, _name, _food, _amountFood, _sound) {
            //console.log("constructor");
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.amountFood = _amountFood;
            this.sound = _sound;
        }
        output() {
            return `<br>The ${this.type} named ${this.name} eats  ${this.amountFood} Kg of ${this.food} and sings "${this.sound}".<br>`;
        }
    }
    L09_1_OldMacDonaldsFarm.Animal = Animal;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map