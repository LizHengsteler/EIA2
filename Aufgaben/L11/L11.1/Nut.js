"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    class Nut {
        constructor() {
            this.decided = false;
            this.eaten = false;
        }
        draw() {
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "hsl(199, 39%, 77%)";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.translate(0, -3);
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.arc(0, 0, 18, 0, Math.PI, true);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "hsl(199, 35%, 63%)";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.restore();
        }
    }
    L11_1_GoldenerHerbst.Nut = Nut;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Nut.js.map