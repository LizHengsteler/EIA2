"use strict";
var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    class Cloud extends L10_2_GoldenerHerbst.Moveable {
        constructor(_position, _velocity) {
            super();
            if (_position)
                this.position = _position;
            else
                this.position = new L10_2_GoldenerHerbst.Vector(300, 100);
            this.velocity = new L10_2_GoldenerHerbst.Vector(0, 0);
            this.velocity.random(100, 200);
            //this.number = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
            //this.position = _position;
            //this.velocity = _velocity;
            //this.number = _number;
        }
        draw() {
            let nParticles = 30;
            let radiusParticle = 40;
            let particle = new Path2D();
            let gradient = L10_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "hsl(195, 76%, 91%)");
            gradient.addColorStop(1, "hsl(353, 76%, 91%)");
            L10_2_GoldenerHerbst.crc2.save();
            L10_2_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2_GoldenerHerbst.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = -(Math.random() * this.size);
                L10_2_GoldenerHerbst.crc2.translate(x, y);
                L10_2_GoldenerHerbst.crc2.fill(particle);
                L10_2_GoldenerHerbst.crc2.restore();
            }
            L10_2_GoldenerHerbst.crc2.restore();
        }
    }
    L10_2_GoldenerHerbst.Cloud = Cloud;
})(L10_2_GoldenerHerbst || (L10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Cloud.js.map