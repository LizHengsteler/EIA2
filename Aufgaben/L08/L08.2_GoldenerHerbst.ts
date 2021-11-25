namespace GoldenerHerbst {

/*Aufgabe: L08.2 Goldener Herbst
  Name: Liz Hengsteler
  Matrikel: 268386
  Datum: 25.11.2021
  Quellen: Praktikum mit Markus*/
    interface Vector {
        x: number;
        y: number;
      }
    
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;
    let horizon: number;
    function handleLoad(_event: Event): void {
        console.log("loaded");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    
        horizon = crc2.canvas.height * golden;
        /*let posTreesStart: Vector = { x: crc2.canvas.width, y: crc2.canvas.height};
        let posTreesEnd: Vector = { x: 0, y: 0 };
        let x: number = 100;
        let y: number = 100; */
    
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        //drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawFirs();
        
        //drawTrees(x, y);
        //drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        drawSquirrels();
        drawLeaves();
      }
    
    function drawBackground(): void {
        console.log("background");
        let gradient: CanvasGradient = crc2.createLinearGradient(
          0,
          0,
          0,
          crc2.canvas.height
        );
        gradient.addColorStop(0, "hsl(294, 29%, 59%)");
        gradient.addColorStop(0.3, "hsl(122, 100%, 85%)");
        gradient.addColorStop(golden, "hsl(305, 84%, 88%)");
        gradient.addColorStop(0.8, "hsl(297, 21%, 53%)");
        gradient.addColorStop(1, "hsl(297, 30%, 63%)");
    
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
      }
    
    function drawSun(_position: Vector): void {
        console.log("sun", _position);
        let r1: number = 20;
        let r2: number = 90;
        let gradient: CanvasGradient = crc2.createRadialGradient(
          0,
          0,
          r1,
          0,
          0,
          r2
        );
    
        gradient.addColorStop(0, "hsl(19, 90%, 57%)");
        gradient.addColorStop(0.5, "hsl(30, 87%, 64%, 0.5)");
        gradient.addColorStop(1, "hsl(30, 87%, 89%, 0)");
    
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, Math.PI * 2);
        crc2.fill();
        crc2.restore();
      }
    
    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("cloud", _position, _size);
        let nParticles: number = 40;
        let radiusParticle: number = 50;
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
        gradient.addColorStop(0, "hsl(181, 87%, 89%, 0.5)");
        gradient.addColorStop(1, "hsl(181, 98%, 40%, 0)");
    
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
    
    
    
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("mountains");
        let stepMin: number = 35;
        let stepMax: number = 100;
        let x: number = 0;
    
        crc2.save();
        crc2.translate(_position.x, _position.y);
    
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
          x += stepMin + Math.random() * (stepMax - stepMin);
          let y: number = -_min - Math.random() * (_max - _min);
    
          crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
    
        crc2.lineTo(x, 0);
        crc2.closePath();
    
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.5, _colorHigh);
    
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    
      }
    function drawFirs(): void {
        let nFirs: number = 10;

        for (let drawn: number = 0; drawn < nFirs; drawn++) {
            crc2.save();
            
            
            crc2.fill();
            crc2.restore();
          }
    }

    

    function drawFir(): void {
        console.log("Fir");
        crc2.save();
        crc2.translate(200, horizon);
        crc2.scale(1, 2);
        crc2.beginPath();
        crc2.rect(-5, -20, 10, 20);
        crc2.closePath();
        crc2.fillStyle = "red";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, -70);
        crc2.lineTo(-23, -45);
        crc2.lineTo(-15, -50);
        crc2.lineTo(-27, -27);
        crc2.lineTo(-20, -32);
        crc2.lineTo(-35, -7);
        crc2.lineTo(0, -18);
        crc2.lineTo(35, -7);
        crc2.lineTo(20, -32);
        crc2.lineTo(27, -27);
        crc2.lineTo(15, -50);
        crc2.lineTo(23, -45);
        crc2.moveTo(0, -70);

        crc2.fillStyle = "green";
        crc2.closePath();
        
        crc2.fill();
        

    }

    /*function drawTrees(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 70);
        crc2.lineTo(_x + 80, _y + 35);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.fillStyle = "#ff0000";
        crc2.strokeStyle = "blue";
        crc2.lineWidth = 7;
      }*/

    /*function drawTrees(_nTrees: number, _posStart: Vector, _posEnd: Vector, _minScale: number, _stepPos: number, _stepScale: number): void {
        console.log("Trees", _posStart, _posEnd);
        let transform: DOMMatrix = crc2.getTransform();
        let step: Vector = {
            x: (_posEnd.x - _posStart.x) * _stepPos,
            y: (_posEnd.y - _posStart.y) * _stepPos
        };

        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);

        do {
            drawTree();

            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);

        } while (--_nTrees > 0);

        crc2.setTransform(transform);
    }

    function drawTree(): void {
        console.log("Tree");
        let nBranches: number = 50;
        let maxRadius: number = 60;
        let branch: Path2D = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);

        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -200);

        crc2.save();
        crc2.translate(0, -120);

        do {
            let y: number = Math.random() * 350;
            let size: number = 1 - y / 700;
            let x: number = (Math.random() - 0.5) * 2 * maxRadius;

            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);

            let colorAngle: number = 120 - Math.random() * 60;
            let color: string = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";

            crc2.fillStyle = color;
            crc2.fill(branch);

            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }*/
      

    function drawSquirrels(): void {
        console.log("squirrel");
    }

    function drawLeaves(): void {
        console.log("leaves");
    }
    

    /*function drawTree(): void {
        console.log("tree");
    }*/
}