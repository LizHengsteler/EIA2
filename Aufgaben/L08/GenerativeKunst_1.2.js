"use strict";
var GenerativeKunst_1;
(function (GenerativeKunst_1) {
    /* Ich hab mich ein bisschen ausprobiert, aber ich hab das Gefühl, dass ich viele Dinge besser zusammenfassen könnte,
    leider konnt ich nicht rausfinden wie, vielleicht kannst du mir da helfen oder Tipps geben:)*/
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
        for (let i = 0; i < 50; i++) {
            x = Math.random() * innerWidth;
            y = Math.random() * innerHeight;
            drawBall(x, y);
            drawLines(x, y);
            drawLines2(x, y);
            drawBubble(x, y);
            //drawCurves();
            backgroundColor();
        }
    }
    function backgroundColor() {
        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 50);
        lightness = Math.round(Math.random() * 100);
        document.body.style.backgroundColor =
            "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
    }
    /*function drawCurves(): void {
      x = Math.random() * innerWidth;
      y = Math.random() * innerHeight;
      hue = Math.round(Math.random() * 360);
      saturation = Math.round(Math.random() * 50);
      lightness = Math.round(Math.random() * 100);
      crc2.beginPath();
      crc2.moveTo(x, y);
      crc2.bezierCurveTo(20, 100, 200, 100, y, x);
      crc2.strokeStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
      crc2.lineWidth = 1;
      crc2.stroke();
    } hat mir nicht gefallen*/
    function drawLines(_x, _y) {
        x = Math.random() * innerWidth;
        y = Math.random() * innerHeight;
        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 50);
        lightness = Math.round(Math.random() * 100);
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(y, x);
        crc2.lineWidth = 1;
        crc2.strokeStyle =
            "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.stroke();
    }
    function drawLines2(_x, _y) {
        x = Math.random() * innerWidth;
        y = Math.random() * innerHeight;
        let random1 = Math.random();
        let random2 = Math.random();
        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 50);
        lightness = Math.round(Math.random() * 100);
        crc2.beginPath();
        crc2.moveTo(x, random1);
        crc2.lineTo(random2, y);
        crc2.lineWidth = 1;
        crc2.strokeStyle =
            "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.stroke();
    }
    function drawBall(_x, _y) {
        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 50);
        lightness = Math.round(Math.random() * 100);
        radius = 40;
        x = Math.random() * innerWidth;
        y = Math.random() * innerHeight;
        crc2.beginPath();
        crc2.arc(x, y, radius, 0, Math.PI * 2, false);
        crc2.fillStyle =
            "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.lineWidth = 3;
        crc2.fill();
        crc2.closePath();
    }
    function drawBubble(_x, _y) {
        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 50);
        lightness = Math.round(Math.random() * 100);
        radius = 40;
        x = Math.random() * innerWidth;
        y = Math.random() * innerHeight;
        crc2.beginPath();
        crc2.arc(x, y, radius, 0, Math.PI * 2, false);
        crc2.strokeStyle =
            "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.closePath();
    }
})(GenerativeKunst_1 || (GenerativeKunst_1 = {}));
//# sourceMappingURL=GenerativeKunst_1.2.js.map