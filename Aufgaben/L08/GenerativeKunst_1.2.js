"use strict";
var GenerativeKunst_1;
(function (GenerativeKunst_1) {
    let crc2;
    let x;
    let y;
    let radius;
    let hue;
    let saturation;
    let lightness;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2 = canvas.getContext("2d");
        //console.log(crc2);
        for (let i = 0; i < 50; i++) {
            x = Math.random() * innerWidth;
            y = Math.random() * innerHeight;
            drawTriangle(x, y);
            //drawBoxes(x, y);
        }
        for (let i = 0; i < 50; i++) {
            x = Math.random() * innerWidth;
            y = Math.random() * innerHeight;
            //drawTriangle(x, y);
            drawBoxes(x, y);
        }
    }
    function drawTriangle(_x, _y) {
        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 50);
        lightness = Math.round(Math.random() * 100);
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 70);
        crc2.lineTo(_x + 80, _y + 35);
        crc2.closePath();
        crc2.fillStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.strokeStyle = "hsl(";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.fill();
        /*crc2.beginPath();
        crc2.fillRect(100, 100, 100, 100);
        crc2.closePath();*/
    }
    function drawBoxes(_x, _y) {
        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 50);
        lightness = Math.round(Math.random() * 100);
        crc2.beginPath();
        crc2.fillRect(100, 100, 100, 100);
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
    }
})(GenerativeKunst_1 || (GenerativeKunst_1 = {}));
//# sourceMappingURL=GenerativeKunst_1.2.js.map