"use strict";
var L11_2_GoldenerHerbst;
(function (L11_2_GoldenerHerbst) {
    /*Aufgabe: L11.2 Goldener Herbst
      Name: Liz Hengsteler
      Matrikel: 268386
      Datum: 22.01.2022
      Zusammenarbeit: Hannah Sättele und Lukas Dirlmeier
      Quellen: Inverted Classroom, Jirka Videos + Code
      */
    window.addEventListener("load", handleLoad);
    L11_2_GoldenerHerbst.moveables = [];
    L11_2_GoldenerHerbst.nuts = [];
    L11_2_GoldenerHerbst.golden = 0.62;
    L11_2_GoldenerHerbst.x = 0;
    L11_2_GoldenerHerbst.y = 0;
    let imageData;
    let TASK;
    (function (TASK) {
        TASK[TASK["WAIT"] = 0] = "WAIT";
        TASK[TASK["CATCH"] = 1] = "CATCH";
    })(TASK = L11_2_GoldenerHerbst.TASK || (L11_2_GoldenerHerbst.TASK = {}));
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (!canvas)
            return;
        L11_2_GoldenerHerbst.crc2 = canvas.getContext("2d");
        L11_2_GoldenerHerbst.horizon = L11_2_GoldenerHerbst.crc2.canvas.height * L11_2_GoldenerHerbst.golden;
        drawBackground();
        createSquirrels();
        createClouds();
        createLeaves();
        canvas.addEventListener("click", createRain);
        canvas.addEventListener("click", createNuts);
        //Cloud.addEventListener("mousedown", moveCloud);
        window.setInterval(update, 50);
    }
    function drawBackground() {
        let gradient = L11_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, L11_2_GoldenerHerbst.crc2.canvas.height);
        gradient.addColorStop(0, "hsl(294, 29%, 59%)");
        gradient.addColorStop(0.3, "hsl(122, 100%, 85%)");
        gradient.addColorStop(L11_2_GoldenerHerbst.golden, "hsl(305, 84%, 88%)");
        gradient.addColorStop(0.8, "hsl(297, 21%, 53%)");
        gradient.addColorStop(1, "hsl(297, 30%, 63%)");
        L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L11_2_GoldenerHerbst.crc2.fillRect(0, 0, L11_2_GoldenerHerbst.crc2.canvas.width, L11_2_GoldenerHerbst.crc2.canvas.height);
        L11_2_GoldenerHerbst.crc2.restore();
        drawSun(new L11_2_GoldenerHerbst.Vector(100, 75));
        drawMountains(new L11_2_GoldenerHerbst.Vector(0, L11_2_GoldenerHerbst.horizon), 75, 200, "grey", "white");
        drawFirs();
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 90;
        let gradient = L11_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "hsl(19, 90%, 57%)");
        gradient.addColorStop(0.5, "hsl(30, 87%, 64%, 0.5)");
        gradient.addColorStop(1, "hsl(30, 87%, 89%, 0)");
        L11_2_GoldenerHerbst.crc2.save();
        L11_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L11_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, Math.PI * 2);
        L11_2_GoldenerHerbst.crc2.fill();
        L11_2_GoldenerHerbst.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("mountains");
        let stepMin = 35;
        let stepMax = 100;
        let x = 0;
        L11_2_GoldenerHerbst.crc2.save();
        L11_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        L11_2_GoldenerHerbst.crc2.beginPath();
        L11_2_GoldenerHerbst.crc2.moveTo(0, 0);
        L11_2_GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_2_GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < L11_2_GoldenerHerbst.crc2.canvas.width);
        L11_2_GoldenerHerbst.crc2.lineTo(x, 0);
        L11_2_GoldenerHerbst.crc2.closePath();
        let gradient = L11_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.5, _colorHigh);
        L11_2_GoldenerHerbst.crc2.fillStyle = gradient;
        L11_2_GoldenerHerbst.crc2.fill();
        L11_2_GoldenerHerbst.crc2.restore();
    }
    function drawFirs() {
        let nFirs = 6;
        let x = 1;
        for (let drawn = 0; drawn < nFirs; drawn++) {
            L11_2_GoldenerHerbst.crc2.save();
            x = Math.random() - 10;
            x = (Math.random() - 0.5) * 2000;
            L11_2_GoldenerHerbst.crc2.translate(x, L11_2_GoldenerHerbst.y);
            drawFir();
            L11_2_GoldenerHerbst.crc2.restore();
        }
    }
    function drawFir() {
        L11_2_GoldenerHerbst.crc2.save();
        L11_2_GoldenerHerbst.crc2.translate(200, L11_2_GoldenerHerbst.horizon);
        L11_2_GoldenerHerbst.crc2.scale(1, 2);
        L11_2_GoldenerHerbst.crc2.beginPath();
        L11_2_GoldenerHerbst.crc2.rect(-5, -20, 10, 20);
        L11_2_GoldenerHerbst.crc2.closePath();
        L11_2_GoldenerHerbst.crc2.fillStyle = "hsl(41, 68%, 22%)";
        L11_2_GoldenerHerbst.crc2.fill();
        L11_2_GoldenerHerbst.crc2.beginPath();
        L11_2_GoldenerHerbst.crc2.moveTo(0, -70);
        L11_2_GoldenerHerbst.crc2.lineTo(-23, -45);
        L11_2_GoldenerHerbst.crc2.lineTo(-15, -50);
        L11_2_GoldenerHerbst.crc2.lineTo(-27, -27);
        L11_2_GoldenerHerbst.crc2.lineTo(-20, -32);
        L11_2_GoldenerHerbst.crc2.lineTo(-35, -7);
        L11_2_GoldenerHerbst.crc2.lineTo(0, -18);
        L11_2_GoldenerHerbst.crc2.lineTo(35, -7);
        L11_2_GoldenerHerbst.crc2.lineTo(20, -32);
        L11_2_GoldenerHerbst.crc2.lineTo(27, -27);
        L11_2_GoldenerHerbst.crc2.lineTo(15, -50);
        L11_2_GoldenerHerbst.crc2.lineTo(23, -45);
        L11_2_GoldenerHerbst.crc2.moveTo(0, -70);
        L11_2_GoldenerHerbst.crc2.fillStyle = "hsl(166, 68%, 43%)";
        L11_2_GoldenerHerbst.crc2.closePath();
        L11_2_GoldenerHerbst.crc2.fill();
        L11_2_GoldenerHerbst.crc2.restore();
        imageData = L11_2_GoldenerHerbst.crc2.getImageData(0, 0, L11_2_GoldenerHerbst.crc2.canvas.width, L11_2_GoldenerHerbst.crc2.canvas.height);
    }
    function createClouds() {
        let cloud = new L11_2_GoldenerHerbst.Cloud();
        L11_2_GoldenerHerbst.moveables.push(cloud);
    }
    function createLeaves() {
        for (let index = 0; index < 8; index++) {
            let leaf1 = new L11_2_GoldenerHerbst.Leaf();
            L11_2_GoldenerHerbst.moveables.push(leaf1);
        }
    }
    function createNuts(_event) {
        if (_event.clientY >= L11_2_GoldenerHerbst.horizon) {
            let nut = new L11_2_GoldenerHerbst.Nut;
            nut.position = new L11_2_GoldenerHerbst.Vector(_event.clientX, _event.clientY);
            L11_2_GoldenerHerbst.nuts.push(nut);
        }
    }
    function createSquirrels() {
        for (let index = 0; index < 4; index++) {
            let squirrel = new L11_2_GoldenerHerbst.Squirrel();
            L11_2_GoldenerHerbst.moveables.push(squirrel);
        }
    }
    function createRain(_event) {
        if (_event.clientY <= L11_2_GoldenerHerbst.horizon) {
            let rainDrop1 = new L11_2_GoldenerHerbst.Raindrop(new L11_2_GoldenerHerbst.Vector(L11_2_GoldenerHerbst.Vector.random(200, 300), 300));
            let rainDrop2 = new L11_2_GoldenerHerbst.Raindrop(new L11_2_GoldenerHerbst.Vector(L11_2_GoldenerHerbst.Vector.random(800, 900), 300));
            L11_2_GoldenerHerbst.moveables.push(rainDrop1, rainDrop2);
            rainDrop1.rainFall = false;
            rainDrop2.rainFall = false;
        }
    }
    /*function moveCloud() {
      
    }*/
    function update() {
        L11_2_GoldenerHerbst.crc2.putImageData(imageData, 0, 0);
        for (let moveable of L11_2_GoldenerHerbst.moveables) {
            moveable.move(1 / 100);
            moveable.draw();
        }
        for (let nut of L11_2_GoldenerHerbst.nuts) {
            nut.draw();
        }
    }
})(L11_2_GoldenerHerbst || (L11_2_GoldenerHerbst = {}));
//# sourceMappingURL=Main.js.map