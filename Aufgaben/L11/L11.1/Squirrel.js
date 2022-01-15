"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    //Eichhörnchen von Lukas, in Absprache:)
    class Squirrel extends L11_1_GoldenerHerbst.Moveable {
        constructor() {
            super();
            this.position = new L11_1_GoldenerHerbst.Vector(350, 300);
            this.velocity.randomX(100, 200);
            this.task = L11_1_GoldenerHerbst.TASK.WAIT;
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.01) {
                this.velocity.randomX(-200, 200);
                this.velocity.randomY(-200, 200);
            }
            if (this.position.y <= L11_1_GoldenerHerbst.horizon) {
                this.velocity.randomY(0, 200);
            }
            if (this.position.y > L11_1_GoldenerHerbst.crc2.canvas.height - 10) {
                this.velocity.randomY(-200, 0);
            }
        }
        draw() {
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L11_1_GoldenerHerbst.crc2.scale(0.3, 0.3);
            if (this.velocity.x > 0)
                L11_1_GoldenerHerbst.crc2.scale(-1, 1);
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.translate(-40, -75);
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.translate(-10, -10);
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "white";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "black";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.translate(-10, -10);
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.moveTo(0, 0);
            L11_1_GoldenerHerbst.crc2.lineTo(20, -40);
            L11_1_GoldenerHerbst.crc2.lineTo(40, 0);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.translate(10, 80);
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "rgb(51, 27, 1)";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.translate(40, 70);
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.ellipse(0, 0, 20, 50, Math.PI * 1.5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "rgb(51, 27, 1)";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.translate(50, 0);
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.moveTo(0, 0);
            L11_1_GoldenerHerbst.crc2.bezierCurveTo(50, 0, 100, -120, 150, -150);
            L11_1_GoldenerHerbst.crc2.bezierCurveTo(-20, -220, 50, -80, 0, -20);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.restore();
        }
    }
    L11_1_GoldenerHerbst.Squirrel = Squirrel;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Squirrel.js.map