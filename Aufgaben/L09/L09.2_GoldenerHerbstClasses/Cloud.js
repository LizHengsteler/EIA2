"use strict";
var L09_2_GoldenerHerbst;
(function (L09_2_GoldenerHerbst) {
    class Cloud {
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
            //this.number = _number;
        }
        draw() {
            let nParticles = 30;
            let radiusParticle = 40;
            let particle = new Path2D();
            let gradient = L09_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "hsl(195, 76%, 91%)");
            gradient.addColorStop(1, "hsl(353, 76%, 91%)");
            L09_2_GoldenerHerbst.crc2.save();
            //crc2.translate(_position.x, _position.y);
            L09_2_GoldenerHerbst.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_GoldenerHerbst.crc2.save();
                //let x: number = (Math.random() - 0.5) * _size.x;
                //let y: number = -(Math.random() * _size.y);
                L09_2_GoldenerHerbst.crc2.translate(L09_2_GoldenerHerbst.x, L09_2_GoldenerHerbst.y);
                L09_2_GoldenerHerbst.crc2.fill(particle);
                L09_2_GoldenerHerbst.crc2.restore();
            }
            L09_2_GoldenerHerbst.crc2.restore();
        }
    }
    L09_2_GoldenerHerbst.Cloud = Cloud;
})(L09_2_GoldenerHerbst || (L09_2_GoldenerHerbst = {}));
//# sourceMappingURL=Cloud.js.map