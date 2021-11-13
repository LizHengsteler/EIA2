"use strict";
//Zusammenarbeit mit Theo
var SequenzmemorySettings;
(function (SequenzmemorySettings) {
    window.addEventListener("load", handleLoad);
    let startButton;
    let nodeList;
    let sequenceArray;
    let counter = 0;
    let frame;
    let slider;
    let backgroundColor;
    let cardColor;
    let fontColor;
    let input;
    let stepperTime;
    //let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
    //console.log(formData);
    function handleLoad(_event) {
        input = document.querySelector("#codeWord");
        frame = document.querySelector("#formFrame");
        //let slider: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("input#size");
        startButton = document.getElementById("startButton");
        startButton.addEventListener("click", startGame);
        frame.addEventListener("change", handleChange);
        //handleChange(_event);
    }
    //console.log(startGame);
    function handleChange(_event) {
        /*let inputs: NodeListOf<HTMLInputElement> =
          document.querySelectorAll("input");
        console.log(inputs);
        let font: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        console.log(font.value);*/
        let formData = new FormData(document.forms[0]);
        //console.log(formData);
        for (let entry of formData) {
            console.log(entry);
        }
    }
    function startGame() {
        frame = document.getElementById("formFrame");
        frame.classList.add("hidden");
        sequenceArray = input.value.split("");
        for (let index = 0; index <= sequenceArray.length; index++) {
            let shuffleNumber = Math.floor(Math.random() * sequenceArray.length);
            console.log(shuffleNumber);
            let createSpan = document.createElement("span");
            createSpan.innerHTML = sequenceArray[shuffleNumber];
            sequenceArray.splice(shuffleNumber, 1);
            console.log(sequenceArray);
        }
        setTimeout(function () {
            hideCards();
        }, 2000);
    }
    function hideCards() {
        console.log("Hello");
    }
})(SequenzmemorySettings || (SequenzmemorySettings = {}));
//# sourceMappingURL=SequenzmemorySettings.js.map