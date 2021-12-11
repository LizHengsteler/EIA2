"use strict";
var L09_2_GoldenerHerbst;
(function (L09_2_GoldenerHerbst) {
    let canvas = document.querySelector("canvas");
    window.addEventListener("load", handleLoad);
    let leaves = [];
    let clouds = [];
    let squirrels = [];
    L09_2_GoldenerHerbst.golden = 0.62;
    L09_2_GoldenerHerbst.x = 0;
    L09_2_GoldenerHerbst.y = 0;
    function handleLoad(_event) {
        console.log("loaded");
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (!canvas)
            return;
        L09_2_GoldenerHerbst.crc2 = canvas.getContext("2d");
        L09_2_GoldenerHerbst.horizon = L09_2_GoldenerHerbst.crc2.canvas.height * L09_2_GoldenerHerbst.golden;
        drawBackground();
        //drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawFirs();
        //drawSquirrels();
        createLeaves(13);
    }
    function drawBackground() {
        //console.log("background");
        let gradient = L09_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, L09_2_GoldenerHerbst.crc2.canvas.height);
        gradient.addColorStop(0, "hsl(294, 29%, 59%)");
        gradient.addColorStop(0.3, "hsl(122, 100%, 85%)");
        gradient.addColorStop(L09_2_GoldenerHerbst.golden, "hsl(305, 84%, 88%)");
        gradient.addColorStop(0.8, "hsl(297, 21%, 53%)");
        gradient.addColorStop(1, "hsl(297, 30%, 63%)");
        L09_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L09_2_GoldenerHerbst.crc2.fillRect(0, 0, L09_2_GoldenerHerbst.crc2.canvas.width, L09_2_GoldenerHerbst.crc2.canvas.height);
        L09_2_GoldenerHerbst.crc2.restore();
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: L09_2_GoldenerHerbst.horizon }, 75, 200, "grey", "white");
        createClouds(15);
        animate();
    }
    function drawSun(_position) {
        //console.log("sun", _position);
        let r1 = 20;
        let r2 = 90;
        let gradient = L09_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "hsl(19, 90%, 57%)");
        gradient.addColorStop(0.5, "hsl(30, 87%, 64%, 0.5)");
        gradient.addColorStop(1, "hsl(30, 87%, 89%, 0)");
        L09_2_GoldenerHerbst.crc2.save();
        L09_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L09_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L09_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
        L09_2_GoldenerHerbst.crc2.fill();
        L09_2_GoldenerHerbst.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("mountains");
        let stepMin = 35;
        let stepMax = 100;
        let x = 0;
        L09_2_GoldenerHerbst.crc2.save();
        L09_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L09_2_GoldenerHerbst.crc2.beginPath();
        L09_2_GoldenerHerbst.crc2.moveTo(0, 0);
        L09_2_GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_2_GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < L09_2_GoldenerHerbst.crc2.canvas.width);
        L09_2_GoldenerHerbst.crc2.lineTo(x, 0);
        L09_2_GoldenerHerbst.crc2.closePath();
        let gradient = L09_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.5, _colorHigh);
        L09_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L09_2_GoldenerHerbst.crc2.fill();
        L09_2_GoldenerHerbst.crc2.restore();
    }
    function drawFirs() {
        let nFirs = 6;
        let x = 1;
        for (let drawn = 0; drawn < nFirs; drawn++) {
            L09_2_GoldenerHerbst.crc2.save();
            x = Math.random() - 10;
            x = (Math.random() - 0.5) * 2000;
            L09_2_GoldenerHerbst.crc2.translate(x, L09_2_GoldenerHerbst.y);
            drawFir();
            L09_2_GoldenerHerbst.crc2.restore();
        }
    }
    function drawFir() {
        //console.log("Fir");
        L09_2_GoldenerHerbst.crc2.save();
        L09_2_GoldenerHerbst.crc2.translate(200, L09_2_GoldenerHerbst.horizon);
        L09_2_GoldenerHerbst.crc2.scale(1, 2);
        L09_2_GoldenerHerbst.crc2.beginPath();
        L09_2_GoldenerHerbst.crc2.rect(-5, -20, 10, 20);
        L09_2_GoldenerHerbst.crc2.closePath();
        L09_2_GoldenerHerbst.crc2.fillStyle = "hsl(41, 68%, 22%)";
        L09_2_GoldenerHerbst.crc2.fill();
        L09_2_GoldenerHerbst.crc2.beginPath();
        L09_2_GoldenerHerbst.crc2.moveTo(0, -70);
        L09_2_GoldenerHerbst.crc2.lineTo(-23, -45);
        L09_2_GoldenerHerbst.crc2.lineTo(-15, -50);
        L09_2_GoldenerHerbst.crc2.lineTo(-27, -27);
        L09_2_GoldenerHerbst.crc2.lineTo(-20, -32);
        L09_2_GoldenerHerbst.crc2.lineTo(-35, -7);
        L09_2_GoldenerHerbst.crc2.lineTo(0, -18);
        L09_2_GoldenerHerbst.crc2.lineTo(35, -7);
        L09_2_GoldenerHerbst.crc2.lineTo(20, -32);
        L09_2_GoldenerHerbst.crc2.lineTo(27, -27);
        L09_2_GoldenerHerbst.crc2.lineTo(15, -50);
        L09_2_GoldenerHerbst.crc2.lineTo(23, -45);
        L09_2_GoldenerHerbst.crc2.moveTo(0, -70);
        L09_2_GoldenerHerbst.crc2.fillStyle = "hsl(166, 68%, 43%)";
        L09_2_GoldenerHerbst.crc2.closePath();
        L09_2_GoldenerHerbst.crc2.fill();
        L09_2_GoldenerHerbst.crc2.restore();
    }
    function createClouds(_nClouds) {
        //console.log("cloud", _position, _size);
        //let nParticles: number = 30;
        for (let index = 0; index < _nClouds; index++) {
            let cloud = new L09_2_GoldenerHerbst.Cloud();
            clouds.push(cloud);
        }
        for (let cloud of clouds) {
            cloud.draw();
            cloud.move();
        }
    }
    /*for (let drawn: number = 0; drawn < nParticles; drawn++) {
        crc2.save();
        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = -(Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();
      }
      crc2.restore();*/
    function createLeaves(_nLeaves) {
        let nLeaves = 15;
        let x = Math.round(Math.random());
        let y = Math.round(Math.random());
        for (let i = 0; i < _nLeaves; i++) {
            let leave1 = new Leave(1, 2.2, 2, 3);
            leaves.push(leave1);
        }
        for (let drawn = 0; drawn < nLeaves; drawn++) {
            L09_2_GoldenerHerbst.crc2.save();
            x += x + Math.round(Math.random());
            y += y + Math.round(Math.random());
            L09_2_GoldenerHerbst.crc2.translate(x, y);
            L09_2_GoldenerHerbst.crc2.rotate(x);
            L09_2_GoldenerHerbst.crc2.restore();
        }
    }
    /*function drawSquirrels(): void {
      console.log("squirrel");
    }*/
})(L09_2_GoldenerHerbst || (L09_2_GoldenerHerbst = {}));
//# sourceMappingURL=Main.js.map