namespace L11_1_GoldenerHerbst {
  export class Cloud extends Moveable {
    constructor() {
      super();
      this.position = new Vector(0, 100);
      this.velocity.randomX(100, 200);
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
      let nParticles: number = 30;
      let radiusParticle: number = 60;
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
      gradient.addColorStop(1, "hsl(353, 76%, 91%)");

      crc2.save();
      crc2.translate(this.position.x, this.position.y);

      crc2.fillStyle = gradient;

      for (let drawn: number = 0; drawn < nParticles; drawn++) {
        crc2.save();
        let x: number = (Math.random() - 0.5) * 200;
        let y: number = -(Math.random() * 300);
        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();
      }
      crc2.restore();
    }
  }
}
