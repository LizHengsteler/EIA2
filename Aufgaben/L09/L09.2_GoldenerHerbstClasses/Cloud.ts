namespace L09_2_GoldenerHerbst {
  export class Cloud {
    position: Vector;
    velocity: Vector;
    number: number;

    constructor(_position: Vector, _velocity: Vector) {
      this.position = _position;
      this.velocity = _velocity;
      //this.number = _number;
    }

    draw(): void {
      let nParticles: number = 30;
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
      gradient.addColorStop(1, "hsl(353, 76%, 91%)");

      crc2.save();
      crc2.translate(_position.x, _position.y);

      crc2.fillStyle = gradient;

      for (let drawn: number = 0; drawn < nParticles; drawn++) {
        crc2.save();
        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = -(Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();
      }
      crc2.restore();
    }
  }
}
