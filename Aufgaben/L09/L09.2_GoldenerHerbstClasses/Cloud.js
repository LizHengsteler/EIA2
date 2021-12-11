"use strict";
var L09_2_GoldenerHerbst;
(function (L09_2_GoldenerHerbst) {
    class Cloud {
        constructor(_position, _velocity) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_2_GoldenerHerbst.Vector(300, 100);
            this.velocity = new L09_2_GoldenerHerbst.Vector(0, 0);
            this.velocity.random(100, 200);
            //this.number = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
            //this.position = _position;
            //this.velocity = _velocity;
            //this.number = _number;
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += L09_2_GoldenerHerbst.crc2.canvas.width;
            //if (this.position.y < 0)
            //this.position.y += crc2.canvas.height;
            if (this.position.x > L09_2_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L09_2_GoldenerHerbst.crc2.canvas.width;
            //if (this.position.y > crc2.canvas.height)
            //      this.position.y -= crc2.canvas.height;
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
            L09_2_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L09_2_GoldenerHerbst.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L09_2_GoldenerHerbst.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = -(Math.random() * this.size);
                L09_2_GoldenerHerbst.crc2.translate(x, y);
                L09_2_GoldenerHerbst.crc2.fill(particle);
                L09_2_GoldenerHerbst.crc2.restore();
            }
            L09_2_GoldenerHerbst.crc2.restore();
        }
    }
    L09_2_GoldenerHerbst.Cloud = Cloud;
})(L09_2_GoldenerHerbst || (L09_2_GoldenerHerbst = {}));
//# sourceMappingURL=Cloud.js.map