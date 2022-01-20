"use strict";
var L11_2_GoldenerHerbst;
(function (L11_2_GoldenerHerbst) {
    class Cloud extends L11_2_GoldenerHerbst.Moveable {
        constructor() {
            super();
            this.position = new L11_2_GoldenerHerbst.Vector(50, 100);
            this.velocity.randomX(100, 200);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_2_GoldenerHerbst.crc2.canvas.width;
            if (this.position.x > L11_2_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L11_2_GoldenerHerbst.crc2.canvas.width;
        }
        draw() {
            /*let nParticles: number = 30;
            let radiusParticle: number = 40;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(
              0,
              0,
              0,
              0,
              0,
              radiusParticle
            );
      
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "hsl(195, 76%, 91%)");
            gradient.addColorStop(1, "hsl(353, 76%, 91%)");*/
            let r1 = 20;
            let r2 = 50;
            let gradient = L11_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "hsl(195, 76%, 91%)");
            gradient.addColorStop(1, "hsl(353, 76%, 91%)");
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(200, 225);
            L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(250, 200);
            L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(300, 225);
            L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(250, 225);
            L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
            gradient.addColorStop(0, "hsl(195, 76%, 91%)");
            gradient.addColorStop(1, "hsl(353, 76%, 91%)");
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(900, 225);
            L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(850, 200);
            L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(800, 225);
            L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(850, 225);
            L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L11_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
        }
    }
    L11_2_GoldenerHerbst.Cloud = Cloud;
})(L11_2_GoldenerHerbst || (L11_2_GoldenerHerbst = {}));
//# sourceMappingURL=Cloud.js.map