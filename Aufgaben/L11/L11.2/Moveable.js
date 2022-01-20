"use strict";
var L11_2_GoldenerHerbst;
(function (L11_2_GoldenerHerbst) {
    //Jirka Code Moveable https://github.com/JirkaDellOro/EIA2-Inverted/blob/master/X00_Code/L10_Inheritance/Asteroids/Moveable.ts
    class Moveable {
        constructor(_position, _velocity) {
            this.eatRadius = 0;
            if (_position) {
                this.position = _position.copy();
            }
            else {
                this.position = new L11_2_GoldenerHerbst.Vector(0, 0);
            }
            if (_velocity) {
                this.velocity = _velocity.copy();
            }
            else
                this.velocity = new L11_2_GoldenerHerbst.Vector(0, 0);
        }
        eat(_partner) {
            let difference = L11_2_GoldenerHerbst.Vector.getDifference(this.position, _partner.position);
            if (this.eatRadius + _partner.eatRadius < difference.length) {
                return false;
            }
            else {
                return true;
            }
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_2_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_2_GoldenerHerbst.crc2.canvas.height;
            if (this.position.x > L11_2_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L11_2_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y > L11_2_GoldenerHerbst.crc2.canvas.height)
                this.position.y -= L11_2_GoldenerHerbst.crc2.canvas.height;
        }
    }
    L11_2_GoldenerHerbst.Moveable = Moveable;
})(L11_2_GoldenerHerbst || (L11_2_GoldenerHerbst = {}));
//# sourceMappingURL=Moveable.js.map