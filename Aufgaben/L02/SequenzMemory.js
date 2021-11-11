"use strict";
var SequenzMemory;
(function (SequenzMemory) {
    window.addEventListener("load", handleLoad);
    let createPrompt = prompt("Enter your memory word here!");
    let inputPrompt = createPrompt;
    //let splittedArray: string [] = [""];
    let splittedArray = inputPrompt.split("");
    function handleLoad(_event) {
        mixCards();
    }
    function mixCards() {
        for (let index = 0; index < createPrompt.length; index++) {
            let randomNumber = Math.floor(Math.random() * (splittedArray.length));
            let createDiv = document.createElement("div");
            createDiv.classList.add("card" + randomNumber);
            document.body.appendChild(createDiv);
            createDiv.innerHTML = splittedArray[randomNumber];
            splittedArray.splice(randomNumber, 1);
            //console.log(splittedArray);
            //console.log(randomNumber);
        }
        setTimeout(function () {
            startGame();
        }, 100);
    }
    function startGame() {
        createDiv.addEventListener("click", logInfo);
        console.log("hello");
    }
})(SequenzMemory || (SequenzMemory = {}));
//# sourceMappingURL=SequenzMemory.js.map