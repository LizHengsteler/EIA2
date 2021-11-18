namespace GenerativeKunst_1 {

    let crc2: CanvasRenderingContext2D;
    let x: number;
    let y: number;
    let radius: number;
    window.addEventListener("load", hndLoad);
  
    function hndLoad(_event: Event): void {
      let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
  
      crc2 = canvas.getContext("2d")!;
      //console.log(crc2);
  
      for (let i: number = 0; i < 100; i++) {
        x = Math.random() * innerWidth;
        y = Math.random() * innerHeight;
        drawArc(x, y);
        drawTriangle(x, y);
      }
    }
  
    function drawTriangle(_x: number, _y: number): void {
      crc2.beginPath();
      crc2.moveTo(_x, _y);
      crc2.lineTo(_x, _y + 70);
      crc2.lineTo(_x + 80, _y + 35);
      crc2.closePath();
  
      crc2.fillStyle = "#ff0000";
      crc2.strokeStyle = "blue";
      crc2.lineWidth = 5;
      crc2.stroke();
      crc2.fill();
    }

    function drawArc(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, radius, 0, Math.PI * 2);
        crc2.fillStyle = "hsl( 6, 93%, 71%)";
        crc2.strokeStyle = "hsl( 6, 93%, 71%)";
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        

    }
}