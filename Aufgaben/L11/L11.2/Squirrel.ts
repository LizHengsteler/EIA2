namespace L11_2_GoldenerHerbst {
    //Eichhörnchen von Lukas, in Absprache:)


    export class Squirrel extends Moveable {

        //private task: TASK;
        

        constructor() {
            super();

            this.position = new Vector(Vector.random(crc2.canvas.width, 0), Vector.random(crc2.canvas.height, horizon));
            this.velocity.randomX(100, 200);
            this.task = TASK.WAIT;
            
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            if (Math.random() < 0.01) {
                this.velocity.randomX(-200, 200);
                this.velocity.randomY(-200, 200);
            }
            if (this.position.y <= horizon) {
                this.velocity.randomY(0, 200);
            }
            if (this.position.y > crc2.canvas.height - 10) {
                this.velocity.randomY(-200, 0);
            }

            
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(0.3, 0.3);

            if (this.velocity.x > 0)
            crc2.scale(-1, 1);

            crc2.beginPath();
            crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "hsl(0, 89%, 73%)";
            crc2.fill();

            crc2.translate(-40, -75);
            crc2.beginPath();
            crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "hsl(0, 89%, 73%)";
            crc2.fill();

            crc2.translate(-10, -10);
            crc2.beginPath();
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.translate(-10, -10);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(20, -40);
            crc2.lineTo(40, 0);
            crc2.closePath();
            crc2.fillStyle = "hsl(0, 89%, 73%)";
            crc2.fill();

            crc2.translate(10, 80);
            crc2.beginPath();
            crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "hsl(0, 89%, 64%)";
            crc2.fill();

            crc2.translate(40, 70);
            crc2.beginPath();
            crc2.ellipse(0, 0, 20, 50, Math.PI * 1.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "hsl(0, 89%, 64%)";
            crc2.fill();
            

            crc2.translate(50, 0);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(50, 0, 100, -120, 150, -150);
            crc2.bezierCurveTo(-20, -220, 50, -80, 0, -20);
            crc2.closePath();
            crc2.fillStyle = "hsl(0, 89%, 73%)";
            crc2.fill();
            crc2.restore();
        }

        /*public name(): void {
        
                
          
                let target: EventTarget = _event.target; 
                span.style.left = x + "px";
                span.style.top = y + "px";
                span.innerHTML = "Position von X: " + x + "px" + "<br>" + "Position von Y: " + y + "px" + "<br>" +  target;
                
              
          }
        }*/
    }
}