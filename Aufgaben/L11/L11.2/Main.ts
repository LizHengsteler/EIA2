namespace L11_2_GoldenerHerbst {
    /*Aufgabe: L11.2 Goldener Herbst
      Name: Liz Hengsteler
      Matrikel: 268386
      Datum: 22.01.2022
      Zusammenarbeit: Hannah Sättele und Lukas Dirlmeier
      Quellen: Inverted Classroom, Jirka Videos + Code
      */
  

  
window.addEventListener("load", handleLoad);
export let moveables: Moveable[] = [];
export let nuts: Nut [] = [];
   
export let crc2: CanvasRenderingContext2D;
export let golden: number = 0.62;
export let horizon: number;
export let x: number = 0;
export let y: number = 0;
let imageData: ImageData;
  
export enum TASK {
      WAIT,
      CATCH
  }
  
function handleLoad(_event: Event): void {
      let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (!canvas) return;
      crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
  
      horizon = crc2.canvas.height * golden;
  
      drawBackground();
      
      createSquirrels();
      createClouds();
      createLeaves();
      canvas.addEventListener("click", createRain);
      canvas.addEventListener("click", createNuts);
      
      
      //Cloud.addEventListener("mousedown", moveCloud);
      window.setInterval(update, 50);
      
    }
  
function drawBackground(): void {
     
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
  
      drawSun(new Vector(100, 75));
      drawMountains(new Vector(0, horizon), 75, 200, "grey", "white");
      drawFirs();
    }
  
function drawSun(_position: Vector): void {
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
      imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
  
function createClouds(): void {
      let cloud: Cloud = new Cloud();
      moveables.push(cloud);
    }
  
function createLeaves(): void {
      for (let index: number = 0; index < 8; index++) {
        let leaf1: Leaf = new Leaf();
        moveables.push(leaf1);
        
      }
        
      
    }
  
function createNuts(_event: MouseEvent): void {
    
    if (_event.clientY >= horizon) {
      let nut: Nut = new Nut;
      nut.position = new Vector(_event.clientX, _event.clientY);
      nuts.push(nut);
    }
  
    }
  
function createSquirrels(): void {
      for (let index: number = 0; index < 4; index++) {
        let squirrel: Squirrel = new Squirrel ();
        moveables.push(squirrel);
      }
    }

function createRain(_event: MouseEvent): void {
  if (_event.clientY <= horizon) {
    let rainDrop1: Raindrop = new Raindrop(new Vector(Vector.random(200, 300), 300));
    let rainDrop2: Raindrop = new Raindrop(new Vector(Vector.random(800, 900), 300));
    moveables.push(rainDrop1 , rainDrop2);
    rainDrop1.rainFall = false;
    rainDrop2.rainFall = false;
    
  }
    }


/*function moveCloud() {
  
}*/
  
function update(): void {
      crc2.putImageData(imageData, 0, 0);
  
      for (let moveable of moveables) {
        moveable.move(1 / 100);
        moveable.draw();
      }
  
      for (let nut of nuts) {
        nut.draw();
      }
      
    }
    
  
    
  }
  