namespace L11_2_GoldenerHerbst {
  //Jirka Code Moveable https://github.com/JirkaDellOro/EIA2-Inverted/blob/master/X00_Code/L10_Inheritance/Asteroids/Moveable.ts
  export abstract class Moveable {
    protected position: Vector;
    protected velocity: Vector;
    public eatRadius: number = 0;

    constructor(_position?: Vector, _velocity?: Vector) {
      if (_position) {
        this.position = _position.copy();
      } else {
        this.position = new Vector(0, 0);
      }

      if (_velocity) {
        this.velocity = _velocity.copy();
      } else this.velocity = new Vector(0, 0);
    }

    public eat(_partner: Moveable): boolean {
      let difference: Vector = Vector.getDifference(this.position, _partner.position);
      if (this.eatRadius + _partner.eatRadius < difference.length) {
        return false;
      }
      else {
        return true;
      }

    }

    public move(_timeslice: number): void {
      let offset: Vector = this.velocity.copy();
      offset.scale(_timeslice);
      this.position.add(offset);

      if (this.position.x < 0) this.position.x += crc2.canvas.width;
      if (this.position.y < 0) this.position.y += crc2.canvas.height;
      if (this.position.x > crc2.canvas.width)
        this.position.x -= crc2.canvas.width;
      if (this.position.y > crc2.canvas.height)
        this.position.y -= crc2.canvas.height;
    }

    public abstract draw(): void;
  }
}
