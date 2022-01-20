namespace L11_2_GoldenerHerbst {
    export class Nut {
  public decided: boolean;
  public eaten: boolean;
  public position: Vector;

  constructor() {
      this.decided = false;
      this.eaten = false;
  }

  public draw (): void {
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.beginPath();
      crc2.arc(0, 0, 15, 0, 2 * Math.PI);
      crc2.closePath();
      crc2.fillStyle = "hsl(199, 39%, 77%)";
      crc2.fill();

      crc2.translate(0, -3);
      crc2.beginPath();
      crc2.arc(0, 0, 18, 0, Math.PI, true);
      crc2.closePath();
      crc2.fillStyle = "hsl(199, 35%, 63%)";
      crc2.fill();
      crc2.restore();
       

  }

  /*remove (): void {

  }*/

    }

}