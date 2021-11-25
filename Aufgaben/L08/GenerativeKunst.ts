namespace GenerativeKunst {
  /*Aufgabe: L08.1 Generative Kunst
  Name: Liz Hengsteler
  Matrikel: 268386
  Datum: 20.11.2021
  Quellen: */
  let crc2: CanvasRenderingContext2D;
  let x: number;
  let y: number;
  let radius: number;
  let hue: number;
  let saturation: number;
  let lightness: number;
  let dx: number = 2;
  let dy: number = 2;

  window.addEventListener("load", hndLoad);

  function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    hue = Math.round(Math.random() * 360);
    saturation = Math.round(Math.random() * 100);
    lightness = Math.round(Math.random() * 100);

    crc2 = canvas.getContext("2d")!;


    x = Math.round(Math.random() * innerWidth);
    y = Math.round(Math.random() * innerHeight);

    drawBouncingBall();
    
  }

  

  function drawBouncingBall(): void {
    radius = 40;
    window.requestAnimationFrame(drawBouncingBall);

    crc2.beginPath();
    crc2.arc(x, y, radius, 0, Math.PI * 2, false);

    crc2.strokeStyle =
      "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
    crc2.stroke();

    if (x + radius >= innerWidth || x - radius < 0) {
      // || oder
      dx = -dx;
    }
    if (y + radius >= innerHeight || y - radius < 0) {
      dy = -dy;
    }
    x += dx * 2;
    y += dy * 2;
    crc2.closePath();
    
}

}
