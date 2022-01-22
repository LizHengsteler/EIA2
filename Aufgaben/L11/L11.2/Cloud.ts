namespace L11_2_GoldenerHerbst {
  export class Cloud extends Moveable {
    constructor() {
      super();
      this.position = new Vector(50, 100);
      this.velocity = Vector.randomX(100, 200);
    }

    public move(_timeslice: number): void {
      let offset: Vector = this.velocity.copy();
      offset.scale(_timeslice);
      this.position.add(offset);

      if (this.position.x < 0)
        this.position.x += crc2.canvas.width;

      if (this.position.x > crc2.canvas.width)
        this.position.x -= crc2.canvas.width;
    }

    public draw(): void {
      
      let r1: number = 20;
      let r2: number = 50;
      let gradient: CanvasGradient = crc2.createRadialGradient(
        0,
        0,
        r1,
        0,
        0,
        r2
      );

      gradient.addColorStop(0, "hsl(195, 76%, 91%)");
      gradient.addColorStop(1, "hsl(353, 76%, 91%)");
      crc2.beginPath();
      crc2.save();
      crc2.translate(200, 225);
      crc2.fillStyle = gradient;
      crc2.arc(0, 0, r2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      crc2.beginPath();
      crc2.save();
      crc2.translate(250, 200);
      crc2.fillStyle = gradient;
      crc2.arc(0, 0, r2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      crc2.beginPath();
      crc2.save();
      crc2.translate(300, 225);
      crc2.fillStyle = gradient;
      crc2.arc(0, 0, r2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      crc2.beginPath();
      crc2.save();
      crc2.translate(250, 225);
      crc2.fillStyle = gradient;
      crc2.arc(0, 0, r2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
      crc2.restore();


      gradient.addColorStop(0, "hsl(195, 76%, 91%)");
      gradient.addColorStop(1, "hsl(353, 76%, 91%)");
      crc2.beginPath();
      crc2.save();
      crc2.translate(900, 225);
      crc2.fillStyle = gradient;
      crc2.arc(0, 0, r2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      crc2.beginPath();
      crc2.save();
      crc2.translate(850, 200);
      crc2.fillStyle = gradient;
      crc2.arc(0, 0, r2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      crc2.beginPath();
      crc2.save();
      crc2.translate(800, 225);
      crc2.fillStyle = gradient;
      crc2.arc(0, 0, r2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      crc2.beginPath();
      crc2.save();
      crc2.translate(850, 225);
      crc2.fillStyle = gradient;
      crc2.arc(0, 0, r2, 0, Math.PI * 2);
      crc2.closePath();
      crc2.fill();
      crc2.restore();

    }
  }
}
