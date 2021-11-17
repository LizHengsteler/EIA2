"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    let crc2;
    let x;
    let y;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //console.log(canvas);
        crc2 = canvas.getContext("2d");
        for (let i = 0; i < 100; i++) {
            x = Math.random() * 100;
            y = Math.random() * 100;
        }
        drawBalls();
        drawBouncingBall();
    }
    function drawBalls() {
        for (let i = 0; i < 100; i++) {
            x = Math.random() * 100;
            y = Math.random() * 100;
        }
        let dx = 2;
        let dy = 2;
        let radius = 40;
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
    function drawBouncingBall() {
        let dx = 2;
        let dy = 2;
        let radius = 40;
        window.requestAnimationFrame(drawBouncingBall);
        let purple = Math.floor(Math.random() * 200);
        let yellow = Math.floor(Math.random() * 400);
        let blue = Math.floor(Math.random() * 600);
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
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=GenerativeKunst.js.map