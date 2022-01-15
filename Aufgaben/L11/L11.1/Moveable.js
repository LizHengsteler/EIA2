"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    //Jirka Code Moveable https://github.com/JirkaDellOro/EIA2-Inverted/blob/master/X00_Code/L10_Inheritance/Asteroids/Moveable.ts
    class Moveable {
        constructor(_position, _velocity) {
            if (_position) {
                this.position = _position.copy();
            }
            else {
                this.position = new L11_1_GoldenerHerbst.Vector(0, 0);
            }
            if (_velocity) {
                this.velocity = _velocity.copy();
            }
            else
                this.velocity = new L11_1_GoldenerHerbst.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_1_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_1_GoldenerHerbst.crc2.canvas.height;
            if (this.position.x > L11_1_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L11_1_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y > L11_1_GoldenerHerbst.crc2.canvas.height)
                this.position.y -= L11_1_GoldenerHerbst.crc2.canvas.height;
        }
        draw() {
            //
        }
    }
    L11_1_GoldenerHerbst.Moveable = Moveable;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Moveable.js.map