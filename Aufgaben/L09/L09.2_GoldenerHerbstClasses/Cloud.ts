namespace L09_2_GoldenerHerbst {
  export class Cloud {
    position: Vector;
    velocity: Vector;
    number: number;
    size: number;

    constructor(_position: Vector, _velocity: Vector) {

      if (_position)
      this.position = _position;
      else
      this.position = new Vector((Math.random() * crc2.canvas.width), 100);

      this.velocity = new Vector(10, 0);


      this.number = Math.floor(Math.random() * 4);
      this.size = Math.random() * 3;
      //this.position = _position;
      //this.velocity = _velocity;
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
      crc2.translate(this.position.x, this.position.y);

      crc2.fillStyle = gradient;

      for (let drawn: number = 0; drawn < nParticles; drawn++) {
        crc2.save();
        let x: number = (Math.random() - 0.5) * this.size;
        let y: number = -(Math.random() * this.size);
        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();
      }
      crc2.restore();
    }

    move(): void {
        this.position.add(this.velocity);

        if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
        if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
        if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
    }
  }
}
