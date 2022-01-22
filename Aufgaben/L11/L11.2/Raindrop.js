"use strict";
var L11_2_GoldenerHerbst;
(function (L11_2_GoldenerHerbst) {
    class Raindrop extends L11_2_GoldenerHerbst.Moveable {
        constructor(_position) {
            super();
            this.position = new L11_2_GoldenerHerbst.Vector(_position.x, _position.y);
            this.stop = L11_2_GoldenerHerbst.horizon;
        }
        move(_timeslice) {
            if (this.rainFall == false) {
                if (this.position.y < this.stop) {
                    this.velocity = new L11_2_GoldenerHerbst.Vector(0, 100);
                    let offset = this.velocity.copy();
                    offset.scale(_timeslice);
                    this.position.add(offset);
                }
                if (this.position.y > this.stop) {
                    this.rainFall = true;
                }
            }
        }
        draw() {
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.rect(-2, -10, 3, 10);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fillStyle = "hsl(59, 97%, 72%)";
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
        }
    }
    L11_2_GoldenerHerbst.Raindrop = Raindrop;
})(L11_2_GoldenerHerbst || (L11_2_GoldenerHerbst = {}));
//# sourceMappingURL=Raindrop.js.map