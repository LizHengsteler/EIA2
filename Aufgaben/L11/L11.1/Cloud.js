"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    class Cloud extends L11_1_GoldenerHerbst.Moveable {
        constructor() {
            super();
            this.position = new L11_1_GoldenerHerbst.Vector(0, 100);
            this.velocity.randomX(100, 200);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_1_GoldenerHerbst.crc2.canvas.width;
            if (this.position.x > L11_1_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L11_1_GoldenerHerbst.crc2.canvas.width;
        }
        draw() {
            let nParticles = 30;
            let radiusParticle = 60;
            let particle = new Path2D();
            let gradient = L11_1_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "hsl(195, 76%, 91%)");
            gradient.addColorStop(1, "hsl(353, 76%, 91%)");
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L11_1_GoldenerHerbst.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_1_GoldenerHerbst.crc2.save();
                let x = (Math.random() - 0.5) * 200;
                let y = -(Math.random() * 300);
                L11_1_GoldenerHerbst.crc2.translate(x, y);
                L11_1_GoldenerHerbst.crc2.fill(particle);
                L11_1_GoldenerHerbst.crc2.restore();
            }
            L11_1_GoldenerHerbst.crc2.restore();
        }
    }
    L11_1_GoldenerHerbst.Cloud = Cloud;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Cloud.js.map