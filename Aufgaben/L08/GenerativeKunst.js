"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    let crc2;
    let x;
    let y;
    let radius;
    let hue;
    let saturation;
    let lightness;
    let dx = 2;
    let dy = 2;
    let randomColor1 = [];
    let randomColor2 = [];
    let randomColor3 = [];
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2 = canvas.getContext("2d");
        x = Math.round(Math.random() * 100);
        y = Math.round(Math.random() * 100);
        //drawBalls(); 
        drawBouncingBall();
    }
    /*function drawBalls (): void {
      for (let i: number = 0; i < 100; i++) {
          x = Math.random() * 100;
          y = Math.random() * 100;
        }
      let dx: number = 2;
      let dy: number = 2;
      radius = 40;
  
      window.requestAnimationFrame(drawBalls);
      
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
        
    }*/
    function drawBouncingBall() {
        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 100);
        lightness = Math.round(Math.random() * 100);
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
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=GenerativeKunst.js.map