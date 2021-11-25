namespace GenerativeKunst_1 {
  /*Aufgabe: L08.1 Generative Kunst
  Name: Liz Hengsteler
  Matrikel: 268386
  Datum: 20.11.2021
  Quellen: */

  /* Ich hab mich ein bisschen ausprobiert, aber ich hab das Gefühl, dass ich viele Dinge besser zusammenfassen könnte,
  leider konnt ich nicht rausfinden wie, vielleicht kannst du mir da helfen oder Tipps geben:)

  21.11.|14:53 Zwei coole Abgaben, wenn du noch mit mehr Bedingungen gearbeitet hättest, hätte ich nicht viel zu bemerken.
   Zuerst sollte aber die Änderung der BackgroundColor nicht in die Schleife rein, da letztendlich nur eine Hintergrundfarbe 
   zu sehen sein wird. Beide Lines-Funktionen zeichnen nur eine Line, da wäre Singular im Funktionsnamen besser. 
   Einiges könnte echt noch gut zusammengefasst werden: durch eine Abfrage in der Schleife könnten die Lines-Funktionen 
   zu einer zusammengefasst werden (auch Ball und Bubble), indem sie z.B. einen weiteren Parameter annehmen und der 
   bei jeder zweiter Schleifeninteration true/ false ist; dann könnten die paar unterschiedlichen Zeilen in den Funktionen 
   je nach dem boolean durchgeführt werden. Auch die Erstellung neuer Zahlenwerte für die Farbe könnten sehr gut in eine 
   Funktion passen. Sonst wie gesagt sehr schön (MD)*/
  let crc2: CanvasRenderingContext2D;
  let x: number;
  let y: number;
  let radius: number;
  let hue: number;
  let saturation: number;
  let lightness: number;
  window.addEventListener("load", hndLoad);

  function hndLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    crc2 = canvas.getContext("2d")!;
    backgroundColor();

    for (let i: number = 0; i < 50; i++) {
      x = Math.random() * innerWidth;
      y = Math.random() * innerHeight;

      drawBall(x, y);
      drawLines(x, y);
      drawLines2(x, y);
      drawBubble(x, y);
      
    }
  }

  function backgroundColor(): void {
    hue = Math.round(Math.random() * 360);
    saturation = Math.round(Math.random() * 50);
    lightness = Math.round(Math.random() * 100);
    document.body.style.backgroundColor =
      "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
  }


  function drawLines(_x: number, _y: number): void {
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

  function drawLines2(_x: number, _y: number): void {
    x = Math.random() * innerWidth;
    y = Math.random() * innerHeight;
    let random1: number = Math.random();
    let random2: number = Math.random();
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

  function drawBall(_x: number, _y: number): void {
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

  function drawBubble(_x: number, _y: number): void {
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
}
