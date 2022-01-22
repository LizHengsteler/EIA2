namespace L11_2_GoldenerHerbst {
  export class Raindrop extends Moveable {
    public rainFall: boolean;
    protected stop: number;
    

    constructor(_position: Vector) {
      super();
      this.position = new Vector(_position.x, _position.y);
      this.stop = horizon;

    }



    public move(_timeslice: number): void {
      if (this.rainFall == false) {
        if (this.position.y < this.stop) {
          this.velocity = new Vector(0, 100);
          let offset: Vector = this.velocity.copy();
          offset.scale(_timeslice);
          this.position.add(offset);
        }
        if (this.position.y > this.stop) {
          this.rainFall = true;
        }
      }
    }


  
      public draw(): void {

    crc2.save();
    crc2.translate(this.position.x, this.position.y);
    crc2.beginPath();
    crc2.rect(-2, -10, 3, 10);
    crc2.closePath();
    crc2.fillStyle = "hsl(59, 97%, 72%)";
    crc2.fill();
    crc2.restore();
  }
}
  }