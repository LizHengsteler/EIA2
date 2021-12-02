"use strict";
var L09_1_OldMacDonaldsFarm;
(function (L09_1_OldMacDonaldsFarm) {
    class Animal {
        constructor(_type, _name, _food, _amountFood, _sound) {
            console.log("constructor");
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.amountFood = _amountFood;
            this.sound = _sound;
        }
        eat(_food, _amountFood) {
            console.log("eat");
            // For- SChleife darin If-Bedinung checken, ob gleiche Bezeichnung
            for (let index = 0; index < animals.length; index++) {
                if (animals[index[2]] == stock[0])
                    console.log(stock[1] - [index[3]]);
            }
        }
        draw() {
            console.log("draw");
        }
        sing(_sound) {
            console.log("sing");
            for (let index = 0; index < animals.length; index++) {
                console.log(animals.index[4]);
            }
        }
    }
    L09_1_OldMacDonaldsFarm.Animal = Animal;
})(L09_1_OldMacDonaldsFarm || (L09_1_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map