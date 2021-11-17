namespace GenerativeKunst {
  let crc2: CanvasRenderingContext2D;
  let x: number;
  let y: number;

  window.addEventListener("load", hndLoad);

  function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //console.log(canvas);

    crc2 = canvas.getContext("2d")!;

    for (let i: number = 0; i < 100; i++) {
        x = Math.random() * 100;
        y = Math.random() * 100;
      }
    drawBalls(); 
    
    drawBouncingBall();
  }

  function drawBalls (): void {
    for (let i: number = 0; i < 100; i++) {
        x = Math.random() * 100;
        y = Math.random() * 100;
      }
    let dx: number = 2;
    let dy: number = 2;
    let radius: number = 40;

    //window.requestAnimationFrame(drawBalls);

    //crc2.clearRect(0, 0, innerWidth, innerHeight);
    
    crc2.beginPath();
    crc2.arc(x, y, radius, 0, Math.PI * 2, false);
    crc2.strokeStyle = "#ffffff";
    crc2.stroke();

    if (x + radius > innerWidth && x - radius < 0) {
      dx = -dx;
    }
    if (y + radius > innerHeight && y - radius < 0) {
      dy = -dy;
    }
    x += dx * 2;
    y += dy * 2;
      
  }

  function drawBouncingBall(): void { //Warum bounct er nicht an der Wand ab?

    
    let dx: number = 2;
    let dy: number = 2;
    let radius: number = 40;

    window.requestAnimationFrame(drawBouncingBall);
    let purple: number = Math.floor(Math.random() * 200);
    let yellow: number = Math.floor(Math.random() * 400);
    let blue: number = Math.floor(Math.random() * 600);

    //crc2.clearRect(0, 0, innerWidth, innerHeight);
    crc2.beginPath();
    crc2.arc(x, y, radius, 0, Math.PI * 2, false);
    crc2.strokeStyle = "rgb(" + purple + ", " + yellow + "," + blue + ")";
    crc2.stroke();

    if (x + radius > innerWidth && x - radius < 0) {
      dx = -dx;
    }
    if (y + radius > innerHeight && y - radius < 0) {
      dy = -dy;
    }
    x += dx * 2;
    y += dy * 2;
  }
}
