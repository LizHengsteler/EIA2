namespace L10_2_GoldenerHerbst {
    /*Aufgabe: L09.2 Goldener Herbst
    Name: Liz Hengsteler
    Matrikel: 268386
    Datum: 08.01.2022
    Zusammenarbeit: 
    Quellen: Inverted Classroom, Jirka Videos + Code
   
  
    */
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
  
    window.addEventListener("load", handleLoad);
  
    let leaves: Leaf[] = [];
    let clouds: Cloud[] = [];
    let squirrels: Squirrel[] = [];
  
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    export let horizon: number;
    export let x: number = 0;
    export let y: number = 0;
  
    function handleLoad(_event: Event): void {
      console.log("loaded");
      let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (!canvas) return;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
  
      horizon = crc2.canvas.height * golden;
  
      drawBackground();
      //drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
  
      //drawSquirrels();
      createClouds(15);
      createLeaves(13);
      window.setInterval(update, 20);
    }
  
    function drawBackground(): void {
      //console.log("background");
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
  
      drawSun({ x: 100, y: 75 });
      drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
      drawFirs();
    }
  
    function drawSun(_position: Vector): void {
      //console.log("sun", _position);
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
    function drawMountains(
      _position: Vector,
      _min: number,
      _max: number,
      _colorLow: string,
      _colorHigh: string
    ): void {
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
      let nFirs: number = 6;
      let x: number = 1;
  
      for (let drawn: number = 0; drawn < nFirs; drawn++) {
        crc2.save();
        x = Math.random() - 10;
  
        x = (Math.random() - 0.5) * 2000;
        crc2.translate(x, y);
        drawFir();
        crc2.restore();
      }
    }
    function drawFir(): void {
      //console.log("Fir");
      crc2.save();
      crc2.translate(200, horizon);
      crc2.scale(1, 2);
      crc2.beginPath();
      crc2.rect(-5, -20, 10, 20);
      crc2.closePath();
      crc2.fillStyle = "hsl(41, 68%, 22%)";
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
  
      crc2.fillStyle = "hsl(166, 68%, 43%)";
      crc2.closePath();
  
      crc2.fill();
      crc2.restore();
    }
  
    function createClouds(_nClouds: number): void {
      for (let index: number = 0; index < _nClouds; index++) {
        let cloud: Cloud = new Cloud(
          new Vector(Math.random() * 200, Math.random() * 200),
          new Vector(Math.random() * 200, Math.random() * 400)
        );
  
        clouds.push(cloud);
      }
    }
  
    function createLeaves(_nLeaves: number): void {
      for (let i: number = 0; i < _nLeaves; i++) {
        let leaf1: Leaf = new Leaf(
          new Vector(Math.random() * 200, Math.random() * 200),
          new Vector(Math.random() * 200, Math.random() * 400),
          2
        );
        leaves.push(leaf1);
      }
      
    }
  
    function update(): void {
      for (let cloud of clouds) {
        cloud.draw();
        cloud.move();
      }
      for (let leaf1 of leaves) {
        leaf1.draw();
        leaf1.move();
      }
      window.requestAnimationFrame(createLeaves);
    }
  
    /*function drawSquirrels(): void {
      console.log("squirrel");
    }*/
  }