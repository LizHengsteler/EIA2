namespace L11_1_GoldenerHerbst {
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
      crc2.fillStyle = "rgb(180, 100, 0)";
      crc2.fill();

      crc2.translate(0, -3);
      crc2.beginPath();
      crc2.arc(0, 0, 18, 0, Math.PI, true);
      crc2.closePath();
      crc2.fillStyle = "rgb(50, 30, 0)";
      crc2.fill();
      crc2.restore();
       

  }

    }

}