namespace GoldenerHerbst {
  /*Aufgabe: L08.2 Goldener Herbst
  Name: Liz Hengsteler
  Matrikel: 268386
  Datum: 25.11.2021
  Quellen: Praktikum mit Markus, Inverted Classroom, W3Schools*/
  interface Vector {
    x: number;
    y: number;
  }

  window.addEventListener("load", handleLoad);
  let crc2: CanvasRenderingContext2D;
  let golden: number = 0.62;
  let horizon: number;
  let x: number = 0;
  let y: number = 0;
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
    //drawSquirrels();
    drawLeaves();
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

  function drawCloud(_position: Vector, _size: Vector): void {
    //console.log("cloud", _position, _size);
    let nParticles: number = 30;
    let radiusParticle: number = 40;
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
    gradient.addColorStop(0, "hsl(195, 76%, 91%)");
    gradient.addColorStop(1, "hsl(353, 76%, 91%)");

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
    let nFirs: number = 10;

    for (let drawn: number = 0; drawn < nFirs; drawn++) {
      crc2.save();
      x = x + 20;
      crc2.translate(x, y);
      drawFir();
      crc2.restore();
    }
  }

  function drawLeaves(): void {
    let nLeaves: number = 20;
    let x: number = Math.round(Math.random());
    let y: number = Math.round(Math.random());
    
    


    for (let drawn: number = 0; drawn < nLeaves; drawn++) {
      crc2.save();
      x += x + Math.random() * 20;
      y += y +  Math.random() * 20;
      crc2.translate(x, y);
      crc2.rotate(x);
      drawLeave1();
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

  /*function drawSquirrels(): void {
    console.log("squirrel");
  }*/

  function drawLeave1(): void {
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

  /*function drawTree(): void {
        console.log("tree");
    }*/
}
