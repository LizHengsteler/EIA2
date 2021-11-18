namespace GenerativeKunst {
  let crc2: CanvasRenderingContext2D;
  let x: number;
  let y: number;
  let radius: number;
  let hue: number;
  let saturation: number;
  let lightness: number;
  let dx: number = 2;
  let dy: number = 2; 
  let randomColor1: number [] = [];
  let randomColor2: number [] = [];
  let randomColor3: number [] = [];

  window.addEventListener("load", hndLoad);

  function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    hue = Math.round(Math.random() * 360);
    saturation = Math.round(Math.random() * 100);
    lightness = Math.round(Math.random () * 100);
    
    crc2 = canvas.getContext("2d")!;

    
    x = Math.round(Math.random() * innerWidth);
    y = Math.round(Math.random() * innerHeight);
    

    
    drawBouncingBall();
  }

  
  function drawBouncingBall(): void { 
    /*hue = Math.round(Math.random() * 360);
    saturation = Math.round(Math.random() * 100);
    lightness = Math.round(Math.random () * 100);*/
    
    radius = 40;
    window.requestAnimationFrame(drawBouncingBall);
    randomColor1 = [hue, saturation, lightness];
    randomColor2 = [hue, saturation, lightness];
    randomColor3 = [hue, saturation, lightness];
    /*let purple: number = Math.floor(Math.random() * 200);
    let yellow: number = Math.floor(Math.random() * 400);
    let blue: number = Math.floor(Math.random() * 600);*/
    crc2.beginPath();
    crc2.arc(x, y, radius, 0, Math.PI * 2, false);
    //crc2.strokeStyle = "hsl(" + randomColor1 + ", " + randomColor2 + "," + randomColor3 + ")";
    crc2.strokeStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
    crc2.stroke();

    if (x + radius >= innerWidth || x - radius < 0) { // || oder
      dx = -dx;
    }
    if (y + radius >= innerHeight || y - radius < 0) {
      dy = -dy;
    }
    x += dx * 2;
    y += dy * 2;
  }
}
