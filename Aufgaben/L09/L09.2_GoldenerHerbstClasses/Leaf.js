"use strict";
var L09_2_GoldenerHerbst;
(function (L09_2_GoldenerHerbst) {
    class Leaf {
        //type: number;
        constructor(_position, _velocity, _size
        //_type: number
        ) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_2_GoldenerHerbst.Vector(0, 0);
            this.velocity = new L09_2_GoldenerHerbst.Vector(0, 0);
            this.velocity.random(100, 200);
            this.position = _position;
            this.velocity = _velocity;
            this.size = _size;
            //this.type = _type;
        }
        move() {
            console.log("move");
            let offset = new L09_2_GoldenerHerbst.Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_2_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_2_GoldenerHerbst.crc2.canvas.height;
            if (this.position.x > L09_2_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L09_2_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y > L09_2_GoldenerHerbst.crc2.canvas.height)
                this.position.y -= L09_2_GoldenerHerbst.crc2.canvas.height;
        }
        draw() {
            console.log("leaves");
            L09_2_GoldenerHerbst.crc2.save();
            L09_2_GoldenerHerbst.crc2.translate(100, 500);
            //crc2.scale(2, 2);
            L09_2_GoldenerHerbst.crc2.beginPath();
            L09_2_GoldenerHerbst.crc2.rect(-1, -20, 2, 20);
            L09_2_GoldenerHerbst.crc2.closePath();
            L09_2_GoldenerHerbst.crc2.fillStyle = "hsl(0, 23%, 50%)";
            L09_2_GoldenerHerbst.crc2.fill();
            L09_2_GoldenerHerbst.crc2.beginPath();
            L09_2_GoldenerHerbst.crc2.moveTo(0, -65);
            L09_2_GoldenerHerbst.crc2.lineTo(10, -45);
            L09_2_GoldenerHerbst.crc2.lineTo(35, -40);
            L09_2_GoldenerHerbst.crc2.lineTo(10, -30);
            L09_2_GoldenerHerbst.crc2.lineTo(25, -10);
            L09_2_GoldenerHerbst.crc2.lineTo(0, -20);
            L09_2_GoldenerHerbst.crc2.lineTo(-25, -10);
            L09_2_GoldenerHerbst.crc2.lineTo(-10, -30);
            L09_2_GoldenerHerbst.crc2.lineTo(-35, -40);
            L09_2_GoldenerHerbst.crc2.lineTo(-10, -45);
            L09_2_GoldenerHerbst.crc2.lineTo(0, -65);
            L09_2_GoldenerHerbst.crc2.closePath();
            let gradient = L09_2_GoldenerHerbst.crc2.createLinearGradient(0, -65, -35, 0);
            gradient.addColorStop(0, "hsl(182, 54%, 50%)");
            gradient.addColorStop(0.4, "hsl(157, 34%, 64%)");
            gradient.addColorStop(1, "hsl(59, 57%, 52%)");
            L09_2_GoldenerHerbst.crc2.fillStyle = gradient;
            L09_2_GoldenerHerbst.crc2.fill();
            L09_2_GoldenerHerbst.crc2.restore();
        }
    }
    L09_2_GoldenerHerbst.Leaf = Leaf;
})(L09_2_GoldenerHerbst || (L09_2_GoldenerHerbst = {}));
//# sourceMappingURL=Leaf.js.map