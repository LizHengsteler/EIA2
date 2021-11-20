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
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        hue = Math.round(Math.random() * 360);
        saturation = Math.round(Math.random() * 100);
        lightness = Math.round(Math.random() * 100);
        crc2 = canvas.getContext("2d");
        x = Math.round(Math.random() * innerWidth);
        y = Math.round(Math.random() * innerHeight);
        drawBouncingBallBig();
    }
    function drawBouncingBallBig() {
        radius = 40;
        window.requestAnimationFrame(drawBouncingBallBig);
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
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=GenerativeKunst.js.map