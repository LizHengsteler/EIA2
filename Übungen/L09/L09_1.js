"use strict";
var L09_1;
(function (L09_1) {
    class Vector {
        constructor() {
            // nur Plan für Vektor, noch keinen Vektor erzeugt
            this.x = 0;
            this.y = 0;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    let v1 = new Vector(); //erst hier wird der Vektor erzeugt
    v1.set(2, 3);
    v1.scale(2);
    console.log(v1);
})(L09_1 || (L09_1 = {}));
//# sourceMappingURL=L09_1.js.map