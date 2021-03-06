"use strict";
var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    class Leaf extends L10_2_GoldenerHerbst.Moveable {
        constructor(_position, _velocity) {
            super();
            if (_position)
                this.position = _position;
            else
                this.position = new L10_2_GoldenerHerbst.Vector(0, 0);
            this.velocity = new L10_2_GoldenerHerbst.Vector(0, 0);
            this.velocity.random(100, 200);
            this.position = _position;
            this.velocity = _velocity;
        }
        draw() {
            console.log("leaves");
            L10_2_GoldenerHerbst.crc2.save();
            L10_2_GoldenerHerbst.crc2.translate(100, 500);
            //crc2.scale(2, 2);
            L10_2_GoldenerHerbst.crc2.beginPath();
            L10_2_GoldenerHerbst.crc2.rect(-1, -20, 2, 20);
            L10_2_GoldenerHerbst.crc2.closePath();
            L10_2_GoldenerHerbst.crc2.fillStyle = "hsl(0, 23%, 50%)";
            L10_2_GoldenerHerbst.crc2.fill();
            L10_2_GoldenerHerbst.crc2.beginPath();
            L10_2_GoldenerHerbst.crc2.moveTo(0, -65);
            L10_2_GoldenerHerbst.crc2.lineTo(10, -45);
            L10_2_GoldenerHerbst.crc2.lineTo(35, -40);
            L10_2_GoldenerHerbst.crc2.lineTo(10, -30);
            L10_2_GoldenerHerbst.crc2.lineTo(25, -10);
            L10_2_GoldenerHerbst.crc2.lineTo(0, -20);
            L10_2_GoldenerHerbst.crc2.lineTo(-25, -10);
            L10_2_GoldenerHerbst.crc2.lineTo(-10, -30);
            L10_2_GoldenerHerbst.crc2.lineTo(-35, -40);
            L10_2_GoldenerHerbst.crc2.lineTo(-10, -45);
            L10_2_GoldenerHerbst.crc2.lineTo(0, -65);
            L10_2_GoldenerHerbst.crc2.closePath();
            let gradient = L10_2_GoldenerHerbst.crc2.createLinearGradient(0, -65, -35, 0);
            gradient.addColorStop(0, "hsl(182, 54%, 50%)");
            gradient.addColorStop(0.4, "hsl(157, 34%, 64%)");
            gradient.addColorStop(1, "hsl(59, 57%, 52%)");
            L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L10_2_GoldenerHerbst.crc2.fill();
            L10_2_GoldenerHerbst.crc2.restore();
        }
    }
    L10_2_GoldenerHerbst.Leaf = Leaf;
})(L10_2_GoldenerHerbst || (L10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Leaf.js.map