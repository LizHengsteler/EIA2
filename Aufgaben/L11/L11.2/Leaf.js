"use strict";
var L11_2_GoldenerHerbst;
(function (L11_2_GoldenerHerbst) {
    class Leaf extends L11_2_GoldenerHerbst.Moveable {
        constructor() {
            super();
            this.position.randomY(0, L11_2_GoldenerHerbst.crc2.canvas.height);
            this.velocity.random(100, 200);
        }
        move(_timeslice) {
            let offset = new L11_2_GoldenerHerbst.Vector(this.velocity.x, this.velocity.y);
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
        draw() {
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.rect(-1, -20, 2, 20);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fillStyle = "hsl(0, 23%, 50%)";
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.moveTo(0, -65);
            L11_2_GoldenerHerbst.crc2.lineTo(10, -45);
            L11_2_GoldenerHerbst.crc2.lineTo(35, -40);
            L11_2_GoldenerHerbst.crc2.lineTo(10, -30);
            L11_2_GoldenerHerbst.crc2.lineTo(25, -10);
            L11_2_GoldenerHerbst.crc2.lineTo(0, -20);
            L11_2_GoldenerHerbst.crc2.lineTo(-25, -10);
            L11_2_GoldenerHerbst.crc2.lineTo(-10, -30);
            L11_2_GoldenerHerbst.crc2.lineTo(-35, -40);
            L11_2_GoldenerHerbst.crc2.lineTo(-10, -45);
            L11_2_GoldenerHerbst.crc2.lineTo(0, -65);
            L11_2_GoldenerHerbst.crc2.closePath();
            let gradient = L11_2_GoldenerHerbst.crc2.createLinearGradient(0, -65, -35, 0);
            gradient.addColorStop(0, "hsl(182, 54%, 50%)");
            gradient.addColorStop(0.4, "hsl(157, 34%, 64%)");
            gradient.addColorStop(1, "hsl(59, 57%, 52%)");
            L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
        }
    }
    L11_2_GoldenerHerbst.Leaf = Leaf;
})(L11_2_GoldenerHerbst || (L11_2_GoldenerHerbst = {}));
//# sourceMappingURL=Leaf.js.map