"use strict";
var L10_2_GoldenerHerbst;
(function (L10_2_GoldenerHerbst) {
    /*Aufgabe: L09.2 Goldener Herbst
    Name: Liz Hengsteler
    Matrikel: 268386
    Datum: 08.01.2022
    Zusammenarbeit:
    Quellen: Inverted Classroom, Jirka Videos + Code
   
  
    */
    let canvas = document.querySelector("canvas");
    window.addEventListener("load", handleLoad);
    let leaves = [];
    let clouds = [];
    let squirrels = [];
    L10_2_GoldenerHerbst.golden = 0.62;
    L10_2_GoldenerHerbst.x = 0;
    L10_2_GoldenerHerbst.y = 0;
    function handleLoad(_event) {
        console.log("loaded");
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (!canvas)
            return;
        L10_2_GoldenerHerbst.crc2 = canvas.getContext("2d");
        L10_2_GoldenerHerbst.horizon = L10_2_GoldenerHerbst.crc2.canvas.height * L10_2_GoldenerHerbst.golden;
        drawBackground();
        //drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        //drawSquirrels();
        createClouds(15);
        createLeaves(13);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        //console.log("background");
        let gradient = L10_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, L10_2_GoldenerHerbst.crc2.canvas.height);
        gradient.addColorStop(0, "hsl(294, 29%, 59%)");
        gradient.addColorStop(0.3, "hsl(122, 100%, 85%)");
        gradient.addColorStop(L10_2_GoldenerHerbst.golden, "hsl(305, 84%, 88%)");
        gradient.addColorStop(0.8, "hsl(297, 21%, 53%)");
        gradient.addColorStop(1, "hsl(297, 30%, 63%)");
        L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L10_2_GoldenerHerbst.crc2.fillRect(0, 0, L10_2_GoldenerHerbst.crc2.canvas.width, L10_2_GoldenerHerbst.crc2.canvas.height);
        L10_2_GoldenerHerbst.crc2.restore();
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: L10_2_GoldenerHerbst.horizon }, 75, 200, "grey", "white");
        drawFirs();
    }
    function drawSun(_position) {
        //console.log("sun", _position);
        let r1 = 20;
        let r2 = 90;
        let gradient = L10_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "hsl(19, 90%, 57%)");
        gradient.addColorStop(0.5, "hsl(30, 87%, 64%, 0.5)");
        gradient.addColorStop(1, "hsl(30, 87%, 89%, 0)");
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L10_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("mountains");
        let stepMin = 35;
        let stepMax = 100;
        let x = 0;
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L10_2_GoldenerHerbst.crc2.beginPath();
        L10_2_GoldenerHerbst.crc2.moveTo(0, 0);
        L10_2_GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_2_GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < L10_2_GoldenerHerbst.crc2.canvas.width);
        L10_2_GoldenerHerbst.crc2.lineTo(x, 0);
        L10_2_GoldenerHerbst.crc2.closePath();
        let gradient = L10_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.5, _colorHigh);
        L10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.restore();
    }
    function drawFirs() {
        let nFirs = 6;
        let x = 1;
        for (let drawn = 0; drawn < nFirs; drawn++) {
            L10_2_GoldenerHerbst.crc2.save();
            x = Math.random() - 10;
            x = (Math.random() - 0.5) * 2000;
            L10_2_GoldenerHerbst.crc2.translate(x, L10_2_GoldenerHerbst.y);
            drawFir();
            L10_2_GoldenerHerbst.crc2.restore();
        }
    }
    function drawFir() {
        //console.log("Fir");
        L10_2_GoldenerHerbst.crc2.save();
        L10_2_GoldenerHerbst.crc2.translate(200, L10_2_GoldenerHerbst.horizon);
        L10_2_GoldenerHerbst.crc2.scale(1, 2);
        L10_2_GoldenerHerbst.crc2.beginPath();
        L10_2_GoldenerHerbst.crc2.rect(-5, -20, 10, 20);
        L10_2_GoldenerHerbst.crc2.closePath();
        L10_2_GoldenerHerbst.crc2.fillStyle = "hsl(41, 68%, 22%)";
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.beginPath();
        L10_2_GoldenerHerbst.crc2.moveTo(0, -70);
        L10_2_GoldenerHerbst.crc2.lineTo(-23, -45);
        L10_2_GoldenerHerbst.crc2.lineTo(-15, -50);
        L10_2_GoldenerHerbst.crc2.lineTo(-27, -27);
        L10_2_GoldenerHerbst.crc2.lineTo(-20, -32);
        L10_2_GoldenerHerbst.crc2.lineTo(-35, -7);
        L10_2_GoldenerHerbst.crc2.lineTo(0, -18);
        L10_2_GoldenerHerbst.crc2.lineTo(35, -7);
        L10_2_GoldenerHerbst.crc2.lineTo(20, -32);
        L10_2_GoldenerHerbst.crc2.lineTo(27, -27);
        L10_2_GoldenerHerbst.crc2.lineTo(15, -50);
        L10_2_GoldenerHerbst.crc2.lineTo(23, -45);
        L10_2_GoldenerHerbst.crc2.moveTo(0, -70);
        L10_2_GoldenerHerbst.crc2.fillStyle = "hsl(166, 68%, 43%)";
        L10_2_GoldenerHerbst.crc2.closePath();
        L10_2_GoldenerHerbst.crc2.fill();
        L10_2_GoldenerHerbst.crc2.restore();
    }
    function createClouds(_nClouds) {
        for (let index = 0; index < _nClouds; index++) {
            let cloud = new L10_2_GoldenerHerbst.Cloud(new L10_2_GoldenerHerbst.Vector(Math.random() * 200, Math.random() * 200), new L10_2_GoldenerHerbst.Vector(Math.random() * 200, Math.random() * 400));
            clouds.push(cloud);
        }
    }
    function createLeaves(_nLeaves) {
        for (let i = 0; i < _nLeaves; i++) {
            let leaf1 = new L10_2_GoldenerHerbst.Leaf(new L10_2_GoldenerHerbst.Vector(Math.random() * 200, Math.random() * 200), new L10_2_GoldenerHerbst.Vector(Math.random() * 200, Math.random() * 400), 2);
            leaves.push(leaf1);
        }
    }
    function update() {
        for (let cloud of clouds) {
            cloud.draw();
            cloud.move();
        }
        for (let leaf1 of leaves) {
            leaf1.draw();
            leaf1.move();
        }
        window.requestAnimationFrame(createLeaves);
    }
    /*function drawSquirrels(): void {
      console.log("squirrel");
    }*/
})(L10_2_GoldenerHerbst || (L10_2_GoldenerHerbst = {}));
//# sourceMappingURL=Main.js.map