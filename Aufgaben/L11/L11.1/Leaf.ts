namespace L11_1_GoldenerHerbst {
    export class Leaf extends Moveable {
      position: Vector;
      velocity: Vector;
      size: number;
      //type: number;
  
      constructor(
        _position: Vector,
        _velocity: Vector,
        _size: number
        //_type: number
      ) {
          super();
          if (_position) this.position = _position;
        else this.position = new Vector(0, 0);
          this.velocity = new Vector(0, 0);
          this.velocity.random(100, 200);
  
          this.position = _position;
          this.velocity = _velocity;
          this.size = _size;
        //this.type = _type;
      }
  
      move(): void {
        console.log("move");
        let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
        //offset.scale(_timeslice);
        this.position.add(offset);
  
        if (this.position.x < 0)
            this.position.x += crc2.canvas.width;
        if (this.position.y < 0)
            this.position.y += crc2.canvas.height;
        if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
        if (this.position.y > crc2.canvas.height)
            this.position.y -= crc2.canvas.height;
    }
  
      draw(): void {
        console.log("leaves");
        crc2.save();
        crc2.translate(100, 500);
        //crc2.scale(2, 2);
        crc2.beginPath();
        crc2.rect(-1, -20, 2, 20);
        crc2.closePath();
        crc2.fillStyle = "hsl(0, 23%, 50%)";
        crc2.fill();
  
        crc2.beginPath();
        crc2.moveTo(0, -65);
        crc2.lineTo(10, -45);
        crc2.lineTo(35, -40);
        crc2.lineTo(10, -30);
        crc2.lineTo(25, -10);
        crc2.lineTo(0, -20);
        crc2.lineTo(-25, -10);
        crc2.lineTo(-10, -30);
        crc2.lineTo(-35, -40);
        crc2.lineTo(-10, -45);
        crc2.lineTo(0, -65);
        crc2.closePath();
  
        let gradient: CanvasGradient = crc2.createLinearGradient(0, -65, -35, 0);
        gradient.addColorStop(0, "hsl(182, 54%, 50%)");
        gradient.addColorStop(0.4, "hsl(157, 34%, 64%)");
        gradient.addColorStop(1, "hsl(59, 57%, 52%)");
  
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
      }
    }
  }
  