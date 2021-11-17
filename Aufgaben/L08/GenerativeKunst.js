"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    let crc2;
    let x = 0;
    let y = 0;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //console.log(canvas);
        crc2 = canvas.getContext("2d");
        drawBall();
        /*for (let i: number = 0; i < 100; i++) {
          let x: number = Math.random() * 400;
          let y: number = Math.random() * 300;
          drawBall();
        }
      }*/
        function drawBall() {
            let dx = 2;
            let dy = 2;
            let radius = 30;
            window.requestAnimationFrame(drawBall);
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
            x += dx * 5;
            y += dy * 5;
        }
    }
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=GenerativeKunst.js.map