namespace L11_2_GoldenerHerbst {
    export class Leaf extends Moveable {
    
      constructor() {
        super();
        this.position = Vector.randomY(0, crc2.canvas.height);
        this.velocity.random(100, 200);
  
      }
  
      public move(_timeslice: number): void {
        let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
        offset.scale(_timeslice);
        this.position.add(offset);
  
        if (this.position.x < 0) this.position.x += crc2.canvas.width;
        if (this.position.y < 0) this.position.y += crc2.canvas.height;
        if (this.position.x > crc2.canvas.width)
          this.position.x -= crc2.canvas.width;
        if (this.position.y > crc2.canvas.height)
          this.position.y -= crc2.canvas.height;
      }
  
      public draw(): void {
        
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
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
  