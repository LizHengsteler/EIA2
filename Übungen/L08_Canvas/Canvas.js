"use strict";
var L08_Canvas;
(function (L08_Canvas) {
    let crc2;
    window.addEventListener("load", hndload);
    function hndload(_event) {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        /*crc2.fillStyle = "#FF0000";
        crc2.fillRect(3, 3, crc2.canvas.width, crc2.canvas.height); //crc2.fillRect(x, y, width, height);
        console.log(crc2);*/
        // Dreieck zeichnen
        // for(Starbedingung, Laufbedingung, Veränderung)
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * 400;
            let y = Math.random() * 300;
            drawTriangle(x, y);
        }
    }
    function drawTriangle(_x, _y) {
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
    }
    /*crc2.beginPath();
      crc2.moveTo(120, 150);
      crc2.lineTo(120, 220);
      crc2.lineTo(200, 185);
      crc2.closePath();
      crc2.stroke();
      crc2.fill();
      crc2.fillStyle = "#0000ff";
      crc2.strokeStyle = "yellow";
      crc2.lineWidth = 7;*/
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=Canvas.js.map